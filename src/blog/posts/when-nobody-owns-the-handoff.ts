import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const nobodyOwnsHandoffPost: Article = {
  slug: "when-nobody-owns-the-handoff",
  title: "When nobody owns the handoff",
  deck: "Work does not fail at the centre of a team. It fails at the join.",
  category: "Perspectives",
  date: "11 October 2026",
  dateIso: "2026-10-11",
  readTime: readTime(1500),
  author,
  tags: ["Handoffs", "Ownership", "Operations"],
  art: {
    label: "Perspectives",
    cells: ["The gap between teams where work stalls"],
    tone: "tide",
  },
  body: [
    p(
      "Teams optimise inside their boundaries. Sales owns the pipeline. Operations owns fulfilment. Finance owns the close. Each function has dashboards, rituals, and heroes. Work moves quickly until it crosses a boundary — then it slows, disappears, or gets debated in a meeting with no decision rights. The handoff is where ownership thins. Nobody owns the join.",
    ),
    p(
      "Handoff failures look like communication problems. They are often design problems. The organisation drew boxes on a slide but did not assign a role for the space between boxes. Both sides believe their job ends at the boundary. Both sides are correct according to their local definition. The work sits in the gap.",
    ),
    p(
      "Constrange sees programmes that fund team improvements while the same object stalls for weeks at a handoff nobody named. Fixing the centre does not fix the join. Until someone owns the handoff — with time, authority, and a metric — the gap persists.",
    ),
    h2("What a handoff actually is"),
    p(
      "A handoff is not a meeting or an email. It is a transfer of accountability for an object: a customer record, a case, a number, a decision. It includes definition alignment, timing, exception handling, and feedback when something returns. When any of those are unclear, the handoff becomes a queue nobody manages — an inbox, a spreadsheet row, or a recurring escalation.",
    ),
    fig(
      "nobody-owns-handoff.svg",
      "Two teams with an unowned gap between them where work stalls",
      "Work stalls in the space between teams when nobody owns the join.",
    ),
    ul([
      "Sales marks won; operations discovers missing data days later",
      "Operations closes a case; finance finds billing still open",
      "Product ships a change; support learns from customers, not a briefing",
      "Compliance approves in principle; frontline still runs the old path",
      "IT marks integration done; operations still reconciles manually",
    ]),
    h2("Why handoffs go unowned"),
    p(
      "Ownership at boundaries is politically harder than ownership inside a function. Naming a handoff owner means naming who is accountable when both sides disagree. It also means funding time that does not sit neatly in either budget. Easier to leave the gap informal — until volume, audit, or a client complaint makes the cost visible.",
    ),
    {
      t: "table",
      caption: "Inside the team vs at the handoff",
      head: ["Inside the team", "At the handoff"],
      rows: [
        ["Clear manager", "Shared accountability — often none"],
        ["Defined process", "Tacit rules and workarounds"],
        ["Team metrics", "Gap measured only by delay complaints"],
        ["Funded capacity", "Absorbed by whoever cares most"],
        ["Retrospectives", "Blame across the boundary"],
      ],
    },
    p(
      "The table is why local improvement programmes disappoint. Each team gets better at their slice. The object still waits in the join.",
    ),
    h2("Symptoms nobody owns the handoff"),
    h3("The recurring escalation"),
    p(
      "The same issue appears in leadership forums every month with a new label. Sales says operations is slow. Operations says sales submits incomplete requests. Finance says nobody told them the definition changed. Each statement is locally true. Nobody owns fixing the join — only defending their side of it.",
    ),
    h3("The shadow queue"),
    p(
      "Work that should move through a system accumulates in an inbox, a channel, or a spreadsheet tab named 'waiting'. There is no SLA. There is no owner. There is only increasing anxiety before month-end or go-live. The shadow queue is proof the official handoff does not carry load.",
    ),
    h3("The hero bridge"),
    p(
      "One person — often senior, always tired — manually moves work across the boundary. They are not in the RACI. They are the RACI. When they are unavailable, the handoff fails entirely. Leadership may not know their name until they resign.",
    ),
    note(
      "If the only thing keeping a handoff working is one person's goodwill, you do not have a process. You have a risk.",
    ),
    h2("What unowned handoffs cost"),
    p(
      "Cycle time grows at boundaries while team-level metrics look healthy. Reconciliation work multiplies as each side maintains a partial truth. Client experience fractures at the seam. Transformation programmes automate inside boxes but leave manual bridges at joins — then wonder why end-to-end time did not improve.",
    ),
    quote(
      "Work does not fail because teams are incompetent. It fails because nobody was given the join.",
    ),
    h2("Designing ownership at the handoff"),
    h3("Name a join owner"),
    p(
      "Not a committee. A role with weekly hours, authority to resolve definition disputes, and a metric for time-in-join. The owner may sit in one function but must be accountable to end-to-end outcome, not only local KPIs.",
    ),
    h3("Define the object and the done state"),
    p(
      "What exactly transfers? In what format? With what fields complete? What does 'received' mean — seen, accepted, or processed? Ambiguity at the boundary creates rework loops that both sides experience as the other side's failure.",
    ),
    h3("Instrument the gap"),
    p(
      "Measure time between teams, not only time inside them. Count returns — how often work bounces back for missing information. Publish the metric where both sides see it. You cannot improve a handoff you do not measure.",
    ),
    ol([
      "Map the top five objects that cross team boundaries weekly.",
      "For each, name current owner of the join — if none, mark unowned.",
      "Define done state on both sides of the boundary in one page.",
      "Assign a join owner with hours and escalation path.",
      "Review time-in-join monthly until it stabilises or reveals a deeper design flaw.",
    ]),
    {
      t: "table",
      caption: "Weak vs strong handoff design",
      head: ["Weak", "Strong"],
      rows: [
        ["'Teams will collaborate'", "Named join owner with metric"],
        ["Handoff meeting", "Defined object and done state"],
        ["Email as transfer", "System or queue with SLA"],
        ["Escalate to leadership", "Owner resolves within agreed window"],
        ["Fix locally when it breaks", "Instrument and redesign the join"],
      ],
    },
    h2("When the handoff needs redesign, not an owner"),
    p(
      "Sometimes the join is broken by design: conflicting incentives, incompatible definitions, or a system that stops at the boundary. Naming an owner helps surface that truth. If the owner spends all their time reconciling, the join needs structural change — aligned definitions, integrated tooling, or simplified policy — not more heroics.",
    ),
    p(
      "Constrange works at the join because that is where programmes quietly fail. Centres of excellence inside teams are necessary. They are not sufficient. Until someone owns the handoff — or the handoff is redesigned so it does not need a human bridge — work will keep stalling where nobody was looking.",
    ),
    h2("Handoffs in transformation programmes"),
    p(
      "Programmes often fund automation inside teams while leaving joins manual. The CRM improves. Fulfilment improves. The object still waits three days between them because nobody funded the join. End-to-end metrics expose what team metrics hide. Without a join owner in programme scope, transformation optimises islands and leaves the archipelago.",
    ),
    p(
      "Go-live plans should list handoffs explicitly: object, done state, owner, SLA, exception path. If the plan names systems but not joins, operations will rebuild informal bridges before hypercare ends.",
    ),
    h3("Shadow handoffs"),
    p(
      "Shadow systems often exist to carry handoffs the official design ignored. The spreadsheet that reconciles sales and finance. The channel where operations asks sales for missing fields. These are handoff infrastructure without owners. Formalise or replace them when you name the join — do not assume they will vanish because the new tool went live.",
    ),
    h2("Incentives that punish the join"),
    p(
      "Local KPIs can make handoff ownership impossible. If sales is measured only on close and operations only on fulfilment time, neither side is rewarded for time-in-join. The join becomes someone else's problem — usually operations', usually unpaid. Aligning incentives does not require one metric for everyone. It requires at least one metric someone owns for the boundary.",
    ),
    p(
      "Steering forums that review only functional dashboards never see the join. Add time-in-join to the standard pack. Ask join owners to present returns and root causes. What gets reviewed gets resourced.",
    ),
    h2("A ninety-day handoff programme"),
    ol([
      "Week one to four: map top five joins; name current state and pain.",
      "Week five to eight: assign join owners; define done states; publish baseline time-in-join.",
      "Week nine to twelve: fix one structural blocker per join or accept risk explicitly.",
      "Review monthly until returns and wait time stabilise.",
    ]),
    p(
      "Ninety days is enough to prove whether the organisation will fund boundaries or only centres. If heroes are still the only bridge at day ninety, the join was never resourced — only discussed.",
    ),
    h2("When two teams both think they handed off"),
    p(
      "A common failure mode: Team A marks complete in their system. Team B never accepted ownership because their definition of received differs. Both report green. The object sits unowned. Fixing this requires a shared done state written in plain language — not two local definitions that almost align. Almost aligned definitions are how handoffs become queues.",
    ),
    p(
      "Test the done state with a new hire. If they cannot tell when the handoff is complete, the join is still undefined.",
    ),
    h2("Handoffs and shadow systems"),
    p(
      "Many shadow systems exist to carry handoffs nobody designed. The shared spreadsheet between sales and operations. The channel where exceptions get resolved. The manager who manually unblocks both sides. These are join infrastructure without owners. Naming the handoff often reveals why the shadow exists — and what must change before the shadow can shrink.",
    ),
    h2("Questions for your next operating review"),
    ul([
      "Which handoffs have no named owner today?",
      "Where does work wait longest — inside a team or between teams?",
      "Who is the hero bridge, and what happens when they are away?",
      "Do we measure time-in-join or only team-level throughput?",
      "Which escalations recur because the join was never designed?",
    ]),
    p(
      "If the answers stay vague, the handoff is still unowned — and the gap is still running your operating rhythm.",
    ),
    cta(
      "Teams work well but work still stalls between them?",
      "Bring the org chart and the escalation stories. We will help you design ownership at the join.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Is a handoff owner the same as a project manager?",
      "No. A join owner carries ongoing accountability for a boundary, not temporary coordination of a initiative.",
    ],
    [
      "What if both teams resist owning the join?",
      "That signals the join needs executive sponsorship or structural redesign — not another workshop.",
    ],
    [
      "How small should we start?",
      "One high-volume object, one boundary, one metric. Prove the join can be owned before scaling.",
    ],
    [
      "Can tooling fix an unowned handoff?",
      "Tooling helps when definitions align. Without ownership and done states, it moves the gap into a different inbox.",
    ],
  ],
}
