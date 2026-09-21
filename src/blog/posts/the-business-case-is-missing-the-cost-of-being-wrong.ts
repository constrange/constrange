import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const costOfBeingWrongPost: Article = {
  slug: "the-business-case-is-missing-the-cost-of-being-wrong",
  title: "The business case is missing the cost of being wrong",
  deck:
    "ROI spreadsheets count savings. They rarely count what happens when the bet fails.",
  category: "Perspectives",
  date: "19 January 2026",
  dateIso: "2026-01-19",
  readTime: readTime(1500),
  author,
  tags: ["Business case", "Risk", "Decision-making"],
  art: { label: "Perspectives", cells: ["When the bet fails, the spreadsheet rarely shows it"], tone: "wine" },
  body: [
    p(
      "Business cases are built to justify action. They list benefits, timelines, licence costs, and sometimes a cautious line about 'change management'. They are reviewed in rooms where saying no feels like blocking progress. What they rarely contain is an honest row for being wrong: the cost of a failed migration, a platform nobody adopts, an automation that encodes the wrong definition, a vendor that exits the category mid-programme.",
    ),
    p(
      "That omission is not accidental. Downside is hard to quantify, politically uncomfortable, and absent from vendor templates. So decisions proceed on upside arithmetic alone. Constrange treats that as a design failure, not a finance skill gap. If leadership cannot describe what failure looks like and what it costs, the case is incomplete — however polished the ROI.",
    ),
    p(
      "Counting the cost of being wrong does not mean becoming risk-averse. It means choosing with eyes open: knowing what you will unwind, who absorbs the pain, and which unofficial paths will return when the official bet stalls.",
    ),
    h2("What business cases count well"),
    p(
      "They count direct spend: licences, implementation partners, hardware, headcount for the programme office. They count projected savings: fewer manual hours, reduced error rates, consolidated vendors. They sometimes count opportunity benefit: faster time to market, improved NPS. Those numbers are useful. They are also symmetric — they assume the plan works.",
    ),
    fig(
      "cost-of-being-wrong.svg",
      "ROI spreadsheet with benefits highlighted and failure costs faded or absent",
      "The visible half of the case is rarely the half that determines whether the organisation can absorb the move.",
    ),
    ul([
      "Benefits often assume full adoption on a fixed date",
      "Savings frequently depend on headcount that politics will not release",
      "Integration cost is underestimated; unwind cost is absent",
      "Parallel running is priced for weeks and lasts for years",
      "Success is defined at go-live, not at steady state",
    ]),
    h2("What happens when the bet fails"),
    p(
      "Failure is rarely a clean rollback. Data has moved. Integrations have been cut. Teams have built workarounds around the new thing. Trust in the next programme drops. The organisation lives in a half-finished middle state — paying for two worlds while neither works properly.",
    ),
    {
      t: "table",
      caption: "Costs that appear after a wrong bet",
      head: ["Failure mode", "Cost organisations feel late"],
      rows: [
        ["Low adoption", "Parallel running indefinitely"],
        ["Wrong definition encoded", "Rework across downstream reports"],
        ["Vendor mismatch", "Re-procurement under pressure"],
        ["Scope collapse mid-flight", "Sunk cost plus unfinished joins"],
        ["Regulatory surprise", "Manual bridges and audit remediation"],
      ],
    },
    note(
      "If your business case has no line for living with a partial outcome for eighteen months, it is describing a fantasy steady state.",
    ),
    h2("Why downside stays off the slide"),
    h3("Upside is sellable"),
    p(
      "Sponsors need a story that wins budget. Downside sounds like doubt. So it gets moved to appendix language or risk registers nobody reads in the decision meeting.",
    ),
    h3("Failure is distributed"),
    p(
      "When bets fail, cost lands in operations first — overtime, rework, customer complaints — not in the programme budget. Finance sees programme spend stop. Operations feels the bill for years.",
    ),
    h3("Success bias is structural"),
    p(
      "Careers attach to launches. Few promotion cases cite the programme that was wisely cancelled after an honest reading of downside. The organisation learns to start, not to stop.",
    ),
    quote(
      "A business case that only prices success is not a case for action. It is a case for hope.",
    ),
    h2("How to count the cost of being wrong without stalling everything"),
    p(
      "You do not need perfect actuarial precision. You need a named failure scenario, an order-of-magnitude cost, and an owner who will recognise early signals. That is enough to compare bets honestly.",
    ),
    ol([
      "Write one paragraph: what does 'wrong' look like in operations language?",
      "Estimate parallel running, rework, and attention cost for twelve months.",
      "Name who pays — programme, line, or customer.",
      "List early signals that the bet is drifting wrong.",
      "Define what you will stop doing if signals appear.",
    ]),
    h2("Pairing upside with honest downside"),
    p(
      "Present both in the same table. Not to kill the initiative — to sequence it. Sometimes the upside is real but the organisation cannot absorb failure this year. Sometimes the downside is large but narrow — manageable with a smaller slice and a clear kill switch.",
    ),
    p(
      "Constrange often reframes programmes this way: not 'should we?' but 'what must be true for this to be worth the cost of being wrong?' If those conditions are not credible, the case is not ready — however strong the vendor demo.",
    ),
    h2("Vendor cases and internal cases share the same gap"),
    p(
      "Vendor ROI templates optimise for signature. Internal templates optimise for committee approval. Both assume steady-state adoption on a timeline nobody stress-tests. The missing row is the same: what happens if the join fails, if training does not stick, if the exception rate doubles in month two.",
    ),
    p(
      "Ask vendors for failure stories, not only reference sites. Ask internal sponsors for the last programme that under-delivered and where cost landed. If neither conversation is comfortable, the case is not mature.",
    ),
    h2("Writing the failure scenario on one page"),
    p(
      "One page is enough: trigger ('adoption below fifty per cent at month six'), cost range ('parallel running plus rework for four quarters'), owner ('operations director'), early signals ('exception queue depth, trainer backlog, unofficial sheet growth'), kill switch ('stop rollout to region B; fund join fix before expand').",
    ),
    p(
      "That page belongs in the approval pack beside benefits — same font, same meeting, same vote. Appendix burial is how organisations pretend downside was considered when it was not.",
    ),
    h2("After approval: watching for early signals"),
    p(
      "The cost of being wrong is not only financial. It is attention: leadership stuck in recovery, teams cynical about the next initiative, partners asked to replatform twice. Early signals — rising exception rates, trainer backlog, growth of unofficial paths — should trigger the kill switch you wrote, not a longer steering deck.",
    ),
    p(
      "Programmes that treat early drift as 'teething' without revisiting the failure scenario are choosing to pay the full downside. Honest cases include a monthly check: are we still inside the conditions that made this bet worth taking?",
    ),
    h2("Finance and operations on the same failure line"),
    p(
      "Finance models NPV. Operations models queue depth, rework hours, and customer complaints. The cost of being wrong lives between those models until someone forces a shared line item: 'cost of partial failure year one'. Without it, approval is a split screen — ROI on one monitor, overtime on another — and leadership wonders why benefits never landed.",
    ),
    p(
      "One shared row does not need perfect precision. It needs a named owner who will escalate when reality diverges from the case.",
    ),
    h2("The optimism tax"),
    p(
      "Organisations that never price being wrong pay an optimism tax. It arrives as parallel running, vendor change requests, programme extensions, and the quiet return of unofficial paths. The tax is rarely attributed to the original decision because the business case closed when the signature landed. By the time the tax is visible, a new programme exists to fix the last programme — and its case repeats the same gap.",
    ),
    p(
      "Breaking the cycle requires one habit: no approval without a failure scenario on the same page as benefits. Not in appendix fourteen. On the page that gets voted. Committees that resist this are not being rigorous. They are outsourcing downside to operations and calling it transformation.",
    ),
    h2("Smaller bets with clearer kill switches"),
    p(
      "The antidote to missing downside is not paralysis. It is scope discipline: one region, one workflow, one definition, ninety days, falsification criteria written before spend scales. A smaller bet with a kill switch limits the cost of being wrong. A large bet without one turns every mid-programme drift into a political fight about whether to continue.",
    ),
    p(
      "Kill switches feel pessimistic until you use one early and save a year of parallel running. They are how mature organisations preserve appetite for the next good idea — by proving they can stop a bad one without blame theatre.",
    ),
    h2("When upside and downside share one owner"),
    p(
      "Split ownership produces split outcomes. Programme office delivers the platform; operations absorbs the failure. A single accountable owner for the bet — benefits and downside — changes the conversation. That owner does not need to be technical. They need authority to stop spend when early signals diverge from the case.",
    ),
    p(
      "Committees prefer shared ownership because it diffuses blame. Organisations that price being wrong honestly prefer named ownership because it concentrates learning. The next business case improves when someone can say, without theatre, what we would do differently.",
    ),
    h2("Questions for the approval meeting"),
    ul([
      "What do we do if adoption is half the plan at month six?",
      "Who funds parallel running if cutover slips?",
      "What unofficial path returns when the official one fails?",
      "What would we stop if we knew today the bet would not land?",
      "Can we run a smaller slice that limits downside?",
    ]),
    p(
      "If approvers cannot answer, they are not approving a business case. They are approving optimism. The cost of being wrong will arrive anyway — just not on the slide.",
    ),
    p(
      "A case that prices being wrong is not pessimistic. It is how organisations keep the right to change their mind without paying for the whole programme first.",
    ),
    cta(
      "Reviewing a case that only shows upside?",
      "Bring the spreadsheet and the operational stories. We will help you price being wrong honestly.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Does adding downside kill good programmes?",
      "It kills hidden ones. Honest downside often leads to smaller scope, better sequencing, or clearer kill switches — not permanent delay.",
    ],
    [
      "Who should own the failure scenario?",
      "Operations and finance together. Programme office owns delivery; line owns absorption.",
    ],
    [
      "How detailed must failure costing be?",
      "Detailed enough to compare options. Order-of-magnitude beats absence.",
    ],
    [
      "What if the sponsor refuses to discuss downside?",
      "Treat that as a signal. Programmes that cannot name failure rarely survive contact with Tuesday.",
    ],
  ],
}
