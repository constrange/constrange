import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const infrastructureDriftIsStateManagementPost: Article = {
  slug: "infrastructure-drift-is-state-management",
  title: "Infrastructure drift is a state-management problem, not a Terraform problem",
  deck:
    "When Terraform, operators, consoles, and runbooks all write reality — drift is disagreement about truth, not a missing plan apply.",
  category: "Engineering",
  date: "4 August 2026",
  dateIso: "2026-08-04",
  readTime: readTime(1500),
  author,
  tags: ["Infrastructure", "State management", "Drift", "Platform engineering"],
  art: { label: "Engineering", cells: ["Plan apply does not settle who owns truth"], tone: "dusk" },
  body: [
    p(
      "Platform teams treat drift as Terraform being out of sync — run plan, apply, close ticket. That fixes one class of problem and ignores the rest: the security group someone opened in the console during an incident, the Kubernetes operator that scaled differently, the SaaS admin who changed SSO settings, the autoscaling rule the finops script adjusted. Drift is not 'I forgot to apply.' Drift is multiple writers claiming authority over the same reality without a shared state model.",
    ),
    p(
      "Infrastructure is stateful in two senses: resources exist in clouds and clusters, and someone holds a definition of what should exist. When those diverge — or when two definitions disagree — you have drift. Blaming the tool that detected divergence misses why divergence was possible.",
    ),
    p(
      "Constrange reframes drift as state management: who defines desired state, who may mutate observed state, how changes propagate, and how conflicts resolve. Terraform is one actuator in that system — not the system.",
    ),
    h2("Desired versus observed — across controllers"),
    p(
      "Desired state may live in Git, a database, a vendor UI, or tribal runbooks. Observed state is what APIs report now. Drift is diff. But when Git says one thing, the operator says another, and production says a third — you do not have drift alone; you have competing sources of truth.",
    ),
    fig(
      "infrastructure-drift-controllers.svg",
      "Multiple controllers — Terraform, operator, console, script — writing to same cloud resources with conflicting desired state boxes",
      "Drift detection finds mismatch. State management decides which mismatch wins.",
    ),
    {
      t: "table",
      caption: "Writers and typical drift",
      head: ["Writer", "Drift it creates"],
      rows: [
        ["IaC pipeline", "Skipped apply, partial apply, state lock issues"],
        ["In-cluster operators", "Fields not in IaC; fighting manual scale"],
        ["Console break-glass", "Emergency rules left permanent"],
        ["Autoscaling / schedulers", "Capacity unlike template"],
        ["SaaS admin UI", "Identity settings unlike documented standard"],
      ],
    },
    h2("Why plan/apply does not end the story"),
    p(
      "Apply reconciles Terraform's desired state to cloud — for resources Terraform owns exclusively. It does not read minds about console edits unless refresh imports them — often as surprise destroys. It does not govern fields managed by operators unless explicitly delegated. It does not know SaaS exists.",
    ),
    p(
      "Teams run apply weekly and wonder why drift returns daily. Other writers never stopped. Detection without ownership rules is whack-a-mole with better graphs.",
    ),
    ul([
      "Explicit resource ownership: which tool owns which fields",
      "Import or forbid console changes — pick one per resource class",
      "Reconciliation loops beyond IaC apply cadence",
      "Exception tokens with expiry for break-glass",
      "Audit of who changed observed state outside pipeline",
    ]),
    note(
      "If break-glass has no expiry, your emergency path is your permanent architecture.",
    ),
    h2("State files are not the same as system state"),
    p(
      "Terraform state tracks what Terraform believes it manages. It is not a global inventory unless you force everything through Terraform — which organisations rarely do. Parallel inventories — CMDB, cloud asset APIs, Kubernetes etcd — disagree by design if nobody merges them.",
    ),
    h3("Split ownership by field"),
    p(
      "Common pattern: Terraform owns network and IAM skeleton; operator owns replica count and image; HPA owns some scale. Without annotation of ownership, Terraform 'corrects' replicas; operator fights back; on-call watches a loop. Document fields in code comments and policy — not only in Slack.",
    ),
    h2("Drift as symptom of governance gaps"),
    p(
      "Drift spikes after incidents — expected. Drift steady in peacetime means governance failed: too many people with write access, no review for console, incentives to bypass slow pipeline. Fixing drift tickets without narrowing writers treats fever, not infection.",
    ),
    {
      t: "table",
      caption: "Responses matched to cause",
      head: ["Cause", "Effective response"],
      rows: [
        ["Emergency fix", "Time-bound exception + backfill to desired state"],
        ["Pipeline gap", "Automate missing resource class in IaC"],
        ["Operator overlap", "Define field ownership and admission policy"],
        ["Vendor manual change", "Reconcile SaaS config via API or forbid UI edits"],
        ["Wrong desired state", "Fix definition — not blind apply"],
      ],
    },
    h2("Platform engineering's real job"),
    p(
      "Not only wrapping Terraform — publishing where truth lives, how to propose change, how detection works, how exceptions expire. A platform that only offers `terraform apply` without answering 'who may change security groups' invites drift.",
    ),
    p(
      "Golden paths reduce drift by making the easy path the owned path. Shadow paths — personal scripts, clickops — are drift factories with good intentions.",
    ),
    quote(
      "Drift is what happens when desired state is optional for some people.",
    ),
    h2("Detection without resolution is noise"),
    p(
      "Scanners listing thousands of diffs burn teams out. Prioritize by risk: public exposure, identity, data stores, production tags. Auto-remediate low-risk owned resources; route high-risk to owners with context — who changed it, when, which controller should win.",
    ),
    p(
      "Constrange often sees drift tools purchased while ownership matrix empty — alerts go to #platform and die because nobody knows if diff is wrong or desired state is stale.",
    ),
    h2("Multi-cloud and SaaS extend the problem"),
    p(
      "Drift in DNS, identity, observability SaaS, and edge CDNs affects availability as much as VM tags — but rarely enters IaC state. Extend state management conceptually: each domain needs desired record, observer, owner, reconcile cadence.",
    ),
    h3("Humans as state writers"),
    p(
      "Runbooks that `kubectl edit` or click through wizards are state mutations. Either absorb into automation afterward or treat as incidents with mandatory follow-up ticket to update desired state — same day, not 'when we get to it.'",
    ),
    ol([
      "Publish ownership matrix: resource × field × controller",
      "Align detection priorities to risk and ownership",
      "Expire break-glass changes or import into desired state",
      "Run reconciliation on cadence — not only on deploy",
      "Measure drift age and repeat offenders — process signal",
    ]),
    h2("When to import vs revert"),
    p(
      "Observed change is good and permanent → update desired state (import to Git, update operator spec). Observed change is bad → revert and tighten access. Observed change is good but temporary → exception with sunset. Without classification, teams revert useful hotfixes or codify mistakes.",
    ),
    p(
      "Import requires review — same as any infra change. Silent import from console normalizes clickops.",
    ),
    h2("Organizational politics of truth"),
    p(
      "App teams want speed; security wants control; finance wants tags; platform wants standardization. Drift is often compromise fossilized in production. Executives see 'non-compliant resources'; engineers see 'how we shipped Friday.' Resolution is political: agreed precedence, not louder scanning.",
    ),
    h2("Terraform still matters — in role"),
    p(
      "IaC remains excellent actuator for resources it owns. The mistake is expecting it to be the entire state-management system. Pair with operators where lifecycle fits cluster, policy-as-code for guardrails, reconciliation for fields intentionally outside Terraform, and SaaS APIs where identity lives.",
    ),
    p(
      "Mature platform teams talk about control planes — plural — with precedence, not about eliminating drift by discipline alone. Discipline fails at 3 a.m.; ownership rules survive.",
    ),
    h2("Metrics executives can understand"),
    p(
      "Drift age distribution, percent resources with single owner, time to align after break-glass, repeat drift on same resource class. Not 'number of red items' without trend — that rewards ignoring the scanner.",
    ),
    p(
      "Reduce writers before buying better detectors. One authoritative desired state with three actuators beats three desired states with one scanner.",
    ),
    h2("Federation without anarchy"),
    p(
      "Large enterprises federate infrastructure ownership — business units hold Terraform modules, central platform holds guardrails. Federation works when precedence is published: global deny rules, mandatory tags, network baseline from central; application specifics from units. Drift across units is often unresolved precedence, not rogue engineers.",
    ),
    h3("Lifecycle events"),
    p(
      "Migrations, acquisitions, and decommissions create temporary dual writers — old and new stacks both touch routing or identity. Name sunset dates and single cutover owner. 'Temporary' dual control without date becomes permanent drift between organisations.",
    ),
    h2("Questions for your platform roadmap"),
    ul([
      "For each resource class, who owns desired state — and who may mutate observed state?",
      "What happens to break-glass changes after the incident closes?",
      "Which fields are intentionally outside Terraform — and who reconciles them?",
      "How old is our oldest unresolved drift — and why?",
      "Are we funding scanners while writers multiply?",
    ]),
    p(
      "Honest answers shift investment from detection theatre to ownership and reconciliation — where drift actually dies.",
    ),
    cta(
      "Plan/apply on schedule — but production still diverges?",
      "We help platform teams define who owns truth, reconcile controllers, and shrink drift to manageable signal.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Should we ban console access entirely?",
      "Ban or break-glass with mandatory import/expiry — not permanent silent console as architecture.",
    ],
    [
      "Is drift always bad?",
      "Mismatch is always information. Some mismatch is intentional experiment or canary — label it or reconcile will 'fix' your test.",
    ],
    [
      "How does this relate to GitOps?",
      "GitOps is desired state for Kubernetes resources it covers. Drift still appears in cloud IAM, SaaS, data, and fields owned by other controllers.",
    ],
    [
      "Do we need a CMDB?",
      "You need a agreed ownership map and observation sources. CMDB helps if maintained; empty CMDB is another stale state store.",
    ],
  ],
}
