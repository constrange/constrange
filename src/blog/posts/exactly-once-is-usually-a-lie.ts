import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const exactlyOnceIsUsuallyALiePost: Article = {
  slug: "exactly-once-is-usually-a-lie",
  title: "Exactly-once is usually a lie: designing idempotent distributed workflows",
  deck:
    "Webhook, queue, worker, API, database, notification — each hop can duplicate or drop work. Design for at-least-once delivery and exactly-once effects.",
  category: "Engineering",
  date: "12 January 2027",
  dateIso: "2027-01-12",
  readTime: readTime(1500),
  author,
  tags: ["Idempotency", "Distributed systems", "Event-driven", "Reliability"],
  art: { label: "Engineering", cells: ["Duplicates are physics; double charges are negligence"], tone: "plum" },
  body: [
    p(
      "Vendors promise exactly-once processing. Architects draw arrows labelled 'once.' Production sends the same webhook twice, the queue redelivers, the lambda times out after writing to the database but before acknowledging, and the customer gets two onboarding emails and one angry finance team. Exactly-once delivery across real systems is a marketing compression of a harder truth: networks duplicate, processes crash, and clocks lie.",
    ),
    p(
      "What you can achieve is exactly-once effect — the business outcome happens once even when the work arrives many times. That requires idempotent design at every handoff, explicit deduplication keys, and honesty about which layer owns consistency.",
    ),
    p(
      "Constrange maps workflows by counting failure points: webhook ingress, queue, consumer, outbound API, database commit, notification fan-out. Each point can retry, duplicate, or reorder. Exactly-once language hides the count; idempotent design surfaces it.",
    ),
    h2("The pipeline nobody draws completely"),
    p(
      "A typical flow: partner webhook → API gateway → queue → worker → internal API → database → notification service → email provider. Seven hops. Each may retry independently. Drawing one arrow from 'event' to 'done' is how double billing ships.",
    ),
    fig(
      "exactly-once-idempotent-workflow.svg",
      "Linear pipeline with retry loops at each stage and idempotency keys flowing alongside payloads",
      "Duplicates enter at every hop. Idempotency keys are how you refuse to pay twice.",
    ),
    {
      t: "table",
      caption: "Failure modes per hop",
      head: ["Hop", "Typical failure", "Symptom without idempotency"],
      rows: [
        ["Webhook ingress", "Sender retries on slow 200", "Two queue messages for one event"],
        ["Queue", "At-least-once redelivery", "Worker runs twice"],
        ["Worker", "Crash after side effect", "Partial duplicate downstream"],
        ["Outbound API", "Timeout uncertain success", "Duplicate external record"],
        ["Database", "Unique constraint race", "500 to user, row exists"],
        ["Notification", "Provider retry", "Two emails, two SMS"],
      ],
    },
    h2("Vocabulary that keeps teams honest"),
    p(
      "At-most-once: you might lose messages. At-least-once: you might duplicate. Exactly-once delivery end-to-end requires cooperation physics rarely gives you. Exactly-once effect: processing the same logical event twice does not change outcome — balance unchanged, row upserted, notification deduped.",
    ),
    p(
      "Transactional outbox, idempotent consumers, and dedupe stores are implementation tactics for exactly-once effect — not magic words on a Kafka slide.",
    ),
    ul([
      "Idempotency key carried from ingress to all side effects",
      "Natural keys where business defines uniqueness — invoice id, event id",
      "Outbox pattern for reliable publish after DB commit",
      "Inbox pattern for deduping consumer receives",
      "Status fields: pending, completed, failed — not blind insert",
    ]),
    note(
      "If your dedupe key is only inside the worker's memory, a redelivery is a new duplicate — not a retry.",
    ),
    h2("Designing idempotent side effects"),
    h3("Database writes"),
    p(
      "Prefer upserts and unique constraints aligned to business keys. 'Insert payment' fails on duplicate; 'apply payment id P' succeeds twice with same result. Avoid sequences that allocate new primary keys on every retry — duplicates become two rows forever.",
    ),
    h3("Outbound API calls"),
    p(
      "Use provider idempotency headers where available. Where not, store 'already sent request X' before calling — or query provider state before retry. Timeout is the cruel case: unknown if call succeeded. Recovery requires reconcile loop or provider lookup — not blind retry.",
    ),
    h3("Notifications"),
    p(
      "Customers forgive slow email once; not twice. Dedupe on (user, template, business event id). Separate 'should notify' from 'did notify' with persistent log.",
    ),
    h2("The webhook trap"),
    p(
      "Partners retry until they see 200. Your handler must respond quickly and dedupe on event id before heavy work — or accept enqueue with dedupe at queue boundary. Processing synchronously in the webhook thread couples availability to partner retry storms.",
    ),
    p(
      "Return 200 only when work is durably recorded — in inbox table or queue — not when processing finished. Finish asynchronously; dedupe at record boundary.",
    ),
    {
      t: "table",
      caption: "Ingress patterns",
      head: ["Pattern", "Trade-off"],
      rows: [
        ["Sync process in webhook", "Simple; fragile under retry and slow work"],
        ["Inbox table then async", "Extra storage; strong dedupe at edge"],
        ["Queue with dedupe id", "Scales; requires poison message handling"],
        ["Partner signature + timestamp window", "Security; not a substitute for idempotency"],
      ],
    },
    h2("Sagas, compensation, and ordering"),
    p(
      "Multi-step workflows — reserve inventory, charge card, ship — need compensating actions or forward recovery. Idempotency at each step prevents double charge; saga state machine prevents double ship. Ordering matters when later steps assume earlier completion — use per-entity sequencing or versioning, not global queue order fantasy.",
    ),
    p(
      "Partial completion is normal. Design explicit states: charged but not shipped triggers ops queue, not silent duplicate ship on retry.",
    ),
    quote(
      "Retries are how distributed systems say 'maybe.' Idempotency is how you answer 'still no.'",
    ),
    h2("Observability for duplicates"),
    p(
      "Metric duplicate detections: same idempotency key seen twice, constraint violations caught, notification dedupe hits. Alert on rate spikes — partner config change, new deploy without keys, broken inbox cleanup.",
    ),
    p(
      "Traces should carry idempotency key as baggage so support finds both attempts in one view. Without it, 'user clicked once' disputes devolve into log archaeology.",
    ),
    h2("Testing what vendors omit"),
    p(
      "Chaos tests: replay webhooks, kill worker mid-transaction, delay API responses into timeout, redeliver queue messages deliberately. Unit tests with mock 'called twice' at each adapter. Staging that never duplicates is a demo environment.",
    ),
    p(
      "Constrange often finds idempotency implemented only at the database — while notifications and CRM updates still double-fire because those adapters were 'later.' Later is production day one for duplicates.",
    ),
    h2("When 'exactly-once' products fit"),
    p(
      "Some streams offer idempotent producers and transactional consume-process-produce within a broker boundary. Useful — bounded. The moment you call HTTP or send email, you left the boundary. Account for external hops explicitly.",
    ),
    h3("Ledger and finance"),
    p(
      "Money requires exactly-once effect strongest. Use immutable ledger entries keyed by transaction id; reversals as new entries, not deletes. Never 'subtract twice' on retry — append compensating entry.",
    ),
    ol([
      "Assign stable idempotency key at system ingress",
      "Persist dedupe before irreversible side effects",
      "Align DB constraints to business natural keys",
      "Instrument duplicate detection and unknown-timeout paths",
      "Chaos-test redelivery at every hop before launch",
    ]),
    h2("Organizational symptoms"),
    p(
      "Support tickets: 'charged twice,' 'two accounts,' 'email spam.' Engineering blame partner retries without ingress dedupe. Finance escalates; engineering adds retry backoff — which does not stop duplicates, only delays them.",
    ),
    p(
      "Product asks for 'real-time exactly-once' as one requirement. Split it: real-time visibility vs effect consistency — different designs, different costs.",
    ),
    h2("Pragmatic rollout"),
    p(
      "Inventory the workflow hops. Mark which side effects are reversible vs irreversible. Implement idempotency on irreversible first — payments, provisioning, external comms. Reversible recompute can tolerate duplicate with waste; irreversible cannot.",
    ),
    p(
      "Document idempotency key ownership: who generates, who stores, TTL, cleanup. Keys without TTL fill storage; keys without owner drift across services.",
    ),
    h2("Poison messages and the idempotency boundary"),
    p(
      "A malformed payload that always throws will retry forever unless you move it aside. Idempotency does not fix bad data — it prevents good data from executing twice. Pair dedupe with failure classification: transient errors retry with backoff; permanent errors land in a dead-letter queue with the idempotency key attached so replay is a deliberate operator action, not an accidental loop.",
    ),
    p(
      "Replay tooling must respect keys. Support 'run again' buttons that generate new keys are duplicate factories. Admin replay should reuse the original business event id or refuse when completed state already exists.",
    ),
    h3("Cross-service contract"),
    p(
      "Publish idempotency key format and retention expectations to partner teams and vendors. Internal services that strip headers at the gateway undo your design. Treat the key like a correlation id — required on ingress, propagated on egress, logged in audit.",
    ),
    h2("Accept the lie, ship the truth"),
    p(
      "Stop selling exactly-once across the pipeline. Ship at-least-once transport with exactly-once effect at business boundaries — named keys, constraints, dedupe stores, reconcile loops for unknown timeouts. Honest architecture reduces incidents more than optimistic labelling.",
    ),
    p(
      "The contrarian win: teams that embrace duplication as default design faster — they test redelivery on day one. Teams that believe exactly-once discover duplication in production, under revenue recognition pressure.",
    ),
    h2("Questions before the next launch"),
    ul([
      "Which side effects are irreversible if run twice?",
      "Where is the idempotency key generated — and who trusts it?",
      "What happens on timeout when success is unknown?",
      "Can support trace both attempts of the same logical event?",
      "Have we replayed webhooks and redelivered queue messages in staging?",
    ]),
    p(
      "Weak answers on any row are launch blockers for payment, provisioning, and external comms — not polish items for a later sprint.",
    ),
    cta(
      "Workflow 'works in happy path' but duplicates under retry?",
      "We trace your pipeline hop by hop and design idempotency where effects are irreversible — not where slides are prettier.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Is a UUID primary key enough for idempotency?",
      "No — a new UUID per retry creates duplicate rows. Keys must be stable across retries of the same logical operation.",
    ],
    [
      "How long should dedupe records live?",
      "Longer than maximum retry window from partners and queues — often days to weeks. Define TTL per workflow with legal retention in mind.",
    ],
    [
      "What about ordered processing?",
      "Ordering and idempotency are separate. Per-entity sequence numbers help ordering; idempotency keys prevent duplicate effects when order wobbles.",
    ],
    [
      "Can serverless avoid this complexity?",
      "No — Lambda timeouts and API Gateway retries increase duplicate risk. Serverless demands clearer idempotency, not less.",
    ],
  ],
}
