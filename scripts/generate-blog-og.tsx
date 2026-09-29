import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { Resvg } from "@resvg/resvg-js"
import { posts } from "../src/blog-content.ts"
import type { BlogTone } from "../src/blog/types.ts"

const OG_WIDTH = 2400
const OG_HEIGHT = 1260
const FRAME_BORDER = 4

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, "..")
const outDir = path.join(root, "public", "og", "blog")

const FONT_INTER_400 = path.join(root, "node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2")
const FONT_INTER_700 = path.join(root, "node_modules/@fontsource/inter/files/inter-latin-700-normal.woff2")

type ToneBg = {
  linear: [string, string]
  radials: { cx: number; cy: number; rx: number; ry: number; color: string; fade: number }[]
  chip: string
  mid: string
}

const toneBg: Record<BlogTone, ToneBg> = {
  ink: {
    linear: ["#d8d0ec", "#8898c8"],
    radials: [
      { cx: 0.18, cy: 0.12, rx: 0.9, ry: 0.8, color: "#f4f2fc", fade: 0.55 },
      { cx: 0.88, cy: 0.78, rx: 0.7, ry: 0.7, color: "#9890c8", fade: 0.58 },
    ],
    chip: "#4a3890",
    mid: "rgba(244, 242, 252, .72)",
  },
  field: {
    linear: ["#f0ecc0", "#98c888"],
    radials: [
      { cx: 0.2, cy: 0.1, rx: 0.85, ry: 0.75, color: "#fcfce8", fade: 0.52 },
      { cx: 0.85, cy: 0.85, rx: 0.75, ry: 0.7, color: "#98b868", fade: 0.55 },
    ],
    chip: "#3a4820",
    mid: "rgba(252, 252, 236, .72)",
  },
  slate: {
    linear: ["#d0dce4", "#7890a0"],
    radials: [
      { cx: 0.15, cy: 0.15, rx: 0.88, ry: 0.78, color: "#f4f6f8", fade: 0.54 },
      { cx: 0.9, cy: 0.8, rx: 0.72, ry: 0.68, color: "#7890a0", fade: 0.56 },
    ],
    chip: "#2c3844",
    mid: "rgba(244, 248, 252, .75)",
  },
  plum: {
    linear: ["#dcd0f0", "#88a0d0"],
    radials: [
      { cx: 0.16, cy: 0.1, rx: 0.9, ry: 0.8, color: "#f8f4fc", fade: 0.54 },
      { cx: 0.88, cy: 0.82, rx: 0.7, ry: 0.72, color: "#9080c0", fade: 0.56 },
    ],
    chip: "#5a48a0",
    mid: "rgba(248, 244, 252, .74)",
  },
  coral: {
    linear: ["#f8dcd4", "#d0a0c0"],
    radials: [
      { cx: 0.18, cy: 0.12, rx: 0.88, ry: 0.78, color: "#fff4f0", fade: 0.52 },
      { cx: 0.86, cy: 0.78, rx: 0.72, ry: 0.7, color: "#d89088", fade: 0.55 },
    ],
    chip: "#b85848",
    mid: "rgba(255, 248, 244, .74)",
  },
  dusk: {
    linear: ["#d0d0ec", "#8090d0"],
    radials: [
      { cx: 0.14, cy: 0.08, rx: 0.92, ry: 0.82, color: "#f6f6fc", fade: 0.52 },
      { cx: 0.9, cy: 0.84, rx: 0.74, ry: 0.72, color: "#7888c8", fade: 0.56 },
    ],
    chip: "#4858b0",
    mid: "rgba(244, 246, 252, .76)",
  },
  amber: {
    linear: ["#f8ecc0", "#a8d080"],
    radials: [
      { cx: 0.16, cy: 0.1, rx: 0.88, ry: 0.78, color: "#fffcf0", fade: 0.52 },
      { cx: 0.88, cy: 0.82, rx: 0.72, ry: 0.68, color: "#c8a048", fade: 0.54 },
    ],
    chip: "#a87820",
    mid: "rgba(255, 252, 240, .76)",
  },
  moss: {
    linear: ["#dce8c0", "#78b088"],
    radials: [
      { cx: 0.18, cy: 0.12, rx: 0.86, ry: 0.76, color: "#f8fcf0", fade: 0.52 },
      { cx: 0.86, cy: 0.8, rx: 0.7, ry: 0.68, color: "#689868", fade: 0.54 },
    ],
    chip: "#3a6830",
    mid: "rgba(248, 252, 244, .74)",
  },
  wine: {
    linear: ["#ecd0d8", "#c08898"],
    radials: [
      { cx: 0.16, cy: 0.1, rx: 0.88, ry: 0.78, color: "#fcf4f6", fade: 0.52 },
      { cx: 0.88, cy: 0.82, rx: 0.72, ry: 0.7, color: "#b07088", fade: 0.55 },
    ],
    chip: "#783848",
    mid: "rgba(252, 244, 248, .74)",
  },
  tide: {
    linear: ["#c8e8f0", "#68a8c0"],
    radials: [
      { cx: 0.14, cy: 0.08, rx: 0.9, ry: 0.8, color: "#f0fafc", fade: 0.52 },
      { cx: 0.9, cy: 0.84, rx: 0.74, ry: 0.72, color: "#4898b0", fade: 0.56 },
    ],
    chip: "#187890",
    mid: "rgba(244, 252, 255, .76)",
  },
  pine: {
    linear: ["#cce0d4", "#68a080"],
    radials: [
      { cx: 0.16, cy: 0.1, rx: 0.86, ry: 0.76, color: "#f4faf6", fade: 0.52 },
      { cx: 0.88, cy: 0.8, rx: 0.7, ry: 0.68, color: "#508868", fade: 0.54 },
    ],
    chip: "#285840",
    mid: "rgba(244, 252, 248, .74)",
  },
  frost: {
    linear: ["#dceef4", "#88b0c8"],
    radials: [
      { cx: 0.15, cy: 0.08, rx: 0.9, ry: 0.82, color: "#f8fcff", fade: 0.52 },
      { cx: 0.88, cy: 0.84, rx: 0.72, ry: 0.7, color: "#6898b0", fade: 0.55 },
    ],
    chip: "#487090",
    mid: "rgba(248, 252, 255, .78)",
  },
  clay: {
    linear: ["#ecd8c4", "#c0a080"],
    radials: [
      { cx: 0.16, cy: 0.1, rx: 0.88, ry: 0.78, color: "#fcf8f4", fade: 0.52 },
      { cx: 0.88, cy: 0.82, rx: 0.72, ry: 0.68, color: "#a88868", fade: 0.54 },
    ],
    chip: "#785838",
    mid: "rgba(252, 248, 244, .74)",
  },
}

