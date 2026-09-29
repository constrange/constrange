import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { Resvg } from "@resvg/resvg-js"
import { posts } from "../src/blog-content.ts"
import type { BlogTone } from "../src/blog/types.ts"

const OG_WIDTH = 1600
const OG_HEIGHT = 840
const VB_W = 1200
const VB_H = 630

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, "..")
const outDir = path.join(root, "public", "og", "blog")

const FONT_INTER_400 = path.join(root, "node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2")
const FONT_INTER_700 = path.join(root, "node_modules/@fontsource/inter/files/inter-latin-700-normal.woff2")

const toneColors: Record<BlogTone, { a: string; b: string; c: string; chip: string }> = {
  ink: { a: "#d8d0ec", b: "#8898c8", c: "#f4f2fc", chip: "#4a3890" },
  field: { a: "#f0ecc0", b: "#98c888", c: "#fcfce8", chip: "#3a4820" },
  slate: { a: "#d0dce4", b: "#7890a0", c: "#f4f6f8", chip: "#2c3844" },
  plum: { a: "#dcd0f0", b: "#88a0d0", c: "#f8f4fc", chip: "#5a48a0" },
  coral: { a: "#f8dcd4", b: "#d0a0c0", c: "#fff4f0", chip: "#b85848" },
  dusk: { a: "#d0d0ec", b: "#8090d0", c: "#f6f6fc", chip: "#4858b0" },
  amber: { a: "#f8ecc0", b: "#a8d080", c: "#fffcf0", chip: "#a87820" },
  moss: { a: "#dce8c0", b: "#78b088", c: "#f8fcf0", chip: "#3a6830" },
  wine: { a: "#ecd0d8", b: "#c08898", c: "#fcf4f6", chip: "#783848" },
  tide: { a: "#c8e8f0", b: "#68a8c0", c: "#f0fafc", chip: "#187890" },
  pine: { a: "#cce0d4", b: "#68a080", c: "#f4faf6", chip: "#285840" },
  frost: { a: "#dceef4", b: "#88b0c8", c: "#f8fcff", chip: "#487090" },
  clay: { a: "#ecd8c4", b: "#c0a080", c: "#fcf8f4", chip: "#785838" },
}

const PAD = 88
const CONTENT_W = 960
const BOX_PAD_X = 16
const BOX_PAD_Y = 14
const STROKE = 1.5

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
}

function charWidth(char: string, fontSize: number, bold = false) {
  const base = fontSize * (bold ? 0.56 : 0.5)
  if (char === " ") return base * 0.42
  if ("iltfj".includes(char)) return base * 0.42
  if ("mwMW@#%".includes(char)) return base * 0.9
  return base
}

function textWidth(text: string, fontSize: number, bold = false) {
  return [...text].reduce((sum, ch) => sum + charWidth(ch, fontSize, bold), 0)
}

function wrapText(text: string, maxWidth: number, fontSize: number, bold = false, maxLines = 4) {
  const words = text.trim().split(/\s+/)
  const lines: string[] = []
  let current = ""

  for (const word of words) {
    const next = current ? `${current} ${word}` : word
    if (textWidth(next, fontSize, bold) > maxWidth && current) {
      lines.push(current)
      current = word
      if (lines.length >= maxLines) break
    } else {
      current = next
    }
  }

  if (lines.length < maxLines && current) lines.push(current)

  for (let i = 0; i < lines.length - 1; i++) {
    const tail = lines[i].split(/\s+/).pop() ?? ""
    if (tail.length <= 2 && lines[i + 1]) {
      const merged = `${lines[i]} ${lines[i + 1]}`
      if (textWidth(merged, fontSize, bold) <= maxWidth * 1.05) {
        lines.splice(i, 2, merged)
        i -= 1
      }
    }
  }

  const full = words.join(" ")
  const joined = lines.join(" ")
  if (joined !== full) {
    let last = lines[lines.length - 1]
    while (last.length > 3 && textWidth(`${last}…`, fontSize, bold) > maxWidth) {
      last = last.slice(0, -1).trimEnd()
    }
    lines[lines.length - 1] = `${last}…`
  }

  return lines
}

function wrapTitle(title: string, maxWidth: number, fontSize: number, maxLines = 4) {
  const punct = title.match(/^(.+?[?:])\s+(.+)$/)
  if (punct) {
    const [, head, tail] = punct
    if (textWidth(head, fontSize, true) <= maxWidth) {
      const rest = wrapText(tail, maxWidth, fontSize, true, maxLines - 1)
      return [head, ...rest].slice(0, maxLines)
    }
  }
  return wrapText(title, maxWidth, fontSize, true, maxLines)
}

function pickTitleSize(title: string, maxWidth: number) {
  for (const size of [34, 30, 26, 22]) {
    const lines = wrapTitle(title, maxWidth, size, 4)
    const full = title.replace(/\s+/g, " ")
    const joined = lines.join(" ").replace(/…$/, "")
    if (joined === full || lines.length <= 3) return { size, lines }
  }
  return { size: 22, lines: wrapTitle(title, maxWidth, 22, 4) }
}

