import type { Article } from "../types"
import { author, cta, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const aiProjectCostPost: Article = {
  slug: "how-much-does-an-ai-project-really-cost",
  title: "How much does an AI project really cost?",
  deck:
    "Licence fees are the visible line. The true cost is joins, ownership, evaluation, change, and what you stop doing to create capacity.",
  category: "Decision guides",
  date: "14 September 2026",
  dateIso: "2026-09-14",
  readTime: readTime(1700),
  author,
  tags: ["AI costs", "Business case", "Total cost of ownership", "Budgeting"],
  art: { label: "Decision guides", cells: ["Licence fees vs the full landscape"], tone: "amber" },
  body: [
    p(
      "Boards ask for a number. Finance asks for a line item. Vendors ask for a signature. The honest answer is that an AI project's cost is a bundle spread across licence, integration, data work, human review, change, risk, and the opportunity cost of attention. Quoting only the licence is how organisations discover, eighteen months later, that they bought a programme with a software invoice attached.",
    ),
    p(
      "Constrange builds business cases that survive contact with operations — not because we enjoy spreadsheets, but because fluent underestimates produce fluent failures. A number that cannot be defended in front of the people who run the join is not a budget. It is a mood.",
    ),
    p(
      "This article is a map of the landscape, not a price list. Numbers vary by sector, estate, and slice. The categories, however, recur. If your business case omits a category, assume you will pay for it as surprise.",
    ),
    h2("The licence is rarely the whole story"),
    p(
      "Licence fees — seats, API usage, platform tiers — are the easiest to quote and the easiest to compare. They are also the smallest predictable cost in many enterprise deployments. Comparison matrices love them because they fit in a cell. Your operating landscape does not fit in a cell.",
    ),
    {
      t: "table",
      caption: "Visible versus landscape cost",
      head: ["Visible on the invoice", "Visible in the organisation"],
      rows: [
        ["Software licence and API usage", "Integration and data engineering"],
        ["Implementation partner days", "Internal owner hours per week"],
        ["Training package (generic)", "Team-specific change and policy"],
        ["Support tier", "Exception handling and review labour"],
        ["Proof-of-concept spend", "Monitoring, evaluation, and rollback capability"],
      ],
    },
    p(
      "A business case that totals the left column and calls it 'AI cost' will be wrong by a multiple. The multiple is not mysterious. It is the join.",
    ),
    h2("Cost categories to model explicitly"),
    h3("Discovery and problem definition"),
    p(
      "Skipping this category does not remove the cost. It moves it to rework. A short, honest reading — problem, constraint, unofficial path, non-goals, first slice — is cheaper than a programme that discovers the real problem in month nine. Price internal time here, not only consultants.",
    ),
    h3("Data and integration"),
    p(
      "Models consume contracts: what is ingested, how fresh, who is allowed to see it, how errors are handled, how lineage is recorded. Integration is rarely a connector checkbox. It is identity, authorisation, scheduling, retries, and the political work of getting owners to maintain upstream quality.",
    ),
    h3("Build or configure"),
    p(
      "Whether you buy or build, someone must shape the workflow: prompts, policies, guardrails, UI, escalation paths, logging. 'Configure' is often mini-build with less control. Price the slice, not the platform vision.",
    ),
    h3("Human review and operations"),
    p(
      "If humans review outputs, review is a production cost — hours per week, training, scheduling, escalation, and management. If you assume review is temporary, you have assumed away risk. Risk will invoice you differently.",
    ),
    h3("Evaluation and monitoring"),
    p(
      "Production requires thresholds, sampling, incident response, and drift detection. Lab benchmarks are not a substitute. This category is often zero in business cases and non-zero in reality from week one.",
    ),
    h3("Change, policy, and training"),
    p(
      "People must know when to trust the tool, when to override it, and how to record overrides. Policy and legal are not phase three if regulators care about the workflow in phase one. Training is not a webinar. It is time away from the day job.",
    ),
    h3("Ongoing ownership"),
    p(
      "After go-live, someone maintains data contracts, evaluates releases, handles exceptions, and decides when to roll back. If ownership is 'shared', it is usually unpaid — until it fails. Model named roles and hours, not vague centres of excellence.",
    ),
    note(
      "If your business case has no line for ongoing ownership, you are planning to abandon the capability quietly. That has a cost too: distrust of the next initiative.",
    ),
    h2("Ranges that are honest without being precise"),
    p(
      "Exact figures mislead when the slice is undefined. Ranges by maturity are more honest. A narrow assistant on a clean corpus with a clear owner is a different animal from an enterprise workflow touching five systems and a regulator. The table below uses relative bands — adjust for your estate.",
    ),
    {
      t: "table",
      caption: "Relative cost bands for slice one (illustrative)",
      head: ["Category", "Narrow slice", "Complex enterprise slice"],
      rows: [
        ["Licence / API (year one)", "Low", "Medium to high"],
        ["Integration and data", "Low to medium", "High"],
        ["Build / configure", "Low to medium", "High"],
        ["Review labour (ongoing)", "Medium", "High"],
        ["Evaluation and monitoring", "Low to medium", "Medium to high"],
        ["Change and policy", "Low", "Medium to high"],
        ["Internal ownership (ongoing)", "Medium", "High"],
      ],
    },
    p(
      "Notice where complexity moves the band: integration, review, and ownership — not the model API line on the invoice.",
    ),
    h2("The absorption budget"),
    p(
      "Organisations have a finite capacity to absorb change. Absorption is not headcount on an org chart. It is hours per week from people who already run the unofficial path. Every new capability competes with existing programmes for the same tired attention.",
    ),
    p(
      "Price absorption explicitly: what work will stop, what programme will defer, what team will not be asked to 'just join a few calls'. If nothing stops, the true cost includes the shadow work of ignored tooling and policy breaches.",
    ),
    quote(
      "The cheapest licence in the catalogue can be the most expensive choice if it demands the most absorption.",
    ),
    h2("How to build a business case that holds"),
    ol([
      "Define slice one with a measure operations helped write.",
      "List cost categories above — no blank cells allowed.",
      "Estimate internal hours with named roles, not 'business involvement'.",
      "Model three-year cost, not pilot cost — include growth in seats, data, and review load.",
      "Include downside: rollback, incidents, and half-adoption.",
      "Compare against the cost of not acting — including the cost of the broken join staying broken.",
    ]),
    p(
      "A business case should survive one hostile question: 'What did we stop doing to fund this?' If the answer is 'nothing', the case is incomplete.",
    ),
    h2("Common underestimates"),
    ul([
      "Assuming data is ready because a dashboard exists.",
      "Treating professional services as 'one-off' when the product requires ongoing configuration.",
      "Ignoring review labour because 'AI will improve'.",
      "Forecasting organisation-wide adoption without training capacity.",
      "Omitting exit cost — export, rebuild, and transition.",
      "Using vendor ROI calculators without your error costs.",
    ]),
    p(
      "ROI calculators are useful for orientation. They are not evidence. Your error costs — a wrong answer in front of a customer, a missed control, a delayed case — belong in the model. If they are uncomfortable to write, they are probably material.",
    ),
    h2("When the honest answer is 'not yet'"),
    p(
      "Sometimes the reading shows the organisation cannot afford the move — not because of licence, but because ownership and join work are unfunded. 'Not yet' is a valid outcome. It is cheaper than a production failure that teaches the firm to distrust the category.",
    ),
    p(
      "Fund the prerequisite instead: fix the join, name the owner, improve data quality on slice one only. Those moves have costs too. They are usually smaller and more recoverable than a platform programme.",
    ),
    h2("What finance should ask"),
    p(
      "Ask for a cost model by category, not a single line. Ask for internal hours. Ask what stops. Ask for evaluation spend. Ask for year-two and year-three assumptions in writing. Ask what happens at half adoption. Ask who signs the incident report. Those questions turn a licence quote into a decision.",
    ),
    h2("Build versus buy cost curves"),
    p(
      "Build and buy have different cost shapes. Buy front-loads licence and services; build front-loads engineering and data work. Buy often wins year one on a narrow slice if the product fits. Build can win year three if seat growth, services creep, and workarounds accumulate — or lose badly if the internal team becomes a bottleneck without owners.",
    ),
    {
      t: "table",
      caption: "How costs move over time",
      head: ["Year", "Buy risk", "Build risk"],
      rows: [
        ["Year one", "Services and integration underestimated", "Engineering and data underestimated"],
        ["Year two", "Seat growth and feature gaps", "Maintenance and key-person dependency"],
        ["Year three", "Exit cost and platform lock-in", "Opportunity cost if team is thin"],
      ],
    },
    p(
      "Model both curves on the same slice with the same categories. The winner is not ideological. It is the path whose surprises you can afford.",
    ),
    h2("Sensitivity: half adoption, double exceptions"),
    p(
      "Stress-test the business case. What if adoption is half the forecast? What if review rates are double? What if upstream data quality degrades every quarter? What if the vendor changes pricing? Sensitivity analysis is not pessimism. It is how you avoid funding a case that only works in the steering deck.",
    ),
    p(
      "Pay particular attention to review labour. Many cases assume review will fall over time as the model 'learns'. Learning without evaluation is hope. If review stays flat, the case may still be good — but it must be honest about permanent human cost.",
    ),
    h2("Opportunity cost in plain language"),
    p(
      "Every programme borrows attention from something else: another transformation, a core system fix, hiring into operations, or simply the capacity to handle exceptions without burning people out. Opportunity cost is not abstract. It is the programme you deferred that would have fixed the join.",
    ),
    p(
      "Leadership should ask which pressure will remain untreated if this project proceeds. If the answer is 'the join that actually causes complaints', you may be about to fund a layer on top of the real problem. The layer will have a cost. So will the untreated join.",
    ),
    quote(
      "A business case that only counts spend, not attention, will be wrong even when the arithmetic is right.",
    ),
    cta(
      "Building the case?",
      "We help leadership teams model true cost on a defined slice — including what the invoice will never show.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "What is a realistic year-one budget for a first slice?",
      "It depends on the join, not the headline API price. Narrow slices can be modest; enterprise workflows with five systems are rarely 'licence only'. Model categories, not slogans.",
    ],
    [
      "Should we use vendor ROI calculators?",
      "As orientation only. Replace generic assumptions with your error costs, review rates, and adoption curve — ideally with operations' input.",
    ],
    [
      "How do we cost internal ownership?",
      "Name roles and hours per week for twelve months after go-live: product owner, data steward, reviewer pool, support. If hours cannot be named, ownership is not real.",
    ],
    [
      "Is build always more expensive than buy?",
      "Not over three years, and not on fit. Build can be cheaper when products force services and workarounds. Buy can be cheaper when the slice is standard. Compare on the same slice with the same categories.",
    ],
  ],
}
