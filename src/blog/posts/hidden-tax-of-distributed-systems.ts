import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const hiddenTaxDistributedSystemsPost: Article = {
  slug: "hidden-tax-of-distributed-systems",
  title: "The hidden tax of distributed systems",
  deck:
    "Latency, retries, consistency, failure modes, observability, and operational complexity that appear after a system is split apart.",
  category: "Engineering",
  date: "6 November 2026",
  dateIso: "2026-11-06",
  readTime: readTime(1500),
  author,
  tags: ["Distributed Systems", "Latency", "Operations"],
  art: {
    label: "Engineering",
    cells: ["Splitting the system splits the failure budget too"],
    tone: "tide",
  },
  body: [
    p(
      "Monoliths are unfashionable. Splitting a system into services promises independent deployment, team autonomy, and scale where it matters. The pitch is real. So is the invoice. Distributed systems charge a tax — not once at migration, but continuously in latency, retries, consistency trade-offs, failure modes, and the operational work of understanding what happened when nobody owns the whole story.",
    ),
    p(
      "The tax is easy to underquote because it does not appear on the migration plan slide. It appears in p99 latency that nobody predicted. In duplicate charges because idempotency was 'phase two'. In on-call rotations that triple because three services each page for the same customer-visible failure. In post-mortems that end with 'we need better observability' — which is another way of saying the system became harder to reason about.",
    ),
    p(
      "Constrange does not argue against distribution. It argues against distribution without a honest bill. If the tax is not priced into architecture, staffing, and customer commitments, the system will feel fast in demos and fragile in production.",
    ),
    h2("Latency is no longer a function call"),
    p(
      "Inside a monolith, latency is mostly CPU, memory, and I/O on one machine. Across services, latency is network, serialization, queue depth, retry backoff, and the slowest dependency in the chain — often one nobody remembered when drawing the diagram. Each hop adds tail risk. Tails compound.",
    ),
    fig(
      "hidden-tax-distributed.svg",
      "Service chain with latency accumulating at each hop and retry loops amplifying load",
      "The user sees one action. The system performs many networked bets.",
    ),
    {
      t: "table",
      caption: "Latency sources after the split",
      head: ["Monolith assumption", "Distributed reality"],
      rows: [
        ["One process boundary", "Many network round trips per request"],
        ["Shared memory for reads", "Cache coherence and stale reads"],
        ["Single deployment unit", "Version skew across services"],
        ["One log stream", "Correlated traces or guesswork"],
        ["Fail fast in-process", "Timeout chains and retry storms"],
      ],
    },
    h2("Retries are not free reliability"),
    p(
      "Distributed systems assume failure. Retries feel like the responsible response. They also multiply load during partial outages, reorder events, and mask root cause until the downstream service is fully dead instead of merely struggling. A retry policy written for convenience becomes a distributed denial-of-service your own clients run against you.",
    ),
    p(
      "The tax here is operational: you must design idempotency, backoff, circuit breaking, and bulkheads as seriously as you design APIs. Teams that skip this pay in incident frequency and in customer trust when the same payment posts twice.",
    ),
    ul([
      "At-least-once delivery without idempotent handlers",
      "Retry storms during partial degradation",
      "No distinction between transient and permanent failures",
      "Client and server retry policies fighting each other",
      "Success metrics that ignore duplicate side effects",
    ]),
    note(
      "If your reliability strategy is 'retry three times', you have a load amplification strategy — not a reliability strategy.",
    ),
    h2("Consistency becomes a product decision"),
    p(
      "Strong consistency is expensive in distributed systems — not morally, operationally. Eventual consistency is often the right engineering choice. It is also a product choice customers may not have been told about. 'Eventually' without a defined bound is a promise nobody can support when finance calls about mismatched balances.",
    ),
    p(
      "The hidden tax is conversation: product, finance, operations, and engineering must agree what stale data means, how long it may persist, and what the user sees while catching up. Monoliths hide this inside a transaction. Services export it as behaviour.",
    ),
    ol([
      "Read-your-writes violated across services",
      "Cross-service transactions replaced by sagas nobody tested under failure",
      "Reconciliation jobs that become the real system of record",
      "UI showing success before downstream confirmation",
      "Audit asking which number was true at 14:32",
    ]),
    h2("Failure modes multiply faster than services"),
    h3("Partial failure is the default"),
    p(
      "Monoliths fail mostly as a unit — painfully, but visibly. Distributed systems fail partially: inventory reserved, payment captured, notification lost. Each service logs success. The customer experience is failure. Debugging requires reconstructing a story from fragments across teams, time zones, and log retention policies.",
    ),
    {
      t: "table",
      caption: "Failure shapes worth designing for",
      head: ["Failure mode", "Typical symptom"],
      rows: [
        ["Network partition", "Split brain; conflicting writes"],
        ["Slow dependency", "Timeout cascades; thread pool exhaustion"],
        ["Duplicate delivery", "Double charge; duplicate shipment"],
        ["Out-of-order events", "State machines in impossible states"],
        ["Poison message", "Queue blocked; silent consumer stall"],
      ],
    },
    h2("Observability becomes architecture"),
    p(
      "Three dashboards per service is not observability. It is decoration unless traces, logs, and metrics share identifiers, retention, and ownership. The tax of distribution is paid monthly in engineer hours correlating IDs across systems — or in incidents that close as 'unknown' because nobody could reconstruct causality.",
    ),
    p(
      "Invest early in correlation, semantic conventions, and runbooks that span services. Otherwise observability budget becomes headcount budget with worse morale.",
    ),
    quote(
      "You do not pay for microservices in licences. You pay in the hours spent proving what happened across boundaries that did not exist before the split.",
    ),
    h2("Operational complexity is headcount"),
    p(
      "Each service adds deployment pipelines, secrets, certificates, capacity planning, on-call rotations, and dependency upgrades. Autonomy for teams can reduce coordination cost. It can also duplicate platform work until four teams maintain four slightly different Kafka clients. The tax is real even when every team is competent.",
    ),
    ul([
      "Platform team becomes bottleneck for 'standard' patterns",
      "Security patches multiplied by service count",
      "Local optimisations that break global invariants",
      "Integration tests that never run in CI because they are 'too hard'",
      "Documentation that rots per repo instead of per system",
    ]),
    h2("When distribution is worth the tax"),
    h3("Honest triggers for the split"),
    p(
      "Distribution earns its cost when boundaries match real constraints: independent scale for a hot path, regulatory isolation, team ownership that aligns with business capability, or technology diversity that cannot live in one deployable unit. It does not earn its cost when the goal is slide aesthetics, resume keywords, or avoiding a difficult refactor inside one codebase.",
    ),
    p(
      "A modular monolith with clear module boundaries often delivers most autonomy benefits without most network taxes. The industry forgot this because monolith became a synonym for mess. Mess is not the same as unified deployment.",
    ),
    h2("Pricing the tax before you split"),
    ol([
      "Model p99 latency for the full user journey, not per service.",
      "Define consistency guarantees in language finance and product accept.",
      "Design idempotency and sagas before go-live, not after duplicate incidents.",
      "Budget observability and on-call as part of service count, not overhead.",
      "Run a game day that kills one dependency and measures blast radius.",
    ]),
    p(
      "If the exercise reveals that customer outcomes require synchronous coupling anyway, you have learned something cheaply. Many programmes learn it expensively at scale.",
    ),
    h2("Reducing the bill without pretending it away"),
    p(
      "Consolidate services that always change together. Prefer asynchronous boundaries only where asynchrony matches the business. Invest in shared platform primitives so teams do not reinvent retries. Keep cross-service transactions rare and visible. Measure end-to-end outcomes, not service health alone.",
    ),
    p(
      "The goal is not to avoid distribution. It is to pay the tax deliberately — with staffing, design, and customer expectations aligned — instead of discovering the invoice in production at month-end volume.",
    ),
    h2("Patterns that predict an expensive split"),
    p(
      "Programmes that split early often share a shape: the monolith was genuinely messy, leadership wanted visible progress, and network costs were described as 'engineering overhead'. Six months in, the same business rules span five deployables, but now require choreography. The mess did not disappear. It gained HTTP status codes.",
    ),
    p(
      "Another pattern: the split followed the org chart, not the transaction. Each director got a service. Customers still experience one journey. Incidents still require one war room. The tax arrived; the autonomy did not.",
    ),
    ul([
      "Split before load testing the monolith's honest bottleneck",
      "No correlation ID standard before service two shipped",
      "Shared library version drift treated as 'team freedom'",
      "Product told 'it is async' without a user-visible definition",
      "Platform team sized for one cluster, not for N pipelines",
    ]),
    h2("Questions for your next platform review"),
    ul([
      "What is our all-in p99 for the customer journey after the split?",
      "Which consistency guarantees have we promised without defining 'eventually'?",
      "What happens to load when all clients retry at once?",
      "Can on-call reconstruct causality across services in one hour?",
      "Would a modular monolith achieve the same outcome with less tax?",
    ]),
    p(
      "Distributed systems are not wrong. Unpriced distribution is. Name the tax before you split — or operations will name it for you, loudly, at the wrong time.",
    ),
    p(
      "The organisations that distribute well do not pretend the tax is zero. They budget latency, staff observability, write down consistency, and rehearse failure before customers fund the lesson. That discipline is architecture — not pessimism.",
    ),
    cta(
      "Split the system and the incidents multiplied?",
      "Bring the architecture and the on-call history. We will help you read where latency, retries, and consistency are costing you — and whether the split still earns its keep.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Is the distributed tax always higher than a monolith?",
      "Not always — but it is almost always underestimated. Compare end-to-end outcomes, not box count.",
    ],
    [
      "Can better tooling eliminate the tax?",
      "Tooling reduces toil; it does not remove network, partial failure, or consistency trade-offs.",
    ],
    [
      "When is eventual consistency acceptable?",
      "When product, finance, and operations agree on bounds and user-visible behaviour — in writing.",
    ],
    [
      "How do we know we split too early?",
      "Frequent cross-service incidents for one user action, rising p99, and sagas nobody trusts are signals.",
    ],
  ],
}
