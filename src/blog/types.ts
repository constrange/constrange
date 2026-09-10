export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "table"; caption?: string; head: string[]; rows: string[][] }
  | { t: "code"; lang: string; code: string }
  | { t: "cta"; title: string; text: string; label: string; to: string }
  | { t: "quote"; text: string; cite: string }
  | { t: "note"; text: string }

export type BlogTone =
  | "ink"
  | "field"
  | "slate"
  | "plum"
  | "moss"
  | "clay"
  | "dusk"
  | "tide"
  | "amber"
  | "frost"
  | "coral"
  | "pine"
  | "wine"

export type Article = {
  slug: string
  title: string
  deck: string
  category: string
  date: string
  dateIso: string
  readTime: string
  author: { name: string; role: string }
  tags: string[]
  art: { label: string; cells: [string, string]; tone: BlogTone }
  body: Block[]
  faqs: [string, string][]
}
