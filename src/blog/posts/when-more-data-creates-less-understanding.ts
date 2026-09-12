import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const moreDataLessUnderstandingPost: Article = {
  slug: "when-more-data-creates-less-understanding",
  title: "When more data creates less understanding",
  deck:
    "Why organisations can have enormous amounts of information and still make poor decisions.",
  category: "Perspectives",
  date: "18 September 2026",
  dateIso: "2026-09-18",
  readTime: readTime(2000),
  author,
  tags: ["Data", "Decision-making", "Governance"],
  art: { label: "Perspectives", cells: ["More dashboards, same contested picture"], tone: "frost" },
  body: [
    p(
      "Data volume has never been higher. Dashboards multiply. Warehouses grow. Models summarise. Yet leadership meetings still open with disagreement about the number. Teams still reconcile exports before they trust a deck. The organisation is not information-poor. It is understanding-poor — and more pipes will not fix that alone.",
    ),
    p(
      "Understanding is not a pile of facts. It is a shared picture of what is true enough to act on, under a constraint everyone accepts. When definitions differ, owners are unnamed, and metrics optimise local outcomes, additional data increases noise. Constrange sees analytics programmes that added clarity to slides and confusion to operations.",
    ),
    p(
      "The fix is not abstinence from data. It is discipline about what must be agreed before more is gathered.",
    ),
    h2("How abundance produces confusion"),
    p(
      "Each system defines the customer, the product, the revenue line differently. Each dashboard chooses a grain. Each team selects a window. When numbers disagree, meetings become debates about methodology instead of decisions about action. More charts lengthen the debate.",
    ),
    fig(
      "more-data-less-understanding.svg",
      "Chart showing increasing data volume without a shared organisational picture",
      "More data without shared definitions does not produce a single picture — it produces more versions of the truth.",
    ),
    ul([
      "Metric proliferation without an owner",
      "Dashboards as opinions, not contracts",
      "Self-serve without guardrails",
      "AI summaries without source discipline",
      "Reporting as performance theatre",
    ]),
    h2("Information vs understanding"),
    p(
      "Information answers a question. Understanding answers whether the organisation can move on the answer. That requires agreement on the object, the boundary, the time window, and who can override when reality disagrees with the model.",
    ),
    {
      t: "table",
      caption: "Information rich, understanding poor",
      head: ["Symptom", "Underlying issue"],
      rows: [
        ["Three versions of revenue in one meeting", "No owned definition"],
        ["Everyone has a dashboard, nobody has a decision", "Metrics not tied to moves"],
        ["Analysts busy, leaders stuck", "Reconciliation replaces judgement"],
        ["More reports after every incident", "Root cause is ownership, not visibility"],
        ["AI briefings feel fluent but unsafe to act on", "No line of accountability to sources"],
      ],
    },
    h2("Why teams keep adding data"),
    p(
      "Adding data feels productive. It is cheaper than negotiation. It avoids naming who loses when one definition wins. Vendors sell volume. Internal teams sell capability. Leadership asks for visibility. Nobody is rewarded for deleting a metric.",
    ),
    p(
      "Self-serve analytics without governance spreads plausible numbers. Each plausible number creates a micro-reality. Micro-realities collide in leadership forums. The collision is mistaken for sophistication.",
    ),
    note(
      "If the meeting after the new dashboard is longer, you did not improve understanding. You added a dialect.",
    ),
    h2("What creates understanding"),
    h3("Minimum viable agreement"),
    ol([
      "One object definition everyone will use for this decision cycle.",
      "One owner who can change the definition and communicate it.",
      "One metric tied to a move, not a mood.",
      "One documented exception path when the number is wrong.",
      "One retirement date for superseded reports.",
    ]),
    p(
      "This is smaller than a data strategy. It is larger than another dashboard.",
    ),
    {
      t: "table",
      caption: "Moves that increase understanding",
      head: ["Move", "Effect"],
      rows: [
        ["Retire duplicate reports", "Forces a default definition"],
        ["Name metric owner", "Creates accountability for change"],
        ["Link metric to decision", "Stops vanity analytics"],
        ["Publish known limitations", "Reduces false confidence"],
        ["Fix one join", "Removes reconciliation work"],
      ],
    },
    h2("AI and the illusion of clarity"),
    p(
      "Models can compress text and surface patterns. They can also homogenise disagreement into fluent prose. A summary that hides contested definitions feels like understanding. It is compression without contract.",
    ),
    p(
      "Use AI where sources are owned, lineage is visible, and a human signs the move. Otherwise you accelerate the production of plausible slides.",
    ),
    quote(
      "Understanding is what remains when two teams can act on the same number without a pre-meeting reconciliation.",
    ),
    h2("Leadership questions that cut noise"),
    p(
      "Which metric will we use to decide this month? Who owns it? What report dies if this one lives? What would we do differently if the number moved ten percent? If answers are vague, delay the warehouse expansion and fix definition.",
    ),
    p(
      "Constrange helps organisations trade volume for agreement. More data can create less understanding when the join and the definition are missing. Fix those, and the data you already have may be enough.",
    ),
    h2("The reconciliation tax"),
    p(
      "Every hour spent reconciling before deciding is a tax on understanding. It grows with each new source. Leadership may not see the tax because it happens in analyst time and pre-meeting threads, not in licence fees.",
    ),
    p(
      "Measure reconciliation hours for one critical metric for a month. The number often surprises. It is the business case for definition work.",
    ),
    h2("Retirement as strategy"),
    ol([
      "List dashboards for one executive metric.",
      "Pick one authoritative view; publish owner.",
      "Retire duplicates with a date.",
      "Document known limitations publicly.",
      "Revisit adoption in thirty days.",
    ]),
    p(
      "Retirement is unpopular and effective. Without it, understanding cannot compound.",
    ),
    cta(
      "Drowning in dashboards but still stuck?",
      "Bring the numbers that disagree. We will help you find what must be agreed before you gather more.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Should we pause analytics investment?",
      "Pause expansion until one decision-critical metric has an owner and a single definition.",
    ],
    [
      "Is a data catalogue enough?",
      "Catalogues help discovery. Understanding needs owned definitions and retirement.",
    ],
    [
      "How do we align finance and sales metrics?",
      "Facilitate a decision about which definition wins for which purpose — not endless reconciliation.",
    ],
    [
      "Can AI unify our metrics?",
      "AI can describe differences. Unification is a governance act, not a model act.",
    ],
  ],
}
