import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const theDecisionLatencyProblemHowMuchDoesASlowCompanyLosePost: Article = {
  slug: "the-decision-latency-problem-how-much-does-a-slow-company-lose",
  title: "The Decision Latency Problem: How Much Does a Slow Company Lose?",
  deck: "Slow decisions compound — opportunities decay, costs accumulate, talent leaves. Decision Cost equals Opportunity times Delay, and most firms never measure either term.",
  category: "Decision guides",
  date: "13 July 2026",
  dateIso: "2026-07-13",
  readTime: readTime(1487),
  author,
  tags: ["Decision latency","Governance","Speed","Leadership"],
  art: { label: "Decision guides", cells: ["Slow decisions compound — opportunities decay, costs accumulate, tale…"], tone: "pine" },
  body: [
    p(
      "Companies admire fast competitors while approving through five layers. Decision latency is the elapsed time from question asked to decision committed — not announced, committed with budget and owner.",
    ),
    p(
      "Constrange indexes decision latency by type: pricing exception, hire, product launch, vendor switch, strategic pivot. Latency varies by type; aggregate averages lie.",
    ),
    p(
      "Decision Cost models economic loss as Opportunity times Delay — rough but directional. Unmeasured latency feels like culture. Measured latency becomes a redesign project with ROI.",
    ),
    h2("Where latency hides"),
    p(
      "Waiting for perfect information is the polite form of delay. Most decisions need sufficient information, not complete.",
    ),
    p(
      "Consensus culture adds sequential approvals without parallel work. Each layer waits for the previous layer to polish slides.",
    ),
    p(
      "Escalation without default — if no decision by date X, outcome Y — allows passive veto.",
    ),
    fig("decision-latency-index.svg", "Formula showing decision cost as opportunity multiplied by delay", "Decision Cost = Opportunity × Delay — measure both terms."),
    {
      t: "table",
      caption: "Decision Latency Index — example targets",
      head: ["Decision type","Median latency","Cost driver"],
      rows: [
              [
                      "Pricing exception",
                      "Under 5 days",
                      "Lost deal or excess discount"
              ],
              [
                      "Standard hire",
                      "Under 21 days",
                      "Vacancy cost, project slip"
              ],
              [
                      "Product launch go/no-go",
                      "Under 14 days",
                      "Competitor window"
              ],
              [
                      "Vendor change",
                      "Under 30 days",
                      "Lock-in renewal"
              ],
              [
                      "Strategic pivot",
                      "Under 45 days",
                      "Organisation thrash"
              ]
      ],
    },
    h2("Building the index"),
    p(
      "Timestamp decisions from request to commit in workflow tool or calendar audit. Sample monthly by type.",
    ),
    p(
      "Interview decision requesters on outcome — deal lost, project delayed, cost incurred. Tag economic impact bands.",
    ),
    p(
      "Publish median and ninetieth percentile — tail latency hurts more than median suggests.",
    ),
    ul([
          "Request date and commit date",
          "Decision type taxonomy",
          "Outcome tag — win, loss, neutral, unknown",
          "Layers involved count"
    ]),
    h2("Redesigning governance"),
    p(
      "Delegate thresholds clearly — below X, manager decides; above X, forum with SLA.",
    ),
    p(
      "Pre-approved rules replace case-by-case — discount bands, hire levels, standard architecture choices.",
    ),
    p(
      "Decision forums with standing agenda slots — waiting for quarterly board kills deals.",
    ),
    note("Speed without delegation is theatre — executives cannot decide everything faster, only fewer things."),
    h2("Opportunity decay"),
    p(
      "Model decay for time-sensitive decisions — pipeline value times weekly slip probability.",
    ),
    p(
      "Talent markets decay faster than sales pipelines. Slow hire decisions lose candidates to faster rivals.",
    ),
    p(
      "Regulatory and seasonal windows are hard deadlines — latency past window equals zero opportunity.",
    ),
    quote("A delayed yes is often a no with extra meetings."),
    h2("Culture and accountability"),
    p(
      "Name decision owners, not recommendation owners. Recommendations without decision rights inflate latency.",
    ),
    p(
      "Reward clean no's faster than slow maybes — ambiguity consumes more than rejection.",
    ),
    p(
      "Retros on high-latency decisions quarterly — process fix, not blame ritual.",
    ),
    h3("Default outcomes"),
    p(
      "Implement default-on-expiry — pricing reverts to standard, requisition expires, project proceeds with stated assumptions — to break passive blocking.",
    ),
    h2("When slowness is correct"),
    p(
      "Irreversible high-blast-radius decisions deserve latency — capital structure, safety systems, major M&A.",
    ),
    p(
      "Label slow types explicitly so fast types are not contaminated by same process.",
    ),
    p(
      "Do not use irreversible argument for reversible operational choices — that is avoidance.",
    ),
    h2("Questions worth putting in the next leadership review"),
    ul([
          "Where does our data on decision latency and cost actually live — and who owns updating it?",
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
      "Track calendar days in approval chains for top ten deals — sales feels latency before index exists.",
    ),
    p(
      "Compare latency before and after pre-approval rules — ROI is often immediate.",
    ),
    p(
      "Survey managers on decisions waiting over thirty days — queue visibility reduces latency.",
    ),
    p(
      "Measure rework from reversed decisions — flip-flop is latency plus cost.",
    ),
    p(
      "Publish decision SLAs internally — sunlight changes behaviour.",
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
      "Track calendar days in approval chains for top ten deals — sales feels latency before index exists.",
    ),
    p(
      "Compare latency before and after pre-approval rules — ROI is often immediate.",
    ),
    p(
      "Survey managers on decisions waiting over thirty days — queue visibility reduces latency.",
    ),
    p(
      "Measure rework from reversed decisions — flip-flop is latency plus cost.",
    ),
    p(
      "Publish decision SLAs internally — sunlight changes behaviour.",
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
      "Track calendar days in approval chains for top ten deals — sales feels latency before index exists.",
    ),
    p(
      "Compare latency before and after pre-approval rules — ROI is often immediate.",
    ),
    p(
      "Survey managers on decisions waiting over thirty days — queue visibility reduces latency.",
    ),
    p(
      "Measure rework from reversed decisions — flip-flop is latency plus cost.",
    ),
    p(
      "Publish decision SLAs internally — sunlight changes behaviour.",
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
      "Track calendar days in approval chains for top ten deals — sales feels latency before index exists.",
    ),
    p(
      "Compare latency before and after pre-approval rules — ROI is often immediate.",
    ),
    p(
      "Survey managers on decisions waiting over thirty days — queue visibility reduces latency.",
    ),
    p(
      "Measure rework from reversed decisions — flip-flop is latency plus cost.",
    ),
    p(
      "Publish decision SLAs internally — sunlight changes behaviour.",
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
  ],
  faqs: [
    [
      "What is the Decision Latency Index?",
      "Median and tail time from decision request to committed outcome, by decision type.",
    ],
    [
      "How do we estimate opportunity?",
      "Use bands — deal value, vacancy cost, weekly burn — perfection is not required for ranking.",
    ],
    [
      "Will faster decisions increase errors?",
      "Reversible decisions benefit from speed plus retros; irreversible decisions keep longer clocks.",
    ],
    [
      "Who owns the index?",
      "Chief of staff or COO with finance support — not HR alone, not IT alone.",
    ],
  ],
}
