import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const businessResilienceAsCompetitiveAdvantageNotInsurancePost: Article = {
  slug: "business-resilience-as-competitive-advantage-not-insurance",
  title: "Business Resilience as Competitive Advantage, Not Insurance",
  deck: "Resilience is not a compliance checkbox. After shock, prepared companies capture share while rivals recover — advantage measured in quarters, not incidents avoided.",
  category: "Decision guides",
  date: "25 June 2026",
  dateIso: "2026-06-25",
  readTime: readTime(1488),
  author,
  tags: ["Resilience","Competitive advantage","Risk","Operations"],
  art: { label: "Decision guides", cells: ["Resilience is not a compliance checkbox"], tone: "coral" },
  body: [
    p(
      "Resilience programmes often live in risk and IT — insurance against bad days. That framing underinvests. Resilience is offensive when shocks redistribute customers, talent, and supply.",
    ),
    p(
      "Constrange treats resilience as time-to-recover plus time-to-capture: how fast you restore service and how fast you win displaced demand. Companies optimising only recovery leave share on the table.",
    ),
    p(
      "Post-shock winners are rarely lucky. They pre-positioned capacity buffers, supplier alternates, communication discipline, and financial headroom — then executed capture plays competitors could not match while firefighting.",
    ),
    h2("Redefining resilience"),
    p(
      "Recovery alone returns to zero. Capture creates positive delta — new customers, deeper share, talent inflow. Companies that plan only for recovery meet their SLA and still lose ground to rivals who planned for displacement.",
    ),
    p(
      "Measure maximum tolerable outage by revenue and reputation, not only SLA contract. A minute of downtime costs differently by segment — enterprise, consumer, regulated — and the tolerance should be explicit before shock, not debated during it.",
    ),
    p(
      "Integrate resilience into capital allocation — buffers are strategic spends with scenario ROI. Inventory, surge vendor contracts, and liquidity lines belong in the same portfolio conversation as growth bets, with owners and triggers.",
    ),
    fig("business-resilience-advantage.svg", "Flow from shock through recover to capture", "Resilience converts downtime into share when capture is designed in."),
    {
      t: "table",
      caption: "Resilience vs insurance mindset",
      head: ["Insurance view","Advantage view"],
      rows: [
              [
                      "Minimise loss",
                      "Minimise loss and capture upside"
              ],
              [
                      "Compliance metric",
                      "Recovery and capture time"
              ],
              [
                      "IT and risk owned",
                      "P&L and strategy owned"
              ],
              [
                      "Annual drill",
                      "Continuous scenario rhythm"
              ],
              [
                      "Cost centre",
                      "Investment with ROI case"
              ]
      ],
    },
    h2("Building recover capability"),
    p(
      "Identify critical paths — single supplier, single region, single key person. Redundancy where economics allow; documented workarounds where not. Workarounds nobody has rehearsed are fiction on the day they matter.",
    ),
    p(
      "Run partial failures, not tabletop only. Fail supplier, fail site, fail system — measure decision time and communication latency. Tabletops teach vocabulary; injections teach whether the playbook matches reality.",
    ),
    p(
      "Communicate templates pre-written — internal and external — approval chains short during shock. Legal and comms review templates in peacetime so crisis hours go to execution, not wording debates.",
    ),
    ol([
          "Map critical paths and single points of failure",
          "Assign scenario owners with budget",
          "Exercise twice yearly with metrics",
          "Update playbooks within two weeks of exercise"
    ]),
    h2("Designing capture plays"),
    p(
      "Identify what competitors cannot supply during shock — capacity, geography, compliance, support level. Capture is not predatory by default; it is serving demand your rivals cannot meet while they recover.",
    ),
    p(
      "Pre-negotiate surge capacity where possible — marketing without supply is reputational suicide. Sales promises during industry outages travel fast; fulfilment failure travels faster.",
    ),
    p(
      "Sales and CS playbooks for ethical capture — help without predatory pricing that damages long-term brand. Capture plans reviewed by legal and brand before shock prevent improvised discounts that haunt renewal cycles.",
    ),
    note("Capture plans require legal and brand review before shock — improvisation under stress invites mistakes."),
    h2("Financial headroom"),
    p(
      "Liquidity and covenant space determine speed. Resilience without cash is narrative. Model cash burn under shock scenarios separately from base plan — boards approve buffers when numbers exist.",
    ),
    p(
      "Inventory and vendor terms are balance sheet resilience — not only IT backups. Extended payables and strategic stock are unfashionable until a port closes or a supplier fails.",
    ),
    p(
      "Insurance payouts lag; operations cannot wait — self-funded recovery speed is the metric. Treat insurance as partial reimbursement, not as your primary continuity budget.",
    ),
    quote("Insurance pays for loss. Resilience pays for position."),
    h2("Organisation and culture"),
    p(
      "Resilience decisions are slow when owned only by risk. COO or GM must co-own capture economics — recovery is ops, capture is commercial, both are P&L.",
    ),
    p(
      "Reward post-exercise improvement, not exercise attendance. Teams that improve decision time and communication accuracy after each drill build muscle; teams that tick compliance boxes do not.",
    ),
    p(
      "Talent stays when leadership communicates honestly during shock — transparency is operational resilience. Rumour-filled outages lose people faster than outages themselves.",
    ),
    h3("Supplier and ecosystem"),
    p(
      "Multi-source critical inputs with relationship depth — alternate supplier you never call is fiction. Small ongoing orders keep alternates warm and give you credible switch time when primary fails.",
    ),
    h2("Measuring advantage"),
    p(
      "Track share and pipeline velocity in shock windows vs baseline. Define shock windows by industry event, not only your own incident — competitor outages are capture opportunities too.",
    ),
    p(
      "Compare recovery time to industry peers using public signals and customer feedback. Relative speed matters when customers choose who to trust for the next contract.",
    ),
    p(
      "Post-incident review includes capture retrospective — what we could have taken and did not. Missed capture is learning, not blame, when playbooks update.",
    ),
    h2("Questions worth putting in the next leadership review"),
    ul([
          "Where does our data on business resilience as advantage actually live — and who owns updating it?",
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
      "Maintain scenario cards with pre-approved spend triggers — decision latency drops.",
    ),
    p(
      "Review customer contracts for force majeure asymmetry — yours and theirs.",
    ),
    p(
      "Track employee sentiment after exercises — fear-based drills backfire.",
    ),
    p(
      "Integrate resilience into onboarding — new leaders inherit playbooks.",
    ),
    p(
      "Benchmark inventory days against shock scenario demand spike.",
    ),
    p(
      "Pair recovery time targets with capture pipeline goals in the same scorecard — ops and commercial share one resilience outcome.",
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
      "Maintain scenario cards with pre-approved spend triggers — decision latency drops.",
    ),
    p(
      "Review customer contracts for force majeure asymmetry — yours and theirs.",
    ),
    p(
      "Track employee sentiment after exercises — fear-based drills backfire.",
    ),
    p(
      "Integrate resilience into onboarding — new leaders inherit playbooks.",
    ),
    p(
      "Benchmark inventory days against shock scenario demand spike.",
    ),
    p(
      "Pair recovery time targets with capture pipeline goals in the same scorecard — ops and commercial share one resilience outcome.",
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
      "Maintain scenario cards with pre-approved spend triggers — decision latency drops.",
    ),
    p(
      "Review customer contracts for force majeure asymmetry — yours and theirs.",
    ),
    p(
      "Track employee sentiment after exercises — fear-based drills backfire.",
    ),
    p(
      "Integrate resilience into onboarding — new leaders inherit playbooks.",
    ),
    p(
      "Benchmark inventory days against shock scenario demand spike.",
    ),
    p(
      "Pair recovery time targets with capture pipeline goals in the same scorecard — ops and commercial share one resilience outcome.",
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
      "Is resilience only for large enterprises?",
      "No — small firms win capture with speed; lack of buffers hurts more but advantage is available.",
    ],
    [
      "How often to run exercises?",
      "Twice yearly minimum for critical scenarios; tabletop quarterly for rotating risks.",
    ],
    [
      "What is capture ethics?",
      "Serve displaced need without exploitative pricing or false claims — brand survives shock too.",
    ],
    [
      "Does resilience overlap with cybersecurity?",
      "Partially — cyber is one shock type; resilience spans supply, people, finance, and reputation.",
    ],
  ],
}
