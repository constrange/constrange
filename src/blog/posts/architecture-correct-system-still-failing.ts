import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const architectureCorrectSystemStillFailingPost: Article = {
  slug: "architecture-correct-system-still-failing",
  title: "The architecture is correct. The system is still failing.",
  deck:
    "Why technically sound architectures fail under real workloads, organizational dependencies, and operational constraints.",
  category: "Engineering",
  date: "3 November 2026",
  dateIso: "2026-11-03",
  readTime: readTime(1500),
  author,
  tags: ["Architecture", "Operations", "Constraints"],
  art: {
    label: "Engineering",
    cells: ["Correct diagrams still fail under real load and real orgs"],
    tone: "slate",
  },
  body: [
    p(
      "The review went well. Layers were clean. Boundaries were named. The diagram showed services, queues, and data stores in sensible relation to one another. Someone said the architecture was correct. Six months later, the system was still failing — not because the drawing was wrong, but because the drawing was incomplete.",
    ),
    p(
      "Correct architecture describes how components should relate. It does not, by itself, describe how work actually flows, who owns what when something breaks, or which constraints the organisation will enforce on Tuesday. Those omissions do not appear in the review. They appear in incident channels, exception queues, and the gap between what the platform permits and what operations must deliver.",
    ),
    p(
      "Constrange sees this pattern often: technically sound design, operational failure. The remedy is rarely another layer on the diagram. It is reading the constraints the architecture assumed away — workload shape, dependency behaviour, handoff ownership, and the rules that sit outside the codebase.",
    ),
    h2("What 'correct' usually means in reviews"),
    p(
      "In architecture reviews, 'correct' often means internally consistent. Components have single responsibilities. Dependencies point in approved directions. Data ownership is labelled. Security controls are present on the slide. These are necessary. They are not sufficient for a system that must run under real traffic, real staff turnover, and real vendor behaviour.",
    ),
    fig(
      "architecture-correct-still-failing.svg",
      "A pristine architecture diagram beside a production incident timeline showing cascading failures at organisational boundaries",
      "The diagram and the incident rarely share the same boundaries.",
    ),
    {
      t: "table",
      caption: "Correct on paper vs correct in production",
      head: ["Architecture review", "Production reality"],
      rows: [
        ["Clean service boundaries", "Shared databases and shadow integrations"],
        ["Defined API contracts", "Undocumented coupling through batch jobs"],
        ["Scalable by design", "One hot partition nobody modelled"],
        ["Failure handled in code", "Failure handled in a person's inbox"],
        ["Observability planned", "Three dashboards, no causal chain"],
      ],
    },
    h2("Workloads expose assumptions"),
    p(
      "Architectures are often validated against expected load — average requests per second, peak multiplier, growth curve. Production delivers something else: bursty campaigns, end-of-month batch windows, a partner sending duplicate files, a region that behaves differently because policy differs. The system was correct for the load in the slide deck. It fails for the load the business actually generates.",
    ),
    p(
      "Hot paths appear where nobody looked. A table that was 'fine at pilot scale' becomes the constraint at ten times volume. A synchronous call that was 'acceptable latency' becomes a timeout chain under parallel users. Correct architecture without workload honesty is a bet that reality will cooperate.",
    ),
    ul([
      "Seasonality modelled as a flat multiplier",
      "Batch and online traffic sharing the same bottleneck",
      "Partner traffic with different retry behaviour than your own clients",
      "Geographic concentration ignored until one region dominates",
      "Test data that does not match production cardinality",
    ]),
    note(
      "If failures correlate with calendar events — month-end, campaign launch, regulatory deadline — the architecture may be correct and the workload model wrong.",
    ),
    h2("Organisational dependencies are architecture"),
    p(
      "Systems depend on teams, approvals, and definitions — not only on other services. A deployment pipeline depends on change windows. A data fix depends on who may run SQL in production. A customer outcome depends on a handoff between operations and a vendor nobody put on the diagram. These dependencies have latency, failure modes, and versioning problems of their own.",
    ),
    p(
      "When the architecture assumes instant decisions, stable ownership, and aligned definitions, it is correct in a world the organisation does not inhabit. Failures show up as 'process issues' or 'communication gaps'. Structurally, they are missing components in the system model.",
    ),
    ol([
      "Approval queues that add days to every release",
      "Role churn: nobody knows who owns the integration",
      "Conflicting definitions of the same entity across teams",
      "Vendor SLAs that do not match your customer commitments",
      "Runbooks that exist but are not exercised until incident three",
    ]),
    h2("Operational constraints behave like load"),
    h3("The limits reviews skip"),
    p(
      "Maintenance windows, backup policies, retention rules, segregation of duties, and audit requirements all shape what the system can do in production. An architecture that requires frequent schema changes may be correct technically and impossible operationally if change control meets monthly. A design that assumes twenty-four-hour on-call may be correct for a startup and wrong for an estate with a single platform team supporting forty applications.",
    ),
    {
      t: "table",
      caption: "Operational limits worth naming early",
      head: ["Constraint", "Architecture symptom"],
      rows: [
        ["Change window: weekly", "Hotfix path undefined; incidents linger"],
        ["No production access for devs", "Debugging depends on tickets and delay"],
        ["Mandatory DR test freeze", "Deploy risk concentrated in narrow slots"],
        ["Data residency rule", "Cross-region failover blocked by policy"],
        ["Skill concentration in one team", "Bus factor becomes availability factor"],
      ],
    },
    h2("When the bottleneck is not in the code"),
    p(
      "Correct architecture distributes capability. It does not always distribute accountability. Incidents stall when three teams each prove their service returned two hundred. The customer still sees failure. The architecture was correct per service. The system failed at composition — the same failure mode as distributed systems, except the network is human.",
    ),
    p(
      "Reading constraints honestly means asking where work stops when code is fine. If the answer is 'waiting for someone to approve', 'waiting for the vendor', or 'waiting for a definition', those waits belong on the architecture map as first-class dependencies with measurable latency and failure rates.",
    ),
    quote(
      "A system fails where its model ends. If the model stops at the service boundary, failures will continue at the boundary — no matter how correct the diagram looks.",
    ),
    h2("Symptoms the architecture review missed"),
    p(
      "Green dashboards with angry customers. Frequent rollbacks despite passing tests. Workarounds that become permanent because the official path crosses an organisational wall. Expensive scaling that moves the bottleneck rather than removing it. These are not evidence that the team cannot execute. They are evidence that 'correct' was defined too narrowly.",
    ),
    ul([
      "Incidents reopen because root cause sits in another team's queue",
      "Performance fixes succeed in staging and fail in production traffic mix",
      "Automation built; operations still runs manual path 'just in case'",
      "Architecture board approves; go-live waits on unrelated policy review",
      "Post-mortems cite 'process' repeatedly without changing the design",
    ]),
    h2("How to read architecture under real constraints"),
    h3("Questions before the next build commit"),
    p(
      "What workload shape will break this first — not average load, worst honest day? Which organisational dependencies sit on the critical path? Who owns end-to-end outcome when every component is healthy? What operational rules cap deployment frequency, data change, or access? What unofficial paths already exist because the official architecture cannot reach the outcome?",
    ),
    p(
      "These questions do not replace technical design. They complete it. An architecture that answers them is still may be wrong — but it is wrong in places you can see before funding, not after go-live.",
    ),
    h2("Three responses when the architecture is correct and the system fails"),
    h3("Extend the model"),
    p(
      "Add organisational and operational components to the architecture: ownership, SLAs, approval latency, vendor behaviour, workload scenarios. Make them reviewable the same way services are. This is unglamorous work. It prevents glamorous rework.",
    ),
    h3("Narrow the bet"),
    p(
      "Ship a thin slice under real load with real handoffs before committing to full scale. Correct architecture at full scope is expensive to unwind. Correct architecture at pilot scope is a learning instrument.",
    ),
    h3("Change the constraint"),
    p(
      "Sometimes the architecture is correct and a rule or ownership model must move. Sometimes the constraint will not move and the architecture must — even if that means a modular monolith, a synchronous path, or a slower release cadence. Pretending both can stay unchanged is how programmes fund systems that pass review and fail operations.",
    ),
    h2("A twelve-month programme to align diagram and reality"),
    ol([
      "Quarter one: map top ten production failures — code vs handoff vs workload vs policy.",
      "Quarter two: add organisational dependencies to architecture artefacts; measure approval and vendor latency.",
      "Quarter three: load-test honest scenarios; fix one bottleneck that was not on the original diagram.",
      "Quarter four: measure end-to-end outcome metrics, not component greenness alone.",
    ]),
    p(
      "Twelve months is enough to learn whether 'correct architecture' means correct for production or correct for presentation. If end-to-end outcomes improve while component dashboards stay flat, the model was incomplete — not the team.",
    ),
    ul([
      "Publish ownership for cross-boundary outcomes, not only services",
      "Include operational constraints in architecture decision records",
      "Treat exception volume as a signal of model gaps",
      "Rehearse incident paths across team boundaries quarterly",
      "Retire diagrams that omit dependencies incidents repeatedly cite",
    ]),
    h2("Questions for your next architecture forum"),
    ul([
      "What workload will break this design first?",
      "Which organisational dependency is on the critical path?",
      "Who owns the customer outcome when all services return success?",
      "What operational rule caps how fast this can safely change?",
      "What unofficial path proves the official architecture is incomplete?",
    ]),
    p(
      "If the forum can only discuss boxes and arrows, failures will keep arriving as surprises dressed as operations problems. The architecture may stay correct. The system will not.",
    ),
    p(
      "Technically sound design is the floor, not the finish. Systems succeed when the model includes how the organisation actually runs — workloads, dependencies, constraints, and the people who hold the work together when the diagram ends.",
    ),
    cta(
      "Architecture review passed — production still struggling?",
      "Bring the diagram and the incident history. We will help you read which constraints the architecture assumed away — and design a path that is correct for how the system actually runs.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Can a system fail if every service meets its SLA?",
      "Yes. Composition failures, wrong workload assumptions, and organisational gaps do not appear in per-service SLAs.",
    ],
    [
      "Should we redo the architecture?",
      "Not always. Often you extend the model — ownership, load scenarios, operational limits — before changing components.",
    ],
    [
      "How do we spot organisational dependencies early?",
      "Follow incidents and exceptions to where work waits after code succeeds — approvals, vendors, definitions.",
    ],
    [
      "Is 'correct architecture' useless then?",
      "No. It is necessary and incomplete. Correct for components plus honest constraints is the target.",
    ],
  ],
}
