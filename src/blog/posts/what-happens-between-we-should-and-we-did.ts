import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const weShouldAndWeDidPost: Article = {
  slug: "what-happens-between-we-should-and-we-did",
  title: 'What happens between "we should" and "we did"',
  deck: "Why good strategies repeatedly fail during the transition from decision to execution.",
  category: "Perspectives",
  date: "16 September 2026",
  dateIso: "2026-09-16",
  readTime: readTime(2000),
  author,
  tags: ["Strategy", "Execution", "Change"],
  art: { label: "Perspectives", cells: ["From agreed strategy to stalled execution"], tone: "amber" },
  body: [
    p(
      "The strategy offsite produces alignment. Priorities are ranked. Slides circulate. Everyone nods. Weeks pass. The same bottlenecks appear in status meetings with new labels. The work that should have stopped is still funded. The join that should have moved first is still waiting for a platform decision. Between 'we should' and 'we did' lies a gap that slides rarely describe.",
    ),
    p(
      "Execution failure is often blamed on culture, resistance, or capacity. Those matter. So does design: strategies that do not name owners, stops, and first moves are decisions without transitions. Constrange sees excellent direction die in the gap because nobody translated agreement into sequence under real constraints.",
    ),
    p(
      "Closing the gap is not motivation work alone. It is operational design: who moves first, what gets cut, what the unofficial path will do when pressure returns, and how you will know the first slice worked.",
    ),
    h2("What the gap actually contains"),
    p(
      "The gap is not empty time. It is filled with competing programmes, half-owned initiatives, and local optimisation. Each team interprets the strategy through their backlog. Urgent replaces important. The unofficial path absorbs variance because the official path was never resourced to change.",
    ),
    fig(
      "we-should-and-we-did.svg",
      "Diagram of the gap between strategic agreement and execution",
      "Strategy without a transition plan leaves ownership, capacity, and unofficial paths unaddressed.",
    ),
    ul([
      "No named first move small enough to finish",
      "No stop list — everything remains theoretically important",
      "Owners are committees, not roles with hours",
      "Success metrics lag or measure activity",
      "Unofficial workarounds treated as temporary forever",
    ]),
    h2("Why good strategies stall"),
    p(
      "Good strategies are often directionally right and operationally incomplete. They say what matters. They do not say what will not be done. They imply capacity that does not exist. They assume joins will be fixed by a future tool.",
    ),
    {
      t: "table",
      caption: "Agreement vs transition",
      head: ["In the room", "In the gap"],
      rows: [
        ["We should prioritise X", "X competes with last year's Y still funded"],
        ["We need one view of the customer", "Three definitions remain in production"],
        ["We will simplify intake", "Intake team still measured on volume"],
        ["We should adopt AI carefully", "Three pilots start without owners"],
        ["We must reduce risk", "Shadow processes still load-bearing"],
      ],
    },
    p(
      "The table is uncomfortable because it is familiar. Transition design closes each row with a move, an owner, and a stop.",
    ),
    h2("The unofficial path wins by default"),
    p(
      "When official change is slow, improvisation carries the quarter. Spreadsheets, inboxes, side conversations. Leadership may not see them. Operations depends on them. Any strategy that ignores the shadow system competes against it and loses.",
    ),
    p(
      "Transition plans must include the shadow: either absorb it formally, replace it with something credible, or remove the pressure that created it. Pretending it will vanish at go-live is how strategies fail quietly.",
    ),
    note(
      "If the unofficial path is faster than the official one, your strategy is not competing with last year's tool. It is competing with Tuesday.",
    ),
    h2("Designing a transition that fits"),
    h3("Elements every transition needs"),
    ol([
      "First slice: one team, one workflow, one measure — finishable in weeks, not quarters.",
      "Stop list: programmes or reports that lose funding or attention now.",
      "Owner map: named roles with weekly hours, not working groups.",
      "Join plan: the handoff that must work before scale.",
      "Reopen conditions: what signal triggers a strategy review.",
    ]),
    p(
      "Without a stop list, strategy is additive. Organisations do not have additive capacity. Something must lose air cover.",
    ),
    {
      t: "table",
      caption: "Weak vs strong transition artefacts",
      head: ["Weak", "Strong"],
      rows: [
        ["Roadmap slide", "First slice charter with owner"],
        ["Transformation office", "Named role accountable for one join"],
        ["Change network", "Weekly metric on the slice"],
        ["Communications plan", "Published stop list"],
        ["Future state architecture", "Manual fix pilot results"],
      ],
    },
    h2("Leadership behaviours that close the gap"),
    p(
      "Ask what stopped this week. Ask which meeting was cancelled because the slice made it redundant. Ask who said no to a new request. Celebrate finished thin slices more than announced large programmes.",
    ),
    p(
      "When leadership only rewards new starts, the gap becomes permanent. Execution is the discipline of finishing and stopping, not the art of another kickoff.",
    ),
    quote(
      "Strategy is what you should do. Execution is what you stopped doing so it could happen.",
    ),
    h2("When the strategy itself must change"),
    p(
      "Sometimes the gap reveals a wrong priority. Pilot honestly. If the slice does not move the measure, the strategy may be elegant and irrelevant. Reopen with data, not embarrassment.",
    ),
    p(
      "Constrange works in the gap: turning agreed direction into a sequence operations can absorb. The distance between 'we should' and 'we did' is not bridged by slides. It is bridged by owners, stops, and a first move small enough to be real.",
    ),
    h2("Weekly rituals that close the gap"),
    ul([
      "Review stop list adherence, not only green milestones.",
      "Ask which unofficial path grew this week.",
      "Track hours on the first slice, not slide count.",
      "Escalate join failures within days, not quarters.",
      "Celebrate retired meetings and reports.",
    ]),
    p(
      "Rituals encode values. If forums only reward starts, the gap persists.",
    ),
    h2("When the strategy should shrink"),
    p(
      "Sometimes execution fails because the strategy was too broad. Shrinking is not defeat. It is honesty. Pick one customer journey, one cost line, one risk — finish, then expand.",
    ),
    p(
      "Organisations that cannot shrink strategy cannot execute strategy. They can only announce it.",
    ),
    cta(
      "Aligned on direction but stuck in execution?",
      "Bring the strategy and the backlog. We will help you design the transition, not another deck.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Is the gap always a capacity problem?",
      "Often it is a priority and stop problem. Capacity without stops just spreads thinner.",
    ],
    [
      "How small should a first slice be?",
      "Small enough that one owner can defend it in a weekly forum and finish it without migrating the whole estate.",
    ],
    [
      "What if sponsors disagree on stops?",
      "Then the strategy is not agreed. Resolve stops before funding more build.",
    ],
    [
      "Do we need a PMO?",
      "You need named owners and a stop list. A PMO without those becomes reporting theatre.",
    ],
  ],
}