const FRAME_PAD_X = Math.round(OG_WIDTH * 0.09)
const FRAME_PAD_Y = Math.round(OG_HEIGHT * 0.11)
const INNER_W = OG_WIDTH - FRAME_PAD_X * 2
const INNER_H = OG_HEIGHT - FRAME_PAD_Y * 2
const STACK_W = Math.min(Math.round(INNER_W * 0.88), Math.round(OG_WIDTH * 0.72))
const CARD_REF = 400
const SCALE = STACK_W / CARD_REF
const STROKE = 3
const BOX_PAD_X = Math.round(16 * SCALE)
const BOX_PAD_Y = Math.round(14 * SCALE)
const WIDTH_SAFETY = 1.22

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
  return [...text].reduce((sum, ch) => sum + charWidth(ch, fontSize, bold), 0) * WIDTH_SAFETY
}

function linesFit(lines: string[], maxWidth: number, fontSize: number, bold = false) {
  return lines.every((line) => textWidth(line, fontSize, bold) <= maxWidth)
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
  for (const size of [Math.round(24 * SCALE), Math.round(21 * SCALE), Math.round(18 * SCALE), Math.round(15 * SCALE)]) {
    const lines = wrapTitle(title, maxWidth, size, 4)
    if (!linesFit(lines, maxWidth, size, true)) continue
    const full = title.replace(/\s+/g, " ")
    const joined = lines.join(" ").replace(/…$/, "")
    if (joined === full || lines.length <= 3) return { size, lines }
  }
  const fallback = Math.round(14 * SCALE)
  return { size: fallback, lines: wrapTitle(title, maxWidth, fallback, 4) }
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
  return `<text x="${x}" y="${y}" font-family="Inter, sans-serif" font-size="${fontSize}"${weight} fill="#131313" text-rendering="geometricPrecision">\n    ${tspans}\n  </text>`
}

