export type Product = {
  slug: string
  name: string
  short: string
  blurb: string
  chips: string[]
  capabilities: [string, string][]
  useCases: string[]
  price: string
}

export const products: Product[] = [
  {
    slug: "strategy",
    name: "Business & technology strategy",
    short: "Strategy",
    blurb:
      "Where business priorities and technology decisions should actually connect — before a stack is chosen.",
    chips: ["Priorities", "Constraints", "Trade-offs"],
    capabilities: [
      ["Problem framing", "Separate the stated request from the underlying operating issue."],
      ["Priority mapping", "Show what should move first, and what can wait without damage."],
      ["Constraint reading", "Work with systems, people, budget, and risk as they actually are."],
      ["Option quality", "Compare approaches on fit, not on novelty."],
      ["Decision support", "Give leaders a clear recommendation they can stand behind."],
      ["Scope discipline", "Keep the work small enough to execute."],
    ],
    useCases: [
      "Conflicting digital programmes",
      "Board-level technology choices",
      "Post-merger system overlap",
      "Where to place AI, if at all",
    ],
    price: "Clarity first",
  },
  {
    slug: "ai-automation",
    name: "AI & automation opportunity",
    short: "AI & automation",
    blurb:
      "Practical uses of AI and automation — identified against the work, not against the hype.",
    chips: ["Fit", "Process", "Judgement"],
    capabilities: [
      ["Opportunity scan", "Find work that is repetitive, costly, or error-prone enough to change."],
      ["Necessity test", "Ask whether AI is required, or whether a simpler change would do."],
      ["Data reality", "Check whether the organisation can actually feed a useful system."],
      ["Risk reading", "Name the failure modes before a pilot is funded."],
      ["Pilot design", "Shape a first step that can prove or disprove the case."],
      ["Build vs buy", "Decide what to adopt, what to assemble, and what to leave alone."],
    ],
    useCases: [
      "Automation that stalled after a pilot",
      "AI proposals without a problem statement",
      "Manual work hidden in spreadsheets",
      "Customer operations under volume pressure",
    ],
    price: "Only if it fits",
  },
  {
    slug: "systems-operations",
    name: "Process & system design",
    short: "Systems & operations",
    blurb:
      "Disconnected processes and overlapping tools, made into a way of working that people can actually follow.",
    chips: ["Handoffs", "Systems", "Work"],
    capabilities: [
      ["Work mapping", "See how a request actually moves through the organisation."],
      ["Break-point finding", "Locate delay, rework, and silent workarounds."],
      ["System landscape", "Name what is connected, duplicated, or ignored."],
      ["Operating design", "Redesign the path, not only the interface."],
      ["Role clarity", "Make ownership visible where it has drifted."],
      ["Change load", "Pace the change so operations can absorb it."],
    ],
    useCases: [
      "Handoffs that lose context",
      "Tools that do not talk to each other",
      "Work that lives in inboxes",
      "Operations that grew faster than design",
    ],
    price: "How work moves",
  },
  {
    slug: "solution-design",
    name: "Solution architecture",
    short: "Solution design",
    blurb:
      "A complex requirement turned into a structured approach: what is built, what is connected, and in what order.",
    chips: ["Architecture", "Integration", "Sequence"],
    capabilities: [
      ["Requirement structure", "Turn a dense brief into a set of decisions."],
      ["Architecture options", "Show two or three credible paths, with consequences."],
      ["Integration design", "Decide how existing systems should meet, not how they should be replaced."],
      ["Interface contracts", "Make the joins between teams and tools explicit."],
      ["Non-goals", "Protect the work by saying what will not be done yet."],
      ["Delivery sequence", "Order the build so value appears before everything is finished."],
    ],
    useCases: [
      "A transformation that needs a spine",
      "Vendors proposing incompatible stacks",
      "A product idea without a system view",
      "Legacy platforms that still have to work",
    ],
    price: "A buildable shape",
  },
  {
    slug: "implementation",
    name: "Implementation strategy",
    short: "Implementation",
    blurb:
      "A practical path from a decision to work on the ground — owners, sequence, and the first moves.",
    chips: ["Owners", "Sequence", "Action"],
    capabilities: [
      ["First moves", "Define the smallest action that makes the strategy real."],
      ["Ownership", "Put names against decisions, not only against tasks."],
      ["Dependency order", "Stop later work waiting on unnamed earlier work."],
      ["Pilot to scale", "Design the jump from a contained trial to day-to-day use."],
      ["Vendor direction", "Brief partners so they implement the intended design."],
      ["Review rhythm", "Set how progress is judged before the work drifts."],
    ],
    useCases: [
      "Strategies that never leave the slide",
      "Programmes with too many workstreams",
      "Handover from strategy to delivery teams",
      "Internal teams that need a clearer brief",
    ],
    price: "Towards action",
  },
  {
    slug: "transformation",
    name: "Digital transformation",
    short: "Transformation",
    blurb:
      "People, process, and technology improved together — not a tool rollout dressed as change.",
    chips: ["People", "Process", "Technology"],
    capabilities: [
      ["Change reading", "See what the organisation can absorb, not only what it can buy."],
      ["Capability gaps", "Name the skills and habits the new way of working requires."],
      ["System coherence", "Reduce the number of competing sources of truth."],
      ["Governance", "Light enough to decide, firm enough to hold."],
      ["Adoption", "Design for use, not for announcement."],
      ["Continuity", "Keep the current operation stable while the next one is built."],
    ],
    useCases: [
      "A platform programme without an operating model",
      "Change fatigue after successive tools",
      "Leadership alignment on what 'digital' means",
      "A need to modernise without a big-bang cutover",
    ],
    price: "Together, not in layers",
  },
  {
    slug: "judgement",
    name: "Context, judgement & structured problem solving",
    short: "Judgement",
    blurb:
      "A generic model can supply information. It cannot hold your systems, constraints, or the cost of a wrong turn.",
    chips: ["Context", "Judgement", "Structure"],
    capabilities: [
      ["Organisational context", "The existing landscape, not a generic industry template."],
      ["Working constraints", "Limits treated as design material, not as inconvenience."],
      ["Team capability", "Recommendations that a real team can carry."],
      ["Priority under uncertainty", "Choose when information is incomplete."],
      ["Solution design", "Shape an answer that survives contact with operations."],
      ["Independent view", "A position that is not a vendor's default stack."],
    ],
    useCases: [
      "Too many plausible answers",
      "AI used as a substitute for thinking",
      "A decision that needs an outside mind",
      "A situation that does not fit a playbook",
    ],
    price: "The actual situation",
  },
]

