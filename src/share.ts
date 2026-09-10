import { SITE_ORIGIN } from "@/seo"

export function publicPostUrl(slug: string): string {
  if (SITE_ORIGIN) return `${SITE_ORIGIN}/blog/${slug}`
  if (typeof window !== "undefined") return window.location.href
  return `/blog/${slug}`
}

export function twitterIntentUrl(title: string, url: string): string {
  const params = new URLSearchParams({ text: title, url })
  return `https://x.com/intent/tweet?${params.toString()}`
}

export function linkedInShareUrl(url: string): string {
  const params = new URLSearchParams({ url })
  return `https://www.linkedin.com/sharing/share-offsite/?${params.toString()}`
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

export function openShareWindow(href: string): void {
  window.open(href, "_blank", "noopener,noreferrer")
}