function box(x: number, y: number, w: number, h: number, fill: string) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="#131313" stroke-width="${STROKE}" shape-rendering="crispEdges"/>`
}

function backgroundDefs(tone: BlogTone) {
  const bg = toneBg[tone]
  const radials = bg.radials
    .map((r, i) => {
      return `<radialGradient id="rad-${i}" cx="${r.cx}" cy="${r.cy}" rx="${r.rx}" ry="${r.ry}" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="${r.color}"/>
      <stop offset="${Math.round(r.fade * 100)}%" stop-color="${r.color}" stop-opacity="0"/>
    </radialGradient>`
    })
    .join("\n    ")

  return `<linearGradient id="base" x1="0%" y1="0%" x2="85%" y2="100%">
      <stop offset="0%" stop-color="${bg.linear[0]}"/>
      <stop offset="100%" stop-color="${bg.linear[1]}"/>
    </linearGradient>
    ${radials}`
}

function backgroundLayers(tone: BlogTone) {
  const radialRects = toneBg[tone].radials
    .map((_, i) => `<rect width="${OG_WIDTH}" height="${OG_HEIGHT}" fill="url(#rad-${i})"/>`)
    .join("\n  ")
  return `<rect width="${OG_WIDTH}" height="${OG_HEIGHT}" fill="url(#base)"/>
  ${radialRects}`
}

function buildOgSvg(post: (typeof posts)[number]) {
  const bg = toneBg[post.art.tone]
  const tag = (post.category ?? post.art.label).toUpperCase()
  const subtitleSource = post.art.cells[0].trim()
  const textMaxW = STACK_W - BOX_PAD_X * 2
  const midBoxW = Math.min(STACK_W, Math.max(Math.round(STACK_W * 0.72), Math.round(220 * SCALE)))

  const subtitleSize = Math.round(17 * SCALE)
  const subtitleLH = Math.round(subtitleSize * 1.35)
  const subtitleLines = wrapText(subtitleSource, midBoxW - BOX_PAD_X * 2, subtitleSize, false, 2)
  const subtitleBoxH = BOX_PAD_Y * 2 + subtitleLines.length * subtitleLH

  const { size: titleSize, lines: titleLines } = pickTitleSize(post.title, textMaxW)
  const titleLH = Math.round(titleSize * 1.18)
  const titleBoxH = BOX_PAD_Y * 2 + titleLines.length * titleLH
  const titleBoxW = Math.max(
    STACK_W,
    Math.ceil(Math.max(...titleLines.map((l) => textWidth(l, titleSize, true))) + BOX_PAD_X * 2 + 20),
  )

  const chipPadX = Math.round(14 * SCALE)
  const chipPadY = Math.round(9 * SCALE)
  const chipFont = Math.round(10 * SCALE)
  const chipW = Math.ceil(textWidth(tag, chipFont) + chipPadX * 2 + 8)
  const chipH = chipPadY * 2 + chipFont + 6

  const subtitleBoxW = Math.max(
    midBoxW,
    Math.ceil(Math.max(...subtitleLines.map((l) => textWidth(l, subtitleSize))) + BOX_PAD_X * 2 + 20),
  )
  const stackH = chipH + subtitleBoxH + titleBoxH - STROKE * 2
  const x = FRAME_PAD_X
  const chipY = FRAME_PAD_Y + Math.round((INNER_H - stackH) / 2)
  const subtitleY = chipY + chipH - STROKE
  const titleY = subtitleY + subtitleBoxH - STROKE

  const subtitleTextY = subtitleY + BOX_PAD_Y + subtitleSize
  const titleTextY = titleY + BOX_PAD_Y + titleSize
  const brandY = OG_HEIGHT - FRAME_PAD_Y + Math.round(28 * SCALE)

  const tagSvg = `<rect x="${x}" y="${chipY}" width="${chipW}" height="${chipH}" fill="${bg.chip}" shape-rendering="crispEdges"/>
  <text x="${x + chipPadX}" y="${chipY + chipPadY + chipFont}" font-family="Inter, sans-serif" font-size="${chipFont}" font-weight="500" letter-spacing="3" fill="#fff" text-rendering="geometricPrecision">${escapeXml(tag)}</text>`

  const subtitleSvg = `${box(x, subtitleY, subtitleBoxW, subtitleBoxH, bg.mid)}
  ${textBlock(subtitleLines, x + BOX_PAD_X, subtitleTextY, subtitleSize, false, subtitleLH)}`

  const titleSvg = `${box(x, titleY, titleBoxW, titleBoxH, "#fff")}
  ${textBlock(titleLines, x + BOX_PAD_X, titleTextY, titleSize, true, titleLH)}`

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${OG_WIDTH}" height="${OG_HEIGHT}" viewBox="0 0 ${OG_WIDTH} ${OG_HEIGHT}">
  <defs>
    ${backgroundDefs(post.art.tone)}
  </defs>
  ${backgroundLayers(post.art.tone)}
  <rect x="${FRAME_BORDER / 2}" y="${FRAME_BORDER / 2}" width="${OG_WIDTH - FRAME_BORDER}" height="${OG_HEIGHT - FRAME_BORDER}" fill="none" stroke="#131313" stroke-width="${FRAME_BORDER}" shape-rendering="crispEdges"/>
  ${tagSvg}
  ${subtitleSvg}
  ${titleSvg}
  <text x="${x}" y="${brandY}" font-family="Inter, sans-serif" font-size="${Math.round(14 * SCALE)}" font-weight="500" letter-spacing="3" fill="#271675" text-rendering="geometricPrecision">CONSTRANGE</text>
</svg>`
}

const resvgOpts = {
  fitTo: { mode: "original" as const },
  textRendering: 2 as const,
  shapeRendering: 2 as const,
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

console.log(`generated ${posts.length} blog OG images (${OG_WIDTH}×${OG_HEIGHT} PNG) in public/og/blog/`)
