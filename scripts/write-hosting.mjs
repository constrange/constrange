import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, "..")
const siteDir = path.join(root, "_site")
const routesFile = path.join(root, ".build", "routes.json")

const { staticRoutes, sitemapRoutes, redirectRoutes, siteOrigin, blogDates = {} } = JSON.parse(
  fs.readFileSync(routesFile, "utf8"),
)

const buildDate = new Date().toISOString().slice(0, 10)

function sitemapLoc(route) {
  return route === "/" ? `${siteOrigin}/` : `${siteOrigin}${route}/`
}

function redirectTarget(to) {
  return to === "/" ? `${siteOrigin}/` : `${siteOrigin}${to.replace(/\/+$/, "")}/`
}

function writeSitemap() {
  const routes = sitemapRoutes ?? staticRoutes
  const urls = routes.map((route) => {
    const loc = sitemapLoc(route)
    const priority = route === "/" ? "1.0" : route === "/blog" ? "0.9" : route.startsWith("/blog/") ? "0.7" : "0.8"
    const changefreq =
      route === "/" || route === "/blog" ? "weekly" : route.startsWith("/blog/") ? "yearly" : "monthly"
    const lastmod = blogDates[route] ?? buildDate
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
  })

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`

  fs.writeFileSync(path.join(siteDir, "sitemap.xml"), xml)
}

function writeRedirectHtml(from, to) {
  const target = redirectTarget(to)
  const rel = from.replace(/^\//, "")
  const out = path.join(siteDir, rel, "index.html")
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(
    out,
    `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="UTF-8" />
<meta http-equiv="refresh" content="0; url=${target}" />
<link rel="canonical" href="${target}" />
<title>Redirecting…</title>
<script>location.replace("${target}")</script>
</head>
<body>
<p>Redirecting to <a href="${target}">${target}</a>.</p>
</body>
</html>
`,
  )
}

function writeRedirects() {
  const lines = redirectRoutes.map((route) => `${route.from} ${route.to} 301`)
  lines.push("/desk/* / 301")
  lines.push("/dashboard/* / 301")
  fs.writeFileSync(path.join(siteDir, "_redirects"), `${lines.join("\n")}\n`)

  const vercelRedirects = redirectRoutes.map((route) => ({
    source: route.from,
    destination: route.to,
    permanent: true,
  }))
  vercelRedirects.push(
    { source: "/desk/:path*", destination: "/", permanent: true },
    { source: "/dashboard/:path*", destination: "/", permanent: true },
  )

  fs.writeFileSync(
    path.join(siteDir, "vercel.json"),
    JSON.stringify({ redirects: vercelRedirects }, null, 2) + "\n",
  )

  for (const route of redirectRoutes) {
    writeRedirectHtml(route.from, route.to)
  }
}

function writeCacheHeaders() {
  const headers = `/assets/*
  Cache-Control: public, max-age=31536000, immutable

/assets/css/*
  Cache-Control: public, max-age=31536000, immutable

/assets/fonts/*
  Cache-Control: public, max-age=31536000, immutable
`
  fs.writeFileSync(path.join(siteDir, "_headers"), headers)
}

writeSitemap()
writeRedirects()
writeCacheHeaders()
console.log(`wrote sitemap (${(sitemapRoutes ?? staticRoutes).length} urls) and redirects`)
