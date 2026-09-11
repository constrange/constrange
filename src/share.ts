import { SITE_ORIGIN } from "@/seo"

export function publicPostUrl(slug: string): string {
  if (SITE_ORIGIN) return `${SITE_ORIGIN}/blog/${slug}`
  if (typeof window !== "undefined") return window.location.href
  return `/blog/${slug}`
}

function shareText(title: string, url: string): string {
  return `${title}\n\n${url}`
}

export function twitterIntentUrl(title: string, url: string): string {
  const params = new URLSearchParams({ text: title, url })
  return `https://x.com/intent/tweet?${params.toString()}`
}

export function linkedInShareUrl(url: string): string {
  const params = new URLSearchParams({ url })
  return `https://www.linkedin.com/sharing/share-offsite/?${params.toString()}`
}

export function whatsAppShareUrl(title: string, url: string): string {
  const params = new URLSearchParams({ text: shareText(title, url) })
  return `https://wa.me/?${params.toString()}`
}

export function facebookShareUrl(url: string): string {
  const params = new URLSearchParams({ u: url })
  return `https://www.facebook.com/sharer/sharer.php?${params.toString()}`
}

export function redditShareUrl(title: string, url: string): string {
  const params = new URLSearchParams({ url, title })
  return `https://www.reddit.com/submit?${params.toString()}`
}

export function blueskyShareUrl(title: string, url: string): string {
  const params = new URLSearchParams({ text: shareText(title, url) })
  return `https://bsky.app/intent/compose?${params.toString()}`
}

export function emailShareUrl(title: string, url: string): string {
  const params = new URLSearchParams({
    subject: title,
    body: shareText(title, url),
  })
  return `mailto:?${params.toString()}`
}

export type ShareChannel = {
  id: string
  label: string
  href: (title: string, url: string) => string
}

export const SHARE_CHANNELS: ShareChannel[] = [
  { id: "linkedin", label: "LinkedIn", href: (_, url) => linkedInShareUrl(url) },
  { id: "x", label: "X", href: (title, url) => twitterIntentUrl(title, url) },
  { id: "whatsapp", label: "WhatsApp", href: (title, url) => whatsAppShareUrl(title, url) },
  { id: "facebook", label: "Facebook", href: (_, url) => facebookShareUrl(url) },
  { id: "reddit", label: "Reddit", href: (title, url) => redditShareUrl(title, url) },
  { id: "bluesky", label: "Bluesky", href: (title, url) => blueskyShareUrl(title, url) },
  { id: "email", label: "Email", href: (title, url) => emailShareUrl(title, url) },
]

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

export function canNativeShare(): boolean {
  return typeof navigator !== "undefined" && typeof navigator.share === "function"
}

export async function nativeShare(title: string, url: string): Promise<boolean> {
  if (!canNativeShare()) return false
  try {
    await navigator.share({ title, url, text: title })
    return true
  } catch {
    return false
  }
}
