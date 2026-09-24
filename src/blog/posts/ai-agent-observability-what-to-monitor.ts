import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const aiAgentObservabilityWhatToMonitorPost: Article = {
  slug: "ai-agent-observability-what-to-monitor",
  title: "AI Agent Observability: What Should You Actually Monitor?",
  deck: "Model latency is not enough. Measure the full loop — planning quality, tool reliability, cost accumulation, policy denials, and outcome correctness.",
  category: "Engineering",
  date: "5 September 2026",
  dateIso: "2026-09-05",
  readTime: readTime(1469),
  author,
  tags: ["Observability","AI agents","Monitoring","SRE"],
  art: { label: "Engineering", cells: ["Model latency is not enough"], tone: "slate" },
  body: [
    p(
      "AI agents show up in vendor decks and architecture reviews, often sold as a capability upgrade or a model selection problem. The conversation stops at demos. Constrange treats agent observability as an engineering discipline: observe what systems actually do in your environment, measure the cost and risk of that behaviour, and model the gap between the prompt and the platform that makes it safe to run.",
    ),
    p(
      "Observe: distributed traces that span model calls, tool executions, memory operations, and human escalations. Logs alone miss causality. Metrics alone miss argument detail.",
    ),
    p(
      "Measure: task success rate verified independently, p95 end-to-end latency, cost per successful task, tool error rate by tool, loop iteration count, and escalation rate. Slice by agent version and tenant.",
    ),
    p(
      "Model: agent SLOs are outcome-based. Sub-SLOs cover model availability, tool p95 latency, and budget burn rate. Alert on burn rate anomalies, not only on 5xx from the model API.",
    ),
    h2("Why traditional dashboards fail"),
    p(
      "Microservice dashboards assume deterministic code paths. A service either returns 200 or 500. Agents return 200 with wrong answers, successful tool calls that accomplish the wrong thing, and silent loops that terminate only at budget limits.",
    ),
    p(
      "Teams paste model API dashboards into agent runbooks. Model latency is green. Customers complain. The gap is everything between tokens — tool latency, retrieval quality, planner errors, and missing termination.",
    ),
    p(
      "Constrange recommends outcome-first observability: define the business task, verify it independently, then decompose failures along the trace.",
    ),
    fig("ai-agent-observability.svg", "Observability signals across traces, tool calls, cost, latency, and outcomes", "Telemetry must span the full agent loop — not only the model API."),
    {
      t: "table",
      caption: "Signal hierarchy for agents",
      head: ["Signal","Answers"],
      rows: [
              [
                      "Outcome success",
                      "Did the business task complete correctly?"
              ],
              [
                      "Tool span errors",
                      "Which dependency failed?"
              ],
              [
                      "Iteration count",
                      "Is the agent looping?"
              ],
              [
                      "Token burn rate",
                      "Is spend accelerating?"
              ],
              [
                      "Policy denials",
                      "Is the agent probing boundaries?"
              ]
      ],
    },
    h2("The minimum viable trace"),
    p(
      "One trace per user task. Root span: task. Children: plan steps, each model call, each tool call, each memory read/write, each policy check, each human escalation. Attributes: agent id, version, tenant, model, token counts, dollar cost estimate.",
    ),
    p(
      "Hash tool arguments for search without storing secrets. Store tool response status and size, not always full payloads — unless debugging retention policy allows.",
    ),
    p(
      "Link traces to tickets and deploys. Agent regressions often correlate with tool version bumps, not model changes.",
    ),
    ol([
          "Adopt a single trace id across async continuations",
          "Propagate tenant and principal on every span",
          "Emit structured terminal reason codes",
          "Sample full payloads only on failure paths"
    ]),
    h2("Metrics that matter"),
    p(
      "Task success rate — verified, not self-reported. Tool error rate by tool name and version. Iteration histogram — bimodal distributions often mean two failure modes. Cost per successful task — finance-friendly and diagnostic when loops inflate spend.",
    ),
    p(
      "Policy denial rate trending up may mean attack, misconfiguration, or agent drift. Escalation rate and time-to-resolution measure human-in-the-loop health.",
    ),
    p(
      "Model metrics still matter — time to first token, completion latency — but as sub-SLOs, not headline health.",
    ),
    note("Alerting on model 5xx alone misses the majority of agent incidents we review. Alert on outcome SLO burn and cost anomalies."),
    h2("Semantic failures and evals"),
    p(
      "Semantic failures pass all infrastructure checks. The database updated the wrong row. The email went to the wrong customer. Detect with domain validators, sampling, and human review queues — not only HTTP status.",
    ),
    p(
      "Offline eval suites run golden tasks nightly. Online eval can shadow-test new versions on sampled traffic. Compare outcome metrics before promote.",
    ),
    p(
      "Challenge the assumption that more logs solve semantic risk. You need validators at tool boundaries and business-level assertions.",
    ),
    quote("A green agent dashboard without outcome verification is confidence theatre."),
    h2("Operational runbooks"),
    p(
      "Runbooks should map symptoms to spans: 'cost spike' → check iteration count and tool fan-out; 'slow tasks' → check tool p95, not model p95; 'wrong answers' → check retrieval freshness and eval regression.",
    ),
    p(
      "Keep a kill switch per agent — disable tool classes or entire agents without redeploying consumers. Practice using it.",
    ),
    p(
      "Post-incident reviews need trace replay, not chat exports. If replay is impossible, observability was incomplete.",
    ),
    h3("Cardinality discipline"),
    p(
      "Do not label metrics with unbounded user ids or session ids. Use aggregated dimensions — agent version, tool name, tenant tier. High-cardinality agent telemetry bankrupts the same systems microservices already stress.",
    ),
    h2("Questions for your next review"),
    ul([
          "What would we see if we measured agent observability for one week in production?",
          "Which dependency or tool call owns the majority of failures or cost?",
          "What assumption in our agent design does the telemetry contradict?",
          "What is the smallest experiment that would change our operating model?"
    ]),
    p(
      "The teams that run agent observability reliably are not those with the best prompts. They are those that observe honestly, measure without vanity metrics, and update the control plane when traces disagree with the architecture diagram.",
    ),
    cta(
      "Need help operationalising agent observability?",
      "Bring your agent traces, tool inventory, and last incident. We will help you observe what matters, measure what costs, and model what to change.",
      "Start a conversation",
    ),
    p(
      "Compare tool latency p95 to model latency p95 weekly. When tools dominate, model upgrades will not help user experience.",
    ),
    p(
      "Track 'max steps exceeded' as a product metric — it often means unclear task definitions, not model weakness.",
    ),
    p(
      "Build a weekly trace review ritual with PM and eng. Five random failed traces teach more than fifty dashboards.",
    ),
    p(
      "Expose agent health to internal status pages when agents are customer-facing.",
    ),
    p(
      "Correlate policy denials with subsequent escalations — users work around blocked agents unsafely.",
    ),
    p(
      "Store eval scores as time series alongside deploy markers for quick rollback decisions.",
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
      "Compare tool latency p95 to model latency p95 weekly. When tools dominate, model upgrades will not help user experience.",
    ),
    p(
      "Track 'max steps exceeded' as a product metric — it often means unclear task definitions, not model weakness.",
    ),
    p(
      "Build a weekly trace review ritual with PM and eng. Five random failed traces teach more than fifty dashboards.",
    ),
    p(
      "Expose agent health to internal status pages when agents are customer-facing.",
    ),
    p(
      "Correlate policy denials with subsequent escalations — users work around blocked agents unsafely.",
    ),
    p(
      "Store eval scores as time series alongside deploy markers for quick rollback decisions.",
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
      "What is different from microservice monitoring?",
      "Non-determinism, unbounded loops, and semantic failure — wrong but successful tool calls.",
    ],
    [
      "Should we log prompts?",
      "Log hashes and structured fields; redact PII. Full prompt logging creates compliance risk.",
    ],
    [
      "How do we alert on agent failures?",
      "Outcome-based SLOs, cost burn alerts, tool error spikes, and max-step limit hit rate.",
    ],
    [
      "What about eval metrics?",
      "Offline eval complements live telemetry — run both. Live metrics catch ops issues; eval catches quality drift.",
    ],
  ],
}
