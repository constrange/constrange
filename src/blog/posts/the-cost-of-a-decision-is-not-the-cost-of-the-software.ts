import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const decisionCostPost: Article = {
  slug: "the-cost-of-a-decision-is-not-the-cost-of-the-software",
  title: "The cost of a decision is not the cost of the software",
  deck:
    "Licences are the easy line item. The real bill arrives in joins, rework, and being wrong.",
  category: "Perspectives",
  date: "14 October 2026",
  dateIso: "2026-10-14",
  readTime: readTime(1500),
  author,
  tags: ["Decision-making", "Cost", "Technology"],
  art: { label: "Perspectives", cells: ["Licence fees vs the full bill"], tone: "amber" },
  body: [
    p(
      "Business cases lead with licences. Seats, subscriptions, implementation days, support tiers. Finance can see them. Procurement can compare them. The room nods because numbers are on the slide. Then the decision ships and the organisation discovers a second invoice — one that never appeared in the business case because nobody priced joins, rework, or the cost of being wrong.",
    ),
    p(
      "Constrange reads technology decisions as economic choices under constraint. The software price is rarely the dominant cost. The dominant cost is what happens when the tool meets your definitions, your unofficial paths, your incentive structure, and your calendar. A cheap licence with expensive joins can outspend a premium platform that fits how work actually moves.",
    ),
    p(
      "Honest costing does not kill ambition. It prevents surprise. It forces the question leadership avoids when demos are bright: what will this decision cost us to operate, not just to buy?",
    ),
    h2("What procurement sees vs what operations pays"),
    p(
      "Procurement sees unit economics: per seat, per transaction, per environment. Operations pays reconciliation time, exception handling, training that never sticks, and the programme that exists because two systems never agreed what a customer is. The first is visible in year one. The second compounds quietly until someone asks why the transformation did not transform anything.",
    ),
    fig(
      "decision-cost-not-software.svg",
      "Small visible licence cost above a larger hidden layer of joins, rework, and wrong decisions",
      "The licence is the line item everyone argues about. The operating cost is what determines whether the decision was wise.",
    ),
    ul([
      "Integration: connectors, mappings, monitoring, and the team that maintains them",
      "Reconciliation: meetings and reports to make disagreeing systems look aligned",
      "Rework: manual bridges when the official path cannot carry exceptions",
      "Being wrong: sunk cost, reversal, parallel run, reputational damage",
      "Opportunity cost: attention diverted from the constraint that actually limits outcomes",
    ]),
    h2("Joins are where budgets go to die"),
    p(
      "Every system arrives with an implied promise: your data will flow. In practice, joins are where definitions collide. One team counts revenue at invoice. Another at cash. A third at contract signature. The new platform does not resolve the disagreement. It gives the disagreement a more expensive home.",
    ),
    p(
      "Integration partners quote connectors. They rarely quote the standing forum where sales and finance argue about what a customer is. That forum is a join cost. So is the analyst who maintains the mapping document everyone pretends is temporary. Joins are not one-off projects. They are ongoing negotiations about truth, billed as engineering.",
    ),
    {
      t: "table",
      caption: "Join costs that rarely appear in business cases",
      head: ["Join cost", "Who pays", "When it appears"],
      rows: [
        ["Field mapping maintenance", "IT / operations", "Month two"],
        ["Exception queues", "Frontline teams", "Week one"],
        ["Reconciliation meetings", "Leadership time", "Every quarter"],
        ["Shadow exports", "Analyst heroes", "Before go-live"],
        ["Vendor change requests", "Programme budget", "When reality arrives"],
      ],
    },
    p(
      "A join is not a technical task alone. It is a negotiation about truth. If that negotiation was skipped at decision time, the join tax is the price of the skipped conversation.",
    ),
    h2("Rework is the shadow bill"),
    p(
      "Rework is work the system should have removed but did not. Re-keying between tools. Copying from inbox to tracker. Building a spreadsheet because the workflow cannot model Tuesday. Rework feels like heroism. It is often evidence that the official path lost.",
    ),
    note(
      "If teams are busy after go-live doing the same manual bridges as before, you did not buy software. You bought another place for the work to hide.",
    ),
    p(
      "Rework is seductive because it ships. It does not require committee. It does not wait for integration backlog. It also does not scale, does not audit cleanly, and does not survive the person who invented it. The cost is continuity risk dressed as productivity.",
    ),
    h2("The cost of being wrong"),
    p(
      "Being wrong is the cost leadership least wants to model. Wrong platform. Wrong timing. Wrong scope. Wrong assumption that policy would change because technology arrived. Wrong belief that a vendor would own the operating model.",
    ),
    p(
      "Wrong decisions share a shape. The demo matched the happy path. The business case assumed adoption. The programme assumed definitions would align during implementation. Operations knew otherwise but was not in the room when the number was approved. Being wrong is expensive partly because reversal is politically harder than continuation.",
    ),
    h3("What wrong looks like in the ledger"),
    ol([
      "Parallel run: old and new systems both funded while confidence is low",
      "Reversal: write-off, contract exit, data migration back",
      "Programme extension: phases added because the first slice did not prove value",
      "Organisational fatigue: the next good idea meets scepticism earned honestly",
      "Trust loss: teams revert to unofficial paths because official ones failed publicly",
    ]),
    p(
      "Being wrong is not moral failure. It is often the result of pricing the easy number and ignoring the hard constraint. The antidote is not paralysis. It is smaller bets with clearer falsification: what would we see in ninety days if this decision were right?",
    ),
    h2("How to cost a decision honestly"),
    p(
      "Extend the business case beyond licence. Add a join line owned by someone who will still be there in year two. Add rework hours from the team that carries exceptions today. Add reversal cost — not to scare, but to make risk visible. Add opportunity cost: what will not get done while this programme runs?",
    ),
    p(
      "Honest costing is not pessimism. It is respect for operations. The teams who reconcile, re-key, and route around failure already know the number. They rarely see it on the investment slide. Bringing their hours into the case changes the conversation from 'can we afford the licence?' to 'can we afford the decision?'",
    ),
    {
      t: "table",
      caption: "Decision cost checklist",
      head: ["Question", "If the answer is vague…"],
      rows: [
        ["Who owns the join?", "Join tax will land on heroes"],
        ["What unofficial path dies?", "Rework will persist"],
        ["What definition must agree first?", "Reconciliation will multiply"],
        ["What will we stop?", "Sprawl will fund itself"],
        ["What proves value in ninety days?", "Wrong will stay hidden too long"],
      ],
    },
    quote(
      "The cost of a decision is the cost of operating the decision — including the work you hoped the software would make disappear.",
    ),
    h2("When the licence is actually the right number"),
    p(
      "Sometimes the licence is the dominant cost. Greenfield with agreed definitions. Single owner. Narrow scope. Replaceable vendor. Clear stop list. No load-bearing shadow. Those conditions exist. They are rarer than business cases imply.",
    ),
    p(
      "When conditions are favourable, move. When they are not, a smaller decision may beat a large one: fix one join, formalise one shadow, agree one definition — then reassess whether the platform decision still deserves its price.",
    ),
    h2("Patterns across programmes"),
    p(
      "In cost-focused estates, the licence wins the argument and the join wins the budget. In growth estates, speed wins the signature and rework wins the quarter. In regulated estates, compliance wins the deck and reconciliation wins the calendar. The pattern is stable: the visible number is not the number that determines success.",
    ),
    p(
      "Sector language changes. The structural move does not. Read total cost of decision as operating cost plus reversal risk, not subscription alone.",
    ),
    h2("A twelve-month costing discipline"),
    ol([
      "Quarter one: map joins on one critical object — owner, definitions, reconciliation hours.",
      "Quarter two: quantify rework on the same object — unofficial paths, manual bridges, hero dependency.",
      "Quarter three: run a ninety-day proof with falsification criteria before scaling spend.",
      "Quarter four: compare actual operating cost to business case; update the template for the next decision.",
    ]),
    p(
      "Twelve months is enough to show whether the organisation learns from decisions or only from vendors. If the next business case still lists licence alone, the discipline did not land.",
    ),
    p(
      "Constrange starts many readings at the business case and ends them in the unofficial path. The gap between those two places is usually where the real bill was hiding.",
    ),
    h2("Questions for your next investment committee"),
    ul([
      "What join must work for this decision to be worth it?",
      "Whose hours pay for reconciliation if definitions stay split?",
      "What rework continues after go-live — and who authorised it?",
      "What would we do in ninety days if this bet is wrong?",
      "What are we not funding because this programme exists?",
    ]),
    p(
      "If the room can answer the licence question but not the join question, the decision is not priced yet. It is merely purchased.",
    ),
    h2("The demo is not a cost model"),
    p(
      "Demos show the happy path. They rarely show the reconciliation meeting, the export that still runs nightly, or the field mapping that breaks when marketing launches a new product line. Treat the demo as a hypothesis about fit, not as proof that operating cost will shrink. Ask what happens on day fourteen, not day one.",
    ),
    p(
      "Vendors are not dishonest when they omit join cost. They often genuinely do not know your definitions, your unofficial paths, or your incentive structure. The organisation must supply that context — or accept that the business case is pricing someone else's firm.",
    ),
    p(
      "The organisations that price decisions well share one habit: they bring operations into the case before the signature, not after the surprise. Operations does not need to own the vendor choice. It needs to own the honesty of the operating line.",
    ),
    p(
      "Price the decision, not the licence. The licence is what procurement sees. The decision is what the organisation will live inside for years.",
    ),
    cta(
      "Comparing options but only seeing licence fees?",
      "Bring the business case and the stories operations tells. We will help you price the decision honestly — joins, rework, and being wrong included.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Should we always pick the cheaper licence?",
      "Only if operating cost is honestly comparable. A cheap tool with expensive joins is not cheap.",
    ],
    [
      "How do we estimate join cost?",
      "Start with one object, one path, one owner. Price the reconciliation you do today and assume it continues until definitions agree.",
    ],
    [
      "What if leadership will only approve licence spend?",
      "Pair a thin licence with a named join owner and a ninety-day proof. Hide operating cost and it returns as rework.",
    ],
    [
      "Is implementation the same as join cost?",
      "Implementation is the visible phase. Join cost is the ongoing tax when systems disagree about truth.",
    ],
  ],
}
