/** Post content data for generate-strategy-series.mjs */

export const SERIES_DATES = [
  "2026-01-20",
  "2026-02-06",
  "2026-02-24",
  "2026-03-13",
  "2026-03-30",
  "2026-04-17",
  "2026-05-04",
  "2026-05-22",
  "2026-06-08",
  "2026-06-25",
  "2026-07-13",
  "2026-07-30",
  "2026-08-16",
  "2026-09-03",
  "2026-09-20",
]

function svgWrap({ caption, elements }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" fill="none">
  <rect width="800" height="450" fill="#f3f2ec"/>
${elements}
  <text x="400" y="410" text-anchor="middle" font-family="Georgia, serif" font-size="16" fill="#171717">${caption}</text>
</svg>`
}

function box(x, y, w, h, label, { fill = "#fff", stroke = "#131313", textFill = "#131313" } = {}) {
  return `  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
  <text x="${x + w / 2}" y="${y + h / 2 + 4}" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10" fill="${textFill}">${label}</text>`
}

function arrow(x1, y1, x2, y2, { color = "#271675", dashed = false } = {}) {
  const dash = dashed ? ' stroke-dasharray="6 4"' : ""
  return `  <path d="M${x1} ${y1} L${x2} ${y2}" stroke="${color}" stroke-width="2" fill="none"${dash}/>`
}

