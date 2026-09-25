import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const marketEntryWithoutGuessworkFrameworkForChoosingTheNextMarketPost: Article = {
  slug: "market-entry-without-guesswork-framework-for-choosing-the-next-market",
  title: "Market Entry Without Guesswork: Framework for Choosing the Next Market",
  deck: "The next market should rank on fit and access — not executive travel impressions. The Market Entry Matrix makes choices comparable before you commit GTM spend.",
  category: "Decision guides",
  date: "16 August 2026",
  dateIso: "2026-08-16",
  readTime: readTime(1498),
  author,
  tags: ["Market entry","Growth","Portfolio","GTM"],
  art: { label: "Decision guides", cells: ["The next market should rank on fit and access — not executive travel …"], tone: "field" },
  body: [
    p(
      "Market entry decisions often follow anecdote — a conference, a board relationship, a competitor move. Anecdotes are inputs, not decisions. Without a framework, companies enter crowded markets late and ignore adjacent wins.",
    ),
    p(
      "Constrange uses a Market Entry Matrix: strategic fit on one axis, access on the other — channels, regulation, proof points, cost to serve. Quadrants dictate enter, prepare, partner, or avoid.",
    ),
    p(
      "The matrix does not eliminate judgement. It forces explicit scores, trade-offs, and sequencing — so the second market does not drain the first before it compounds.",
    ),
    h2("Defining fit"),
    p(
      "Fit is product-problem alignment, margin potential, competitive intensity, and strategic linkage to core — not TAM slides alone.",
    ),
    p(
      "Score fit with evidence — pilot conversions, reference customers, win-loss in adjacent segments.",
    ),
    p(
      "Penalise fit when delivery complexity duplicates known complexity tax.",
    ),
    fig("market-entry-matrix.svg", "Two-axis matrix with enter, avoid, and prepare quadrants", "Rank markets on fit and access before committing GTM spend."),
    {
      t: "table",
      caption: "Market Entry Matrix quadrants",
      head: ["Quadrant","Fit","Access","Action"],
      rows: [
              [
                      "Enter now",
                      "High",
                      "High",
                      "Fund GTM, set milestones"
              ],
              [
                      "Prepare",
                      "High",
                      "Low",
                      "Build access, delay scale spend"
              ],
              [
                      "Partner",
                      "Low",
                      "High",
                      "Channel or JV, limit capex"
              ],
              [
                      "Avoid",
                      "Low",
                      "Low",
                      "Explicit no with revisit date"
              ],
              [
                      "Revisit trigger",
                      "Any change",
                      "Threshold met",
                      "Rescore quarterly"
              ]
      ],
    },
    h2("Defining access"),
    p(
      "Access is reachable channels, regulatory path, brand transfer, and cost to serve — not whether a flight was easy.",
    ),
    p(
      "Local presence requirements, data residency, and partner dependence belong in access score.",
    ),
    p(
      "Access can be bought — price it in timeline and dollars.",
    ),
    ul([
          "Channel coverage and CAC estimate",
          "Regulatory licensing timeline",
          "Reference customer path",
          "Language and support cost"
    ]),
    h2("Scoring without false precision"),
    p(
      "Use weighted criteria and three reviewers — sales, product, finance — independent scores then reconcile.",
    ),
    p(
      "Document assumptions per market — revisit when assumption breaks.",
    ),
    p(
      "Rank markets, do not average into a tie — ties mean insufficient differentiation.",
    ),
    note("Executive sponsor enthusiasm is not a scoring criterion — log it separately as bias check."),
    h2("Sequencing entries"),
    p(
      "Enter one new market at a time unless explore speed explicitly funded — parallel entries divide focus.",
    ),
    p(
      "Prepare quadrant markets need access investments with gates — hire local lead, win three references, then scale.",
    ),
    p(
      "Partner quadrant — choose partners with aligned incentives and exit clauses.",
    ),
    quote("TAM is not a strategy. Fit plus access is."),
    h2("Milestones and kill criteria"),
    p(
      "Set six and twelve month milestones — pipeline, conversion, delivery cost — before launch announcement.",
    ),
    p(
      "Kill criteria pre-agreed — if access cost exceeds X or fit score drops on first cohort, pause.",
    ),
    p(
      "Post-entry reviews compare actual to scored assumptions — calibrate future entries.",
    ),
    h3("Adjacent vs greenfield"),
    p(
      "Adjacent markets inherit fit and access — score them honestly higher than distant greenfield with better TAM story.",
    ),
    h2("Portfolio balance"),
    p(
      "Balance entry portfolio with core market depth — shallow everywhere is a trap.",
    ),
    p(
      "Use matrix to retire markets — low fit and stagnant access belongs in avoid with resources reclaimed.",
    ),
    p(
      "Communicate sequence externally — partners and hires plan on honesty.",
    ),
    h2("Questions worth putting in the next leadership review"),
    ul([
          "Where does our data on market entry decisions actually live — and who owns updating it?",
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
      "Rescore markets after product changes — fit shifts with platform moves.",
    ),
    p(
      "Compare entry spend to core market ROI — opportunity cost visible.",
    ),
    p(
      "Track competitor entry timing — being third may still win with access advantage.",
    ),
    p(
      "Document regulatory surprises in prepare quadrant — update access model.",
    ),
    p(
      "Run loss review on avoided markets annually — validate avoid calls.",
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
      "Rescore markets after product changes — fit shifts with platform moves.",
    ),
    p(
      "Compare entry spend to core market ROI — opportunity cost visible.",
    ),
    p(
      "Track competitor entry timing — being third may still win with access advantage.",
    ),
    p(
      "Document regulatory surprises in prepare quadrant — update access model.",
    ),
    p(
      "Run loss review on avoided markets annually — validate avoid calls.",
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
      "Rescore markets after product changes — fit shifts with platform moves.",
    ),
    p(
      "Compare entry spend to core market ROI — opportunity cost visible.",
    ),
    p(
      "Track competitor entry timing — being third may still win with access advantage.",
    ),
    p(
      "Document regulatory surprises in prepare quadrant — update access model.",
    ),
    p(
      "Run loss review on avoided markets annually — validate avoid calls.",
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
      "Rescore markets after product changes — fit shifts with platform moves.",
    ),
    p(
      "Compare entry spend to core market ROI — opportunity cost visible.",
    ),
    p(
      "Track competitor entry timing — being third may still win with access advantage.",
    ),
    p(
      "Document regulatory surprises in prepare quadrant — update access model.",
    ),
    p(
      "Run loss review on avoided markets annually — validate avoid calls.",
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
      "How many criteria in the matrix?",
      "Five to seven per axis — enough discrimination, not spreadsheet paralysis.",
    ],
    [
      "Can we enter avoid quadrant opportunistically?",
      "Only with explicit override and higher hurdle — otherwise avoid means avoid.",
    ],
    [
      "How does M&A map to the matrix?",
      "Acquisition is access purchase — score integration fit separately.",
    ],
    [
      "Who owns scoring?",
      "Strategy with commercial and finance input — single owner publishes ranks.",
    ],
  ],
}
