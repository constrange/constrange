import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const beforeYouScaleFindLimitPost: Article = {
  slug: "before-you-scale-find-the-limit",
  title: "Before you scale the system, find what actually limits it",
  deck:
    "CPU may not be the bottleneck; examine database locks, queues, downstream APIs, network latency, connection pools, human approvals and workload shape.",
  category: "Engineering",
  date: "22 December 2026",
  dateIso: "2026-12-22",
  readTime: readTime(1500),
  author,
  tags: ["Scaling", "Performance", "Constraints", "Architecture"],
  art: { label: "Engineering", cells: ["Scale the wrong layer and the limit moves"], tone: "moss" },
  body: [
    p(
      "Scaling programmes begin with a familiar reflex: add instances, enlarge databases, buy a cache, request a bigger cluster. The reflex assumes the bottleneck is compute. Sometimes it is. Often it is a row lock in a table that every request touches, a queue whose consumers process one message at a time, a downstream API with a hard rate limit and no bulk path, a connection pool sized for fifty concurrent users on a system that now has five thousand, or a human approval step that was invisible in architecture diagrams because it happened in email.",
    ),
    p(
      "Scaling the wrong layer spends budget, adds complexity, and leaves the limit intact — now hidden behind more hardware. The queue still backs up. The database still serialises. Finance still waits for a manager who receives four hundred emails a day. The system is 'scaled' and still slow in the way users care about.",
    ),
    p(
      "Constrange treats scaling as constraint reading first, capacity second. Find what actually limits throughput, latency, or cost under real workload shape — then scale that layer, redesign the workflow, or choose explicitly to accept the limit.",
    ),
    h2("Why CPU is the default suspect"),
    p(
      "CPU graphs are easy. Monitoring defaults surface utilisation. Vendors sell horizontal scale. Load tests often saturate application servers while leaving downstream dependencies mocked or under-represented. Teams optimise what they can see.",
    ),
    p(
      "Production workload shape differs from load tests: bursty traffic, long-tail queries, batch overlap with online peaks, retry storms when a dependency flickers, cron jobs that collide at the hour. The limiting resource under that shape may be connections, locks, or people — not cores.",
    ),
    fig(
      "before-scale-find-limit.svg",
      "A wide front end feeding into a narrow choke point — a lock, queue, API or inbox — before the rest of the pipeline",
      "Adding width before the choke point does not increase flow.",
    ),
    {
      t: "table",
      caption: "Symptom versus likely limit",
      head: ["What users see", "What to investigate first"],
      rows: [
        ["Slow pages under moderate load", "Database locks, N+1 queries, missing indexes"],
        ["Timeouts at peak only", "Connection pools, thread pools, downstream rate limits"],
        ["Growing backlog", "Queue consumer count, poison messages, serial steps"],
        ["Flat CPU but rising latency", "Network, external APIs, synchronous chains"],
        ["Everything slow on month-end", "Batch contention, human approvals, report jobs"],
      ],
    },
    h2("Database locks and query shape"),
    p(
      "Databases become bottlenecks through contention, not only size. Hot rows — inventory counts, sequence tables, status flags updated on every request — serialise traffic that application servers process in parallel. Long transactions hold locks while calling external APIs, turning the database into a synchronous choke point.",
    ),
    p(
      "Scaling read replicas does not fix write contention. Caching does not fix incorrect query patterns that scan millions of rows per click. Remedies include reshaping transactions, moving counters to appropriate stores, indexing for actual filters, splitting read and write paths, and redesigning workflows that require global locks.",
    ),
    ul([
      "Profile waits: lock time, not only query duration",
      "Identify hot keys and sequential IDs pounded on insert",
      "Measure transaction scope — external calls inside transactions are a smell",
      "Review ORM defaults that hide N+1 and table scans",
      "Load test with realistic write mix, not read-only browsing",
    ]),
    note(
      "If doubling application servers doubles lock waits, the database is the limit — not insufficient pods.",
    ),
    h2("Queues and asynchronous bottlenecks"),
    p(
      "Queues decouple producers and consumers — until consumers are too few, too slow, or serial by design. Message age grows while CPU stays idle. Poison messages retry indefinitely. Priority lanes starve bulk work. Batch consumers run only at night while daytime traffic floods the dead-letter queue.",
    ),
    p(
      "Scaling queues means scaling consumers with compatible processing logic, idempotency for retries, back-pressure on producers, and visibility into age and error taxonomy. Adding queue infrastructure without consumer capacity moves the backlog, not the limit.",
    ),
    h3("Retry storms"),
    p(
      "When downstream fails, retries multiply traffic. Autoscaling on the service that retries can amplify an outage into a denial of service against a fragile dependency. Limits include circuit breakers, jittered backoff, and budgets on concurrent outbound calls — not only more workers.",
    ),
    h2("Downstream APIs and partner limits"),
    p(
      "Modern systems are chains. Your platform may scale while a credit check, identity provider, legacy mainframe, or government API enforces low rate limits, serial processing, or maintenance windows. Synchronous orchestration across such links makes their limit yours.",
    ),
    p(
      "Remedies include bulk or batch interfaces where partners offer them, caching within policy, asynchronous completion with user notification, local replicas where contracts permit, and honest SLA communication when external limits are immovable. Scaling your front end without negotiating downstream capacity produces queued user frustration.",
    ),
    {
      t: "table",
      caption: "Downstream constraint responses",
      head: ["If the limit is…", "Consider…"],
      rows: [
        ["Hard rate cap", "Shape traffic, cache, async handoff"],
        ["Serial partner process", "Queue and notify; do not poll synchronously"],
        ["Fragile legacy window", "Schedule work; avoid peak overlap"],
        ["Expensive per-call pricing", "Reduce calls via deduplication and batching"],
      ],
    },
    h2("Network latency and synchronous chains"),
    p(
      "Microservice architectures multiply network hops. Each hop adds latency variance. A user-facing request that calls five services serially may never meet its budget even when every service is 'fast'. The limit is topology, not individual service CPU.",
    ),
    p(
      "Remedies: parallelise independent calls, collapse read models, move aggregation to the edge, use caching for stable reads, and challenge whether synchronous coupling is necessary. Observability must trace end-to-end latency — not only per-service green dashboards.",
    ),
    h2("Connection pools and file descriptors"),
    p(
      "Application instances multiply connections to databases, caches, and partners. Pool defaults tuned for small deploys exhaust under scale — requests wait for connections while CPU is free. Similar limits appear with file descriptors, thread pools, and ephemeral ports under high concurrency.",
    ),
    p(
      "Finding the limit means measuring wait time on pool acquisition, not only query time. Fixes adjust pool sizes coherently with database max connections, use pooling proxies where appropriate, and reduce connection churn from per-request handshakes.",
    ),
    quote(
      "Scaling instances without scaling the pool budget trades one queue for another — at the database door.",
    ),
    h2("Human approvals and workflow shape"),
    p(
      "Some limits are not technical. A loan decision, exception grant, or compliance sign-off requires a human with authority. Under load, the inbox becomes the queue. No cluster size clears a approval step that policy requires and nobody staffed for volume.",
    ),
    p(
      "Reading the limit honestly may mean redesigning delegation, pre-approving rules for low-risk cases, staffing operations for peak, or accepting latency as a compliance feature — not masking it with spinner animations on an API that waits for email.",
    ),
    ul([
      "Measure time in each human state, not only system processing time",
      "Identify approvals that are policy-required versus habit-required",
      "Design escalation when human queues exceed SLA",
      "Do not automate upstream of an immovable human step without capacity plan",
      "Publish user expectations when human limits are real constraints",
    ]),
    h2("Workload shape and hidden synchronisation"),
    p(
      "Peaks define limits. Month-end batch jobs colliding with online traffic, marketing events hitting cold caches, end-of-day reconciliations locking tables — scale plans must model shape, not average load. Autoscaling on CPU misses memory-heavy jobs, garbage collection pauses, and I/O wait.",
    ),
    p(
      "Hidden synchronisation appears when every request hits the same cache miss, rebuilds the same expensive report, or triggers the same nightly job early because timers align. The limit is thundering herd, solved by stagger, pre-warm, single-flight patterns, and separating batch from online paths.",
    ),
    h2("How to find the limit before you spend"),
    ol([
      "Trace representative slow requests end-to-end — include humans and partners",
      "Measure wait time at each resource: locks, pools, queues, APIs",
      "Load test with production-shaped mix, retries, and batch overlap",
      "Identify the first saturating resource — that is the candidate limit",
      "Fix or scale that layer; re-measure before buying more of everything",
    ]),
    p(
      "One disciplined week of measurement beats a quarter of horizontal scaling on the wrong tier.",
    ),
    h2("When scaling is the right answer"),
    p(
      "Sometimes the limit truly is compute — stateless application tiers, GPU inference, embarrassingly parallel work with no shared hot row. Scale there with confidence after measurement. The point is not to avoid scaling. It is to scale the binding constraint, not the loudest metric on a dashboard.",
    ),
    h2("Questions for your next capacity review"),
    ul([
      "Under peak, what resource hits maximum first — and where do requests wait?",
      "Which steps are serial by design — including humans and partners?",
      "If we double instances, what downstream limit breaks next?",
      "Does batch overlap online traffic — and who owns scheduling?",
      "Are we scaling to avoid redesigning a hot row or approval workflow?",
    ]),
    p(
      "If the programme cannot name the limiting resource, it is buying insurance against ignorance — not capacity against demand.",
    ),
    cta(
      "Scaled the cluster and still hit the wall?",
      "Bring your traces, queues, and month-end stories. We will help you find what actually limits the system — before the next invoice arrives.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "How long should we spend finding the limit?",
      "Often days to two weeks of measurement beats months of misdirected scaling spend. Depth scales with blast radius.",
    ],
    [
      "Can autoscaling solve most bottlenecks?",
      "It helps stateless tiers with headroom downstream. It worsens retry storms and pool exhaustion if limits are elsewhere.",
    ],
    [
      "What if the limit is a vendor API we cannot change?",
      "Shape workload: async, cache within policy, batch, or accept latency. Scaling your tier rarely changes theirs.",
    ],
    [
      "Do we need expensive load tests?",
      "Not always full production mirror. Start with traced real traffic replay and targeted saturation of suspected resources.",
    ],
  ],
}
