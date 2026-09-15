import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const observabilityNotThreeDashboardsPost: Article = {
  slug: "observability-is-not-three-dashboards",
  title: "Observability is not three dashboards",
  deck:
    "Logs, metrics and traces are only useful when they let you reconstruct causality across a distributed system.",
  category: "Engineering",
  date: "1 December 2026",
  dateIso: "2026-12-01",
  readTime: readTime(1500),
  author,
  tags: ["Observability", "Operations", "Distributed Systems"],
  art: {
    label: "Engineering",
    cells: ["Dashboards show symptoms; causality needs design"],
    tone: "frost",
  },
  body: [
    p(
      "Observability initiatives often stop at tooling adoption. Logs go to a vendor. Metrics scrape everything. Traces sample at ten percent. Three dashboards appear in the ops channel. Incidents still begin with 'something is wrong' and end with 'we think it was a downstream timeout' — reconstructed from memory, not from evidence.",
    ),
    p(
      "The three pillars — logs, metrics, traces — are necessary and insufficient. They are storage and transport. Observability is the ability to ask new questions about behaviour you did not predict and get trustworthy answers fast. That requires instrumentation design, correlation, ownership, and culture — not another panel showing CPU.",
    ),
    p(
      "Constrange reviews platforms that bought observability and still cannot answer: what happened to customer 7721 across six services between 14:02 and 14:07? If causality cannot be reconstructed, observability is monitoring with a larger invoice.",
    ),
    h2("Dashboards measure comfort, not understanding"),
    p(
      "Dashboards aggregate what someone thought would matter during setup. They go green. Incidents break assumptions. Novel failures do not have panels. On-call scrolls familiar graphs while users report a journey that crossed services nobody charted together.",
    ),
    fig(
      "observability-not-dashboards.svg",
      "Three dashboards green while a broken request path crosses invisible service boundaries",
      "Healthy aggregate metrics often hide broken causal chains in distributed workflows.",
    ),
    {
      t: "table",
      caption: "Monitoring vs observability",
      head: ["Monitoring mindset", "Observability mindset"],
      rows: [
        ["Known failure modes", "Novel questions under stress"],
        ["Dashboards pre-built", "Exploration from symptoms"],
        ["System-centric metrics", "Request and outcome-centric traces"],
        ["Alert on thresholds", "Alert on user-impacting SLOs"],
        ["Tool ownership in ops", "Instrumentation owned by product teams"],
      ],
    },
    h2("Logs without correlation are noise"),
    p(
      "Terabytes of unstructured logs do not shorten incidents. They lengthen searches. Correlation identifiers — trace id, request id, business ids like order id and payment id — must propagate across every hop, every async handoff, every batch reprocessor. Without them, logs are parallel monologues.",
    ),
    p(
      "Structured logging helps. Schema discipline helps more. If each team names fields differently, joins remain archaeology. Platform libraries should enforce correlation propagation; code review should treat missing ids as a defect, not style.",
    ),
    ul([
      "Trace id on every log line",
      "Business ids at domain boundaries",
      "Consistent field names for user, tenant, workflow",
      "Log the decision: retry, reject, idempotent skip",
      "Avoid logging secrets and payloads at info in production",
    ]),
    note(
      "If support asks for an order id and engineering asks for a request id that expired, observability failed before the incident.",
    ),
    h2("Metrics that mislead"),
    p(
      "Average latency hides tail pain. Success rate hides partial degradation. Service-level metrics hide journey failure. A checkout dependency can be 'healthy' while one region's payment path fails because routing rules send a slice of traffic to a bad pool.",
    ),
    p(
      "Use metrics for SLOs users feel: journey success, queue age, error budget burn. Complement with exemplars linked to traces. Aggregate metrics tell you something hurts; exemplars and traces show where.",
    ),
    h2("Traces that stop at the boundary"),
    p(
      "Distributed tracing fails when instrumentation stops at service edges teams do not own. A trace that dies at the API gateway, the message broker, or the vendor callback is a cliff, not a map. Async work needs trace context injected into message headers and restored in consumers.",
    ),
    h3("Minimum viable trace continuity"),
    ol([
      "Auto-instrument ingress and egress in shared libraries",
      "Propagate context through HTTP headers and message metadata",
      "Span per significant domain operation, not only per framework call",
      "Record error attributes and retry attempts on spans",
      "Sample intelligently — keep errors and high-latency paths",
    ]),
    quote(
      "A trace that ends at the queue is a story that ends at 'and then something happened elsewhere'.",
    ),
    h2("Reconstructing causality under pressure"),
    p(
      "Incident response asks causal questions: what triggered, what amplified, what user impact, what changed. Observability succeeds when any engineer can pivot from symptom to timeline without tribal knowledge. That requires runbooks tied to identifiers, not runbooks that say 'ask the payments team'.",
    ),
    {
      t: "table",
      caption: "Causality checklist",
      head: ["Question in incident", "Required signal"],
      rows: [
        ["Which users affected?", "Tenant/user id on spans and logs"],
        ["Which workflow step failed?", "Named spans per business step"],
        ["Was it retry or root failure?", "Retry count on logs and spans"],
        ["What changed?", "Deployment markers correlated to trace errors"],
        ["Did we double-charge?", "Idempotency decision logs"],
      ],
    },
    h2("High-cardinality is a design choice"),
    p(
      "Teams avoid high-cardinality labels because cost spikes. Then they cannot filter by customer or order during an incident. Balance matters: guard cardinality in steady state; allow scoped diagnostic modes during incidents; use trace backends for detail, metrics for aggregates.",
    ),
    p(
      "Cost conversations should happen at design time — not after instrumentation is forbidden. Observability budget is part of platform economics, like compute.",
    ),
    h2("Ownership: who makes signals true"),
    p(
      "Central ops cannot instrument product journeys. Teams that ship services must ship spans, logs, and SLO definitions with them. 'Observability ticket' backlogs mean the platform is visible only where ops guessed correctly.",
    ),
    ul([
      "Definition of done includes instrumentation",
      "Service catalog links to dashboards and SLOs",
      "On-call runbooks reference trace queries by business id",
      "Blameless post-mortems check signal gaps",
      "Platform provides libraries — teams adopt them",
    ]),
    h2("Testing observability before production fire"),
    p(
      "Chaos and game days validate more than failover. Inject latency into a dependency and verify traces show the amplification. Publish duplicate messages and verify logs show idempotent skip. Can a new engineer follow one order id end-to-end in staging? If not, production will not magically be clearer.",
    ),
    note(
      "If staging traces are empty because 'overhead', production incidents will be expensive education.",
    ),
    h2("The three-dashboard anti-pattern"),
    p(
      "Dashboard one: infrastructure. Dashboard two: API golden signals. Dashboard three: business KPI. None links an error spike to a named customer journey. Executives see green. Support drowns. Engineering toggles between tools manually. This is not observability. It is decoration.",
    ),
    h3("What to build instead"),
    ol([
      "Journey-centric SLOs with error budgets",
      "Trace-first incident runbooks for top five user paths",
      "Log schemas enforced by lint or CI",
      "Correlation test in contract tests between services",
      "Weekly 'can we answer this question?' drill with real ids",
    ]),
    h2("From signals to organisational learning"),
    p(
      "Post-mortems should update instrumentation, not only runbooks. Missing span? Add it. Could not filter by region? Fix labels. Observability matures when incidents make the next incident cheaper to diagnose.",
    ),
    p(
      "Constrange treats observability as constraint reading for runtime: where does work actually go, where does knowledge stop, where do handoffs lose context? The answers belong in architecture — not only in a vendor contract.",
    ),
    h2("A twelve-week observability programme"),
    ol([
      "Weeks 1–2: pick three critical journeys — map services and current signal gaps",
      "Weeks 3–4: deploy correlation libraries and schema standards",
      "Weeks 5–6: define SLOs and burn-rate alerts per journey",
      "Weeks 7–8: trace async paths through broker and workers",
      "Weeks 9–10: game day — diagnose injected failure using traces only",
      "Weeks 11–12: post-mortem retrospective on signal quality metrics",
    ]),
    p(
      "Twelve weeks will not perfect the estate. It will show whether the organisation can reconstruct causality — or only watch dashboards go green.",
    ),
    h2("Vendor tools do not replace design conversations"),
    p(
      "Observability vendors sell consolidation. Consolidation helps only after teams agree what must be visible. Buying a platform before defining correlation standards produces expensive grep. The design conversation asks: which identifiers matter, which journeys earn SLOs, which tool calls are audit-relevant, which spans must never be sampled away.",
    ),
    p(
      "Constrange recommends instrumenting three journeys deeply before instrumenting thirty shallowly. Depth teaches patterns — field names, escalation queries, evaluable SLOs — that platform teams can encode in libraries. Breadth-first instrumentation creates dashboards that look complete and incidents that still wander.",
    ),
    h2("Questions for your next platform review"),
    ul([
      "Can we follow one order id across all services in one query?",
      "Do traces survive our async boundaries?",
      "Which incidents failed because signals were missing — not because fix was hard?",
      "Are SLOs defined on user journeys or only on CPU?",
      "Who owns instrumentation for services shipped last quarter?",
    ]),
    p(
      "Logs, metrics, and traces are ingredients. Observability is the meal: the ability to reconstruct what happened, why it mattered, and who felt it — while the system is still on fire.",
    ),
    p(
      "Stop when the next incident answers a causal question in minutes — not when the dashboard count reaches three.",
    ),
    p(
      "Support tickets that begin with 'what happened to my order?' are observability requirements written in customer language. If engineering cannot answer from signals alone, the next purchase of tooling will not help — design will.",
    ),
    cta(
      "Green dashboards but long incidents and confused support?",
      "Bring a recent outage and your tracing coverage map. We will help you read where causality breaks down — and design signals that answer questions you have not dashboarded yet.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Do we need all three pillars equally?",
      "Start with correlated logs and traces for critical journeys; metrics for SLOs. Depth beats even coverage.",
    ],
    [
      "How much tracing sampling is enough?",
      "Sample baseline traffic; retain errors and tail latency. Raise sampling temporarily during incidents.",
    ],
    [
      "Who should own observability tooling vs instrumentation?",
      "Platform owns tools and standards; product teams own spans and logs for their domains.",
    ],
    [
      "How do we control observability cost?",
      "Schema discipline, cardinality guardrails, and tiered retention — designed with finance, not after bill shock.",
    ],
  ],
}