function textBlock(lines: string[], x: number, y: number, fontSize: number, bold: boolean, lineHeight: number) {
  if (lines.length === 0) return ""
  const weight = bold ? ' font-weight="700"' : ' font-weight="400"'
  const tspans = lines
    .map((line, i) => {
      const dy = i === 0 ? 0 : lineHeight
      return `<tspan x="${x}" dy="${dy}">${escapeXml(line)}</tspan>`
    })
    .join("\n    ")
  return `<text x="${x}" y="${y}" font-family="Inter, sans-serif" font-size="${fontSize}"${weight} fill="#131313">\n    ${tspans}\n  </text>`
}

function box(x: number, y: number, w: number, h: number, fill: string) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="#131313" stroke-width="${STROKE}"/>`
}

function buildOgSvg(post: (typeof posts)[number]) {
  const colors = toneColors[post.art.tone]
  const tag = (post.category ?? post.art.label).toUpperCase()
  const subtitleSource = post.art.cells[0].trim()
  const textMaxW = CONTENT_W - BOX_PAD_X * 2

  const subtitleSize = 19
  const subtitleLH = Math.round(subtitleSize * 1.35)
  const subtitleLines = wrapText(subtitleSource, textMaxW, subtitleSize, false, 2)
  const subtitleBoxW = Math.min(
    CONTENT_W,
    Math.max(
      300,
      Math.ceil(Math.max(...subtitleLines.map((l) => textWidth(l, subtitleSize))) + BOX_PAD_X * 2 + 8),
    ),
  )
  const subtitleBoxH = BOX_PAD_Y * 2 + subtitleLines.length * subtitleLH

  const { size: titleSize, lines: titleLines } = pickTitleSize(post.title, textMaxW)
  const titleLH = Math.round(titleSize * 1.2)
  const titleBoxH = BOX_PAD_Y * 2 + titleLines.length * titleLH

  const chipPadX = 14
  const chipPadY = 9
  const chipFont = 11
  const chipW = Math.ceil(textWidth(tag, chipFont) + chipPadX * 2 + 8)
  const chipH = chipPadY * 2 + chipFont + 4

  let y = 96
  const x = PAD

  const chipY = y
  y += chipH - STROKE

  const subtitleY = y
  y += subtitleBoxH - STROKE

  const titleY = y

  const subtitleTextY = subtitleY + BOX_PAD_Y + subtitleSize
  const titleTextY = titleY + BOX_PAD_Y + titleSize

  const tagSvg = `<rect x="${x}" y="${chipY}" width="${chipW}" height="${chipH}" fill="${colors.chip}"/>
  <text x="${x + chipPadX}" y="${chipY + chipPadY + chipFont}" font-family="Inter, sans-serif" font-size="${chipFont}" font-weight="500" letter-spacing="2" fill="#fff">${escapeXml(tag)}</text>`

  const subtitleSvg = `${box(x, subtitleY, subtitleBoxW, subtitleBoxH, "rgba(255,255,255,0.74)")}
  ${textBlock(subtitleLines, x + BOX_PAD_X, subtitleTextY, subtitleSize, false, subtitleLH)}`

  const titleSvg = `${box(x, titleY, CONTENT_W, titleBoxH, "#fff")}
  ${textBlock(titleLines, x + BOX_PAD_X, titleTextY, titleSize, true, titleLH)}`

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${OG_WIDTH}" height="${OG_HEIGHT}" viewBox="0 0 ${VB_W} ${VB_H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${colors.c}"/>
      <stop offset="45%" stop-color="${colors.a}"/>
      <stop offset="100%" stop-color="${colors.b}"/>
    </linearGradient>
    <filter id="grain" x="0" y="0">
      <feTurbulence type="fractalNoise" baseFrequency="0.95" numOctaves="3" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
  </defs>
  <rect width="${VB_W}" height="${VB_H}" fill="url(#bg)"/>
  <rect width="${VB_W}" height="${VB_H}" filter="url(#grain)" opacity="0.38"/>
  ${tagSvg}
  ${subtitleSvg}
  ${titleSvg}
  <text x="${x}" y="562" font-family="Inter, sans-serif" font-size="14" font-weight="500" letter-spacing="2" fill="#271675">CONSTRANGE</text>
</svg>`
}

const resvgOpts = {
  fitTo: { mode: "width" as const, value: OG_WIDTH },
  font: {
    fontFiles: [FONT_INTER_400, FONT_INTER_700],
    loadSystemFonts: true,
    defaultFontFamily: "Inter",
  },
}

fs.mkdirSync(outDir, { recursive: true })

for (const post of posts) {
  const svg = buildOgSvg(post)
  fs.writeFileSync(path.join(outDir, `${post.slug}.svg`), svg)
  const resvg = new Resvg(svg, resvgOpts)
  fs.writeFileSync(path.join(outDir, `${post.slug}.png`), resvg.render().asPng())
}

console.log(`generated ${posts.length} blog OG images (SVG + PNG) in public/og/blog/`)
