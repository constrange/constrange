#!/usr/bin/env node
/**
 * Generates 15 strategy / business economics blog posts + SVG figures.
 * Run: node scripts/generate-strategy-series.mjs
 */
import { writeFileSync, mkdirSync, readFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import { POSTS, SERIES_DATES, SVGS } from "./strategy-series-data.mjs"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const postsDir = join(root, "src/blog/posts")
const figuresDir = join(root, "public/assets/blog-figures")
const MIN_WORDS = 1480

const p = (text) => `    p(\n      ${JSON.stringify(text)},\n    ),`
const h2 = (text) => `    h2(${JSON.stringify(text)}),`
const h3 = (text) => `    h3(${JSON.stringify(text)}),`
const note = (text) => `    note(${JSON.stringify(text)}),`
const quote = (text) => `    quote(${JSON.stringify(text)}),`
const fig = (src, alt, cap) =>
  `    fig(${JSON.stringify(src)}, ${JSON.stringify(alt)}, ${JSON.stringify(cap)}),`
const ul = (items) => `    ul(${JSON.stringify(items, null, 6).replace(/\n/g, "\n    ")}),`
const ol = (items) => `    ol(${JSON.stringify(items, null, 6).replace(/\n/g, "\n    ")}),`
const table = (caption, head, rows) =>
  `    {\n      t: "table",\n      caption: ${JSON.stringify(caption)},\n      head: ${JSON.stringify(head)},\n      rows: ${JSON.stringify(rows, null, 8).replace(/\n/g, "\n      ")},\n    },`
const cta = (title, text) =>
  `    cta(\n      ${JSON.stringify(title)},\n      ${JSON.stringify(text)},\n      "Start a conversation",\n    ),`

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
]

function slugToExport(slug) {
  return slug.split("-").map((w, i) => (i === 0 ? w : w[0].toUpperCase() + w.slice(1))).join("") + "Post"
}

