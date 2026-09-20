import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const blastRadiusBudgetForAutomationPost: Article = {
  slug: "blast-radius-budget-for-automation",
  title: "Every automated system needs a blast-radius budget",
  deck:
    "Who triggers, what modifies, how you roll back, and where loops hide — for CI/CD, agents, bots, and anything that acts without a human in the room.",
  category: "Engineering",
  date: "22 January 2027",
  dateIso: "2027-01-22",
  readTime: readTime(1500),
  author,
  tags: ["Blast radius", "Automation", "SRE", "Security"],
  art: { label: "Engineering", cells: ["Automation without a blast-radius budget is optimism with credentials"], tone: "wine" },
  body: [
    p(
      "Automation is sold as speed. Deploy on merge. Remediate on alert. Let the agent fix the ticket. Each promise assumes the automation will mostly do the right thing — and when it does not, someone will notice quickly enough to stop it. That assumption is not engineering. It is hope dressed in YAML.",
    ),
    p(
      "Every automated system that can change production needs a blast-radius budget: an explicit accounting of who can trigger it, what it is allowed to modify, how you roll back, and where feedback loops can amplify a small mistake into an organisation-wide incident. Without that budget, you are not buying velocity. You are renting it until the first loop closes.",
    ),
    p(
      "Constrange treats blast radius as a design primitive, not a post-incident regret. The question is not whether automation will fail. It is whether failure stays inside a boundary you chose on purpose.",
    ),
    h2("What a blast-radius budget actually is"),
    p(
      "A blast-radius budget is not a risk register paragraph. It is a set of enforced limits on automated action: maximum scope per run, maximum rate of change, maximum duration before human acknowledgement, maximum resources touched, maximum irreversible operations without approval. Like a financial budget, it forces trade-offs before the quarter starts — not after the spend.",
    ),
    fig(
      "blast-radius-budget.svg",
      "Concentric rings: trigger identity, allowed mutations, rollback path, loop breakers at the edge",
      "The budget is the ring automation cannot cross without explicit approval.",
    ),
    {
      t: "table",
      caption: "Four questions every automated actor must answer",
      head: ["Dimension", "What the budget specifies"],
      rows: [
        ["Who triggers", "Identity, role, schedule, or event — and whether delegation is allowed"],
        ["What modifies", "Resources, regions, data classes, and operations (read vs write vs delete)"],
        ["How you rollback", "Reversible steps, artefact retention, and time-to-restore under load"],
        ["Where loops hide", "Retries, cascades, self-healing chains, and agent-to-agent handoffs"],
      ],
    },
    h2("Who triggers: identity is the first boundary"),
    p(
      "CI pipelines run as service accounts. Chatops bots run as shared users. Agents run as API keys with broad scopes because someone wanted the demo to work on Friday. Each pattern expands who can trigger production change without expanding who can be held accountable.",
    ),
    p(
      "Blast-radius budgeting starts with trigger identity: one automation, one principal, one purpose. Shared credentials are a hidden multiplier — every team that touches the key inherits the blast radius of every other team. Scheduled jobs need the same scrutiny as on-demand jobs. A cron that deletes stale resources at 3 a.m. is still production change; it just arrives when nobody is watching.",
    ),
    ul([
      "Separate principals per environment and per automation class",
      "No long-lived tokens without rotation and scope review",
      "Human-in-the-loop for triggers that cross trust zones",
      "Audit log that ties action to principal, not to 'the pipeline'",
    ]),
    h2("What modifies: scope beats speed"),
    p(
      "The dangerous automations are not the loud ones. They are the helpful ones with wide permissions: the deploy bot that can touch every cluster, the remediation script that restarts any service matching a label, the agent that can open pull requests and merge them when checks pass. Each is fast until it is wrong across everything at once.",
    ),
    p(
      "Scope the mutation surface deliberately. Namespace boundaries, resource tags, change windows, and operation allowlists are not bureaucracy — they are blast-radius engineering. Progressive delivery exists partly because 'deploy everything' is a single failure mode wearing a release train costume.",
    ),
    h3("Irreversible operations need a smaller budget"),
    p(
      "Deletes, schema migrations, DNS cuts, identity revocation, and data exports should carry the tightest budgets — often requiring explicit approval per action class. Reversible operations can afford wider automation if rollback is tested and fast. Teams that treat all operations equally are budgeting for the average case while incidents arrive from the tail.",
    ),
    note(
      "If you cannot describe what one mistaken run would touch in one sentence, the blast radius is already too large.",
    ),
    h2("Rollback: the budget nobody funds"),
    p(
      "Automation proposals include triggers and actions. Rollback is deferred to 'we will figure it out' or assumed to be git revert. Production rollback under load is a different skill: artefact immutability, database backward compatibility, feature flags, traffic shifting, and the human runbook for when automation cannot undo itself.",
    ),
    p(
      "A blast-radius budget without rollback is a loan. You are borrowing confidence that mistakes will be small enough to fix manually. Manual fix at 2 a.m. does not scale with automation frequency. Fund rollback tests the same way you fund deployment tests — or accept that your budget is theoretical.",
    ),
    {
      t: "table",
      caption: "Rollback readiness",
      head: ["Automation type", "Rollback must include"],
      rows: [
        ["Infrastructure apply", "Previous state snapshot and apply-time drift detection"],
        ["Database migration", "Backward-compatible steps or rehearsed restore"],
        ["Config push", "Versioned config and instant revert path"],
        ["Agent-generated change", "Diff review gate and retained pre-change baseline"],
        ["Auto-remediation", "Circuit breaker and manual override that actually works"],
      ],
    },
    h2("Loops: where small mistakes become storms"),
    p(
      "Loops are the hidden line item in every blast-radius budget. A health check fails. Orchestrator restarts the service. Restart triggers thundering herd. Load balancer marks nodes unhealthy. Autoscaler adds capacity into a broken dependency. Monitoring alerts. Remediation scales again. The automation did exactly what it was told. The system amplified.",
    ),
    p(
      "CI/CD has its own loops: flaky test retries that eventually pass and merge broken code; auto-merge bots that chase green builds by reverting fixes; deployment pipelines that roll forward because rollback job is disabled. Agents introduce new loops — one agent opens a ticket, another closes it, a third deploys the 'fix' without a human reading the diff.",
    ),
    ul([
      "Rate limits on automated remediation per resource",
      "Maximum retry counts with escalation to human",
      "Cooldown periods after automated action",
      "Kill switches reachable without the automation stack",
      "Loop detection: same action, same target, N times in T minutes",
    ]),
    h2("CI/CD, agents, and bots: same budget, different costumes"),
    p(
      "Teams treat CI/CD as mature and agents as experimental. From a blast-radius perspective, both are automated actors that modify state. A pipeline that applies Terraform to production is an agent with a Jenkinsfile. An LLM agent that patches config is a pipeline with natural language triggers. The budget questions are identical: who, what, rollback, loops.",
    ),
    p(
      "Bots in chat are often the worst-funded: broad OAuth scopes, commands that run shell on production hosts, no change audit beyond the channel history. Convenience is not a blast-radius strategy. If the bot can do it, anyone who can message the bot can do it — including a compromised account or a prompt injection that reached the integration.",
    ),
    quote(
      "Speed without a blast-radius budget is not DevOps. It is scheduled incident response.",
    ),
    h2("Designing budgets that survive contact with production"),
    p(
      "Start from worst plausible mistake, not best case. One wrong merge. One mislabelled resource. One agent hallucinating a file path. Work outward: what would that touch, how fast would it propagate, who would notice, how would you stop it, how would you restore. If any answer is 'we would find out from customers', the budget is zero.",
    ),
    ol([
      "Inventory every automated actor that can change production",
      "Assign each a principal, scope, and maximum change per run",
      "Define rollback and test it under realistic load",
      "Add loop breakers and human escalation thresholds",
      "Review budgets when permissions, dependencies, or agents change",
    ]),
    h3("Progressive trust, not progressive permission"),
    p(
      "New automation should earn wider scope through observed behaviour — not inherit admin on day one because the project is late. Shadow mode, dry-run, canary environments, and approval gates for the first N production actions are how budgets grow safely. Teams that grant full access to 'unblock' the demo are borrowing blast radius they will repay with interest.",
    ),
    h2("Governance without stopping the useful"),
    p(
      "Blast-radius budgets are not arguments against automation. They are how automation stays fundable after the first incident. Steering groups approve speed when boundaries are explicit. Security approves agents when scopes are narrow and auditable. SRE approves self-healing when kill switches work and loops are bounded.",
    ),
    p(
      "Constrange often finds the real blast radius in unofficial automation — the script on a laptop, the webhook nobody documented, the 'temporary' auto-merge rule that became load-bearing. Official pipelines get reviews. Shadow automation inherits production credentials and zero budget.",
    ),
    h2("Questions for your next automation review"),
    ul([
      "What is the largest single mistaken run could change?",
      "Who can trigger it — and can that identity be narrowed?",
      "When did we last test rollback, not just deploy?",
      "What loop would turn one failure into many?",
      "Where is automation running that is not on the diagram?",
    ]),
    p(
      "Honest answers produce tighter scopes, better rollback, and automation that survives its second year. Vague answers produce a post-mortem titled 'unexpected interaction'.",
    ),
    cta(
      "Automating faster but wider than you can undo?",
      "Map your automated actors — official and shadow. We will help you set blast-radius budgets that keep speed without betting the estate.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Is blast-radius budgeting only for large organisations?",
      "No. Small teams feel incidents harder. One mistaken deploy can be the whole product. Budgets scale down as scope limits and approval gates.",
    ],
    [
      "How is this different from change management?",
      "Change management is often process theatre. Blast-radius budgeting is enforced technical limits — scopes, rates, rollback — that work when nobody is in the meeting.",
    ],
    [
      "Should agents have smaller budgets than CI/CD?",
      "They should start smaller. Novel triggers and broader interpretation deserve narrower mutation scope until behaviour is proven.",
    ],
    [
      "What is the first step if we have no budgets today?",
      "Inventory automated production change, pick the widest-scoped actor, and halve what it can touch this week. Then fund rollback for what remains.",
    ],
  ],
}