export const productBySlug = (slug?: string) => products.find((p) => p.slug === slug)

/** Resolve a stack label from a situation page to a product. */
export function productFromLabel(label: string) {
  const key = label.trim().toLowerCase()
  return products.find(
    (p) => p.short.toLowerCase() === key || p.name.toLowerCase() === key || p.slug.replace(/-/g, " ") === key,
  )
}

export type Solution = {
  slug: string
  name: string
  blurb: string
  points: string[]
  stack: string[]
  stat: [string, string]
}

export const solutions: Solution[] = [
  {
    slug: "operations",
    name: "Operations",
    blurb:
      "When the work has outgrown the way it is organised — and tools keep arriving faster than the process can absorb them.",
    points: [
      "Map how work actually moves, including the unofficial paths",
      "Find the few constraints that create most of the delay",
      "Decide which systems should connect, and which should stay out of the way",
      "Give operations a sequence they can run, not a catalogue of initiatives",
    ],
    stack: ["Systems & operations", "Strategy", "Implementation"],
    stat: ["01", "start with the work, not the tool"],
  },
  {
    slug: "customer-experience",
    name: "Customer & service organisations",
    blurb:
      "When service quality depends on several teams, several systems, and a customer who should not have to know any of that.",
    points: [
      "See the journey as a system, including the back-office joins",
      "Judge where automation helps, and where a person still needs judgement",
      "Reduce re-entry, lost context, and contradictory answers",
      "Design a path that operations can staff and technology can support",
    ],
    stack: ["Process & system design", "AI & automation", "Solution design"],
    stat: ["02", "the join is the product"],
  },
  {
    slug: "technology-leaders",
    name: "Technology & product leaders",
    blurb:
      "When the organisation expects a technology answer, and the harder work is choosing which problem is worth solving.",
    points: [
      "Separate architecture decisions from fashion",
      "Hold vendors and internal teams to the same problem statement",
      "Make build, buy, and wait into explicit options",
      "Turn a dense landscape into a sequence leadership can fund",
    ],
    stack: ["Strategy", "Solution design", "Judgement"],
    stat: ["03", "choose the problem first"],
  },
  {
    slug: "growth",
    name: "Growing organisations",
    blurb:
      "When informal ways of working no longer scale, and the next system will either create order or freeze the wrong habits.",
    points: [
      "Name the processes that now need structure",
      "Avoid buying enterprise complexity too early",
      "Connect the few systems that matter before adding more",
      "Leave room for the operating model to keep changing",
    ],
    stack: ["Strategy", "Systems & operations", "Implementation"],
    stat: ["04", "structure without rigidity"],
  },
  {
    slug: "regulated",
    name: "Regulated & high-stakes environments",
    blurb:
      "When a wrong step is expensive, and technology cannot be introduced as an experiment on live operations.",
    points: [
      "Treat constraint and compliance as part of the design",
      "Be conservative about what is automated",
      "Keep an audit trail of why a path was chosen",
      "Move in contained steps that operations can reverse if needed",
    ],
    stack: ["Judgement", "Solution design", "Implementation"],
    stat: ["05", "caution is a design input"],
  },
]

