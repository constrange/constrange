import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const retriesAreNotReliabilityPost: Article = {
  slug: "retries-are-not-reliability",
  title: "Retries are not reliability",
  deck:
    "How poorly designed retries create retry storms, duplicate work, traffic amplification and cascading failures.",
  category: "Engineering",
  date: "10 April 2026",
  dateIso: "2026-04-10",
  readTime: readTime(1500),
  author,
  tags: ["Reliability", "Retries", "Resilience"],
  art: {
    label: "Engineering",
    cells: ["Retry loops amplify failure faster than they fix it"],
    tone: "coral",
  },
  body: [
    p(
      "Retries feel responsible. A call fails; you try again. Libraries default to retry. Platforms encourage it. The instinct is humane: transient failures happen, networks blip, pods restart. The practice becomes dangerous when retry is substituted for design — when every team adds attempts until the system retries itself into an outage.",
    ),
    p(
      "A dependency slows. Callers retry. Retry traffic doubles load. The dependency slows further. More callers retry. Within minutes a partial failure becomes total. Finance sees the bill for compute that accomplished nothing except amplifying pain. Post-mortems call it a 'retry storm'. The storm was forecastable.",
    ),
    p(
      "Constrange treats retries as a load-management decision, not a checkbox. Reliability is bounded failure: fail fast where appropriate, degrade gracefully, isolate blast radius, make work idempotent, and retry only with jitter, budgets, and knowledge of what you are retrying into.",
    ),
    h2("Why retries are the default"),
    p(
      "Retries hide slowness from the caller. Product metrics look better when timeouts are long and attempts are many. Vendors document retry examples. Frameworks ship policies. Nobody owns the aggregate behaviour when twelve services each retry five times with exponential backoff that synchronises under load.",
    ),
    fig(
      "retries-not-reliability.svg",
      "Retry loops amplifying traffic into an already failing dependency",
      "Each layer of retries multiplies load — turning a sick dependency into a unavailable one.",
    ),
    {
      t: "table",
      caption: "Retry intent vs retry outcome",
      head: ["What teams intend", "What often happens"],
      rows: [
        ["Recover from transient blip", "Sustain load during sustained failure"],
        ["Improve success rate", "Create duplicate side effects"],
        ["Hide flaky network", "Hide missing circuit breaking"],
        ["Buy time for recovery", "Deny recovery the time it needs"],
        ["Make service resilient", "Make dependency fragile"],
      ],
    },
    h2("Retry storms and traffic amplification"),
    p(
      "Traffic amplification is multiplicative. If ten callers each retry three times into a service at capacity, you did not add resilience — you added an attack your own fleet authored. Synchronous chains multiply further: A retries B retries C. Each layer thinks locally. The dependency experiences globally.",
    ),
    p(
      "Autoscaling makes this worse before it helps. New instances cold-start into a retry flood. Database connection pools exhaust. Cache misses spike. The system scales spend and chaos together.",
    ),
    ul([
      "Client retries without jitter align and hammer peaks",
      "Server-side retries duplicate work already accepted",
      "Message consumers redeliver while handlers still slow",
      "Batch jobs restart from scratch instead of checkpoint",
      "Health checks flap and reload balancers into hot instances",
    ]),
    note(
      "If your mitigation for overload is 'retry more', you have scheduled the next incident.",
    ),
    h2("Duplicate work is a retry tax"),
    p(
      "Retries without idempotency tax finance and operations. A payment authorisation attempted twice. An email sent thrice. An inventory movement applied on the second retry after the first actually succeeded but timed out. Timeouts mean 'unknown', not 'failed'. Retrying unknown is how ledgers disagree.",
    ),
    p(
      "Idempotency keys, deduplication stores, and safe upserts are not advanced patterns. They are the price of retrying mutating operations. Skipping them while retrying aggressively is choosing duplicate outcomes and calling it resilience.",
    ),
    ol([
      "Classify operations: read, idempotent write, non-idempotent write",
      "Never blind-retry non-idempotent writes without a key",
      "Treat timeout as its own outcome — reconcile before retry",
      "Log retry reason and attempt count for audit",
      "Test timeout-then-success paths in staging regularly",
    ]),
    h2("Cascading failure wears a polite name"),
    p(
      "Circuit breakers exist because dependencies fail and callers must stop helping them die. Half-open states, bulkheads, and shed load are unfashionable next to 'just retry'. They are how you keep a catalog outage from taking checkout offline.",
    ),
    h3("Design choices that contain blast radius"),
    p(
      "Fail fast when dependency health is red. Return degraded responses with honest messaging. Queue work for async retry where user latency is not hostage to downstream recovery. Isolate thread pools so one slow client cannot exhaust shared workers.",
    ),
    quote(
      "A retry without a budget is optimism with a load generator attached.",
    ),
    h2("Backoff that helps vs backoff that herds"),
    p(
      "Exponential backoff is correct in textbooks and dangerous when synchronized. Shared clocks, aligned intervals, and identical retry policies create thundering herds. Full jitter — randomising delay within bounds — spreads attempts. Cap max delay. Cap max attempts. Know when to stop and surface failure to a human or dead-letter path.",
    ),
    {
      t: "table",
      caption: "Retry policy checklist",
      head: ["Policy element", "Purpose"],
      rows: [
        ["Max attempts", "Prevent infinite loops"],
        ["Exponential backoff + jitter", "Reduce synchronized load"],
        ["Retry budget per minute", "Cap aggregate amplification"],
        ["Circuit breaker", "Stop calling unhealthy dependencies"],
        ["Idempotency key", "Make mutating retries safe"],
        ["Timeout < client SLA", "Fail before user waits forever"],
      ],
    },
    h2("Retries in async systems"),
    p(
      "Message brokers retry by redelivery. Visibility timeouts, dead-letter queues, and consumer concurrency interact. A slow handler looks like failure; the broker redelivers; now two workers process the same message. Without idempotency and without concurrency limits tuned to handler duration, async retries duplicate work at scale.",
    ),
    p(
      "Poison messages need quarantine, not eternal retry. A bad schema should not retry until the broker catches fire. Classify errors: transient infrastructure, dependency down, bug, poison payload. Only the first class earns automatic retry without a fix.",
    ),
    h2("Operational signals retries hide"),
    p(
      "High retry rates masquerade as success in dashboards that count only final outcome. Latency percentiles hide attempt count. Cost dashboards miss retried work. SLOs pass while customers wait through three attempts. Measure attempts, not only outcomes.",
    ),
    ul([
      "Retry count per operation and per dependency",
      "Ratio of timeouts to hard errors",
      "Duplicate detection rate after retries",
      "Cost attributed to retried compute",
      "Time spent in retry delay vs useful work",
    ]),
    note(
      "If retries are invisible in metrics, they are invisible in architecture review — until finance asks why compute doubled.",
    ),
    h2("When retry is the right tool"),
    p(
      "Retry suits idempotent reads, genuinely transient network failures, and background work where latency budgets allow. Retry suits operations with reconciliation and clear unknown handling. Retry does not suit overloaded dependencies, non-idempotent financial movement without keys, or user-facing paths where fail-fast and honest degradation beat silent waiting.",
    ),
    h3("Alternatives worth building first"),
    ol([
      "Cache and stale-while-revalidate for read-heavy paths",
      "Async outbox for work that must survive caller crash",
      "Graceful degradation with feature flags",
      "Human escalation queue when automation exhausts budget",
      "Capacity and backpressure at the edge before retry multiplies",
    ]),
    h2("Organisational patterns that cause retry debt"),
    p(
      "Each team owns its client library defaults. Platform provides no shared policy. Incidents trigger 'increase retries' post-mortem actions. Vendors recommend aggressive policies because their demo succeeds. Nobody simulates correlated failure. Retry debt accumulates invisibly until Black Friday or month-end batch.",
    ),
    p(
      "Shared retry standards — max attempts, jitter requirement, idempotency mandate for writes, breaker integration — are governance that prevents local optima from becoming global outages.",
    ),
    h2("A six-week retry audit"),
    ol([
      "Week 1: inventory all client and server retry policies — attempts, backoff, timeouts",
      "Week 2: map mutating operations without idempotency keys",
      "Week 3: load-test one critical dependency with retry enabled vs breaker-first",
      "Week 4: add retry attempt metrics and dashboards per service",
      "Week 5: implement shared policy library and migrate top five callers",
      "Week 6: run game day — slow dependency, measure amplification",
    ]),
    p(
      "Six weeks will not fix every call site. It will prove whether retries are designed or inherited — and whether the organisation can stop amplifying failure on purpose.",
    ),
    h2("Platform defaults become organisational destiny"),
    p(
      "HTTP clients, gRPC middleware, cloud SDKs, and message consumers each ship retry opinions. Left ungoverned, they stack. Platform engineering should publish a retry profile: maximum attempts, backoff with jitter, mandatory idempotency for writes, integration with circuit breakers, and standard metrics exported automatically. Application teams override with justification, not ignorance.",
    ),
    p(
      "Constrange often finds the worst offenders in generated clients and integration layers nobody maintains — still retrying five times into a database that exhausted connections three attempts ago. Reliability work that ignores those call sites is decoration on the services that happen to be fashionable this quarter.",
    ),
    h2("Questions for your next reliability review"),
    ul([
      "What is the aggregate retry multiplier on our hottest dependency?",
      "Which mutating operations retry without idempotency?",
      "Where do we fail fast instead of retry — and should we do more?",
      "Do breakers exist and trip in practice, or only in slides?",
      "What did retries cost last month in compute and duplicates?",
    ]),
    p(
      "Retries are a tool. Reliability is an outcome. Confusing the two is how good intentions retry the organisation into cascading failure — and how engineering learns that resilience means knowing when to stop calling.",
    ),
    p(
      "The programmes that survive contact with peak load are not those with the most retries. They are those that know which failures deserve another attempt, which deserve a breaker, and which deserve a human — before the dependency is too busy dying to notice the difference.",
    ),
    p(
      "Measure once, then govern: a single retry audit often reveals that half of amplification comes from two legacy clients nobody owns. Fix those before debating framework theology. Reliability programmes win when they shrink the blast radius of enthusiasm.",
    ),
    cta(
      "Retry rates climbing while dependencies keep falling over?",
      "Bring your policies, dashboards, and last amplification incident. We will help you read where retries help, where they hurt, and what to build instead.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Should we disable retries entirely?",
      "No. Retry selectively with caps, jitter, idempotency, and circuit breakers — not unlimited defaults.",
    ],
    [
      "How many retry attempts is enough?",
      "Fewer than you think for user-facing paths. Background work can afford more if idempotent and budgeted.",
    ],
    [
      "What is the first metric to add?",
      "Retry attempt count per dependency — final success rate hides amplification.",
    ],
    [
      "Do circuit breakers conflict with retries?",
      "They complement: breakers stop calling unhealthy dependencies; retries handle brief transients when breakers allow.",
    ],
  ],
}
