import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const customerOnboardingIsDistributedSystemPost: Article = {
  slug: "customer-onboarding-is-a-distributed-system",
  title: "The hidden distributed system inside customer onboarding",
  deck:
    "OAuth, webhooks, queues, workers, SaaS APIs, and your database — onboarding is a distributed workflow whether or not you drew the arrows.",
  category: "Engineering",
  date: "21 July 2026",
  dateIso: "2026-07-21",
  readTime: readTime(1500),
  author,
  tags: ["Onboarding", "Distributed systems", "Workflow", "Operations"],
  art: { label: "Engineering", cells: ["Signup succeeded does not mean onboarding finished"], tone: "tide" },
  body: [
    p(
      "Customer onboarding looks like a product surface: signup form, OAuth button, welcome email, empty dashboard. Underneath it is a distributed system — identity provider, your API, webhook receivers, message queues, background workers, CRM, billing, analytics, support tooling, and a database that must agree on who this customer is. The UI shows a spinner for two seconds. The workflow may run for hours across failures nobody instrumented.",
    ),
    p(
      "Teams treat onboarding as a frontend feature until half-provisioned tenants appear in support queues: login works, billing does not; CRM has the lead, product has no workspace; SSO succeeded, role mapping failed silently. Those are not UX bugs. They are consistency, ownership, and observability problems in a pipeline that was never named as a pipeline.",
    ),
    p(
      "Constrange reads onboarding as a workflow graph — same discipline as order fulfilment or payments. Desired end state: customer can use paid features, appears correctly in downstream systems, support can see them, finance can bill them. Observed state rarely matches until someone manually repairs the path.",
    ),
    h2("The graph you did not diagram"),
    p(
      "Typical sequence: user completes OAuth → your app creates account row → webhook fires to enqueue provisioning → worker calls SaaS APIs → worker writes entitlements → billing subscription created → CRM updated → welcome notification sent → analytics identifies user. Each step is a separate failure domain with its own retry semantics and idempotency gaps.",
    ),
    fig(
      "onboarding-distributed-system.svg",
      "Signup at left flowing through OAuth, webhook, queue, worker, multiple SaaS boxes, database, with dashed manual repair paths",
      "The user sees step one. Operations inherits steps two through nine.",
    ),
    {
      t: "table",
      caption: "Stages and who owns truth",
      head: ["Stage", "Common failure", "Who notices first"],
      rows: [
        ["OAuth / identity", "Token ok, profile incomplete", "User — missing fields"],
        ["Account creation", "Duplicate email race", "User — confusing error"],
        ["Queue enqueue", "Lost message, no DLQ", "Nobody until CRM gap"],
        ["Worker provisioning", "Partial API success", "Support — 'can't access feature'"],
        ["Billing attach", "Plan mismatch", "Finance — invoice wrong"],
        ["CRM sync", "Stale owner assignment", "Sales — lead orphan"],
      ],
    },
    h2("Why signup success is a dangerous metric"),
    p(
      "Product metrics celebrate account created. Business outcomes require provisioned, billable, supportable customer. Measuring only the first event hides a long tail of stuck workflows — customers who technically exist but cannot succeed. Conversion funnels that stop at signup lie gently to executives.",
    ),
    p(
      "Define onboarding complete with verifiable checks: entitlement active, billing state correct, mandatory integrations connected, audit fields populated. Until those pass, the distributed transaction is open.",
    ),
    ul([
      "End-to-end onboarding state machine — not boolean 'registered'",
      "SLA for time-to-ready with alerting on stuck states",
      "Reconciliation job comparing identity, product, billing, CRM",
      "Support tooling showing pipeline stage — not only user id",
    ]),
    note(
      "If support's fix is 'run the script,' you have a workflow engine implemented in Slack — not a product.",
    ),
    h2("OAuth is not the finish line"),
    p(
      "OAuth proves identity at a point in time. It does not create tenant isolation, assign plan, seed data, or register webhooks with partners. Teams overload the OAuth callback with synchronous provisioning — slow signup, timeout retries, duplicate tenants. The callback should record intent and hand off to durable async workflow with idempotency keys tied to subject identifier.",
    ),
    h3("Enterprise SSO adds latency and politics"),
    p(
      "SCIM may arrive hours later. Role mapping depends on groups IT has not created yet. Onboarding must tolerate partial identity — staged states, clear user messaging, admin notifications — not binary failure or silent defaults with wrong permissions.",
    ),
    h2("Webhooks and queues: the invisible UX"),
    p(
      "Webhook handlers that do heavy work inline couple partner retry behaviour to your availability. Enqueue fast with dedupe on event id; process with workers that can retry safely. Dead-letter queues without runbooks become graveyards of half-onboarded customers.",
    ),
    p(
      "Ordering is not guaranteed across topics. Billing before entitlement or entitlement before billing — pick explicit saga rules and compensations. 'Usually works' order fails at scale.",
    ),
    {
      t: "table",
      caption: "Workflow patterns for onboarding",
      head: ["Pattern", "When it fits"],
      rows: [
        ["Synchronous in request", "Demos only — brittle under load"],
        ["Outbox + queue", "Default for multi-step provisioning"],
        ["Saga with compensation", "Paid plans with external side effects"],
        ["Scheduled reconciliation", "Catches SaaS drift and manual fixes"],
        ["Human approval gate", "Enterprise contracts before enablement"],
      ],
    },
    h2("SaaS dependencies you do not control"),
    p(
      "CRM, billing, email, feature flags — each API has rate limits, partial failures, and maintenance windows. Workers must be idempotent: creating customer twice in Stripe is a finance incident; creating workspace twice may be a security incident. Store external ids on your account row; reconcile nightly.",
    ),
    p(
      "Sandbox versus production credential mixups duplicate entire onboarding paths into wrong environments — classic distributed footgun.",
    ),
    quote(
      "Onboarding is the first impression of your reliability — even if the user never sees the queue.",
    ),
    h2("Data model: one customer, many nouns"),
    p(
      "Identity id, tenant id, billing customer id, CRM lead id, analytics distinct id — without a mapping table and ownership rules, support cannot answer 'which record is canonical?' Duplicate nouns across services become duplicate customers when retries differ by field.",
    ),
    h3("Tenant isolation from day zero"),
    p(
      "Provisioning must create isolation boundaries before inviting users — not retrofit after data leak scare. Background jobs without tenant context are onboarding bugs waiting for headlines.",
    ),
    h2("Observability operations can use"),
    p(
      "Trace onboarding as one workflow id from signup through final check. Dashboard stuck counts by stage age. Alerts when DLQ depth rises or reconciliation finds mismatches. Product analytics alone cannot show worker failures.",
    ),
    p(
      "Constrange often finds beautiful signup A/B tests and no metric for percent provisioned within fifteen minutes — the metric operations and revenue actually need.",
    ),
    h2("Support and manual repair"),
    p(
      "Manual repair will happen. Design it: idempotent admin actions, visible workflow state, safe replay from failed step — not SQL heroics. Every manual fix without code path feedback re-teaches the system wrong.",
    ),
    ol([
      "Define onboarding complete with cross-system checks",
      "Keep OAuth callback thin; durable workflow carries provisioning",
      "Idempotency keys from identity subject through all side effects",
      "Reconcile identity, product, billing, CRM on schedule",
      "Give support a state view and safe replay — not runbooks only",
    ]),
    h2("Organizational seams"),
    p(
      "Growth owns signup conversion. Platform owns queues. Sales owns CRM. Finance owns billing. Nobody owns end-to-end onboarding — so handoffs fail quietly. Name a workflow owner with authority across systems, not a committee.",
    ),
    p(
      "Launch reviews ask 'is the page pretty?' Ask also 'what happens if step four fails?' and 'how do we know completion rate?'",
    ),
    h2("Testing beyond happy path"),
    p(
      "Integration tests that mock all SaaS APIs miss timeout and duplicate delivery. Replay webhooks, kill workers mid-provision, simulate CRM 503, verify user sees accurate status — not infinite spinner. Load test enqueue path separately from OAuth — signup spikes are predictable.",
    ),
    h2("From feature to platform capability"),
    p(
      "Mature organisations treat onboarding as a platform workflow reused for upgrades, seat adds, marketplace installs, and region expansion — same state machine, new steps. Investment compounds. One-off onboarding code in the signup controller does not.",
    ),
    p(
      "The hidden distributed system becomes visible during first enterprise deal or first Black Friday — whichever arrives first. Building it honestly early is cheaper than explaining half-provisioned logos on a reference call.",
    ),
    h2("Compliance and audit trails"),
    p(
      "Regulated customers ask what happened during onboarding — which systems received data, when entitlements activated, who approved exceptions. A workflow id with immutable step log answers that question. Scattered logs across OAuth, worker, and CRM do not. Design onboarding audit as part of the state machine, not as log grep after a breach question.",
    ),
    h3("Data residency and regional paths"),
    p(
      "Region-specific onboarding may require different SaaS instances, identity providers, or storage locations. Branching paths multiply failure modes. Explicit regional state machines — not if-statements in one mega-worker — keep ownership clear and reconciliation feasible.",
    ),
    h2("Questions for your next launch review"),
    ul([
      "What verifiable checks define onboarding complete?",
      "Where can the workflow stall without alerting anyone?",
      "Which external ids must exist before we call success?",
      "How does support replay from the failed step safely?",
      "What percentage of signups reach complete within your SLA?",
    ]),
    p(
      "If the room cannot answer the last question with a dashboard, you are still treating onboarding as a page — not a system.",
    ),
    cta(
      "Signup converts — but customers stall before value?",
      "We map your onboarding graph, assign ownership, and design workflows that finish — not just start.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Should onboarding be synchronous for simplicity?",
      "Only if steps are few and side effects are reversible. Multi-SaaS provisioning belongs in durable async workflow with clear user status.",
    ],
    [
      "How do we message delays to users?",
      "Show staged progress tied to real checks — 'setting up workspace' — not fake spinners. Email when ready or when action needed.",
    ],
    [
      "What is the minimum reconciliation?",
      "Nightly compare identity ids, billing customer ids, and entitlement flags; alert on orphan or duplicate mappings.",
    ],
    [
      "Who should own onboarding end-to-end?",
      "A product or platform owner with mandate across engineering and operations — not siloed 'signup squad' without downstream authority.",
    ],
  ],
}
