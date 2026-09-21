import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const dataPipelinesFailureModesPost: Article = {
  slug: "data-pipelines-have-failure-modes",
  title: "Data pipelines have failure modes too",
  deck:
    "Late data, duplicate records, schema drift, backfills, reconciliation, lineage and what happens when downstream decisions depend on bad data.",
  category: "Engineering",
  date: "1 June 2026",
  dateIso: "2026-06-01",
  readTime: readTime(1500),
  author,
  tags: ["Data pipelines", "Reliability", "Lineage", "Operations"],
  art: { label: "Engineering", cells: ["Bad data becomes bad decisions quietly"], tone: "pine" },
  body: [
    p(
      "Data pipelines are treated as plumbing: invisible when they work, someone else's problem when they do not. Downstream systems — dashboards, models, automations, customer communications — inherit that optimism. They assume the table refreshed on schedule, the keys still join, the definition of 'active customer' did not change silently last Tuesday. When the assumption breaks, the failure surfaces as a wrong offer, a false green metric, or an automated decision nobody can explain in audit.",
    ),
    p(
      "Pipelines fail in predictable ways. Not only hard outages — red jobs, empty tables — but soft failures that look like success: late data marked fresh, duplicates counted twice, schema drift absorbed by permissive loaders, backfills that rewrite history without announcement. Those failures are expensive because they wear the costume of correctness.",
    ),
    p(
      "Constrange maps data programmes as chains of decisions under constraint. The constraint is rarely 'can we move data'. It is whether downstream owners can trust timing, definition, and lineage when the cost of being wrong is real.",
    ),
    h2("Hard failures versus soft failures"),
    p(
      "Hard failures stop the job. Alerts fire. On-call responds. Soft failures complete green: the job ran, rows landed, dashboards updated. The data is wrong, stale, duplicated, or interpreted under a definition that changed without a version bump. Soft failures dominate in mature organisations because pipelines are engineered for uptime first and truth second.",
    ),
    fig(
      "data-pipeline-failures.svg",
      "A pipeline with green checkmarks leading to a dashboard that shows the wrong conclusion",
      "Success in the job log is not success for the decision that consumed the data.",
    ),
    {
      t: "table",
      caption: "Two kinds of pipeline failure",
      head: ["Hard failure", "Soft failure"],
      rows: [
        ["Job did not complete", "Job completed with wrong results"],
        ["Obvious to monitoring", "Obvious only in outcomes or audit"],
        ["Fix: restart, patch, restore", "Fix: reconcile, communicate, reprocess"],
        ["Short blast radius if caught fast", "Long blast radius if trusted silently"],
        ["Owned by platform on-call", "Owned by nobody until incident"],
      ],
    },
    h2("Late data: when fresh is a label, not a property"),
    p(
      "Late data is the common case. Upstream systems miss windows. Files arrive without warning. Batch overlap creates partial days. Downstream consumers read a timestamp that reflects load time, not event time — and make intraday decisions as if they were complete.",
    ),
    p(
      "Programmes need explicit freshness contracts: maximum latency per dataset class, what downstream must do when latency is exceeded, and visibility when data is provisional versus final. Without contracts, every dashboard implicitly promises real time it cannot deliver.",
    ),
    ul([
      "Distinguish event time, processing time, and publish time in metadata",
      "Surface 'partial day' and 'awaiting source X' states in consumer UIs",
      "Block high-risk automations when freshness SLAs are breached",
      "Measure lateness per source, not only job duration",
      "Publish a calendar of known late sources — honesty beats surprise",
    ]),
    note(
      "If downstream cannot tell provisional from final, late data will eventually become a wrong decision.",
    ),
    h2("Duplicate records: counting the same thing twice"),
    p(
      "Duplicates enter through retries, overlapping extracts, merged systems with conflicting keys, and 'helpful' manual uploads. Pipelines deduplicate late — or not at all — while metrics and models treat each row as independent truth.",
    ),
    p(
      "Duplicate failure modes include inflated revenue, understated churn, double-sent customer messages, and models that learn from repeated rows as if they were evidence. Prevention requires idempotent loads, stable surrogate keys, reconciliation reports, and rules for what happens when two sources disagree on identity.",
    ),
    h3("Reconciliation is not a one-off migration task"),
    p(
      "Reconciliation belongs in daily operations: row counts versus source, sum checks on critical fields, duplicate key reports, and sampled joins to operational systems. When reconciliation diverges, downstream should know before the executive review, not after.",
    ),
    h2("Schema drift: when the contract changes without a meeting"),
    p(
      "Sources add columns, rename fields, change types, split tables, or stop sending values the pipeline mapped to meaningful categories. Permissive schemas hide the damage until a null rate spikes or a model feature silently zeroes out.",
    ),
    p(
      "Schema discipline combines contracts, versioning, and breaking-change detection. Consumers declare dependencies. Producers announce changes. Loaders fail closed when unknown fields or type violations appear — rather than ingesting ambiguity that surfaces weeks later in a forecast.",
    ),
    {
      t: "table",
      caption: "Schema drift symptoms",
      head: ["Signal", "Likely cause"],
      rows: [
        ["Sudden null spike in a stable field", "Source stopped populating or renamed"],
        ["Category distribution shift", "Encoding change or new default"],
        ["Join rate collapse", "Key format or granularity changed"],
        ["Downstream test pass, business wrong", "Tests check shape, not meaning"],
      ],
    },
    h2("Backfills: rewriting history responsibly"),
    p(
      "Backfills fix past mistakes — or introduce new ones. They replay months of data with a changed rule, overwrite partitions, or rebuild aggregates while dashboards still serve yesterday's logic. Without communication and versioning, two teams report different numbers for the same quarter and both believe they are correct.",
    ),
    p(
      "Responsible backfill practice names scope, reason, expected metric movement, rollback plan, and downstream reprocessing order. It versions derived tables. It schedules backfills away from month-end close unless urgency truly dominates — and documents who signed that trade-off.",
    ),
    ol([
      "Announce scope: dates, tables, fields affected",
      "Snapshot before overwrite where audit requires point-in-time truth",
      "Reprocess dependents in dependency order, not convenience order",
      "Validate with reconciliation and business sign-off on material shifts",
      "Publish a single 'as of' narrative for executives — not competing spreadsheets",
    ]),
    h2("Lineage: knowing what you are looking at"),
    p(
      "Lineage answers where a number came from, which transformation applied, and which source version contributed. Without lineage, incidents devolve into folklore. With lineage, teams trace a wrong customer segment to a specific extract, join, or filter — and fix the right layer.",
    ),
    p(
      "Lineage need not be exotic to be useful. Minimum viable lineage: source system, extract time, transformation version, owning team, and documentation link for field definitions. Fancy graphs help; accountable metadata helps more.",
    ),
    quote(
      "A metric nobody can trace is a metric nobody should automate against.",
    ),
    h2("When downstream decisions depend on bad data"),
    p(
      "Automations amplify pipeline errors. A wrong segment becomes a thousand emails. A stale credit flag becomes declined applications. A model trained on duplicated rows becomes institutional confidence in a pattern that was never real. The decision layer rarely fails first — it fails loudest.",
    ),
    p(
      "Design downstream systems to assume pipeline imperfection: validation gates, human review for high-impact paths, circuit breakers when anomaly scores spike, and kill switches when freshness or reconciliation fails. Trust must be earned continuously, not assumed at go-live.",
    ),
    h3("Human approvals are part of the architecture"),
    p(
      "When regulators or brand risk demand it, humans remain in the loop not because automation failed philosophically but because data quality cannot yet meet the decision threshold. That is a constraint to name honestly — not a temporary embarrassment to engineer around silently.",
    ),
    h2("Operating model: who owns truth"),
    p(
      "Pipeline platforms own uptime. Data owners own definitions. Consumers own how they use data. When those roles blur, soft failures persist because each team assumes another will notice. Incidents repeat with new dashboards.",
    ),
    p(
      "Strong programmes publish data products with SLAs, known limitations, and escalation paths — the same seriousness as customer-facing APIs. Internal data is still a product. Its users make real decisions.",
    ),
    h2("A twelve-month reliability programme"),
    ol([
      "Quarter one: inventory critical datasets, consumers, and freshness requirements",
      "Quarter two: implement reconciliation and schema contracts on top five sources",
      "Quarter three: add lineage metadata and block automations on SLA breach",
      "Quarter four: run a controlled backfill drill — measure communication and rollback",
    ]),
    p(
      "Twelve months is enough to learn whether the organisation trusts data by habit or by evidence.",
    ),
    ul([
      "Prefer fail-closed loaders over silent coercion",
      "Measure soft failures: late, duplicate, drift — not only job red",
      "Pair pipeline changes with downstream regression checks",
      "Never backfill without telling finance and operations",
      "Treat definition changes as releases, not side effects",
    ]),
    h2("Questions for your next data review"),
    ul([
      "Which decisions run on data that might be provisional — and do owners know?",
      "What reconciliation proves today's table matches source truth?",
      "What happens when schema drift is detected — fail, quarantine, or silently load?",
      "Who approves backfills that move executive metrics?",
      "Can you trace yesterday's automated action to a source row and transform version?",
    ]),
    p(
      "If the answers are uncomfortable, the pipeline is not infrastructure. It is an unpriced liability feeding decisions that look data-driven.",
    ),
    h3("Lineage as architecture"),
    p(
      "When a dashboard disagrees with finance, the argument is won by whoever can trace lineage fastest: which source, which transform, which late arrival, which duplicate key. Without lineage, debugging is opinion. With lineage, debugging is engineering — and the organisation can fix the pipeline instead of debating the number.",
    ),
    p(
      "Pipelines that cannot explain themselves will eventually produce a decision someone regrets. That regret is architectural, not operational.",
    ),
    cta(
      "Green jobs, wrong outcomes?",
      "Bring your reconciliation gaps and incident stories. We will help you read where data fails softly — and design pipelines downstream can trust.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "How do we prioritise which pipelines to harden first?",
      "Start where bad data triggers automations, customer impact, or regulatory reporting — not where logs are noisiest.",
    ],
    [
      "Is late data ever acceptable?",
      "Yes, if labelled provisional and downstream behaviour respects it. Unacceptable is late data presented as final.",
    ],
    [
      "Do we need a full lineage platform on day one?",
      "No. Start with source, transform version, owner, and timestamp on critical datasets. Expand as incidents demand.",
    ],
    [
      "Who should own reconciliation?",
      "The data owner for definitions, with platform support for tooling. Consumers validate business outcomes, not row counts alone.",
    ],
  ],
}
