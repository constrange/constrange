import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const pricingPowerHowDoYouKnowWhenCustomersWillPayMorePost: Article = {
  slug: "pricing-power-how-do-you-know-when-customers-will-pay-more",
  title: "Pricing Power: How Do You Know When Customers Will Pay More?",
  deck: "List price is a lagging indicator. Pricing power shows up earlier in switching costs, scarcity, bundle depth, and trust — if you measure the signals.",
  category: "Decision guides",
  date: "13 March 2026",
  dateIso: "2026-03-13",
  readTime: readTime(1485),
  author,
  tags: ["Pricing power","Pricing strategy","Commercial","Retention"],
  art: { label: "Decision guides", cells: ["List price is a lagging indicator"], tone: "amber" },
  body: [
    p(
      "Leadership asks whether we can raise prices. Sales hears can we without losing deals. Finance hears will margin improve. Customers hear why should I pay more. Without shared signals, the conversation becomes politics.",
    ),
    p(
      "Pricing power is the ability to increase price or reduce discounting without proportional volume loss. It is not brand slogans. It is observable behaviour — renewal rates after increases, win rates at list, expansion without concessions.",
    ),
    p(
      "Constrange tracks four signal clusters before list moves: switching friction, perceived scarcity, bundle anchoring, and trust under stress. Weak signals mean a price rise funds competitor marketing.",
    ),
    h2("Signals before the increase"),
    p(
      "Win-loss interviews reveal price sensitivity better than surveys. Buyers who chose you despite higher price demonstrate power. Buyers who needed heavy discounting demonstrate absence.",
    ),
    p(
      "Renewal cohorts after small increases are the cleanest test. Increase five percent on a willing segment before enterprise-wide moves. Measure logo and dollar retention separately.",
    ),
    p(
      "Expansion revenue without discounting proves value capture. If growth requires constant concessions, list price is decorative.",
    ),
    fig("pricing-power-signals.svg", "Four boxes labelled switching cost, scarcity, bundle, and trust", "Signals stack before you change list price."),
    {
      t: "table",
      caption: "Pricing power signal checklist",
      head: ["Signal","Strong indicator","Weak indicator"],
      rows: [
              [
                      "Switching cost",
                      "Multi-quarter migrations rare",
                      "POC churn to alternatives easy"
              ],
              [
                      "Scarcity",
                      "Capacity-constrained delivery",
                      "Discounts to fill pipeline"
              ],
              [
                      "Bundle depth",
                      "Multiple products per account",
                      "Single SKU reliance"
              ],
              [
                      "Trust",
                      "Incidents without churn spike",
                      "Credits follow every outage"
              ],
              [
                      "Elasticity tests",
                      "Low volume loss in pilots",
                      "Immediate win rate drop"
              ]
      ],
    },
    h2("Switching friction as power"),
    p(
      "Friction is data migration, workflow embedding, training, and contractual exit cost — not annoyance. Map the full switch journey for a representative customer.",
    ),
    p(
      "Friction can erode. APIs, standards, and modular contracts reduce it. Monitor friction like a competitor would — because they are.",
    ),
    p(
      "Ethical boundary: power from value delivered differs from power from lock-in alone. The former survives scrutiny; the latter invites regulation and revenge churn.",
    ),
    ul([
          "Integration count and depth",
          "Custom workflows dependent on your product",
          "Time to parallel run alternative",
          "Exit fees vs replacement cost"
    ]),
    h2("Scarcity and bundle anchoring"),
    p(
      "Scarcity is real when capacity or expertise limits supply — not when sales creates artificial urgency. Customers pay for access others cannot get.",
    ),
    p(
      "Bundles reframe price conversation from unit to outcome. Accounts using three products tolerate increases on one when total value is visible.",
    ),
    p(
      "Unbundling competitors attack weakest SKU. Strengthen the bundle before raising the visible price on a single component.",
    ),
    note("If your scarcity is only marketing, customers learn — and future increases fail."),
    h2("Testing without brand damage"),
    p(
      "Geo and segment tests beat global announcements. Hold control cohorts. Document methodology so sales trusts results.",
    ),
    p(
      "Grandfather strategically — not indefinitely. Time-bound legacy pricing with migration paths.",
    ),
    p(
      "Pair increases with visible value — SLA, support tier, compliance feature — even when cost to serve is flat. Narrative matters when signals are borderline.",
    ),
    quote("Price is a hypothesis about value. Test it like one."),
    h2("When not to raise"),
    p(
      "Weak signals plus competitive entry equals share loss. Delay and fix value or friction first.",
    ),
    p(
      "Raising to cover leakage or complexity tax without fixing root cause repeats the failure at higher nominal price.",
    ),
    p(
      "Contract structures with automatic caps block increases — fix contracts during renewal windows, not at invoice surprise.",
    ),
    h3("Elasticity discipline"),
    p(
      "Define acceptable volume loss before the test. If leadership cannot agree the threshold, do not run the test — the political fallout will override data.",
    ),
    h2("Operationalising pricing power"),
    p(
      "Quarterly pricing council: product, finance, sales ops, legal. Agenda: signal review, test results, exception audit.",
    ),
    p(
      "Discount exception log with reason codes. Rising exceptions mean power is leaking while list stays flat.",
    ),
    p(
      "Train sellers on value metrics customers already use — not internal cost plus. Power conversations happen in customer units, not yours.",
    ),
    h2("Questions worth putting in the next leadership review"),
    ul([
          "Where does our data on pricing power signals actually live — and who owns updating it?",
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
      "Track average discount percent by quarter — widening discounts mean power is falling even if list rises.",
    ),
    p(
      "Compare support tickets during price tests — anger shows up in ops before churn.",
    ),
    p(
      "Review competitor win stories for price mentions — qualitative but fast.",
    ),
    p(
      "Model contribution margin at tested price points, not revenue alone.",
    ),
    p(
      "Document price increase communications that worked — reuse patterns, not only numbers.",
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
      "Track average discount percent by quarter — widening discounts mean power is falling even if list rises.",
    ),
    p(
      "Compare support tickets during price tests — anger shows up in ops before churn.",
    ),
    p(
      "Review competitor win stories for price mentions — qualitative but fast.",
    ),
    p(
      "Model contribution margin at tested price points, not revenue alone.",
    ),
    p(
      "Document price increase communications that worked — reuse patterns, not only numbers.",
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
      "Track average discount percent by quarter — widening discounts mean power is falling even if list rises.",
    ),
    p(
      "Compare support tickets during price tests — anger shows up in ops before churn.",
    ),
    p(
      "Review competitor win stories for price mentions — qualitative but fast.",
    ),
    p(
      "Model contribution margin at tested price points, not revenue alone.",
    ),
    p(
      "Document price increase communications that worked — reuse patterns, not only numbers.",
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
      "Track average discount percent by quarter — widening discounts mean power is falling even if list rises.",
    ),
    p(
      "Compare support tickets during price tests — anger shows up in ops before churn.",
    ),
    p(
      "Review competitor win stories for price mentions — qualitative but fast.",
    ),
    p(
      "Model contribution margin at tested price points, not revenue alone.",
    ),
  ],
  faqs: [
    [
      "How long should a price test run?",
      "One to two renewal cycles for subscription; ninety days minimum for transactional with enough volume.",
    ],
    [
      "Can pricing power differ by segment?",
      "Almost always. Enterprise and SMB rarely share the same elasticity — test separately.",
    ],
    [
      "What if competitors undercut after our increase?",
      "Expected in weak-signal markets. Hold control cohort; respond with bundle or value, not panic discounting.",
    ],
    [
      "Is NPS a pricing power signal?",
      "Supporting only. High NPS with high discount dependence is not power.",
    ],
  ],
}
