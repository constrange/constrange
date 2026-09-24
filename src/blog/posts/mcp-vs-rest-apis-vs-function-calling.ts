import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const mcpVsRestApisVsFunctionCallingPost: Article = {
  slug: "mcp-vs-rest-apis-vs-function-calling",
  title: "MCP vs REST APIs vs Function Calling: A Technical Comparison",
  deck: "Three ways to give models hands — in-process function calling, HTTP APIs, and Model Context Protocol servers. Compare boundaries, ops burden, and security honestly.",
  category: "Engineering",
  date: "8 September 2026",
  dateIso: "2026-09-08",
  readTime: readTime(1459),
  author,
  tags: ["MCP","APIs","Function calling","Integration"],
  art: { label: "Engineering", cells: ["Three ways to give models hands — in-process function calling, HTTP A…"], tone: "frost" },
  body: [
    p(
      "AI agents show up in vendor decks and architecture reviews, often sold as a capability upgrade or a model selection problem. The conversation stops at demos. Constrange treats tool integration patterns as an engineering discipline: observe what systems actually do in your environment, measure the cost and risk of that behaviour, and model the gap between the prompt and the platform that makes it safe to run.",
    ),
    p(
      "Observe: how each pattern appears in your architecture — credentials per path, latency profiles, schema evolution practices, and who owns the integration when it breaks.",
    ),
    p(
      "Measure: p95 tool latency, schema breakage rate on model upgrades, engineer hours per new tool, and security review time per integration pattern.",
    ),
    p(
      "Model: choose by trust boundary and lifecycle — in-process for low-latency trusted code, REST for existing enterprise APIs, MCP for standardised tool servers with discoverability and multi-client reuse.",
    ),
    h2("The integration decision is architectural"),
    p(
      "Every agent needs tools. The debate is not which syntax the model prefers — it is where code runs, who owns credentials, and how integrations evolve when models and products change weekly.",
    ),
    p(
      "Function calling embeds tools in the application process. REST calls existing HTTP APIs. MCP exposes tools through a protocol designed for agent hosts to discover and invoke capabilities dynamically.",
    ),
    p(
      "Constrange sees teams default to whichever pattern appeared in the first blog post they read. That is not engineering. Map trust boundaries first.",
    ),
    fig("mcp-vs-rest-comparison.svg", "Comparison of function calling, REST API, and MCP server integration patterns", "Three patterns — three trust boundaries and ops models."),
    {
      t: "table",
      caption: "Pattern comparison",
      head: ["Dimension","Function calling","REST","MCP"],
      rows: [
              [
                      "Boundary",
                      "In-process",
                      "Network",
                      "Network"
              ],
              [
                      "Reuse across clients",
                      "Low",
                      "High",
                      "High"
              ],
              [
                      "Discovery",
                      "Code-defined",
                      "OpenAPI",
                      "MCP manifest"
              ],
              [
                      "Ops maturity",
                      "App release",
                      "API ops",
                      "Emerging"
              ],
              [
                      "Latency",
                      "Lowest",
                      "Network-bound",
                      "Network-bound"
              ]
      ],
    },
    h2("Function calling: speed and coupling"),
    p(
      "In-process function calling offers the lowest latency and simplest local debugging. Schema lives in code. Types are enforced by your language. Perfect for a single team's agent with a handful of trusted operations.",
    ),
    p(
      "Coupling is the cost. Every new tool ships with the agent binary. Third-party tools run in your security perimeter unless wrapped. Multi-team reuse duplicates schemas across repos.",
    ),
    p(
      "Measure when function calling stops fitting: security review per release, schema copied in three services, or need for polyglot tool implementations.",
    ),
    h2("REST: the enterprise default"),
    p(
      "Most enterprises already have REST APIs with auth, rate limits, and monitoring. Wrapping them for agents is incremental work. OpenAPI specs become tool definitions with variable quality — ambiguous enums and underspecified errors confuse models.",
    ),
    p(
      "REST shines when tools are shared beyond agents — mobile apps, partners, and agents hit the same surface. Operational maturity transfers.",
    ),
    p(
      "Weakness: discovery is manual. Each agent team writes its own tool descriptions. Drift is inevitable without a central registry.",
    ),
    ol([
          "Publish OpenAPI with agent-friendly descriptions",
          "Standardise error shapes models can parse",
          "Add idempotency keys on mutating endpoints",
          "Instrument agent traffic separately from human clients"
    ]),
    h2("MCP: protocol for tool servers"),
    p(
      "Model Context Protocol positions itself between ad-hoc wrappers and bespoke SDKs. Tools advertise capabilities via manifests. Clients connect to servers that may wrap REST, databases, or local files.",
    ),
    p(
      "MCP helps when multiple agent hosts — IDE, chat, automation — should share the same tool server. Update once, consume many. Ops looks like running small services with auth and versioning.",
    ),
    p(
      "MCP is younger. Operational playbooks, security patterns, and HA models are still forming. Treat MCP servers like any production microservice — not like config files.",
    ),
    note("MCP does not eliminate the need for policy. It standardises invocation — not authorization decisions."),
    h2("Choosing and combining"),
    p(
      "Hybrid architectures are normal: in-process router, MCP for shared tools, REST for legacy systems without MCP wrappers yet. Measure integration cost per tool and consolidate where reuse justifies protocol investment.",
    ),
    p(
      "Challenge 'MCP everywhere' mandates six months before your platform team has auth sorted. Challenge 'REST only' when five teams duplicate the same wrapper.",
    ),
    p(
      "Security: function calling inherits process compromise. Network patterns need mTLS, OAuth, scoped tokens, and egress controls. Compare attack surface honestly in architecture review.",
    ),
    quote("The best integration pattern is the one your organisation can operate safely at your scale — not the newest acronym."),
    h3("Migration path"),
    p(
      "Start REST on existing APIs. Extract high-reuse tools to MCP servers when third client appears. Keep function calling for hot-path read-only operations that cannot tolerate network hops.",
    ),
    h2("Questions for your next review"),
    ul([
          "What would we see if we measured tool integration patterns for one week in production?",
          "Which dependency or tool call owns the majority of failures or cost?",
          "What assumption in our agent design does the telemetry contradict?",
          "What is the smallest experiment that would change our operating model?"
    ]),
    p(
      "The teams that run tool integration patterns reliably are not those with the best prompts. They are those that observe honestly, measure without vanity metrics, and update the control plane when traces disagree with the architecture diagram.",
    ),
    cta(
      "Need help operationalising tool integration patterns?",
      "Bring your agent traces, tool inventory, and last incident. We will help you observe what matters, measure what costs, and model what to change.",
      "Start a conversation",
    ),
    p(
      "Benchmark tool p95 latency per pattern with production-like payloads — not hello-world calls.",
    ),
    p(
      "Track schema change frequency. High churn patterns need codegen and contract tests.",
    ),
    p(
      "Document who pages when a tool fails — agent teams often assume API teams will notice.",
    ),
    p(
      "Run security review per pattern: in-process has supply-chain risk; network has credential sprawl risk.",
    ),
    p(
      "Version tool manifests alongside agent versions for reproducible debugging.",
    ),
    p(
      "Compare developer onboarding time for adding a new tool across patterns — platform ROI lives here.",
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
      "Benchmark tool p95 latency per pattern with production-like payloads — not hello-world calls.",
    ),
    p(
      "Track schema change frequency. High churn patterns need codegen and contract tests.",
    ),
    p(
      "Document who pages when a tool fails — agent teams often assume API teams will notice.",
    ),
    p(
      "Run security review per pattern: in-process has supply-chain risk; network has credential sprawl risk.",
    ),
    p(
      "Version tool manifests alongside agent versions for reproducible debugging.",
    ),
    p(
      "Compare developer onboarding time for adding a new tool across patterns — platform ROI lives here.",
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
  ],
  faqs: [
    [
      "Is MCP replacing REST?",
      "No. MCP standardises tool discovery and session semantics for agents. REST remains the underlying transport for many backends.",
    ],
    [
      "When is function calling enough?",
      "Single-process agents with few trusted tools and no cross-team reuse requirements.",
    ],
    [
      "What does MCP add over REST wrappers?",
      "Tool manifests, capability negotiation, and client-server conventions aimed at agent hosts.",
    ],
    [
      "Biggest operational difference?",
      "MCP and REST introduce network boundaries with auth and SLOs. Function calling inherits your process security model.",
    ],
  ],
}
