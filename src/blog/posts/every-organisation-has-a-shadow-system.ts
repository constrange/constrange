import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const shadowSystemPost: Article = {
  slug: "every-organisation-has-a-shadow-system",
  title: "Every organisation has a shadow system",
  deck:
    'The unofficial spreadsheets, emails, workarounds and human processes keeping the "official" system alive.',
  category: "Perspectives",
  date: "21 September 2026",
  dateIso: "2026-09-21",
  readTime: readTime(2000),
  author,
  tags: ["Shadow IT", "Operations", "Workarounds"],
  art: { label: "Perspectives", cells: ["The spreadsheet that actually runs the work"], tone: "tide" },
  body: [
    p(
      "Official systems have logos, login screens, and audit trails. Shadow systems have tabs, inboxes, and memory. They are not always rogue. Often they are how the organisation actually ships the quarter: the forecast model finance trusts, the tracker operations updates hourly, the email thread where approvals really happen.",
    ),
    p(
      "Leadership talks about the ERP, the CRM, the data platform. Operations talks about 'the sheet' and 'the way we do it when the system is down'. Both conversations are true. Constrange treats shadow systems as diagnostic, not shameful. They show where official design does not match reality.",
    ),
    p(
      "Ignoring them produces replatforming surprises. Demonising them produces hiding. The mature move is to read them, decide what they protect, and choose: formalise, replace, or remove the pressure that created them.",
    ),
    h2("What counts as a shadow system"),
    p(
      "Spreadsheets with write access shared across teams. Email as workflow. Chat channels as queues. Personal databases. Printed forms. Verbal handoffs. Side integrations built by an analyst years ago. Each carries load the official stack does not.",
    ),
    fig(
      "/blog/figures/shadow-system.svg",
      "Official system above a dashed shadow layer of spreadsheets and inboxes",
      "The shadow layer often carries the work the official system was supposed to own.",
    ),
    ul([
      "Higher change velocity than IT can match",
      "Exceptions the official tool cannot model",
      "Definitions the enterprise never agreed",
      "Political safety — shadow avoids visible failure in the system of record",
      "Skill concentration — one expert maintains the real logic",
    ]),
    h2("Why shadow systems are rational"),
    p(
      "They emerge when official tools are slow, rigid, or misaligned with incentives. They reward local speed. They absorb variance. They are maintained because removing them without replacing function would stop revenue or breach trust.",
    ),
    {
      t: "table",
      caption: "Official vs shadow",
      head: ["Official system", "Shadow system"],
      rows: [
        ["Auditable", "Fast"],
        ["Standardised", "Locally optimised"],
        ["Funded centrally", "Maintained by heroes"],
        ["Upgrade on IT calendar", "Change before lunch"],
        ["Designed for compliance", "Designed for Tuesday"],
      ],
    },
    p(
      "The table explains persistence, not virtue. Shadow is a signal, not a strategy.",
    ),
    h2("Risks of leaving shadow unnamed"),
    p(
      "Continuity risk when the maintainer leaves. Quality risk from untested formulas. Compliance risk when auditors find the real path. Security risk from unmanaged access. Programme risk when migration cuts the shadow without replacing its function.",
    ),
    note(
      "Your go-live plan is wrong if it assumes the shadow will disappear because policy says so.",
    ),
    h2("Three responses to shadow"),
    h3("Formalise"),
    p(
      "Bring the shadow into governance: owner, access control, change log, defined retirement of duplicates. Appropriate when the shadow is load-bearing and honest.",
    ),
    h3("Replace"),
    p(
      "Fix the official path until it is faster or simpler than the shadow. Requires definition work and political will. Not a vendor checkbox.",
    ),
    h3("Remove pressure"),
    p(
      "Stop measuring conflicting outcomes. Collapse approval layers. Agree one definition. Sometimes shadow exists because the organisation asks for impossible speed and perfect audit simultaneously.",
    ),
    {
      t: "table",
      caption: "Choosing a response",
      head: ["If shadow…", "Consider"],
      rows: [
        ["Encodes unique judgement", "Formalise with controls"],
        ["Duplicates official data", "Replace official path or retire shadow"],
        ["Exists only for speed", "Fix incentives or simplify policy"],
        ["Maintained by one expert", "Document and duplicate skill urgently"],
        ["Grows after every go-live", "Official tool misfit — adapt or replace"],
      ],
    },
    h2("Discovery without a witch hunt"),
    ol([
      "Ask teams what they check before they trust the official number.",
      "Follow one high-volume object for a week.",
      "Inventory exports that leave systems of record.",
      "Review incident stories for recurring manual bridges.",
      "Treat findings as design input, not compliance violations on day one.",
    ]),
    quote(
      "The shadow system is not the enemy of the official system. It is the proof of where the official system failed to carry the work.",
    ),
    h2("Shadow and transformation programmes"),
    p(
      "Programmes that mandate 'no spreadsheets' without replacing function fail quietly. Programmes that map shadow early can sequence: formalise the load-bearing sheet while fixing the join, then narrow scope of the official tool until shadow naturally shrinks.",
    ),
    p(
      "Constrange starts many readings in the shadow layer because that is where truth lives. Every organisation has a shadow system. The question is whether leadership sees it, names it, and chooses what to do — before a migration deletes infrastructure nobody knew was infrastructure.",
    ),
    h2("Patterns we see across sectors"),
    p(
      "In regulated environments, shadow often carries judgement the official tool cannot encode: exceptions, overrides, client-specific terms. In high-growth firms, shadow carries speed: a tracker updated before the CRM field exists. In cost-focused programmes, shadow carries reconciliation between systems that were never integrated honestly.",
    ),
    p(
      "The pattern is stable even when the tools differ. Official promises control. Shadow carries the gap between policy and Tuesday. Naming that gap is the beginning of design.",
    ),
    p(
      "Sector language changes. The structural move does not: read shadow as requirements written in behaviour, not in a backlog.",
    ),
    h2("A twelve-month shadow programme"),
    ol([
      "Quarter one: map top five load-bearing unofficial paths without blame.",
      "Quarter two: formalise or replace the highest-risk path; name owner.",
      "Quarter three: fix one official join that made shadow rational.",
      "Quarter four: retire one duplicate; measure reconciliation time saved.",
    ]),
    p(
      "Twelve months is enough to show whether leadership will enforce change without a new logo. If shadow grows during the programme, the official path is still losing.",
    ),
    h2("Questions for your next steering meeting"),
    ul([
      "Which number do we act on when systems disagree?",
      "Who maintains the spreadsheet finance trusts?",
      "What breaks if that person is unavailable for two weeks?",
      "Which approval happens only in email?",
      "What did the last migration assume would stop that did not?",
    ]),
    p(
      "If the room cannot answer, shadow is running the steering meeting — not because people are disobedient, but because the official story is incomplete.",
    ),
    cta(
      "Planning change but unsure what really runs today?",
      "Bring the official architecture and the stories operations tells. We will help you read the shadow honestly.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Should we ban spreadsheets?",
      "Banning without replacing function drives hiding. Govern or eliminate need instead.",
    ],
    [
      "Is shadow IT always bad?",
      "It is always signal. Sometimes it is also risk. Read which.",
    ],
    [
      "How do we formalise without slowing teams?",
      "Start with owner, access, and change control on the one sheet that matters most.",
    ],
    [
      "Will a new platform remove shadow work?",
      "Only if it removes the pressure that created shadow. Otherwise shadow mutates.",
    ],
  ],
}
