import crypto from "node:crypto"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { PurgeCSS } from "purgecss"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, "..")
const siteDir = path.join(root, "_site")
const manifest = JSON.parse(fs.readFileSync(path.join(root, ".build", "assets-manifest.json"), "utf8"))

const homeHtml = fs.readFileSync(path.join(siteDir, "index.html"), "utf8")
const cssPath = path.join(siteDir, manifest.css.replace(/^\//, ""))
const css = fs.readFileSync(cssPath, "utf8")

const [{ css: purged }] = await new PurgeCSS().purge({
  content: [{ raw: homeHtml, extension: "html" }],
  css: [{ raw: css }],
  safelist: {
    standard: ["active", "open", "in", "stuck", /^is-/, /^on-/, /^reveal/],
    deep: [/mega/, /nav/, /header/, /mobile/, /cookie/, /burger/, /announcement/, /footer/, /marquee/, /product-/, /stat-/, /studio-/, /chip/, /hero/, /platform/],
    greedy: [/^lang-/, /^post-/, /^uc-/, /^cx-/, /^insight-/, /^about-/],
  },
})

const hash = crypto.createHash("sha256").update(purged).digest("hex").slice(0, 10)
const homeCssFile = `site.home.${hash}.css`
const homeCssPath = path.join(siteDir, "assets/css", homeCssFile)
fs.writeFileSync(homeCssPath, purged)

const homeCssUrl = `/assets/css/${homeCssFile}`
const updatedHtml = homeHtml.replaceAll(manifest.css, homeCssUrl)
fs.writeFileSync(path.join(siteDir, "index.html"), updatedHtml)

console.log(
  `purged homepage css (${Math.round(css.length / 1024)}kb -> ${Math.round(purged.length / 1024)}kb)`,
)
