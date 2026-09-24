#!/usr/bin/env node
/**
 * Generates 10 AI Agent engineering blog posts + SVG figures.
 * Run: node scripts/generate-ai-agent-series.mjs
 */
import { writeFileSync, mkdirSync, readFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import { POSTS, SERIES_DATES } from "./ai-agent-series-data.mjs"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const postsDir = join(root, "src/blog/posts")
const figuresDir = join(root, "public/assets/blog-figures")
const MIN_WORDS = 1450

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

function svgWrap({ caption, elements, accent = "#271675", warn = "#b85848" }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" fill="none">
  <rect width="800" height="450" fill="#f3f2ec"/>
${elements}
  <text x="400" y="410" text-anchor="middle" font-family="Georgia, serif" font-size="16" fill="#171717">${caption}</text>
</svg>`
}

function box(x, y, w, h, label, { fill = "#fff", stroke = "#131313", textFill = "#131313" } = {}) {
  return `  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
  <text x="${x + w / 2}" y="${y + h / 2 + 4}" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10" fill="${textFill}">${label}</text>`
}

function arrow(x1, y1, x2, y2, { color = "#271675", dashed = false } = {}) {
  const dash = dashed ? ' stroke-dasharray="6 4"' : ""
  return `  <path d="M${x1} ${y1} L${x2} ${y2}" stroke="${color}" stroke-width="2" fill="none"${dash}/>`
}

const svgs = {
  "ai-agents-explained.svg": () => svgWrap({
    caption: "From prompt to production system",
    elements: [
      box(60, 180, 100, 60, "PROMPT", { stroke: "#131313" }),
      box(190, 180, 100, 60, "PLANNER", { stroke: "#271675" }),
      box(320, 160, 100, 50, "TOOLS", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(320, 230, 100, 50, "MEMORY", { stroke: "#271675" }),
      box(450, 180, 100, 60, "POLICY", { stroke: "#271675" }),
      box(580, 180, 120, 60, "PRODUCTION", { stroke: "#131313" }),
      arrow(160, 210, 190, 210),
      arrow(290, 195, 320, 185),
      arrow(290, 225, 320, 255),
      arrow(420, 210, 450, 210),
      arrow(550, 210, 580, 210),
      `  <text x="400" y="310" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#783848">The model is one component in a system</text>`,
    ].join("\n"),
  }),
  "ai-terraform-experiment.svg": () => svgWrap({
    caption: "AI-proposed infra changes need guardrails",
    elements: [
      box(100, 180, 120, 60, "AI AGENT", { fill: "#fff8f6", stroke: "#2d5a3d", textFill: "#2d5a3d" }),
      box(280, 160, 100, 50, "PLAN", { stroke: "#2d5a3d" }),
      box(280, 230, 100, 50, "DIFF", { stroke: "#2d5a3d" }),
      box(430, 180, 120, 60, "APPROVAL", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(590, 180, 120, 60, "TERRAFORM", { stroke: "#2d5a3d" }),
      arrow(220, 210, 280, 185),
      arrow(220, 210, 280, 255),
      arrow(380, 210, 430, 210, { color: "#b85848" }),
      arrow(550, 210, 590, 210),
    ].join("\n"),
  }),
  "ai-agent-control-plane-platform.svg": () => svgWrap({
    caption: "Control plane governs agent execution",
    elements: [
      box(340, 70, 120, 50, "CONTROL PLANE", { stroke: "#271675" }),
      box(120, 180, 100, 60, "IDENTITY", { stroke: "#271675" }),
      box(260, 180, 100, 60, "POLICY", { stroke: "#271675" }),
      box(400, 180, 100, 60, "BUDGET", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(540, 180, 100, 60, "AUDIT", { stroke: "#271675" }),
      box(340, 300, 120, 60, "AGENT RUNTIME", { stroke: "#271675" }),
      arrow(400, 120, 170, 180),
      arrow(400, 120, 310, 180),
      arrow(400, 120, 450, 180),
      arrow(400, 120, 590, 180),
      arrow(400, 240, 400, 300),
    ].join("\n"),
  }),
  "ai-agent-observability.svg": () => svgWrap({
    caption: "Measure agent behaviour, not only model output",
    elements: [
      box(100, 180, 110, 60, "TRACES", { stroke: "#4a5568" }),
      box(250, 180, 110, 60, "TOOL CALLS", { stroke: "#4a5568" }),
      box(400, 160, 110, 50, "COST", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(400, 230, 110, 50, "LATENCY", { stroke: "#4a5568" }),
      box(550, 180, 130, 60, "OUTCOMES", { stroke: "#4a5568" }),
      arrow(210, 210, 250, 210),
      arrow(360, 195, 400, 185),
      arrow(360, 225, 400, 255),
      arrow(510, 210, 550, 210),
      `  <text x="400" y="310" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#4a5568">Telemetry spans the full agent loop</text>`,
    ].join("\n"),
  }),
  "ai-agent-production-cost.svg": () => svgWrap({
    caption: "Token cost is the visible tip",
    elements: [
      box(120, 170, 100, 50, "TOKENS", { stroke: "#b8860b" }),
      box(260, 170, 100, 50, "TOOLS", { stroke: "#b8860b" }),
      box(400, 170, 100, 50, "RETRIES", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(540, 170, 100, 50, "HUMAN", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(680, 170, 80, 50, "OPS", { stroke: "#b8860b" }),
      arrow(220, 195, 260, 195),
      arrow(360, 195, 400, 195, { color: "#b85848" }),
      arrow(500, 195, 540, 195, { color: "#b85848" }),
      arrow(640, 195, 680, 195),
      `  <text x="400" y="280" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#783848">Total cost = model + system + people</text>`,
    ].join("\n"),
  }),
  "mcp-vs-rest-comparison.svg": () => svgWrap({
    caption: "Three integration patterns, three trade-offs",
    elements: [
      box(100, 160, 140, 70, "FUNCTION CALL", { stroke: "#5b7c99" }),
      box(330, 160, 140, 70, "REST API", { stroke: "#5b7c99" }),
      box(560, 160, 140, 70, "MCP SERVER", { stroke: "#5b7c99" }),
      `  <text x="170" y="270" text-anchor="middle" font-family="Georgia, serif" font-size="12" fill="#131313">In-process schema</text>`,
      `  <text x="400" y="270" text-anchor="middle" font-family="Georgia, serif" font-size="12" fill="#131313">HTTP contract</text>`,
      `  <text x="630" y="270" text-anchor="middle" font-family="Georgia, serif" font-size="12" fill="#131313">Tool protocol</text>`,
      `  <text x="400" y="320" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#783848">Choice depends on boundary and ops model</text>`,
    ].join("\n"),
  }),
  "mcp-security-attack-surface.svg": () => svgWrap({
    caption: "Tool calling expands the attack surface",
    elements: [
      box(360, 80, 80, 50, "AGENT", { stroke: "#783848" }),
      box(160, 200, 100, 50, "PROMPT", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(300, 200, 100, 50, "MCP TOOL", { stroke: "#783848" }),
      box(440, 200, 100, 50, "CREDS", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(580, 200, 100, 50, "DATA", { stroke: "#783848" }),
      arrow(400, 130, 210, 200, { color: "#b85848", dashed: true }),
      arrow(400, 130, 350, 200),
      arrow(400, 130, 490, 200, { color: "#b85848" }),
      arrow(400, 130, 630, 200),
      `  <text x="400" y="310" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#783848">Every tool is a trust boundary</text>`,
    ].join("\n"),
  }),
  "ai-coding-agents-cicd.svg": () => svgWrap({
    caption: "Generation speed outpaces verification",
    elements: [
      box(80, 180, 110, 60, "GENERATE", { stroke: "#4a6741" }),
      box(230, 180, 110, 60, "PR", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(380, 180, 110, 60, "CI", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(530, 180, 110, 60, "REVIEW", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(680, 180, 80, 60, "DEPLOY", { stroke: "#4a6741" }),
      arrow(190, 210, 230, 210),
      arrow(340, 210, 380, 210),
      arrow(490, 210, 530, 210),
      arrow(640, 210, 680, 210),
    ].join("\n"),
  }),
  "mcp-servers-production.svg": () => svgWrap({
    caption: "MCP servers need production discipline",
    elements: [
      box(100, 180, 110, 60, "CLIENT", { stroke: "#3d6b8a" }),
      box(260, 160, 110, 50, "AUTH", { stroke: "#3d6b8a" }),
      box(260, 230, 110, 50, "RATE LIMIT", { stroke: "#3d6b8a" }),
      box(420, 180, 120, 60, "MCP SERVER", { stroke: "#3d6b8a" }),
      box(580, 180, 130, 60, "BACKEND", { stroke: "#3d6b8a" }),
      arrow(210, 195, 260, 185),
      arrow(210, 225, 260, 255),
      arrow(370, 210, 420, 210),
      arrow(540, 210, 580, 210),
    ].join("\n"),
  }),
  "ai-agent-failure-modes.svg": () => svgWrap({
    caption: "Seven measurable failure modes in production",
    elements: [
      box(140, 140, 90, 45, "DRIFT", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(260, 140, 90, 45, "TOOLS", { stroke: "#b85848" }),
      box(380, 140, 90, 45, "COST", { stroke: "#b85848" }),
      box(500, 140, 90, 45, "LOOP", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(200, 230, 90, 45, "POLICY", { stroke: "#b85848" }),
      box(320, 230, 90, 45, "DATA", { stroke: "#b85848" }),
      box(440, 230, 90, 45, "HUMAN", { stroke: "#b85848" }),
      `  <text x="400" y="320" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#783848">Failures are measurable before they become incidents</text>`,
    ].join("\n"),
  }),
}

function agentIntro(topic, observe, measure, model) {
  return [
    p(
      `AI agents show up in vendor decks and architecture reviews, often sold as a capability upgrade or a model selection problem. The conversation stops at demos. Constrange treats ${topic} as an engineering discipline: observe what systems actually do in your environment, measure the cost and risk of that behaviour, and model the gap between the prompt and the platform that makes it safe to run.`,
    ),
    p(observe),
    p(measure),
    p(model),
  ]
}

function agentClose(topic) {
  return [
    h2("Questions for your next review"),
    ul([
      `What would we see if we measured ${topic} for one week in production?`,
      "Which dependency or tool call owns the majority of failures or cost?",
      "What assumption in our agent design does the telemetry contradict?",
      "What is the smallest experiment that would change our operating model?",
    ]),
    p(
      `The teams that run ${topic} reliably are not those with the best prompts. They are those that observe honestly, measure without vanity metrics, and update the control plane when traces disagree with the architecture diagram.`,
    ),
    cta(
      `Need help operationalising ${topic}?`,
      "Bring your agent traces, tool inventory, and last incident. We will help you observe what matters, measure what costs, and model what to change.",
    ),
  ]
}

function paras(...texts) {
  return texts.map((t) => p(t))
}

const SHARED_EXPAND = [
  "Production agent systems fail in boring ways long before they fail in interesting ones. Timeouts, stale credentials, ambiguous tool schemas, and missing idempotency keys dominate incident logs. Measure those first. The model is rarely the first place to spend another sprint — the integration edge is.",
  "Platform maturity shows up in how teams talk about agents in incident review. Immature teams debate prompts. Mature teams read traces, attribute cost, and ask which policy gate should have fired. Build the habits and tooling that make the second conversation inevitable.",
  "Challenge vendor claims with your own telemetry. Demos optimise for completion; your customers optimise for correctness under load. Run the same task at ten times traffic with injected tool failures. If the architecture cannot explain behaviour post hoc, it is not ready for production traffic.",
  "Agent roadmaps should include explicit kill criteria. If unit economics do not improve after guardrails, or incident rate exceeds threshold, retire the agent. Keeping a failed experiment running because sunk cost is familiar is how organisations accumulate operational debt.",
  "Cross-functional ownership beats a single 'AI team' holding every agent. Domain teams own outcomes; platform teams own control planes; security owns policy patterns; FinOps owns attribution. Without divided ownership, agents become a bottleneck service nobody can scale.",
  "Treat eval datasets like test fixtures in a payments system — versioned, reviewed, and protected from casual edits. A polluted golden set hides drift until customers report it. Measure eval coverage the same way you measure code coverage: necessary, imperfect, and better than nothing.",
  "Documentation for agents must include failure behaviour, not only happy paths. What happens at budget cap? At policy denial? At tool timeout? Operators need runbooks, not README enthusiasm. Measure mean time to diagnose using only published docs — embarrassing results drive better writing.",
  "Regulatory and privacy constraints belong in architecture, not in post-hoc legal review. Data residency, retention, and right-to-erasure apply to agent memory and logs. Measure what personal data enters prompts and tool payloads weekly. Surprises here are expensive in every sense.",
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
    ...agentIntro(post.topic, post.observe, post.measure, post.model),
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
  }

  blocks.push(...agentClose(post.topic))
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
  category: "Engineering",
  date: ${JSON.stringify(post.date)},
  dateIso: ${JSON.stringify(post.dateIso)},
  readTime: readTime(${words}),
  author,
  tags: ${JSON.stringify(post.tags)},
  art: { label: "Engineering", cells: [${JSON.stringify(shortenDeck(post.deck))}], tone: ${JSON.stringify(post.tone)} },
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
  if (svgs[svgFile]) {
    writeFileSync(join(figuresDir, svgFile), svgs[svgFile]())
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
