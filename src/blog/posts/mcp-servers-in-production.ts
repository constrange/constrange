import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const mcpServersInProductionPost: Article = {
  slug: "mcp-servers-in-production",
  title: "MCP Servers in Production: Architecture, Security, and Reliability",
  deck: "Running MCP servers like side projects invites outages. Cover deployment topologies, auth, rate limits, HA, and how to SLO tool latency for agents depending on them.",
  category: "Engineering",
  date: "14 September 2026",
  dateIso: "2026-09-14",
  readTime: readTime(1464),
  author,
  tags: ["MCP","Production","Architecture","Reliability"],
  art: { label: "Engineering", cells: ["Running MCP servers like side projects invites outages"], tone: "tide" },
  body: [
    p(
      "AI agents show up in vendor decks and architecture reviews, often sold as a capability upgrade or a model selection problem. The conversation stops at demos. Constrange treats production MCP servers as an engineering discipline: observe what systems actually do in your environment, measure the cost and risk of that behaviour, and model the gap between the prompt and the platform that makes it safe to run.",
    ),
    p(
      "Observe: map every MCP server — where it runs, who owns it, dependency chain to backends, and current SLO if any. Include IDE-local servers accidentally used for batch jobs.",
    ),
    p(
      "Measure: tool p95 latency, error rate, availability, deploy frequency, and blast radius per server. Agents amplify downstream outages — track fan-out.",
    ),
    p(
      "Model: MCP servers are microservices with agent-specific traffic patterns — bursty, verbose payloads, retry-heavy callers. Apply service mesh discipline.",
    ),
    h2("From laptop to datacenter"),
    p(
      "MCP began as a developer convenience — local servers wrapping filesystem and git. Production agents need always-available tools backed by enterprise systems. That shift requires everything microservices needed a decade ago: deploy pipelines, secrets management, on-call, and capacity planning.",
    ),
    p(
      "Constrange sees teams promote the same laptop config to production via a hurried Dockerfile. Missing: health checks, graceful shutdown, connection pooling, and backoff when backends throttle.",
    ),
    p(
      "Treat MCP promotion as a service launch, not a config tweak.",
    ),
    fig("mcp-servers-production.svg", "Production MCP server architecture with auth, rate limiting, and backend dependencies", "MCP servers are production services — not developer utilities."),
    {
      t: "table",
      caption: "Production readiness checklist",
      head: ["Area","Minimum bar"],
      rows: [
              [
                      "Auth",
                      "Per-client scoped tokens"
              ],
              [
                      "Rate limits",
                      "Per client and per tool"
              ],
              [
                      "Observability",
                      "Traces, metrics, structured logs"
              ],
              [
                      "HA",
                      "Multi-instance with health checks"
              ],
              [
                      "Deploy",
                      "CI, rollback, versioned manifests"
              ]
      ],
    },
    h2("Topology and scaling"),
    p(
      "Deploy MCP servers close to their backends — same VPC, low latency. Agent hosts may be remote; tool latency dominates task time. Scale horizontally for read-heavy tools. Queue mutating tools if backends cannot handle agent retry storms.",
    ),
    p(
      "Separate servers by blast radius: read-only search vs write-capable admin tools. Policy routes agents to the right server class.",
    ),
    p(
      "Measure concurrent sessions per server. MCP may hold connections open — load balancers need appropriate timeouts.",
    ),
    ol([
          "Health endpoints checking downstream connectivity",
          "Circuit breakers on failing backends",
          "Idempotent handlers for mutating tools",
          "Graceful degradation — partial tool availability"
    ]),
    h2("Security and tenancy"),
    p(
      "Multi-tenant agents require tenant context propagated to MCP servers. Row-level security in tools, not only in apps. Test cross-tenant isolation explicitly.",
    ),
    p(
      "Rotate credentials without redeploying agents — use secret broker integration. Break-glass access logged and time-bounded.",
    ),
    p(
      "Rate limit per tenant to prevent one customer from exhausting shared tool capacity.",
    ),
    note("A single MCP server holding admin credentials for all environments is a consolidation mistake — not an efficiency win."),
    h2("Reliability and SLOs"),
    p(
      "Define SLOs on tool success and latency — agents need error budgets too. Alert on error budget burn. Page owners who registered the server in the tool registry.",
    ),
    p(
      "Chaos test: disable a backend and observe agent behaviour. Fail closed or degrade gracefully — never infinite retry into outage.",
    ),
    p(
      "Version MCP manifests. Breaking schema changes should be dual-run with deprecation windows — same as REST APIs.",
    ),
    quote("An MCP server without an owner is a production incident with no runbook."),
    h2("Operating model"),
    p(
      "Register every server in the platform catalogue with owner, SLO, dependencies, and data classification. Onboarding a new tool is a ticket to the owning team — not a silent YAML edit.",
    ),
    p(
      "Run game days for high-traffic agents pulling many tools. Fan-out amplifies small MCP outages into task failures.",
    ),
    p(
      "FinOps: attribute MCP compute and downstream API cost per agent. Right-size instances after measuring real load — agents are spiky.",
    ),
    h3("When not to run MCP"),
    p(
      "If only one agent needs one REST API, a thin wrapper in-process may beat operating a server. MCP earns its ops cost at reuse and standardisation scale.",
    ),
    h2("Questions for your next review"),
    ul([
          "What would we see if we measured production MCP servers for one week in production?",
          "Which dependency or tool call owns the majority of failures or cost?",
          "What assumption in our agent design does the telemetry contradict?",
          "What is the smallest experiment that would change our operating model?"
    ]),
    p(
      "The teams that run production MCP servers reliably are not those with the best prompts. They are those that observe honestly, measure without vanity metrics, and update the control plane when traces disagree with the architecture diagram.",
    ),
    cta(
      "Need help operationalising production MCP servers?",
      "Bring your agent traces, tool inventory, and last incident. We will help you observe what matters, measure what costs, and model what to change.",
      "Start a conversation",
    ),
    p(
      "Load test MCP servers with agent-like retry patterns — not steady single-thread traffic.",
    ),
    p(
      "Publish status pages for critical MCP dependencies when customer agents rely on them.",
    ),
    p(
      "Automate manifest validation in CI — broken schemas should not reach production.",
    ),
    p(
      "Keep canary deploys for MCP servers the same as for APIs.",
    ),
    p(
      "Document maximum payload sizes — agents can generate verbose arguments.",
    ),
    p(
      "Practice credential rotation quarterly without agent downtime.",
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
      "Load test MCP servers with agent-like retry patterns — not steady single-thread traffic.",
    ),
    p(
      "Publish status pages for critical MCP dependencies when customer agents rely on them.",
    ),
    p(
      "Automate manifest validation in CI — broken schemas should not reach production.",
    ),
    p(
      "Keep canary deploys for MCP servers the same as for APIs.",
    ),
    p(
      "Document maximum payload sizes — agents can generate verbose arguments.",
    ),
    p(
      "Practice credential rotation quarterly without agent downtime.",
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
  ],
  faqs: [
    [
      "Should MCP servers be serverless or long-running?",
      "Depends on cold start tolerance and connection patterns. Many tool workloads suit always-on small services.",
    ],
    [
      "How do we auth MCP clients?",
      "OAuth, mTLS, or signed tokens — same as APIs. Avoid shared static keys.",
    ],
    [
      "What SLO for tool latency?",
      "Derive from agent task SLO — budget tool time as fraction of end-to-end deadline.",
    ],
    [
      "How many tools per server?",
      "Group by domain and blast radius — not one mega-server with admin tools and read tools mixed.",
    ],
  ],
}
