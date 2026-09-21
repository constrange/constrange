import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const architectureAiAgentTrustedPost: Article = {
  slug: "architecture-ai-agent-trusted",
  title: "The architecture behind an AI agent that can actually be trusted",
  deck:
    "Tool calling, state, permissions, retries, memory, evaluation, auditability, human escalation and failure containment.",
  category: "Engineering",
  date: "7 May 2026",
  dateIso: "2026-05-07",
  readTime: readTime(1500),
  author,
  tags: ["AI Agents", "Architecture", "Governance"],
  art: {
    label: "Engineering",
    cells: ["Trust is architecture, not a prompt"],
    tone: "moss",
  },
  body: [
    p(
      "Demos trust charisma. Production trusts architecture. An AI agent that quotes confidently, calls tools aggressively, and remembers whatever the session allows may win a pilot. It will lose an audit, a regulator conversation, or a Tuesday when finance asks why an invoice was approved without a human.",
    ),
    p(
      "Trust is not a tone setting. It is the sum of boundaries: what the agent may read, what it may write, how it proves what it did, when it stops and asks, how failures are contained, and how the organisation evaluates whether the agent is still safe after the model vendor ships an update.",
    ),
    p(
      "Constrange designs agent programmes as distributed systems with judgement — not as chat wrappers. Tool calling, state, permissions, retries, memory, evaluation, auditability, human escalation, and failure containment are not advanced features. They are the minimum structure between experiment and entitlement.",
    ),
    h2("Tool calling is a permission problem"),
    p(
      "Every tool is an API to your organisation: create ticket, refund payment, update record, send email, query customer data. The model proposes; infrastructure disposes. Tools must be registered, schema-validated, rate-limited, and authorized per actor and tenant — independent of whatever the model 'intended'.",
    ),
    fig(
      "ai-agent-trusted.svg",
      "Agent architecture with permission gate, audit log, and human escalation path around tool calls",
      "The model proposes actions; policy-enforcing infrastructure decides what may execute.",
    ),
    {
      t: "table",
      caption: "Tool surface design",
      head: ["Layer", "Purpose"],
      rows: [
        ["Tool registry", "Known capabilities only — no arbitrary URLs"],
        ["Schema validation", "Reject malformed calls before side effects"],
        ["Policy engine", "Role, tenant, data class, amount thresholds"],
        ["Execution sandbox", "Timeouts, idempotency keys, dry-run mode"],
        ["Audit log", "Immutable record of propose, allow, deny, execute"],
      ],
    },
    h2("State: what the agent knows and when it lies"),
    p(
      "Agents need state: conversation context, workflow step, retrieved documents, prior tool results. State must be explicit, versioned, and scoped. Implicit state in prompt stuffing breaks reproducibility and audit. Separate working memory from authoritative records — the agent's belief is not the system of record.",
    ),
    p(
      "Long-running workflows need durable state machines, not only chat history. Crash recovery, human handoff, and evaluation all require knowing which step the agent reached — not inferring from prose.",
    ),
    ul([
      "Session state vs workflow state vs user profile",
      "TTL and redaction for sensitive retrieved content",
      "Checkpoint after each tool side effect",
      "Human-readable workflow status outside the model",
      "Replay from checkpoint for incident analysis",
    ]),
    note(
      "If you cannot replay an agent run from stored state and tool logs, you cannot investigate it — only apologise.",
    ),
    h2("Permissions and least privilege"),
    p(
      "Agents inherit credentials badly. Shared service accounts with broad access turn a prompt injection into enterprise admin. Agents should act through scoped tokens tied to user, role, and task. Elevation requires explicit human approval step — not a larger model temperature.",
    ),
    p(
      "Read-only by default for exploratory tasks. Write tools gated by dual control where policy demands. Sensitive reads logged with purpose. Cross-tenant leakage is an architecture failure, not a model quirk.",
    ),
    h2("Retries, idempotency, and unknown outcomes"),
    p(
      "Tool calls time out. Models retry prose; infrastructure must not blindly retry side effects. Idempotency keys on mutating tools. Distinguish transient failure from business rejection. Surface 'unknown' to orchestration so the agent does not hallucinate success.",
    ),
    ol([
      "Wrap mutating tools with idempotent execution layer",
      "Return structured errors the model can interpret — sparingly",
      "Cap tool retry attempts independently of model retries",
      "Dead-letter human queue for exhausted automation",
      "Never chain silent retries on financial movement",
    ]),
    quote(
      "An agent that can call tools but cannot fail safely is a demo with production credentials.",
    ),
    h2("Memory: useful, dangerous, regulated"),
    p(
      "Memory improves experience and increases risk. Personal data in vector stores, cross-session retention, inferred preferences — each triggers retention policy and consent questions. Memory architecture must declare what is stored, for how long, who can delete, and what is excluded by classification.",
    ),
    h3("Memory tiers"),
    p(
      "Ephemeral session context. Task-scoped retrieval from approved corpora. Long-term memory only with explicit user consent and legal review. No 'remember everything' defaults in enterprise without classification gates.",
    ),
    h2("Evaluation before and after ship"),
    p(
      "Trust decays without measurement. Offline eval suites for tool selection accuracy, policy adherence, and hallucination under adversarial prompts. Online eval: sample human review, shadow mode, A/B on non-critical paths. Regression gates when models or tools change.",
    ),
    {
      t: "table",
      caption: "Evaluation dimensions",
      head: ["Dimension", "Example signal"],
      rows: [
        ["Correct tool choice", "Did it pick refund vs credit appropriately?"],
        ["Policy adherence", "Were denied actions attempted?"],
        ["Grounding fidelity", "Claims supported by retrieved sources?"],
        ["Escalation timing", "Human called when threshold exceeded?"],
        ["Outcome quality", "Task completed without rework?"],
      ],
    },
    h2("Auditability regulators and finance actually accept"),
    p(
      "Audit wants: who asked, what context was retrieved, what tools were proposed, what policy allowed, what executed, what changed in records, who approved exceptions. Logs must be tamper-evident and retained per policy. Screenshots of chat are not audit trail.",
    ),
    p(
      "Align agent audit schema with existing control frameworks — do not invent parallel logging finance cannot reconcile.",
    ),
    h2("Human escalation as first-class architecture"),
    p(
      "Escalation is not failure messaging. It is a routed workflow: queue, priority, context bundle, resume token, SLA. Humans receive evidence — retrieved passages, tool history, policy reason for block — not only the user's last message.",
    ),
    ul([
      "Confidence and risk scores trigger escalation — not vibes",
      "Amount, data class, and action type thresholds in policy",
      "Supervisor approval for irreversible actions",
      "Graceful pause — agent state waits; does not guess",
      "Feedback from human resolution feeds eval dataset",
    ]),
    note(
      "If escalation drops the user into a generic support queue without context, trust dies twice.",
    ),
    h2("Failure containment and blast radius"),
    p(
      "Agents fail open in demos and must fail closed in production. Rate limits per user and tenant. Circuit breakers on tool dependencies. Kill switch for agent classes. Canary releases per cohort. Contain prompt injection damage: tools cannot exfiltrate broad queries by default.",
    ),
    p(
      "Assume compromise of the model layer. Design so compromise still cannot exceed tool policy. That is zero-trust for agents — unfashionable and necessary.",
    ),
    h3("Containment patterns"),
    ol([
      "Separate read and write tool credentials",
      "Output filters for PII and secrets before user display",
      "Allow-list destinations for external calls",
      "Budget caps on tool calls per session",
      "Automatic session termination on policy violation streaks",
    ]),
    h2("Organisational failure modes in agent programmes"),
    p(
      "Pilot uses admin credentials. Security review deferred to scale. Legal sees retention after launch. Operations inherits alerts with no runbook. Vendor model update silently changes behaviour. Each is predictable. Architecture exists to make them visible before entitlement.",
    ),
    p(
      "Trustworthy agents require product, security, legal, and operations in the same design room — not sequential gates after the demo wins a award.",
    ),
    h2("A sixteen-week trust baseline"),
    ol([
      "Weeks 1–2: inventory tools and data classes — map blast radius",
      "Weeks 3–4: implement policy gate and audit log for all tools",
      "Weeks 5–6: durable workflow state and human escalation queue",
      "Weeks 7–8: offline eval suite and CI regression gate",
      "Weeks 9–10: scoped credentials and idempotent mutating tools",
      "Weeks 11–12: memory classification and retention controls",
      "Weeks 13–14: game day — prompt injection and tool abuse scenarios",
      "Weeks 15–16: operational runbooks and executive reporting on agent SLOs",
    ]),
    p(
      "Sixteen weeks will not finish every control. It separates programmes building trust from programmes building surprise.",
    ),
    h2("Model updates are change events, not surprises"),
    p(
      "Foundation models change behaviour without semver your application controls. Treat vendor model updates like database migrations: changelog review, regression eval, canary cohort, rollback plan. An agent that passed legal review in March may exceed tool authority in November because the model became more eager — not because policy changed.",
    ),
    p(
      "Pin models in production where policy requires stability. Document acceptable drift bands in eval metrics. Pair model updates with tool policy review — not only prompt tweaks. Trust decays silently when only the model moved and nobody re-ran the suite.",
    ),
    h2("Questions for your next agent steering meeting"),
    ul([
      "What can this agent write — and under whose authority?",
      "Where is the audit trail when it approves or denies?",
      "What happens on timeout, duplicate tool call, or model update?",
      "When must a human intervene — are thresholds in policy or prose?",
      "How do we know accuracy did not regress last week?",
    ]),
    p(
      "Users trust agents that behave predictably within bounds — not agents that sound confident. Architecture is how confidence becomes warranted.",
    ),
    p(
      "Ship agents the way you ship payments: with permissions, proof, escalation, and containment designed first — and charisma in the demo optional.",
    ),
    p(
      "Trust compounds slowly. A single unaudited write tool or unbounded memory store can unwind quarters of stakeholder confidence. Architecture is how you make trust cheap to maintain and expensive to accidentally break.",
    ),
    cta(
      "Pilot impressed leadership but production needs controls?",
      "Bring your tool list, credential model, and escalation gaps. We will help you design agent architecture that can be audited, contained, and improved — not only demonstrated.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Can we trust open-weight models if tooling is strong?",
      "Strong tooling and policy reduce risk; model choice still affects grounding and abuse resistance — evaluate both.",
    ],
    [
      "How much human review is enough?",
      "Scale review to risk: high for irreversible and regulated actions; sampled for low-risk read paths.",
    ],
    [
      "Should agents share one service account?",
      "No. Use scoped per-user or per-task credentials with policy enforcement at execution.",
    ],
    [
      "What is the minimum audit record?",
      "Actor, intent, retrieved context ids, tool proposals, policy decision, execution result, timestamp — immutable store.",
    ],
  ],
}