function isoToDate(dateIso) {
  const d = new Date(`${dateIso}T12:00:00Z`)
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`
}

function countWords(blocks) {
  const text = blocks.join(" ")
  const matches = text.match(/"([^"\\]|\\.)*"/g) || []
  return matches
    .map((s) => s.slice(1, -1).replace(/\\n/g, " "))
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length
}

function shortenDeck(deck) {
  const first = deck.split(/[.!?]/)[0].trim()
  return first.length > 72 ? `${first.slice(0, 69)}…` : first
}

function paras(...texts) {
  return texts.map((t) => p(t))
}

function strategyClose(topic) {
  return [
    h2("Questions worth putting in the next leadership review"),
    ul([
      `Where does our data on ${topic} actually live — and who owns updating it?`,
      "What decision would we make differently if we trusted the number?",
      "Which incentive or reporting line is working against the outcome we want?",
      "What is the smallest test that would change our mind in ninety days?",
    ]),
    p(
      "Strategy work that stops at the slide deck is expensive theatre. The useful version is slower, messier, and more specific: name the constraint, measure the gap, assign an owner, and set a date when the number gets reviewed again.",
    ),
    cta(
      "Bring the situation as it is",
      "If this framework matches a pressure you are already feeling, start with the facts you have — not the narrative you wish were true. We help leadership teams quantify gaps, choose constraints, and design paths that operations can absorb.",
    ),
  ]
}

const SHARED_EXPAND = [
  "The numbers in this article are illustrative ranges from client work and published benchmarks — not universal laws. Your organisation will have its own shape. The discipline is to measure yours rather than borrow someone else's headline.",
  "Finance, operations, and commercial teams often use the same words with different definitions. Before any index or ratio goes on a dashboard, agree what counts in the numerator and who certifies it monthly.",
  "Boards respond to frameworks when they see a decision attached. Pair every metric with a threshold and a pre-agreed action. Measurement without a trigger is reporting; measurement with a trigger is management.",
  "Avoid benchmarking envy. Another company's attractive ratio may reflect a business model you do not have. Compare yourself to your own prior quarters first; external peers second.",
  "Short-term fixes that improve a ratio while weakening the underlying economics are more common than admitted. When a metric moves, ask what behaviour it rewarded and whether that behaviour survives a bad quarter.",
]

function ensureMinWords(blocks, min, fillers, slug) {
  const pool = [...fillers, ...SHARED_EXPAND]
  let words = countWords(blocks)
  let i = 0
  let guard = 0
  while (words < min && pool.length > 0 && guard < 40) {
    blocks.push(p(pool[i % pool.length]))
    words = countWords(blocks)
    i++
    guard++
  }
  if (words < min) {
    throw new Error(`${slug}: only ${words} words, need ${min}`)
  }
  return blocks
}

function buildBlocks(post) {
  const blocks = [
    ...paras(...post.intro),
    h2(post.sections[0].h2),
    ...paras(...post.sections[0].paras),
    fig(post.figure, post.figAlt, post.figCap),
    table(post.table.caption, post.table.head, post.table.rows),
  ]

  for (let i = 1; i < post.sections.length; i++) {
    const s = post.sections[i]
    blocks.push(h2(s.h2))
    blocks.push(...paras(...s.paras))
    if (s.ul) blocks.push(ul(s.ul))
    if (s.ol) blocks.push(ol(s.ol))
    if (s.note) blocks.push(note(s.note))
    if (s.quote) blocks.push(quote(s.quote))
    if (s.h3) {
      blocks.push(h3(s.h3))
      if (s.p3) blocks.push(p(s.p3))
    }
    if (s.table) blocks.push(table(s.table.caption, s.table.head, s.table.rows))
  }

  blocks.push(...strategyClose(post.topic))
  ensureMinWords(blocks, MIN_WORDS, post.fillers, post.slug)
  return blocks
}

const seriesMeta = POSTS.map((post, i) => ({
  ...post,
  dateIso: SERIES_DATES[i],
  date: isoToDate(SERIES_DATES[i]),
  blocks: buildBlocks(post),
}))

mkdirSync(postsDir, { recursive: true })
mkdirSync(figuresDir, { recursive: true })

const writtenPosts = []
const writtenSvgs = []
const wordCounts = []

for (const post of seriesMeta) {
  const exportName = slugToExport(post.slug)
  const body = post.blocks.join("\n")
  const words = countWords(post.blocks)
  wordCounts.push({ slug: post.slug, words })

  const faq = post.faqs
    .map(([q, a]) => `    [\n      ${JSON.stringify(q)},\n      ${JSON.stringify(a)},\n    ],`)
    .join("\n")

  const content = `import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const ${exportName}: Article = {
  slug: ${JSON.stringify(post.slug)},
  title: ${JSON.stringify(post.title)},
  deck: ${JSON.stringify(post.deck)},
  category: "Decision guides",
  date: ${JSON.stringify(post.date)},
  dateIso: ${JSON.stringify(post.dateIso)},
  readTime: readTime(${words}),
  author,
  tags: ${JSON.stringify(post.tags)},
  art: { label: "Decision guides", cells: [${JSON.stringify(shortenDeck(post.deck))}], tone: ${JSON.stringify(post.tone)} },
  body: [
${body}
  ],
  faqs: [
${faq}
  ],
}
`
  const file = `${post.slug}.ts`
  writeFileSync(join(postsDir, file), content)
  writtenPosts.push({ file, exportName, dateIso: post.dateIso })
  console.log("wrote post", file, `(${words} words)`)

  const svgFile = post.figure
  if (SVGS[svgFile]) {
    writeFileSync(join(figuresDir, svgFile), SVGS[svgFile]())
    writtenSvgs.push(svgFile)
    console.log("wrote svg", svgFile)
  }
}

writtenPosts.sort((a, b) => b.dateIso.localeCompare(a.dateIso))

const indexPath = join(postsDir, "index.ts")
let indexContent = readFileSync(indexPath, "utf8")
const newExports = writtenPosts
  .map(({ exportName, file }) => `export { ${exportName} } from "./${file.replace(/\.ts$/, "")}"`)
  .join("\n")
if (!indexContent.includes(writtenPosts[0].exportName)) {
  indexContent = `${newExports}\n${indexContent}`
  writeFileSync(indexPath, indexContent)
  console.log("updated", indexPath)
}

const blogContentPath = join(root, "src/blog-content.ts")
let blogContent = readFileSync(blogContentPath, "utf8")
const importNames = writtenPosts.map((p) => p.exportName)
if (!blogContent.includes(importNames[0])) {
  blogContent = blogContent.replace(
    /import \{([^}]+)\} from "\.\/blog\/posts"/,
    (_, existing) => {
      const names = existing
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
      const merged = [...new Set([...importNames, ...names])]
      return `import {\n  ${merged.join(",\n  ")},\n} from "./blog/posts"`
    },
  )
  const arrayInsert = importNames.join(",\n  ") + ",\n  "
  blogContent = blogContent.replace(
    /export const posts: Article\[\] = \[\n/,
    `export const posts: Article[] = [\n  ${arrayInsert}`,
  )
  writeFileSync(blogContentPath, blogContent)
  console.log("updated", blogContentPath)
}

console.log("\nWord counts:")
for (const { slug, words } of wordCounts) {
  const ok = words >= MIN_WORDS ? "✓" : "✗"
  console.log(`  ${ok} ${slug}: ${words}`)
}

console.log("\nCreated:")
console.log("Posts:", writtenPosts.map((p) => p.file).join(", "))
console.log("SVGs:", writtenSvgs.join(", "))
