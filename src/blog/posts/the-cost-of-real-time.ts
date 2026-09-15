import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const theCostOfRealTimePost: Article = {
  slug: "the-cost-of-real-time",
  title: "The cost of real-time",
  deck:
    "When real-time requirements are actually unnecessary and how they increase infrastructure, complexity and operational risk.",
  category: "Engineering",
  date: "27 November 2026",
  dateIso: "2026-11-27",
  readTime: readTime(1500),
  author,
  tags: ["Architecture", "Latency", "Cost"],
  art: {
    label: "Engineering",
    cells: ["Real-time is often a habit, not a requirement"],
    tone: "amber",
  },
  body: [
    p(
      "Real-time is the default ambition. Dashboards refresh live. Events stream. Users see changes instantly. Stakeholders say 'real-time' in requirements meetings the way they once said 'mobile-first' — as proof the programme is modern. The engineering bill arrives later: more services, more coupling, more on-call pages, more ways for partial failure to surface as wrong numbers on screen.",
    ),
    p(
      "Many real-time requirements are not requirements. They are habits. Finance did not need the forecast updated every second; they needed it updated before the committee meeting. Operations did not need inventory on a websocket; they needed accurate inventory before dispatch cut-off. Product did not need live analytics; they needed trustworthy trends by Monday.",
    ),
    p(
      "Constrange reads latency requirements as constraint statements. Real-time is expensive constraint. Near-real-time is cheaper. Batch is cheaper still. Choosing wrong tier funds infrastructure that solves no decision — while the decisions that matter still wait on reconciliation, approval, or the spreadsheet someone trusts more than the live tile.",
    ),
    h2("What real-time actually buys"),
    p(
      "Legitimate real-time serves decisions that must happen inside seconds: fraud scoring at checkout, safety systems, exchange matching, collaborative editing where conflict resolution depends on immediacy. The test is not 'would live be nice' but 'what breaks if the user sees data thirty seconds old?' If the honest answer is nothing material, you are funding latency theatre.",
    ),
    fig(
      "cost-of-real-time.svg",
      "Cost curve rising sharply from batch to near-real-time to full real-time",
      "Each step toward instant visibility increases spend, coupling and operational surface area.",
    ),
    {
      t: "table",
      caption: "Latency tier and typical cost driver",
      head: ["Tier", "Typical drivers"],
      rows: [
        ["Batch (hourly/daily)", "Schedules, warehouses, simple pipelines"],
        ["Near-real-time (minutes)", "Queues, incremental sync, modest streaming"],
        ["Operational real-time (seconds)", "Stream processing, cache invalidation, fan-out"],
        ["Strict real-time (sub-second)", "Specialised infra, consensus, global sync"],
        ["Interactive live (collab)", "Conflict models, presence, state sync"],
      ],
    },
    h2("Infrastructure cost nobody puts in the business case"),
    p(
      "Streaming platforms, always-on consumers, low-latency stores, cross-region replication, and the observability to debug partial pipeline failure — each line item is defensible alone. Together they multiply. Real-time also multiplies environments: staging must behave like production or you ship surprises. Load tests must simulate peak fan-out, not average batch volume.",
    ),
    p(
      "The hidden cost is people: on-call for pipelines that must never lag, data engineers maintaining stream topology, support explaining why the live number disagrees with the report. Batch delays are visible and scheduled. Stream lag is ambiguous and urgent.",
    ),
    ul([
      "Broker clusters sized for peak fan-out",
      "State stores for materialised views",
      "Duplicate pipelines: stream for live, batch for audit",
      "Higher test and staging fidelity",
      "More incident types: lag, skew, duplicate, out-of-order",
    ]),
    note(
      "If the business case assumes batch cost but the architecture delivers streams, the programme is under-funded before sprint one.",
    ),
    h2("Complexity cost: coupling dressed as freshness"),
    p(
      "Real-time architectures couple producers and consumers through shared urgency. A schema change ripples through stream processors. A downstream slowdown backs up upstream. Every new subscriber adds load to the hot path. Batch decouples with time boundaries; streams couple with continuous expectation.",
    ),
    p(
      "Teams add caches to protect databases. Caches introduce staleness paradoxes — live UI backed by cache that is not live. Invalidation becomes its own distributed system. Soon you operate three truths: database, cache, and stream — and meetings about which one is 'right'.",
    ),
    h2("Operational risk when everything must be fresh"),
    p(
      "Batch failure is contained: rerun the job, fix the date partition, publish late. Stream failure is experiential: users watched wrong inventory, wrong balance, wrong status. Recovery may require replay, cache flush, and customer communication — under time pressure because the product promised live.",
    ),
    h3("Failure modes batch avoids"),
    ol([
      "Partial pipeline success with live UI showing incomplete state",
      "Out-of-order updates producing flicker and mistrust",
      "Duplicate events inflating live counters",
      "Lag spikes interpreted as business spikes",
      "Rollback complexity when stream history cannot be unseen",
    ]),
    quote(
      "The most expensive real-time requirement is the one that trained users to distrust every number that arrives a second late.",
    ),
    h2("How unnecessary real-time gets written into requirements"),
    p(
      "Competitive demos set expectations. Executives conflate real-time with digital maturity. Product copies patterns from consumer apps into back-office workflows that never needed them. Vendors sell streaming because it licenses well. Architects propose event-driven freshness because the diagram looks current.",
    ),
    p(
      "Nobody asks what decision the freshness enables. Without a named decision and deadline, latency is preference — and preference is a poor basis for infrastructure spend.",
    ),
    {
      t: "table",
      caption: "Questions before mandating real-time",
      head: ["Question", "If the answer is weak…"],
      rows: [
        ["What decision uses this data?", "You may be building a screensaver"],
        ["What is the maximum stale age tolerated?", "Default real-time may be waste"],
        ["Who acts inside one minute?", "Near-real-time may suffice"],
        ["What is the cost of showing wrong live data?", "Batch may be safer"],
        ["Can users refresh on demand?", "Polling may be enough"],
      ],
    },
    h2("Cheaper patterns that satisfy most programmes"),
    h3("Near-real-time with honest UX"),
    p(
      "Update every one to five minutes with a visible 'as of' timestamp. Users trust honesty. Hidden staleness destroys trust faster than thirty-second delay with label.",
    ),
    h3("On-demand refresh"),
    p(
      "Analyst workflows often need fresh on open, not fresh always. Fetch on load and on button click avoids perpetual pipelines for occasional depth.",
    ),
    h3("Event notification, batch truth"),
    p(
      "Notify when something changed; serve detail from warehouse or API that batch or incremental sync maintains. Users feel informed without every read hitting the hot path.",
    ),
    h3("Tiered freshness"),
    p(
      "Hot metrics stream. Cold reports batch. Architecture matches economic reality instead of uniform real-time mandate.",
    ),
    h2("When to pay for real-time anyway"),
    p(
      "Pay when latency is contractual, regulatory, or directly revenue-linked: trading, fraud, safety, live operations where minutes cost money or harm. Pay when collaborative state requires it. Pay when competitive product definition genuinely depends on immediacy — not on demo applause.",
    ),
    p(
      "Pay with eyes open: idempotency, ordering scope, replay runbooks, lag SLOs, and UX that degrades honestly when the stream hiccups.",
    ),
    h2("Reading programmes that over-index on live"),
    p(
      "Symptoms: multiple streaming platforms, live dashboards nobody acts on, nightly reconciliation because live numbers never match finance, on-call fatigue from lag alerts, cost growth without decision speed improvement. The programme optimised for freshness of display, not velocity of outcome.",
    ),
    ul([
      "Measure time-to-decision, not time-to-tile",
      "Compare incident rate: live path vs batch path",
      "Audit who opened live dashboard last week",
      "Track reconciliation hours as real-time tax",
      "Ask teams which number they use when stakes are high",
    ]),
    note(
      "If the authoritative number is still exported to Excel, real-time was not the constraint — trust was.",
    ),
    h2("A ninety-day latency rationalisation"),
    ol([
      "Month one: list every 'real-time' requirement with named decision and actor",
      "Month two: reclassify tiers — batch, near-real-time, true real-time — with cost estimate each",
      "Month three: retire or downgrade one live path with measured stakeholder impact",
    ]),
    p(
      "Ninety days will not collapse every stream. It will show whether the organisation chose latency on purpose — or inherited it from a slide.",
    ),
    h2("The reconciliation tax nobody budgets"),
    p(
      "Live systems disagree. Finance closes on batch. Operations trusts the export. Product watches the tile. Reconciliation meetings multiply — not because people are difficult, but because architecture promised one truth at two speeds without saying which was authoritative. The reconciliation tax is engineer time, analyst time, and executive time spent aligning numbers that should never have diverged.",
    ),
    p(
      "Sometimes divergence is acceptable with declared hierarchy: live for direction, batch for settlement. Usually teams skip that conversation and fund both paths indefinitely. Constrange reads reconciliation volume as a latency requirement signal. If teams reconcile constantly, the organisation may not need fresher data — it needs fewer competing truths.",
    ),
    h2("Questions for your next steering meeting"),
    ul([
      "Which decisions require sub-minute data — name the person and the action",
      "What does real-time cost us monthly in infra and on-call?",
      "Where does live data disagree with official reports — and why?",
      "What would break if we refreshed every five minutes with a timestamp?",
      "Are we funding streams where notification plus batch would suffice?",
    ]),
    p(
      "Real-time is a capability, not a virtue. Used precisely, it wins markets. Used by default, it taxes every team that must keep the pipes hot while the business still waits on the same approvals as before.",
    ),
    p(
      "Choosing slower truth on purpose is not falling behind. It is architecture aligned to how the organisation actually decides — with budget left to harden the paths that genuinely cannot wait.",
    ),
    p(
      "Executives remember the demo that updated live. They forget the reconciliation meeting that followed. Architecture reviews should ask both stories — because the second one is where latency requirements prove whether real-time was ever load-bearing.",
    ),
    cta(
      "Streaming spend rising while decisions are not getting faster?",
      "Bring your latency requirements and reconciliation stories. We will help you read where real-time earns its cost — and where slower truth is the better architecture.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Is near-real-time always good enough?",
      "Often for back-office and analytics. Validate against named decisions — not against competitor demos.",
    ],
    [
      "How do we push back on real-time demands?",
      "Ask what decision breaks at five-minute staleness. Cost and risk comparisons follow naturally.",
    ],
    [
      "Will users reject non-live dashboards?",
      "Users reject wrong and unexplained data. Timestamps and manual refresh often beat fake live.",
    ],
    [
      "When must we keep true real-time?",
      "When latency is tied to revenue, safety, fraud, or contractual SLA — document which and why.",
    ],
  ],
}
