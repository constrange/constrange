import type { Block } from "@/blog-content"

export type ProductContent = {
  intro: Block[]
  steps: [string, string][]
  specs: [string, string][]
  code: { lang: string; code: string }
  table?: { caption: string; head: string[]; rows: string[][] }
  faqs: [string, string][]
}

const methodSteps: [string, string][] = [
  ["Understand", "Study the work, the systems, the people, and the constraints as they are."],
  ["Define", "Name the actual problem. Write the non-goals."],
  ["Explore", "Hold more than one credible path long enough to compare them."],
  ["Structure", "Turn the choice into architecture, owners, and sequence."],
]

export const productContent: Record<string, ProductContent> = {
  strategy: {
    intro: [
      {
        t: "p",
        text: "Most organisations do not lack ideas. They lack a shared reading of the situation. Business pressure, existing systems, and a crowded technology market arrive together, and the first articulate vendor often becomes the plan.",
      },
      {
        t: "p",
        text: "Strategy work at Constrange is the discipline of deciding what should change, in what order, and why — before a stack is selected. Technology is part of the answer only when the problem requires it.",
      },
    ],
    steps: methodSteps,
    specs: [
      ["Starts from", "The current operating situation, not a target architecture"],
      ["Output", "A problem statement, priorities, and a recommended path"],
      ["AI stance", "Optional. Used when it fits, not as a default"],
      ["Constraint", "Treated as design material"],
      ["Time horizon", "Near enough to act, far enough to avoid thrash"],
      ["Success", "A decision leaders can explain without a slide of jargon"],
    ],
    code: {
      lang: "brief",
      code: `PRESSURE
Two digital programmes, one budget.

STATED REQUEST
“Choose a platform.”

ACTUAL PROBLEM
No shared view of which work should change first.

PATH
Name the work.
Rank the constraints.
Then, and only then, compare platforms.`,
    },
    table: {
      caption: "What this work produces",
      head: ["Artefact", "Purpose", "Used when"],
      rows: [
        ["Situation reading", "Shared facts and open questions", "The picture is contested"],
        ["Priority map", "What moves first", "Everything is marked urgent"],
        ["Path recommendation", "A decision with consequences named", "Leadership needs to choose"],
      ],
    },
    faqs: [
      ["Is this a long strategy programme?", "Not by default. We aim for a contained reading and a decision, then a first move."],
      ["Do you already prefer a stack?", "No. A preferred stack would be a vendor habit. The landscape comes first."],
      ["What if we already chose a technology?", "Then the work is to see whether it still fits the problem — and what to do if it does not."],
    ],
  },

  "ai-automation": {
    intro: [
      {
        t: "p",
        text: "AI can provide information quickly. It cannot tell you whether a process should exist, whether your data can support the idea, or whether the organisation can absorb another system. Those questions need context and judgement.",
      },
      {
        t: "p",
        text: "We look for work that is repetitive, costly, or error-prone enough to change — then test whether AI is required, or whether a simpler operational change would do. The useful outcome is a yes, a no, or a not yet, with reasons.",
      },
    ],
    steps: methodSteps,
    specs: [
      ["Default", "Do not assume AI is the answer"],
      ["Test", "Would a competent person still be slow if the inputs were complete?"],
      ["Data", "Must exist, be trusted, and be reachable"],
      ["Risk", "Named before a pilot is funded"],
      ["Pilot", "Designed to prove or disprove, not to announce"],
      ["Scale", "Only discussed after the first step is real"],
    ],
    code: {
      lang: "test",
      code: `PROPOSAL
A copilot to summarise tickets.

TEST
Is the delay in writing, or in missing facts at intake?

FINDING
Intake is incomplete. Summaries would be fluent and wrong.

MOVE
Restructure intake.
Do not fund a model for a data problem.`,
    },
    table: {
      caption: "When AI is, and is not, the move",
      head: ["Signal", "Likely move", "Unlikely move"],
      rows: [
        ["Repetition with stable rules", "Automation", "A generative layer"],
        ["Missing information", "Process and data", "A summariser"],
        ["Judgement under exception", "Better owners and joins", "Full automation"],
        ["High volume, clear intent", "AI with guardrails", "Another dashboard"],
      ],
    },
    faqs: [
      ["Will you help us pick a model?", "If a model is warranted. Model choice is a later, smaller decision than problem choice."],
      ["What if leadership already announced an AI programme?", "Then the work is to give that programme a real problem, a boundary, and a first test."],
      ["Do you build models?", "We design whether, where, and how they should be used. Implementation can sit with your team or a partner."],
    ],
  },

  "systems-operations": {
    intro: [
      {
        t: "p",
        text: "Operations rarely fail in one place. They fail at the joins: handoffs that lose context, systems that disagree on status, work that survives in spreadsheets because the official path is slower.",
      },
      {
        t: "p",
        text: "This work makes the current path visible, names the few constraints that create most of the strain, and redesigns the way of working so people can follow it without a second unofficial process.",
      },
    ],
    steps: methodSteps,
    specs: [
      ["Unit of analysis", "The work path, not the org chart"],
      ["Includes", "Unofficial routes and workarounds"],
      ["Systems", "Mapped as they are used, not as they were sold"],
      ["Change load", "Paced to what operations can absorb"],
      ["Output", "A designed path with owners at each join"],
      ["Success", "Less re-entry, fewer silent exceptions"],
    ],
    code: {
      lang: "map",
      code: `OFFICIAL
Request → Team A → System 1 → Team B

ACTUAL
Request → Team A → spreadsheet → Team B → System 1 (later)

LOSS
Owner, exception reason, customer promise.

DESIGN
One status.
One owner at the join.
Spreadsheet retired after the join is live.`,
    },
    faqs: [
      ["Do you replace our systems?", "Only if the situation requires it. Often the work is to make the existing landscape coherent."],
      ["Will staff have to change how they work?", "If the current path is the problem, yes — but the new path has to be easier than the workaround."],
    ],
  },

  "solution-design": {
    intro: [
      {
        t: "p",
        text: "A complex requirement is not a shopping list. It is a set of decisions about what is built, what is connected, what is left alone, and in what order. Architecture is the record of those decisions.",
      },
      {
        t: "p",
        text: "We hold more than one credible option long enough to compare them against constraint and capability. The result is a shape that can be implemented — not a diagram that assumes a different organisation.",
      },
    ],
    steps: methodSteps,
    specs: [
      ["Options", "At least two credible paths, with consequences"],
      ["Legacy", "Treated as landscape, not as embarrassment"],
      ["Integration", "Preferred to replacement when it fits"],
      ["Non-goals", "Written down"],
      ["Sequence", "Value appears before everything is finished"],
      ["Audience", "Leaders and the people who will build"],
    ],
    code: {
      lang: "options",
      code: `OPTION 1  Thin integration over the core
OPTION 2  Replace the core in phases
OPTION 3  Automate around the core and leave it

CONSTRAINT
Core cannot move this year.
Team can integrate, cannot rebuild.

FIT
Option 1.
Option 2 exceeds change load.
Option 3 adds tools without a spine.`,
    },
    faqs: [
      ["Is this enterprise architecture in the classic sense?", "It is closer to a decision record: what we will join, what we will not, and why."],
      ["Do you write RFPs?", "We can shape what should be asked. A vendor list without a problem statement is not useful."],
    ],
  },

  implementation: {
    intro: [
      {
        t: "p",
        text: "A strategy that cannot become next week’s work is unfinished. Implementation strategy is the conversion of a decision into owners, sequence, and a first move that is small enough to be real.",
      },
      {
        t: "p",
        text: "We do not confuse a roadmap with a path. A path has names, dependencies, and a way to tell whether the first step worked.",
      },
    ],
    steps: methodSteps,
    specs: [
      ["First move", "Named, owned, and dated"],
      ["Owners", "People, not workstreams"],
      ["Dependencies", "Made visible before they stall the work"],
      ["Vendors", "Briefed against the intended design"],
      ["Review", "A rhythm decided in advance"],
      ["Scale", "Designed after the first step, not before"],
    ],
    code: {
      lang: "path",
      code: `WEEK 1
Maya  freeze unplanned tool requests
Jon   list intake fields that are actually used
Priya write non-goals for the board pack

SUCCESS
The unofficial spreadsheet has an end date.
The join has an owner.
Leadership can repeat the problem in one sentence.`,
    },
    faqs: [
      ["Do you run the delivery team?", "We can stay close to direction. Day-to-day build can sit with your team or a partner."],
      ["What if the first move fails?", "Then we learned something cheaply. That is the point of starting small."],
    ],
  },

  transformation: {
    intro: [
      {
        t: "p",
        text: "Digital transformation fails when technology is treated as a layer that can be added while people and process stay as they are. The three have to move together, or none of them move usefully.",
      },
      {
        t: "p",
        text: "This work is about coherence: fewer competing sources of truth, a way of working people can follow, and a change load the organisation can actually absorb.",
      },
    ],
    steps: methodSteps,
    specs: [
      ["People", "Capability and habit, not only training decks"],
      ["Process", "Designed for use, not for the audit file"],
      ["Technology", "In service of the path, not the reverse"],
      ["Governance", "Light enough to decide"],
      ["Continuity", "Live operations stay stable"],
      ["Pace", "Set by absorption, not by announcement"],
    ],
    code: {
      lang: "together",
      code: `NOT
A platform programme with an operating model to follow later.

YES
A way of working.
The few systems that support it.
The skills it requires.
A sequence operations can survive.`,
    },
    faqs: [
      ["Is this a multi-year programme?", "Only if the situation is that large. We still start with a contained reading and a first move."],
      ["How do you handle change fatigue?", "By reducing parallel initiatives, not by adding a change workstream on top of them."],
    ],
  },

  judgement: {
    intro: [
      {
        t: "p",
        text: "Clients are not paying Constrange to ask a model on their behalf. Information is cheap. What is scarce is context, judgement, and the ability to hold a specific organisation’s constraints while a path is designed.",
      },
      {
        t: "p",
        text: "A generic model does not know your systems, your unofficial processes, your team’s capacity, or the cost of a wrong turn. We work with the actual situation until a practical next action is clear.",
      },
    ],
    steps: methodSteps,
    specs: [
      ["Context", "This organisation, not a sector template"],
      ["Judgement", "A position, with reasons"],
      ["Structure", "Decisions written down"],
      ["Independence", "Not a vendor’s default stack"],
      ["Uncertainty", "Named rather than hidden"],
      ["Action", "Required. Insight without a move is unfinished"],
    ],
    code: {
      lang: "held",
      code: `INFORMATION
Many tools could “do AI”.

CONTEXT
Incomplete records.
Tired team.
Core system frozen this year.

JUDGEMENT
Do not add a model on missing data.
Do not ask the team for a parallel process.

PATH
Stabilise the record.
Then reopen the question.`,
    },
    faqs: [
      ["Is this just facilitation?", "No. We take a view. The work is to make that view inspectable."],
      ["Can we use Constrange alongside an existing consultancy?", "Yes. We can be the structured reading that keeps a larger programme honest."],
    ],
  },
}

