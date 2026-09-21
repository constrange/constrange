import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const eventDrivenArchitectureOrderPost: Article = {
  slug: "event-driven-architecture-order",
  title: "Event-driven architecture: what happens when nobody knows the order anymore?",
  deck:
    "Eventual consistency, idempotency, duplicate events, ordering, replay, dead-letter queues and debugging distributed workflows.",
  category: "Engineering",
  date: "1 April 2026",
  dateIso: "2026-04-01",
  readTime: readTime(1500),
  author,
  tags: ["Architecture", "Events", "Distributed Systems"],
  art: {
    label: "Engineering",
    cells: ["When order disappears, causality becomes a design problem"],
    tone: "plum",
  },
  body: [
    p(
      "Event-driven architecture promises decoupling. Services publish facts. Other services react. Nobody waits on a synchronous call chain. The diagram looks clean. Operations discovers a harder truth: when nobody owns the order of work, nobody owns the story of what happened.",
    ),
    p(
      "A payment succeeds. An inventory reservation fails. A notification sends anyway. A customer receives confirmation for an order that was never fulfilled. Each service behaved correctly in isolation. The system failed in composition. The failure mode is not a bug in one handler. It is the absence of a shared model for causality across asynchronous boundaries.",
    ),
    p(
      "Constrange reviews event-driven programmes that optimised for throughput and forgot that humans still expect sequences: created before shipped, authorised before debited, agreed before recorded. Eventual consistency is a design choice, not an excuse. If you cannot explain what 'eventually' means in minutes, you have a product problem dressed as architecture.",
    ),
    h2("What you lose when you lose order"),
    p(
      "Synchronous systems hide ordering behind a call stack. Event-driven systems expose it as a design problem. Messages arrive out of order. They arrive twice. They arrive after a compensating action already ran. Consumers infer state from partial history. Without explicit rules, inference becomes guesswork with audit consequences.",
    ),
    fig(
      "event-driven-order.svg",
      "Event stream with messages arriving out of sequence and duplicate handlers firing",
      "Correct individual services can still produce incorrect outcomes when order and deduplication are undefined.",
    ),
    {
      t: "table",
      caption: "Order assumptions vs event reality",
      head: ["What teams assume", "What production does"],
      rows: [
        ["Events arrive once", "At-least-once delivery is the default"],
        ["Events arrive in cause order", "Network and retry reorder freely"],
        ["Consumers see full history", "Consumers see their subscription slice"],
        ["Failure stops the chain", "Failure forks parallel dead paths"],
        ["Replay is rare", "Replay becomes the debugging tool"],
      ],
    },
    h2("Eventual consistency is a contract, not a shrug"),
    p(
      "Teams say 'eventually consistent' as if it ends the conversation. It should start one. Eventually when? Under what failure conditions? What does the user see in the meantime? What operations can run safely on stale state? What happens if 'eventually' takes longer than the business tolerates?",
    ),
    p(
      "Strong consistency everywhere is expensive and often unnecessary. Undefined consistency is expensive in a different currency: support tickets, manual reconciliation, reversals, and the quiet work of teams who no longer trust the platform numbers.",
    ),
    ul([
      "User-visible state: what can be shown while downstream catches up",
      "Operational state: what back-office may act on before all handlers complete",
      "Financial state: what may never be wrong even briefly",
      "Audit state: what must be reconstructable months later",
      "Recovery state: what replay must restore without double effect",
    ]),
    note(
      "If you cannot write the 'eventually' SLA on a whiteboard, you do not have eventual consistency. You have hope.",
    ),
    h2("Idempotency is not optional"),
    p(
      "At-least-once delivery is the practical default for durable messaging. That means handlers will see duplicates. Idempotency keys, natural keys, compare-and-set writes, and deduplication stores are not optimisation. They are the minimum bar for a consumer that mutates state.",
    ),
    p(
      "Non-idempotent handlers fail quietly at first. A duplicate shipment. A second refund. Two ledger entries for one authorisation. The incident post-mortem blames 'a duplicate message' as if duplication were exceptional. In event-driven systems, duplication is weather.",
    ),
    ol([
      "Define the idempotency key at the domain boundary — not inside each handler ad hoc",
      "Persist processed keys with the same durability as the side effect",
      "Make side effects safe under retry: upsert, not blind insert",
      "Test duplicate delivery in CI, not only happy path",
      "Log idempotency decisions — 'ignored duplicate' is operational signal",
    ]),
    h2("Ordering strategies that actually help"),
    h3("Partition by key"),
    p(
      "Ordering guarantees are expensive globally and cheap locally. Partition streams by entity key — order id, account id, aggregate id — so all events for one entity serialize through one partition. Cross-entity ordering still requires choreography or sagas. Within-entity ordering becomes tractable.",
    ),
    h3("Version and sequence numbers"),
    p(
      "Every emitted event should carry a monotonic version for its aggregate. Consumers reject or buffer stale versions. This does not solve every race, but it stops silent regression where an older event overwrites newer truth.",
    ),
    h3("Process managers and sagas"),
    p(
      "When a workflow spans services, something must remember where the workflow is. A process manager, saga orchestrator, or state machine — name it what you will — holds the cross-service sequence. Hoping consumers infer workflow state from unrelated topics is how organisations learn what a dead-letter queue is for.",
    ),
    quote(
      "Decoupling services without decoupling accountability for outcomes is how distributed systems teach finance new reconciliation rituals.",
    ),
    h2("Duplicate events and the stories they tell"),
    p(
      "Duplicates arrive from retries, producer restarts, network timeouts, and consumer redelivery after partial failure. Each duplicate is a signal that the boundary between 'accepted' and 'done' was drawn in the wrong place. If publishing succeeds but processing fails, you will retry. If retry is not idempotent, you will incident.",
    ),
    p(
      "Teams sometimes ban retries to stop duplicates. That trades duplicate work for lost work — usually worse. The fix is idempotent processing and explicit outbox patterns so publish and persist are one decision, not two hopes.",
    ),
    {
      t: "table",
      caption: "Duplicate source and response",
      head: ["Source", "Design response"],
      rows: [
        ["Consumer crash after side effect", "Idempotent handler + processed store"],
        ["Producer retry after timeout", "Outbox or transactional publish"],
        ["Broker redelivery", "Visibility timeout aligned to processing time"],
        ["Replay for recovery", "Replay mode that respects idempotency keys"],
        ["Manual republish", "Runbook with blast radius limits"],
      ],
    },
    h2("Replay: powerful and dangerous"),
    p(
      "Replay is the superpower of event logs. It is also how you send twelve months of price changes to a consumer that sends customer emails. Replay requires contracts: which topics, which offsets, which consumers, what side effects are safe, who approves production replay, how you prove idempotency held.",
    ),
    p(
      "Development replays freely. Production replay without guardrails is a change event without a change ticket. Constrange recommends replay runbooks before you need them — written when calm, not during an outage when someone proposes 'just reset the offset'.",
    ),
    h2("Dead-letter queues are symptoms, not solutions"),
    p(
      "A dead-letter queue is where messages go when a consumer gives up. It is not a strategy. It is a pile. DLQs accumulate poison messages, schema drift failures, and bugs masquerading as bad data. Without ownership, the DLQ becomes a shadow backlog someone checks after customers complain.",
    ),
    ul([
      "Alert on DLQ depth and age — not only on consumer lag",
      "Classify failures: transient, bug, schema, poison payload",
      "Route poison messages to quarantine with context, not infinite retry",
      "Assign an owner who can re-drive or discard with audit trail",
      "Review DLQ trends weekly — spikes precede incidents",
    ]),
    note(
      "If your DLQ has no owner and no SLO, it is a junk drawer with a Kafka topic name.",
    ),
    h2("Debugging when causality is fragmented"),
    p(
      "Distributed workflows fail in ways monolith stack traces never showed. Traces must cross service boundaries. Logs must share correlation identifiers. Business identifiers must appear in every handler — order id, payment id, workflow id — not only request ids that change at each hop.",
    ),
    p(
      "Support asks 'what happened to order 8842?' Engineering grep logs without a shared key and reconstructs fiction. The fix is not another dashboard. It is a correlation model agreed at design time and enforced in libraries, not left to each team's taste.",
    ),
    h3("Questions that expose ordering debt"),
    ol([
      "What can a user do while handlers are still catching up?",
      "Which operations are safe to retry from the UI?",
      "What happens if event B arrives before event A?",
      "How do we prove a handler ran exactly once in effect?",
      "What is the runbook for replaying last Tuesday?",
    ]),
    h2("Patterns that survive contact with operations"),
    p(
      "Outbox pattern for reliable publish. Inbox pattern for deduplication at consume. Explicit sagas for multi-step business processes. Read models that declare staleness. Compensating transactions where rollback is business-meaningful, not only database rollback.",
    ),
    p(
      "Event-driven architecture works when teams treat messages as contracts: schema, ordering scope, idempotency, and failure semantics documented beside the topic name. It fails when topics are a dumping ground for 'something happened' strings and every consumer interprets differently.",
    ),
    h2("A twelve-week hardening programme"),
    ol([
      "Weeks 1–2: inventory topics and consumers — mark mutating handlers, list idempotency keys",
      "Weeks 3–4: introduce correlation ids and trace propagation across all consumers",
      "Weeks 5–6: chaos-test duplicate delivery and out-of-order delivery in staging",
      "Weeks 7–8: DLQ ownership, alerts, classification runbook",
      "Weeks 9–10: document replay procedure with approval gate",
      "Weeks 11–12: measure reconciliation volume — did engineering debt drop?",
    ]),
    p(
      "Twelve weeks will not perfect the estate. It will show whether the organisation treats events as architecture or as a fire-and-forget integration trick.",
    ),
    h2("Questions for your next architecture review"),
    ul([
      "Which user journeys require strict ordering — have we partitioned for them?",
      "What happens on duplicate delivery for each mutating consumer?",
      "Where is 'eventually' defined in time and what breaks if we miss it?",
      "Who owns the DLQ and what is the re-drive process?",
      "Can we reconstruct order 8842 from logs and events alone?",
    ]),
    p(
      "Event-driven systems scale teams and throughput. They do not scale ambiguity. When nobody knows the order anymore, the organisation pays in reconciliation, reversals, and trust — until someone designs causality on purpose.",
    ),
    cta(
      "Event streams growing faster than your confidence in outcomes?",
      "Bring your topics, DLQ depth, and a incident story. We will help you read where ordering, idempotency and replay need to become explicit — before the next duplicate becomes a customer problem.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Do we need global ordering?",
      "Rarely. Partition ordering by business key is usually enough. Global order is costly and often mistaken for a substitute for workflow design.",
    ],
    [
      "Is exactly-once delivery worth pursuing?",
      "Exactly-once effect is the goal — usually via idempotent consumers and transactional outbox, not broker magic alone.",
    ],
    [
      "How do we choose between choreography and orchestration?",
      "Choreography suits simple reactions. Multi-step business outcomes with compensations usually need an explicit process owner.",
    ],
    [
      "When should we replay production events?",
      "When runbooks, idempotency, and approval gates exist — not when someone needs a quick fix during an outage.",
    ],
  ],
}
