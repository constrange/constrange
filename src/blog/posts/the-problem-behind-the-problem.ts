import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const problemBehindProblemPost: Article = {
  slug: "the-problem-behind-the-problem",
  title: "The problem behind the problem",
  deck: "A practical framework for finding the underlying problem before investing in a solution.",
  category: "Decision guides",
  date: "19 September 2026",
  dateIso: "2026-09-19",
  readTime: readTime(2000),
  author,
  tags: ["Problem framing", "Decision guides", "Consulting"],
  art: { label: "Decision guides", cells: ["Surface symptoms vs root constraints"], tone: "plum" },
  body: [
    p(
      "Teams arrive with solutions already chosen. Slow reporting needs a new BI tool. Customer churn needs AI. Handoffs need a workflow platform. The symptom is real. The proposed category is often wrong. Investment follows the symptom. The underlying problem — definition, ownership, incentive, capacity — remains, now with a larger bill.",
    ),
    p(
      "Finding the problem behind the problem is not philosophy. It is a discipline that saves quarters. Constrange uses a simple ladder: surface symptom, intermediate cause, root constraint. You climb until moving down one more level would change the category of solution — or reveal that no technology is required.",
    ),
    p(
      "This framework is for rooms where budget and attention are finite. It produces a named problem, a non-goal, and a first move small enough to test whether you climbed far enough.",
    ),
    h2("Three layers of problem"),
    p(
      "Surface symptom: what people feel day to day — slow, wrong, manual, risky. Intermediate cause: structural reasons the symptom persists — data in three places, no owner, conflicting metrics. Root constraint: what will not move this year without a political or design choice — definition of customer, decision rights, stop list.",
    ),
    fig(
      "/blog/figures/problem-behind-problem.svg",
      "Stacked layers from surface symptom to root constraint",
      "Investment at the symptom layer repeats failure. Investment at the root layer changes what is possible.",
    ),
    {
      t: "table",
      caption: "Example ladder",
      head: ["Layer", "Example"],
      rows: [
        ["Symptom", "Reporting is slow"],
        ["Intermediate", "Data in three systems, no owner for definition"],
        ["Root", "No agreed definition of 'customer' across teams"],
        ["Wrong first move", "Buy a new BI suite"],
        ["Better first move", "Facilitate definition + one owned metric"],
      ],
    },
    h2("How to climb the ladder"),
    h3("Questions that go deeper"),
    ol([
      "If we fixed this tomorrow with a perfect tool, what would still stall?",
      "Who benefits if the symptom stays?",
      "What unofficial path exists because the official one fails?",
      "What definition are we arguing about without naming it?",
      "What would we stop doing if this were truly solved?",
    ]),
    p(
      "Stop climbing when the next answer implies a non-technology move you are willing to make — or when technology is clearly the bottleneck with owned data and agreed rules.",
    ),
    ul([
      "Symptom language uses adjectives: slow, messy, siloed.",
      "Intermediate language uses nouns without owners: data, handoff, policy.",
      "Root language uses choices: we will not agree, we will not stop, we will not fund.",
    ]),
    h2("Common traps"),
    p(
      "Category trap: every problem becomes 'we need AI' or 'we need a platform'. Vendor trap: the demo defines the problem. Hero trap: one expert carries the join — removing them reveals there was no process. Measurement trap: you optimise what is easy to count, not what matters.",
    ),
    note(
      "If the problem statement includes a product category, rewrite it without that word.",
    ),
    {
      t: "table",
      caption: "Symptom vs root interventions",
      head: ["Symptom-level move", "Root-level move"],
      rows: [
        ["New dashboard", "Retire duplicates; name metric owner"],
        ["Automation pilot", "Document exceptions; assign review"],
        ["Integration platform", "Agree object definition"],
        ["Hire more analysts", "Fix join; reduce reconciliation need"],
        ["AI copilot", "Clarify decision rights on output"],
      ],
    },
    h2("Testing whether you found the root"),
    p(
      "A root problem passes four tests. Operations recognises it without translation. A constraint is visible in the sentence. Non-goals are writable. A first move exists that does not require the whole estate to change.",
    ),
    p(
      "Run a thirty-day move against the root. If the symptom barely moves, climb again or admit the constraint is immovable and choose risk explicitly.",
    ),
    h3("First move design"),
    ul([
      "One team, one object, one definition change.",
      "Measure reconciliation time or error rate, not slide count.",
      "Owner with weekly forum accountability.",
      "Document what you will not fund while this runs.",
    ]),
    quote(
      "Solve the problem behind the problem, or fund the symptom again next year under a new vendor logo.",
    ),
    h2("Using the framework in procurement"),
    p(
      "Require a problem ladder in every business case. Ask vendors to respond to the root, not only the symptom. If they cannot, they are selling category. Reject RFPs that skip non-goals.",
    ),
    p(
      "Constrange facilitates this climb in the first conversations, before signature. The problem behind the problem is where spend becomes honest — or stops.",
    ),
    h2("Workshop format that works"),
    p(
      "Two hours, right people: operations, finance, technology, one sponsor. Write symptom on wall. Ask 'what would still break if tool were perfect?' Repeat until constraint language appears. End with one first move and non-goals. No vendor in room one.",
    ),
    p(
      "Short workshops beat long discovery phases when the goal is investment honesty, not documentation volume.",
    ),
    h2("When to stop climbing"),
    p(
      "Stop when the next layer is immovable politics you are not willing to fund, or when technology is clearly the bottleneck with agreed rules and owners. Climbing forever is avoidance dressed as rigour.",
    ),
    p(
      "Document the layer you stopped at and the risk accepted. That is adult decision-making.",
    ),
    cta(
      "About to invest in a solution?",
      "Bring the symptom and the shortlist. We will help you climb the ladder before you commit.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "How long does problem discovery take?",
      "Days for a focused ladder, not months — if the right people are in the room.",
    ],
    [
      "What if leadership wants a tool now?",
      "Pair a thin slice with a root move. Do not let the tool define the problem.",
    ],
    [
      "Is root cause analysis the same thing?",
      "Similar intent. This framework is tuned for investment decisions, not incident postmortems alone.",
    ],
    [
      "Can AI help find root problems?",
      "AI can interview and summarise. Recognition and commitment still require human owners.",
    ],
  ],
}
