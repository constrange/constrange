import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const microservicesWhenSplittingMakesItWorsePost: Article = {
  slug: "microservices-when-splitting-makes-it-worse",
  title: "Microservices: when splitting the system makes it worse",
  deck:
    "Service boundaries, data ownership, network failure, deployment complexity, and when a modular monolith is the better engineering decision.",
  category: "Engineering",
  date: "10 March 2026",
  dateIso: "2026-03-10",
  readTime: readTime(1500),
  author,
  tags: ["Microservices", "Architecture", "Monolith"],
  art: {
    label: "Engineering",
    cells: ["More services can mean more failure, not less"],
    tone: "dusk",
  },
  body: [
    p(
      "Microservices solved real problems for organisations with scale, team topology, and release pressure that genuinely required independent deployables. The pattern escaped that context. Now teams split systems because slides look modern, because hiring posts mention Kubernetes, or because a monolith became painful — without asking whether the pain was boundary discipline or boundary multiplication.",
    ),
    p(
      "Splitting can make a system worse: slower to change, harder to debug, more fragile under partial failure, and more expensive to operate — while the original coupling reappears as synchronous chains, shared databases, and distributed transactions dressed as sagas nobody trusts.",
    ),
    p(
      "Constrange is not anti-microservices. It is anti-splitting without a constraint match. When the bottleneck is unclear ownership inside one codebase, more repositories do not help. When the bottleneck is network and operations tax, a modular monolith may be the adult decision.",
    ),
    h2("Boundaries that look clean and behave coupled"),
    p(
      "Service boundaries drawn around org charts or nouns often split entities that change together. Order and fulfilment. Account and billing. User and permission. Teams deploy independently on paper. In production they coordinate constantly because the business transaction spans both. The split added latency and failure modes without removing coupling.",
    ),
    fig(
      "microservices-split-worse.svg",
      "Multiple services connected by synchronous calls with a shared database underneath the boundary lines",
      "Independent boxes on the diagram, coupled behaviour in production.",
    ),
    {
      t: "table",
      caption: "Split signals vs stay-together signals",
      head: ["Split may help", "Split may hurt"],
      rows: [
        ["Different scale profiles", "Same change cadence always"],
        ["Regulatory isolation required", "Shared transactional invariants"],
        ["Team ownership aligns with capability", "Team smaller than service count"],
        ["Technology mismatch is real", "Coupling is logical, not deployable"],
        ["Clear async domain events", "Synchronous request chains everywhere"],
      ],
    },
    h2("Data ownership without shared truth"),
    p(
      "Microservices demand each service owns its data. Programmes declare ownership on slides then share a database 'temporarily'. Temporary lasts years. Two services writing one table destroys the boundary more thoroughly than any monolith ever could — because now failures are non-deterministic and migrations require coordinated outages.",
    ),
    p(
      "Splitting without data ownership is theatre. Either enforce separate stores and accept eventual consistency, or keep the transaction inside one deployable until you can. The worst outcome is distributed ownership of one schema.",
    ),
    ul([
      "Shared database behind 'microservices'",
      "Cross-service queries through views nobody owns",
      "Foreign keys replaced by hope and nightly jobs",
      "Duplicate entity IDs reconciled manually",
      "Migration blocked because three services deploy separately",
    ]),
    note(
      "If two services need the same row in the same table at the same time, you may have one bounded context — not two services.",
    ),
    h2("Network failure on a synchronous path"),
    p(
      "Monoliths fail as a unit. Microservices fail as chains. A user action that was one call becomes five. Each hop adds timeout risk, serialization cost, and version skew. Partial failure produces states the business never defined: paid but not fulfilled, updated in CRM but not in billing, authorised but not recorded.",
    ),
    p(
      "Teams respond by adding orchestration, retries, compensations, and idempotency keys — the full distributed systems tax. Sometimes that tax is worth paying. Often it buys nothing because the business process was always atomic and the split was cosmetic.",
    ),
    ol([
      "User-facing latency dominated by internal service hops",
      "Incidents requiring three teams for one customer ticket",
      "Sagas longer than the business process documentation",
      "Choreography nobody can draw from logs alone",
      "Rollbacks requiring coordinated multi-service releases anyway",
    ]),
    h2("Deployment complexity without release independence"),
    h3("The myth of autonomous deploys"),
    p(
      "Microservices promise independent deployment. Reality includes contract tests, shared libraries, feature flags across services, and release trains because breaking API changes still happen. If you always ship three services together, you have a distributed monolith with worse observability.",
    ),
    {
      t: "table",
      caption: "Release independence checklist",
      head: ["Question", "If no…"],
      rows: [
        ["Can one service deploy without others?", "Coupling remains"],
        ["Are API contracts versioned and enforced?", "Surprises at deploy"],
        ["Can you roll back one service alone?", "Blast radius is joint"],
        ["Do teams own end-to-end outcomes?", "Incidents ping-pong"],
        ["Is there a game day for partial deploy?", "Confidence is theoretical"],
      ],
    },
    h2("When a modular monolith is the better bet"),
    p(
      "A modular monolith keeps one deployment unit with strict internal module boundaries: clear interfaces, enforced dependency rules, separate schemas inside one database if needed. Teams gain refactor safety and transactional integrity. They defer network tax until a constraint — scale, regulation, team size — genuinely requires split.",
    ),
    p(
      "This is not nostalgia. It is matching architecture to constraint. Small platform teams supporting many features cannot afford ten on-call rotations for a product that still fits one machine. Startups chasing split early often rebuild toward consolidation at series B — expensively.",
    ),
    quote(
      "Microservices do not fix a messy monolith. They distribute the mess — and charge interest in network calls.",
    ),
    h2("Symptoms splitting made it worse"),
    p(
      "Velocity down after migration. Incident count up. Developers need three repos to fix one bug. Integration tests skipped because 'too slow'. Product waits longer for features that touch two services. None of this proves microservices are wrong globally. It proves they were wrong for this system at this stage.",
    ),
    ul([
      "More engineers, slower delivery",
      "Platform work duplicated per team",
      "Local optimisations breaking global rules",
      "Documentation fragmented; onboarding measured in months",
      "Architecture review celebrates split; ops celebrates nothing",
    ]),
    h2("Recovering without shame"),
    h3("Consolidate, clarify, or constrain"),
    p(
      "Merge services that always change together — internally first, deployable second if evidence supports. Strengthen module boundaries inside a monolith before another split. Replace synchronous chains with batch or events only where the business tolerates delay. Name the constraint that would justify the next split — scale number, regulatory line, team size — and revisit when met.",
    ),
    p(
      "Reversing split is politically hard and technically healthy. Continuing a failed split because the slide deck committed is how organisations fund permanent toil.",
    ),
    h2("A decision framework before the next split"),
    ol([
      "Write the user journey latency budget — can services fit inside it?",
      "Map data that must stay consistent in one transaction.",
      "Count on-call rotations and platform headcount post-split.",
      "Prototype failure: kill one service; measure customer blast radius.",
      "Ask whether module boundaries in one repo solve the org problem instead.",
    ]),
    p(
      "If the framework returns 'not yet', that is a valid architecture outcome. Delaying split is engineering judgement, not failure to innovate.",
    ),
    h2("Organisational pressure to split"),
    p(
      "Sometimes the push for microservices is not technical. It is hiring narrative, vendor partnership, or the belief that modern equals distributed. Teams inherit a target architecture before they inherit a problem that requires it. The result is services without owners, platforms without capacity, and a monolith's coupling expressed as latency.",
    ),
    p(
      "Other times the monolith is genuinely painful — but because boundaries inside the repo were never enforced, not because deployment was unified. Fixing module discipline and test strategy may unlock more velocity than a three-year migration. Splitting a undisciplined monolith produces undisciplined services.",
    ),
    h3("What good modular monolith practice looks like"),
    p(
      "Enforced dependency rules between packages. Schema modules aligned to aggregates. One deploy with feature flags for risky change. Clear ownership per module even if on-call is shared. Extraction becomes a later option with known seams — not an emergency rewrite.",
    ),
    ul([
      "Lint rules blocking cross-module imports",
      "Integration tests at module boundaries",
      "Shared kernel kept uncomfortably small",
      "Extract-to-service checklist with data migration proof",
      "Architecture decision record for each future split candidate",
    ]),
    h2("Questions for your next architecture decision"),
    ul([
      "What constraint does splitting remove — specifically?",
      "What coupling reappears as network calls?",
      "Who owns data — really, not on the slide?",
      "Will we deploy independently or is that a story?",
      "Would a modular monolith meet the same goals with less tax?",
    ]),
    p(
      "Microservices are a tool for specific constraints. Used as default, they often make systems worse — slower, brittle, and harder to understand. The better engineering decision is sometimes fewer boxes, stricter modules, and honesty about when the split earns its keep.",
    ),
    p(
      "Delaying a split is not technical debt if the constraint is not yet real. Shipping a modular monolith with clear seams is often how mature organisations avoid paying the distributed tax twice — once on the way out, once on the way back.",
    ),
    p(
      "The question for leadership is not 'monolith or microservices'. It is which constraint you are buying relief from — and whether the invoice matches. Honest engineering answers with evidence, not pattern names.",
    ),
    h3("The return journey"),
    p(
      "Organisations that split too early sometimes spend years re-merging services — not because microservices failed as an idea, but because the boundaries were wrong and the tax was paid without relief. The modular monolith they left behind would have been easier to evolve than the distributed graph they inherited. That return journey is expensive, politically awkward, and entirely predictable in retrospect.",
    ),
    cta(
      "Split the monolith and delivery got slower?",
      "Bring the service map and the incident history. We will help you read whether boundaries match constraints — and whether consolidation or modular monolith is the honest next move.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Are microservices always wrong for small teams?",
      "Not always — but small teams rarely benefit from many deployables. Modular monolith first is often correct.",
    ],
    [
      "Can we merge services after splitting?",
      "Yes. Consolidation is valid engineering when coupling proves joint lifecycle.",
    ],
    [
      "What is a modular monolith?",
      "One deployable with enforced internal modules and clear interfaces — boundaries in code, not network.",
    ],
    [
      "How do we know we have a distributed monolith?",
      "Joint releases, shared database, synchronous chains for most features — split without independence.",
    ],
  ],
}