export const SVGS = {
  "strategy-execution-gap.svg": () => svgWrap({
    caption: "Strategy Execution Gap Index",
    elements: [
      box(60, 180, 110, 55, "STRATEGY", { stroke: "#271675" }),
      box(180, 180, 110, 55, "BUDGET", { stroke: "#271675" }),
      box(300, 180, 110, 55, "INCENTIVES", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(420, 180, 110, 55, "OPS", { stroke: "#271675" }),
      box(540, 180, 110, 55, "MEASURE", { stroke: "#271675" }),
      arrow(170, 207, 180, 207),
      arrow(290, 207, 300, 207, { color: "#b85848", dashed: true }),
      arrow(410, 207, 420, 207),
      arrow(530, 207, 540, 207),
      `  <text x="400" y="290" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#783848">Gap widens where handoffs lack owners</text>`,
    ].join("\n"),
  }),
  "complexity-tax.svg": () => svgWrap({
    caption: "Complexity Tax on margin",
    elements: [
      box(100, 160, 100, 50, "PRODUCT", { stroke: "#271675" }),
      box(220, 160, 100, 50, "CUSTOMER", { stroke: "#271675" }),
      box(340, 160, 100, 50, "GEO", { stroke: "#271675" }),
      box(460, 160, 100, 50, "ORG", { stroke: "#271675" }),
      `  <text x="400" y="260" text-anchor="middle" font-family="ui-monospace, monospace" font-size="11" fill="#271675">COMPLEXITY = P × C × G × O</text>`,
      `  <polyline points="120,320 280,300 440,260 620,200" stroke="#b85848" stroke-width="2" fill="none"/>`,
      `  <text x="630" y="200" font-family="ui-monospace, monospace" font-size="10" fill="#b85848">MARGIN</text>`,
    ].join("\n"),
  }),
  "revenue-leakage.svg": () => svgWrap({
    caption: "Revenue Leakage = Booked − Realized",
    elements: [
      box(120, 170, 140, 70, "BOOKED", { stroke: "#271675" }),
      box(340, 170, 140, 70, "REALIZED", { stroke: "#271675" }),
      box(560, 170, 120, 70, "LEAKAGE", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      arrow(260, 205, 340, 205),
      arrow(480, 205, 560, 205, { color: "#b85848", dashed: true }),
      `  <text x="400" y="300" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#783848">Leakage hides between sale and cash</text>`,
    ].join("\n"),
  }),
  "pricing-power-signals.svg": () => svgWrap({
    caption: "Pricing power signals",
    elements: [
      box(80, 180, 130, 55, "SWITCH COST", { stroke: "#271675" }),
      box(240, 180, 130, 55, "SCARCITY", { stroke: "#271675" }),
      box(400, 180, 130, 55, "BUNDLE", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(560, 180, 130, 55, "TRUST", { stroke: "#271675" }),
      `  <text x="400" y="290" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#783848">Signals stack before list price moves</text>`,
    ].join("\n"),
  }),
  "one-dollar-allocation.svg": () => svgWrap({
    caption: "Where should the next dollar go?",
    elements: [
      box(140, 140, 120, 60, "GROWTH", { stroke: "#271675" }),
      box(340, 140, 120, 60, "MARGIN", { stroke: "#271675" }),
      box(540, 140, 120, 60, "RISK", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(240, 260, 120, 60, "RETAIN", { stroke: "#271675" }),
      box(440, 260, 120, 60, "RETURN", { stroke: "#271675" }),
      arrow(200, 200, 280, 260),
      arrow(400, 200, 480, 260),
      arrow(600, 200, 520, 260, { color: "#b85848", dashed: true }),
    ].join("\n"),
  }),
  "growth-trap.svg": () => svgWrap({
    caption: "Growth quality vs revenue growth",
    elements: [
      `  <polyline points="100,300 250,260 400,240 550,230 700,225" stroke="#271675" stroke-width="2" fill="none"/>`,
      `  <polyline points="100,300 250,280 400,290 550,310 700,340" stroke="#b85848" stroke-width="2" fill="none" stroke-dasharray="6 4"/>`,
      `  <text x="710" y="225" font-family="ui-monospace, monospace" font-size="10" fill="#271675">REVENUE</text>`,
      `  <text x="710" y="345" font-family="ui-monospace, monospace" font-size="10" fill="#b85848">UNIT ECONOMICS</text>`,
    ].join("\n"),
  }),
  "three-speed-company.svg": () => svgWrap({
    caption: "Three clocks: explore, grow, run",
    elements: [
      box(100, 170, 150, 70, "EXPLORE", { stroke: "#271675" }),
      box(325, 170, 150, 70, "GROW", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(550, 170, 150, 70, "RUN", { stroke: "#271675" }),
      `  <text x="175" y="280" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10" fill="#271675">QUARTERS</text>`,
      `  <text x="400" y="280" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10" fill="#b85848">MONTHS</text>`,
      `  <text x="625" y="280" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10" fill="#271675">WEEKS</text>`,
    ].join("\n"),
  }),
  "strategic-focus-value.svg": () => svgWrap({
    caption: "Attention Allocation: 3 vs 7 vs 15 priorities",
    elements: [
      box(120, 180, 140, 60, "3 PRIORITIES", { fill: "#fff", stroke: "#271675" }),
      box(330, 180, 140, 60, "7 PRIORITIES", { stroke: "#271675" }),
      box(540, 180, 140, 60, "15 PRIORITIES", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      `  <text x="190" y="280" text-anchor="middle" font-family="Georgia, serif" font-size="12" fill="#271675">High completion</text>`,
      `  <text x="610" y="280" text-anchor="middle" font-family="Georgia, serif" font-size="12" fill="#783848">Diffused effort</text>`,
    ].join("\n"),
  }),
  "customer-concentration-trap.svg": () => svgWrap({
    caption: "Top customer dependency scenarios",
    elements: [
      `  <rect x="200" y="140" width="400" height="30" rx="4" fill="#271675" opacity="0.2"/>`,
      `  <rect x="200" y="140" width="280" height="30" rx="4" fill="#b85848" opacity="0.5"/>`,
      `  <text x="400" y="160" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10" fill="#131313">TOP 3 CUSTOMERS = 42% REVENUE</text>`,
      box(280, 220, 240, 60, "CONCENTRATION RISK", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
    ].join("\n"),
  }),
  "business-resilience-advantage.svg": () => svgWrap({
    caption: "Resilience as competitive advantage",
    elements: [
      box(120, 170, 130, 70, "SHOCK", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(335, 170, 130, 70, "RECOVER", { stroke: "#271675" }),
      box(550, 170, 130, 70, "CAPTURE", { stroke: "#271675" }),
      arrow(250, 205, 335, 205),
      arrow(465, 205, 550, 205),
      `  <text x="400" y="300" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#783848">Winners convert downtime into share</text>`,
    ].join("\n"),
  }),
  "decision-latency-index.svg": () => svgWrap({
    caption: "Decision Cost = Opportunity × Delay",
    elements: [
      box(100, 180, 160, 60, "OPPORTUNITY", { stroke: "#271675" }),
      box(320, 180, 100, 60, "×", { stroke: "#271675" }),
      box(460, 180, 120, 60, "DELAY", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(620, 180, 100, 60, "COST", { stroke: "#271675" }),
      arrow(260, 210, 320, 210),
      arrow(420, 210, 460, 210),
      arrow(580, 210, 620, 210),
    ].join("\n"),
  }),
  "moat-test-durability.svg": () => svgWrap({
    caption: "Moat durability scoring",
    elements: [
      box(80, 160, 110, 55, "NETWORK", { stroke: "#271675" }),
      box(210, 160, 110, 55, "SCALE", { stroke: "#271675" }),
      box(340, 160, 110, 55, "BRAND", { stroke: "#271675" }),
      box(470, 160, 110, 55, "SWITCH", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(600, 160, 110, 55, "REG", { stroke: "#271675" }),
      `  <text x="400" y="280" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#783848">Score each for year ten, not year one</text>`,
    ].join("\n"),
  }),
  "market-entry-matrix.svg": () => svgWrap({
    caption: "Market Entry Matrix",
    elements: [
      `  <line x1="400" y1="100" x2="400" y2="340" stroke="#131313" stroke-width="1"/>`,
      `  <line x1="120" y1="220" x2="680" y2="220" stroke="#131313" stroke-width="1"/>`,
      box(500, 120, 140, 60, "ENTER NOW", { fill: "#fff", stroke: "#271675" }),
      box(160, 280, 140, 60, "AVOID", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      `  <text x="400" y="90" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10" fill="#131313">FIT</text>`,
      `  <text x="690" y="225" font-family="ui-monospace, monospace" font-size="10" fill="#131313">ACCESS</text>`,
    ].join("\n"),
  }),
  "operating-model-inflection.svg": () => svgWrap({
    caption: "Org inflection points",
    elements: [
      `  <polyline points="100,300 220,280 340,240 460,200 580,170 700,160" stroke="#271675" stroke-width="2" fill="none"/>`,
      box(340, 120, 160, 50, "INFLECTION", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      arrow(420, 170, 420, 120, { color: "#b85848" }),
      `  <text x="400" y="340" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#783848">Structure lags revenue by 12–18 months</text>`,
    ].join("\n"),
  }),
  "switching-friction-model.svg": () => svgWrap({
    caption: "Switching Friction Model",
    elements: [
      box(100, 170, 130, 70, "DATA", { stroke: "#271675" }),
      box(260, 170, 130, 70, "WORKFLOW", { stroke: "#271675" }),
      box(420, 170, 130, 70, "TRAINING", { fill: "#fff8f6", stroke: "#b85848", textFill: "#b85848" }),
      box(580, 170, 130, 70, "CONTRACT", { stroke: "#271675" }),
      `  <text x="400" y="290" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#783848">Friction beats stated loyalty</text>`,
    ].join("\n"),
  }),
}

export const POSTS = [
  {
    slug: "strategy-execution-gap-why-good-strategies-fail-after-the-boardroom",
    title: "Strategy Execution Gap: Why Good Strategies Fail After the Boardroom",
    deck:
      "The board approves a coherent strategy. Twelve months later, operations is running something else. The gap is measurable — and it lives in five handoffs, not in vision.",
    figure: "strategy-execution-gap.svg",
    tone: "ink",
    tags: ["Strategy execution", "Operating model", "Leadership", "Measurement"],
    topic: "strategy execution gaps",
    intro: [
      "Strategy decks rarely fail on logic. They fail on translation. A leadership team agrees on where to play and how to win, then returns to organisations whose budgets, incentives, and dashboards still describe last year's priorities. The result looks like poor execution. Often it is excellent execution of a different strategy.",
      "Constrange tracks this as the Strategy Execution Gap Index: alignment across strategy, budget, incentives, operations, and measurement. Each link can look fine in isolation. The index exposes where the chain breaks — usually at the handoff nobody owns.",
      "Closing the gap is not a communication exercise. It is an operating discipline: name the handoffs, assign owners, and review whether the numbers on the ground match the words in the room.",
    ],
    table: {
      caption: "Strategy Execution Gap Index — sample readings",
      head: ["Link", "Strong signal", "Gap signal"],
      rows: [
        ["Strategy → Budget", "Initiatives map to choices", "Budget lines survive reorgs unchanged"],
        ["Budget → Incentives", "Comp plans reward trade-offs", "Bonuses still pay volume over margin"],
        ["Incentives → Ops", "Teams can explain the bet", "Front line optimises local queues"],
        ["Ops → Measurement", "KPIs match stated strategy", "Dashboard green while customers wait"],
        ["Measurement → Strategy", "Reviews change priorities", "Same deck for eighteen months"],
      ],
    },
    figAlt: "Five linked stages from strategy through budget, incentives, operations, and measurement",
    figCap: "The execution gap widens where handoffs lack owners and metrics.",
    sections: [
      {
        h2: "Where the chain breaks",
        paras: [
          "Most organisations can produce a strategy document. Fewer can produce a budget that sacrifices something the strategy demands. Budget is where abstract choice becomes concrete no. When every line item survives the strategy conversation, you do not have alignment — you have annotation.",
          "Incentives amplify the drift. Sales compensated on gross bookings while strategy pivots to margin quality will produce bookings. Operations measured on cost per unit while strategy demands customisation will produce standardisation. People respond to what is measured and paid for, not to slides they saw once in January.",
          "The operations layer adds another fracture. Middle management translates strategy into weekly work. If that translation happens through email and hope, each layer optimises what it sees. By the time work reaches the customer, the original trade-off is unrecognisable.",
        ],
        ul: [
          "Budget owners who cannot name what they stopped funding",
          "Comp plans unchanged after a strategic pivot",
          "Ops dashboards that omit the metric strategy prioritised",
          "Quarterly reviews that celebrate local wins with flat end-to-end outcomes",
        ],
      },
      {
        h2: "Measuring the gap without theatre",
        paras: [
          "The index is a structured interview plus document review, not a survey about belief. Ask each link: show me the artefact. Strategy deck. Budget file. Comp plan. Operating cadence. Dashboard definition. Score alignment one to five with evidence, not sentiment.",
          "Weight disagreements between functions heavily. Finance and sales often score budget alignment differently. That disagreement is the finding. Harmonised scores without evidence usually mean people stopped arguing and started ignoring each other.",
          "Repeat quarterly. The index is a time series. A score that improves while customer outcomes flatline is gaming. Pair the index with one end-to-end metric strategy claims to move — cycle time, margin mix, retention in the target segment.",
        ],
        note:
          "If the only person who can explain strategy is the CEO, you have a communication success and an execution vacuum.",
      },
      {
        h2: "Fixing handoffs, not speeches",
        paras: [
          "Start with one strategic choice and walk it through all five links in a single working session. Not a presentation — a working session with authority to change budget lines, metric definitions, and meeting agendas on the spot.",
          "Assign a handoff owner for each link. Not a committee. One name who certifies that budget reflects strategy this quarter, that incentives reflect budget, and so on. Handoff owners rotate annually to prevent empire building.",
          "Publish a one-page strategy-to-measurement map. Every KPI on the executive dashboard gets a line back to a strategic choice. Orphans get deleted or relabelled as operational hygiene, not strategy.",
        ],
        ol: [
          "Pick one strategic trade-off the board already approved",
          "Trace it through budget, incentives, ops cadence, and metrics",
          "Delete or rewrite anything that contradicts the trade-off",
          "Set a ninety-day review with the same attendees and the same artefacts",
        ],
      },
      {
        h2: "Why good strategies appear to fail",
        paras: [
          "Leaders often conclude the strategy was wrong when the real failure was selective adoption. One division aligned; another never received a budget change. A acquired unit kept its legacy comp plan. The portfolio average hides two strategies running in parallel.",
          "External shocks get blamed too early. A good strategy with a wide execution gap will underperform in any market. A mediocre strategy with tight alignment can look brilliant in a tailwind. Separate strategy quality from execution fidelity before you rewrite the plan.",
          "Boards can worsen the gap by adding initiatives without retiring any. Each addition implies someone can keep doing everything else. That is not ambition. It is arithmetic denial.",
        ],
        quote:
          "Execution is not doing more. It is making the organisation unable to pursue what you decided to stop.",
      },
      {
        h2: "Sustaining alignment under pressure",
        paras: [
          "Bad quarters trigger reversion. Teams reach for familiar metrics because they are controllable. Without a pre-agreed rule — we do not reinstate volume bonuses during margin recovery — the gap reopens in weeks.",
          "Build strategy reviews around trade-offs, not updates. Ask what we stopped. Ask who is unhappy about it. Silence means the stop did not happen.",
          "Celebrate handoff quality, not activity. A team that killed a legacy programme to fund a strategic bet should be visible success, not a footnote in finance slides.",
        ],
        h3: "The ninety-day proof",
        p3:
          "Require every strategic initiative to show evidence in operations within ninety days — not completion, evidence of pull. Pilot customers, changed routing rules, a metric trending. Absence of evidence is absence of execution, regardless of project status green.",
      },
      {
        h2: "What changes when the gap closes",
        paras: [
          "Meetings shorten because fewer priorities compete. Escalations become about sequencing, not definition. Finance and sales arguments shift from whether to how much.",
          "Customers notice last. Internal coherence precedes external experience. Do not promise market impact before the index moves — stakeholders inside the building feel it first as reduced thrash.",
          "Strategy becomes revisable. When you trust execution, you can change course without assuming sabotage. That is when strategy work earns its keep — not as inspiration, but as steerage.",
        ],
      },
    ],
    fillers: [
      "Run the index before the next offsite. Offsites that open with scores beat offsites that open with SWOT.",
      "Compare index scores to employee survey items about clarity. Divergence suggests people hear the message but cannot act on it.",
      "Track how many KPIs on the executive dashboard lack a strategy line. More than two orphans usually means the dashboard owns the strategy.",
      "When two divisions share a corporate strategy but score different index readings, do not average. Fix the laggard or split the narrative.",
      "Document what was deprioritised in the same memo that announces the new priority. History shows orphaned work resurrects during budget season.",
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
  },
  {
    slug: "the-complexity-tax-how-successful-companies-become-less-profitable-as-they-grow",
    title: "The Complexity Tax: How Successful Companies Become Less Profitable as They Grow",
    deck:
      "Growth adds product lines, customer types, geographies, and layers. Each addition carries a tax on margin — often invisible until growth slows.",
    figure: "complexity-tax.svg",
    tone: "plum",
    tags: ["Complexity", "Margin", "Growth", "Operating model"],
    topic: "complexity tax on margin",
    intro: [
      "Revenue curves impress boards. Margin curves tell the truth. Many companies grow top line while unit economics quietly deteriorate — not because they priced wrong, but because complexity accumulated faster than capability.",
      "Constrange models the Complexity Tax as the interaction of product breadth, customer heterogeneity, geographic spread, and organisational layers. Each dimension alone is manageable. Combined, they create coordination cost that no single owner sees.",
      "The tax is not an argument against growth. It is an argument for growth with a complexity budget — explicit limits on what you add, and what you retire, as you scale.",
    ],
    table: {
      caption: "Complexity drivers and typical margin effects",
      head: ["Driver", "What increases", "Margin pressure"],
      rows: [
        ["Product SKUs", "Engineering and support permutations", "Higher cost to serve per dollar"],
        ["Customer segments", "Custom terms and SLAs", "Pricing leakage"],
        ["Geographies", "Compliance and local ops", "Duplicated overhead"],
        ["Org layers", "Handoffs and reconciliation", "Slower decisions, rework"],
        ["Partner channels", "Margin stack and disputes", "Revenue recognition lag"],
      ],
    },
    figAlt: "Four complexity dimensions multiplying against a declining margin line",
    figCap: "Complexity compounds — margin rarely scales linearly with revenue.",
    sections: [
      {
        h2: "How success creates the tax",
        paras: [
          "Winning creates options. Options become SKUs, segments, and regions. Each wins a internal champion. Retirement loses a political fight. Portfolio grows; shared platforms do not.",
          "Customers teach you complexity. Enterprise accounts request exceptions. Exceptions become product features. Features become defaults. The base product disappears under configurability nobody documents.",
          "Geographic expansion copies the playbook without copying the constraints. A model that works in one market with three layers fails in another with seven — but revenue arrives before the cost structure matures.",
        ],
      },
      {
        h2: "Quantifying the tax",
        paras: [
          "Start with contribution margin by cohort: product family, customer decile, region. Flat or rising revenue with falling cohort margin is tax evidence. Aggregate margin hides the mix shift.",
          "Measure cost to serve: implementation hours, support tickets per dollar, finance touches per invoice. Complexity shows up in labour before it shows up in gross margin.",
          "Track decision load: meetings per launch, approvers per discount, systems touched per order. These are proxy costs. They predict margin compression quarters ahead.",
        ],
        ul: [
          "SKU count vs revenue per SKU",
          "Exception rate in contracts",
          "Layers between front line and profit owner",
          "Time to onboard a new country or segment",
        ],
      },
      {
        h2: "Paying down complexity",
        paras: [
          "Complexity retirement is strategy. Sunsetting a SKU or segment requires the same ceremony as launching one. Without retirement rituals, tax compounds.",
          "Platform bets must include migration cost and deadline. Dual-running old and new doubles tax during transition — budget for it or defer the bet.",
          "Standardise before you scale. The cheapest complexity is the variant you never allowed. Discount governance and product guardrails are margin policy, not sales annoyance.",
        ],
        note:
          "A complexity budget is a cap on new variants unless an equal variant retires. Enforce it in product and sales ops, not in strategy slides.",
      },
      {
        h2: "Organisation design and the tax",
        paras: [
          "Matrix structures multiply the tax. Every dotted line is a meeting. Design for clear profit ownership even when shared services exist.",
          "Shared services without chargeback grow unchecked. Central teams solve local exceptions generously because they do not see margin impact.",
          "Acquisitions import complexity wholesale. Integration plans that only map systems miss SKU overlap, segment conflict, and duplicate geo presence.",
        ],
        quote:
          "Growth without a complexity budget is borrowing margin from a future quarter.",
      },
      {
        h2: "When complexity is worth paying",
        paras: [
          "Some complexity is strategic — defensible customisation, regulated markets, platform ecosystems. Pay the tax consciously and price for it.",
          "Separate good complexity from drift. Good complexity has a named owner, a margin target, and a review date. Drift has anecdotes.",
          "Invest in tooling that collapses permutations — configuration engines, unified billing, single customer record. Tooling is tax relief with a capital cost.",
        ],
        h3: "The retirement test",
        p3:
          "For any variant older than three years, ask: if we launched today, would we? No plus positive revenue means you are running a museum. Museums charge admission or close.",
      },
      {
        h2: "Leading indicators before growth stalls",
        paras: [
          "Watch sales cycle length by segment. Complexity lengthens cycles before it hits churn. Watch support cost per active user. Watch forecast accuracy by region — heterogeneity destroys predictability.",
          "Executive time on exceptions is a late indicator. When leadership spends Fridays on escalations, the tax invoice arrived.",
          "Slowing growth with rising headcount is the classic trap. You are hiring to manage complexity instead of removing it.",
        ],
      },
    ],
    fillers: [
      "Publish a quarterly complexity report alongside financials: SKUs added and retired, exceptions granted, countries active.",
      "Compare margin of your largest customer to your median. A widening gap often means bespoke work subsidised by the long tail.",
      "Challenge any initiative that adds a segment without naming which segment it replaces.",
      "Map handoffs on your highest-revenue product. Handoff count correlates with margin erosion in most audits we run.",
      "Treat dual-running systems during migration as a line item, not an engineering detail — it often equals a point of margin.",
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
  },
  {
    slug: "revenue-leakage-where-companies-lose-money-after-the-sale",
    title: "Revenue Leakage: Where Companies Lose Money After the Sale",
    deck:
      "Bookings look strong. Cash and margin tell another story. Revenue leakage is the gap between what you sold and what you kept — and it grows in the handoffs after signature.",
    figure: "revenue-leakage.svg",
    tone: "moss",
    tags: ["Revenue leakage", "Commercial ops", "Margin", "Billing"],
    topic: "revenue leakage after the sale",
    intro: [
      "Sales celebrates the booking. Finance discovers the leakage months later — in credits, unbilled usage, implementation overruns, discount creep, and churn that was never in the forecast. The gap between booked and realized revenue is not fraud. It is process debt.",
      "Constrange defines revenue leakage as Booked minus Realized, traced across delivery, billing, renewals, and collections. Most companies measure bookings and revenue separately. Few measure the bridge with enough granularity to act.",
      "Finding leakage is uncomfortable because it implicates both commercial ambition and operational capacity. Fixing it requires shared ownership — not a witch hunt in sales or finance alone.",
    ],
    table: {
      caption: "Common leakage categories",
      head: ["Category", "Typical cause", "Detection lag"],
      rows: [
        ["Implementation overruns", "Scope sold, capacity constrained", "30–90 days"],
        ["Unbilled usage", "Metering gaps or contract ambiguity", "60–120 days"],
        ["Discount creep", "Renewal exceptions without approval", "At renewal"],
        ["Credits and disputes", "SLA misses, quality issues", "Quarter-end"],
        ["Early churn", "Mis-sold segment or poor onboarding", "90–180 days"],
      ],
    },
    figAlt: "Booked revenue flowing to realized revenue with a leakage branch",
    figCap: "Leakage hides between signature and cash — not in the CRM alone.",
    sections: [
      {
        h2: "Why bookings lie kindly",
        paras: [
          "CRM systems optimise for pipeline velocity. They capture intent and price at signature, not cost to deliver or probability of downgrade. A booking is a hypothesis about future cash.",
          "Multi-year deals amplify the illusion. Annual contract value looks smooth; realization follows a stair-step of milestones, usage thresholds, and renewal renegotiations.",
          "Channel and partner deals add margin stack leakage. Each layer can discount or delay. Bookings at list less partner margin less implementation subsidy is a different number — often computed too late.",
        ],
      },
      {
        h2: "Building the bridge",
        paras: [
          "Construct a monthly booked-to-realized bridge by cohort: deal size, segment, product, seller, region. Require finance and commercial ops to reconcile variances above a materiality threshold.",
          "Tag leakage reasons consistently. Ad-hoc labels prevent pattern detection. A small set of codes — scope, billing, discount, churn, dispute — beats granular free text nobody aggregates.",
          "Compare bridge trends to capacity metrics: implementation backlog, support ratio, billing dispute rate. Leakage spikes often precede capacity crises by one quarter.",
        ],
        ol: [
          "Define booked and realized consistently across functions",
          "Build the bridge report monthly by cohort",
          "Assign owners per leakage code",
          "Tie remediation to comp and forecast only after two consistent quarters of data",
        ],
      },
      {
        h2: "Delivery and scope leakage",
        paras: [
          "Sold scope that delivery cannot absorb converts to margin or credits. Track sold hours vs delivered hours by offering. Persistent negative variance is a pricing or staffing problem, not a project management footnote.",
          "Professional services organisations feel this first. Product companies feel it when services attach to platform sales without standard packages.",
          "Fix at the quote stage: standard SKUs, enforced approval for non-standard scope, and delivery sign-off before booking recognition in variable comp.",
        ],
        note:
          "If delivery learns about a deal from the booking notification, leakage is already baked in.",
      },
      {
        h2: "Billing and renewal leakage",
        paras: [
          "Usage-based models leak when metering lags product changes. Every release should trigger a billing regression check — not only a functional test.",
          "Renewals renegotiate in shadows. Auto-renewals with silent discounts erode realized revenue while bookings dashboards stay nostalgic.",
          "Collections are leakage too — not only bad debt, but delayed cash that forces expensive working capital.",
        ],
        quote:
          "Realized revenue is the only revenue that happened. Everything else is a story.",
      },
      {
        h2: "Governance that sticks",
        paras: [
          "Joint leakage review monthly: sales ops, finance, delivery, support. Rotate chair to prevent factional blindness.",
          "Tie seller variable comp to realized or collected revenue after a defined period, not booking alone. Transition carefully — shock comp without process fix triggers gaming.",
          "Publish leakage as a KPI alongside bookings. What gets reviewed gets improved.",
        ],
        h3: "Materiality thresholds",
        p3:
          "Set thresholds by segment — a five percent leakage on enterprise differs from five percent on SMB volume. Investigate variances above threshold within ten business days with named remediation.",
      },
      {
        h2: "From diagnosis to pricing power",
        paras: [
          "Leakage analysis often reveals underpriced complexity — custom work sold as standard. That insight feeds pricing and packaging, not only ops fixes.",
          "Customers causing disproportionate leakage may be unprofitable at any price. Rational churn improves realized revenue mix.",
          "Closing leakage frees capacity without new sales — often the fastest margin improvement available.",
        ],
      },
    ],
    fillers: [
      "Reconcile top ten deals monthly from booking file to first invoice — patterns appear fast.",
      "Compare leakage codes to NPS by cohort — quality leakage precedes churn leakage.",
      "Audit auto-renewal language annually; ambiguous terms become credits.",
      "Track time from signature to first value — long ramps predict realization gaps.",
      "Separate leakage from timing differences — finance and sales must agree definitions first.",
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
  },
  {
    slug: "pricing-power-how-do-you-know-when-customers-will-pay-more",
    title: "Pricing Power: How Do You Know When Customers Will Pay More?",
    deck:
      "List price is a lagging indicator. Pricing power shows up earlier in switching costs, scarcity, bundle depth, and trust — if you measure the signals.",
    figure: "pricing-power-signals.svg",
    tone: "amber",
    tags: ["Pricing power", "Pricing strategy", "Commercial", "Retention"],
    topic: "pricing power signals",
    intro: [
      "Leadership asks whether we can raise prices. Sales hears can we without losing deals. Finance hears will margin improve. Customers hear why should I pay more. Without shared signals, the conversation becomes politics.",
      "Pricing power is the ability to increase price or reduce discounting without proportional volume loss. It is not brand slogans. It is observable behaviour — renewal rates after increases, win rates at list, expansion without concessions.",
      "Constrange tracks four signal clusters before list moves: switching friction, perceived scarcity, bundle anchoring, and trust under stress. Weak signals mean a price rise funds competitor marketing.",
    ],
    table: {
      caption: "Pricing power signal checklist",
      head: ["Signal", "Strong indicator", "Weak indicator"],
      rows: [
        ["Switching cost", "Multi-quarter migrations rare", "POC churn to alternatives easy"],
        ["Scarcity", "Capacity-constrained delivery", "Discounts to fill pipeline"],
        ["Bundle depth", "Multiple products per account", "Single SKU reliance"],
        ["Trust", "Incidents without churn spike", "Credits follow every outage"],
        ["Elasticity tests", "Low volume loss in pilots", "Immediate win rate drop"],
      ],
    },
    figAlt: "Four boxes labelled switching cost, scarcity, bundle, and trust",
    figCap: "Signals stack before you change list price.",
    sections: [
      {
        h2: "Signals before the increase",
        paras: [
          "Win-loss interviews reveal price sensitivity better than surveys. Buyers who chose you despite higher price demonstrate power. Buyers who needed heavy discounting demonstrate absence.",
          "Renewal cohorts after small increases are the cleanest test. Increase five percent on a willing segment before enterprise-wide moves. Measure logo and dollar retention separately.",
          "Expansion revenue without discounting proves value capture. If growth requires constant concessions, list price is decorative.",
        ],
      },
      {
        h2: "Switching friction as power",
        paras: [
          "Friction is data migration, workflow embedding, training, and contractual exit cost — not annoyance. Map the full switch journey for a representative customer.",
          "Friction can erode. APIs, standards, and modular contracts reduce it. Monitor friction like a competitor would — because they are.",
          "Ethical boundary: power from value delivered differs from power from lock-in alone. The former survives scrutiny; the latter invites regulation and revenge churn.",
        ],
        ul: [
          "Integration count and depth",
          "Custom workflows dependent on your product",
          "Time to parallel run alternative",
          "Exit fees vs replacement cost",
        ],
      },
      {
        h2: "Scarcity and bundle anchoring",
        paras: [
          "Scarcity is real when capacity or expertise limits supply — not when sales creates artificial urgency. Customers pay for access others cannot get.",
          "Bundles reframe price conversation from unit to outcome. Accounts using three products tolerate increases on one when total value is visible.",
          "Unbundling competitors attack weakest SKU. Strengthen the bundle before raising the visible price on a single component.",
        ],
        note:
          "If your scarcity is only marketing, customers learn — and future increases fail.",
      },
      {
        h2: "Testing without brand damage",
        paras: [
          "Geo and segment tests beat global announcements. Hold control cohorts. Document methodology so sales trusts results.",
          "Grandfather strategically — not indefinitely. Time-bound legacy pricing with migration paths.",
          "Pair increases with visible value — SLA, support tier, compliance feature — even when cost to serve is flat. Narrative matters when signals are borderline.",
        ],
        quote:
          "Price is a hypothesis about value. Test it like one.",
      },
      {
        h2: "When not to raise",
        paras: [
          "Weak signals plus competitive entry equals share loss. Delay and fix value or friction first.",
          "Raising to cover leakage or complexity tax without fixing root cause repeats the failure at higher nominal price.",
          "Contract structures with automatic caps block increases — fix contracts during renewal windows, not at invoice surprise.",
        ],
        h3: "Elasticity discipline",
        p3:
          "Define acceptable volume loss before the test. If leadership cannot agree the threshold, do not run the test — the political fallout will override data.",
      },
      {
        h2: "Operationalising pricing power",
        paras: [
          "Quarterly pricing council: product, finance, sales ops, legal. Agenda: signal review, test results, exception audit.",
          "Discount exception log with reason codes. Rising exceptions mean power is leaking while list stays flat.",
          "Train sellers on value metrics customers already use — not internal cost plus. Power conversations happen in customer units, not yours.",
        ],
      },
    ],
    fillers: [
      "Track average discount percent by quarter — widening discounts mean power is falling even if list rises.",
      "Compare support tickets during price tests — anger shows up in ops before churn.",
      "Review competitor win stories for price mentions — qualitative but fast.",
      "Model contribution margin at tested price points, not revenue alone.",
      "Document price increase communications that worked — reuse patterns, not only numbers.",
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
  },
  {
    slug: "the-one-dollar-allocation-problem-where-should-a-company-invest-next",
    title: "The One Dollar Allocation Problem: Where Should a Company Invest Next?",
    deck:
      "Every dollar can grow, defend margin, reduce risk, retain talent, or return to shareholders. Without a framework, allocation follows the loudest queue.",
    figure: "one-dollar-allocation.svg",
    tone: "slate",
    tags: ["Capital allocation", "Investment", "Portfolio", "Strategy"],
    topic: "capital allocation choices",
    intro: [
      "The one dollar problem is not arithmetic. It is politics with a spreadsheet. Growth wants headcount. Security wants tooling. Product wants platform. Shareholders want returns. Each case sounds urgent alone; together they exceed cash.",
      "Constrange uses a simple allocation frame: growth, margin defence, risk reduction, retention, and return — with explicit hurdle rates and opportunity cost named. The frame does not remove conflict. It makes conflict visible before commitments harden.",
      "Good allocation feels boring. It retires options publicly, funds fewer bets deeply, and measures return against the path not taken — not against last year's budget line.",
    ],
    table: {
      caption: "Allocation buckets and hurdle questions",
      head: ["Bucket", "Hurdle question", "Common trap"],
      rows: [
        ["Growth", "Incremental CAC payback acceptable?", "Funding volume over quality"],
        ["Margin", "Payback within twelve months?", "Permanent cost without sunset"],
        ["Risk", "Expected loss × probability reduced?", "Compliance theatre"],
        ["Retention", "Regret cost of key talent loss?", "Blanket raises without performance"],
        ["Return", "Alternative return in market?", "Buybacks while core underfunded"],
      ],
    },
    figAlt: "Capital flowing to growth, margin, risk, retain, and return buckets",
    figCap: "The next dollar competes across five buckets — name the trade-off.",
    sections: [
      {
        h2: "Why allocation drifts",
        paras: [
          "Budgets inherit history. Lines survive because someone owns them, not because they beat hurdle this year. Incrementalism feels safe; it accumulates into strategic mush.",
          "Successor projects ride predecessor glory. A platform that saved margin in 2022 gets funded in 2026 without reproving — while growth initiatives starve.",
          "Emergency funding bypasses the frame. After the third fire drill, nothing is discretionary — yet somehow new initiatives still appear.",
        ],
      },
      {
        h2: "Building the frame",
        paras: [
          "Set portfolio targets: percent of spend or capex per bucket aligned to strategy season. Growth-heavy years differ from margin-recovery years — publish which season you are in.",
          "Define hurdles numerically where possible: payback months, IRR floors, risk-adjusted return for bets. Qualitative hurdles for early exploration only.",
          "Require opportunity cost statement on major spends: if we fund this, we defer that — with names, not generic efficiency.",
        ],
        ol: [
          "Classify every major initiative into one primary bucket",
          "Score against hurdle with finance certification",
          "Rank within bucket; fund to cutoff",
          "Publish deferred list with revisit dates",
        ],
      },
      {
        h2: "Growth vs margin defence",
        paras: [
          "Growth spends buy future revenue; margin spends buy current unit economics. Confusing them misprices risk. A margin project sold as growth destroys credibility in the next review.",
          "Dual mandates on one project — grow and save — usually do neither. Split or sequence.",
          "Platform investments span both; amortise benefits explicitly across years and products or charge back.",
        ],
        note:
          "If every project is strategic, none are — the cutoff is zero.",
      },
      {
        h2: "Risk and retention as investment",
        paras: [
          "Risk reduction has ROI when quantified — expected loss, probability, mitigation cost. Unquantified risk spends are faith.",
          "Retention spends compete with return. Key-person regret cost justifies targeted retention, not blanket comp inflation.",
          "Underfunding risk while overfunding growth is a classic pre-incident profile. Balance using scenario stress, not fear alone.",
        ],
        quote:
          "Allocation is strategy with numbers attached.",
      },
      {
        h2: "Returns and signalling",
        paras: [
          "Return to shareholders signals confidence or exhaustion. Context matters. Buybacks while core platform rots signals the wrong thing to talent and customers.",
          "Dividends anchor expectations. Growth companies mimic them at peril.",
          "Communicate the season: we are investing for margin recovery — employees and investors calibrate expectations.",
        ],
        h3: "The deferred list",
        p3:
          "Maintain a visible deferred initiative list with revisit triggers — metric threshold, funding event, regulatory date. Deferred is not denied; it is sequenced. Invisibility breeds underground funding.",
      },
      {
        h2: "Rhythm that enforces trade-offs",
        paras: [
          "Quarterly allocation review with the same attendees and cutoff discipline. Ad-hoc approvals between reviews erode the frame.",
          "Post-investment reviews at six and eighteen months. Kill or scale based on evidence, not sunk cost narrative.",
          "Tie executive comp to portfolio outcomes in the declared season — growth metrics in growth season, margin and cash in recovery.",
        ],
      },
    ],
    fillers: [
      "Require one-page investment memos with hurdle, owner, and deferral cost — no memo, no slot in the review.",
      "Compare actual allocation mix to target mix quarterly; drift precedes strategy drift.",
      "Track underground spend — shadow IT, contractor creep, pet projects — it consumes the same dollar.",
      "Run pre-mortems on top three funded bets before lock — cheap insurance.",
      "Publish what you stopped funding when you announce what you started.",
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
  },
  {
    slug: "the-growth-trap-when-revenue-growth-makes-a-company-weaker",
    title: "The Growth Trap: When Revenue Growth Makes a Company Weaker",
    deck:
      "Revenue can rise while strategic position weakens — through bad mix, subsidised segments, and capacity that cannot compound. Growth quality beats growth rate.",
    figure: "growth-trap.svg",
    tone: "clay",
    tags: ["Growth quality", "Unit economics", "Strategy", "Portfolio"],
    topic: "growth quality versus revenue growth",
    intro: [
      "Boards reward growth rate. Operators live in unit economics. When the two diverge, companies enter the growth trap: revenue rises, cash and capability erode, and the next quarter requires more brute force to repeat.",
      "The trap is subtle because headlines stay positive. New logos mask churn in core segments. Discounted entry deals inflate pipeline while renewal cohorts decay. Headcount rises faster than productivity.",
      "Constrange separates growth quality from growth rate — contribution margin by cohort, payback period, expansion vs replacement revenue, and strategic fit of new segments. Rate without quality is borrowing strength from the future.",
    ],
    table: {
      caption: "Growth rate vs growth quality",
      head: ["Metric", "Rate focus", "Quality focus"],
      rows: [
        ["New ARR", "Gross bookings", "Net after churn and downgrade"],
        ["CAC payback", "Ignored in boom", "Months to contribution positive"],
        ["Mix", "Any revenue", "Margin-weighted segment growth"],
        ["Capacity", "Hire to hit number", "Revenue per head trend"],
        ["Strategic fit", "Land grab", "Alignment with core advantage"],
      ],
    },
    figAlt: "Revenue line rising while unit economics line falls",
    figCap: "Revenue growth can mask weakening economics — track both lines.",
    sections: [
      {
        h2: "How the trap springs",
        paras: [
          "Pressure to beat comparables every quarter pushes discounting and segment drift. Sales opens markets the product cannot serve profitably. Product chases features for deals that will not renew.",
          "Success metrics celebrate gross additions. Net revenue retention and cohort margin arrive too late in steering — often in a post-mortem.",
          "Capital fuels the trap. Cheap funding extends payback tolerance until funding tightens and the quality debt comes due at once.",
        ],
      },
      {
        h2: "Diagnosing quality",
        paras: [
          "Plot revenue and contribution margin by vintage cohort. Diverging lines mean you are buying growth.",
          "Measure payback by channel and segment. Aggregate payback hides subsidised channels.",
          "Compare expansion revenue to new logo revenue in core segment. Healthy growth compounds inside accounts you already trust.",
        ],
        ul: [
          "Logo churn in first twelve months",
          "Discount depth trend on new deals",
          "Implementation overrun rate by segment",
          "Forecast accuracy by seller cohort",
        ],
      },
      {
        h2: "Exiting without killing momentum",
        paras: [
          "Segment exits are leadership acts. Announce which segments you will no longer pursue and redeploy capacity visibly.",
          "Reset comp to quality metrics gradually — sudden shifts without process support trigger gaming.",
          "Communicate the season to investors: margin and retention over raw ARR. Markets adjust if you are consistent.",
        ],
        note:
          "A growth trap ends when leadership stops apologising for saying no to bad revenue.",
      },
      {
        h2: "Portfolio and product choices",
        paras: [
          "Every SKU and segment should pass a quality gate: target margin, payback, and strategic linkage. Failures sunset on schedule.",
          "Platform bets that enable quality growth — self-serve, standard packages, automated onboarding — deserve priority over bespoke enterprise chase.",
          "Partnerships that add volume without capability deepen the trap. Evaluate partner cohort economics separately.",
        ],
        quote:
          "Not all revenue is good revenue. Some is expensive proof you lost focus.",
      },
      {
        h2: "Board and investor alignment",
        paras: [
          "Educate the board on quality metrics before a miss forces the conversation. One dashboard with rate and quality side by side.",
          "Avoid dual messaging — quality to investors, rate to sales. People hear both.",
          "Use downturns to prune — waiting for good times to exit bad segments rarely happens.",
        ],
        h3: "The quality covenant",
        p3:
          "Publish internal thresholds: we will not pursue deals below X margin or Y payback except named strategic pilots with sunset dates. Breaches require executive approval logged monthly.",
      },
      {
        h2: "Sustainable growth rhythm",
        paras: [
          "Quarterly quality review precedes forecast lock. Finance blocks forecast that quality metrics cannot support.",
          "Celebrate net retention and payback improvements like logo milestones.",
          "Invest in enablement that raises quality — quoting discipline, delivery capacity, customer success coverage — not only pipeline generation.",
        ],
      },
    ],
    fillers: [
      "Track revenue per employee quarterly — declining trend with rising ARR is trap smoke.",
      "Compare win rates at target price vs discounted — widening gap means quality erosion.",
      "Review top ten new logos for fit score six months post-sale.",
      "Separate strategic pilot revenue in reporting so it does not mask core quality.",
      "Challenge any growth initiative without a payback model — narrative is not a model.",
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
  },
  {
    slug: "the-three-speed-company-why-every-business-should-not-move-at-the-same-speed",
    title: "The Three-Speed Company: Why Every Business Should Not Move at the Same Speed",
    deck:
      "Exploration, growth, and run-the-business work operate on different clocks. Forcing one cadence creates either reckless stability or paralysed innovation.",
    figure: "three-speed-company.svg",
    tone: "dusk",
    tags: ["Operating rhythm", "Innovation", "Governance", "Portfolio"],
    topic: "three-speed operating clocks",
    intro: [
      "Companies default to one calendar — the budget cycle, the sprint, the quarterly business review. Exploration needs quarters. Growth bets need months. Core operations need weeks. Collapsing those clocks guarantees misfit funding and false failure.",
      "Constrange models three speeds: explore (test hypotheses), grow (scale what worked), run (deliver reliably). Each speed has different risk appetite, metrics, and governance. Mixing them in one forum kills exploration or starves operations.",
      "Three-speed design is not bureaucracy. It is permission structure — so a pilot is not judged like a factory, and a factory is not asked to pivot like a lab.",
    ],
    table: {
      caption: "Three speeds at a glance",
      head: ["Speed", "Clock", "Primary metric", "Governance"],
      rows: [
        ["Explore", "Quarters", "Learning per dollar", "Kill or pivot fast"],
        ["Grow", "Months", "Adoption and unit economics", "Scale gates"],
        ["Run", "Weeks", "SLA, margin, reliability", "Continuous improvement"],
        ["Risk", "Varies", "Loss avoided", "Separate review"],
      ],
    },
    figAlt: "Three boxes labelled explore, grow, and run with different time horizons",
    figCap: "Different work needs different clocks — not one corporate calendar.",
    sections: [
      {
        h2: "Why one speed fails",
        paras: [
          "Exploration judged on quarterly ROI dies early. Core ops judged on experiment KPIs thrashes customers. Same meeting, same template, wrong outcomes.",
          "High performers in run mode get assigned innovation without protection — they fail, and the lesson learned is do not innovate.",
          "Budget cycles fund explore like grow — multi-year commitments before learning — or fund grow like run — no scale investment.",
        ],
      },
      {
        h2: "Designing the explore clock",
        paras: [
          "Fund small, time-boxed bets with explicit kill criteria. Learning is success; scale is optional.",
          "Separate explore metrics from P&L for early phases — but cap explore spend as percent of portfolio.",
          "Protect teams from run-mode escalation paths during explore windows.",
        ],
        ul: [
          "Hypothesis statement per bet",
          "Maximum spend and duration",
          "Kill criteria written upfront",
          "Retro within two weeks of end",
        ],
      },
      {
        h2: "The grow clock",
        paras: [
          "Transition from explore to grow requires evidence gate — not enthusiasm. Adoption, unit economics, operational readiness.",
          "Grow spends on capacity, GTM, and platform — not more hypothesis testing.",
          "Monthly reviews on scale metrics; quarterly on strategic fit still.",
        ],
        note:
          "Grow is where most companies should live for any initiative that passed explore — not perpetual explore disguised as agile.",
      },
      {
        h2: "Run the business without suffocation",
        paras: [
          "Run mode owns majority of revenue and customers. Stability is the job. Improvement is incremental unless explore replaces.",
          "Weekly operational cadence, clear SLAs, blameless incident culture. Innovation requests enter explore funnel — not side doors.",
          "Run leaders sit on explore councils as reality checks, not as veto without alternative funding.",
        ],
        quote:
          "Speed is not velocity. It is matching decision horizon to work type.",
      },
      {
        h2: "Risk as a fourth clock",
        paras: [
          "Regulatory, security, and resilience work spans speeds but often needs its own review — not buried in explore or deferred in run.",
          "Risk spends should show risk-adjusted return, not growth ROI.",
          "Crisis mode is not a speed — it is temporary override with expiry.",
        ],
        h3: "Calendar hygiene",
        p3:
          "Publish which forums decide which speed. Explore council monthly. Grow portfolio bi-monthly. Run ops weekly. Attendees overlap; agendas do not.",
      },
      {
        h2: "Making three speeds stick",
        paras: [
          "Label initiatives in every dashboard with speed tag. Orphans default to run and get run metrics.",
          "Train finance to budget by speed mix aligned to strategy season.",
          "Celebrate kills in explore — saved cash and focus — as visibly as launches.",
        ],
      },
    ],
    fillers: [
      "Audit meeting invites — explore topics in run forums die or thrash.",
      "Track percent of spend by speed; explore below two percent is often theatre.",
      "Measure time from explore kill to redeployment of people — slow redeployment hides headcount tax.",
      "Compare incident rates when run teams forced into dual explore — spikes predict customer pain.",
      "Document speed transitions with dates — grow pretending to explore avoids gates.",
    ],
    faqs: [
      [
        "How many speeds can we afford?",
        "Three core plus risk review is enough; more speeds recreate matrix confusion.",
      ],
      [
        "Do small companies need this?",
        "Especially — without labels, everything is urgent and nothing finishes.",
      ],
      [
        "Who owns explore?",
        "A council with P&L sponsor, not a lone innovation officer without budget.",
      ],
      [
        "Can an initiative change speed?",
        "Yes — with explicit gate and metric change, not gradual drift.",
      ],
    ],
  },
  {
    slug: "strategic-focus-has-an-economic-value",
    title: "Strategic Focus Has an Economic Value",
    deck:
      "Every additional priority dilutes completion rate and economic return. Attention Allocation is a formula leadership can measure — not a poster with seven arrows.",
    figure: "strategic-focus-value.svg",
    tone: "tide",
    tags: ["Strategic focus", "Prioritisation", "Attention", "Execution"],
    topic: "attention allocation and focus",
    intro: [
      "Strategy offsites produce lists. Lists grow. Three priorities become seven, then fifteen, each labelled critical. Organisations do not have fifteen critical priorities — they have none, distributed thinly enough to fail politely.",
      "Constrange quantifies focus with Attention Allocation: strategic economic value divided by active priorities, adjusted for completion probability. The formula is blunt. So is the reality — completion rates collapse as priority count rises.",
      "Focus has economic value because unfinished priorities consume cash, attention, and credibility without return. Measuring focus makes the cost of addition visible before the next initiative launches.",
    ],
    table: {
      caption: "Priority count vs typical completion",
      head: ["Active priorities", "Completion within year", "Economic drag"],
      rows: [
        ["3", "70–85%", "Low thrash"],
        ["7", "40–55%", "Rising coordination cost"],
        ["15", "15–25%", "Chronic partial delivery"],
        ["20+", "Under 15%", "Organisation learns to ignore lists"],
      ],
    },
    figAlt: "Three boxes comparing three, seven, and fifteen priorities",
    figCap: "Completion falls as priority count rises — focus has measurable value.",
    sections: [
      {
        h2: "The economics of dilution",
        paras: [
          "Each priority carries fixed cost — meetings, reporting, political overhead — largely independent of size. Fifteen priorities pay fifteen overheads; most deliver nothing finished.",
          "Opportunity cost is invisible until you ask what the seventh priority prevented. Usually it prevented finishing the second.",
          "External credibility erodes. Partners and talent hear fifteen things and believe zero.",
        ],
      },
      {
        h2: "Attention Allocation in practice",
        paras: [
          "Estimate economic value of the strategic portfolio if completed. Divide by count of active priorities. Divide again by historical completion rate at that count. The quotient is expected value per priority — compare across quarters.",
          "Use historical completion by count from your own data, not benchmarks. Culture affects completion as much as ambition.",
          "Simulate removing bottom five priorities — expected value often rises because completion probability rises faster than value falls.",
        ],
        ol: [
          "List active priorities with executive sponsors",
          "Score economic value and completion probability",
          "Compute Attention Allocation index",
          "Cut or defer until index improves",
        ],
      },
      {
        h2: "Saying no with economics",
        paras: [
          "New requests compare to index impact — adding priority seven without retiring two is a negative NPV decision even if the idea is good.",
          "Deferral is not rejection. Sequence with revisit triggers.",
          "Boards respond to expected value math better than pleas for focus alone.",
        ],
        note:
          "If everything is priority one, renumber honestly or delete — numbering theatre trains cynicism.",
      },
      {
        h2: "Organisational habits that restore focus",
        paras: [
          "One in, one out for executive priorities. No net adds without retirements.",
          "Quarterly completion audit — finished means customer-visible or P&L-visible, not phase complete.",
          "Align budget cuts to priority retirements simultaneously — orphaned budget revives dead priorities.",
        ],
        quote:
          "Focus is not what you add. It is what you refuse to add.",
      },
      {
        h2: "Three priorities is a feature",
        paras: [
          "Three forces trade-offs into the open. Seven hides them. Fifteen eliminates them.",
          "Communicate the three externally — customers and recruits remember three.",
          "Measure leadership time allocation against the three — misallocated time breaks focus faster than new slides.",
        ],
        h3: "Completion definition",
        p3:
          "Define completion criteria at launch — metric, date, owner. Without criteria, completion becomes narrative. Narrative completion is how fifteen priorities persist.",
      },
      {
        h2: "When to expand focus",
        paras: [
          "Add priorities only when completion rate on current set exceeds threshold two quarters running — capacity exists, not optimism.",
          "Acquisitions and regulatory shocks may temporarily raise count — with explicit sunset back to three.",
          "Never add because competitors have more initiatives — their completion rate is unknown and possibly worse.",
        ],
      },
    ],
    fillers: [
      "Track executive calendar hours per priority — unfunded time means unfunded priority.",
      "Compare promised launch dates to actual — slippage correlates with count.",
      "Survey middle managers on which three they believe — divergence from exec list predicts failure.",
      "Run annual priority autopsy on unfinished work from prior years — cost is sunk; lesson is not.",
      "Publish deferred priorities with dates — visibility reduces underground duplication.",
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
  },
  {
    slug: "the-customer-concentration-trap-how-much-revenue-is-too-much",
    title: "The Customer Concentration Trap: How Much Revenue Is Too Much?",
    deck:
      "Large customers feel like wins until they own your roadmap, margin, and risk profile. Concentration is a strategy choice — usually an accidental one.",
    figure: "customer-concentration-trap.svg",
    tone: "frost",
    tags: ["Customer concentration", "Risk", "Commercial", "Portfolio"],
    topic: "customer concentration risk",
    intro: [
      "Revenue concentration comforts until it constrains. One logo at thirty percent of revenue does not only create churn risk — it shapes product, pricing, and negotiation power. Many companies discover concentration after the customer already behaves like a co-owner.",
      "Constrange maps concentration scenarios: single customer, top three, top ten — against margin contribution, roadmap influence, and replacement cost. Thresholds differ by model, but ignorance is never acceptable.",
      "The trap is treating large accounts as pure upside. They are leverage in both directions — growth when aligned, existential when misaligned or lost.",
    ],
    table: {
      caption: "Concentration scenario guide (illustrative)",
      head: ["Share of revenue", "Risk profile", "Typical response"],
      rows: [
        ["Under 10% top customer", "Manageable", "Standard account planning"],
        ["10–20%", "Elevated", "Dedicated success, diversification plan"],
        ["20–35%", "High", "Board visibility, roadmap firewall"],
        ["Over 35%", "Critical", "Scenario planning, contract review"],
        ["Top 3 over 50%", "Structural", "Portfolio reshape required"],
      ],
    },
    figAlt: "Bar showing top three customers as share of total revenue",
    figCap: "Concentration changes negotiation power — measure it before renewal season.",
    sections: [
      {
        h2: "How concentration accumulates",
        paras: [
          "Enterprise sales celebrates whale logos. Product customises. Support prioritises. Finance smooths forecasts around them. Concentration grows quietly.",
          "Acquisitions import concentration — one legacy client dominates combined revenue.",
          "Discounting to win large deals trades margin for share of your P&L — concentration without profit.",
        ],
      },
      {
        h2: "Measuring beyond revenue share",
        paras: [
          "Track margin share, not only revenue share. A customer at twenty percent revenue and five percent margin is different risk than twenty and twenty.",
          "Measure roadmap influence — features built primarily for one customer. That is hidden concentration in product.",
          "Stress test replacement timeline if lost — sales cycle length times pipeline coverage.",
        ],
        ul: [
          "Revenue and margin percent top 1, 3, 10",
          "Support and engineering hours per dollar by customer",
          "Custom feature count tied to single logo",
          "Payment terms and concentration in AR",
        ],
      },
      {
        h2: "Governance for large accounts",
        paras: [
          "Executive sponsor plus firewall rules — no bespoke roadmap without economic case and expiration.",
          "Board reporting threshold at fifteen percent revenue or ten percent margin — triggers diversification plan review.",
          "Contract terms: minimum commitment, price escalation, exit assistance fees balanced ethically.",
        ],
        note:
          "Firewalls fail without product leadership backing — sales will route around polite requests.",
      },
      {
        h2: "Diversification without abandoning whales",
        paras: [
          "Grow the long tail deliberately — segments and products that do not depend on whale features.",
          "Price whale work at true cost plus risk premium — subsidising whales funds concentration.",
          "Cap custom work hours per quarter per logo — visible meter.",
        ],
        quote:
          "Your largest customer should not be your product manager.",
      },
      {
        h2: "Loss scenarios and resilience",
        paras: [
          "Model P&L and cash impact of top customer loss at six and twelve months. If survival requires emergency raise, concentration is already policy failure.",
          "Identify second-tier accounts that could accelerate — pipeline is mitigation, not only new logos.",
          "Communicate concentration to investors honestly — surprises destroy trust faster than concentration itself.",
        ],
        h3: "Renewal leverage",
        p3:
          "Enter renewals with diversification progress metrics — even modest long-tail growth improves negotiation stance. Renewal without diversification plan repeats dependency.",
      },
      {
        h2: "When concentration is strategic",
        paras: [
          "Some models — defence prime, single-platform B2B — accept concentration with eyes open and price for it.",
          "Document accepted concentration with board approval and annual reaffirmation.",
          "Pair with balance sheet and contract protections others skip when concentration is accidental.",
        ],
      },
    ],
    fillers: [
      "Review top customer payment history — concentration plus slow pay doubles risk.",
      "Track executive hours in top account QBRs — excessive time is hidden subsidy.",
      "Compare NPS of long tail vs whale — neglect predicts diversification difficulty.",
      "Stress test engineering attrition if whale leaves — key people may follow.",
      "Map competitor presence in whale account — sole vendor concentration is fragile.",
    ],
    faqs: [
      [
        "What percent concentration is too much?",
        "No universal number — above twenty percent revenue from one customer warrants active governance in most B2B models.",
      ],
      [
        "Should we fire a whale?",
        "Rarely required — reprice, firewall, and diversify first. Exit unprofitable whales deliberately.",
      ],
      [
        "How do investors view concentration?",
        "Risk discount on valuation — disclose and show mitigation plan.",
      ],
      [
        "Does concentration affect hiring?",
        "Yes — roadmap hostage slows platform hiring; teams maintain custom forks.",
      ],
    ],
  },
  {
    slug: "business-resilience-as-competitive-advantage-not-insurance",
    title: "Business Resilience as Competitive Advantage, Not Insurance",
    deck:
      "Resilience is not a compliance checkbox. After shock, prepared companies capture share while rivals recover — advantage measured in quarters, not incidents avoided.",
    figure: "business-resilience-advantage.svg",
    tone: "coral",
    tags: ["Resilience", "Competitive advantage", "Risk", "Operations"],
    topic: "business resilience as advantage",
    intro: [
      "Resilience programmes often live in risk and IT — insurance against bad days. That framing underinvests. Resilience is offensive when shocks redistribute customers, talent, and supply.",
      "Constrange treats resilience as time-to-recover plus time-to-capture: how fast you restore service and how fast you win displaced demand. Companies optimising only recovery leave share on the table.",
      "Post-shock winners are rarely lucky. They pre-positioned capacity buffers, supplier alternates, communication discipline, and financial headroom — then executed capture plays competitors could not match while firefighting.",
    ],
    table: {
      caption: "Resilience vs insurance mindset",
      head: ["Insurance view", "Advantage view"],
      rows: [
        ["Minimise loss", "Minimise loss and capture upside"],
        ["Compliance metric", "Recovery and capture time"],
        ["IT and risk owned", "P&L and strategy owned"],
        ["Annual drill", "Continuous scenario rhythm"],
        ["Cost centre", "Investment with ROI case"],
      ],
    },
    figAlt: "Flow from shock through recover to capture",
    figCap: "Resilience converts downtime into share when capture is designed in.",
    sections: [
      {
        h2: "Redefining resilience",
        paras: [
          "Recovery alone returns to zero. Capture creates positive delta — new customers, deeper share, talent inflow. Companies that plan only for recovery meet their SLA and still lose ground to rivals who planned for displacement.",
          "Measure maximum tolerable outage by revenue and reputation, not only SLA contract. A minute of downtime costs differently by segment — enterprise, consumer, regulated — and the tolerance should be explicit before shock, not debated during it.",
          "Integrate resilience into capital allocation — buffers are strategic spends with scenario ROI. Inventory, surge vendor contracts, and liquidity lines belong in the same portfolio conversation as growth bets, with owners and triggers.",
        ],
      },
      {
        h2: "Building recover capability",
        paras: [
          "Identify critical paths — single supplier, single region, single key person. Redundancy where economics allow; documented workarounds where not. Workarounds nobody has rehearsed are fiction on the day they matter.",
          "Run partial failures, not tabletop only. Fail supplier, fail site, fail system — measure decision time and communication latency. Tabletops teach vocabulary; injections teach whether the playbook matches reality.",
          "Communicate templates pre-written — internal and external — approval chains short during shock. Legal and comms review templates in peacetime so crisis hours go to execution, not wording debates.",
        ],
        ol: [
          "Map critical paths and single points of failure",
          "Assign scenario owners with budget",
          "Exercise twice yearly with metrics",
          "Update playbooks within two weeks of exercise",
        ],
      },
      {
        h2: "Designing capture plays",
        paras: [
          "Identify what competitors cannot supply during shock — capacity, geography, compliance, support level. Capture is not predatory by default; it is serving demand your rivals cannot meet while they recover.",
          "Pre-negotiate surge capacity where possible — marketing without supply is reputational suicide. Sales promises during industry outages travel fast; fulfilment failure travels faster.",
          "Sales and CS playbooks for ethical capture — help without predatory pricing that damages long-term brand. Capture plans reviewed by legal and brand before shock prevent improvised discounts that haunt renewal cycles.",
        ],
        note:
          "Capture plans require legal and brand review before shock — improvisation under stress invites mistakes.",
      },
      {
        h2: "Financial headroom",
        paras: [
          "Liquidity and covenant space determine speed. Resilience without cash is narrative. Model cash burn under shock scenarios separately from base plan — boards approve buffers when numbers exist.",
          "Inventory and vendor terms are balance sheet resilience — not only IT backups. Extended payables and strategic stock are unfashionable until a port closes or a supplier fails.",
          "Insurance payouts lag; operations cannot wait — self-funded recovery speed is the metric. Treat insurance as partial reimbursement, not as your primary continuity budget.",
        ],
        quote:
          "Insurance pays for loss. Resilience pays for position.",
      },
      {
        h2: "Organisation and culture",
        paras: [
          "Resilience decisions are slow when owned only by risk. COO or GM must co-own capture economics — recovery is ops, capture is commercial, both are P&L.",
          "Reward post-exercise improvement, not exercise attendance. Teams that improve decision time and communication accuracy after each drill build muscle; teams that tick compliance boxes do not.",
          "Talent stays when leadership communicates honestly during shock — transparency is operational resilience. Rumour-filled outages lose people faster than outages themselves.",
        ],
        h3: "Supplier and ecosystem",
        p3:
          "Multi-source critical inputs with relationship depth — alternate supplier you never call is fiction. Small ongoing orders keep alternates warm and give you credible switch time when primary fails.",
      },
      {
        h2: "Measuring advantage",
        paras: [
          "Track share and pipeline velocity in shock windows vs baseline. Define shock windows by industry event, not only your own incident — competitor outages are capture opportunities too.",
          "Compare recovery time to industry peers using public signals and customer feedback. Relative speed matters when customers choose who to trust for the next contract.",
          "Post-incident review includes capture retrospective — what we could have taken and did not. Missed capture is learning, not blame, when playbooks update.",
        ],
      },
    ],
    fillers: [
      "Maintain scenario cards with pre-approved spend triggers — decision latency drops.",
      "Review customer contracts for force majeure asymmetry — yours and theirs.",
      "Track employee sentiment after exercises — fear-based drills backfire.",
      "Integrate resilience into onboarding — new leaders inherit playbooks.",
      "Benchmark inventory days against shock scenario demand spike.",
      "Pair recovery time targets with capture pipeline goals in the same scorecard — ops and commercial share one resilience outcome.",
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
  },
  {
    slug: "the-decision-latency-problem-how-much-does-a-slow-company-lose",
    title: "The Decision Latency Problem: How Much Does a Slow Company Lose?",
    deck:
      "Slow decisions compound — opportunities decay, costs accumulate, talent leaves. Decision Cost equals Opportunity times Delay, and most firms never measure either term.",
    figure: "decision-latency-index.svg",
    tone: "pine",
    tags: ["Decision latency", "Governance", "Speed", "Leadership"],
    topic: "decision latency and cost",
    intro: [
      "Companies admire fast competitors while approving through five layers. Decision latency is the elapsed time from question asked to decision committed — not announced, committed with budget and owner.",
      "Constrange indexes decision latency by type: pricing exception, hire, product launch, vendor switch, strategic pivot. Latency varies by type; aggregate averages lie.",
      "Decision Cost models economic loss as Opportunity times Delay — rough but directional. Unmeasured latency feels like culture. Measured latency becomes a redesign project with ROI.",
    ],
    table: {
      caption: "Decision Latency Index — example targets",
      head: ["Decision type", "Median latency", "Cost driver"],
      rows: [
        ["Pricing exception", "Under 5 days", "Lost deal or excess discount"],
        ["Standard hire", "Under 21 days", "Vacancy cost, project slip"],
        ["Product launch go/no-go", "Under 14 days", "Competitor window"],
        ["Vendor change", "Under 30 days", "Lock-in renewal"],
        ["Strategic pivot", "Under 45 days", "Organisation thrash"],
      ],
    },
    figAlt: "Formula showing decision cost as opportunity multiplied by delay",
    figCap: "Decision Cost = Opportunity × Delay — measure both terms.",
    sections: [
      {
        h2: "Where latency hides",
        paras: [
          "Waiting for perfect information is the polite form of delay. Most decisions need sufficient information, not complete.",
          "Consensus culture adds sequential approvals without parallel work. Each layer waits for the previous layer to polish slides.",
          "Escalation without default — if no decision by date X, outcome Y — allows passive veto.",
        ],
      },
      {
        h2: "Building the index",
        paras: [
          "Timestamp decisions from request to commit in workflow tool or calendar audit. Sample monthly by type.",
          "Interview decision requesters on outcome — deal lost, project delayed, cost incurred. Tag economic impact bands.",
          "Publish median and ninetieth percentile — tail latency hurts more than median suggests.",
        ],
        ul: [
          "Request date and commit date",
          "Decision type taxonomy",
          "Outcome tag — win, loss, neutral, unknown",
          "Layers involved count",
        ],
      },
      {
        h2: "Redesigning governance",
        paras: [
          "Delegate thresholds clearly — below X, manager decides; above X, forum with SLA.",
          "Pre-approved rules replace case-by-case — discount bands, hire levels, standard architecture choices.",
          "Decision forums with standing agenda slots — waiting for quarterly board kills deals.",
        ],
        note:
          "Speed without delegation is theatre — executives cannot decide everything faster, only fewer things.",
      },
      {
        h2: "Opportunity decay",
        paras: [
          "Model decay for time-sensitive decisions — pipeline value times weekly slip probability.",
          "Talent markets decay faster than sales pipelines. Slow hire decisions lose candidates to faster rivals.",
          "Regulatory and seasonal windows are hard deadlines — latency past window equals zero opportunity.",
        ],
        quote:
          "A delayed yes is often a no with extra meetings.",
      },
      {
        h2: "Culture and accountability",
        paras: [
          "Name decision owners, not recommendation owners. Recommendations without decision rights inflate latency.",
          "Reward clean no's faster than slow maybes — ambiguity consumes more than rejection.",
          "Retros on high-latency decisions quarterly — process fix, not blame ritual.",
        ],
        h3: "Default outcomes",
        p3:
          "Implement default-on-expiry — pricing reverts to standard, requisition expires, project proceeds with stated assumptions — to break passive blocking.",
      },
      {
        h2: "When slowness is correct",
        paras: [
          "Irreversible high-blast-radius decisions deserve latency — capital structure, safety systems, major M&A.",
          "Label slow types explicitly so fast types are not contaminated by same process.",
          "Do not use irreversible argument for reversible operational choices — that is avoidance.",
        ],
      },
    ],
    fillers: [
      "Track calendar days in approval chains for top ten deals — sales feels latency before index exists.",
      "Compare latency before and after pre-approval rules — ROI is often immediate.",
      "Survey managers on decisions waiting over thirty days — queue visibility reduces latency.",
      "Measure rework from reversed decisions — flip-flop is latency plus cost.",
      "Publish decision SLAs internally — sunlight changes behaviour.",
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
  },
  {
    slug: "the-moat-test-which-competitive-advantages-survive-ten-years",
    title: "The Moat Test: Which Competitive Advantages Survive Ten Years?",
    deck:
      "Moats erode faster than strategy decks admit. Score advantages for year ten durability — network, scale, brand, switching, regulation — before you bet the company on them.",
    figure: "moat-test-durability.svg",
    tone: "wine",
    tags: ["Competitive advantage", "Moat", "Strategy", "Durability"],
    topic: "moat durability scoring",
    intro: [
      "Leadership lists advantages — brand, data, network, scale. Lists rarely ask which survive ten years of technology, regulation, and entrant capital. The moat test forces durability scoring before strategic reliance.",
      "Constrange scores each claimed advantage on evidence today and erosion forces tomorrow — commoditisation, substitution, disintermediation, policy change. High score today with high erosion velocity is a trap.",
      "Strategy built on eroding moats spends to defend the past while entrants build the future. The test is not pessimism — it is timing capital to advantages that compound.",
    ],
    table: {
      caption: "Moat durability scoring dimensions",
      head: ["Advantage type", "Durability question", "Erosion force"],
      rows: [
        ["Network effects", "Does value rise with users?", "Multi-homing, fragmentation"],
        ["Scale economies", "Unit cost falls with volume?", "Cloud levelling, outsourcing"],
        ["Brand", "Trust reduces search cost?", "Performance parity, scandal"],
        ["Switching costs", "Pain real on exit?", "Standards, migration tools"],
        ["Regulatory", "Barrier licensed?", "Policy change, capture"],
      ],
    },
    figAlt: "Five moat types labelled for durability scoring",
    figCap: "Score moats for year ten — not year one excitement.",
    sections: [
      {
        h2: "Why moats fail quietly",
        paras: [
          "Advantages decay while metrics still look fine — revenue lags erosion. By the time growth stalls, replacement moat is years away.",
          "Technology commoditises former differentiators — support, analytics, integration — into table stakes.",
          "Entrants subsidise entry to attack your weakest moat leg while you defend the strongest narrative.",
        ],
      },
      {
        h2: "Running the moat test",
        paras: [
          "List top five claimed advantages. Score strength one to five with customer evidence, not internal belief.",
          "Score erosion velocity one to five using explicit forces — new regulation, open standards, well-funded entrants.",
          "Multiply or matrix strength and durability — prioritise investment to advantages with high strength and low erosion.",
        ],
        ol: [
          "Inventory claimed moats with evidence",
          "Score strength and erosion per moat",
          "Identify gaps between narrative and score",
          "Allocate R&D and GTM to durable legs",
        ],
      },
      {
        h2: "Investing in durable legs",
        paras: [
          "Double down where strength and durability align — deepen switching through workflow, not contracts alone.",
          "Harvest eroding legs — milk margin, minimise new capex — while building replacement.",
          "Avoid moat cosplay — branding exercises without underlying advantage.",
        ],
        note:
          "If no moat scores above threshold, strategy is execution and luck — price and operate accordingly.",
      },
      {
        h2: "Building replacement moats",
        paras: [
          "Replacement takes years — start before harvest ends.",
          "Data moats need proprietary flow and model feedback loops — static data warehouses erode.",
          "Ecosystem moats need partner economics that improve with scale — not logo slides.",
        ],
        quote:
          "A moat you cannot name with evidence is a trench you are standing in.",
      },
      {
        h2: "Board and investor conversations",
        paras: [
          "Present moat test scores annually — changes signal strategic health better than single KPI.",
          "M&A should improve durable score, not only add revenue.",
          "Disclose erosion forces honestly — markets price surprises, not known decay.",
        ],
        h3: "Ten-year horizon",
        p3:
          "Ask which competitor would be happy you believe your moat is X — their strategy often targets the opposite leg.",
      },
      {
        h2: "When weak moats still win",
        paras: [
          "Execution excellence and cost discipline win in commoditising markets — but strategy must admit commoditisation.",
          "Niche depth can durably defend small ponds — scale moats fail but focus moats persist.",
          "Regulatory moats need active stewardship — capture invites eventual backlash.",
        ],
      },
    ],
    fillers: [
      "Track feature parity time vs entrants — shortening parity means eroding product moat.",
      "Monitor multi-homing in customer base — second supplier presence predicts network erosion.",
      "Review patent and regulatory expiry calendars — cliffs are predictable.",
      "Compare brand NPS to performance NPS — brand-only gap closes with parity.",
      "Run moat test on acquired assets before integration spend.",
    ],
    faqs: [
      [
        "How often to rerun the moat test?",
        "Annually and after major market or regulatory shifts.",
      ],
      [
        "Can brand be a durable moat?",
        "Yes where trust directly reduces risk and performance is hard to verify ex ante — finance, health, safety.",
      ],
      [
        "What if all moats score low?",
        "Compete on cost, speed, and focus — and invest in building one durable leg deliberately.",
      ],
      [
        "Does the test apply to services firms?",
        "Yes — switching costs and talent scale often matter more than network effects.",
      ],
    ],
  },
  {
    slug: "market-entry-without-guesswork-framework-for-choosing-the-next-market",
    title: "Market Entry Without Guesswork: Framework for Choosing the Next Market",
    deck:
      "The next market should rank on fit and access — not executive travel impressions. The Market Entry Matrix makes choices comparable before you commit GTM spend.",
    figure: "market-entry-matrix.svg",
    tone: "field",
    tags: ["Market entry", "Growth", "Portfolio", "GTM"],
    topic: "market entry decisions",
    intro: [
      "Market entry decisions often follow anecdote — a conference, a board relationship, a competitor move. Anecdotes are inputs, not decisions. Without a framework, companies enter crowded markets late and ignore adjacent wins.",
      "Constrange uses a Market Entry Matrix: strategic fit on one axis, access on the other — channels, regulation, proof points, cost to serve. Quadrants dictate enter, prepare, partner, or avoid.",
      "The matrix does not eliminate judgement. It forces explicit scores, trade-offs, and sequencing — so the second market does not drain the first before it compounds.",
    ],
    table: {
      caption: "Market Entry Matrix quadrants",
      head: ["Quadrant", "Fit", "Access", "Action"],
      rows: [
        ["Enter now", "High", "High", "Fund GTM, set milestones"],
        ["Prepare", "High", "Low", "Build access, delay scale spend"],
        ["Partner", "Low", "High", "Channel or JV, limit capex"],
        ["Avoid", "Low", "Low", "Explicit no with revisit date"],
        ["Revisit trigger", "Any change", "Threshold met", "Rescore quarterly"],
      ],
    },
    figAlt: "Two-axis matrix with enter, avoid, and prepare quadrants",
    figCap: "Rank markets on fit and access before committing GTM spend.",
    sections: [
      {
        h2: "Defining fit",
        paras: [
          "Fit is product-problem alignment, margin potential, competitive intensity, and strategic linkage to core — not TAM slides alone.",
          "Score fit with evidence — pilot conversions, reference customers, win-loss in adjacent segments.",
          "Penalise fit when delivery complexity duplicates known complexity tax.",
        ],
      },
      {
        h2: "Defining access",
        paras: [
          "Access is reachable channels, regulatory path, brand transfer, and cost to serve — not whether a flight was easy.",
          "Local presence requirements, data residency, and partner dependence belong in access score.",
          "Access can be bought — price it in timeline and dollars.",
        ],
        ul: [
          "Channel coverage and CAC estimate",
          "Regulatory licensing timeline",
          "Reference customer path",
          "Language and support cost",
        ],
      },
      {
        h2: "Scoring without false precision",
        paras: [
          "Use weighted criteria and three reviewers — sales, product, finance — independent scores then reconcile.",
          "Document assumptions per market — revisit when assumption breaks.",
          "Rank markets, do not average into a tie — ties mean insufficient differentiation.",
        ],
        note:
          "Executive sponsor enthusiasm is not a scoring criterion — log it separately as bias check.",
      },
      {
        h2: "Sequencing entries",
        paras: [
          "Enter one new market at a time unless explore speed explicitly funded — parallel entries divide focus.",
          "Prepare quadrant markets need access investments with gates — hire local lead, win three references, then scale.",
          "Partner quadrant — choose partners with aligned incentives and exit clauses.",
        ],
        quote:
          "TAM is not a strategy. Fit plus access is.",
      },
      {
        h2: "Milestones and kill criteria",
        paras: [
          "Set six and twelve month milestones — pipeline, conversion, delivery cost — before launch announcement.",
          "Kill criteria pre-agreed — if access cost exceeds X or fit score drops on first cohort, pause.",
          "Post-entry reviews compare actual to scored assumptions — calibrate future entries.",
        ],
        h3: "Adjacent vs greenfield",
        p3:
          "Adjacent markets inherit fit and access — score them honestly higher than distant greenfield with better TAM story.",
      },
      {
        h2: "Portfolio balance",
        paras: [
          "Balance entry portfolio with core market depth — shallow everywhere is a trap.",
          "Use matrix to retire markets — low fit and stagnant access belongs in avoid with resources reclaimed.",
          "Communicate sequence externally — partners and hires plan on honesty.",
        ],
      },
    ],
    fillers: [
      "Rescore markets after product changes — fit shifts with platform moves.",
      "Compare entry spend to core market ROI — opportunity cost visible.",
      "Track competitor entry timing — being third may still win with access advantage.",
      "Document regulatory surprises in prepare quadrant — update access model.",
      "Run loss review on avoided markets annually — validate avoid calls.",
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
  },
  {
    slug: "the-operating-model-problem-when-a-company-outgrows-its-organization",
    title: "The Operating Model Problem: When a Company Outgrows Its Organization",
    deck:
      "Revenue doubles but decisions still fit in one room — until they do not. Operating model inflection points arrive twelve to eighteen months after the numbers say scale.",
    figure: "operating-model-inflection.svg",
    tone: "ink",
    tags: ["Operating model", "Organisation design", "Scale", "Leadership"],
    topic: "operating model inflection",
    intro: [
      "Organisations lag revenue. Processes built for fifty people strain at five hundred. The operating model — how work flows, decides, and measures — becomes the constraint while strategy still targets market share.",
      "Inflection points cluster at revenue and headcount bands that vary by industry, but symptoms repeat: escalation overload, duplicate functions, unclear profit ownership, and heroes substituting for systems.",
      "Constrange maps inflection by decision volume, span of control, handoff count, and reconciliation cost. Structure should change before heroes burn out — not after a reorg crisis.",
    ],
    table: {
      caption: "Operating model inflection signals",
      head: ["Signal", "Early stage", "Post-inflection need"],
      rows: [
        ["Decision volume", "Founder bottleneck", "Delegated thresholds"],
        ["Span of control", "Wide flat teams", "Layer with clear P&L"],
        ["Handoffs", "Informal", "Documented interfaces"],
        ["Functions", "Generalists", "Specialists with chargeback"],
        ["Planning", "Annual budget", "Rolling forecast plus portfolio"],
      ],
    },
    figAlt: "Curve showing organisation lagging revenue growth with inflection point marked",
    figCap: "Structure lags revenue by twelve to eighteen months — plan early.",
    sections: [
      {
        h2: "Recognising outgrowth",
        paras: [
          "Meetings multiply while decisions slow — classic sign the informal model exceeded capacity.",
          "Duplicate roles appear in regions and functions — same job, different boss, no reconciliation.",
          "Customer experience variance rises — not product failure, handoff failure.",
        ],
      },
      {
        h2: "Mapping the current model",
        paras: [
          "Document how decisions actually flow — not the org chart, the work chart. Who approves, who executes, who measures.",
          "Count handoffs on critical journeys — order to cash, hire to productive, incident to resolved.",
          "Identify profit owners — if none, margin arguments have no home.",
        ],
        ul: [
          "Decision types and actual approvers",
          "Handoff count top journeys",
          "Reconciliation meetings per month",
          "Escalations to CEO count",
        ],
      },
      {
        h2: "Designing the next model",
        paras: [
          "Choose principles before boxes — clear P&L, minimum viable layer, product vs geography vs customer matrix with one primary axis.",
          "Pilot new model in one division before enterprise reorg — learn interfaces.",
          "Pair structural change with process and system change — reorg alone moves chairs.",
        ],
        note:
          "Reorgs without decision rights change are renames — cynicism follows.",
      },
      {
        h2: "Inflection timing",
        paras: [
          "Plan structure twelve months ahead of forecast inflection — hiring and systems need lead time.",
          "Communicate twice — rationale and interfaces — before reporting lines change.",
          "Measure post-reorg on handoffs and latency, not only cost save.",
        ],
        quote:
          "You outgrow the organisation before you outgrow the market — if you are lucky.",
      },
      {
        h2: "Common failure patterns",
        paras: [
          "Over-layering — adding managers without decision rights increases latency.",
          "Matrix without primary axis — every decision becomes negotiation.",
          "Shared services without SLAs — central teams become bottlenecks with no feedback.",
        ],
        h3: "Hero dependency",
        p3:
          "Track decisions made by named heroes outside process — high hero share means model failure, not talent success.",
      },
      {
        h2: "Stabilising after change",
        paras: [
          "Freeze secondary changes for two quarters — let interfaces settle.",
          "Run operating model review quarterly first year — tweak interfaces, not whole chart.",
          "Align incentives to new profit owners — structure without comp revert old behaviour.",
        ],
      },
    ],
    fillers: [
      "Survey managers on top three process blockers post-change — actionable feedback.",
      "Compare customer ticket themes before and after reorg — handoff issues show quickly.",
      "Track time to hire and onboard in new structure — friction predicts productivity dip.",
      "Document interfaces between functions — RACI without interfaces is incomplete.",
      "Benchmark escalation volume to CEO — should fall after delegation works.",
    ],
    faqs: [
      [
        "When is the first major inflection?",
        "Often fifty to one hundred fifty people or first multi-region revenue — varies by model.",
      ],
      [
        "Should we hire a COO?",
        "When operating model complexity exceeds founder bandwidth — COO owns flow, not only ops tasks.",
      ],
      [
        "How long does reorg disruption last?",
        "Productivity dip three to six months — plan milestones accordingly.",
      ],
      [
        "Can we avoid reorgs?",
        "You cannot avoid model evolution — only choose proactive vs reactive timing.",
      ],
    ],
  },
  {
    slug: "switching-friction-matters-more-than-brand-loyalty",
    title: "Switching Friction Matters More Than Brand Loyalty",
    deck:
      "Customers stay for friction as often as affection. Map data, workflow, training, and contract switching costs — stated loyalty overstates retention.",
    figure: "switching-friction-model.svg",
    tone: "plum",
    tags: ["Switching costs", "Retention", "Competitive strategy", "Customer behaviour"],
    topic: "switching friction versus loyalty",
    intro: [
      "Surveys report loyalty. Behaviour reports friction. Customers who praise your brand still leave when migration gets cheap — and stay when migration hurts despite complaints.",
      "Constrange models switching friction across data portability, workflow embedding, team training, and contractual exit — weighted by segment. Loyalty scores explain sentiment; friction explains churn timing.",
      "Strategy that invests only in brand while friction erodes is a slow leak. Strategy that builds ethical friction through delivered value compounds — strategy that relies on lock-in alone invites disruption.",
    ],
    table: {
      caption: "Switching Friction Model components",
      head: ["Component", "Friction lever", "Erosion force"],
      rows: [
        ["Data", "Format, volume, history", "Export APIs, standards"],
        ["Workflow", "Integrations, custom process", "Modular alternatives"],
        ["Training", "Certified skills, habit", "Better UX elsewhere"],
        ["Contract", "Term, exit fee, bundle", "Regulation, competition"],
        ["Brand", "Trust, habit", "Performance parity"],
      ],
    },
    figAlt: "Four friction components — data, workflow, training, contract",
    figCap: "Friction beats stated loyalty in retention data.",
    sections: [
      {
        h2: "Loyalty vs friction in data",
        paras: [
          "NPS and brand trackers lag structural moves — export tools, interoperability mandates, competitor-funded migration.",
          "Segment retention curves — enterprise vs SMB — friction differs; aggregate loyalty misleads.",
          "Complaints coexist with retention when friction high — do not misread anger as imminent churn.",
        ],
      },
      {
        h2: "Mapping friction by segment",
        paras: [
          "Score each component one to five with customer research and technical audit — time and cost to switch.",
          "Weight by segment revenue and strategic importance.",
          "Identify lowest-friction customers — they churn first when alternatives appear.",
        ],
        ol: [
          "Audit data export and portability",
          "Map integration depth and alternatives",
          "Survey switching cost experienced last year",
          "Review contract terms and renewal behaviour",
        ],
      },
      {
        h2: "Building durable friction ethically",
        paras: [
          "Deepen workflow value — automation, insights, network — so switching loses capability, not only convenience.",
          "Training and certification create human friction tied to skill — invest when product complexity is real.",
          "Avoid dark patterns — friction through obstruction erodes brand and invites regulation.",
        ],
        note:
          "Durable friction comes from value embedded in customer outcomes — not from hiding export buttons.",
      },
      {
        h2: "When friction erodes",
        paras: [
          "Monitor competitor migration offers — subsidised switching attacks weakest component.",
          "Standards and open APIs reduce data friction — plan value move up stack.",
          "Regulatory portability rules — prepare graceful export as feature, not secret.",
        ],
        quote:
          "Brand gets you considered. Friction gets you kept — until it does not.",
      },
      {
        h2: "Pricing and expansion implications",
        paras: [
          "High friction segments tolerate price increases if value visible — test carefully.",
          "Low friction segments need constant value proof and expansion inside account.",
          "Cross-sell increases friction ethically when products integrate — bundle depth matters.",
        ],
        h3: "Churn early warning",
        p3:
          "Track usage decline in integration-heavy features before logo churn — friction unravels from the edges inward.",
      },
      {
        h2: "Competitive attack and defence",
        paras: [
          "Attack competitors at lowest-friction leg with migration assistance — ethical capture.",
          "Defend by strengthening highest-value workflow ties — not contract penalties alone.",
          "Align customer success to friction health — adoption depth metrics, not only tickets closed.",
        ],
      },
    ],
    fillers: [
      "Run switch workshops with friendly customers — measure hours and cost honestly.",
      "Compare renewal rates for integrated vs standalone SKU customers.",
      "Track support tickets mentioning alternative products — sentiment shift precedes churn.",
      "Review export usage logs — rising exports signal friction failure or healthy portability.",
      "Benchmark contract length vs churn — long term with low friction still vulnerable at renewal cliff.",
    ],
    faqs: [
      [
        "Is high switching friction always good?",
        "No — friction without value is lock-in that erodes brand and attracts competitors and regulators.",
      ],
      [
        "How does brand fit the model?",
        "Brand reduces search friction for new buyers; switching friction retains existing — both matter, different stages.",
      ],
      [
        "Can friction be too high?",
        "Yes — customers trapped resent you; one escape event triggers vocal churn and bad references.",
      ],
      [
        "How often to remap friction?",
        "Annually and after major product or regulatory change.",
      ],
    ],
  },
]
