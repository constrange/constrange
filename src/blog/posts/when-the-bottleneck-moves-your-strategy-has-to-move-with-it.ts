import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const bottleneckMovesStrategyPost: Article = {
  slug: "when-the-bottleneck-moves-your-strategy-has-to-move-with-it",
  title: "When the bottleneck moves, your strategy has to move with it",
  deck:
    "Fix one constraint and another appears. Strategy that ignores the moving bottleneck is already stale.",
  category: "Perspectives",
  date: "26 January 2026",
  dateIso: "2026-01-26",
  readTime: readTime(1500),
  author,
  tags: ["Strategy", "Bottlenecks", "Change"],
  art: { label: "Perspectives", cells: ["Fix one constraint and another appears"], tone: "pine" },
  body: [
    p(
      "Every improvement programme names a bottleneck. Sometimes honestly: the legacy core, the manual handoff, the data definition nobody owns. Teams focus, fund, and celebrate when the constraint shifts. Then something else becomes the limit — often somewhere nobody was watching, because strategy still describes the old world.",
    ),
    p(
      "Bottlenecks move. That is not failure. It is how systems behave when load, policy, or design changes. What fails is strategy that treats the constraint as fixed: a slide from last year's workshop, a vendor roadmap anchored to a problem already solved, a KPI tree still optimising yesterday's queue.",
    ),
    p(
      "Constrange reads strategy as current only if it names today's constraint and what happens when this one clears. Otherwise leadership is steering by a map of where the traffic jam used to be.",
    ),
    h2("Why bottlenecks move after you fix one"),
    p(
      "Improvement increases flow until the next narrow point. Automating intake exposes review capacity. Standardising data exposes conflicting definitions downstream. Consolidating vendors exposes a join nobody integrated. The organisation did not get slower because the fix failed. The fix worked — and revealed the next limit.",
    ),
    fig(
      "bottleneck-moves-strategy.svg",
      "Flow diagram with constraint shifting from one stage to the next",
      "Strategy stuck on the old bottleneck optimises a queue that is no longer the limit.",
    ),
    ul([
      "Volume rises when upstream friction drops",
      "Policy becomes the limit when technology stops being the excuse",
      "Definitions surface when systems finally share a pipe",
      "Human judgement concentrates when routine work automates",
      "External parties become the limit when internal steps speed up",
    ]),
    h2("Strategy that ignores the move"),
    p(
      "Stale strategy shows up as familiar symptoms: programmes funded to fix problems that no longer top the queue; teams measured on metrics that improved while customer elapsed time flatlined; steering committees reviewing the same initiative while operations escalates a different pain.",
    ),
    {
      t: "table",
      caption: "Signs your strategy describes the old bottleneck",
      head: ["Signal", "What it usually means"],
      rows: [
        ["Hero team still firefighting but KPI green", "Constraint moved; metric did not"],
        ["Programme charter unchanged for eighteen months", "Reading not refreshed"],
        ["New pain has no sponsor", "Old pain still owns budget"],
        ["Vendor success story matches last year's problem", "Demo lagging reality"],
        ["End-to-end time flat despite local wins", "Join or downstream is now the limit"],
      ],
    },
    note(
      "Refreshing strategy is not admitting the last programme failed. It is admitting the system responded to it.",
    ),
    h2("Three moves when the constraint shifts"),
    h3("Re-read the chain"),
    p(
      "Walk one object again. Ask where it waits now. Compare to the last reading. The delta is your strategic update — not a new vision deck, a corrected constraint.",
    ),
    h3("Reallocate attention"),
    p(
      "Stop funding optimisation at the old limit unless regression is real. Move capacity — people, budget, political airtime — to the new queue. Partial reallocation reads as failure to teams still polishing a solved problem. That discomfort is the cost of moving with the bottleneck.",
    ),
    h3("Rewrite the next bet"),
    p(
      "The next initiative should name the current constraint explicitly and what becomes visible when it clears. If it cannot, the bet is nostalgia.",
    ),
    quote(
      "Fixing a bottleneck is not the end of strategy. It is the moment strategy must change target.",
    ),
    h2("Operating rhythm that tracks the moving constraint"),
    ol([
      "Quarterly: one end-to-end walk with operations, not only programme status.",
      "Monthly: compare top wait queue to last month's — name the shift.",
      "At every gate: ask whether the charter still addresses the limit.",
      "After every go-live: schedule a constraint review at thirty and ninety days.",
      "Publish the current bottleneck in plain language — one sentence, one owner.",
    ]),
    p(
      "Rhythm beats roadmap length. A twelve-page strategy that never updates is weaker than a one-page constraint note that changes when the queue moves.",
    ),
    h2("When the bottleneck is policy, not technology"),
    p(
      "Teams often discover the limit was never the system — it was approval layers, dual sign-off, regional exception rights, or a definition finance and operations never shared. Technology programmes cannot move that constraint alone. Strategy must switch from build to simplify: collapse steps, agree one definition, align incentives.",
    ),
    p(
      "Ignoring that switch produces another platform that arrives quickly at the same committee. The bottleneck moved from IT backlog to governance. Strategy should move with it.",
    ),
    h2("Strategy decks that fossilise"),
    p(
      "Strategy documents are written once and referenced for years. Bottlenecks move in weeks. The gap between the deck and the queue is where organisations lose credibility with operations. Teams stop telling leadership where work waits because the answer is never on the slide.",
    ),
    p(
      "A living constraint note beats a static roadmap: one sentence naming the current limit, one owner, one metric on queue age or handoff time, one programme adjustment this quarter. Vision can remain stable. Constraint language must update or strategy becomes folklore.",
    ),
    h2("Funding follows the old bottleneck"),
    p(
      "Budgets are sticky. A programme funded to fix intake automation may continue long after intake is no longer the limit — because the business case was approved, the vendor is contracted, and nobody wants to explain a pivot. Meanwhile review capacity starves because it was never the hero of the original narrative.",
    ),
    p(
      "Quarterly constraint reset is partly a funding exercise: what would we stop if we admitted the bottleneck moved? Stopping is harder than starting. It is also how organisations buy capacity at the new limit instead of decorating the old one.",
    ),
    h2("Local wins that hide global stagnation"),
    p(
      "Directors report improvement inside their boundary. The chief executive hears a mosaic of wins. Operations hears the same customer complaint with a faster prefix. The bottleneck moved; the narrative did not. Without a shared end-to-end measure, strategy meetings become a gallery of local victories while the organisation stays stuck.",
    ),
    p(
      "The fix is not more dashboards. It is one queue, one owner, one sentence in the strategy note that updates when the queue moves. Everything else is commentary.",
    ),
    h2("Transformation roadmaps and the moving constraint"),
    p(
      "Multi-year roadmaps often list phases as if bottlenecks were static: modernise core, then data, then channels. In practice, fixing phase one reshapes where phase two should aim. Roadmaps that cannot reorder without embarrassment become anchors — not guides.",
    ),
    p(
      "Healthy roadmaps name assumptions: 'phase two assumes review capacity is funded after intake automation.' When the assumption breaks, the roadmap updates. Unhealthy roadmaps treat delay as failure rather than as signal that the constraint moved.",
    ),
    h2("Patterns across sectors"),
    p(
      "In retail, faster checkout exposes fulfilment and returns capacity. In insurance, faster quote exposes underwriting judgement and fraud review. In public services, faster digital submission exposes caseworker pools sized for paper. The technology change succeeded. The strategic picture did not update.",
    ),
    p(
      "Constrange does not sell a theory of constraints workshop. It sells the habit of asking, after every win, where work waits now — and whether the budget and narrative moved with the queue.",
    ),
    h2("Communicating the move without resetting the vision"),
    p(
      "Leaders fear that admitting a moved bottleneck invalidates the last year's narrative. In practice, teams already know the queue shifted. Naming it builds credibility. Pretending the old constraint still rules destroys it.",
    ),
    p(
      "Update one slide, not twelve: current bottleneck, owner, next bet, what we stopped funding. Vision can stay stable while constraint language stays honest.",
    ),
    h2("When the moving bottleneck is talent"),
    p(
      "Automating routine work often concentrates judgement in fewer people — senior underwriters, exception leads, integration specialists. The bottleneck moves from transaction volume to expert availability. Strategy that still funds only the automation layer misses the new limit.",
    ),
    p(
      "Read skill concentration as a constraint with the same seriousness as server capacity. Otherwise the organisation speeds up into a human queue nobody planned for.",
    ),
    h2("A quarterly constraint reset"),
    ol([
      "Name the top queue by volume and by age.",
      "Compare to last quarter — did the limit move?",
      "List programmes still targeting the old limit.",
      "Reassign one sponsor or budget line to the new queue.",
      "Communicate the move in one sentence to the organisation.",
    ]),
    p(
      "Quarterly reset prevents strategy from fossilising around solved problems. It is cheaper than another year of local wins and flat outcomes.",
    ),
    h2("Questions for your next strategy session"),
    ul([
      "Where does work wait today — not last year?",
      "What programme exists because the old constraint was real?",
      "Which metric improved while outcomes did not?",
      "Who owns the join that is now the limit?",
      "What would we stop if we admitted the bottleneck moved?",
    ]),
    p(
      "If the session answers with last year's diagnosis, strategy is already stale — however confident the room sounds.",
    ),
    p(
      "Strategy that tracks the moving bottleneck is not reactive. It is honest. The queue moved because you fixed something. Honour that fix by funding what waits now — not by rehearsing last year's war.",
    ),
    h2("The one-sentence constraint update"),
    p(
      "Every quarter, leadership should be able to say in one sentence where work waits today, who owns that wait, and what programme adjustment follows. If the sentence is the same as last quarter while operations reports a different queue, strategy has detached from reality.",
    ),
    p(
      "Fixing a bottleneck is a success. Pretending it is still the limit is how organisations fund the wrong programme for another year.",
    ),
    p(
      "Ask operations where work waits this week — not where the strategy deck says it waits. The answer is usually more current than the slide.",
    ),
    cta(
      "Local wins but the organisation still feels stuck?",
      "Read the chain with us and name where the bottleneck moved. Strategy should follow.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "How often should we refresh the constraint reading?",
      "At least quarterly for high-volume paths; after every major go-live at thirty and ninety days.",
    ],
    [
      "Does a moving bottleneck mean the last programme wasted money?",
      "Not necessarily. It often means the programme did its job and revealed the next limit.",
    ],
    [
      "Can one person own a moving bottleneck?",
      "One owner, yes — but they need authority across the join, not only inside one team.",
    ],
    [
      "What if leadership keeps funding the old problem?",
      "Escalate with end-to-end evidence. Queues do not lie; stale slides do.",
    ],
  ],
}
