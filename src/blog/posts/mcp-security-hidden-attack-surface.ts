import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const mcpSecurityHiddenAttackSurfacePost: Article = {
  slug: "mcp-security-hidden-attack-surface",
  title: "MCP Security: The Hidden Attack Surface Behind AI Tool Calling",
  deck: "Every tool is a trust boundary. MCP standardises invocation — not threat modelling. Map prompt injection, credential theft, and confused deputy paths before production.",
  category: "Engineering",
  date: "11 September 2026",
  dateIso: "2026-09-11",
  readTime: readTime(1456),
  author,
  tags: ["MCP","Security","AI agents","Threat model"],
  art: { label: "Engineering", cells: ["Every tool is a trust boundary"], tone: "wine" },
  body: [
    p(
      "AI agents show up in vendor decks and architecture reviews, often sold as a capability upgrade or a model selection problem. The conversation stops at demos. Constrange treats MCP security as an engineering discipline: observe what systems actually do in your environment, measure the cost and risk of that behaviour, and model the gap between the prompt and the platform that makes it safe to run.",
    ),
    p(
      "Observe: inventory MCP servers, their credential stores, network exposure, and which data classes each tool can read or write. Include developer laptops running local MCP with production tokens.",
    ),
    p(
      "Measure: policy denial rate, anomalous tool argument patterns, credential scope per server, and time to revoke compromised tool access. Run red-team prompt injection exercises monthly.",
    ),
    p(
      "Model: attack surface = tools × credentials × context window × users. MCP multiplies tools and clients. Security scales with policy enforcement points, not with security awareness slides.",
    ),
    h2("Tools are credentials with opinions"),
    p(
      "Security teams understand APIs. MCP arrives as 'just another integration' in agent demos. Under the hood, tools execute with whatever authority the server holds. The model chooses when and how — influenced by user text, retrieved content, and adversarial inputs.",
    ),
    p(
      "Constrange threat models start from a simple question: if an attacker controls part of the context window, what can they make the agent do? The answer is 'anything allowed tools permit'. MCP does not shrink that set.",
    ),
    p(
      "Local MCP servers on engineer laptops with production read access are a common finding in assessments. Convenience migrates to production paths without redesign.",
    ),
    fig("mcp-security-attack-surface.svg", "Attack paths from agent through MCP tools to credentials and sensitive data", "Every tool is a trust boundary — MCP standardises the wire, not the threat model."),
    {
      t: "table",
      caption: "Threat categories for MCP deployments",
      head: ["Threat","Example"],
      rows: [
              [
                      "Prompt injection",
                      "Hidden instructions in retrieved docs trigger deletes"
              ],
              [
                      "Confused deputy",
                      "Agent uses user's token beyond intent"
              ],
              [
                      "Credential exfil",
                      "Tool returns secrets into model context"
              ],
              [
                      "Tool shadowing",
                      "Malicious server registers overlapping tool names"
              ],
              [
                      "Supply chain",
                      "Compromised MCP server package"
              ]
      ],
    },
    h2("Prompt injection meets tool calling"),
    p(
      "Classic prompt injection told the model to ignore instructions. Tool-era injection tells the model to call tools — export customer data, modify infra, send messages. Retrieved documents and email bodies become attack vectors.",
    ),
    p(
      "Defence is layered: input sanitisation helps but is insufficient. Policy engines must enforce allowlists on tool + argument combinations. Sensitive tools require step-up auth or human approval regardless of model confidence.",
    ),
    p(
      "Measure injection success rate in red-team exercises. Track near-misses where policy blocked abuse. If you have no blocks, you likely have no policy.",
    ),
    h2("Credential and network hygiene"),
    p(
      "MCP servers need secrets. Vault integration, short-lived tokens, and per-tenant scoping are baseline — not stretch goals. Shared long-lived API keys across agents and humans complicate revocation.",
    ),
    p(
      "Network placement matters. MCP servers bridging internal databases should not be internet-exposed. mTLS between client and server. Egress allowlists from server to downstream APIs.",
    ),
    p(
      "Audit every tool response for sensitive fields before returning to the model context. DLP at the tool boundary beats hoping the model forgets.",
    ),
    ul([
          "Separate MCP servers per environment",
          "Rotate credentials independently per server",
          "Deny tools by default; allowlist explicitly",
          "Log argument hashes and policy decisions",
          "Run dependency scanning on MCP server images"
    ]),
    h2("Tool shadowing and supply chain"),
    p(
      "When multiple MCP servers register tools, name collisions create shadowing risks — malicious or misconfigured server wins. Central registry with canonical names and version pins reduces ambiguity.",
    ),
    p(
      "Third-party MCP packages are software supply chain. Pin versions, review code, sign images. A compromised server is full access to whatever credentials it holds.",
    ),
    p(
      "Challenge the 'install MCP from the community' pattern without the same review as npm packages with production DB access — because that is what it is.",
    ),
    quote("MCP did not invent tool risk. It industrialised it."),
    h2("Security programme integration"),
    p(
      "Include MCP servers in CMDB, vulnerability scanning, and incident response playbooks. Define kill switches for tool classes during active incidents.",
    ),
    p(
      "Security review should cover tool manifests — not only server infrastructure. A read tool that accepts arbitrary URLs is SSRF with agent branding.",
    ),
    p(
      "Train developers on confused deputy patterns when agents act on behalf of users. OAuth scopes must match least privilege for automated action.",
    ),
    h3("Red team cadence"),
    p(
      "Monthly automated injection batteries against staging agents. Quarterly human-led exercises attempting cross-tenant data access via tools. Publish results to engineering, not only security.",
    ),
    h2("Questions for your next review"),
    ul([
          "What would we see if we measured MCP security for one week in production?",
          "Which dependency or tool call owns the majority of failures or cost?",
          "What assumption in our agent design does the telemetry contradict?",
          "What is the smallest experiment that would change our operating model?"
    ]),
    p(
      "The teams that run MCP security reliably are not those with the best prompts. They are those that observe honestly, measure without vanity metrics, and update the control plane when traces disagree with the architecture diagram.",
    ),
    cta(
      "Need help operationalising MCP security?",
      "Bring your agent traces, tool inventory, and last incident. We will help you observe what matters, measure what costs, and model what to change.",
      "Start a conversation",
    ),
    p(
      "Map data flows from tool responses back into prompts — loops can re-inject secrets into retrievable memory.",
    ),
    p(
      "Require human approval for tools added to production registry — same as production API endpoints.",
    ),
    p(
      "Monitor for unusual tool sequencing — reconnaissance patterns precede exfiltration.",
    ),
    p(
      "Use separate model accounts per environment to limit cross-environment tool routing mistakes.",
    ),
    p(
      "Document MCP server owners in the registry — orphaned servers accumulate creds.",
    ),
    p(
      "Test revocation: disable a server and verify agents fail closed within minutes.",
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
      "Map data flows from tool responses back into prompts — loops can re-inject secrets into retrievable memory.",
    ),
    p(
      "Require human approval for tools added to production registry — same as production API endpoints.",
    ),
    p(
      "Monitor for unusual tool sequencing — reconnaissance patterns precede exfiltration.",
    ),
    p(
      "Use separate model accounts per environment to limit cross-environment tool routing mistakes.",
    ),
    p(
      "Document MCP server owners in the registry — orphaned servers accumulate creds.",
    ),
    p(
      "Test revocation: disable a server and verify agents fail closed within minutes.",
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
      "Is MCP less secure than REST?",
      "Neither is inherently secure. MCP adds new client-server paths that must be hardened like any API.",
    ],
    [
      "Top MCP risks?",
      "Prompt injection driving tool abuse, over-scoped tokens, local servers with prod creds, and tool shadowing.",
    ],
    [
      "How to limit blast radius?",
      "Scoped tokens, tool allowlists, human approval on mutating tools, and separate MCP servers per environment.",
    ],
    [
      "Should MCP servers run locally?",
      "Dev only with dev creds. Production tools should run as managed services with standard security controls.",
    ],
  ],
}
