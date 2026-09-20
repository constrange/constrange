import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const aiAgentNeedsControlPlaneNotPromptPost: Article = {
  slug: "ai-agent-needs-control-plane-not-prompt",
  title: "Your AI agent needs a control plane, not another prompt",
  deck:
    "Model, agent, and control plane are not the same layer — production needs identity, permissions, limits, and audit around autonomous action.",
  category: "Engineering",
  date: "8 January 2027",
  dateIso: "2027-01-08",
  readTime: readTime(1500),
  author,
  tags: ["AI agents", "Control plane", "Security", "Production systems"],
  art: { label: "Engineering", cells: ["A clever prompt is not a production boundary"], tone: "slate" },
  body: [
    p(
      "The demo agent ships with a system prompt, five tools, and applause. Production arrives with a different question: who is this agent, what may it touch, how do you prove what it did, and how do you stop it before it emails every customer or deletes the wrong row? Teams respond by iterating prompts — longer guardrails, more 'never do X' lines, finer tool descriptions. Prompts help. They are not a control plane.",
    ),
    p(
      "A model generates text. An agent chooses actions over time. A control plane governs agents: identity, authentication, authorization, policy, quotas, observability, kill switches, and human escalation. Confusing the three layers is why POC agents feel magical and production agents feel radioactive.",
    ),
    p(
      "Constrange sees the same arc: successful lab agent, hurried pilot, first real permission boundary, incident, retreat to chat-only. The fix is rarely 'better prompting.' It is architecture that treats autonomous software like autonomous software — not like a fancy autocomplete.",
    ),
    h2("Three layers, three questions"),
    p(
      "Ask of the model: is output quality acceptable for this task? Ask of the agent: can it complete workflows with tools and memory? Ask of the control plane: if it goes wrong, can we contain, explain, and recover — under audit?",
    ),
    fig(
      "ai-agent-control-plane.svg",
      "Stack: model at base, agent loop in middle, control plane wrapping with identity, policy, limits, audit",
      "Prompts tune behaviour inside the agent. The control plane defines what behaviour is allowed.",
    ),
    {
      t: "table",
      caption: "Layer responsibilities",
      head: ["Layer", "Owns", "Does not own"],
      rows: [
        ["Model", "Language, reasoning quality", "Permission to act in your systems"],
        ["Agent", "Tool selection, planning, memory", "Enterprise policy enforcement"],
        ["Control plane", "Identity, authz, limits, audit", "Task-specific reasoning"],
      ],
    },
    h2("Identity: the agent is a principal"),
    p(
      "Production agents must have identity separate from the human who invoked them — and separate from each other. 'Run as admin because the developer tested that way' does not scale. Service accounts, scoped tokens, short-lived credentials, and delegation chains ('user U may spawn agent A with subset of U's permissions') are table stakes.",
    ),
    p(
      "Shared long-lived API keys embedded in agent config are shadow IT with a chat interface. Rotate them and the agent breaks; leak them and the blast radius is the whole key. Identity infrastructure precedes clever tools.",
    ),
    ul([
      "Distinct agent identity per environment — not prod keys in staging",
      "Delegation with explicit scope and expiry",
      "Human identity linked to agent runs for accountability",
      "No superuser toolbelt 'just for flexibility'",
    ]),
    note(
      "If you cannot answer 'which agent identity performed this action?' you do not have production — you have an experiment with credentials.",
    ),
    h2("Permissions: tools are API calls with teeth"),
    p(
      "Tool definitions tempt teams to describe safety in natural language: 'only use delete when sure.' Enforcement belongs outside the model — policy engines, allowlists, row-level guards, separate approval steps for irreversible operations. The model should not be the authorization layer; it is unreliable by design.",
    ),
    h3("Least privilege per workflow"),
    p(
      "An agent that summarises tickets needs read on tickets — not write on billing. Compose agents with narrow tool sets rather than one omnibus agent with forty tools 'so it can handle anything.' Omnibus agents maximize prompt injection surface and minimize explainability.",
    ),
    h3("Human gates on irreversible actions"),
    p(
      "Refunds, external email, production config, data export — route through approval tokens the control plane issues after human or rules-based sign-off. The agent proposes; the plane disposes.",
    ),
    h2("Limits: cost, rate, and blast radius"),
    p(
      "Agents loop. Loops spend money and time. Without quotas — tokens per hour, tool calls per run, wall-clock timeout, concurrent run caps — a stuck agent becomes a denial-of-wallet attack against your own budget. Rate limits protect downstream systems too: CRM APIs were not designed for an eager loop hammering them because the model 'wanted to be thorough.'",
    ),
    {
      t: "table",
      caption: "Limits to implement before pilot",
      head: ["Limit type", "Protects against"],
      rows: [
        ["Token and spend caps", "Runaway cost from loops and retries"],
        ["Tool call budgets", "Downstream API exhaustion"],
        ["Wall-clock timeout", "Infinite planning spirals"],
        ["Concurrency caps", "Thundering herd on shared services"],
        ["Output size caps", "Accidental data exfiltration volume"],
      ],
    },
    h2("Audit: prove what happened"),
    p(
      "Regulators, security teams, and angry customers ask the same thing: show the trail. Log prompts, tool inputs and outputs (redacted), model version, identity, policy decisions, human approvals, and final side effects. 'The agent decided' is not an audit record.",
    ),
    p(
      "Structured traces beat prose logs. Align agent spans with your existing observability — same trace IDs across web request, agent run, tool HTTP call, database write — so incidents are one graph, not three tabs of guesswork.",
    ),
    quote(
      "Prompts shape intent. Audit records prove behaviour. Only one of those holds up in a post-incident review.",
    ),
    h2("Kill switches and degradation"),
    p(
      "Agents fail open in demos and must fail closed in production — or degrade gracefully. Global kill switch per agent, per tool, per tenant. Circuit breakers when error rates spike. Fallback to human queue when policy service is down — not fallback to unrestricted tools because 'availability.'",
    ),
    p(
      "Version pinning matters: model upgrades change behaviour overnight. Control plane should gate model versions per environment with canary tenants before broad rollout.",
    ),
    h2("Memory and data boundaries"),
    p(
      "Agents with memory accumulate risk: PII in vector stores, cross-tenant leakage via shared indexes, stale facts treated as ground truth. The control plane defines retention, encryption, tenant isolation, and what may be retrieved into context for a given identity. Memory is not 'just RAG' — it is persisted authority the agent will act on.",
    ),
    h3("Separate orchestration from reasoning"),
    p(
      "Keep workflow state in systems you operate — queues, state machines, databases — not only in chat history. When the agent session ends, the business process should still be inspectable without replaying tokens.",
    ),
    h2("Organizational failure modes"),
    p(
      "Security blocked 'AI' until blockers were addressed — but blockers were never funded because the project was 'just a prompt change.' Platform teams own Kubernetes; nobody owns agent plane — so each product ships its own keys and logs. Legal asks for audit; engineering points at OpenAI dashboards.",
    ),
    p(
      "Naming the control plane as a first-class deliverable changes staffing and timelines. It is not overhead — it is the difference between tool and product.",
    ),
    ol([
      "Assign agent identity and delegation model before expanding tools",
      "Enforce authorization outside the model; keep tools narrow",
      "Ship spend, rate, and time limits with the first production workflow",
      "Unify audit traces with existing observability standards",
      "Build kill switches and model version gates before broad rollout",
    ]),
    h2("What good looks like in review"),
    p(
      "Steering questions become answerable: maximum spend per day, list of tools per agent, who approved external actions, which model version ran, what data categories entered context. POC questions — 'is it helpful?' — remain, but they no longer block production hygiene.",
    ),
    p(
      "Constrange often maps agent workflows onto existing integration patterns: the same idempotency, retry, and approval concepts you already use for microservices — wrapped around a planner that is stochastic, not deterministic.",
    ),
    h2("Prompts still matter — in their lane"),
    p(
      "Prompts improve task quality, tone, and format. They reduce mistaken tool selection frequency. They do not replace IAM. Invest in prompts after the plane exists — not instead of it. A well-prompted agent without authorization is a articulate liability.",
    ),
    p(
      "The contrarian take in boardrooms: your competitor's demo is not ahead because their prompt is longer. They are ahead if they built governance while you iterated adjectives — or they are about to learn the same incident you already scheduled.",
    ),
    h2("Build vs buy for the plane"),
    p(
      "Frameworks offer agent loops; vendors offer hosted tools. Neither removes your obligation to own policy, identity, and audit inside your boundary. Buying a gateway for model calls helps; it is one component of the plane, not the whole flight deck.",
    ),
    p(
      "Start with one high-value workflow, narrow tools, full tracing, explicit human approval on external effects. Expand scope when metrics — cost, error rate, approval latency — are boring. Expand model ambition when the plane is boring. That order is non-negotiable for production trust.",
    ),
    cta(
      "Pilot agent works — but nobody will sign off on production access?",
      "We design agent control planes: identity, policy, limits, and audit that executives and security can actually approve.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Isn't this just standard API security?",
      "Similar primitives — identity, authz, audit — but agents add non-determinism, loops, and tool autonomy. Policies must assume mistaken or manipulated plans, not only malicious users.",
    ],
    [
      "Can we use our existing IAM?",
      "Yes, if you extend it to agent identities, delegation, and per-tool scopes — not if you reuse human SSO sessions as god-mode API keys.",
    ],
    [
      "Do small teams need a full control plane?",
      "They need the controls — maybe lightweight implementation. Skip identity and audit 'until later' and later arrives as an incident.",
    ],
    [
      "What about open-source agent frameworks?",
      "Use them for orchestration inside the agent layer — not as a substitute for enterprise policy, spend limits, and kill switches you still must operate.",
    ],
  ],
}
