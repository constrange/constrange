import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const revenueLeakageWhereCompaniesLoseMoneyAfterTheSalePost: Article = {
  slug: "revenue-leakage-where-companies-lose-money-after-the-sale",
  title: "Revenue Leakage: Where Companies Lose Money After the Sale",
  deck: "Bookings look strong. Cash and margin tell another story. Revenue leakage is the gap between what you sold and what you kept — and it grows in the handoffs after signature.",
  category: "Decision guides",
  date: "24 February 2026",
  dateIso: "2026-02-24",
  readTime: readTime(1498),
  author,
  tags: ["Revenue leakage","Commercial ops","Margin","Billing"],
  art: { label: "Decision guides", cells: ["Bookings look strong"], tone: "moss" },
  body: [
    p(
      "Sales celebrates the booking. Finance discovers the leakage months later — in credits, unbilled usage, implementation overruns, discount creep, and churn that was never in the forecast. The gap between booked and realized revenue is not fraud. It is process debt.",
    ),
    p(
      "Constrange defines revenue leakage as Booked minus Realized, traced across delivery, billing, renewals, and collections. Most companies measure bookings and revenue separately. Few measure the bridge with enough granularity to act.",
    ),
    p(
      "Finding leakage is uncomfortable because it implicates both commercial ambition and operational capacity. Fixing it requires shared ownership — not a witch hunt in sales or finance alone.",
    ),
    h2("Why bookings lie kindly"),
    p(
      "CRM systems optimise for pipeline velocity. They capture intent and price at signature, not cost to deliver or probability of downgrade. A booking is a hypothesis about future cash.",
    ),
    p(
      "Multi-year deals amplify the illusion. Annual contract value looks smooth; realization follows a stair-step of milestones, usage thresholds, and renewal renegotiations.",
    ),
    p(
      "Channel and partner deals add margin stack leakage. Each layer can discount or delay. Bookings at list less partner margin less implementation subsidy is a different number — often computed too late.",
    ),
    fig("revenue-leakage.svg", "Booked revenue flowing to realized revenue with a leakage branch", "Leakage hides between signature and cash — not in the CRM alone."),
    {
      t: "table",
      caption: "Common leakage categories",
      head: ["Category","Typical cause","Detection lag"],
      rows: [
              [
                      "Implementation overruns",
                      "Scope sold, capacity constrained",
                      "30–90 days"
              ],
              [
                      "Unbilled usage",
                      "Metering gaps or contract ambiguity",
                      "60–120 days"
              ],
              [
                      "Discount creep",
                      "Renewal exceptions without approval",
                      "At renewal"
              ],
              [
                      "Credits and disputes",
                      "SLA misses, quality issues",
                      "Quarter-end"
              ],
              [
                      "Early churn",
                      "Mis-sold segment or poor onboarding",
                      "90–180 days"
              ]
      ],
    },
    h2("Building the bridge"),
    p(
      "Construct a monthly booked-to-realized bridge by cohort: deal size, segment, product, seller, region. Require finance and commercial ops to reconcile variances above a materiality threshold.",
    ),
    p(
      "Tag leakage reasons consistently. Ad-hoc labels prevent pattern detection. A small set of codes — scope, billing, discount, churn, dispute — beats granular free text nobody aggregates.",
    ),
    p(
      "Compare bridge trends to capacity metrics: implementation backlog, support ratio, billing dispute rate. Leakage spikes often precede capacity crises by one quarter.",
    ),
    ol([
          "Define booked and realized consistently across functions",
          "Build the bridge report monthly by cohort",
          "Assign owners per leakage code",
          "Tie remediation to comp and forecast only after two consistent quarters of data"
    ]),
    h2("Delivery and scope leakage"),
    p(
      "Sold scope that delivery cannot absorb converts to margin or credits. Track sold hours vs delivered hours by offering. Persistent negative variance is a pricing or staffing problem, not a project management footnote.",
    ),
    p(
      "Professional services organisations feel this first. Product companies feel it when services attach to platform sales without standard packages.",
    ),
    p(
      "Fix at the quote stage: standard SKUs, enforced approval for non-standard scope, and delivery sign-off before booking recognition in variable comp.",
    ),
    note("If delivery learns about a deal from the booking notification, leakage is already baked in."),
    h2("Billing and renewal leakage"),
    p(
      "Usage-based models leak when metering lags product changes. Every release should trigger a billing regression check — not only a functional test.",
    ),
    p(
      "Renewals renegotiate in shadows. Auto-renewals with silent discounts erode realized revenue while bookings dashboards stay nostalgic.",
    ),
    p(
      "Collections are leakage too — not only bad debt, but delayed cash that forces expensive working capital.",
    ),
    quote("Realized revenue is the only revenue that happened. Everything else is a story."),
    h2("Governance that sticks"),
    p(
      "Joint leakage review monthly: sales ops, finance, delivery, support. Rotate chair to prevent factional blindness.",
    ),
    p(
      "Tie seller variable comp to realized or collected revenue after a defined period, not booking alone. Transition carefully — shock comp without process fix triggers gaming.",
    ),
    p(
      "Publish leakage as a KPI alongside bookings. What gets reviewed gets improved.",
    ),
    h3("Materiality thresholds"),
    p(
      "Set thresholds by segment — a five percent leakage on enterprise differs from five percent on SMB volume. Investigate variances above threshold within ten business days with named remediation.",
    ),
    h2("From diagnosis to pricing power"),
    p(
      "Leakage analysis often reveals underpriced complexity — custom work sold as standard. That insight feeds pricing and packaging, not only ops fixes.",
    ),
    p(
      "Customers causing disproportionate leakage may be unprofitable at any price. Rational churn improves realized revenue mix.",
    ),
    p(
      "Closing leakage frees capacity without new sales — often the fastest margin improvement available.",
    ),
    h2("Questions worth putting in the next leadership review"),
    ul([
          "Where does our data on revenue leakage after the sale actually live — and who owns updating it?",
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
      "Reconcile top ten deals monthly from booking file to first invoice — patterns appear fast.",
    ),
    p(
      "Compare leakage codes to NPS by cohort — quality leakage precedes churn leakage.",
    ),
    p(
      "Audit auto-renewal language annually; ambiguous terms become credits.",
    ),
    p(
      "Track time from signature to first value — long ramps predict realization gaps.",
    ),
    p(
      "Separate leakage from timing differences — finance and sales must agree definitions first.",
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
      "Reconcile top ten deals monthly from booking file to first invoice — patterns appear fast.",
    ),
    p(
      "Compare leakage codes to NPS by cohort — quality leakage precedes churn leakage.",
    ),
    p(
      "Audit auto-renewal language annually; ambiguous terms become credits.",
    ),
    p(
      "Track time from signature to first value — long ramps predict realization gaps.",
    ),
    p(
      "Separate leakage from timing differences — finance and sales must agree definitions first.",
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
      "Reconcile top ten deals monthly from booking file to first invoice — patterns appear fast.",
    ),
    p(
      "Compare leakage codes to NPS by cohort — quality leakage precedes churn leakage.",
    ),
    p(
      "Audit auto-renewal language annually; ambiguous terms become credits.",
    ),
    p(
      "Track time from signature to first value — long ramps predict realization gaps.",
    ),
    p(
      "Separate leakage from timing differences — finance and sales must agree definitions first.",
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
      "How is revenue leakage different from churn?",
      "Churn is lost customers. Leakage is lost dollars on customers you still have — or thought you booked.",
    ],
    [
      "What is a normal leakage rate?",
      "Varies by model; three to eight percent of booked is common in hybrid SaaS before discipline. Trend matters more than benchmark.",
    ],
    [
      "Who owns the bridge report?",
      "Commercial operations with finance certification — not sales alone, not finance alone.",
    ],
    [
      "Can leakage be recovered?",
      "Some via billing fixes and scope enforcement; some is gone — treat as learning for quoting and delivery capacity.",
    ],
  ],
}
