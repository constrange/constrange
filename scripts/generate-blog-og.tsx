import crypto from "node:crypto"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { chromium } from "playwright"
import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { posts } from "../src/blog-content.ts"
import { PostArt } from "../src/components/site/PostArt.tsx"

export const OG_VIEWPORT_W = 1200
export const OG_VIEWPORT_H = 630
export const OG_DEVICE_SCALE = 2
export const OG_WIDTH = OG_VIEWPORT_W * OG_DEVICE_SCALE
export const OG_HEIGHT = OG_VIEWPORT_H * OG_DEVICE_SCALE
export const OG_JPEG_QUALITY = 92

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, "..")
const outDir = path.join(root, "public", "og", "blog")
const workDir = path.join(root, ".og-render")
const manifestPath = path.join(workDir, "manifest.json")

const OG_CSS = `
html, body { margin: 0; padding: 0; background: #f3f2ec; }
.og-canvas { width: ${OG_VIEWPORT_W}px; height: ${OG_VIEWPORT_H}px; overflow: hidden; }
.og-canvas .post-art-frame.is-hero {
  width: 100%; height: 100%; max-width: none; aspect-ratio: auto;
  box-shadow: none; padding: 11% 9%;
}
.og-canvas .post-art-stack { width: min(88%, 900px); }
.og-canvas .post-art-chip { font-size: 11px; padding: 10px 15px; }
.og-canvas .post-art-cell-mid {
  font-size: 19px; padding: 14px 17px; width: min(100%, max(72%, 300px));
}
.og-canvas .post-art-cell-title { font-size: 30px; padding: 17px 17px; line-height: 1.16; }
`

function postHash(post: (typeof posts)[number]) {
  return crypto
    .createHash("sha256")
    .update(JSON.stringify({ title: post.title, category: post.category, art: post.art }))
    .digest("hex")
    .slice(0, 16)
}

function loadManifest(): Record<string, string> {
  if (!fs.existsSync(manifestPath)) return {}
  return JSON.parse(fs.readFileSync(manifestPath, "utf8")) as Record<string, string>
}

function buildStylesheet() {
  const toDataUri = (filePath: string) =>
    `data:font/woff2;base64,${fs.readFileSync(filePath).toString("base64")}`

  const inter = toDataUri(
    path.join(root, "node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2"),
  )
  const hedvig = toDataUri(
    path.join(
      root,
      "node_modules/@fontsource/hedvig-letters-serif/files/hedvig-letters-serif-latin-400-normal.woff2",
    ),
  )

  const fontsCss = fs
    .readFileSync(path.join(root, "src/assets/css/fonts.css"), "utf8")
    .replace("/assets/fonts/inter-latin-wght-normal.woff2", inter)
    .replace("/assets/fonts/hedvig-letters-serif-latin-400-normal.woff2", hedvig)

  const siteCss = fs.readFileSync(path.join(root, "src/site.css"), "utf8")
  return `${fontsCss}\n${siteCss}\n${OG_CSS}`
}

function renderArt(post: (typeof posts)[number]) {
  return renderToStaticMarkup(
    createElement(PostArt, {
      art: post.art,
      title: post.title,
      category: post.category,
      variant: "hero",
    }),
  )
}

function shellHtml(stylesheet: string) {
  return `<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="UTF-8" />
<style>${stylesheet}</style>
</head>
<body><div class="og-canvas" id="og"></div></body>
</html>`
}

async function main() {
  const started = Date.now()
  fs.mkdirSync(outDir, { recursive: true })
  fs.mkdirSync(workDir, { recursive: true })

  const manifest = loadManifest()
  const stylesheet = buildStylesheet()
  const pending = posts.filter((post) => {
    const hash = postHash(post)
    const out = path.join(outDir, `${post.slug}.jpg`)
    return manifest[post.slug] !== hash || !fs.existsSync(out)
  })

  if (pending.length === 0) {
    console.log(`og images up to date (${posts.length} posts)`)
    return
  }

  const workers = Math.min(6, pending.length, os.cpus().length)
  const browser = await chromium.launch()
  const chunks: (typeof posts)[number][][] = Array.from({ length: workers }, () => [])
  pending.forEach((post, i) => chunks[i % workers].push(post))

  await Promise.all(
    chunks.map(async (chunk) => {
      if (chunk.length === 0) return

      const page = await browser.newPage({
        viewport: { width: OG_VIEWPORT_W, height: OG_VIEWPORT_H },
        deviceScaleFactor: OG_DEVICE_SCALE,
      })

      await page.setContent(shellHtml(stylesheet), { waitUntil: "domcontentloaded" })
      await page.evaluate(() => document.fonts.ready)

      for (const post of chunk) {
        const art = renderArt(post)
        await page.evaluate((html) => {
          const root = document.getElementById("og")
          if (root) root.innerHTML = html
        }, art)

        await page.locator(".og-canvas").screenshot({
          path: path.join(outDir, `${post.slug}.jpg`),
          type: "jpeg",
          quality: OG_JPEG_QUALITY,
          animations: "disabled",
        })

        manifest[post.slug] = postHash(post)
      }

      await page.close()
    }),
  )

  await browser.close()

  for (const file of fs.readdirSync(outDir)) {
    if (file.endsWith(".png") || file.endsWith(".svg")) fs.unlinkSync(path.join(outDir, file))
  }

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))

  const elapsed = ((Date.now() - started) / 1000).toFixed(1)
  console.log(`generated ${pending.length} og images (${OG_WIDTH}×${OG_HEIGHT} JPEG) in ${elapsed}s`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
