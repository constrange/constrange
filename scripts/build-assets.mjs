import crypto from "node:crypto"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import * as esbuild from "esbuild"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, "..")
const generatedAssets = path.join(root, "generated", "assets")
const buildDir = path.join(root, ".build")
const isProd = process.env.NODE_ENV === "production"

const interFont = path.join(
  root,
  "node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
)
const hedvigFont = path.join(
  root,
  "node_modules/@fontsource/hedvig-letters-serif/files/hedvig-letters-serif-latin-400-normal.woff2",
)

function hashContent(value) {
  return crypto.createHash("sha256").update(value).digest("hex").slice(0, 10)
}

function minifyCss(input) {
  if (!isProd) return input
  return esbuild.transformSync(input, { loader: "css", minify: true }).code
}

fs.mkdirSync(path.join(generatedAssets, "css"), { recursive: true })
fs.mkdirSync(path.join(generatedAssets, "fonts"), { recursive: true })
fs.mkdirSync(buildDir, { recursive: true })

const siteCss = [
  fs.readFileSync(path.join(root, "src/assets/css/fonts.css"), "utf8"),
  fs.readFileSync(path.join(root, "src/site.css"), "utf8"),
].join("\n")

const minifiedSiteCss = minifyCss(siteCss)
const cssHash = hashContent(minifiedSiteCss)
const cssFile = `site.${cssHash}.css`
fs.writeFileSync(path.join(generatedAssets, "css", cssFile), minifiedSiteCss)

const criticalCssSource = fs.readFileSync(path.join(root, "src/critical.css"), "utf8")
const criticalCss = minifyCss(criticalCssSource)

await esbuild.build({
  entryPoints: [path.join(root, "src/hydrate.tsx")],
  bundle: true,
  outfile: path.join(generatedAssets, "site.js"),
  format: "esm",
  platform: "browser",
  target: "es2022",
  jsx: "automatic",
  alias: {
    "@": path.join(root, "src"),
  },
  loader: {
    ".woff2": "file",
  },
  minify: isProd,
  sourcemap: !isProd,
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV ?? "development"),
  },
})

const jsSource = fs.readFileSync(path.join(generatedAssets, "site.js"))
const jsHash = hashContent(jsSource)
const jsFile = `site.${jsHash}.js`
fs.renameSync(path.join(generatedAssets, "site.js"), path.join(generatedAssets, jsFile))
if (!isProd && fs.existsSync(path.join(generatedAssets, "site.js.map"))) {
  fs.renameSync(path.join(generatedAssets, "site.js.map"), path.join(generatedAssets, `${jsFile}.map`))
}

fs.copyFileSync(interFont, path.join(generatedAssets, "fonts", "inter-latin-wght-normal.woff2"))
fs.copyFileSync(hedvigFont, path.join(generatedAssets, "fonts", "hedvig-letters-serif-latin-400-normal.woff2"))

const manifest = {
  css: `/assets/css/${cssFile}`,
  js: `/assets/${jsFile}`,
  cssBytes: Buffer.byteLength(minifiedSiteCss, "utf8"),
  jsBytes: jsSource.length,
  criticalCss,
}

fs.writeFileSync(path.join(buildDir, "assets-manifest.json"), JSON.stringify(manifest, null, 2))
console.log("built client assets")
