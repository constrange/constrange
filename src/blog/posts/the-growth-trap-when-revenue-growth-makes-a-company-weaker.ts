import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const theGrowthTrapWhenRevenueGrowthMakesACompanyWeakerPost: Article = {
  slug: "the-growth-trap-when-revenue-growth-makes-a-company-weaker",
  title: "The Growth Trap: When Revenue Growth Makes a Company Weaker",
  deck: "Revenue can rise while strategic position weakens — through bad mix, subsidised segments, and capacity that cannot compound. Growth quality beats growth rate.",
  category: "Decision guides",
  date: "17 April 2026",
  dateIso: "2026-04-17",
  readTime: readTime(1507),
  author,
  tags: ["Growth quality","Unit economics","Strategy","Portfolio"],
  art: { label: "Decision guides", cells: ["Revenue can rise while strategic position weakens — through bad mix, …"], tone: "clay" },
  body: [
    p(
      "Boards reward growth rate. Operators live in unit economics. When the two diverge, companies enter the growth trap: revenue rises, cash and capability erode, and the next quarter requires more brute force to repeat.",
    ),
    p(
      "The trap is subtle because headlines stay positive. New logos mask churn in core segments. Discounted entry deals inflate pipeline while renewal cohorts decay. Headcount rises faster than productivity.",
    ),
    p(
      "Constrange separates growth quality from growth rate — contribution margin by cohort, payback period, expansion vs replacement revenue, and strategic fit of new segments. Rate without quality is borrowing strength from the future.",
    ),
    h2("How the trap springs"),
    p(
      "Pressure to beat comparables every quarter pushes discounting and segment drift. Sales opens markets the product cannot serve profitably. Product chases features for deals that will not renew.",
    ),
    p(
      "Success metrics celebrate gross additions. Net revenue retention and cohort margin arrive too late in steering — often in a post-mortem.",
    ),
    p(
      "Capital fuels the trap. Cheap funding extends payback tolerance until funding tightens and the quality debt comes due at once.",
    ),
    fig("growth-trap.svg", "Revenue line rising while unit economics line falls", "Revenue growth can mask weakening economics — track both lines."),
    {
      t: "table",
      caption: "Growth rate vs growth quality",
      head: ["Metric","Rate focus","Quality focus"],
      rows: [
              [
                      "New ARR",
                      "Gross bookings",
                      "Net after churn and downgrade"
              ],
              [
                      "CAC payback",
                      "Ignored in boom",
                      "Months to contribution positive"
              ],
              [
                      "Mix",
                      "Any revenue",
                      "Margin-weighted segment growth"
              ],
              [
                      "Capacity",
                      "Hire to hit number",
                      "Revenue per head trend"
              ],
              [
                      "Strategic fit",
                      "Land grab",
                      "Alignment with core advantage"
              ]
      ],
    },
    h2("Diagnosing quality"),
    p(
      "Plot revenue and contribution margin by vintage cohort. Diverging lines mean you are buying growth.",
    ),
    p(
      "Measure payback by channel and segment. Aggregate payback hides subsidised channels.",
    ),
    p(
      "Compare expansion revenue to new logo revenue in core segment. Healthy growth compounds inside accounts you already trust.",
    ),
    ul([
          "Logo churn in first twelve months",
          "Discount depth trend on new deals",
          "Implementation overrun rate by segment",
          "Forecast accuracy by seller cohort"
    ]),
    h2("Exiting without killing momentum"),
    p(
      "Segment exits are leadership acts. Announce which segments you will no longer pursue and redeploy capacity visibly.",
    ),
    p(
      "Reset comp to quality metrics gradually — sudden shifts without process support trigger gaming.",
    ),
    p(
      "Communicate the season to investors: margin and retention over raw ARR. Markets adjust if you are consistent.",
    ),
    note("A growth trap ends when leadership stops apologising for saying no to bad revenue."),
    h2("Portfolio and product choices"),
    p(
      "Every SKU and segment should pass a quality gate: target margin, payback, and strategic linkage. Failures sunset on schedule.",
    ),
    p(
      "Platform bets that enable quality growth — self-serve, standard packages, automated onboarding — deserve priority over bespoke enterprise chase.",
    ),
    p(
      "Partnerships that add volume without capability deepen the trap. Evaluate partner cohort economics separately.",
    ),
    quote("Not all revenue is good revenue. Some is expensive proof you lost focus."),
    h2("Board and investor alignment"),
    p(
      "Educate the board on quality metrics before a miss forces the conversation. One dashboard with rate and quality side by side.",
    ),
    p(
      "Avoid dual messaging — quality to investors, rate to sales. People hear both.",
    ),
    p(
      "Use downturns to prune — waiting for good times to exit bad segments rarely happens.",
    ),
    h3("The quality covenant"),
    p(
      "Publish internal thresholds: we will not pursue deals below X margin or Y payback except named strategic pilots with sunset dates. Breaches require executive approval logged monthly.",
    ),
    h2("Sustainable growth rhythm"),
    p(
      "Quarterly quality review precedes forecast lock. Finance blocks forecast that quality metrics cannot support.",
    ),
    p(
      "Celebrate net retention and payback improvements like logo milestones.",
    ),
    p(
      "Invest in enablement that raises quality — quoting discipline, delivery capacity, customer success coverage — not only pipeline generation.",
    ),
    h2("Questions worth putting in the next leadership review"),
    ul([
          "Where does our data on growth quality versus revenue growth actually live — and who owns updating it?",
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
      "Track revenue per employee quarterly — declining trend with rising ARR is trap smoke.",
    ),
    p(
      "Compare win rates at target price vs discounted — widening gap means quality erosion.",
    ),
    p(
      "Review top ten new logos for fit score six months post-sale.",
    ),
    p(
      "Separate strategic pilot revenue in reporting so it does not mask core quality.",
    ),
    p(
      "Challenge any growth initiative without a payback model — narrative is not a model.",
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
      "Track revenue per employee quarterly — declining trend with rising ARR is trap smoke.",
    ),
    p(
      "Compare win rates at target price vs discounted — widening gap means quality erosion.",
    ),
    p(
      "Review top ten new logos for fit score six months post-sale.",
    ),
    p(
      "Separate strategic pilot revenue in reporting so it does not mask core quality.",
    ),
    p(
      "Challenge any growth initiative without a payback model — narrative is not a model.",
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
      "Track revenue per employee quarterly — declining trend with rising ARR is trap smoke.",
    ),
    p(
      "Compare win rates at target price vs discounted — widening gap means quality erosion.",
    ),
    p(
      "Review top ten new logos for fit score six months post-sale.",
    ),
    p(
      "Separate strategic pilot revenue in reporting so it does not mask core quality.",
    ),
    p(
      "Challenge any growth initiative without a payback model — narrative is not a model.",
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
      "Track revenue per employee quarterly — declining trend with rising ARR is trap smoke.",
    ),
    p(
      "Compare win rates at target price vs discounted — widening gap means quality erosion.",
    ),
    p(
      "Review top ten new logos for fit score six months post-sale.",
    ),
    p(
      "Separate strategic pilot revenue in reporting so it does not mask core quality.",
    ),
    p(
      "Challenge any growth initiative without a payback model — narrative is not a model.",
    ),
    p(
      "The numbers in this article are illustrative ranges from client work and published benchmarks — not universal laws. Your organisation will have its own shape. The discipline is to measure yours rather than borrow someone else's headline.",
    ),
  ],
  faqs: [
    [
      "Can growth rate and quality both rise?",
      "Yes — that is compounding growth. The trap is when rate rises while quality falls.",
    ],
    [
      "How fast can a company escape the trap?",
      "Two to four quarters of disciplined exits and comp changes before metrics stabilise.",
    ],
    [
      "Do public companies face harder trade-offs?",
      "Short-term pressure is real; consistent quality messaging reduces penalty over time.",
    ],
    [
      "What metric should sales own?",
      "Pair bookings with payback or margin gate — not bookings alone.",
    ],
  ],
}