export const solutionBySlug = (slug?: string) => solutions.find((s) => s.slug === slug)

export const customers = [
  {
    name: "Operations",
    quote:
      "We knew the work was strained. We did not know whether the next system would help, or simply add another place to look.",
    metric: "",
    label: "Process under pressure",
  },
  {
    name: "Product",
    quote:
      "Every vendor had a confident answer. None of them could see how our current landscape would actually absorb it.",
    metric: "",
    label: "Technology choice",
  },
  {
    name: "Finance",
    quote:
      "The question was never whether AI could write a summary. It was whether we should change the process that created the work in the first place.",
    metric: "",
    label: "Investment judgement",
  },
  {
    name: "Service",
    quote:
      "Customers were meeting three teams and two systems. The gap was not a missing chatbot. It was the join.",
    metric: "",
    label: "Customer operations",
  },
  {
    name: "Clinical",
    quote:
      "We needed a path that respected the constraints. A generic playbook would have been a liability.",
    metric: "",
    label: "High-stakes change",
  },
  {
    name: "Growth",
    quote:
      "We had outgrown the informal version of ourselves. The risk was buying something that would freeze the wrong habits.",
    metric: "",
    label: "Scale without clutter",
  },
]

export const logos = [
  "OPERATIONS",
  "FINANCE",
  "PRODUCT",
  "SERVICE",
  "CLINICAL",
  "LOGISTICS",
  "PUBLIC",
  "PROFESSIONAL",
  "GROWTH",
  "INDUSTRIAL",
  "ENERGY",
  "RETAIL",
  "INSURANCE",
  "EDUCATION",
  "LEGAL",
  "PROPERTY",
]

export const beginShapes: [string, string, string][] = [
  ["Discovery conversation", "understand", "Starts here"],
  ["Situation diagnostic", "define", "Contained"],
]

export const deepenShapes: [string, string, string][] = [
  ["Architecture & options", "structure", "Decision-ready"],
  ["Implementation path", "move", "Actionable"],
  ["Ongoing direction", "review", "As needed"],
]

export const artefacts: [string, string][] = [
  ["Problem framing", "Core"],
  ["Priority map", "Core"],
  ["System landscape", "Core"],
  ["Option comparison", "As needed"],
  ["Risk reading", "As needed"],
  ["Pilot design", "As needed"],
  ["Operating design", "As needed"],
]

export const standingInputs: [string, string][] = [
  ["Constraint log", "Always"],
  ["Non-goals", "Always"],
  ["Owner map", "Always"],
  ["Review rhythm", "Always"],
]

export const methodStages: [string, string, string, string][] = [
  ["Understand", "Situation reading", "Context", "Constraints"],
  ["Define", "Problem statement", "Scope", "Non-goals"],
  ["Explore", "Options", "Fit", "Risk"],
  ["Structure", "Architecture", "Sequence", "Owners"],
  ["Move", "First actions", "Brief", "Review"],
]

export const addonOptions: [string, number][] = [
  ["Existing system landscape", 1],
  ["Process mapping", 1],
  ["AI / automation test", 1],
  ["Architecture options", 2],
  ["Implementation path", 2],
  ["Operating model", 2],
]

