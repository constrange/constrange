import type { Article } from "../types"
import { author, cta, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const evaluateAiVendorPost: Article = {
  slug: "how-to-evaluate-an-ai-vendor",
  title: "How to evaluate an AI vendor",
  deck:
    "Claims are easy. Evidence is scarce. A serious vendor evaluation tests fit, joins, and what happens when the demo ends.",
  category: "Decision guides",
  date: "13 September 2026",
  dateIso: "2026-09-13",
  readTime: readTime(1700),
  author,
  tags: ["Vendor evaluation", "Procurement", "Due diligence", "AI buying"],
  art: { label: "Vendor", cells: ["Claims", "Evidence"], tone: "dusk" },
  body: [
    p(
      "Vendor selection for AI products has become a category of theatre. Every deck shows the same futures: faster service, happier customers, defensible advantage. Every demo is fluent. Every reference is 'a leading financial services firm'. The buyer's job is not to be impressed. It is to distinguish a product that fits your join from a product that will require your organisation to misdescribe itself in configuration.",
    ),
    p(
      "Constrange evaluates vendors with clients who are tired of buying programmes disguised as products. The method is unglamorous: hold your problem and constraint still, then ask for evidence on the same slice you would actually implement first. If the vendor cannot answer on that slice, the rest of the roadmap is irrelevant.",
    ),
    p(
      "This is not cynicism about vendors. Many are honest within their model of the world. The failure mode is on the buyer side: evaluating storytelling instead of fit, and signing before ownership, joins, and evaluation are priced.",
    ),
    h2("What you are actually buying"),
    p(
      "You are not buying a model. You are buying a bundle: product behaviour, integration assumptions, data contracts, upgrade rhythm, support model, professional services appetite, and a definition of what 'configured' means. The model inside the bundle may be commodity. The bundle is not. Two vendors with similar model claims can produce wildly different programmes in your estate.",
    ),
    {
      t: "table",
      caption: "Claims versus evidence",
      head: ["Common claim", "Evidence to ask for"],
      rows: [
        ["Works with your stack", "A reference join like yours, not a logo slide"],
        ["Enterprise-ready security", "Your controls mapped to their artefacts, not a generic SOC report"],
        ["High accuracy", "Evaluation on your slice with your error costs defined"],
        ["Fast time to value", "A documented first slice with customer effort hours"],
        ["Low total cost", "Three-year cost including services, seats, and internal absorption"],
      ],
    },
    p(
      "If a vendor resists the right-hand column, believe the resistance. It is information.",
    ),
    h2("Prepare before the first meeting"),
    p(
      "Sophisticated buying starts before procurement sends the RFP. Write one page: the problem, the constraint, the unofficial path, non-goals, and a first slice. Send it to vendors and ask them to respond to that slice only. Vendors who cannot respond to a slice will drown you in category vision. That may still be useful research. It is not selection.",
    ),
    ul([
      "Problem sentence with a constraint that will not move this year.",
      "Sketch of the join: systems, identities, data freshness, audit needs.",
      "First slice definition: one team, one workflow, one success measure.",
      "Non-goals: what you will not do in phase one.",
      "Evaluation criteria: quality, escalation, incidents, time saved operations recognises.",
    ]),
    note(
      "If you cannot send that page, postpone vendor meetings. You are not a buyer yet. You are an audience.",
    ),
    h2("Questions that survive the demo"),
    h3("Fit to the work"),
    p(
      "Ask the vendor to narrate your workflow without slides — using your nouns, your exceptions, your review step. Ask where their product assumes the process is standard. Ask what happens when the assumption breaks. If the answer is 'professional services', price professional services in slice one, not phase three.",
    ),
    h3("The join"),
    p(
      "Ask for a technical walkthrough of ingest, identity, authorisation, logging, retention, and export. Ask what happens when upstream data is late, wrong, or missing. Ask who owns failure at the handshake. Demos skip handshakes. Production dies there.",
    ),
    h3("Human review and escalation"),
    p(
      "Ask how reviewers are authenticated, how overrides are recorded, and how the system behaves when a human disagrees. Ask for default rates of escalation in comparable deployments. If the vendor has no view, they are selling automation theatre.",
    ),
    h3("Evaluation and drift"),
    p(
      "Ask how quality is measured in production, not in lab benchmarks. Ask how model or policy updates are released, rolled back, and communicated. Ask what you will see when performance drifts. Drift is not an edge case. It is Tuesday.",
    ),
    h3("Commercial honesty"),
    p(
      "Ask for a three-year cost model with seats, API usage, services, and required internal roles. Ask what happens to cost if adoption is half the forecast. Ask exit terms: data export, transition support, and what you must rebuild if you leave.",
    ),
    quote(
      "A vendor who cannot show evidence on your slice is asking you to fund their learning. That may be acceptable. Price it as such.",
    ),
    h2("Reference calls that matter"),
    p(
      "Logo references are marketing. Useful references match your join and your maturity. Ask for customers with a similar system estate, similar regulatory load, and a similar first slice — not the vendor's favourite transformation story.",
    ),
    ol([
      "What did slice one actually include, and how long did customer effort take?",
      "What broke first in production, and who fixed it?",
      "What would they not buy again, knowing what they know now?",
      "How much internal ownership was required — named roles and hours?",
      "If they switched tomorrow, what would they miss and what would they rebuild?",
    ]),
    p(
      "Listen for pauses. Listen for 'we are still working on adoption'. Listen for heroes — a brilliant vendor PM who held the programme together is a warning, not a compliment.",
    ),
    h2("Scorecards without delusion"),
    p(
      "Weighted scorecards are fine if the weights reflect your constraint. If time is the constraint, weight time-to-slice and integration effort heavily. If risk is the constraint, weight audit, escalation, and rollback. If capacity is the constraint, weight internal ownership hours. Do not weight 'innovation' unless you have spare attention — few organisations do.",
    ),
    {
      t: "table",
      caption: "A practical weighting example",
      head: ["Criterion", "Why weight it"],
      rows: [
        ["Fit to slice-one workflow", "Prevents platform programmes"],
        ["Join complexity and customer effort", "Where 'quick buys' become years"],
        ["Operational ownership load", "Absorption is the real budget"],
        ["Evaluation and rollback", "Production is not a demo"],
        ["Three-year total cost", "Licence is rarely the whole story"],
        ["Exit and portability", "Insurance, not pessimism"],
      ],
    },
    p(
      "Score two vendors on the same slice. If scores diverge wildly when the slice changes, you are not comparing products. You are comparing narratives.",
    ),
    h2("Red flags that are not dramatic"),
    p(
      "Red flags are often polite: vague answers about data residency until legal asks; 'we can configure that' without a worked example; benchmarks on datasets you do not have; a roadmap that solves your current pain in a future quarter; professional services quoted as a range without assumptions; security answered with certifications instead of your control mapping.",
    ),
    p(
      "Another quiet flag: the vendor cannot describe what they will not do. Products without non-goals become programmes. Programmes without owners become folklore.",
    ),
    h2("When to walk away"),
    p(
      "Walk away — or narrow to a paid pilot — when the vendor cannot demonstrate slice one with your join, when internal ownership cannot be named, when evaluation is unresolved, or when the business case requires organisation-wide adoption without training capacity. Walking away is cheaper than a steering group that meets for a year to defend a signature.",
    ),
    p(
      "Walking away is not failure. It is governance. Park the vendor against a condition: if the join is fixed, if data quality reaches X, if owner role Y is filled. Conditions turn a refusal into a sequence.",
    ),
    h2("Proof of value versus proof of concept"),
    p(
      "Vendors offer POCs because POCs convert. Buyers should insist on proof of value on a slice: measurable movement on a metric operations recognises, with the join in scope and review labour priced. A POC that proves fluency is marketing. Proof of value proves fit — or disproves it cheaply.",
    ),
    p(
      "Structure paid pilots with exit ramps. Define success thresholds in advance. Define failure thresholds too — the point at which you stop without a memorial workshop. Pilots without failure thresholds become zombie programmes because nobody wants to admit the demo was only a demo.",
    ),
    h2("Security, privacy, and regulators"),
    p(
      "Security questionnaires are necessary and insufficient. Map your controls to their artefacts: data residency, retention, subprocessors, access logging, model training defaults, and incident notification. Ask what happens to your data if you leave. Ask whether human reviewers can see prompts and outputs. Ask how overrides are logged for audit.",
    ),
    p(
      "Regulated buyers should involve risk early with specific scenarios: wrong answer to a customer, missed control, biased routing, incomplete retention. If the vendor's answer is 'configure policies', ask for a worked example on your slice. Policy configuration is often where programmes hide labour.",
    ),
    h3("Questions for legal and risk"),
    ul([
      "Where is inference performed, and where are prompts stored?",
      "Can we prohibit training on our data — in contract, not in a slide?",
      "What is the incident process when outputs violate policy?",
      "How do we export outputs and logs on exit?",
      "Who is liable when the model and the process disagree?",
    ]),
    h2("Internal stakeholders the vendor will not mention"),
    p(
      "Every purchase has invisible stakeholders: the team that owns upstream data quality, the service desk that will receive confused users, the team whose workflow is 'simplified' without consultation, the internal audit function that will ask for evidence in year two. A vendor evaluation that only includes IT and innovation is incomplete.",
    ),
    p(
      "Before selection, run an internal reference call — with operations, not with the project team. Ask whether the slice is recognisable, whether review capacity exists, and what they would need to stop doing. Internal references are often harsher than vendor references, and more useful.",
    ),
    h2("How Constrange helps"),
    p(
      "We sit with buyers who need an independent reading: problem first, slice defined, vendors compared on evidence. We attend demos to ask the join questions. We rewrite scorecards so weights match constraints. We are not anti-vendor — we are anti-surprise.",
    ),
    p(
      "The outcome is not always a winner. Sometimes it is a smaller pilot, a different class of move, or wait. Those outcomes are successes. They cost less than a fluent wrong purchase.",
    ),
    h2("After selection"),
    p(
      "Selection is not the end of evaluation. Contract for slice one with acceptance tests tied to the join. Keep evaluation metrics from the pilot in the operating rhythm. Schedule a ninety-day review with authority to narrow. The vendor who was perfect in the demo will meet reality in the join — plan for that meeting as governance, not as betrayal.",
    ),
    cta(
      "Shortlisting vendors?",
      "Send us your one-page problem and slice. We will help you design the questions that demos are designed to avoid.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Should we run a formal RFP?",
      "Only after the problem and slice are written. An RFP without a slice invites brochure answers. With a slice, it can be useful discipline.",
    ],
    [
      "How many vendors should we evaluate?",
      "No more than three serious candidates on the same slice. More than three is usually catalogue behaviour, not diligence.",
    ],
    [
      "Is a paid pilot worth it?",
      "Often yes — if the pilot includes the join, evaluation, and a named owner, and if exit is priced upfront. A pilot that is only a demo with invoices is not a pilot.",
    ],
    [
      "What if leadership has already chosen a vendor?",
      "Then evaluate honestly for slice one and stop pretending the product can be everything. Narrow until fit is testable, or fund the join work the demo skipped.",
    ],
  ],
}
