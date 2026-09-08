import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { DEFAULT_OG, jsonLdFor, resolveSeo, SITE_NAME, SITE_ORIGIN } from "@/seo"
import { normalizePathname } from "@/pathname"

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement("meta")
    document.head.appendChild(el)
  }
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v)
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement("link")
    el.setAttribute("rel", rel)
    document.head.appendChild(el)
  }
  el.setAttribute("href", href)
}

export function Seo() {
  const { pathname: rawPathname } = useLocation()
  const pathname = normalizePathname(rawPathname)

  useEffect(() => {
    const seo = resolveSeo(pathname)
    const image = seo.ogImage ?? DEFAULT_OG

    document.title = seo.title

    upsertMeta('meta[name="description"]', { name: "description", content: seo.description })
    upsertMeta('meta[name="robots"]', { name: "robots", content: seo.robots })
    upsertMeta('meta[name="author"]', { name: "author", content: SITE_NAME })
    upsertLink("canonical", seo.canonical)

    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: SITE_NAME })
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: "en_GB" })
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: seo.ogType })
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: seo.title })
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: seo.description })
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: seo.canonical })
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: image })
    upsertMeta('meta[property="og:image:alt"]', {
      property: "og:image:alt",
      content: "Constrange — technology and business consultancy",
    })

    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" })
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: seo.title })
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: seo.description })
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: image })

    let json = document.getElementById("seo-jsonld") as HTMLScriptElement | null
    if (!json) {
      json = document.createElement("script")
      json.id = "seo-jsonld"
      json.type = "application/ld+json"
      document.head.appendChild(json)
    }
    json.textContent = JSON.stringify(jsonLdFor(seo))

    upsertMeta('meta[property="og:image:width"]', { property: "og:image:width", content: "1200" })
    upsertMeta('meta[property="og:image:height"]', { property: "og:image:height", content: "630" })
    upsertMeta('meta[name="twitter:image:alt"]', {
      name: "twitter:image:alt",
      content: "Constrange — technology and business consultancy",
    })

    const root = document.documentElement
    root.lang = "en-GB"
    if (pathname === "/") root.setAttribute("prefix", "og: https://ogp.me/ns#")
  }, [pathname])

  return null
}

export { SITE_ORIGIN }
