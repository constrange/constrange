import type { Block } from "./types"

export const p = (text: string): Block => ({ t: "p", text })
export const h2 = (text: string): Block => ({ t: "h2", text })
export const h3 = (text: string): Block => ({ t: "h3", text })
export const ul = (items: string[]): Block => ({ t: "ul", items })
export const ol = (items: string[]): Block => ({ t: "ol", items })
export const note = (text: string): Block => ({ t: "note", text })
export const quote = (text: string, cite = "Constrange"): Block => ({ t: "quote", text, cite })
export const cta = (title: string, text: string, label: string, to = "/contact"): Block => ({
  t: "cta",
  title,
  text,
  label,
  to,
})
export const fig = (src: string, alt: string, caption?: string): Block => ({
  t: "figure",
  src,
  alt,
  caption,
})

export const author = { name: "Constrange", role: "Practice" }

export function readTime(words: number): string {
  const mins = Math.max(7, Math.round(words / 220))
  return `${mins} min read`
}
