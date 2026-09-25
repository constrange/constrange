import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const theComplexityTaxHowSuccessfulCompaniesBecomeLessProfitableAsTheyGrowPost: Article = {
  slug: "the-complexity-tax-how-successful-companies-become-less-profitable-as-they-grow",
  title: "The Complexity Tax: How Successful Companies Become Less Profitable as They Grow",
  deck: "Growth adds product lines, customer types, geographies, and layers. Each addition carries a tax on margin — often invisible until growth slows.",
  category: "Decision guides",
  date: "6 February 2026",
  dateIso: "2026-02-06",
  readTime: readTime(1508),
  author,
  tags: ["Complexity","Margin","Growth","Operating model"],
  art: { label: "Decision guides", cells: ["Growth adds product lines, customer types, geographies, and layers"], tone: "plum" },
  body: [
    p(
      "Revenue curves impress boards. Margin curves tell the truth. Many companies grow top line while unit economics quietly deteriorate — not because they priced wrong, but because complexity accumulated faster than capability.",
    ),
    p(
      "Constrange models the Complexity Tax as the interaction of product breadth, customer heterogeneity, geographic spread, and organisational layers. Each dimension alone is manageable. Combined, they create coordination cost that no single owner sees.",
    ),
    p(
      "The tax is not an argument against growth. It is an argument for growth with a complexity budget — explicit limits on what you add, and what you retire, as you scale.",
    ),
    h2("How success creates the tax"),
    p(
      "Winning creates options. Options become SKUs, segments, and regions. Each wins a internal champion. Retirement loses a political fight. Portfolio grows; shared platforms do not.",
    ),
    p(
      "Customers teach you complexity. Enterprise accounts request exceptions. Exceptions become product features. Features become defaults. The base product disappears under configurability nobody documents.",
    ),
    p(
      "Geographic expansion copies the playbook without copying the constraints. A model that works in one market with three layers fails in another with seven — but revenue arrives before the cost structure matures.",
    ),
    fig("complexity-tax.svg", "Four complexity dimensions multiplying against a declining margin line", "Complexity compounds — margin rarely scales linearly with revenue."),
    {
      t: "table",
      caption: "Complexity drivers and typical margin effects",
      head: ["Driver","What increases","Margin pressure"],
      rows: [
              [
                      "Product SKUs",
                      "Engineering and support permutations",
                      "Higher cost to serve per dollar"
              ],
              [
                      "Customer segments",
                      "Custom terms and SLAs",
                      "Pricing leakage"
              ],
              [
                      "Geographies",
                      "Compliance and local ops",
                      "Duplicated overhead"
              ],
              [
                      "Org layers",
                      "Handoffs and reconciliation",
                      "Slower decisions, rework"
              ],
              [
                      "Partner channels",
                      "Margin stack and disputes",
                      "Revenue recognition lag"
              ]
      ],
    },
    h2("Quantifying the tax"),
    p(
      "Start with contribution margin by cohort: product family, customer decile, region. Flat or rising revenue with falling cohort margin is tax evidence. Aggregate margin hides the mix shift.",
    ),
    p(
      "Measure cost to serve: implementation hours, support tickets per dollar, finance touches per invoice. Complexity shows up in labour before it shows up in gross margin.",
    ),
    p(
      "Track decision load: meetings per launch, approvers per discount, systems touched per order. These are proxy costs. They predict margin compression quarters ahead.",
    ),
    ul([
          "SKU count vs revenue per SKU",
          "Exception rate in contracts",
          "Layers between front line and profit owner",
          "Time to onboard a new country or segment"
    ]),
    h2("Paying down complexity"),
    p(
      "Complexity retirement is strategy. Sunsetting a SKU or segment requires the same ceremony as launching one. Without retirement rituals, tax compounds.",
    ),
    p(
      "Platform bets must include migration cost and deadline. Dual-running old and new doubles tax during transition — budget for it or defer the bet.",
    ),
    p(
      "Standardise before you scale. The cheapest complexity is the variant you never allowed. Discount governance and product guardrails are margin policy, not sales annoyance.",
    ),
    note("A complexity budget is a cap on new variants unless an equal variant retires. Enforce it in product and sales ops, not in strategy slides."),
    h2("Organisation design and the tax"),
    p(
      "Matrix structures multiply the tax. Every dotted line is a meeting. Design for clear profit ownership even when shared services exist.",
    ),
    p(
      "Shared services without chargeback grow unchecked. Central teams solve local exceptions generously because they do not see margin impact.",
    ),
    p(
      "Acquisitions import complexity wholesale. Integration plans that only map systems miss SKU overlap, segment conflict, and duplicate geo presence.",
    ),
    quote("Growth without a complexity budget is borrowing margin from a future quarter."),
    h2("When complexity is worth paying"),
    p(
      "Some complexity is strategic — defensible customisation, regulated markets, platform ecosystems. Pay the tax consciously and price for it.",
    ),
    p(
      "Separate good complexity from drift. Good complexity has a named owner, a margin target, and a review date. Drift has anecdotes.",
    ),
    p(
      "Invest in tooling that collapses permutations — configuration engines, unified billing, single customer record. Tooling is tax relief with a capital cost.",
    ),
    h3("The retirement test"),
    p(
      "For any variant older than three years, ask: if we launched today, would we? No plus positive revenue means you are running a museum. Museums charge admission or close.",
    ),
    h2("Leading indicators before growth stalls"),
    p(
      "Watch sales cycle length by segment. Complexity lengthens cycles before it hits churn. Watch support cost per active user. Watch forecast accuracy by region — heterogeneity destroys predictability.",
    ),
    p(
      "Executive time on exceptions is a late indicator. When leadership spends Fridays on escalations, the tax invoice arrived.",
    ),
    p(
      "Slowing growth with rising headcount is the classic trap. You are hiring to manage complexity instead of removing it.",
    ),
    h2("Questions worth putting in the next leadership review"),
    ul([
          "Where does our data on complexity tax on margin actually live — and who owns updating it?",
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
      "Publish a quarterly complexity report alongside financials: SKUs added and retired, exceptions granted, countries active.",
    ),
    p(
      "Compare margin of your largest customer to your median. A widening gap often means bespoke work subsidised by the long tail.",
    ),
    p(
      "Challenge any initiative that adds a segment without naming which segment it replaces.",
    ),
    p(
      "Map handoffs on your highest-revenue product. Handoff count correlates with margin erosion in most audits we run.",
    ),
    p(
      "Treat dual-running systems during migration as a line item, not an engineering detail — it often equals a point of margin.",
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
      "Publish a quarterly complexity report alongside financials: SKUs added and retired, exceptions granted, countries active.",
    ),
    p(
      "Compare margin of your largest customer to your median. A widening gap often means bespoke work subsidised by the long tail.",
    ),
    p(
      "Challenge any initiative that adds a segment without naming which segment it replaces.",
    ),
    p(
      "Map handoffs on your highest-revenue product. Handoff count correlates with margin erosion in most audits we run.",
    ),
    p(
      "Treat dual-running systems during migration as a line item, not an engineering detail — it often equals a point of margin.",
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
      "Publish a quarterly complexity report alongside financials: SKUs added and retired, exceptions granted, countries active.",
    ),
    p(
      "Compare margin of your largest customer to your median. A widening gap often means bespoke work subsidised by the long tail.",
    ),
    p(
      "Challenge any initiative that adds a segment without naming which segment it replaces.",
    ),
    p(
      "Map handoffs on your highest-revenue product. Handoff count correlates with margin erosion in most audits we run.",
    ),
    p(
      "Treat dual-running systems during migration as a line item, not an engineering detail — it often equals a point of margin.",
    ),
    p(
      "The numbers in this article are illustrative ranges from client work and published benchmarks — not universal laws. Your organisation will have its own shape. The discipline is to measure yours rather than borrow someone else's headline.",
    ),
    p(
      "Finance, operations, and commercial teams often use the same words with different definitions. Before any index or ratio goes on a dashboard, agree what counts in the numerator and who certifies it monthly.",
    ),
  ],
  faqs: [
    [
      "What is the Complexity Tax?",
      "The margin drag from product, customer, geographic, and organisational complexity — compounded when dimensions interact.",
    ],
    [
      "Can we grow without paying the tax?",
      "You can minimise it with standardisation, retirement discipline, and clear profit ownership — not eliminate it entirely while diversifying.",
    ],
    [
      "Who owns complexity reduction?",
      "A single executive with authority across product, sales, and ops — usually COO or GM, not a project office.",
    ],
    [
      "How fast does complexity accumulate?",
      "Often invisibly for six to eight quarters, then suddenly in forecast misses and cost-to-serve spikes.",
    ],
  ],
}