export const faqs: [string, string][] = [
  [
    "Do we need to already know what we want built?",
    "No. Many conversations start because something is not working and the next move is unclear. The first job is to understand the situation.",
  ],
  [
    "Will Constrange recommend AI by default?",
    "No. AI is one possible answer. Sometimes the process needs to change. Sometimes an existing system needs to work better. Sometimes the right move is to wait.",
  ],
  [
    "How is this different from asking a model?",
    "A model can supply information. It does not know your systems, constraints, team, or the cost of a wrong turn. Constrange works with the actual situation.",
  ],
  [
    "Do you implement everything yourselves?",
    "We design a path that can be implemented — by your team, a partner, or a mix. The value is a direction that survives contact with operations.",
  ],
  [
    "What do you need from us to start?",
    "A conversation, a sense of the pressure, and access to the people who live with the work. Perfect documentation is not a prerequisite.",
  ],
  [
    "Who is this for?",
    "Leaders and operators who have to decide under complexity — in operations, technology, service, and organisations where a wrong step is expensive.",
  ],
  [
    "Is this a long transformation programme?",
    "Not by default. We prefer a contained reading, a clear recommendation, and a first move. Larger work only follows if the situation requires it.",
  ],
]

export const changelog: [string, string, string][] = [
  ["2026-09-02", "Writing", "Blog opened with a note on judgement versus information."],
  ["2026-05-29", "Method", "Implementation path now treated as a first-class artefact, not a slide at the end."],
  ["2026-04-13", "Practice", "AI & automation work now starts with a necessity test, not a use-case catalogue."],
  ["2026-04-02", "Practice", "Solution architecture framed as options with consequences, not a single recommended stack."],
  ["2026-03-03", "Method", "Constraint log added as a standing input to every engagement."],
  ["2025-12-11", "Company", "Constrange established around structured problem solving under constraint."],
]

export const research: Record<string, { title: string; blurb: string; bullets: string[] }> = {
  understand: {
    title: "Understand",
    blurb:
      "Study the situation as it is: the work, the systems, the people, and the constraints that will not move just because a new tool arrives.",
    bullets: [
      "Start with how work actually happens, including unofficial paths",
      "Treat existing systems as the landscape, not as a problem to erase",
      "Listen for the cost of the current confusion, not only the wish list",
      "Write down what is known, what is assumed, and what is still open",
    ],
  },
  structure: {
    title: "Structure",
    blurb:
      "Turn a dense situation into a set of decisions: the problem, the options, the sequence, and what will not be done yet.",
    bullets: [
      "Name the actual problem, not the loudest symptom",
      "Hold more than one credible path long enough to compare them",
      "Make joins, owners, and dependencies visible",
      "Protect the work with non-goals",
    ],
  },
  priorities: {
    title: "Priorities",
    blurb:
      "More options do not create clarity. The useful work is choosing what should move first under real constraint.",
    bullets: [
      "Rank by consequence, not by novelty",
      "Separate what is urgent from what is merely available",
      "Keep the first move small enough to be real",
      "Leave later work named, not implied",
    ],
  },
}

export const benchmarkRows: [string, number, string, boolean][] = [
  ["Understand the situation", 94, "First", false],
  ["Define the problem", 82, "Then", true],
  ["Choose a technology", 48, "Later", true],
  ["Roll out a default stack", 28, "Rarely", true],
  ["Ask a model in isolation", 18, "Not enough", true],
]

export const services: [string, string][] = [
  ["New conversations", "Open"],
  ["Strategy & problem framing", "Open"],
  ["AI & automation reading", "Open"],
  ["Systems & operations", "Open"],
  ["Solution architecture", "Open"],
  ["Implementation direction", "Open"],
  ["Insights & writing", "Open"],
]

export const codeSamples: Record<string, string> = {
  brief: `SITUATION
The operating model has more tools than owners.
Work still moves through inboxes.

PRESSURE
Leaders want a technology decision this quarter.
Teams cannot absorb another platform.

OPEN QUESTIONS
What is the actual constraint?
Which systems must remain?
Is AI required, or is the process the issue?`,
  map: `WORK PATH
Request → triage → specialist → system A → system B → customer

BREAKS
Triage loses context.
System A and B disagree on status.
Specialists re-enter data by hand.

CONSTRAINTS
No freeze on live operations.
Team of twelve, mixed capability.
Vendor contracts run 14 months.`,
  sequence: `01  UNDERSTAND   landscape, work, constraints
02  DEFINE        problem, non-goals, success
03  EXPLORE       options, fit, risk
04  STRUCTURE     architecture, owners, order
05  MOVE          first actions, review rhythm

FIRST MOVE
One join between system A and triage.
Measure re-entry, not vanity volume.`,
  constraints: `WILL NOT
Replace the core system this year.
Automate judgement at the exception path.
Add a fourth place for status.

WILL
Name a source of truth for status.
Reduce the handoff that loses context.
Decide whether AI is necessary after the join is designed.`,
}

