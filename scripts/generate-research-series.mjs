#!/usr/bin/env node
/**
 * Generates 15 "Observe → Measure → Model" engineering blog posts + SVG figures.
 * Run: node scripts/generate-research-series.mjs
 */
import { writeFileSync, mkdirSync, readFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const postsDir = join(root, "src/blog/posts")
const figuresDir = join(root, "public/assets/blog-figures")

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

function generateDates(startIso, endIso, count) {
  const start = new Date(`${startIso}T12:00:00Z`)
  const end = new Date(`${endIso}T12:00:00Z`)
  const step = (end - start) / (count - 1)
  return Array.from({ length: count }, (_, i) => {
    const d = new Date(start.getTime() + step * i)
    const dateIso = d.toISOString().slice(0, 10)
    const date = `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`
    return { date, dateIso }
  })
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

function svgWrap({ caption, elements }) {
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
  "retry-tax.svg": () => svgWrap({
    caption: "Retries multiply billable work",
    elements: [
      box(80, 170, 110, 70, "REQUEST"),
      box(250, 170, 110, 70, "RETRY x3"),
      box(420, 170, 110, 70, "DB WORK"),
      box(590, 170, 130, 90, "BILL", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      arrow(190, 205, 250, 205, { color: "#b85848" }),
      arrow(360, 205, 420, 205, { color: "#b85848" }),
      arrow(530, 205, 590, 205, { color: "#b85848" }),
      `  <text x="400" y="300" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#783848">1 failure → 3 attempts → 3x compute</text>`,
    ].join("\n"),
  }),
  "availability-trap.svg": () => svgWrap({
    caption: "Four nines hide where minutes go",
    elements: [
      `  <rect x="120" y="140" width="560" height="40" rx="4" fill="#271675" opacity="0.15"/>`,
      `  <text x="400" y="165" text-anchor="middle" font-family="ui-monospace, monospace" font-size="11" fill="#271675">99.99% AVAILABILITY</text>`,
      box(140, 220, 100, 60, "GATEWAY", { stroke: "#271675" }),
      box(270, 220, 100, 60, "SERVICE", { stroke: "#271675" }),
      box(400, 220, 100, 60, "CACHE", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(530, 220, 100, 60, "DATABASE", { stroke: "#271675" }),
      `  <text x="450" y="310" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#783848">Most downtime minutes live in one dependency</text>`,
    ].join("\n"),
  }),
  "cold-start-system-cost.svg": () => svgWrap({
    caption: "Cold start cost extends beyond duration",
    elements: [
      box(100, 180, 120, 70, "LAMBDA", { stroke: "#271675" }),
      box(280, 160, 120, 50, "TIMEOUT", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(280, 230, 120, 50, "RETRY", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(460, 180, 140, 70, "QUEUE DEPTH", { stroke: "#271675" }),
      arrow(220, 215, 280, 185, { color: "#271675" }),
      arrow(220, 215, 280, 255, { color: "#b85848", dashed: true }),
      arrow(400, 215, 460, 215, { color: "#271675" }),
    ].join("\n"),
  }),
  "cloud-bill-dependency-graph.svg": () => svgWrap({
    caption: "Invoice topology mirrors architecture",
    elements: [
      box(340, 80, 120, 60, "API GW", { stroke: "#271675" }),
      box(180, 180, 120, 60, "ORDERS", { stroke: "#271675" }),
      box(340, 180, 120, 60, "PAYMENTS", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(500, 180, 120, 60, "INVENTORY", { stroke: "#271675" }),
      box(340, 290, 120, 60, "DATABASE", { stroke: "#271675" }),
      arrow(400, 140, 240, 180, { color: "#271675" }),
      arrow(400, 140, 400, 180, { color: "#271675" }),
      arrow(400, 140, 560, 180, { color: "#271675" }),
      arrow(400, 240, 400, 290, { color: "#b85848" }),
      `  <text x="400" y="370" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#783848">Cost follows the dependency graph</text>`,
    ].join("\n"),
  }),
  "observability-cardinality-budget.svg": () => svgWrap({
    caption: "Cardinality grows faster than insight",
    elements: [
      `  <polyline points="120,320 220,280 320,240 420,200 520,160 620,120" stroke="#271675" stroke-width="2" fill="none"/>`,
      `  <polyline points="120,320 220,300 320,290 420,285 520,282 620,280" stroke="#b85848" stroke-width="2" fill="none" stroke-dasharray="6 4"/>`,
      `  <text x="130" y="340" font-family="ui-monospace, monospace" font-size="10" fill="#131313">DIMENSIONS</text>`,
      `  <text x="620" y="110" text-anchor="end" font-family="ui-monospace, monospace" font-size="10" fill="#271675">INGEST COST</text>`,
      `  <text x="620" y="270" text-anchor="end" font-family="ui-monospace, monospace" font-size="10" fill="#b85848">USEFUL SIGNAL</text>`,
    ].join("\n"),
  }),
  "architecture-of-500ms-timeout.svg": () => svgWrap({
    caption: "A deadline is a shared budget",
    elements: [
      `  <rect x="100" y="200" width="600" height="24" rx="4" fill="#271675" opacity="0.2"/>`,
      `  <text x="400" y="217" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10" fill="#271675">500ms CLIENT DEADLINE</text>`,
      box(110, 250, 70, 50, "DNS", { stroke: "#271675" }),
      box(195, 250, 70, 50, "TLS", { stroke: "#271675" }),
      box(280, 250, 70, 50, "GW", { stroke: "#271675" }),
      box(365, 250, 90, 50, "SERVICE", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(470, 250, 70, 50, "CACHE", { stroke: "#271675" }),
      box(555, 250, 70, 50, "DB", { stroke: "#271675" }),
      `  <text x="410" y="330" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#783848">One slow hop consumes the rest</text>`,
    ].join("\n"),
  }),
  "microservice-complexity-curve.svg": () => svgWrap({
    caption: "Complexity rises faster than capability",
    elements: [
      `  <path d="M120 300 Q300 290 400 220 T680 100" stroke="#271675" stroke-width="2" fill="none"/>`,
      `  <path d="M120 300 Q300 295 420 270 T680 240" stroke="#b85848" stroke-width="2" fill="none" stroke-dasharray="6 4"/>`,
      `  <text x="130" y="320" font-family="ui-monospace, monospace" font-size="10" fill="#131313">SERVICE COUNT →</text>`,
      `  <text x="690" y="105" font-family="ui-monospace, monospace" font-size="10" fill="#271675">OPS LOAD</text>`,
      `  <text x="690" y="245" font-family="ui-monospace, monospace" font-size="10" fill="#b85848">DELIVERY</text>`,
    ].join("\n"),
  }),
  "human-latency-layer.svg": () => svgWrap({
    caption: "Humans add minutes to seconds",
    elements: [
      box(100, 190, 130, 60, "AUTOMATION", { stroke: "#271675" }),
      box(310, 190, 130, 60, "APPROVAL", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(520, 190, 130, 60, "REMEDIATE", { stroke: "#271675" }),
      arrow(230, 220, 310, 220, { color: "#271675" }),
      arrow(440, 220, 520, 220, { color: "#b85848", dashed: true }),
      `  <text x="375" y="290" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#783848">Minutes in the human layer</text>`,
    ].join("\n"),
  }),
  "ai-made-code-cheap.svg": () => svgWrap({
    caption: "Verification becomes the bottleneck",
    elements: [
      box(100, 170, 110, 60, "GENERATE", { stroke: "#271675" }),
      box(250, 170, 110, 60, "REVIEW", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(400, 170, 110, 60, "CI/CD", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(550, 170, 110, 60, "DEPLOY", { stroke: "#271675" }),
      arrow(210, 200, 250, 200),
      arrow(360, 200, 400, 200),
      arrow(510, 200, 550, 200),
      `  <text x="325" y="270" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#783848">Code cheap; assurance expensive</text>`,
    ].join("\n"),
  }),
  "engineering-tool-sprawl.svg": () => svgWrap({
    caption: "Every tool adds an integration edge",
    elements: [
      box(360, 90, 80, 50, "TEAM", { stroke: "#271675" }),
      box(160, 200, 90, 50, "JIRA", { stroke: "#131313" }),
      box(300, 200, 90, 50, "SLACK", { stroke: "#131313" }),
      box(440, 200, 90, 50, "DATADOG", { stroke: "#131313" }),
      box(580, 200, 90, 50, "PAGER", { stroke: "#131313" }),
      arrow(400, 140, 205, 200, { color: "#b85848", dashed: true }),
      arrow(400, 140, 345, 200, { color: "#b85848", dashed: true }),
      arrow(400, 140, 485, 200, { color: "#b85848", dashed: true }),
      arrow(400, 140, 625, 200, { color: "#b85848", dashed: true }),
    ].join("\n"),
  }),
  "one-percent-failure.svg": () => svgWrap({
    caption: "Small failure rates compound",
    elements: [
      box(100, 190, 100, 60, "1% FAIL", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(260, 170, 100, 50, "RETRY", { stroke: "#271675" }),
      box(260, 240, 100, 50, "FAN-OUT", { stroke: "#271675" }),
      box(420, 190, 140, 60, "99% IMPACT", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      arrow(200, 220, 260, 195, { color: "#b85848" }),
      arrow(200, 220, 260, 265, { color: "#b85848" }),
      arrow(360, 220, 420, 220, { color: "#b85848" }),
    ].join("\n"),
  }),
  "queue-hiding-incident.svg": () => svgWrap({
    caption: "Queues absorb errors until they cannot",
    elements: [
      `  <rect x="140" y="160" width="520" height="100" rx="6" fill="#fff" stroke="#271675" stroke-width="2"/>`,
      `  <text x="400" y="195" text-anchor="middle" font-family="ui-monospace, monospace" font-size="11" fill="#271675">QUEUE DEPTH RISING</text>`,
      `  <text x="400" y="230" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#783848">HTTP 200 while lag grows</text>`,
      box(100, 300, 140, 50, "0 ERRORS", { stroke: "#271675" }),
      box(560, 300, 140, 50, "AGE ↑", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
    ].join("\n"),
  }),
  "iam-graph.svg": () => svgWrap({
    caption: "Permissions form a graph nobody owns",
    elements: [
      box(360, 80, 80, 50, "ROLE", { stroke: "#271675" }),
      box(180, 200, 100, 50, "POLICY A", { stroke: "#131313" }),
      box(350, 200, 100, 50, "POLICY B", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(520, 200, 100, 50, "POLICY C", { stroke: "#131313" }),
      box(360, 310, 80, 50, "S3", { stroke: "#271675" }),
      arrow(400, 130, 230, 200, { color: "#271675" }),
      arrow(400, 130, 400, 200, { color: "#b85848" }),
      arrow(400, 130, 570, 200, { color: "#271675" }),
      arrow(230, 250, 380, 310, { dashed: true }),
      arrow(400, 250, 400, 310),
      arrow(570, 250, 420, 310, { dashed: true }),
    ].join("\n"),
  }),
  "backup-not-restore.svg": () => svgWrap({
    caption: "Backup success ≠ restore success",
    elements: [
      box(140, 180, 120, 70, "BACKUP OK", { stroke: "#271675" }),
      box(340, 160, 120, 50, "SECRETS?", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(340, 230, 120, 50, "DNS?", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(540, 180, 120, 70, "RESTORE?", { stroke: "#271675" }),
      arrow(260, 215, 340, 185, { color: "#b85848", dashed: true }),
      arrow(260, 215, 340, 255, { color: "#b85848", dashed: true }),
      arrow(460, 215, 540, 215, { color: "#271675" }),
    ].join("\n"),
  }),
  "deployment-unit-of-change.svg": () => svgWrap({
    caption: "Change size shapes risk",
    elements: [
      box(120, 170, 220, 80, "ONE LARGE CHANGE", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(460, 170, 220, 80, "TWENTY SMALL", { stroke: "#271675" }),
      `  <text x="230" y="290" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#783848">Same code, different blast radius</text>`,
      `  <text x="570" y="290" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#271675">Rollback surface differs</text>`,
    ].join("\n"),
  }),
}

function seriesIntro(topic, observe, measure, model) {
  return [
    p(
      `${topic} is discussed in architecture reviews and post-mortems, often as a reliability topic or a FinOps exercise. The conversation stops at policy slides. Constrange's Observe → Measure → Model series treats it as an engineering economics problem: what does the system actually do, what does that work cost, and what model explains the gap between intent and invoice.`,
    ),
    p(observe),
    p(measure),
    p(model),
  ]
}

function seriesClose(topic) {
  return [
    h2("Questions for your next review"),
    ul([
      `What would we see if we measured ${topic} for one week?`,
      "Which dependency owns the majority of the cost or delay?",
      "What policy or architecture assumption does the data contradict?",
      "What is the smallest experiment that would change our model?",
    ]),
    p(
      `The organisations that improve ${topic} are not those with the best slogans. They are those that observe honestly, measure without vanity metrics, and update the model when the bill or the trace disagrees with the diagram.`,
    ),
    cta(
      `Need help reading ${topic} in your stack?`,
      "Bring your dashboards, invoices, and last incident. We will help you observe what matters, measure what costs, and model what to change.",
    ),
  ]
}

const seriesMeta = [
  {
    slug: "the-retry-tax",
    title: "The Retry Tax: How Much of Your Cloud Bill Is Failure?",
    deck: "Don't just explain retries. Measure the economics of extra compute, network, database work, and queueing when failure meets retry policy.",
    figure: "retry-tax.svg",
    tone: "coral",
    tags: ["Retries", "FinOps", "Reliability", "Cloud cost"],
    faqs: [
      ["How do I measure the retry tax?", "Tag retry attempts in metrics and allocate compute, egress, and database time per dependency. Compare successful vs retried request cost."],
      ["Is disabling retries the answer?", "No. Cap attempts, add jitter, require idempotency, and measure amplification before and after policy changes."],
      ["Why does finance not see retry cost?", "Bills aggregate by service, not by failure mode. Split cost by outcome: first attempt vs retry path."],
      ["What is a healthy retry multiplier?", "It depends on dependency SLO. If retries routinely exceed 1.2x baseline traffic, investigate before the next incident."],
    ],
    blocks: [
      ...seriesIntro(
        "Retry policy",
        "Observe: log retry attempt count per operation, per dependency, and per caller. Most teams only log final outcome. The attempts are where the money goes.",
        "Measure: multiply retried requests by unit cost — Lambda duration, API gateway charges, database CPU, egress bytes. A 3% error rate with 3 retries per failure is not 3% extra load. It is multiplicative.",
        "Model: treat retry as a tax rate on failure. If dependency failure probability is p and average attempts is a, expected work scales with 1 + p(a-1) before fan-out. Fan-out makes it worse.",
      ),
      h2("The invoice line items retries create"),
      p(
        "Retries show up everywhere the first attempt touched — and sometimes places it did not. A timed-out HTTP call may still have consumed database connections. A retried Lambda may cold-start twice. A message redelivered may run two consumers. Finance sees steady growth in compute. Engineering sees acceptable success rates.",
      ),
      fig("retry-tax.svg", "Retry path multiplying billable work across compute and database", "Each retry attempt bills like success — without guaranteeing value."),
      table("Retry cost components", ["Resource", "How retries inflate it"], [
        ["Compute", "Repeated execution of the same handler"],
        ["Database", "Duplicate queries and connection hold time"],
        ["Network", "Extra egress and cross-region hops"],
        ["Queues", "Redelivery, visibility timeout churn"],
        ["Observability", "Duplicate traces and log volume"],
      ]),
      h2("Failure mode meets policy"),
      p(
        "Retry policy is not neutral. Aggressive retries during partial outage convert a sick dependency into an unavailable one. The tax is paid in money and in minutes of recovery. Measure the tax during game days: artificially slow a dependency and watch cost per successful user action climb.",
      ),
      note("If retry amplification is invisible in metrics, it is invisible in architecture review — until finance asks why compute doubled."),
      h2("From policy to model"),
      ol([
        "Instrument retry count on every outbound client",
        "Allocate cloud cost by service and compare to traffic",
        "Compute retry multiplier = total attempts / successful outcomes",
        "Set a budget: retry traffic must not exceed N% of baseline",
        "Review policies where multiplier exceeds budget monthly",
      ]),
      h3("Idempotency changes the economics"),
      p(
        "Retries without idempotency create duplicate side effects — refunds issued twice, emails resent, inventory decremented again. The tax then includes operational reconciliation, not only cloud spend. Model idempotency as a prerequisite for any retry on mutating paths.",
      ),
      quote("A retry without a budget is optimism with a load generator attached."),
      ...seriesClose("retry economics"),
    ],
  },
  {
    slug: "the-availability-trap",
    title: "The 99.99% Availability Trap: What Happens Between the 9s?",
    deck: "Four nines sounds precise until you decompose where minutes actually go — and which dependency owns them.",
    figure: "availability-trap.svg",
    tone: "dusk",
    tags: ["SLO", "Availability", "Dependencies", "Reliability"],
    faqs: [
      ["Is 99.99% enough?", "It allows ~52 minutes downtime per year. Whether that is enough depends on which minutes and which customers."],
      ["How do I decompose availability?", "Measure uptime per dependency and per user journey, not only per service dashboard green."],
      ["Why do SLOs pass during outages?", "Aggregate SLOs hide localized failure and dependency minutes absorbed by retries and queues."],
      ["What should we model?", "Error budget consumption by dependency, region, and journey — not a single global percentage."],
    ],
    blocks: [
      ...seriesIntro(
        "Availability targets",
        "Observe: collect minute-level availability per dependency in the critical path. The headline number hides which box turned red.",
        "Measure: convert nines to minutes per year and assign minutes to owners. 99.99% is 52 minutes. If cache owns 40, that is the programme.",
        "Model: availability composes multiplicatively across serial dependencies. Four nines globally may be three nines on the path that matters.",
      ),
      h2("Between the nines"),
      p(
        "Leadership quotes four nines. Operations lives in the gaps: deploy windows, certificate expiry, regional DNS, throttling, poison messages, human change. Each gap has an owner — or nobody. The trap is treating availability as a property of your service when it is a property of the path.",
      ),
      fig("availability-trap.svg", "Availability budget split across gateway, service, cache, and database", "Most downtime minutes concentrate in one dependency."),
      table("Nines to minutes (per year)", ["Availability", "Downtime budget"], [
        ["99%", "~3.65 days"],
        ["99.9%", "~8.76 hours"],
        ["99.99%", "~52.6 minutes"],
        ["99.999%", "~5.26 minutes"],
      ]),
      h2("Who owns the minutes"),
      p(
        "Decompose incidents by dependency contribution to missed SLO. Shared platforms — identity, payments, search — often consume budget without appearing on your team's dashboard. Measure journey SLO, not service ping.",
      ),
      note("A green service dashboard does not mean customers completed checkout."),
      h3("Error budgets as currency"),
      p(
        "Spend error budget deliberately on releases. When budget is gone, stop shipping to that path or invest in the dependency that spent it. Without decomposition, teams argue about nines while minutes leak sideways.",
      ),
      quote("Precision in the headline breeds complacency in the dependencies."),
      ...seriesClose("availability minutes"),
    ],
  },
  {
    slug: "cold-start-system-cost",
    title: "The Cost of a Cold Start Is Not the Cost of a Cold Start",
    deck: "Lambda duration is one line item. System-level latency, timeouts, retries, and queue growth are the real bill.",
    figure: "cold-start-system-cost.svg",
    tone: "frost",
    tags: ["Serverless", "Latency", "Cold start", "Architecture"],
    faqs: [
      ["Should we eliminate cold starts?", "Not always. Measure system cost first — provisioned concurrency may cost more than occasional cold starts."],
      ["How do cold starts hide cost?", "They trigger timeouts upstream, retries, and queue backlog that do not appear on the Lambda line item."],
      ["What should we measure?", "End-to-end success latency, retry rate, and queue age — not only function init duration."],
      ["When is provisioned concurrency worth it?", "When cold-start-induced retries and timeouts exceed the cost of warm capacity on the hot path."],
    ],
    blocks: [
      ...seriesIntro(
        "Cold starts",
        "Observe: trace cold starts through the full request path. Init duration is one span. Timeouts and retries are others.",
        "Measure: compare p99 user latency on cold vs warm invocations. Add retry cost and queue depth during scale-from-zero events.",
        "Model: cold start cost = init time + downstream timeout probability × retry cost + queueing delay under burst.",
      ),
      h2("The line item lie"),
      p(
        "Serverless bills reward the story that you pay only for execution. True for the function. False for the system. A cold start at the wrong hop consumes client deadline budget. The client retries. The function runs again — cold or warm. The queue behind the function grows while HTTP returns 504.",
      ),
      fig("cold-start-system-cost.svg", "Cold start rippling into timeouts, retries, and queue depth", "Duration on the invoice is not duration in the customer experience."),
      h2("Scale-from-zero under load"),
      p(
        "Black Friday does not arrive as a single request. It arrives as a step. Scale-from-zero adds latency precisely when concurrency spikes. Autoscaling policies tuned for average traffic underestimate tail risk.",
      ),
      ul([
        "Measure cold start rate during deploys and traffic steps",
        "Correlate cold starts with upstream timeout metrics",
        "Track queue age when functions scale from zero",
        "Compare provisioned concurrency cost vs retry tax",
      ]),
      note("Optimising init time alone while ignoring timeout policy is optimising the wrong variable."),
      h3("Architecture alternatives"),
      ol([
        "Keep warm capacity on the synchronous hot path",
        "Move burst absorption to a queue with honest lag SLO",
        "Shorten chains so fewer hops share one deadline",
        "Fail fast with degraded response instead of retry storms",
      ]),
      quote("The cold start you measure is the cold start you planned for. The expensive one is the timeout it caused upstream."),
      ...seriesClose("cold-start system cost"),
    ],
  },
  {
    slug: "cloud-bill-dependency-graph",
    title: "Your Cloud Bill Has a Dependency Graph",
    deck: "Treat invoices as architecture topology. Cost topology beats cost accounting when growth has a join.",
    figure: "cloud-bill-dependency-graph.svg",
    tone: "plum",
    tags: ["FinOps", "Architecture", "Cloud cost", "Dependencies"],
    faqs: [
      ["How do I map bill to architecture?", "Tag resources by service and team, then overlay call graphs from tracing or service mesh."],
      ["Why does cost grow faster than traffic?", "Joins amplify work — fan-out, retries, and chatty dependencies scale super-linearly."],
      ["What is cost topology?", "The shape of spend following dependency edges, not only account hierarchy."],
      ["Where do we start?", "Pick one revenue-critical journey and reconcile its trace graph with last month's invoice."],
    ],
    blocks: [
      ...seriesIntro(
        "Cloud invoices",
        "Observe: export cost by resource tag and service. Overlay the runtime dependency graph from traces.",
        "Measure: attribute marginal cost per edge — what does an extra order cost in payments API calls, database reads, egress?",
        "Model: cost propagates like latency. A join that fans out to five services multiplies spend when traffic doubles.",
      ),
      h2("Accounting vs topology"),
      p(
        "FinOps dashboards sort by account, project, and tag. Architecture diagrams sort by call direction. When growth has a join — checkout calling payments, search, inventory, and fraud — cost accounting hides which edge thickened. Cost topology makes the join visible.",
      ),
      fig("cloud-bill-dependency-graph.svg", "Invoice spend following service dependency edges", "The expensive hop is often one dependency downstream of the service you optimised."),
      table("View", ["Shows", "Hides"], [
        ["Cost accounting", "Who pays", "Why work multiplied"],
        ["Cost topology", "Which edge grew", "Org chargeback politics"],
        ["Traffic metrics", "Request volume", "Per-request work"],
      ]),
      h2("Growth with a join"),
      p(
        "Traffic doubled. Bill tripled. The join is the suspect: N+1 queries, missing cache, synchronous fan-out, cross-region calls added for one feature. Measure cost per successful business event, not per service container hour.",
      ),
      note("If you cannot draw your bill as a graph, you cannot explain spikes as architecture."),
      h3("Practical attribution"),
      ol([
        "Pick one journey and tag spans with business event id",
        "Sum cloud cost per service on that path for a day",
        "Divide by successful events — cost per outcome",
        "Repeat monthly and watch which edge moves",
      ]),
      quote("Invoices are logs written in currency. Read them like telemetry."),
      ...seriesClose("cost topology"),
    ],
  },
  {
    slug: "observability-cardinality-budget",
    title: "Observability Has a Cardinality Budget",
    deck: "Telemetry becomes infrastructure. Model useful signal against ingestion, storage, and query cost as dimensions grow.",
    figure: "observability-cardinality-budget.svg",
    tone: "slate",
    tags: ["Observability", "Cardinality", "Metrics", "Cost"],
    faqs: [
      ["What is cardinality?", "The number of unique time series — often driven by high-cardinality labels like user id or request id."],
      ["How do I set a budget?", "Cap labels per metric, sample traces, and measure ingest cost per team per month."],
      ["Does more telemetry mean more insight?", "Only until query latency and cost make dashboards unusable. Signal-to-spend matters."],
      ["What labels are safe?", "Low-cardinality: service, region, route, status class. Avoid unbounded ids in metrics."],
    ],
    blocks: [
      ...seriesIntro(
        "Telemetry cardinality",
        "Observe: count active series per metric and team. Cardinality explosions arrive quietly in the ingest bill.",
        "Measure: dollars per million samples, query latency at p95, and dashboard time-to-answer during incidents.",
        "Model: insight scales sub-linearly with dimensions; cost scales linearly or worse. There is a budget.",
      ),
      h2("Telemetry as infrastructure"),
      p(
        "Metrics, logs, and traces are not free side effects of shipping code. They are storage systems with query engines and retention policies. High-cardinality labels — user ids, session ids, unbounded route templates — turn observability into a cost centre that competes with production workloads.",
      ),
      fig("observability-cardinality-budget.svg", "Ingest cost rising faster than useful signal as dimensions grow", "More dimensions do not automatically mean more understanding."),
      h2("The cardinality budget"),
      p(
        "Assign each team a monthly cardinality budget: max active series, max ingest gigabytes, max custom metrics. Exceeding budget requires justification — usually an incident-driven temporary lift with expiry.",
      ),
      table("Label class", ["Example", "Metric safe?"], [
        ["Low", "service, region, status", "Yes"],
        ["Medium", "route template, tenant tier", "With caps"],
        ["High", "user_id, request_id", "Traces/logs only, sampled"],
        ["Unbounded", "free-text error message", "Never in metrics"],
      ]),
      note("If querying your metrics during an incident times out, you optimised for collection over retrieval."),
      h3("Sampling is a design choice"),
      p(
        "Trace sampling, log filtering, and metric aggregation are not admissions of failure. They are how you keep signal dense enough to use. Model sampling rate against incident debuggability — 1% may be fine until it is not.",
      ),
      quote("Dashboards you cannot afford to query are observability theatre."),
      ...seriesClose("cardinality budget"),
    ],
  },
  {
    slug: "architecture-of-500ms-timeout",
    title: "The Architecture of a 500ms Timeout",
    deck: "A client deadline is a budget across DNS, TLS, gateways, services, and databases — until one slow hop consumes the rest.",
    figure: "architecture-of-500ms-timeout.svg",
    tone: "wine",
    tags: ["Latency", "Timeouts", "Architecture", "SLO"],
    faqs: [
      ["Is 500ms a good timeout?", "Only if the budget is allocated across hops. A single global timeout hides which hop spent it."],
      ["How do I budget latency?", "Sum p95 hop latency with margin; set per-hop timeouts less than client deadline."],
      ["Why do timeouts cascade?", "Upstream waits for downstream; one slow database hop consumes gateway and TLS budget."],
      ["What should we model?", "Deadline as a shared budget with per-hop caps and fail-fast at each layer."],
    ],
    blocks: [
      ...seriesIntro(
        "Client deadlines",
        "Observe: trace each hop in a critical path with span timings. The client timeout is the envelope.",
        "Measure: how much of 500ms DNS, TLS, gateway, service, cache, and database consume at p95 and p99.",
        "Model: serial hops sum; the slowest hop near the end leaves no margin for recovery or retry.",
      ),
      h2("A deadline is not a single knob"),
      p(
        "Mobile clients set 500ms. API gateways inherit it. Services copy it into HTTP clients. Nobody allocated budget per hop. DNS spikes. TLS handshake on cold connection. Gateway auth. Service logic. Cache miss to database. One slow hop does not take 20% of 500ms — it takes whatever is left.",
      ),
      fig("architecture-of-500ms-timeout.svg", "500ms deadline split across DNS, TLS, gateway, service, cache, and database", "One slow hop consumes the shared budget."),
      table("Hop", ["Typical p95", "Budget risk"], [
        ["DNS", "5–30ms", "Spikes on resolver issues"],
        ["TLS", "20–80ms", "Cold connections, cert chains"],
        ["Gateway", "10–50ms", "Auth, rate limits, WAF"],
        ["Service", "50–200ms", "Business logic, fan-out"],
        ["Database", "10–300ms", "Cache miss, lock, query"],
      ]),
      h2("Timeout policy as architecture"),
      p(
        "Per-hop timeouts should be shorter than the client deadline, with context passed downstream. Parent remaining budget beats static 500ms on every call. Without propagation, inner services think they have 500ms when the client has 50ms left.",
      ),
      note("Retries inside a deadline often guarantee timeout — budget was already spent."),
      h3("Design for partial failure"),
      ol([
        "Return degraded response before deadline exhaustion",
        "Cache aggressively on the hot path",
        "Parallelise independent hops where possible",
        "Measure budget consumption per hop in traces",
      ]),
      quote("A timeout without a budget map is a wish that the slowest hop will cooperate."),
      ...seriesClose("latency budgets"),
    ],
  },
  {
    slug: "one-more-microservice-complexity-curve",
    title: "One More Microservice: The Complexity Curve",
    deck: "Measure operational complexity as service count grows — deployments, alerts, IAM, failure paths — and ask where decomposition stops paying.",
    figure: "microservice-complexity-curve.svg",
    tone: "moss",
    tags: ["Microservices", "Complexity", "Architecture", "Operations"],
    faqs: [
      ["When do microservices stop paying off?", "When operational load rises faster than team autonomy and deployment independence."],
      ["What should we measure?", "Deploy frequency per service, alert count, IAM policies, and cross-service incident rate."],
      ["Is one more service ever free?", "No. Each service adds deploy pipeline, on-call surface, and failure paths."],
      ["What is the alternative?", "Modular monolith or well-bounded contexts before splitting for fashion."],
    ],
    blocks: [
      ...seriesIntro(
        "Service decomposition",
        "Observe: count services, deploy pipelines, alert rules, and IAM roles. Complexity accumulates in operations, not slides.",
        "Measure: plot operational load vs service count — incidents involving multiple services, mean time to diagnose cross-boundary failures.",
        "Model: complexity often super-linear. The nth service costs more than the first because integration surface grows.",
      ),
      h2("The complexity curve"),
      p(
        "Early splits reduce coupling and speed small teams. Later splits fragment ownership: partial deploys, version skew, distributed transactions nobody wanted. 'One more microservice' feels like progress. Measure whether deployment independence still justifies the integration tax.",
      ),
      fig("microservice-complexity-curve.svg", "Operational load rising faster than delivery benefit as service count grows", "The curve bends when coordination cost dominates."),
      h2("What each service adds"),
      ul([
        "CI/CD pipeline and test matrix",
        "On-call rotation and runbooks",
        "IAM roles and network policies",
        "Observability dashboards and SLOs",
        "Cross-service contract tests and versioning",
      ]),
      table("Stage", ["Benefit", "Cost"], [
        ["1–5 services", "Team autonomy", "Moderate ops"],
        ["5–15 services", "Independent deploy", "Alert sprawl"],
        ["15+ services", "Theoretical scaling", "Coordination dominates"],
      ]),
      note("If most incidents require a war room across five services, you bought distribution without buying isolation."),
      h3("Where decomposition stops paying"),
      p(
        "Stop when boundaries are stable, teams are sized to services, and operational metrics flatten delivery. If every feature touches six repos, the model is wrong regardless of diagram aesthetics.",
      ),
      quote("Microservices are a scaling strategy, not a maturity badge."),
      ...seriesClose("service complexity"),
    ],
  },
  {
    slug: "human-latency-layer",
    title: "The Human Latency Layer in Automated Systems",
    deck: "Automated remediation in seconds. Approval-based remediation in minutes. When humans help — and when they become the bottleneck.",
    figure: "human-latency-layer.svg",
    tone: "amber",
    tags: ["Automation", "Operations", "Incident response", "Governance"],
    faqs: [
      ["Should we remove humans from remediation?", "Not always. Model which actions need approval and which can run automatically within blast radius budget."],
      ["How do I measure human latency?", "Time from automated detection to human approval to remediation complete."],
      ["When are humans the bottleneck?", "When approval is required for reversible actions with bounded blast radius."],
      ["What is the alternative?", "Tiered automation: auto-remediate safe actions; escalate edge cases."],
    ],
    blocks: [
      ...seriesIntro(
        "Human approval in automation",
        "Observe: measure detection-to-resolution with and without human gates. The gap is the human latency layer.",
        "Measure: minutes waiting for approval during incidents; correlate with incident duration and customer impact.",
        "Model: total remediation time = automation latency + human latency + execution. Optimise the dominant term.",
      ),
      h2("Seconds vs minutes"),
      p(
        "Runbooks promise automated rollback in seconds. Change advisory boards promise prudence. Both are right in context. Wrong when every rollback needs a manager on Slack at 2 a.m. The human layer adds minutes — sometimes hours — while queues grow and error budgets burn.",
      ),
      fig("human-latency-layer.svg", "Automation blocked by approval before remediation", "Minutes in the human layer dominate seconds in automation."),
      h2("When humans help"),
      p(
        "Humans excel at ambiguous judgement: is this attack or misconfiguration? Should we fail over regions? Is the data corrupt? Automate reversible, bounded actions. Reserve humans for irreversible or high-blast-radius moves — but measure the cost of waiting.",
      ),
      ul([
        "Auto-scale within predefined bounds",
        "Restart unhealthy instances with circuit limits",
        "Drain nodes after health check failure",
        "Require human approval for data deletion or cross-region failover",
      ]),
      note("If your automation waits for humans on actions you would trust an intern to click, redesign the gate."),
      h3("Blast radius budget"),
      ol([
        "Classify actions by reversibility and blast radius",
        "Auto-execute low-risk actions with audit log",
        "Pre-approve runbooks for known scenarios",
        "Measure human latency as an SLO",
      ]),
      quote("Governance that cannot distinguish safe automation from reckless automation becomes queue time."),
      ...seriesClose("human latency"),
    ],
  },
  {
    slug: "ai-made-code-cheap",
    title: "AI Made Code Cheap. What Became Expensive?",
    deck: "More generated code means larger PRs, more review, more CI, more deployment risk. Verification becomes the constraint.",
    figure: "ai-made-code-cheap.svg",
    tone: "ink",
    tags: ["AI", "Engineering", "CI/CD", "Quality"],
    faqs: [
      ["Did AI reduce engineering cost?", "Generation got cheaper; review, test, and operational assurance often got more expensive."],
      ["What became the bottleneck?", "Verification — code review capacity, CI time, integration test maintenance."],
      ["How should teams adapt?", "Invest in test harnesses, smaller PRs, and automated checks before scaling generation."],
      ["Is more code always progress?", "Only if the organisation can absorb, review, and operate it."],
    ],
    blocks: [
      ...seriesIntro(
        "AI-assisted development",
        "Observe: track PR size, review time, CI duration, and defect rate before and after heavy AI adoption.",
        "Measure: cost per merged line — reviewer hours, CI minutes, incident rate on generated code paths.",
        "Model: if generation is O(1) and verification is O(n), the constraint moves to assurance.",
      ),
      h2("Cheap generation, expensive assurance"),
      p(
        "Models produce diffs quickly. Reviewers read slowly. CI runs every line. Larger PRs skip careful review. Generated code looks plausible — tests pass until edge cases in production. The bottleneck moved from typing to trusting.",
      ),
      fig("ai-made-code-cheap.svg", "Generate, review, CI, deploy pipeline with review and CI as bottlenecks", "Code is cheap; confidence is not."),
      table("Stage", ["Before AI", "After AI"], [
        ["Write code", "Slow", "Fast"],
        ["Review", "Bottleneck", "Worse bottleneck"],
        ["CI", "Steady", "Longer queues"],
        ["Operate", "Same", "More surface area"],
      ]),
      h2("Verification as strategy"),
      p(
        "Teams that win invest in contract tests, smaller batches, static analysis, and clear ownership of generated modules. Treat AI output as untrusted input until proven — same as any external dependency.",
      ),
      note("A 2000-line PR from a model is not velocity. It is a review debt invoice."),
      h3("Organisational limits"),
      ol([
        "Cap PR size and require decomposition",
        "Mandate tests for generated paths",
        "Track review time and CI cost per team",
        "Own operational runbooks for AI-touched services",
      ]),
      quote("The expensive part of software was never the keystrokes."),
      ...seriesClose("verification economics"),
    ],
  },
  {
    slug: "engineering-tool-sprawl-tax",
    title: "The Hidden Cost of Tool Sprawl in Engineering",
    deck: "Fragmentation is an integration tax — auth boundaries, webhooks, duplicate capability, context switching.",
    figure: "engineering-tool-sprawl.svg",
    tone: "clay",
    tags: ["Tooling", "Engineering", "Operations", "Productivity"],
    faqs: [
      ["How do I measure tool sprawl cost?", "Count integrations, auth systems, and context switches per incident and per developer day."],
      ["Is more tooling always bad?", "No — but duplicate capability and missing integration compound silently."],
      ["What is the integration tax?", "Time spent syncing state, copying links, and reconciling conflicting dashboards."],
      ["Where do we start reducing sprawl?", "Map tools to capabilities; retire duplicates; standardise on one auth and alert path."],
    ],
    blocks: [
      ...seriesIntro(
        "Engineering tool sprawl",
        "Observe: inventory tools per capability — alerting, ticketing, docs, CI, feature flags. Count overlaps.",
        "Measure: time to assemble incident context across tools; number of webhooks and sync failures per week.",
        "Model: each tool adds nodes and edges. Sprawl tax = integration maintenance + context switching + duplicate licences.",
      ),
      h2("Fragmentation as tax"),
      p(
        "Every team picks favourites. Jira here, Linear there. Datadog and a second APM. Slack and Teams bridges. Auth boundaries multiply. Incidents start with 'which dashboard?' instead of 'what broke?'",
      ),
      fig("engineering-tool-sprawl.svg", "Team connected to many tools via dashed integration edges", "Every tool adds an integration edge."),
      h2("Duplicate capability"),
      table("Capability", ["Sprawl symptom", "Tax"], [
        ["Alerting", "Three on-call rotations", "Missed pages"],
        ["Docs", "Notion + Confluence + README", "Stale truth"],
        ["CI", "Per-team pipelines", "Drift"],
        ["Feature flags", "Two vendors", "Wrong flag in prod"],
      ]),
      p(
        "Consolidation is unpopular because it threatens local optima. Measure the tax before debating tools: hours per sprint on glue work, failed webhooks, manual copy-paste between systems.",
      ),
      note("Tool sprawl is invisible until the incident where nobody could find the runbook."),
      h3("A sprawl audit"),
      ol([
        "List tools by capability, not by team",
        "Mark duplicates and retired-but-still-billing tools",
        "Measure incident context assembly time",
        "Pick one standard per capability with migration dates",
      ]),
      quote("Integration tax is paid in every incident and every onboarding."),
      ...seriesClose("tool sprawl"),
    ],
  },
  {
    slug: "one-percent-failure-amplification",
    title: "The 1% Failure That Takes Down the 99%",
    deck: "Small failure rates compound through retries, fan-out, concurrency, and shared dependencies.",
    figure: "one-percent-failure.svg",
    tone: "coral",
    tags: ["Reliability", "Failure modes", "Retries", "Resilience"],
    faqs: [
      ["Can 1% failure take down a system?", "Yes — through retries, fan-out, and shared resources that amplify partial failure."],
      ["How do I model amplification?", "Multiply failure probability across retries and fan-out; add shared dependency contention."],
      ["What metrics expose this?", "Retry rate, error budget burn, pool exhaustion, and cascading timeout rate."],
      ["How do we contain it?", "Circuit breakers, bulkheads, load shedding, and retry budgets."],
    ],
    blocks: [
      ...seriesIntro(
        "Partial failure amplification",
        "Observe: track failure rate per dependency and retry multiplier on callers. One percent at the edge is not one percent at the core.",
        "Measure: simulate 1% errors on a fan-out path and record pool exhaustion, latency, and success rate at the edge.",
        "Model: effective load = baseline × (1 + failure_rate × (retry_factor - 1)) × fan_out. Shared pools make it nonlinear.",
      ),
      h2("Small numbers, large outcomes"),
      p(
        "Dashboards show 99% success. The 1% retries three times into a database with fixed connections. Connection wait becomes timeout. Timeouts retry. The 1% becomes 30% slow responses. Customers experience outage while error rate looks fine.",
      ),
      fig("one-percent-failure.svg", "1% failure amplifying through retry and fan-out to broad impact", "Partial failure compounds through the architecture."),
      h2("Mechanisms of amplification"),
      ul([
        "Retries multiply load on failing dependencies",
        "Fan-out turns one slow call into many",
        "Shared connection pools couple unrelated traffic",
        "Queues hide overload until age explodes",
        "Autoscaling lags behind retry storms",
      ]),
      table("Control", ["Reduces", "Trade-off"], [
        ["Circuit breaker", "Retry amplification", "Hard failures visible"],
        ["Bulkhead", "Pool coupling", "Lower utilisation"],
        ["Load shed", "Cascading latency", "Dropped requests"],
        ["Retry budget", "Storm size", "More user-visible errors"],
      ]),
      note("Chasing 99.9% on every hop while ignoring amplification is measuring leaves and missing the forest fire."),
      quote("The dangerous failure rate is the one your retries turn into a load test."),
      ...seriesClose("failure amplification"),
    ],
  },
  {
    slug: "queue-hiding-the-incident",
    title: "Your Queue Is Hiding the Real Incident",
    deck: "Zero HTTP errors while depth and age climb. Lag is a first-class reliability metric with a recoverability horizon.",
    figure: "queue-hiding-incident.svg",
    tone: "tide",
    tags: ["Queues", "Reliability", "SLO", "Incident response"],
    faqs: [
      ["Why zero errors during an outage?", "Synchronous paths return 200 while async backlog grows — errors appear later or never on HTTP dashboards."],
      ["What metrics matter for queues?", "Depth, age p99, consumer lag, and time-to-drain at current throughput."],
      ["What is recoverability horizon?", "How long until backlog clears at steady processing rate — defines customer-visible delay."],
      ["When should queues page?", "When age or depth breaches SLO, not only when consumers crash."],
    ],
    blocks: [
      ...seriesIntro(
        "Queue-backed systems",
        "Observe: monitor queue depth and message age alongside HTTP error rate. Incidents often start in lag, not 5xx.",
        "Measure: recoverability horizon = backlog / processing rate. If horizon exceeds customer SLA, you are in incident.",
        "Model: async systems decouple acceptance from completion. Green HTTP with growing lag is deferred failure.",
      ),
      h2("HTTP green, system red"),
      p(
        "API returns 202 Accepted. Producer celebrates. Consumers fall behind. Depth climbs. Age crosses hours. Support tickets mention 'delayed notifications' while Grafana shows green. The queue absorbed the failure until it could not.",
      ),
      fig("queue-hiding-incident.svg", "Queue depth rising while HTTP error metric stays at zero", "Lag is a first-class reliability signal."),
      h2("Lag as SLO"),
      p(
        "Define SLO on processing latency: 95% of messages processed within N minutes. Page on age p99, not only consumer restarts. Model drain time after producer spike — can you recover before business impact?",
      ),
      table("Metric", ["Shows", "Misses"], [
        ["HTTP 5xx", "Sync path failure", "Backlog"],
        ["Queue depth", "Accumulated work", "Per-message age distribution"],
        ["Consumer CPU", "Worker health", "Poison messages"],
        ["Age p99", "Oldest stuck work", "Future arrival rate"],
      ]),
      note("A queue without age SLO is a buffer that lies about system health."),
      h3("Incident playbooks"),
      ol([
        "Scale consumers with proven throughput, not hope",
        "Throttle producers when horizon exceeds SLA",
        "Quarantine poison messages to unblock drain",
        "Communicate customer delay honestly",
      ]),
      quote("The incident you see in HTTP is often the incident your queue postponed."),
      ...seriesClose("queue lag"),
    ],
  },
  {
    slug: "iam-graph-nobody-understands",
    title: "The IAM Graph Nobody Can Understand",
    deck: "Permissions as a graph: principals, roles, policies, resources — overlap, unused grants, escalation paths.",
    figure: "iam-graph.svg",
    tone: "pine",
    tags: ["IAM", "Security", "Cloud", "Governance"],
    faqs: [
      ["Why is IAM a graph?", "Principals assume roles bound to policies on resources — edges multiply with teams and services."],
      ["How do I find unused permissions?", "Compare policy grants to CloudTrail or audit logs — last accessed vs granted."],
      ["What is privilege escalation path?", "A chain of assumable roles and policies that grants more than any single policy shows."],
      ["Where do we start?", "Graph one production service's effective permissions and remove unused grants."],
    ],
    blocks: [
      ...seriesIntro(
        "IAM complexity",
        "Observe: export principals, roles, policies, and resource bindings. Draw the graph — overlap appears quickly.",
        "Measure: count unused permissions, cross-account assumable roles, and admin-equivalent paths.",
        "Model: risk scales with graph connectivity, not policy count. One assumable admin role connects many nodes.",
      ),
      h2("Permissions are topology"),
      p(
        "IAM consoles list policies. Attackers and auditors think in paths. Service A assumes role B with s3:* on bucket C. Developer D can assume A for debugging. The graph nobody draws is the graph that matters in breach and compliance.",
      ),
      fig("iam-graph.svg", "Roles and policies connecting to shared resources", "Overlap and escalation paths hide in the graph."),
      h2("Overlap and drift"),
      ul([
        "Duplicate policies with different names",
        "Wildcard resources on production roles",
        "Unused grants never revoked after migrations",
        "Break-glass roles without expiry or monitoring",
        "CI roles with broader scope than deploy requires",
      ]),
      table("Review", ["Question", "Bad answer"], [
        ["Last used?", "Unknown", "Grant stands forever"],
        ["Assumable by?", "Everyone in account", "Lateral movement"],
        ["Resource scope", "*", "Blast radius entire estate"],
      ]),
      note("If nobody can explain effective permissions for one service, you do not have least privilege — you have archaeology."),
      h3("Graph-first governance"),
      ol([
        "Generate effective permission graph per service",
        "Remove grants with no access in 90 days",
        "Require justification for wildcards",
        "Alert on new assumable admin paths",
      ]),
      quote("IAM lists are inventories. IAM graphs are risk models."),
      ...seriesClose("IAM graph"),
    ],
  },
  {
    slug: "backup-success-not-restore",
    title: "Backup Success Is Not Restore Success",
    deck: "Green backup jobs do not answer whether the business can be reconstructed — dependencies, secrets, DNS, integrity.",
    figure: "backup-not-restore.svg",
    tone: "field",
    tags: ["Disaster recovery", "Backups", "Operations", "Resilience"],
    faqs: [
      ["Are green backups enough?", "No — restore drills expose missing secrets, DNS, dependencies, and data integrity gaps."],
      ["How often should we test restore?", "At least quarterly for critical paths; after major architecture changes."],
      ["What fails in restore drills?", "IAM, KMS keys, cross-region replication lag, undocumented dependencies, runbook gaps."],
      ["What should we measure?", "Time to restored business function, not time to mounted volume."],
    ],
    blocks: [
      ...seriesIntro(
        "Backup and restore",
        "Observe: run restore drills to a clean environment. Green backup jobs are necessary, not sufficient.",
        "Measure: time to transactional business function — login, order, payout — not tarball extracted.",
        "Model: restore = data + secrets + DNS + dependencies + integrity checks + runbooks. Backup covers data slice only.",
      ),
      h2("The green job lie"),
      p(
        "Backup dashboard shows success for 400 days. Restore drill fails: KMS key in wrong account, Terraform state stale, service mesh certs expired, feature flag defaults wrong. The business cannot reconstruct Tuesday from Sunday's snapshot.",
      ),
      fig("backup-not-restore.svg", "Backup OK path blocked by secrets and DNS before restore", "Backup success does not imply restore success."),
      h2("What backups do not capture"),
      table("Asset", ["In backup?", "Restore needs"], [
        ["Database dump", "Often", "Correct version, migrations"],
        ["Secrets", "Rarely", "KMS, rotation state"],
        ["DNS", "No", "Registrar, TTL, health checks"],
        ["IAM", "Partial", "Roles recreated correctly"],
        ["Dependencies", "No", "Third-party keys, queues"],
      ]),
      p(
        "Measure RTO and RPO on business outcomes. Document dependency order for restore. Automate drill environment provisioning so drills are cheap enough to run often.",
      ),
      note("Untested restore is Schrödinger's disaster recovery — both fine and catastrophic until opened."),
      h3("Drill programme"),
      ol([
        "Quarterly restore to isolated account",
        "Script business smoke tests post-restore",
        "Track gaps in a living runbook",
        "Rotate secrets used only in DR",
      ]),
      quote("Backup is a snapshot. Restore is a system reconstruction project."),
      ...seriesClose("restore readiness"),
    ],
  },
  {
    slug: "deployment-not-unit-of-change",
    title: "The Deployment Is Not the Unit of Change",
    deck: "Compare one large change versus twenty small ones. Change size may matter more than deployment frequency alone.",
    figure: "deployment-unit-of-change.svg",
    tone: "dusk",
    tags: ["Deployments", "CI/CD", "Risk", "Engineering"],
    faqs: [
      ["Is deploy frequency always good?", "Only with small change size and strong rollback. Large infrequent deploys carry different risk."],
      ["What is the unit of change?", "The diff that moves through review, test, and production — not the deploy button click."],
      ["How do large changes fail?", "Harder review, weaker test coverage, ambiguous rollback, long-lived branches."],
      ["What should we measure?", "Change size distribution, rollback rate, and mean time to diagnose per deploy size bucket."],
    ],
    blocks: [
      ...seriesIntro(
        "Deployment strategy",
        "Observe: histogram deploy diff size — lines, files, services touched. Frequency without size context misleads.",
        "Measure: incident rate and rollback success vs change size bucket. Twenty small deploys ≠ one deploy twenty times larger.",
        "Model: risk scales with change entropy — files touched, teams involved, feature flags flipped — not only deploy count.",
      ),
      h2("Frequency without size"),
      p(
        "DORA celebrates deploy frequency. Teams ship once a week — one 8,000-line merge. Another ships daily — twenty-line fixes. Same metric, different blast radius. The unit of change is the diff, not the pipeline run.",
      ),
      fig("deployment-unit-of-change.svg", "One large change vs twenty small changes with different blast radius", "Change size shapes rollback and diagnosis."),
      h2("Large change pathology"),
      ul([
        "Review skims large diffs",
        "Tests added after the fact",
        "Rollback unclear which commit to revert",
        "Multiple features share one flag",
        "Branch lives long enough to diverge",
      ]),
      table("Pattern", ["Risk", "Mitigation"], [
        ["One large weekly deploy", "High blast radius", "Split by feature, stack behind flags"],
        ["Many small deploys", "Lower per change", "Requires mature CI and observability"],
        ["Hotfix on giant branch", "Highest", "Trunk-based development"],
      ]),
      note("Deploying often without shrinking change size is motion, not safety."),
      h3("Change size as metric"),
      ol([
        "Track diff size and files touched per deploy",
        "Set team policy max PR size",
        "Correlate incidents to deploy size buckets",
        "Prefer feature flags over long branches",
      ]),
      quote("The deploy button is honest. The change behind it may not be."),
      ...seriesClose("change size"),
    ],
  },
]

const dates = generateDates("2026-08-04", "2026-09-19", seriesMeta.length)
seriesMeta.forEach((post, i) => Object.assign(post, dates[i]))

mkdirSync(postsDir, { recursive: true })
mkdirSync(figuresDir, { recursive: true })

const writtenPosts = []
const writtenSvgs = []

for (const post of seriesMeta) {
  const exportName = slugToExport(post.slug)
  const body = post.blocks.join("\n")
  const words = countWords(post.blocks)
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
  console.log("wrote post", file)

  const svgFile = post.figure
  if (svgs[svgFile]) {
    writeFileSync(join(figuresDir, svgFile), svgs[svgFile]())
    writtenSvgs.push(svgFile)
    console.log("wrote svg", svgFile)
  }
}

// Newest first
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

console.log("\nCreated:")
console.log("Posts:", writtenPosts.map((p) => p.file).join(", "))
console.log("SVGs:", writtenSvgs.join(", "))
