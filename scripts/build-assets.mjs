import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import * as esbuild from "esbuild"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, "..")
const generatedAssets = path.join(root, "generated", "assets")
const fontSource = path.join(
  root,
  "node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
)

fs.mkdirSync(path.join(generatedAssets, "css"), { recursive: true })
fs.mkdirSync(path.join(generatedAssets, "fonts"), { recursive: true })

const siteCss = [
  fs.readFileSync(path.join(root, "src/assets/css/fonts.css"), "utf8"),
  fs.readFileSync(path.join(root, "src/site.css"), "utf8"),
].join("\n")
fs.writeFileSync(path.join(generatedAssets, "css", "site.css"), siteCss)

fs.copyFileSync(fontSource, path.join(generatedAssets, "fonts", "inter-latin-wght-normal.woff2"))

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
  minify: process.env.NODE_ENV === "production",
  sourcemap: process.env.NODE_ENV !== "production",
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV ?? "development"),
  },
})

console.log("built client assets")
