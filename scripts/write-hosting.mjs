import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, "..")
const siteDir = path.join(root, "_site")
const routesFile = path.join(root, ".build", "routes.json")

const { staticRoutes, redirectRoutes, siteOrigin } = JSON.parse(fs.readFileSync(routesFile, "utf8"))

function writeSitemap() {
  const urls = staticRoutes.map((route) => {
    const loc = route === "/" ? `${siteOrigin}/` : `${siteOrigin}${route}`
    const priority = route === "/" ? "1.0" : route.startsWith("/blog/") ? "0.6" : "0.8"
    const changefreq = route === "/" || route === "/blog" ? "weekly" : route.startsWith("/blog/") ? "yearly" : "monthly"
    return `  <url><loc>${loc}</loc><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`
  })

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`

  fs.writeFileSync(path.join(siteDir, "sitemap.xml"), xml)
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
}

writeSitemap()
writeRedirects()
console.log("wrote sitemap and redirects")
