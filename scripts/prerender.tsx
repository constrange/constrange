import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { renderToString } from "react-dom/server"
import { StrictMode } from "react"
import { StaticRouter } from "react-router-dom/server"
import { AppRoutes } from "../src/AppRoutes.tsx"
import { DEFAULT_OG, jsonLdFor, resolveSeo, SITE_NAME } from "../src/seo.ts"
import { notFoundRoute, redirectRoutes, staticRoutes } from "./routes.ts"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, "..")
const generated = path.join(root, "generated")

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
}

function routeOutputFile(route: string) {
  if (route === "/") return path.join(generated, "index.html")
  const relative = route.replace(/^\//, "")
  return path.join(generated, relative, "index.html")
}

function renderHead(pathname: string) {
  const seo = resolveSeo(pathname)
  const image = seo.ogImage ?? DEFAULT_OG
  const jsonLd = JSON.stringify(jsonLdFor(seo))
  const prefix = pathname === "/" ? ' prefix="og: https://ogp.me/ns#"' : ""

  return `<!doctype html>
<html lang="en-GB"${prefix}>
<head>
<meta charset="UTF-8" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="apple-touch-icon" href="/favicon.svg" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="color-scheme" content="light" />
<meta name="description" content="${escapeHtml(seo.description)}" />
<meta name="theme-color" content="#f3f2ec" />
<meta name="robots" content="${escapeHtml(seo.robots)}" />
<meta name="author" content="${escapeHtml(SITE_NAME)}" />
<link rel="canonical" href="${escapeHtml(seo.canonical)}" />
<link rel="manifest" href="/site.webmanifest" />
<meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />
<meta property="og:type" content="${escapeHtml(seo.ogType)}" />
<meta property="og:title" content="${escapeHtml(seo.title)}" />
<meta property="og:description" content="${escapeHtml(seo.description)}" />
<meta property="og:url" content="${escapeHtml(seo.canonical)}" />
<meta property="og:image" content="${escapeHtml(image)}" />
<meta property="og:image:alt" content="Constrange — independent decision intelligence" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="en_GB" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escapeHtml(seo.title)}" />
<meta name="twitter:description" content="${escapeHtml(seo.description)}" />
<meta name="twitter:image" content="${escapeHtml(image)}" />
<meta name="twitter:image:alt" content="Constrange — independent decision intelligence" />
<title>${escapeHtml(seo.title)}</title>
<script type="application/ld+json" id="seo-jsonld">${jsonLd}</script>
<link rel="preload" as="font" type="font/woff2" href="/assets/fonts/inter-latin-wght-normal.woff2" crossorigin>
<link rel="stylesheet" href="/assets/css/site.css">
</head>
<body>
<div id="root">`
}

function renderPage(pathname: string) {
  const body = renderToString(
    <StrictMode>
      <StaticRouter location={pathname}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  )

  return `${renderHead(pathname)}${body}</div>
<script type="module" src="/assets/site.js"></script>
</body>
</html>`
}

function writePage(route: string, html: string) {
  const out = routeOutputFile(route)
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, html)
}

function clearGenerated() {
  fs.rmSync(generated, { recursive: true, force: true })
  fs.mkdirSync(generated, { recursive: true })
}

clearGenerated()
fs.mkdirSync(path.join(root, ".build"), { recursive: true })

for (const route of staticRoutes) {
  const html = renderPage(route)
  writePage(route, html)
  console.log(`prerendered ${route}`)
}

const notFoundHtml = renderPage(notFoundRoute)
fs.writeFileSync(path.join(generated, "404.html"), notFoundHtml)

console.log(`prerendered ${staticRoutes.length + 1} pages`)

fs.writeFileSync(
  path.join(root, ".build", "routes.json"),
  JSON.stringify({ staticRoutes, redirectRoutes, siteOrigin: "https://constrange.com" }, null, 2),
)
