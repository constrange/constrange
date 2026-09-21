import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const fromRunbooksToExecutableOperationsPost: Article = {
  slug: "from-runbooks-to-executable-operations",
  title: "From runbooks to executable operations",
  deck:
    "The path from documentation to script to automation to workflow to policy-controlled agent — and where most organisations stall or skip steps.",
  category: "Engineering",
  date: "21 August 2026",
  dateIso: "2026-08-21",
  readTime: readTime(1500),
  author,
  tags: ["Runbooks", "Operations", "Automation", "SRE"],
  art: { label: "Engineering", cells: ["A runbook that never runs is documentation theatre"], tone: "amber" },
  body: [
    p(
      "Every mature operations team has runbooks. Fewer have operations that run. The gap is not laziness or missing tools. It is a ladder that most organisations climb wrong — skipping rungs, automating before the procedure is true, or stopping at a script that only one person trusts.",
    ),
    p(
      "Executable operations means the documented procedure, the script, the workflow, and the governance layer tell the same story. When they diverge, incidents get longer, onboarding gets painful, and the 'automated' remediation becomes another thing on-call must remember to distrust.",
    ),
    p(
      "Constrange maps the path deliberately: documentation, script, automation, workflow, policy-controlled agent. Each step changes who can execute, what gets audited, and how much judgement stays in the loop. Skipping a step does not save time. It moves failure to a more expensive altitude.",
    ),
    h2("Stage one: documentation that earns execution"),
    p(
      "A runbook is not a wiki page that describes the ideal system. It is a procedure that survives contact with production: prerequisites, verification steps, failure branches, escalation contacts, and explicit stop conditions. Most runbooks fail because they document the diagram, not the work — no mention of the unofficial restart order, the API that lies about health, the approval that happens in chat.",
    ),
    fig(
      "runbook-executable-ops.svg",
      "Ladder from static doc to script to pipeline to workflow to gated agent",
      "Each rung adds executability and must stay aligned with the rung below.",
    ),
    {
      t: "table",
      caption: "Five stages of executable operations",
      head: ["Stage", "What changes"],
      rows: [
        ["Documentation", "Shared truth about what to do and when to stop"],
        ["Script", "Repeatable execution with parameters and exit codes"],
        ["Automation", "Triggered execution with scheduling or event hooks"],
        ["Workflow", "Orchestrated steps, approvals, and state across systems"],
        ["Policy-controlled agent", "Judgement within bounds — escalate when uncertain"],
      ],
    },
    h2("Stage two: scripts that match the runbook"),
    p(
      "The first executable form is usually a script. Not because scripts are elegant — because they force precision. Ambiguous prose becomes an if-branch. 'Restart if unhealthy' becomes a health check with a defined threshold. 'Notify the team' becomes a webhook with a channel and message template.",
    ),
    p(
      "Scripts fail when they are personal property: living on one engineer's laptop, hardcoding environment secrets, skipping the verification steps because 'I know what good looks like'. Executable operations require scripts in version control, reviewed like code, parameterised for environment, and linked from the runbook — not parallel folklore.",
    ),
    ul([
      "Idempotent where possible; loud when not",
      "Exit codes that automation can interpret",
      "Dry-run mode that shows intent without mutation",
      "Runbook section numbers mirrored in script comments or steps",
    ]),
    note(
      "If the runbook and the script disagree, the script is what runs at 3 a.m. Update the runbook or delete the script.",
    ),
    h2("Stage three: automation with triggers and guardrails"),
    p(
      "Automation attaches the script to the world: alert fires, cron runs, deployment stage executes. This is where blast radius matters. Automated runbook steps need the same budgets as any production change — scope limits, rate limits, rollback, and human escalation when preconditions fail.",
    ),
    p(
      "Teams often automate the happy path only. The runbook's failure branches stay manual. That is half-automation: fast when the world cooperates, dangerous when it does not, because nobody practises the manual branches often enough to execute them under stress.",
    ),
    h3("Automate verification before action"),
    p(
      "The best automated operations spend more lines checking whether action is appropriate than performing action. Preconditions: is this the right cluster? Is maintenance window open? Is dependency healthy? Is there already a remediation in flight? Verification is how runbooks become safe to run unattended.",
    ),
    h2("Stage four: workflows that own state"),
    p(
      "Scripts chain with brittle bash. Workflows own state: step three waits for approval, step four retries with backoff, step five records evidence in the ticket. Incident platforms, CI systems, and dedicated orchestrators each implement workflow differently. The principle is the same — the procedure is a state machine, not a scroll.",
    ),
    p(
      "Workflows expose where organisational handoffs live. A runbook that says 'get approval from security' becomes a workflow step with a timeout, an approver group, and an audit trail. If that step is always skipped in practice, the workflow reveals the lie — or encodes the workaround, which is worse.",
    ),
    {
      t: "table",
      caption: "When to move from script to workflow",
      head: ["Signal", "Implication"],
      rows: [
        ["More than three systems touched", "State and compensation matter"],
        ["Human approval required mid-flight", "Workflow owns wait and timeout"],
        ["Multiple teams execute different sections", "Ownership per step, not per document"],
        ["Compliance asks for evidence", "Workflow log is the audit artefact"],
        ["Frequent partial failures", "Retry and resume need first-class design"],
      ],
    },
    h2("Stage five: policy-controlled agents"),
    p(
      "Agents enter when procedures require judgement inside boundaries: triage an alert, suggest a remediation, open a change with context gathered from five systems. The agent is not a replacement for the ladder below. It is a new executor that must still cite the runbook, call the script, respect the workflow gates, and escalate when confidence is low.",
    ),
    p(
      "Policy-controlled means the agent inherits the blast-radius budget: read-only until proven, narrow write scopes, mandatory human approval for irreversible steps, and explicit 'I do not know' paths. An agent that improvises outside the runbook is not operations innovation. It is an undocumented operator with API keys.",
    ),
    quote(
      "Automating a runbook you have not run manually is automating a guess.",
    ),
    h2("Where organisations stall"),
    h3("Permanent documentation"),
    p(
      "Runbooks are written for audits and onboarding, never executed in drills. They decay silently. When incident arrives, on-call discovers the steps are wrong and improvises — then forgets to update the doc. Executable operations requires scheduled execution: game days, synthetic incidents, or at minimum quarterly walkthroughs with state changes in a non-production environment.",
    ),
    h3("Scripts without runbooks"),
    p(
      "The inverse failure: automation exists, documentation does not. New engineers grep the repo for shell files. Incidents are resolved by whoever wrote the script. Bus factor is one. Promotion to workflow is impossible because nobody agrees what the procedure is — only what the script happened to do last time.",
    ),
    h3("Workflow theatre"),
    p(
      "Approval steps that always auto-approve. Tickets created and closed without reading. Orchestration that encodes the official process while the unofficial path still runs in chat. Workflow without honesty is slower documentation.",
    ),
    h2("Keeping the ladder aligned"),
    p(
      "Each stage is a contract with the next. When the script changes, the runbook updates in the same pull request. When automation triggers change, the workflow diagram updates. When an agent is allowed a new action, policy and blast-radius budget update together. Drift between stages is operational debt — paid at incident interest rates.",
    ),
    ol([
      "One owner per procedure across all stages",
      "Link runbook, script, workflow, and policy in one discoverable place",
      "Drill the full path including failure branches",
      "Measure time-to-execute and time-to-recover, not page count",
      "Retire shadow scripts when official path is proven",
    ]),
    h2("Human judgement does not disappear"),
    p(
      "Executable operations is not removing humans. It is moving humans to the steps that require context, ethics, and accountability — while machines handle repetition, verification, and evidence collection. The runbook should say where judgement lives. The workflow should pause there. The agent should escalate there.",
    ),
    p(
      "Constrange often finds the highest-value automation not at the agent stage but at making stage two trustworthy: scripts that match reality, with runbooks that on-call will actually open. Fancy orchestration on top of a lying runbook is a faster way to do the wrong thing.",
    ),
    h2("Questions for your operations ladder"),
    ul([
      "Which runbooks have not been executed in the last ninety days?",
      "Which production scripts have no linked runbook?",
      "Where does automation skip the failure branches?",
      "Which workflow steps are always bypassed — and why?",
      "What would an agent be allowed to do that a human cannot audit?",
    ]),
    p(
      "Clear answers tell you which rung to fix before climbing higher. Most teams need a sturdier script and a truer runbook, not an agent.",
    ),
    cta(
      "Runbooks that look complete but never run?",
      "Bring your docs, scripts, and what actually happens on-call. We will help you build the ladder — one honest rung at a time.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Can we skip straight to agents?",
      "You can skip the ladder. You cannot skip the discipline. Agents without scripts and policies automate uncertainty at production scale.",
    ],
    [
      "How do we know a runbook is 'executable'?",
      "Someone other than the author can follow it in a drill and reach the documented outcome without improvising.",
    ],
    [
      "Are runbooks obsolete if we have observability?",
      "Observability tells you what broke. Runbooks tell you what to do next. Executable operations connects both.",
    ],
    [
      "Who should own the ladder?",
      "The team that is on-call when it fails — usually platform or SRE, with procedure owners from service teams.",
    ],
  ],
}