export type SituationStage = "understand" | "structure" | "implement"

export type SituationNode = "work" | "systems" | "people" | "time" | "risk"

export type Situation = {
  id: string
  stage: SituationStage
  title: string
  nodes: SituationNode[]
  pressure: string
  spoken: string
  reading: string
  move: string
}

export const situationStages: { id: SituationStage; num: string; label: string }[] = [
  { id: "understand", num: "01", label: "Understand" },
  { id: "structure", num: "02", label: "Structure" },
  { id: "implement", num: "03", label: "Implement" },
]

export const situations: Situation[] = [
  {
    id: "priority",
    stage: "understand",
    title: "A platform is being asked for",
    nodes: ["work", "time", "people"],
    pressure:
      "There are three programmes running, and only one budget. Leadership still wants a platform decision this quarter.",
    spoken:
      "Picture this. Three programmes are running at once — and there is only one budget left. Leadership still wants a platform decision this quarter. But ask which piece of work has to change first, and the room goes quiet.",
    reading: "The request is a platform. The issue is priority. Nothing should be bought until the work that must change first is named.",
    move: "Name the work. Rank the constraints. Then, and only then, compare platforms.",
  },
  {
    id: "handoff",
    stage: "understand",
    title: "The unofficial path is winning",
    nodes: ["work", "systems", "people"],
    pressure:
      "A request is crossing four teams. The context drops at the second handoff. And the real path, if we are honest, is a spreadsheet.",
    spoken:
      "A request is crossing four teams. By the second handoff, the context is gone. Everyone nods in the meeting — then goes back to the spreadsheet that actually runs the work. That is the real process. It just does not have a name yet.",
    reading: "The process is not slow because people are slow. It is slow because the join has no owner and no shared status.",
    move: "One status object. One owner at the join. Give the spreadsheet an end date.",
  },
  {
    id: "problem",
    stage: "understand",
    title: "Nobody agrees on the problem",
    nodes: ["people", "work", "time"],
    pressure:
      "Each team has a different story. Meetings keep repeating. And nobody can say, in one sentence, what must change.",
    spoken:
      "Every team has a different story about what is wrong. The meetings keep happening — same people, same slide, same disagreement. Nobody can say, in one plain sentence, what actually has to change.",
    reading: "If the problem is not shared, every solution will fight the last one. Alignment is a named constraint, not another workshop.",
    move: "Write one problem statement. Get it agreed. Stop solving until that sentence is stable.",
  },
  {
    id: "ai-first",
    stage: "understand",
    title: "AI is being asked for first",
    nodes: ["work", "people", "risk"],
    pressure:
      "Leadership wants artificial intelligence this year. The work itself has not been mapped. And no one has asked whether a simpler change would do.",
    spoken:
      "Leadership wants AI on the roadmap this year. The work itself has not been mapped. Nobody has asked the quieter question yet — whether a simpler change would do the same job, without a model in the middle.",
    reading: "The question is not how to adopt AI. The question is what is broken in the work — and whether a model is even required.",
    move: "Map the work. Name the friction. Then decide if AI belongs in the path at all.",
  },
  {
    id: "options",
    stage: "structure",
    title: "Two vendors, one frozen core",
    nodes: ["systems", "people", "risk"],
    pressure:
      "There are two vendors, and one legacy core. The team can integrate. It cannot rebuild. So the architecture has to respect that.",
    spoken:
      "Two vendors are in the room. One legacy core that is not moving. The team can integrate — they cannot rebuild. Whatever gets chosen has to respect that limit. Not on a slide. In day-to-day operations.",
    reading: "Replacement exceeds the change load. Automating around the core would hide the problem in more tools.",
    move: "A thin integration layer over the core. Write the non-goals before the RFP.",
  },
  {
    id: "copilot",
    stage: "structure",
    title: "A copilot looking for a problem",
    nodes: ["work", "systems", "risk"],
    pressure:
      "The proposed copilot would summarise tickets. Volume is already high. And leadership has already announced A.I.",
    spoken:
      "They want a copilot to summarise tickets. Volume is already high. Leadership has announced AI — so the demo is due. But the delay is not writing. The facts are missing at intake. A fluent summary of incomplete tickets is still wrong.",
    reading: "The delay is not writing. It is missing facts at intake. A fluent summary of incomplete tickets would be fluent and wrong.",
    move: "Fix intake structure. Do not fund a model for a data problem.",
  },
  {
    id: "tool-sprawl",
    stage: "structure",
    title: "Too many tools, no process",
    nodes: ["systems", "work", "people"],
    pressure:
      "There are six systems for the same request. People copy between them. And a seventh tool has been proposed to connect everything.",
    spoken:
      "Six systems touch the same request. People copy between them. Now someone has proposed a seventh — to connect everything. That is not a strategy. It is another layer on top of a path nobody owns.",
    reading: "Another tool will not create a process. A process with an owner will tell you which tools can stay, and which can go.",
    move: "Draw the real path of one request. Keep the systems that serve it. Name the ones that do not.",
  },
  {
    id: "fit",
    stage: "structure",
    title: "The system cannot do the work",
    nodes: ["systems", "work", "risk"],
    pressure:
      "The work has changed. The core system has not. Teams are inventing workarounds so the numbers still look right.",
    spoken:
      "The work has changed. The core system has not. So teams built workarounds — quietly — so the numbers still look right. Each workaround is a design decision. Just not an official one.",
    reading: "A workaround is a design. It is just an unofficial one. Structure means deciding what the system must hold, and what people should stop pretending it holds.",
    move: "List the workarounds. Keep the honest ones. Design the join for the rest.",
  },
  {
    id: "owners",
    stage: "implement",
    title: "Strategy agreed, nobody named",
    nodes: ["people", "time", "work"],
    pressure:
      "The strategy is signed. Nothing has an owner. And the next thing on the table is a twelve-month roadmap.",
    spoken:
      "The strategy is signed. A strong deck. But nothing has a name on it yet. And the very next conversation is a twelve-month roadmap. A roadmap without owners is not a path. It is a calendar.",
    reading: "A roadmap is not a path. A path has names, a first week, and a way to tell whether the first step worked.",
    move: "Three named actions this week. Review on Friday: what became true, what is still assumed.",
  },
  {
    id: "judgement",
    stage: "implement",
    title: "The model would say yes",
    nodes: ["systems", "people", "risk"],
    pressure:
      "A generic answer would say, adopt A.I. But the records are incomplete. The team is tired. And the core cannot move this year.",
    spoken:
      "A generic playbook would say: adopt AI. But the records are incomplete. The team is tired. The core cannot move this year. Information is cheap here. Judgement is not.",
    reading: "Information is cheap here. Judgement is not. Do not add a model on missing data, or a parallel process on a tired team.",
    move: "Stabilise the record. Then reopen whether automation is even the question.",
  },
  {
    id: "first-step",
    stage: "implement",
    title: "We don't know the first step",
    nodes: ["work", "time", "people"],
    pressure:
      "The direction is clear. The programme is not. And the team is waiting for a plan that is still too large to start.",
    spoken:
      "The direction is clear — everyone agrees on that. But the programme is not. The team is waiting for a plan that is still too large to start. That is not caution. That is a large plan doing the job of not beginning.",
    reading: "A large plan is a way of not beginning. A first step is small enough to finish, and clear enough to learn from.",
    move: "One action this week. One owner. One way to tell, by Friday, whether it worked.",
  },
  {
    id: "announced",
    stage: "implement",
    title: "Nothing has actually changed",
    nodes: ["people", "time", "risk"],
    pressure:
      "A transformation has been named. Teams still do the old work. And the new process exists only on a slide.",
    spoken:
      "A transformation has been named. Announced, even. Teams still do the old work. The new process exists on a slide. Announcement is not implementation. Implementation is a change in the daily path — with owners, sequence, and one live case.",
    reading: "Announcement is not implementation. Implementation is a change in the daily path — owners, sequence, and a first live case.",
    move: "Pick one live case. Run it on the new path. Do not scale the slide.",
  },
]
