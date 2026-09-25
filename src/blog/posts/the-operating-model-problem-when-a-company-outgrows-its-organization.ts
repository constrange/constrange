import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const theOperatingModelProblemWhenACompanyOutgrowsItsOrganizationPost: Article = {
  slug: "the-operating-model-problem-when-a-company-outgrows-its-organization",
  title: "The Operating Model Problem: When a Company Outgrows Its Organization",
  deck: "Revenue doubles but decisions still fit in one room — until they do not. Operating model inflection points arrive twelve to eighteen months after the numbers say scale.",
  category: "Decision guides",
  date: "3 September 2026",
  dateIso: "2026-09-03",
  readTime: readTime(1489),
  author,
  tags: ["Operating model","Organisation design","Scale","Leadership"],
  art: { label: "Decision guides", cells: ["Revenue doubles but decisions still fit in one room — until they do not"], tone: "ink" },
  body: [
    p(
      "Organisations lag revenue. Processes built for fifty people strain at five hundred. The operating model — how work flows, decides, and measures — becomes the constraint while strategy still targets market share.",
    ),
    p(
      "Inflection points cluster at revenue and headcount bands that vary by industry, but symptoms repeat: escalation overload, duplicate functions, unclear profit ownership, and heroes substituting for systems.",
    ),
    p(
      "Constrange maps inflection by decision volume, span of control, handoff count, and reconciliation cost. Structure should change before heroes burn out — not after a reorg crisis.",
    ),
    h2("Recognising outgrowth"),
    p(
      "Meetings multiply while decisions slow — classic sign the informal model exceeded capacity.",
    ),
    p(
      "Duplicate roles appear in regions and functions — same job, different boss, no reconciliation.",
    ),
    p(
      "Customer experience variance rises — not product failure, handoff failure.",
    ),
    fig("operating-model-inflection.svg", "Curve showing organisation lagging revenue growth with inflection point marked", "Structure lags revenue by twelve to eighteen months — plan early."),
    {
      t: "table",
      caption: "Operating model inflection signals",
      head: ["Signal","Early stage","Post-inflection need"],
      rows: [
              [
                      "Decision volume",
                      "Founder bottleneck",
                      "Delegated thresholds"
              ],
              [
                      "Span of control",
                      "Wide flat teams",
                      "Layer with clear P&L"
              ],
              [
                      "Handoffs",
                      "Informal",
                      "Documented interfaces"
              ],
              [
                      "Functions",
                      "Generalists",
                      "Specialists with chargeback"
              ],
              [
                      "Planning",
                      "Annual budget",
                      "Rolling forecast plus portfolio"
              ]
      ],
    },
    h2("Mapping the current model"),
    p(
      "Document how decisions actually flow — not the org chart, the work chart. Who approves, who executes, who measures.",
    ),
    p(
      "Count handoffs on critical journeys — order to cash, hire to productive, incident to resolved.",
    ),
    p(
      "Identify profit owners — if none, margin arguments have no home.",
    ),
    ul([
          "Decision types and actual approvers",
          "Handoff count top journeys",
          "Reconciliation meetings per month",
          "Escalations to CEO count"
    ]),
    h2("Designing the next model"),
    p(
      "Choose principles before boxes — clear P&L, minimum viable layer, product vs geography vs customer matrix with one primary axis.",
    ),
    p(
      "Pilot new model in one division before enterprise reorg — learn interfaces.",
    ),
    p(
      "Pair structural change with process and system change — reorg alone moves chairs.",
    ),
    note("Reorgs without decision rights change are renames — cynicism follows."),
    h2("Inflection timing"),
    p(
      "Plan structure twelve months ahead of forecast inflection — hiring and systems need lead time.",
    ),
    p(
      "Communicate twice — rationale and interfaces — before reporting lines change.",
    ),
    p(
      "Measure post-reorg on handoffs and latency, not only cost save.",
    ),
    quote("You outgrow the organisation before you outgrow the market — if you are lucky."),
    h2("Common failure patterns"),
    p(
      "Over-layering — adding managers without decision rights increases latency.",
    ),
    p(
      "Matrix without primary axis — every decision becomes negotiation.",
    ),
    p(
      "Shared services without SLAs — central teams become bottlenecks with no feedback.",
    ),
    h3("Hero dependency"),
    p(
      "Track decisions made by named heroes outside process — high hero share means model failure, not talent success.",
    ),
    h2("Stabilising after change"),
    p(
      "Freeze secondary changes for two quarters — let interfaces settle.",
    ),
    p(
      "Run operating model review quarterly first year — tweak interfaces, not whole chart.",
    ),
    p(
      "Align incentives to new profit owners — structure without comp revert old behaviour.",
    ),
    h2("Questions worth putting in the next leadership review"),
    ul([
          "Where does our data on operating model inflection actually live — and who owns updating it?",
          "What decision would we make differently if we trusted the number?",
          "Which incentive or reporting line is working against the outcome we want?",
          "What is the smallest test that would change our mind in ninety days?"
    ]),
    p(
      "Strategy work that stops at the slide deck is expensive theatre. The useful version is slower, messier, and more specific: name the constraint, measure the gap, assign an owner, and set a date when the number gets reviewed again.",
    ),
    cta(
      "Bring the situation as it is",
      "If this framework matches a pressure you are already feeling, start with the facts you have — not the narrative you wish were true. We help leadership teams quantify gaps, choose constraints, and design paths that operations can absorb.",
      "Start a conversation",
    ),
    p(
      "Survey managers on top three process blockers post-change — actionable feedback.",
    ),
    p(
      "Compare customer ticket themes before and after reorg — handoff issues show quickly.",
    ),
    p(
      "Track time to hire and onboard in new structure — friction predicts productivity dip.",
    ),
    p(
      "Document interfaces between functions — RACI without interfaces is incomplete.",
    ),
    p(
      "Benchmark escalation volume to CEO — should fall after delegation works.",
    ),
    p(
      "The numbers in this article are illustrative ranges from client work and published benchmarks — not universal laws. Your organisation will have its own shape. The discipline is to measure yours rather than borrow someone else's headline.",
    ),
    p(
      "Finance, operations, and commercial teams often use the same words with different definitions. Before any index or ratio goes on a dashboard, agree what counts in the numerator and who certifies it monthly.",
    ),
    p(
      "Boards respond to frameworks when they see a decision attached. Pair every metric with a threshold and a pre-agreed action. Measurement without a trigger is reporting; measurement with a trigger is management.",
    ),
    p(
      "Avoid benchmarking envy. Another company's attractive ratio may reflect a business model you do not have. Compare yourself to your own prior quarters first; external peers second.",
    ),
    p(
      "Short-term fixes that improve a ratio while weakening the underlying economics are more common than admitted. When a metric moves, ask what behaviour it rewarded and whether that behaviour survives a bad quarter.",
    ),
    p(
      "Survey managers on top three process blockers post-change — actionable feedback.",
    ),
    p(
      "Compare customer ticket themes before and after reorg — handoff issues show quickly.",
    ),
    p(
      "Track time to hire and onboard in new structure — friction predicts productivity dip.",
    ),
    p(
      "Document interfaces between functions — RACI without interfaces is incomplete.",
    ),
    p(
      "Benchmark escalation volume to CEO — should fall after delegation works.",
    ),
    p(
      "The numbers in this article are illustrative ranges from client work and published benchmarks — not universal laws. Your organisation will have its own shape. The discipline is to measure yours rather than borrow someone else's headline.",
    ),
    p(
      "Finance, operations, and commercial teams often use the same words with different definitions. Before any index or ratio goes on a dashboard, agree what counts in the numerator and who certifies it monthly.",
    ),
    p(
      "Boards respond to frameworks when they see a decision attached. Pair every metric with a threshold and a pre-agreed action. Measurement without a trigger is reporting; measurement with a trigger is management.",
    ),
    p(
      "Avoid benchmarking envy. Another company's attractive ratio may reflect a business model you do not have. Compare yourself to your own prior quarters first; external peers second.",
    ),
    p(
      "Short-term fixes that improve a ratio while weakening the underlying economics are more common than admitted. When a metric moves, ask what behaviour it rewarded and whether that behaviour survives a bad quarter.",
    ),
    p(
      "Survey managers on top three process blockers post-change — actionable feedback.",
    ),
    p(
      "Compare customer ticket themes before and after reorg — handoff issues show quickly.",
    ),
    p(
      "Track time to hire and onboard in new structure — friction predicts productivity dip.",
    ),
    p(
      "Document interfaces between functions — RACI without interfaces is incomplete.",
    ),
    p(
      "Benchmark escalation volume to CEO — should fall after delegation works.",
    ),
    p(
      "The numbers in this article are illustrative ranges from client work and published benchmarks — not universal laws. Your organisation will have its own shape. The discipline is to measure yours rather than borrow someone else's headline.",
    ),
    p(
      "Finance, operations, and commercial teams often use the same words with different definitions. Before any index or ratio goes on a dashboard, agree what counts in the numerator and who certifies it monthly.",
    ),
    p(
      "Boards respond to frameworks when they see a decision attached. Pair every metric with a threshold and a pre-agreed action. Measurement without a trigger is reporting; measurement with a trigger is management.",
    ),
    p(
      "Avoid benchmarking envy. Another company's attractive ratio may reflect a business model you do not have. Compare yourself to your own prior quarters first; external peers second.",
    ),
    p(
      "Short-term fixes that improve a ratio while weakening the underlying economics are more common than admitted. When a metric moves, ask what behaviour it rewarded and whether that behaviour survives a bad quarter.",
    ),
    p(
      "Survey managers on top three process blockers post-change — actionable feedback.",
    ),
    p(
      "Compare customer ticket themes before and after reorg — handoff issues show quickly.",
    ),
    p(
      "Track time to hire and onboard in new structure — friction predicts productivity dip.",
    ),
    p(
      "Document interfaces between functions — RACI without interfaces is incomplete.",
    ),
    p(
      "Benchmark escalation volume to CEO — should fall after delegation works.",
    ),
    p(
      "The numbers in this article are illustrative ranges from client work and published benchmarks — not universal laws. Your organisation will have its own shape. The discipline is to measure yours rather than borrow someone else's headline.",
    ),
    p(
      "Finance, operations, and commercial teams often use the same words with different definitions. Before any index or ratio goes on a dashboard, agree what counts in the numerator and who certifies it monthly.",
    ),
    p(
      "Boards respond to frameworks when they see a decision attached. Pair every metric with a threshold and a pre-agreed action. Measurement without a trigger is reporting; measurement with a trigger is management.",
    ),
    p(
      "Avoid benchmarking envy. Another company's attractive ratio may reflect a business model you do not have. Compare yourself to your own prior quarters first; external peers second.",
    ),
    p(
      "Short-term fixes that improve a ratio while weakening the underlying economics are more common than admitted. When a metric moves, ask what behaviour it rewarded and whether that behaviour survives a bad quarter.",
    ),
  ],
  faqs: [
    [
      "When is the first major inflection?",
      "Often fifty to one hundred fifty people or first multi-region revenue — varies by model.",
    ],
    [
      "Should we hire a COO?",
      "When operating model complexity exceeds founder bandwidth — COO owns flow, not only ops tasks.",
    ],
    [
      "How long does reorg disruption last?",
      "Productivity dip three to six months — plan milestones accordingly.",
    ],
    [
      "Can we avoid reorgs?",
      "You cannot avoid model evolution — only choose proactive vs reactive timing.",
    ],
  ],
}
