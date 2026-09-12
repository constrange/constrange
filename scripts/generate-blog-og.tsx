import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { posts } from "../src/blog-content.ts"
import type { BlogTone } from "../src/blog/types.ts"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, "..")
const outDir = path.join(root, "public", "og", "blog")

const toneColors: Record<BlogTone, { a: string; b: string; c: string; chip: string }> = {
  ink: { a: "#d8d0ec", b: "#8898c8", c: "#f4f2fc", chip: "#4a3890" },
  field: { a: "#f0ecc0", b: "#98c888", c: "#fcfce8", chip: "#3a4820" },
  slate: { a: "#d0dce4", b: "#7890a0", c: "#f4f6f8", chip: "#2c3844" },
  plum: { a: "#dcd0f0", b: "#88a0d0", c: "#f8f4fc", chip: "#5a48a0" },
  coral: { a: "#f8dcd4", b: "#d0a0c0", c: "#fff4f0", chip: "#b85848" },
  dusk: { a: "#d0d0ec", b: "#8090d0", c: "#f6f6fc", chip: "#4858b0" },
  amber: { a: "#f8ecc0", b: "#a8d080", c: "#fffcf0", chip: "#a87820" },
  moss: { a: "#dce8c0", b: "#78b088", c: "#f8fcf0", chip: "#3a6830" },
  wine: { a: "#ecd0d8", b: "#c08898", c: "#fcf4f6", chip: "#783848" },
  tide: { a: "#c8e8f0", b: "#68a8c0", c: "#f0fafc", chip: "#187890" },
  pine: { a: "#cce0d4", b: "#68a080", c: "#f4faf6", chip: "#285840" },
  frost: { a: "#dceef4", b: "#88b0c8", c: "#f8fcff", chip: "#487090" },
  clay: { a: "#ecd8c4", b: "#c0a080", c: "#fcf8f4", chip: "#785838" },
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
}

function wrapTitle(title: string, max = 48) {
  if (title.length <= max) return [title]
  const words = title.split(" ")
  const lines: string[] = []
  let line = ""
  for (const word of words) {
    const next = line ? `${line} ${word}` : word
    if (next.length > max && line) {
      lines.push(line)
      line = word
    } else {
      line = next
    }
  }
  if (line) lines.push(line)
  return lines.slice(0, 3)
}

function buildOgSvg(post: (typeof posts)[number]) {
  const colors = toneColors[post.art.tone]
  const titleLines = wrapTitle(post.title)
  const tag = (post.category ?? post.art.label).toUpperCase()
  const subtitle = post.art.cells[0]
  const titleBoxH = 44 + titleLines.length * 54
  const titleStartY = 332 - (titleLines.length - 1) * 18

  const titleSvg = titleLines
    .map((line, i) => {
      const y = titleStartY + i * 54
      return `<text x="104" y="${y}" font-family="Georgia, 'Times New Roman', serif" font-size="44" fill="#121212">${escapeXml(line)}</text>`
    })
    .join("\n  ")

  const tagWidth = Math.min(420, 24 + tag.length * 11)

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${colors.c}"/>
      <stop offset="45%" stop-color="${colors.a}"/>
      <stop offset="100%" stop-color="${colors.b}"/>
    </linearGradient>
    <pattern id="dots" width="5" height="5" patternUnits="userSpaceOnUse">
      <circle cx="2.5" cy="2.5" r="1.05" fill="#000"/>
    </pattern>
    <filter id="dither" x="0" y="0">
      <feTurbulence type="fractalNoise" baseFrequency="1.35" numOctaves="1" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
      <feComponentTransfer><feFuncA type="discrete" tableValues="0 0 1"/></feComponentTransfer>
    </filter>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#dots)" opacity="0.14"/>
  <rect width="1200" height="630" filter="url(#dither)" opacity="0.55"/>
  <rect x="88" y="96" width="${tagWidth}" height="40" fill="${colors.chip}"/>
  <text x="104" y="122" font-family="ui-monospace, Menlo, monospace" font-size="13" letter-spacing="2" fill="#fff">${escapeXml(tag)}</text>
  <rect x="88" y="148" width="560" height="54" fill="rgba(255,255,255,0.74)" stroke="#131313" stroke-width="1.5"/>
  <text x="104" y="182" font-family="Inter, Arial, sans-serif" font-size="22" fill="#131313">${escapeXml(subtitle)}</text>
  <rect x="88" y="204" width="760" height="${titleBoxH}" fill="#fff" stroke="#131313" stroke-width="1.5"/>
  ${titleSvg}
  <text x="88" y="562" font-family="ui-monospace, Menlo, monospace" font-size="14" letter-spacing="2" fill="#271675">CONSTRANGE</text>
</svg>`
}

fs.mkdirSync(outDir, { recursive: true })

for (const post of posts) {
  fs.writeFileSync(path.join(outDir, `${post.slug}.svg`), buildOgSvg(post))
}

console.log(`generated ${posts.length} blog OG images in public/og/blog/`)
