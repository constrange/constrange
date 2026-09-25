import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const strategicFocusHasAnEconomicValuePost: Article = {
  slug: "strategic-focus-has-an-economic-value",
  title: "Strategic Focus Has an Economic Value",
  deck: "Every additional priority dilutes completion rate and economic return. Attention Allocation is a formula leadership can measure — not a poster with seven arrows.",
  category: "Decision guides",
  date: "22 May 2026",
  dateIso: "2026-05-22",
  readTime: readTime(1503),
  author,
  tags: ["Strategic focus","Prioritisation","Attention","Execution"],
  art: { label: "Decision guides", cells: ["Every additional priority dilutes completion rate and economic return"], tone: "tide" },
  body: [
    p(
      "Strategy offsites produce lists. Lists grow. Three priorities become seven, then fifteen, each labelled critical. Organisations do not have fifteen critical priorities — they have none, distributed thinly enough to fail politely.",
    ),
    p(
      "Constrange quantifies focus with Attention Allocation: strategic economic value divided by active priorities, adjusted for completion probability. The formula is blunt. So is the reality — completion rates collapse as priority count rises.",
    ),
    p(
      "Focus has economic value because unfinished priorities consume cash, attention, and credibility without return. Measuring focus makes the cost of addition visible before the next initiative launches.",
    ),
    h2("The economics of dilution"),
    p(
      "Each priority carries fixed cost — meetings, reporting, political overhead — largely independent of size. Fifteen priorities pay fifteen overheads; most deliver nothing finished.",
    ),
    p(
      "Opportunity cost is invisible until you ask what the seventh priority prevented. Usually it prevented finishing the second.",
    ),
    p(
      "External credibility erodes. Partners and talent hear fifteen things and believe zero.",
    ),
    fig("strategic-focus-value.svg", "Three boxes comparing three, seven, and fifteen priorities", "Completion falls as priority count rises — focus has measurable value."),
    {
      t: "table",
      caption: "Priority count vs typical completion",
      head: ["Active priorities","Completion within year","Economic drag"],
      rows: [
              [
                      "3",
                      "70–85%",
                      "Low thrash"
              ],
              [
                      "7",
                      "40–55%",
                      "Rising coordination cost"
              ],
              [
                      "15",
                      "15–25%",
                      "Chronic partial delivery"
              ],
              [
                      "20+",
                      "Under 15%",
                      "Organisation learns to ignore lists"
              ]
      ],
    },
    h2("Attention Allocation in practice"),
    p(
      "Estimate economic value of the strategic portfolio if completed. Divide by count of active priorities. Divide again by historical completion rate at that count. The quotient is expected value per priority — compare across quarters.",
    ),
    p(
      "Use historical completion by count from your own data, not benchmarks. Culture affects completion as much as ambition.",
    ),
    p(
      "Simulate removing bottom five priorities — expected value often rises because completion probability rises faster than value falls.",
    ),
    ol([
          "List active priorities with executive sponsors",
          "Score economic value and completion probability",
          "Compute Attention Allocation index",
          "Cut or defer until index improves"
    ]),
    h2("Saying no with economics"),
    p(
      "New requests compare to index impact — adding priority seven without retiring two is a negative NPV decision even if the idea is good.",
    ),
    p(
      "Deferral is not rejection. Sequence with revisit triggers.",
    ),
    p(
      "Boards respond to expected value math better than pleas for focus alone.",
    ),
    note("If everything is priority one, renumber honestly or delete — numbering theatre trains cynicism."),
    h2("Organisational habits that restore focus"),
    p(
      "One in, one out for executive priorities. No net adds without retirements.",
    ),
    p(
      "Quarterly completion audit — finished means customer-visible or P&L-visible, not phase complete.",
    ),
    p(
      "Align budget cuts to priority retirements simultaneously — orphaned budget revives dead priorities.",
    ),
    quote("Focus is not what you add. It is what you refuse to add."),
    h2("Three priorities is a feature"),
    p(
      "Three forces trade-offs into the open. Seven hides them. Fifteen eliminates them.",
    ),
    p(
      "Communicate the three externally — customers and recruits remember three.",
    ),
    p(
      "Measure leadership time allocation against the three — misallocated time breaks focus faster than new slides.",
    ),
    h3("Completion definition"),
    p(
      "Define completion criteria at launch — metric, date, owner. Without criteria, completion becomes narrative. Narrative completion is how fifteen priorities persist.",
    ),
    h2("When to expand focus"),
    p(
      "Add priorities only when completion rate on current set exceeds threshold two quarters running — capacity exists, not optimism.",
    ),
    p(
      "Acquisitions and regulatory shocks may temporarily raise count — with explicit sunset back to three.",
    ),
    p(
      "Never add because competitors have more initiatives — their completion rate is unknown and possibly worse.",
    ),
    h2("Questions worth putting in the next leadership review"),
    ul([
          "Where does our data on attention allocation and focus actually live — and who owns updating it?",
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
      "Track executive calendar hours per priority — unfunded time means unfunded priority.",
    ),
    p(
      "Compare promised launch dates to actual — slippage correlates with count.",
    ),
    p(
      "Survey middle managers on which three they believe — divergence from exec list predicts failure.",
    ),
    p(
      "Run annual priority autopsy on unfinished work from prior years — cost is sunk; lesson is not.",
    ),
    p(
      "Publish deferred priorities with dates — visibility reduces underground duplication.",
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
      "Track executive calendar hours per priority — unfunded time means unfunded priority.",
    ),
    p(
      "Compare promised launch dates to actual — slippage correlates with count.",
    ),
    p(
      "Survey middle managers on which three they believe — divergence from exec list predicts failure.",
    ),
    p(
      "Run annual priority autopsy on unfinished work from prior years — cost is sunk; lesson is not.",
    ),
    p(
      "Publish deferred priorities with dates — visibility reduces underground duplication.",
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
      "Track executive calendar hours per priority — unfunded time means unfunded priority.",
    ),
    p(
      "Compare promised launch dates to actual — slippage correlates with count.",
    ),
    p(
      "Survey middle managers on which three they believe — divergence from exec list predicts failure.",
    ),
    p(
      "Run annual priority autopsy on unfinished work from prior years — cost is sunk; lesson is not.",
    ),
    p(
      "Publish deferred priorities with dates — visibility reduces underground duplication.",
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
      "Track executive calendar hours per priority — unfunded time means unfunded priority.",
    ),
    p(
      "Compare promised launch dates to actual — slippage correlates with count.",
    ),
    p(
      "Survey middle managers on which three they believe — divergence from exec list predicts failure.",
    ),
    p(
      "Run annual priority autopsy on unfinished work from prior years — cost is sunk; lesson is not.",
    ),
    p(
      "Publish deferred priorities with dates — visibility reduces underground duplication.",
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
      "What is Attention Allocation?",
      "Expected strategic value per priority adjusted for completion probability at your current priority count.",
    ],
    [
      "Is three priorities realistic?",
      "For executive attention, yes. Operational work continues; strategic change capacity is finite.",
    ],
    [
      "How do we cut without demoralising teams?",
      "Retire with ceremony — explain economic choice, redeploy people, celebrate completion elsewhere.",
    ],
    [
      "Can divisions have their own three?",
      "Yes — corporate three plus division three beats corporate fifteen.",
    ],
  ],
}
