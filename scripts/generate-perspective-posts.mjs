#!/usr/bin/env node
/**
 * Generates the ten Perspectives / Decision guides blog posts.
 * Run: node scripts/generate-perspective-posts.mjs
 */
import { writeFileSync, mkdirSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const outDir = join(root, "src/blog/posts")

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

const posts = [
  {
    file: "the-technology-you-dont-need.ts",
    export: "technologyYouDontNeedPost",
    slug: "the-technology-you-dont-need",
    title: "The technology you don't need",
    deck: "Why the best technology decision is sometimes to change nothing.",
    date: "12 September 2026",
    dateIso: "2026-09-12",
    category: "Perspectives",
    tags: ["Technology strategy", "Decision-making", "Operating model"],
    tone: "slate",
    cell: "When the best move is no move",
    fig: "technology-you-dont-need.svg",
    figCap:
      "Stability is not stagnation. The chart shows disruption cost rising while the operational path may already be adequate.",
    faqs: [
      [
        "Is doing nothing the same as avoiding decisions?",
        "No. A deliberate choice to wait, simplify, or hold steady includes named conditions for when the decision reopens. Avoidance has no owner and no trigger.",
      ],
      [
        "How do we know we are not just resisting change?",
        "If operations can execute the work with acceptable risk today, and the proposed change does not remove a named constraint, you may be buying motion rather than progress.",
      ],
      [
        "What should we document when we choose not to change?",
        "The problem as named, the constraint, what was considered, what was stopped, and what signal would reopen the choice. That is governance, not inertia.",
      ],
      [
        "When is inaction irresponsible?",
        "When risk is rising, compliance is failing, or the unofficial path is becoming the only path with no owner. Then not changing is a decision with consequences you are choosing to accept.",
      ],
    ],
    blocks: [
      p(
        "Organisations are optimised to act. Committees form. Budgets allocate. Vendors arrive with timelines. Somewhere in that momentum, the option to change nothing disappears from the slide deck. It is treated as failure, delay, or lack of vision. In practice, the best technology decision is often to hold the line: keep the system you have, fix the join, clarify ownership, or stop doing work that should not exist.",
      ),
      p(
        "That is uncomfortable in rooms where everyone expects a roadmap. It is also how mature organisations avoid compounding complexity. Constrange sees expensive programmes launched because standing still felt politically impossible, not because the problem required a new platform. The cost of change is always visible in business cases. The cost of unnecessary change is buried in integration debt, training fatigue, and the quiet return of the unofficial path.",
      ),
      p(
        "Choosing not to change is not the same as refusing to think. It is the outcome of a reading: the constraint is elsewhere, the system is not the bottleneck, or the organisation cannot absorb another migration this year. When that reading is honest, inaction is strategy.",
      ),
      h2("Why 'no change' rarely appears on the agenda"),
      p(
        "Technology governance rewards proposals. A named initiative has a sponsor, a budget line, and a story. Maintaining stability has none of those social structures. It looks like empty space on a quarterly plan.",
      ),
      p(
        "Vendors understand this asymmetry. Their business model assumes movement. Internal teams often inherit the same bias: career progression attaches to delivery, not to the programme that was wisely cancelled. So the default option becomes 'replace', 'upgrade', or 'add AI', even when the operational picture does not support it.",
      ),
      ul([
        "Procurement cycles assume a purchase at the end.",
        "Architecture forums review new designs more often than they review what should stay.",
        "Success metrics count go-lives, not avoided migrations.",
        "Leadership asks what we are doing about AI, not what we should stop doing.",
      ]),
      fig(
        "/blog/figures/technology-you-dont-need.svg",
        "Diagram comparing stability against the cost of unnecessary technology change",
        "Stability is not stagnation. The lowest-cost path is often the one you are already on if the constraint sits elsewhere.",
      ),
      h2("When staying put is the honest answer"),
      p(
        "Stay when the problem is not in the system layer. If intake is broken, if definitions are contested, if two teams use the same word for different things, a new platform will encode the confusion faster. Stay when capacity is the constraint. If the organisation is already carrying three programmes, a fourth migration will not land. It will join the queue of partial rollouts.",
      ),
      p(
        "Stay when the unofficial path is cheaper than the official one for good reason. That is a signal, not an embarrassment. The shadow process often exists because the official system does not match how judgement actually happens. Replacing the official system without reading the shadow repeats the cycle.",
      ),
      table("Signals that 'no change' may be correct", ["Signal", "What it usually means"], [
        ["Operations meets targets with current tools", "The bottleneck is elsewhere"],
        ["The proposed change requires every team to move at once", "Absorption cost exceeds benefit"],
        ["Nobody can name who owns exceptions after go-live", "You are not ready to change"],
        ["The business case depends on headcount reduction", "The real problem is workload design"],
        ["The demo works but the join does not", "Wait for a smaller slice, not a bigger programme"],
      ]),
      note(
        "A good 'no change' decision is written down. It includes what would make you reconsider. Undocumented inertia is not the same thing.",
      ),
      h2("The cost nobody puts in the business case"),
      p(
        "Business cases compare licence fees to benefits. They rarely price absorption: the meetings, the retraining, the parallel running, the regression testing, the political cost of telling a region their workflow will change again. They almost never price the opportunity cost of attention. While leadership focuses on a migration, what stops getting fixed?",
      ),
      p(
        "There is also unwind cost. If the change fails, returning to the previous state is not free. Data has moved. Integrations have been cut. People have built workarounds around the new thing. The true cost of a bad change includes the cost of living with a half-finished middle state for years.",
      ),
      table("Visible vs hidden costs of change", ["Cost type", "Usually in the business case?", "Typical owner"], [
        ["Licence or build fees", "Yes", "Procurement / IT"],
        ["Integration and data migration", "Sometimes", "IT"],
        ["Change management and training", "Rarely priced fully", "HR / operations"],
        ["Parallel running period", "Underestimated", "Operations"],
        ["Attention diverted from other fixes", "No", "Leadership"],
        ["Unwind if the change stalls", "No", "Everyone, eventually"],
      ]),
      h2("What to do instead of buying or building"),
      p(
        "When the technology is not the problem, the move is earlier in the sequence. Simplify intake. Name an owner for the join. Write the definition everyone is arguing about. Stop a report no one uses. Remove a approval step that exists only because a past audit required it. These are unglamorous. They work more often than a platform.",
      ),
      p(
        "Sometimes the right move is a narrow integration or a governed spreadsheet used openly rather than in shadow. Honesty about the shadow system is cheaper than pretending it will disappear after go-live.",
      ),
      h3("A short sequence before you approve change"),
      ol([
        "Write the problem without naming a product category.",
        "Ask what happens if you change nothing for twelve months.",
        "Name the unofficial path and whether it is load-bearing.",
        "Price absorption, not only acquisition.",
        "Define the signal that would reopen the decision.",
      ]),
      h2("How leadership can make 'no change' legitimate"),
      p(
        "Leaders can ask different questions. Not 'What are we doing about AI?' but 'What are we not going to do this year so something else can succeed?' Not 'Which platform wins?' but 'Which join must work before any platform choice matters?'",
      ),
      p(
        "Celebrate stopped programmes with the same visibility as launched ones. If a team runs a disciplined comparison and chooses to wait, that is risk reduced. If leadership only rewards motion, motion is what you will get, regardless of fit.",
      ),
      quote(
        "The mature organisation is not the one that changes fastest. It is the one that can explain why it did not change, and what it did instead.",
      ),
      h2("When 'no change' is the wrong answer"),
      p(
        "Inaction is wrong when risk is compounding: security debt, regulatory exposure, or a vendor end-of-life date that is not negotiable. It is wrong when the unofficial path has become the only path and nobody owns it. It is wrong when the current system prevents a constraint you must remove this year.",
      ),
      p(
        "The test is not whether change is exciting. It is whether the problem is in the system layer, whether the organisation can absorb the change, and whether the alternative to change has a named owner. If those fail, you need a programme. If they pass, you may need discipline more than software.",
      ),
      p(
        "Constrange helps teams hold that reading before signature. The best technology decision is sometimes to change nothing, on purpose, with conditions. That is not a gap in the roadmap. It is how complexity stops accumulating.",
      ),
      cta(
        "Considering a change you are not sure you need?",
        "Bring the problem and the pressure to move. We will help you decide whether the system is the bottleneck, or whether the honest move is elsewhere.",
      ),
    ],
  },
]

mkdirSync(outDir, { recursive: true })

for (const post of posts) {
  const body = post.blocks.join("\n")
  const faq = post.faqs.map(([q, a]) => `    [\n      ${JSON.stringify(q)},\n      ${JSON.stringify(a)},\n    ],`).join("\n")
  const content = `import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const ${post.export}: Article = {
  slug: ${JSON.stringify(post.slug)},
  title: ${JSON.stringify(post.title)},
  deck: ${JSON.stringify(post.deck)},
  category: ${JSON.stringify(post.category)},
  date: ${JSON.stringify(post.date)},
  dateIso: ${JSON.stringify(post.dateIso)},
  readTime: readTime(2000),
  author,
  tags: ${JSON.stringify(post.tags)},
  art: { label: ${JSON.stringify(post.category)}, cells: [${JSON.stringify(post.cell)}], tone: ${JSON.stringify(post.tone)} },
  body: [
${body}
  ],
  faqs: [
${faq}
  ],
}
`
  writeFileSync(join(outDir, post.file), content)
  console.log("wrote", post.file)
}
