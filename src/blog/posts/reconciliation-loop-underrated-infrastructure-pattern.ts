import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const reconciliationLoopUnderratedInfrastructurePatternPost: Article = {
  slug: "reconciliation-loop-underrated-infrastructure-pattern",
  title: "The reconciliation loop is the most underrated pattern in infrastructure",
  deck:
    "Desired state, observed state, diff, action, verification — the control loop that keeps systems honest beyond Kubernetes.",
  category: "Engineering",
  date: "5 January 2027",
  dateIso: "2027-01-05",
  readTime: readTime(1500),
  author,
  tags: ["Reconciliation", "Infrastructure", "Control loops", "Automation"],
  art: { label: "Engineering", cells: ["If you only reconcile on deploy, drift owns you"], tone: "ink" },
  body: [
    p(
      "Most engineers first meet reconciliation in Kubernetes: a controller watches desired state in etcd, compares it to what is running, and acts until they match. It feels like a container orchestration detail. It is not. It is one of the few patterns that scales from a single service to an entire enterprise — and most organisations still treat it as something that happens during deploy, not something that runs continuously.",
    ),
    p(
      "The loop is simple: define what should be true, observe what is true, compute the difference, take corrective action, verify the outcome, repeat. Simple does not mean easy. The hard parts are choosing authoritative desired state, making observation trustworthy, bounding blast radius of corrective action, and knowing when to stop reconciling and escalate to a human.",
    ),
    p(
      "Constrange sees teams automate provisioning beautifully and then leave reconciliation to hope: cron jobs that patch symptoms, runbooks that assume yesterday's inventory, dashboards that show green while configuration silently diverges. The reconciliation loop is the antidote — if you treat it as infrastructure, not as a Kubernetes feature.",
    ),
    h2("The loop, stripped of jargon"),
    p(
      "Desired state is the contract: this many replicas, this firewall rule, this IAM binding, this feature flag value for this tenant. Observed state is what the world actually contains — often messy, eventually consistent, and sometimes lying because your probe is shallow. Diff is the engineering: not just 'different' but 'different in a way that matters, owned by this controller, safe to fix now.'",
    ),
    fig(
      "reconciliation-loop.svg",
      "Circular flow: desired state, observe, diff, act, verify, with a human escalation branch when diff is ambiguous",
      "Deploy writes desired state once. Reconciliation keeps reality aligned with it.",
    ),
    {
      t: "table",
      caption: "Loop stages and common failures",
      head: ["Stage", "What breaks when you skip it"],
      rows: [
        ["Desired state", "Every operator edits production directly; nobody agrees on truth"],
        ["Observe", "You reconcile against stale inventory and 'fix' the wrong thing"],
        ["Diff", "Noise triggers churn; real drift hides in alert fatigue"],
        ["Act", "Corrective action causes outages; no rollback or rate limits"],
        ["Verify", "You declare success before propagation; drift returns in minutes"],
      ],
    },
    h2("Beyond Kubernetes: where the pattern already lives"),
    p(
      "DNS is a reconciliation loop with TTL as your verify delay. Certificate managers reconcile expiry against issuance. GitOps tools reconcile cluster state against a branch — when they are honest about what they own. Even billing reconciliation is the same shape: expected charges versus observed usage, diff, adjustment, audit trail.",
    ),
    p(
      "What changes across domains is the actuator and the cost of being wrong. Restarting a pod is cheap. Rewriting a route table may not be. Issuing a credit memo has compliance implications. The pattern holds; the guardrails must tighten as impact rises.",
    ),
    ul([
      "Identity: group membership versus HR system of record",
      "Network: intended ACLs versus cloud API reality",
      "Data: retention policy versus actual object lifecycle",
      "SaaS: licensed seats versus active accounts",
      "Feature flags: target segments versus evaluated assignments",
    ]),
    note(
      "If two teams can both 'fix' the same drift without a single owner, you do not have reconciliation — you have a turf war with automation.",
    ),
    h2("Why event-driven alone is not enough"),
    p(
      "Events tell you something happened. They do not guarantee the system ended in the right state. A message says 'user created.' Reconciliation asks: does the user exist in auth, CRM, billing, and analytics — with consistent identifiers — right now? Event handlers fail mid-flight. Messages duplicate. Consumers lag. The loop closes the gap between 'we processed the event' and 'the world matches policy.'",
    ),
    h3("Level-triggered beats edge-triggered"),
    p(
      "Edge-triggered automation fires on change: deploy, webhook, alert. Level-triggered automation fires on mismatch: desired 3, observed 2, act. Infrastructure drift is level-triggered. A security group opened manually yesterday will not generate a new deploy event today — but it still violates desired state. Controllers that only listen for edges inherit silent rot.",
    ),
    h3("Reconciliation complements queues"),
    p(
      "Queues move work. Loops enforce invariants. Use both: enqueue provisioning steps for throughput; reconcile periodically or continuously to catch partial failures, manual overrides, and vendor-side changes your pipeline never saw.",
    ),
    h2("Designing controllers that survive production"),
    p(
      "Start with scope. A controller that owns 'all AWS resources' will fight humans and other controllers. A controller that owns 'tags on objects labelled app=payments' can win. Narrow ownership beats heroic generality.",
    ),
    p(
      "Make observation as direct as possible. Reconciling against a cache of reality is faster — and wrong after the cache lies. Prefer read-after-write verification on critical paths. Exponential backoff on errors, rate limits on actuators, and idempotent actions so a stuck loop does not amplify damage.",
    ),
    {
      t: "table",
      caption: "Controller maturity",
      head: ["Level", "Behaviour"],
      rows: [
        ["0 — Script on deploy", "Fixes drift only when someone runs it"],
        ["1 — Scheduled audit", "Reports drift; humans remediate"],
        ["2 — Automated fix, dry-run first", "Shows diff; applies with approval"],
        ["3 — Continuous reconcile", "Detects and fixes within bounded scope"],
        ["4 — Federated control plane", "Multiple controllers with explicit precedence"],
      ],
    },
    h2("Human-in-the-loop without theatre"),
    p(
      "Some diffs should never auto-apply: production database schema, cross-region failover, financial adjustments. Good controllers classify diffs: auto-fix, fix with approval, escalate only. Bad controllers binary-choice everything — either fully manual or fully automated — and then surprise you at 2 a.m.",
    ),
    p(
      "Escalation is part of the loop, not an admission of failure. When observed state contradicts desired state because desired state was wrong — a bad config push — blind reconciliation makes it worse. Pause, surface the conflict, let a human update desired state or grant a temporary exception with expiry.",
    ),
    quote(
      "Automation that cannot say 'I will not act on this diff' is not a control plane — it is a faster way to break things.",
    ),
    h2("Multi-controller worlds: who wins?"),
    p(
      "Real platforms have overlapping reconcilers: Terraform applies, a Kubernetes operator adjusts, a security scanner remediates, a finops tool rightsizes. Without precedence rules, they fight. Terraform creates; the operator deletes; the scanner quarantines; finance tags change; nobody knows desired state anymore.",
    ),
    p(
      "Explicit ownership beats implicit hope. Document which controller owns which field. Use admission hooks or policy-as-code to reject changes outside ownership. Where shared fields are unavoidable — labels, tags — designate one writer and read-only mirrors elsewhere.",
    ),
    ol([
      "Name the system of record for desired state per resource class",
      "Publish observation sources and freshness expectations",
      "Classify diffs by risk and required approver",
      "Implement idempotent actuators with audit logs",
      "Measure time-to-reconcile and unresolved diff backlog",
    ]),
    h2("Verification is not optional"),
    p(
      "Acting without verify is open-loop automation — indistinguishable from luck. Verify by re-observing after act, with jitter for propagation delays. For global systems, verify from more than one vantage point: API says updated, edge probe confirms reachable, dependent service acknowledges.",
    ),
    p(
      "Constrange often finds 'reconciled' systems that never re-read state — they fire API calls and assume success because HTTP 200 arrived. Partial application, throttling, and eventually consistent backends make verify the difference between control and cosplay.",
    ),
    h2("Metrics that matter"),
    p(
      "Count reconciliations, error rate, time from drift detection to fix, and count of diffs requiring human decision. Track drift age: how long has observed state been wrong? Old drift means the loop is broken or desired state is fiction.",
    ),
    p(
      "Avoid vanity metrics like 'automated fixes per day' without quality. A controller that flaps resources generates fixes and outages in equal measure.",
    ),
    h2("When not to reconcile"),
    p(
      "Not every mismatch is drift. Canary deployments intentionally diverge. Disaster recovery may require temporary observed state unlike production desired state. Feature experiments deliberately split traffic. Controllers need context — labels, maintenance windows, exception tokens — or they 'heal' experiments back to boredom.",
    ),
    p(
      "Also skip reconciliation where desired state itself is ambiguous: 'performance should be good' is not a reconcilable field. Convert intent to measurable desired state first — latency SLO, error budget, replica count — then loop.",
    ),
    h2("From pattern to platform"),
    p(
      "Teams adopt the loop one resource class at a time: certificates, then DNS, then IAM bindings, then data retention. Each success builds trust in automation and surfaces where desired state was never written down — only implied in tribal knowledge.",
    ),
    p(
      "The underrated part is cultural: reconciliation forces you to write down what 'correct' means. Many organisations discover they cannot automate not because APIs are hard, but because no two teams agree on correct. The loop exposes that disagreement early — which is uncomfortable and valuable.",
    ),
    h3("Start where drift hurts"),
    p(
      "Pick the resource class whose drift causes incidents or audit findings. Implement observe-diff-report first; add act when reporting stabilises. Narrow scope, loud audit trail, fast verify. Expand only after precedence with neighbouring controllers is clear.",
    ),
    cta(
      "Drift you only discover during incidents?",
      "We help teams design control loops with clear ownership — desired state, observation, and actuators that match your risk.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Is GitOps just reconciliation?",
      "GitOps is reconciliation where Git (or similar) holds desired state for resources it owns. It does not replace loops for resources Git never sees — manual cloud console edits, SaaS settings, data retention.",
    ],
    [
      "How often should reconciliation run?",
      "Continuous for high-risk drift (security, identity); frequent scheduled for slower-changing resources. Match interval to blast radius and acceptable drift age — not to cron convenience.",
    ],
    [
      "What if humans need to break glass?",
      "Support temporary exceptions with expiry and audit, or a labelled 'break-glass' observed state the controller skips — never silent permanent overrides.",
    ],
    [
      "Can one team own all controllers?",
      "Central platform teams can own frameworks; domain teams should own desired state for their resources. Controllers without accountable desired-state owners become nobody's problem until incidents.",
    ],
  ],
}
