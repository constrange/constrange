import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const workaroundIsEvidencePost: Article = {
  slug: "the-workaround-is-evidence",
  title: "The workaround is evidence",
  deck:
    "Teams do not invent unofficial paths for fun. They invent them because the official path failed.",
  category: "Perspectives",
  date: "17 October 2026",
  dateIso: "2026-10-17",
  readTime: readTime(1500),
  author,
  tags: ["Workarounds", "Operations", "Design"],
  art: { label: "Perspectives", cells: ["Unofficial paths are requirements written in behaviour"], tone: "moss" },
  body: [
    p(
      "Every organisation has a workaround. The tracker updated before the CRM field exists. The approval that happens in email because the workflow cannot model the exception. The export that leaves the system of record because the report is wrong but fast. Leadership calls these habits, shortcuts, or shadow behaviour. Operations calls them Tuesday.",
    ),
    p(
      "Constrange treats workarounds as evidence, not disobedience. They show where official design does not match reality: where speed conflicts with audit, where definitions split, where the tool was built for a process the organisation no longer runs. Reading workarounds well is one of the fastest ways to see what a transformation must actually carry.",
    ),
    p(
      "Demonising workarounds produces hiding. Ignoring them produces go-live surprises. The mature move is to ask what pressure created the path — and whether the organisation is willing to remove that pressure or formalise the function the workaround serves.",
    ),
    h2("What counts as a workaround"),
    p(
      "A workaround is any unofficial path that carries work the official stack was supposed to own. It includes spreadsheets, inboxes, chat channels, verbal handoffs, side integrations, and printed forms. It also includes official tools used unofficially: the CRM field everyone knows is wrong but fills anyway because the alternative is slower.",
    ),
    fig(
      "workaround-is-evidence.svg",
      "Blocked official path beside a flowing unofficial workaround route",
      "The workaround is not chaos. It is a requirements document written under pressure.",
    ),
    ul([
      "Higher velocity than the official change process allows",
      "Exceptions the workflow engine cannot encode",
      "Definitions the enterprise never agreed",
      "Political safety — failure is invisible in the system of record",
      "Skill concentration — one person maintains the real logic",
    ]),
    h2("Why workarounds are rational"),
    p(
      "Teams do not wake up wanting shadow systems. They wake up with deadlines, clients, auditors, and incentives that reward shipping. When the official path is slow, rigid, or wrong, the unofficial path is rational. It absorbs variance. It preserves relationships. It keeps revenue moving.",
    ),
    p(
      "Workarounds emerge when official tools are slow, rigid, or misaligned with incentives. They reward local speed. They are maintained because removing them without replacing function would stop revenue or breach trust. The organisation often knows the workaround exists. It prefers not to name it until a migration forces the conversation.",
    ),
    {
      t: "table",
      caption: "Official path vs workaround",
      head: ["Official path", "Workaround"],
      rows: [
        ["Auditable", "Fast"],
        ["Standardised", "Locally optimised"],
        ["Funded centrally", "Maintained by heroes"],
        ["Upgrade on IT calendar", "Change before lunch"],
        ["Designed for compliance", "Designed for the exception"],
      ],
    },
    p(
      "The table explains persistence, not virtue. A workaround is a signal that the official path lost a contest operations could not afford to lose.",
    ),
    h2("Reading workarounds without blame"),
    p(
      "Discovery fails when it sounds like compliance enforcement on day one. Teams hide what keeps them employed. The better frame is design research: show us how work actually moves when the system is down, when the client is unusual, when the quarter is closing.",
    ),
    p(
      "Blame produces theatre. Evidence produces design. When leadership names the workaround without punishing the maintainer, teams will show you the load-bearing paths. When leadership treats every unofficial route as disobedience, you will get a cleaner audit story and a less honest map.",
    ),
    ol([
      "Follow one high-volume object for a week — order, case, claim, candidate.",
      "Ask what people check before they trust the official number.",
      "Inventory exports that leave systems of record.",
      "Listen for phrases: 'the real one', 'what we use', 'when it matters'.",
      "Treat findings as requirements, not violations.",
    ]),
    note(
      "If your discovery process cannot be described without the word 'non-compliant', you will only find the workarounds people are willing to admit.",
    ),
    h2("Three responses to evidence"),
    h3("Formalise"),
    p(
      "Bring the workaround into governance: owner, access control, change log, defined retirement of duplicates. Appropriate when the workaround is load-bearing and honest — when it encodes judgement the official tool cannot replace quickly.",
    ),
    h3("Replace"),
    p(
      "Fix the official path until it is faster or simpler than the workaround. Requires definition work, integration honesty, and political will. Not a vendor checkbox.",
    ),
    h3("Remove pressure"),
    p(
      "Sometimes the workaround exists because the organisation asks for impossible speed and perfect audit simultaneously. Collapse approval layers. Agree one definition. Stop measuring conflicting outcomes. Remove the pressure and the workaround may shrink without a fight.",
    ),
    {
      t: "table",
      caption: "Choosing a response",
      head: ["If the workaround…", "Consider"],
      rows: [
        ["Encodes unique judgement", "Formalise with controls"],
        ["Duplicates official data", "Replace official path or retire duplicate"],
        ["Exists only for speed", "Fix incentives or simplify policy"],
        ["Maintained by one expert", "Document and duplicate skill urgently"],
        ["Grows after every go-live", "Official tool misfit — adapt or replace"],
      ],
    },
    h2("Workarounds and transformation programmes"),
    p(
      "Programmes that mandate 'no spreadsheets' without replacing function fail quietly. The workaround mutates. It moves to inbox. It moves to chat. It moves to a personal database with a friendlier name.",
    ),
    p(
      "Programmes that map workarounds early can sequence: formalise the load-bearing path while fixing the join, then narrow official scope until unofficial volume naturally falls. The goal is not purity. The goal is honest load-bearing design.",
    ),
    h2("Patterns we see across sectors"),
    p(
      "In regulated environments, workarounds often carry judgement the official tool cannot encode: exceptions, overrides, client-specific terms. In high-growth firms, workarounds carry speed: a tracker updated before the CRM field exists. In cost-focused programmes, workarounds carry reconciliation between systems that were never integrated honestly.",
    ),
    p(
      "The pattern is stable even when the tools differ. Official promises control. Workarounds carry the gap between policy and Tuesday. Naming that gap is the beginning of design.",
    ),
    p(
      "Sector language changes. The structural move does not: read workarounds as requirements written in behaviour, not in a backlog.",
    ),
    quote(
      "The workaround is not the enemy of the official system. It is the proof of where the official system failed to carry the work.",
    ),
    h2("Discovery without a witch hunt"),
    p(
      "The best discovery sounds like design research, not audit. Ask teams what they check before they trust the official number. Follow one object for a week. Review incident stories for recurring manual bridges. Treat findings as input to the programme, not as violations to punish on day one.",
    ),
    p(
      "If discovery requires people to admit what keeps them employed, you will only hear the workarounds they are willing to sacrifice. Read evidence where work already flows.",
    ),
    h2("When leadership misreads the evidence"),
    p(
      "The common failure is to see a workaround and respond with training. Training does not fix a path that is slower than the deadline. It does not fix a definition split between finance and operations. It does not fix a rule that forbids the official route. Training is appropriate when people do not know the official path. It is theatre when they know it and avoid it on purpose.",
    ),
    p(
      "The second failure is to see a workaround and respond with a bigger platform. If the pressure that created the path remains — conflicting metrics, approval layers, split definitions — the new platform will grow its own unofficial layer within a quarter. Evidence without triage becomes another migration that deletes infrastructure nobody knew was load-bearing.",
    ),
    p(
      "The mature response is triage in public: this path is load-bearing and we will formalise it; this path is duplicate and we will retire it; this path exists because policy has not caught up and we will fix policy first. Public triage builds trust. Secret mandates build shadow.",
    ),
    h2("Risks of misreading evidence"),
    p(
      "Treating workarounds as laziness produces hiding and continuity risk. Treating every workaround as sacred produces sprawl. The discipline is triage: which paths are load-bearing, which are duplicate, which exist only because policy has not caught up with reality?",
    ),
    ul([
      "Continuity risk when the maintainer leaves",
      "Quality risk from untested logic",
      "Compliance risk when auditors find the real path",
      "Security risk from unmanaged access",
      "Programme risk when migration deletes infrastructure nobody knew was infrastructure",
    ]),
    h2("A ninety-day reading programme"),
    ol([
      "Month one: map the top five unofficial paths without blame — names, owners, triggers.",
      "Month two: classify each path — formalise, replace, or remove pressure.",
      "Month three: execute one move on the highest-risk path; measure reconciliation time or error rate.",
    ]),
    p(
      "Ninety days is enough to show whether leadership will change the official path or only rename the workaround. If unofficial volume grows during the programme, the official path is still losing.",
    ),
    h2("Questions for your next operating review"),
    ul([
      "Which number do we act on when systems disagree?",
      "What breaks if the maintainer of the real tracker is unavailable for two weeks?",
      "Which approval happens only in email?",
      "What did the last migration assume would stop that did not?",
      "Which workaround would we formalise if we were honest about load?",
    ]),
    p(
      "If the room cannot answer, the workaround is running the review — not because people are disobedient, but because the official story is incomplete.",
    ),
    p(
      "Constrange treats workaround discovery as the fastest requirements process most organisations already have — written in behaviour, not in a backlog. Read it before you fund the next platform.",
    ),
    p(
      "The workaround is not a moral failure. It is evidence that the official path lost a contest operations could not afford to lose. Design from that evidence, or fund the same surprise again.",
    ),
    p(
      "Read the workaround before you read the roadmap. The roadmap shows what leadership hopes will run. The workaround shows what already does.",
    ),
    cta(
      "Planning change but unsure what really runs today?",
      "Bring the official architecture and the paths operations actually uses. We will help you read workarounds as evidence — and choose what to formalise, replace, or retire.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Should we ban workarounds?",
      "Banning without replacing function drives hiding. Govern or eliminate need instead.",
    ],
    [
      "Is every workaround worth formalising?",
      "No. Triage for load-bearing paths and duplicate data risk. Some should be replaced, not blessed.",
    ],
    [
      "How do we formalise without slowing teams?",
      "Start with owner, access, and change control on the one path that matters most.",
    ],
    [
      "Will a new platform remove workarounds?",
      "Only if it removes the pressure that created them. Otherwise they mutate.",
    ],
  ],
}
