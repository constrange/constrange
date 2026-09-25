import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const strategyExecutionGapWhyGoodStrategiesFailAfterTheBoardroomPost: Article = {
  slug: "strategy-execution-gap-why-good-strategies-fail-after-the-boardroom",
  title: "Strategy Execution Gap: Why Good Strategies Fail After the Boardroom",
  deck: "The board approves a coherent strategy. Twelve months later, operations is running something else. The gap is measurable — and it lives in five handoffs, not in vision.",
  category: "Decision guides",
  date: "20 January 2026",
  dateIso: "2026-01-20",
  readTime: readTime(1495),
  author,
  tags: ["Strategy execution","Operating model","Leadership","Measurement"],
  art: { label: "Decision guides", cells: ["The board approves a coherent strategy"], tone: "ink" },
  body: [
    p(
      "Strategy decks rarely fail on logic. They fail on translation. A leadership team agrees on where to play and how to win, then returns to organisations whose budgets, incentives, and dashboards still describe last year's priorities. The result looks like poor execution. Often it is excellent execution of a different strategy.",
    ),
    p(
      "Constrange tracks this as the Strategy Execution Gap Index: alignment across strategy, budget, incentives, operations, and measurement. Each link can look fine in isolation. The index exposes where the chain breaks — usually at the handoff nobody owns.",
    ),
    p(
      "Closing the gap is not a communication exercise. It is an operating discipline: name the handoffs, assign owners, and review whether the numbers on the ground match the words in the room.",
    ),
    h2("Where the chain breaks"),
    p(
      "Most organisations can produce a strategy document. Fewer can produce a budget that sacrifices something the strategy demands. Budget is where abstract choice becomes concrete no. When every line item survives the strategy conversation, you do not have alignment — you have annotation.",
    ),
    p(
      "Incentives amplify the drift. Sales compensated on gross bookings while strategy pivots to margin quality will produce bookings. Operations measured on cost per unit while strategy demands customisation will produce standardisation. People respond to what is measured and paid for, not to slides they saw once in January.",
    ),
    p(
      "The operations layer adds another fracture. Middle management translates strategy into weekly work. If that translation happens through email and hope, each layer optimises what it sees. By the time work reaches the customer, the original trade-off is unrecognisable.",
    ),
    fig("strategy-execution-gap.svg", "Five linked stages from strategy through budget, incentives, operations, and measurement", "The execution gap widens where handoffs lack owners and metrics."),
    {
      t: "table",
      caption: "Strategy Execution Gap Index — sample readings",
      head: ["Link","Strong signal","Gap signal"],
      rows: [
              [
                      "Strategy → Budget",
                      "Initiatives map to choices",
                      "Budget lines survive reorgs unchanged"
              ],
              [
                      "Budget → Incentives",
                      "Comp plans reward trade-offs",
                      "Bonuses still pay volume over margin"
              ],
              [
                      "Incentives → Ops",
                      "Teams can explain the bet",
                      "Front line optimises local queues"
              ],
              [
                      "Ops → Measurement",
                      "KPIs match stated strategy",
                      "Dashboard green while customers wait"
              ],
              [
                      "Measurement → Strategy",
                      "Reviews change priorities",
                      "Same deck for eighteen months"
              ]
      ],
    },
    h2("Measuring the gap without theatre"),
    p(
      "The index is a structured interview plus document review, not a survey about belief. Ask each link: show me the artefact. Strategy deck. Budget file. Comp plan. Operating cadence. Dashboard definition. Score alignment one to five with evidence, not sentiment.",
    ),
    p(
      "Weight disagreements between functions heavily. Finance and sales often score budget alignment differently. That disagreement is the finding. Harmonised scores without evidence usually mean people stopped arguing and started ignoring each other.",
    ),
    p(
      "Repeat quarterly. The index is a time series. A score that improves while customer outcomes flatline is gaming. Pair the index with one end-to-end metric strategy claims to move — cycle time, margin mix, retention in the target segment.",
    ),
    note("If the only person who can explain strategy is the CEO, you have a communication success and an execution vacuum."),
    h2("Fixing handoffs, not speeches"),
    p(
      "Start with one strategic choice and walk it through all five links in a single working session. Not a presentation — a working session with authority to change budget lines, metric definitions, and meeting agendas on the spot.",
    ),
    p(
      "Assign a handoff owner for each link. Not a committee. One name who certifies that budget reflects strategy this quarter, that incentives reflect budget, and so on. Handoff owners rotate annually to prevent empire building.",
    ),
    p(
      "Publish a one-page strategy-to-measurement map. Every KPI on the executive dashboard gets a line back to a strategic choice. Orphans get deleted or relabelled as operational hygiene, not strategy.",
    ),
    ol([
          "Pick one strategic trade-off the board already approved",
          "Trace it through budget, incentives, ops cadence, and metrics",
          "Delete or rewrite anything that contradicts the trade-off",
          "Set a ninety-day review with the same attendees and the same artefacts"
    ]),
    h2("Why good strategies appear to fail"),
    p(
      "Leaders often conclude the strategy was wrong when the real failure was selective adoption. One division aligned; another never received a budget change. A acquired unit kept its legacy comp plan. The portfolio average hides two strategies running in parallel.",
    ),
    p(
      "External shocks get blamed too early. A good strategy with a wide execution gap will underperform in any market. A mediocre strategy with tight alignment can look brilliant in a tailwind. Separate strategy quality from execution fidelity before you rewrite the plan.",
    ),
    p(
      "Boards can worsen the gap by adding initiatives without retiring any. Each addition implies someone can keep doing everything else. That is not ambition. It is arithmetic denial.",
    ),
    quote("Execution is not doing more. It is making the organisation unable to pursue what you decided to stop."),
    h2("Sustaining alignment under pressure"),
    p(
      "Bad quarters trigger reversion. Teams reach for familiar metrics because they are controllable. Without a pre-agreed rule — we do not reinstate volume bonuses during margin recovery — the gap reopens in weeks.",
    ),
    p(
      "Build strategy reviews around trade-offs, not updates. Ask what we stopped. Ask who is unhappy about it. Silence means the stop did not happen.",
    ),
    p(
      "Celebrate handoff quality, not activity. A team that killed a legacy programme to fund a strategic bet should be visible success, not a footnote in finance slides.",
    ),
    h3("The ninety-day proof"),
    p(
      "Require every strategic initiative to show evidence in operations within ninety days — not completion, evidence of pull. Pilot customers, changed routing rules, a metric trending. Absence of evidence is absence of execution, regardless of project status green.",
    ),
    h2("What changes when the gap closes"),
    p(
      "Meetings shorten because fewer priorities compete. Escalations become about sequencing, not definition. Finance and sales arguments shift from whether to how much.",
    ),
    p(
      "Customers notice last. Internal coherence precedes external experience. Do not promise market impact before the index moves — stakeholders inside the building feel it first as reduced thrash.",
    ),
    p(
      "Strategy becomes revisable. When you trust execution, you can change course without assuming sabotage. That is when strategy work earns its keep — not as inspiration, but as steerage.",
    ),
    h2("Questions worth putting in the next leadership review"),
    ul([
          "Where does our data on strategy execution gaps actually live — and who owns updating it?",
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
      "Run the index before the next offsite. Offsites that open with scores beat offsites that open with SWOT.",
    ),
    p(
      "Compare index scores to employee survey items about clarity. Divergence suggests people hear the message but cannot act on it.",
    ),
    p(
      "Track how many KPIs on the executive dashboard lack a strategy line. More than two orphans usually means the dashboard owns the strategy.",
    ),
    p(
      "When two divisions share a corporate strategy but score different index readings, do not average. Fix the laggard or split the narrative.",
    ),
    p(
      "Document what was deprioritised in the same memo that announces the new priority. History shows orphaned work resurrects during budget season.",
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
      "Run the index before the next offsite. Offsites that open with scores beat offsites that open with SWOT.",
    ),
    p(
      "Compare index scores to employee survey items about clarity. Divergence suggests people hear the message but cannot act on it.",
    ),
    p(
      "Track how many KPIs on the executive dashboard lack a strategy line. More than two orphans usually means the dashboard owns the strategy.",
    ),
    p(
      "When two divisions share a corporate strategy but score different index readings, do not average. Fix the laggard or split the narrative.",
    ),
    p(
      "Document what was deprioritised in the same memo that announces the new priority. History shows orphaned work resurrects during budget season.",
    ),
  ],
  faqs: [
    [
      "What is the Strategy Execution Gap Index?",
      "A five-link score measuring alignment from strategy through budget, incentives, operations, and measurement — with evidence, not opinion.",
    ],
    [
      "How long does an index assessment take?",
      "Two to three weeks for a mid-size division: artefact review, structured interviews, and a scored readout with named gaps.",
    ],
    [
      "Can we run the index without changing strategy?",
      "Yes. Many teams discover they are executing an older strategy well. That clarity alone redirects effort.",
    ],
    [
      "Who should own the handoff roles?",
      "Names at VP level or equivalent with authority to change budgets, metrics, or comp within guardrails set by the board.",
    ],
  ],
}
