import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const platformEngineeringForAiAgentsControlPlanePost: Article = {
  slug: "platform-engineering-for-ai-agents-control-plane",
  title: "Platform Engineering for AI Agents: Designing the Control Plane",
  deck: "Agents need a control plane — identity, policy, budgets, tool registry, and audit — the same way Kubernetes needed more than containers.",
  category: "Engineering",
  date: "4 September 2026",
  dateIso: "2026-09-04",
  readTime: readTime(1486),
  author,
  tags: ["Platform engineering","AI agents","Control plane","Governance"],
  art: { label: "Engineering", cells: ["Agents need a control plane — identity, policy, budgets, tool registr…"], tone: "plum" },
  body: [
    p(
      "AI agents show up in vendor decks and architecture reviews, often sold as a capability upgrade or a model selection problem. The conversation stops at demos. Constrange treats agent control planes as an engineering discipline: observe what systems actually do in your environment, measure the cost and risk of that behaviour, and model the gap between the prompt and the platform that makes it safe to run.",
    ),
    p(
      "Observe: inventory every agent deployment, its tool entitlements, credential paths, and spend. Shadow agents — built in notebooks with production keys — are more common than platform teams admit.",
    ),
    p(
      "Measure: cost per agent per outcome, policy denial rate, tool error rate by registry entry, and time to onboard a new agent safely. Platform success is median time-to-production with guardrails, not number of demos.",
    ),
    p(
      "Model: the control plane is the product. Agents are workloads. Tool gateways are APIs. Policy is admission control. Observability is the feedback loop. Without a plane, every team rebuilds the same brittle scaffolding.",
    ),
    h2("Agents are workloads, not prompts"),
    p(
      "Platform teams have seen this movie. Developers containerised apps before Kubernetes existed. Each team built bespoke deploy scripts, secret handling, and monitoring. Kubernetes did not invent containers — it standardised how workloads run, connect, and are governed.",
    ),
    p(
      "AI agents are entering the same phase. Each product team wraps an SDK, embeds API keys, and ships. Security discovers production credentials in a laptop repo. Finance sees uncapped token bills. Incidents lack traces. The answer is not 'ban agents'. It is build the control plane.",
    ),
    p(
      "Constrange defines the agent control plane as the layer that answers: who is this agent, what may it touch, how much may it spend, and what did it do — with evidence.",
    ),
    fig("ai-agent-control-plane-platform.svg", "Control plane components governing agent runtime identity, policy, budget, and audit", "The control plane is what makes agents a platform workload — not a side project."),
    {
      t: "table",
      caption: "Control plane capabilities",
      head: ["Capability","Without it"],
      rows: [
              [
                      "Tool registry",
                      "Ad-hoc credentials per agent"
              ],
              [
                      "Policy engine",
                      "Prompt-only guardrails"
              ],
              [
                      "Budget caps",
                      "Surprise invoices"
              ],
              [
                      "Trace store",
                      "Post-mortems without evidence"
              ],
              [
                      "Approval workflows",
                      "Destructive actions in autopilot"
              ]
      ],
    },
    h2("Core components"),
    p(
      "Identity: agents run as principals, not shared service accounts. Federation to human initiators matters for audit. Policy: admission checks before tool execution, not after damage. Tool registry: versioned manifests with schemas, owners, and blast-radius class.",
    ),
    p(
      "Budgets: per-agent, per-tenant, per-task ceilings on tokens, tool calls, and wall-clock time. Audit: immutable logs of plans, tool args hashes, outcomes, and policy decisions.",
    ),
    p(
      "Approval workflows: integrate with existing change management for high-risk tools. Do not create a parallel Slack-based shadow process.",
    ),
    ul([
          "Tool registry with schema validation and ownership metadata",
          "Policy engine outside the model — testable, versioned",
          "Secrets broker — no long-lived keys in agent configs",
          "Standard trace format across teams",
          "Cost allocation labels per business unit"
    ]),
    h2("Platform golden paths"),
    p(
      "Golden paths reduce cognitive load. A team should scaffold a new agent with tracing, policy hooks, and budget defaults in one command — the same way they create a service from a template with CI and observability baked in.",
    ),
    p(
      "The anti-pattern is documentation that says 'call security for credentials'. Developers will skip it. Measure golden path adoption vs shadow agents. Shadow count is your platform debt metric.",
    ),
    p(
      "Version the golden path. Agent SDKs, tool protocols, and model APIs change monthly. Unversioned templates drift into unsupported patterns.",
    ),
    note("If your platform team cannot ship agent templates faster than product teams ship shadow agents, the platform has already lost the adoption fight."),
    h2("FinOps and reliability together"),
    p(
      "FinOps often enters agent conversations after the first invoice shock. Reliability enters after the first incident. The control plane connects them: budget throttles are reliability valves — they stop runaway loops before they become outages or bankruptcy.",
    ),
    p(
      "Measure unit economics: cost per resolved support ticket, per automated remediation, per code review assist. Some agents are not worth running at scale once measured honestly.",
    ),
    p(
      "Challenge headcount replacement narratives. Platform engineering for agents creates new work — policy curation, tool lifecycle, eval suites. Account for that in roadmaps.",
    ),
    quote("You do not have an agent strategy. You have a control plane strategy or a collection of risks."),
    h2("Rollout playbook"),
    p(
      "Quarter one: inventory and freeze on new production credentials outside the broker. Quarter two: mandatory tool registry and tracing for all new agents. Quarter three: policy-as-code for top ten tools by spend. Quarter four: continuous eval and automated regression on golden tasks.",
    ),
    p(
      "Do not wait for perfect coverage. Measure shadow agent count monthly and drive it down with better paths, not edicts.",
    ),
    p(
      "Executive dashboards: spend by agent, incident count by agent, policy denials trending up (good early, bad if sustained without fixes).",
    ),
    h3("When to centralise vs federate"),
    p(
      "Centralise policy and observability standards. Federate tool implementations to domain teams who own the underlying systems. The control plane is the contract surface — not the entire tool graph.",
    ),
    h2("Questions for your next review"),
    ul([
          "What would we see if we measured agent control planes for one week in production?",
          "Which dependency or tool call owns the majority of failures or cost?",
          "What assumption in our agent design does the telemetry contradict?",
          "What is the smallest experiment that would change our operating model?"
    ]),
    p(
      "The teams that run agent control planes reliably are not those with the best prompts. They are those that observe honestly, measure without vanity metrics, and update the control plane when traces disagree with the architecture diagram.",
    ),
    cta(
      "Need help operationalising agent control planes?",
      "Bring your agent traces, tool inventory, and last incident. We will help you observe what matters, measure what costs, and model what to change.",
      "Start a conversation",
    ),
    p(
      "Run a credential census. Count API keys with agent-related names in vaults and git history. The number starts uncomfortable conversations that matter.",
    ),
    p(
      "Platform teams should publish SLOs for the control plane — trace ingestion lag, policy evaluation latency, registry availability.",
    ),
    p(
      "Treat tool deprecation like API deprecation: sunset dates, migration guides, and enforcement via policy.",
    ),
    p(
      "Multi-region agents need data residency rules in policy, not in prompts.",
    ),
    p(
      "Integrate agent audit logs with existing SIEM. Security teams will not open a second portal.",
    ),
    p(
      "Measure developer satisfaction with the golden path quarterly. Low scores predict shadow agents.",
    ),
    p(
      "Production agent systems fail in boring ways long before they fail in interesting ones. Timeouts, stale credentials, ambiguous tool schemas, and missing idempotency keys dominate incident logs. Measure those first. The model is rarely the first place to spend another sprint — the integration edge is.",
    ),
    p(
      "Platform maturity shows up in how teams talk about agents in incident review. Immature teams debate prompts. Mature teams read traces, attribute cost, and ask which policy gate should have fired. Build the habits and tooling that make the second conversation inevitable.",
    ),
    p(
      "Challenge vendor claims with your own telemetry. Demos optimise for completion; your customers optimise for correctness under load. Run the same task at ten times traffic with injected tool failures. If the architecture cannot explain behaviour post hoc, it is not ready for production traffic.",
    ),
    p(
      "Agent roadmaps should include explicit kill criteria. If unit economics do not improve after guardrails, or incident rate exceeds threshold, retire the agent. Keeping a failed experiment running because sunk cost is familiar is how organisations accumulate operational debt.",
    ),
    p(
      "Cross-functional ownership beats a single 'AI team' holding every agent. Domain teams own outcomes; platform teams own control planes; security owns policy patterns; FinOps owns attribution. Without divided ownership, agents become a bottleneck service nobody can scale.",
    ),
    p(
      "Treat eval datasets like test fixtures in a payments system — versioned, reviewed, and protected from casual edits. A polluted golden set hides drift until customers report it. Measure eval coverage the same way you measure code coverage: necessary, imperfect, and better than nothing.",
    ),
    p(
      "Documentation for agents must include failure behaviour, not only happy paths. What happens at budget cap? At policy denial? At tool timeout? Operators need runbooks, not README enthusiasm. Measure mean time to diagnose using only published docs — embarrassing results drive better writing.",
    ),
    p(
      "Regulatory and privacy constraints belong in architecture, not in post-hoc legal review. Data residency, retention, and right-to-erasure apply to agent memory and logs. Measure what personal data enters prompts and tool payloads weekly. Surprises here are expensive in every sense.",
    ),
    p(
      "Run a credential census. Count API keys with agent-related names in vaults and git history. The number starts uncomfortable conversations that matter.",
    ),
    p(
      "Platform teams should publish SLOs for the control plane — trace ingestion lag, policy evaluation latency, registry availability.",
    ),
    p(
      "Treat tool deprecation like API deprecation: sunset dates, migration guides, and enforcement via policy.",
    ),
    p(
      "Multi-region agents need data residency rules in policy, not in prompts.",
    ),
    p(
      "Integrate agent audit logs with existing SIEM. Security teams will not open a second portal.",
    ),
    p(
      "Measure developer satisfaction with the golden path quarterly. Low scores predict shadow agents.",
    ),
    p(
      "Production agent systems fail in boring ways long before they fail in interesting ones. Timeouts, stale credentials, ambiguous tool schemas, and missing idempotency keys dominate incident logs. Measure those first. The model is rarely the first place to spend another sprint — the integration edge is.",
    ),
  ],
  faqs: [
    [
      "What belongs in an agent control plane?",
      "Identity, secrets, tool registry, policy engine, budget enforcement, trace store, and approval workflows.",
    ],
    [
      "Is this different from LLM gateway products?",
      "Gateways handle model traffic. Control planes govern end-to-end agent behaviour including tools and side effects.",
    ],
    [
      "Who owns the control plane?",
      "Platform engineering with security and FinOps input — same coalition that owns CI/CD and service mesh.",
    ],
    [
      "Build or buy?",
      "Buy components where standards exist (model routing, auth). Build where your policy and tool graph are unique.",
    ],
  ],
}