export type SolutionContent = {
  intro: Block[]
  workflow: [string, string][]
  metrics: [string, string][]
  faqs: [string, string][]
}

const solutionWorkflow: [string, string][] = [
  ["Read the work", "How a request actually moves, including unofficial paths."],
  ["Name the constraint", "The few limits that explain most of the strain."],
  ["Compare paths", "What to change, what to connect, what to leave."],
  ["First move", "An action with an owner, small enough to be real."],
]

export const solutionContent: Record<string, SolutionContent> = {
  operations: {
    intro: [
      {
        t: "p",
        text: "Operations feel the cost of complexity first. Tools arrive faster than the process can absorb them. The unofficial path becomes the real path. A new system, introduced without a reading of the work, usually adds another place to look.",
      },
    ],
    workflow: solutionWorkflow,
    metrics: [
      ["Start from", "The work as it is done"],
      ["Typical pressure", "Delay, rework, silent workarounds"],
      ["Usual mistake", "Buying a system for a process problem"],
      ["Useful output", "A path with owners at the joins"],
    ],
    faqs: [
      ["Do you need a full process inventory?", "No. We start with the paths that are actually under strain."],
      ["Will this stop other programmes?", "It may recommend pausing work that has no owner. That is often the most valuable move."],
    ],
  },
  "customer-experience": {
    intro: [
      {
        t: "p",
        text: "Customers experience the joins you cannot see: three teams, two systems, one person who has to repeat themselves. A chatbot on top of that structure makes the organisation sound fluent and remain incoherent.",
      },
    ],
    workflow: solutionWorkflow,
    metrics: [
      ["Start from", "The journey including back-office joins"],
      ["Typical pressure", "Lost context, contradictory answers"],
      ["Usual mistake", "A front-end layer on a broken path"],
      ["Useful output", "Fewer handoffs that drop meaning"],
    ],
    faqs: [
      ["Is this CX design?", "It includes the operational system behind the experience, which is where most of the damage sits."],
    ],
  },
  "technology-leaders": {
    intro: [
      {
        t: "p",
        text: "Technology leaders are often asked for an answer before the organisation has agreed the problem. Vendors arrive with stacks. Internal teams arrive with preferences. The scarce skill is holding the landscape still long enough to choose.",
      },
    ],
    workflow: solutionWorkflow,
    metrics: [
      ["Start from", "The decision that is actually being asked"],
      ["Typical pressure", "Time, vendors, competing architectures"],
      ["Usual mistake", "Selecting a stack to end the conversation"],
      ["Useful output", "Options with consequences, then a path"],
    ],
    faqs: [
      ["Do you replace the architecture function?", "No. We make the decision inspectable, including when the existing function is already stretched."],
    ],
  },
  growth: {
    intro: [
      {
        t: "p",
        text: "Growing organisations outgrow informal coordination. The next system will either create enough structure to keep moving, or freeze habits that should still be allowed to change.",
      },
    ],
    workflow: solutionWorkflow,
    metrics: [
      ["Start from", "What now fails because it is informal"],
      ["Typical pressure", "Volume, new roles, first serious tools"],
      ["Usual mistake", "Buying enterprise complexity too early"],
      ["Useful output", "A light structure that can still flex"],
    ],
    faqs: [
      ["Are we too small for this?", "If informal coordination is already failing, it is the right time — and the wrong time to over-build."],
    ],
  },
  regulated: {
    intro: [
      {
        t: "p",
        text: "In high-stakes settings, an experiment on live operations is not a strategy. Constraint and compliance are design inputs. Automation is used conservatively. Paths are chosen so they can be explained later.",
      },
    ],
    workflow: solutionWorkflow,
    metrics: [
      ["Start from", "What must not fail"],
      ["Typical pressure", "Scrutiny, irreversible steps"],
      ["Usual mistake", "A generic digital playbook"],
      ["Useful output", "A cautious sequence with a record of why"],
    ],
    faqs: [
      ["Do you claim certifications we can inherit?", "No. We work with your obligations as they are, and we do not dress caution as a badge."],
    ],
  },
}
