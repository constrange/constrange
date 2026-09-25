import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const theOneDollarAllocationProblemWhereShouldACompanyInvestNextPost: Article = {
  slug: "the-one-dollar-allocation-problem-where-should-a-company-invest-next",
  title: "The One Dollar Allocation Problem: Where Should a Company Invest Next?",
  deck: "Every dollar can grow, defend margin, reduce risk, retain talent, or return to shareholders. Without a framework, allocation follows the loudest queue.",
  category: "Decision guides",
  date: "30 March 2026",
  dateIso: "2026-03-30",
  readTime: readTime(1482),
  author,
  tags: ["Capital allocation","Investment","Portfolio","Strategy"],
  art: { label: "Decision guides", cells: ["Every dollar can grow, defend margin, reduce risk, retain talent, or …"], tone: "slate" },
  body: [
    p(
      "The one dollar problem is not arithmetic. It is politics with a spreadsheet. Growth wants headcount. Security wants tooling. Product wants platform. Shareholders want returns. Each case sounds urgent alone; together they exceed cash.",
    ),
    p(
      "Constrange uses a simple allocation frame: growth, margin defence, risk reduction, retention, and return — with explicit hurdle rates and opportunity cost named. The frame does not remove conflict. It makes conflict visible before commitments harden.",
    ),
    p(
      "Good allocation feels boring. It retires options publicly, funds fewer bets deeply, and measures return against the path not taken — not against last year's budget line.",
    ),
    h2("Why allocation drifts"),
    p(
      "Budgets inherit history. Lines survive because someone owns them, not because they beat hurdle this year. Incrementalism feels safe; it accumulates into strategic mush.",
    ),
    p(
      "Successor projects ride predecessor glory. A platform that saved margin in 2022 gets funded in 2026 without reproving — while growth initiatives starve.",
    ),
    p(
      "Emergency funding bypasses the frame. After the third fire drill, nothing is discretionary — yet somehow new initiatives still appear.",
    ),
    fig("one-dollar-allocation.svg", "Capital flowing to growth, margin, risk, retain, and return buckets", "The next dollar competes across five buckets — name the trade-off."),
    {
      t: "table",
      caption: "Allocation buckets and hurdle questions",
      head: ["Bucket","Hurdle question","Common trap"],
      rows: [
              [
                      "Growth",
                      "Incremental CAC payback acceptable?",
                      "Funding volume over quality"
              ],
              [
                      "Margin",
                      "Payback within twelve months?",
                      "Permanent cost without sunset"
              ],
              [
                      "Risk",
                      "Expected loss × probability reduced?",
                      "Compliance theatre"
              ],
              [
                      "Retention",
                      "Regret cost of key talent loss?",
                      "Blanket raises without performance"
              ],
              [
                      "Return",
                      "Alternative return in market?",
                      "Buybacks while core underfunded"
              ]
      ],
    },
    h2("Building the frame"),
    p(
      "Set portfolio targets: percent of spend or capex per bucket aligned to strategy season. Growth-heavy years differ from margin-recovery years — publish which season you are in.",
    ),
    p(
      "Define hurdles numerically where possible: payback months, IRR floors, risk-adjusted return for bets. Qualitative hurdles for early exploration only.",
    ),
    p(
      "Require opportunity cost statement on major spends: if we fund this, we defer that — with names, not generic efficiency.",
    ),
    ol([
          "Classify every major initiative into one primary bucket",
          "Score against hurdle with finance certification",
          "Rank within bucket; fund to cutoff",
          "Publish deferred list with revisit dates"
    ]),
    h2("Growth vs margin defence"),
    p(
      "Growth spends buy future revenue; margin spends buy current unit economics. Confusing them misprices risk. A margin project sold as growth destroys credibility in the next review.",
    ),
    p(
      "Dual mandates on one project — grow and save — usually do neither. Split or sequence.",
    ),
    p(
      "Platform investments span both; amortise benefits explicitly across years and products or charge back.",
    ),
    note("If every project is strategic, none are — the cutoff is zero."),
    h2("Risk and retention as investment"),
    p(
      "Risk reduction has ROI when quantified — expected loss, probability, mitigation cost. Unquantified risk spends are faith.",
    ),
    p(
      "Retention spends compete with return. Key-person regret cost justifies targeted retention, not blanket comp inflation.",
    ),
    p(
      "Underfunding risk while overfunding growth is a classic pre-incident profile. Balance using scenario stress, not fear alone.",
    ),
    quote("Allocation is strategy with numbers attached."),
    h2("Returns and signalling"),
    p(
      "Return to shareholders signals confidence or exhaustion. Context matters. Buybacks while core platform rots signals the wrong thing to talent and customers.",
    ),
    p(
      "Dividends anchor expectations. Growth companies mimic them at peril.",
    ),
    p(
      "Communicate the season: we are investing for margin recovery — employees and investors calibrate expectations.",
    ),
    h3("The deferred list"),
    p(
      "Maintain a visible deferred initiative list with revisit triggers — metric threshold, funding event, regulatory date. Deferred is not denied; it is sequenced. Invisibility breeds underground funding.",
    ),
    h2("Rhythm that enforces trade-offs"),
    p(
      "Quarterly allocation review with the same attendees and cutoff discipline. Ad-hoc approvals between reviews erode the frame.",
    ),
    p(
      "Post-investment reviews at six and eighteen months. Kill or scale based on evidence, not sunk cost narrative.",
    ),
    p(
      "Tie executive comp to portfolio outcomes in the declared season — growth metrics in growth season, margin and cash in recovery.",
    ),
    h2("Questions worth putting in the next leadership review"),
    ul([
          "Where does our data on capital allocation choices actually live — and who owns updating it?",
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
      "Require one-page investment memos with hurdle, owner, and deferral cost — no memo, no slot in the review.",
    ),
    p(
      "Compare actual allocation mix to target mix quarterly; drift precedes strategy drift.",
    ),
    p(
      "Track underground spend — shadow IT, contractor creep, pet projects — it consumes the same dollar.",
    ),
    p(
      "Run pre-mortems on top three funded bets before lock — cheap insurance.",
    ),
    p(
      "Publish what you stopped funding when you announce what you started.",
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
      "Require one-page investment memos with hurdle, owner, and deferral cost — no memo, no slot in the review.",
    ),
    p(
      "Compare actual allocation mix to target mix quarterly; drift precedes strategy drift.",
    ),
    p(
      "Track underground spend — shadow IT, contractor creep, pet projects — it consumes the same dollar.",
    ),
    p(
      "Run pre-mortems on top three funded bets before lock — cheap insurance.",
    ),
    p(
      "Publish what you stopped funding when you announce what you started.",
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
      "Require one-page investment memos with hurdle, owner, and deferral cost — no memo, no slot in the review.",
    ),
    p(
      "Compare actual allocation mix to target mix quarterly; drift precedes strategy drift.",
    ),
    p(
      "Track underground spend — shadow IT, contractor creep, pet projects — it consumes the same dollar.",
    ),
    p(
      "Run pre-mortems on top three funded bets before lock — cheap insurance.",
    ),
    p(
      "Publish what you stopped funding when you announce what you started.",
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
      "Require one-page investment memos with hurdle, owner, and deferral cost — no memo, no slot in the review.",
    ),
    p(
      "Compare actual allocation mix to target mix quarterly; drift precedes strategy drift.",
    ),
  ],
  faqs: [
    [
      "How many buckets do we need?",
      "Five is enough for clarity; more buckets recreate line-item budgeting.",
    ],
    [
      "Who decides the cutoff?",
      "CEO with CFO certification and board visibility on material items — not consensus of all requesters.",
    ],
    [
      "How do we handle small spends?",
      "Aggregate thresholds — below materiality, delegate with bucket caps.",
    ],
    [
      "What about M&A?",
      "A sixth lane or growth bucket with higher hurdle and integration cost explicit.",
    ],
  ],
}
