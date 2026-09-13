import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const processDocumentedPost: Article = {
  slug: "the-process-you-documented-is-not-the-process-you-run",
  title: "The process you documented is not the process you run",
  deck: "Why the official workflow and the lived workflow diverge — and what that gap costs.",
  category: "Perspectives",
  date: "5 October 2026",
  dateIso: "2026-10-05",
  readTime: readTime(1500),
  author,
  tags: ["Operations", "Process", "Documentation"],
  art: {
    label: "Perspectives",
    cells: ["The gap between the manual and Tuesday"],
    tone: "clay",
  },
  body: [
    p(
      "Every organisation has a process document. It lives in a wiki, a quality system, or a deck from a transformation programme. It shows boxes, decision points, and roles. It is what auditors see. It is what new hires are told exists. It is rarely what happens when volume spikes, a key person is on leave, or the system throws an error nobody trained for.",
    ),
    p(
      "The lived workflow is messier, faster, and more human. It routes through inboxes, side conversations, and spreadsheets that were never in scope. It absorbs exceptions the official model cannot represent. Constrange sees programmes that replatform the documented process while the real one continues unchanged — invisible, load-bearing, and surprised when go-live deletes a step people were using daily.",
    ),
    p(
      "The gap between documented and lived is not always non-compliance. Often it is adaptation. Teams learned what the official path could not carry and built bridges. The mature question is not 'why don't people follow the process?' but 'what does the lived process tell us about design, pressure, and risk?'",
    ),
    h2("Two processes, one organisation"),
    p(
      "The documented process is a statement of intent. It describes how work should move under ideal conditions: complete data, available systems, agreed definitions, and time to follow every control. The lived process is a statement of survival. It describes how work moves when those conditions are not met — which is most weeks.",
    ),
    fig(
      "process-documented-vs-run.svg",
      "Documented workflow above a divergent lived workflow with detours",
      "The official path is straight. The lived path bends around constraints the documentation never named.",
    ),
    ul([
      "Documented: linear, role-based, system-mediated",
      "Lived: branching, person-dependent, tool-agnostic",
      "Documented: updated at programme milestones",
      "Lived: updated before lunch when a client calls",
      "Documented: owned by process excellence",
      "Lived: owned by whoever keeps the quarter moving",
    ]),
    h2("Why the divergence is rational"),
    p(
      "Official processes are designed for control, audit, and consistency. Lived processes are designed for throughput, exceptions, and local judgement. When those goals conflict, lived wins because deadlines do not wait for governance cycles. The spreadsheet exists because the CRM field does not. The email approval exists because the workflow tool cannot model the exception. The verbal handoff exists because the integration was deprioritised three programmes ago.",
    ),
    {
      t: "table",
      caption: "Documented vs lived",
      head: ["Documented process", "Lived process"],
      rows: [
        ["Approved in committee", "Approved in inbox"],
        ["Exceptions escalate formally", "Exceptions route to a named expert"],
        ["Single system of record", "Reconciliation between three sources"],
        ["Updated on release calendar", "Updated when someone notices"],
        ["Assumes complete training", "Assumes someone remembers 2019"],
      ],
    },
    p(
      "The table is not an indictment of operations. It is a map of where design and reality diverged. Each row is a design decision deferred or a pressure unaddressed.",
    ),
    h2("What the gap costs"),
    p(
      "When leadership believes the documented process is what runs, planning is wrong. Migrations cut steps that were load-bearing in practice. Audits find paths that were never authorised. Incidents are blamed on human error when the error was following a lived path the organisation never acknowledged. Training teaches a fiction. New hires learn the real process from a colleague after six weeks of confusion.",
    ),
    note(
      "Your process maturity score is meaningless if the assessment mapped the wiki, not the Tuesday.",
    ),
    h3("Costs that compound quietly"),
    p(
      "Reconciliation time grows as lived paths multiply. Risk accumulates in unowned bridges. Transformation programmes repeat because each wave optimises the document without touching behaviour. Trust erodes between central teams who believe the process is followed and frontline teams who know it cannot be — not without the bridges they built.",
    ),
    h2("How divergence happens"),
    h3("Pressure without redesign"),
    p(
      "Volume increases. Headcount does not. The documented process assumes a step that takes ten minutes. In practice it takes forty. Nobody updates the document. Someone shortens the path. The shortcut becomes standard. The document still says ten minutes. Planning uses the document. Capacity plans are fiction.",
    ),
    h3("Systems that cannot model reality"),
    p(
      "The workflow tool handles eighty per cent of cases. Twenty per cent require judgement the tool cannot encode. Those cases become email, chat, or a side tab in a spreadsheet. Over time the twenty per cent is where the revenue, the risk, and the client relationship live. The documented process describes the eighty per cent. Leadership optimises the eighty per cent.",
    ),
    h3("Organisational memory in people"),
    p(
      "Steps exist because Sarah knows to check the legacy export before finance closes. Sarah is not in the RACI. Sarah is on holiday when the quarter goes wrong. The documented process has no slot for Sarah. The lived process had no backup for Sarah. This is not a training gap. It is a documentation gap that training cannot fix.",
    ),
    h2("Reading the lived process without blame"),
    ol([
      "Shadow a high-volume workflow for one week — not the training version, the actual path.",
      "Ask teams where they deviate and why, without framing deviation as failure.",
      "Compare incident and escalation stories to the documented escalation path.",
      "Inventory unofficial tools and inboxes that sit on the critical path.",
      "Treat findings as design requirements, not compliance violations on day one.",
    ]),
    p(
      "Discovery should answer: what is load-bearing, what is convenience, and what is a cry for help from an official path that does not work.",
    ),
    quote(
      "The process document describes what we agreed. The lived process describes what we depend on.",
    ),
    h2("Closing the gap deliberately"),
    h3("Formalise what is load-bearing"),
    p(
      "If the lived path carries revenue or risk, bring it into governance: owner, access, change control, and a decision on whether it stays or the official path must improve. Formalising is not endorsing shadow work forever. It is honesty before redesign.",
    ),
    h3("Fix the official path"),
    p(
      "Sometimes the lived process exists because the official one is slower, dumber, or misaligned with incentives. Fix the join, the exception model, or the measurement. Replace the bridge with a credible official route. This takes longer than documenting reality but is the only way to shrink divergence without breaking operations.",
    ),
    h3("Update the document honestly"),
    p(
      "If the lived process is wrong and must stop, say so with a transition plan — not a policy email. If the lived process is right and the document is wrong, update the document and fix controls to match. A document that nobody runs is not a process. It is wallpaper.",
    ),
    {
      t: "table",
      caption: "Choosing a response",
      head: ["If lived path…", "Consider"],
      rows: [
        ["Carries unique judgement", "Formalise with controls and succession"],
        ["Duplicates official steps", "Fix official path or retire duplicate"],
        ["Exists only for speed", "Fix incentives or simplify policy"],
        ["Bypasses a necessary control", "Redesign control into the real path"],
        ["Grew after last go-live", "Official tool misfit — adapt or replace"],
      ],
    },
    h2("Process documentation that matches reality"),
    p(
      "Good documentation describes two layers: the target state and the current lived state, with a named plan to close the gap. It names owners of joins, not only roles in boxes. It includes exception paths honestly. It is updated when behaviour changes, not only when programmes launch. It is written with operations, not only for auditors.",
    ),
    p(
      "Constrange starts many readings in the lived layer because that is where work actually moves. The process you documented is not the process you run — in almost every organisation we meet. The question is whether leadership sees the gap, measures its cost, and chooses to close it with design rather than denial.",
    ),
    h2("Process reviews that see both layers"),
    p(
      "Most process reviews assess the document: version control, control points, role clarity. Few assess behaviour: where teams deviate, how long steps actually take, which unofficial tools sit on the path. A review that only reads the wiki produces a green score and leaves the gap intact.",
    ),
    p(
      "Better reviews pair document and observation. Walk the path with someone who does the work weekly. Compare training materials to what veterans do. Ask where new hires get confused — confusion often marks the divergence point. Record both layers in the finding, not only the gap between them.",
    ),
    h2("When the lived process should stop"),
    p(
      "Not every adaptation deserves formalisation. Some exist because incentives reward speed over control. Some bypass necessary checks. Naming the lived process forces a choice: keep with governance, redesign the official path, or stop the behaviour with consequences and support. Leaving it unnamed is not neutral — it endorses the gap by default.",
    ),
    p(
      "Stopping a lived process without fixing the official one repeats the cycle. Teams will build a new bridge within weeks. Transition design must answer why the lived path existed and what the official path must carry before the bridge comes down.",
    ),
    h2("Documentation as a living artefact"),
    p(
      "Treat the process document as a living artefact with two versions: target and current. Review current against observation quarterly. Update target when strategy changes. Publish the gap between them with a named owner and timeline. Auditors see honesty. Operations sees respect. Programmes stop optimising fiction.",
    ),
    p(
      "Living documentation is not permission for chaos. It is permission to see chaos clearly enough to design it away.",
    ),
    h2("Questions for your next process review"),
    ul([
      "Where do teams deviate from the documented path every week?",
      "Which unofficial tool would break the quarter if it disappeared tomorrow?",
      "Who is the Sarah in this workflow — and what happens when they are unavailable?",
      "When was the document last updated based on observed behaviour, not a programme milestone?",
      "Does training match what experienced staff actually do?",
    ]),
    p(
      "If the room cannot answer, the lived process is running the review — and the document is not running the organisation.",
    ),
    cta(
      "Documented one process but suspect another is running?",
      "Bring the wiki and the stories from the floor. We will help you read the gap honestly.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Is divergence always non-compliance?",
      "Often it is adaptation. The question is whether the adaptation is load-bearing, risky, or fixable through better design.",
    ],
    [
      "Should we update the document to match reality?",
      "Yes, if the lived path is legitimate. If it is not, update the path with a transition plan — not the document alone.",
    ],
    [
      "How do we discover the lived process without blame?",
      "Shadow work, ask where people deviate and why, and treat answers as design input.",
    ],
    [
      "Will a new workflow tool fix the gap?",
      "Only if it carries the exceptions and joins the lived process protects. Otherwise divergence mutates.",
    ],
  ],
}
