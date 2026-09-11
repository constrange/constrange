import type { Article } from "../types"
import { author, cta, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const buildVsBuyPost: Article = {
  slug: "build-vs-buy-custom-ai-vs-existing-solution",
  title: "Build vs buy: custom AI or an existing solution?",
  deck:
    "The choice is rarely about capability. It is about fit, ownership, and what your organisation can absorb over the next eighteen months.",
  category: "Decision guides",
  date: "11 September 2026",
  dateIso: "2026-09-11",
  readTime: readTime(1700),
  author,
  tags: ["Build vs buy", "AI strategy", "Vendor selection", "Custom development"],
  art: { label: "Decision guides", cells: ["Custom AI vs an off-the-shelf product"], tone: "plum" },
  body: [
    p(
      "Every quarter, leadership teams face the same fork: commission something bespoke around a model, or buy a product that already claims to solve the category. The question sounds technical. It is not. It is a judgement about fit — how the work actually runs, what systems already exist, who will own the outcome when the first exception appears, and what the organisation can absorb without quietly adding another unofficial path on top of the old one.",
    ),
    p(
      "Vendors will tell you the market has matured. Internal engineering teams will tell you nothing off the shelf will understand your data. Both can be right in the same conversation and still useless as a decision. Build versus buy is not a debate about intelligence. It is a debate about consequence inside your operating landscape.",
    ),
    p(
      "Constrange sees this choice go wrong in predictable ways. Organisations buy when they needed a narrow integration and a clearer owner. They build when a product would have been honest enough if someone had named the constraint first. The expensive mistake is treating the fork as permanent ideology rather than a question you answer per problem, per quarter, under a constraint that is actually true.",
    ),
    h2("What each path actually is"),
    p(
      "Buying means adopting someone else's architecture, roadmap, and definition of done. You gain speed to a demo and a support contract. You accept their model of the work, their join points, their upgrade rhythm, and their idea of what 'configured' means. That can be excellent when the work is common, the join is shallow, and your constraint is time.",
    ),
    p(
      "Building means owning the design decisions that make the work yours: the data contracts, the exception handling, the guardrails, the way a human steps in, the way you measure whether the thing is helping or merely busy. You gain fit and control. You accept build cost, maintenance, and the organisational attention required to keep a custom system honest as models, APIs, and regulations shift.",
    ),
    {
      t: "table",
      caption: "Two paths, different costs",
      head: ["Buy an existing solution", "Build custom"],
      rows: [
        ["Faster to first demo", "Slower to first working slice"],
        ["Vendor owns the core roadmap", "You own the roadmap and the joins"],
        ["Fit depends on how standard your work is", "Fit depends on how well you defined the problem"],
        ["Licence and services are visible; absorption is not", "Build cost is visible; ongoing ownership is not"],
        ["Upgrade on their schedule", "Upgrade on your capacity"],
      ],
    },
    p(
      "Neither column wins by default. The table is meant to stop the conversation from collapsing into taste. Taste is how organisations end up with a bespoke copilot nobody maintains, or a platform that fights the unofficial spreadsheet that actually runs the process.",
    ),
    h2("Start with the problem, not the category"),
    p(
      "Before you allow the words 'build' or 'buy' into the room, write the problem in one sentence that includes a constraint. Not a use case. Not a capability wish. A problem: what is under pressure, where it breaks, and what will not move this year. If you cannot write that sentence, you are not choosing between paths. You are shopping.",
    ),
    ul([
      "Name the join, not the channel: where does work stall between systems, teams, or definitions of done?",
      "Name the unofficial path: what happens today when the process pack is wrong?",
      "Name the cost of being wrong: operational, reputational, regulatory, and human.",
      "Name a non-goal: what you will not do even if a vendor deck makes it look easy.",
    ]),
    p(
      "A problem well named often makes the path obvious. If the bottleneck is a missing fact at intake, neither build nor buy may be the first move. If the bottleneck is a high-volume, low-variance task with clean inputs, buy may be entirely reasonable. If the bottleneck is judgement embedded in exceptions only your team recognises, custom work may be unavoidable — but only after you have admitted that exceptions are the product.",
    ),
    note(
      "If the answer only makes sense in a demo environment, it is not yet an answer about your organisation. Demos optimise for fluency. Operations optimise for exceptions.",
    ),
    h2("When buying is the honest choice"),
    p(
      "Buy when the work is structurally similar to what the product was built for, when the integration surface is small and well owned, and when your organisation can accept the vendor's model of the world without constant workaround. That sounds obvious. It is routinely ignored because buying is socially easier than naming misfit.",
    ),
    p(
      "Buying is also honest when your constraint is time and your risk tolerance for misfit is low. A narrow assistant on a well-defined corpus, with a clear human review step, may not need a bespoke stack. A standard document workflow with mature connectors may not need your engineering team to become a platform company.",
    ),
    h3("The buy decision tests"),
    ul([
      "Can operations recognise the workflow in the product without a translation layer?",
      "Is the data the product needs actually available, stable, and owned?",
      "Is there a named internal owner who will still be accountable after go-live?",
      "Can you implement a first slice without migrating the whole estate?",
      "If the vendor pauses feature development for a year, do you still have a viable path?",
    ]),
    p(
      "If you fail more than one of those tests, you are not buying a solution. You are buying a programme that will search for fit after signature. That programme has a name in every organisation. It is called implementation.",
    ),
    h2("When building is the honest choice"),
    p(
      "Build when the work is specific enough that a generic product will force the organisation to pretend it is generic. Build when the join is deep — multiple systems, contested definitions, regulatory nuance, or a feedback loop that must stay inside your boundary. Build when the differentiator is not the model but the surrounding judgement: what to retrieve, what to refuse, what to escalate, and how to record why.",
    ),
    p(
      "Build also when ownership matters more than speed. If the capability is core to how you serve customers or manage risk, outsourcing the architecture is outsourcing the learning. You may still use managed APIs and foundation models. Building does not mean training from scratch. It means you own the shape of the system that wraps the model.",
    ),
    h3("The build decision tests"),
    ul([
      "Would a product require your team to misdescribe the work in configuration?",
      "Do exceptions dominate, and are those exceptions where value lives?",
      "Must the system evolve weekly with operational learning, not quarterly with a vendor release?",
      "Is there a credible internal owner for data, evaluation, and change — not just engineering?",
      "Can you fund a first slice that proves fit before you argue for a platform?",
    ]),
    p(
      "Building without those tests is how organisations acquire a fragile internal product that one senior engineer understands and everyone else routes around. That is the build-side equivalent of shelfware.",
    ),
    h2("The hidden third option: fix the process"),
    p(
      "Both build and buy assume the work should stay as it is, only faster or cleverer. Often the right move is earlier in the sequence: simplify intake, fix the join, clarify ownership, or stop doing the work at all. A model on top of a broken process becomes an expensive way to hide the break.",
    ),
    p(
      "We use a blunt test in rooms: if a capable person had complete inputs tomorrow morning, would the work still stall? If no, you likely have an information or ownership problem, not a build versus buy problem. If yes, automation or augmentation may be the right class of move — but you still have not chosen a path until the problem is named.",
    ),
    quote(
      "The question is not whether you can build it or buy it. The question is whether either path serves a problem operations would recognise on a Tuesday.",
    ),
    h2("How to compare paths without a beauty contest"),
    p(
      "Teams often compare build and buy with incompatible spreadsheets: vendor licence fees against engineering day rates, as if absorption were free. A better comparison holds the same first slice constant. Define a thin end-to-end path — one team, one workflow, one measure of success. Price both options for that slice, including integration, change management, evaluation, and ownership for twelve months.",
    ),
    {
      t: "table",
      caption: "What to put in both columns",
      head: ["Cost line", "Why it matters"],
      rows: [
        ["First slice delivery", "Forces the same scope, not the same demo"],
        ["Integration and data engineering", "Where most 'quick buys' become programmes"],
        ["Human review and exception handling", "Where value and risk actually live"],
        ["Monitoring and evaluation", "Without this, you will not know if it worked"],
        ["Internal ownership (named roles)", "Not headcount theatre — hours per week"],
        ["Change and training", "The unofficial path does not update itself"],
      ],
    },
    p(
      "When both columns include the same lines, the decision stops being religious. You may discover buying is cheaper for slice one but expensive at year two because of seat growth and services. You may discover building is cheaper over three years but impossible this quarter because the owner role does not exist yet. Those are useful outcomes. They produce a sequence, not a slogan.",
    ),
    h2("A sequence that survives contact with reality"),
    p(
      "Use this sequence even when procurement has already shortlisted vendors. Especially then.",
    ),
    ol([
      "Write the problem and non-goals in one page.",
      "Sketch the unofficial path and the join that fails today.",
      "Define a first slice with a measure and an owner.",
      "Run buy and build estimates against that slice, not against a vision deck.",
      "Choose the path that fits the constraint — including wait, simplify, or fix the join first.",
    ]),
    p(
      "If you choose buy, contract for the slice, not the category. If you choose build, fund the slice, not a platform ambition. If you choose wait, write what condition would reopen the decision. Waiting with a named condition is governance. Waiting without one is avoidance.",
    ),
    h2("What leadership should ask"),
    p(
      "Ask for the constraint first. Ask which path closes the most doors, not which opens the most features. Ask who owns the exceptions. Ask what will be stopped so the chosen path has capacity. Ask what you would unwind if the first slice fails. If those questions cannot be answered, postpone signature — not thought.",
    ),
    p(
      "Constrange is not pro-build or pro-buy. We are pro-sequence. The right path is the one that serves a named problem inside real limits, with a first move small enough to be real. Everything else is catalogue noise with better typography.",
    ),
    cta(
      "Facing the fork?",
      "Bring the problem as you currently see it — including what you are tempted to buy or build. We will help you compare paths against the same first slice.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Is custom AI always better for proprietary data?",
      "No. Proprietary data does not automatically require a custom build. The question is whether the work, joins, and exceptions are standard enough for a product — and whether you can own the outcome inside a bought architecture.",
    ],
    [
      "How small should the first slice be?",
      "Small enough that one team can adopt it without a new operating model: one workflow, one owner, one measure of success. If the slice requires the whole estate to move, it is not a slice.",
    ],
    [
      "What if we have already signed with a vendor?",
      "Then the work is to find an honest problem the product can serve — and to stop asking it to become the home for every idea. Narrow the slice until fit is testable.",
    ],
    [
      "Does building mean we need a large internal AI team?",
      "Not necessarily. Building means owning the system design around models — which may include managed APIs, partners, and a small core team. It does not mean becoming a foundation-model company.",
    ],
  ],
}
