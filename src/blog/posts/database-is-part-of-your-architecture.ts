import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const databaseIsPartOfArchitecturePost: Article = {
  slug: "database-is-part-of-your-architecture",
  title: "The database is part of your architecture, not an implementation detail",
  deck:
    "Why data ownership, transaction boundaries, replication, consistency and schema evolution determine what the rest of the system can do.",
  category: "Engineering",
  date: "18 March 2026",
  dateIso: "2026-03-18",
  readTime: readTime(1500),
  author,
  tags: ["Database", "Architecture", "Data"],
  art: {
    label: "Engineering",
    cells: ["The schema outlives every service you split off it"],
    tone: "clay",
  },
  body: [
    p(
      "Architecture diagrams show services, queues, and APIs. The database appears as a cylinder — sometimes labelled, often generic. Teams debate service boundaries for weeks and treat schema as something migrations handle later. Later arrives: a column added for every exception, a report that scans tables application code was never meant to touch, replication lag that makes the UI lie, and a migration that blocks release because nobody planned evolution as architecture.",
    ),
    p(
      "The database is not storage beneath the real design. It is where ownership, consistency, and history live. Transaction boundaries, indexing strategy, replication topology, and schema evolution determine what the rest of the system can promise — often more firmly than any microservice boundary drawn above it.",
    ),
    p(
      "Constrange reads programmes that optimised for deployables and discovered the constraint was relational all along. Treating the database as an implementation detail does not make it disappear. It makes surprises expensive.",
    ),
    h2("Data ownership is architectural ownership"),
    p(
      "Who owns a service is debated in steering forums. Who owns a table is often unclear until two teams write it. Ownership means who may change shape, who resolves conflicts, who answers audit about truth at a point in time. Without that, services become views on contested ground.",
    ),
    fig(
      "database-is-architecture.svg",
      "Service layer floating above a database schema with transaction boundaries and replication paths shown as load-bearing structure",
      "Services come and go. The schema remembers.",
    ),
    {
      t: "table",
      caption: "Service ownership vs data ownership",
      head: ["Service-only thinking", "Data-aware architecture"],
      rows: [
        ["API is the contract", "Schema and API are joint contract"],
        ["Migrations are DBA work", "Migrations are design decisions"],
        ["Reports query ' somehow'", "Read models are designed paths"],
        ["Split by team chart", "Split by aggregate boundaries"],
        ["Performance fixed in code", "Performance fixed in access patterns"],
      ],
    },
    h2("Transaction boundaries define business promises"),
    p(
      "What must be true together — debited and credited, reserved and confirmed, recorded and notified — belongs in one transaction boundary unless the business explicitly accepts partial states. Splitting services without splitting transactions pushes complexity into sagas, outbox patterns, and reconciliation jobs. Those are valid. They are also architecture, not plumbing.",
    ),
    p(
      "When architects skip this conversation, engineers inherit impossible promises: the UI says complete while replication lag says otherwise. Finance closes books on numbers operations cannot explain.",
    ),
    ul([
      "Money moved in app A; inventory in app B; no shared transaction",
      "Dual writes without outbox — silent divergence",
      "Long-running locks during peak because schema ignored access path",
      "Soft deletes that reports treat as hard truth",
      "Foreign keys removed for 'flexibility'; integrity moved to bugs",
    ]),
    note(
      "If audit asks 'which system was authoritative at 16:00', and the room argues, the database was treated as detail — not architecture.",
    ),
    h2("Replication and consistency are user-visible"),
    p(
      "Primary-replica topologies, read replicas, and multi-region setups are architecture choices with product consequences. Read-your-writes may fail. Stale dashboards may approve the wrong action. Failover may lose seconds of data someone promised was safe.",
    ),
    p(
      "These are not operations trivia. They are what the application may truthfully show. Document RPO and RTO where product and finance can read them. Design UI for lag where lag exists. Do not pretend strong consistency because the ORM feels synchronous.",
    ),
    ol([
      "Users refresh until write appears — replication lag unnamed",
      "Analytics on replica breaking operational queries",
      "Failover drill never run; RPO is theoretical",
      "Cross-region conflict resolution undefined",
      "Cache invalidation tied to hope, not events",
    ]),
    h2("Schema evolution is the long game"),
    h3("Migrations as programme risk"),
    p(
      "Services deploy weekly. Schemas persist for years. A column added without migration discipline becomes permanent debt. Backfills block tables. Zero-downtime deploys fail because the schema cannot transition in steps the application supports. The programme slows — not because code is hard, because the data model was not architected for change.",
    ),
    {
      t: "table",
      caption: "Schema evolution failure modes",
      head: ["Pattern", "Cost"],
      rows: [
        ["Big-bang ALTER in production", "Outage or lock storm"],
        ["Nullable everything", "Ambiguous business truth"],
        ["JSON blob for ' flexibility'", "Unqueryable reporting pain"],
        ["No versioned views for readers", "Deploy coupling"],
        ["Backfill untested at production volume", "Weekend heroics"],
      ],
    },
    h2("Access patterns are design, not tuning later"),
    p(
      "Indexes, partition keys, and denormalisation encode how the business asks questions. Wrong patterns fail at scale regardless of service count. Architects who ignore access paths leave performance to incident response. Query plans become the hidden architecture diagram.",
    ),
    p(
      "Model read and write paths in design reviews the same way API endpoints are modelled. If reports need a shape the OLTP schema cannot serve, design a read model — deliberately, not via ad hoc joins at month-end.",
    ),
    quote(
      "You can refactor a service in a sprint. Refactoring a schema the business built on takes quarters. That is why the database is architecture.",
    ),
    h2("The ORM is not a boundary"),
    p(
      "Object-relational mapping speeds delivery and hides SQL until it cannot. Leaky abstractions produce N-plus-one queries, table locks in loops, and migrations generated without human judgement. The database still enforces physics. Ignorance appears as latency and outages, not as clean domain objects.",
    ),
    ul([
      "Lazy loading in API hot paths",
      "Migration auto-generated without rollback plan",
      "Shared database connection pool exhausted by one feature",
      "Enum in code; free text in column",
      "Historical rows edited instead of appended",
    ]),
    h2("Designing with the database on the diagram"),
    h3("Practices that treat data as first-class"),
    p(
      "Name aggregate roots and transaction boundaries before service lines. Version schema changes with application deploys using expand-contract patterns. Separate OLTP from analytical read paths where load differs. Assign a data owner alongside service owners. Run failover and backfill drills at production scale assumptions.",
    ),
    p(
      "Include RPO, RTO, and consistency guarantees in architecture decision records — not only in infrastructure tickets. Product should know what 'saved' means.",
    ),
    h2("When splitting services, split data first on paper"),
    ol([
      "Identify aggregates that must stay consistent together.",
      "Define events for what may be eventual.",
      "Plan schema per service before repos multiply.",
      "Prototype reconciliation for cross-aggregate workflows.",
      "Measure migration cost — often the true cost of microservices.",
    ]),
    p(
      "If the paper exercise reveals shared mutable state everywhere, the constraint is data — not deployment. Address that honestly or inherit a distributed monolith with worse integrity.",
    ),
    h2("Reporting and OLTP sharing one schema"),
    p(
      "The earliest compromise is often analytical queries against operational tables. It works until month-end, when a long-running report locks rows the checkout path needs. The fix is not ' bigger database' alone — it is separating read models, batch windows, or replicas with explicit lag budgets.",
    ),
    p(
      "When reports define how executives measure the business, the report query becomes architecture whether engineers admit it or not. Design that path deliberately or inherit silent contention as product flakiness.",
    ),
    {
      t: "table",
      caption: "OLTP vs reporting paths",
      head: ["Shared schema shortcut", "Designed read path"],
      rows: [
        ["Fast to first dashboard", "Predictable under month-end load"],
        ["Hidden lock contention", "Isolated failure domains"],
        ["Ambiguous source of truth", "Named authoritative store"],
        ["Schema shaped for screens and slides", "Models shaped for each job"],
        ["Ops tunes indexes in crisis", "Ops rehearses load scenarios"],
      ],
    },
    h2("Questions for your next design review"),
    ul([
      "Which tables are authoritative for which business facts?",
      "What must be atomic — and is it atomic in the database?",
      "What does the user see during replication lag?",
      "How do we migrate schema without outage at our deploy cadence?",
      "Where do reports read — and does that path starve OLTP?",
    ]),
    p(
      "Skipping these questions does not keep architecture pure. It keeps architecture ignorant until production teaches an expensive lesson.",
    ),
    p(
      "The database is part of your architecture whether or not it appears on the slide. Data ownership, transactions, replication, consistency, and schema evolution set the ceiling on what services can promise. Design there first — or spend the programme unwinding assumptions the cylinder hid.",
    ),
    p(
      "Services will be rewritten. Languages will change. The data model persists — and judges every shortcut the deployables above it once called temporary.",
    ),
    p(
      "Programmes that treat schema as detail discover, late, that the cylinder was load-bearing all along. Put it on the diagram with the same rigour as services — ownership, evolution, consistency, and failure — or accept that the hidden architecture will choose your incidents for you.",
    ),
    h3("When the database becomes the programme"),
    p(
      "Large migrations often discover that the hardest work is not lifting services — it is reconciling decades of implicit schema decisions: nullable columns that encoded business exceptions, status fields that mean different things in different regions, foreign keys that nobody dared remove because a report still depends on them. That work is architecture. It cannot be delegated to a flyway script and wished away over a long weekend.",
    ),
    p(
      "Teams that win treat schema evolution as a product: versioned, communicated, rehearsed, and owned. Teams that struggle treat it as plumbing — until plumbing blocks the quarter.",
    ),
    cta(
      "Services designed — data model still driving incidents?",
      "Bring the schema, the migrations, and the replication story. We will help you read where the database is the real boundary — and align services to data architecture honestly.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Should architects write SQL?",
      "They should understand transaction boundaries, access patterns, and migration risk — not necessarily tune every index.",
    ],
    [
      "Is eventual consistency always bad?",
      "No — but it must be named, bounded, and reflected in product behaviour.",
    ],
    [
      "When should we split databases per service?",
      "When aggregates and consistency rules are clear — not when microservices slides require it.",
    ],
    [
      "How do we fix a shared database microservices mess?",
      "Start with ownership and read paths; split schema incrementally with expand-contract, not big-bang.",
    ],
  ],
}
