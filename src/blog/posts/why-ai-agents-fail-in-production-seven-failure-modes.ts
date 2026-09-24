import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const whyAiAgentsFailInProductionSevenFailureModesPost: Article = {
  slug: "why-ai-agents-fail-in-production-seven-failure-modes",
  title: "Why AI Agents Fail in Production: 7 Failure Modes Engineers Can Measure",
  deck: "Flagship guide to the seven measurable failure modes — drift, tools, cost, loops, policy, data, and human handoff — and the metrics that catch them before customers do.",
  category: "Engineering",
  date: "24 September 2026",
  dateIso: "2026-09-24",
  readTime: readTime(1482),
  author,
  tags: ["AI agents","Reliability","Failure modes","Production"],
  art: { label: "Engineering", cells: ["Flagship guide to the seven measurable failure modes — drift, tools, …"], tone: "coral" },
  body: [
    p(
      "AI agents show up in vendor decks and architecture reviews, often sold as a capability upgrade or a model selection problem. The conversation stops at demos. Constrange treats agent failure modes as an engineering discipline: observe what systems actually do in your environment, measure the cost and risk of that behaviour, and model the gap between the prompt and the platform that makes it safe to run.",
    ),
    p(
      "Observe: classify last quarter's agent incidents into failure modes. Most teams list 'model quality' for everything. Granular taxonomy reveals which platform investments matter.",
    ),
    p(
      "Measure: rate per failure mode — drift regressions, tool errors, budget exceeded, max steps hit, policy denials, stale retrieval, escalation timeouts. Trend monthly.",
    ),
    p(
      "Model: production reliability = 1 − Σ(mode_rate × mode_impact). Prioritise modes with highest expected loss. Not all failures are model problems.",
    ),
    h2("Stop blaming the model generically"),
    p(
      "Post-mortems say 'the model hallucinated'. Engineering detail stops there. No action items land on platform, tools, or data. The same incident repeats with a different prompt tweak.",
    ),
    p(
      "Constrange catalogues seven failure modes we see repeatedly in production agent systems. Each is measurable. Each has owners beyond the ML team. This is the flagship synthesis — use it to structure reviews, roadmaps, and SLO design.",
    ),
    p(
      "Challenge the assumption that a model upgrade fixes production instability. Measure mode rates first. Upgrading a model while tool error rate dominates spend is misallocated effort.",
    ),
    fig("ai-agent-failure-modes.svg", "Seven failure modes for production AI agents including drift, tools, cost, and policy", "Name the failure mode — then measure it."),
    {
      t: "table",
      caption: "Seven failure modes at a glance",
      head: ["Mode","Leading metric"],
      rows: [
              [
                      "Model and prompt drift",
                      "Eval score delta"
              ],
              [
                      "Tool and integration",
                      "Tool error rate"
              ],
              [
                      "Cost and loop runaway",
                      "Budget cap hit rate"
              ],
              [
                      "Policy and safety",
                      "Denial and bypass attempts"
              ],
              [
                      "Data and retrieval",
                      "Stale context rate"
              ],
              [
                      "Orchestration bugs",
                      "Max steps exceeded"
              ],
              [
                      "Human handoff",
                      "Escalation SLA miss"
              ]
      ],
    },
    h2("Mode 1: Model and prompt drift"),
    p(
      "Models change behaviour with version bumps, temperature defaults, and silent vendor updates. Prompts rot as product context shifts. Drift manifests as gradual eval score decline — not sudden outage.",
    ),
    p(
      "Measure: nightly golden task suite, outcome scoring, comparison across model versions in shadow. Roll back on regression thresholds.",
    ),
    p(
      "Pin versions and bundle prompts with deploy artefacts. 'Latest' is not a production strategy.",
    ),
    h2("Mode 2: Tool and integration failure"),
    p(
      "Timeouts, schema mismatches, auth expiry, and downstream 500s are the workhorses of agent incidents. The model did its job — the tool did not.",
    ),
    p(
      "Measure: tool error rate by name and version, p95 latency, retry counts. SLO tools independently from models.",
    ),
    p(
      "Circuit breakers and cached fallbacks reduce user impact. Fix the tool path before fine-tuning reasoning.",
    ),
    h3("Mode 3: Cost and loop runaway"),
    p(
      "Agents loop until success or cap. Misconfigured termination, ambiguous goals, or failing tools cause runaway spend. Measure tasks hitting max steps or budget caps — rate trending up is an early warning. Alert on dollar burn rate anomalies per tenant.",
    ),
    h2("Mode 4: Policy and safety gaps"),
    p(
      "Policy failures are both false negatives — harmful actions execute — and false positives — work stalls. Measure denials, overrides, and bypass attempts via prompt injection red teams.",
    ),
    p(
      "High override rate signals bad policy design or bad agent prompts fighting the policy layer.",
    ),
    p(
      "Safety is not static. Re-run threat models when new tools join the registry.",
    ),
    h2("Mode 5: Data and retrieval failure"),
    p(
      "Stale indexes, wrong tenant data, missing documents, and embedding drift produce confident wrong answers. Measure retrieval freshness, hit rate, and post-hoc relevance labels on samples.",
    ),
    p(
      "Separate retrieval SLO from generation SLO. Many 'model bugs' are search bugs.",
    ),
    p(
      "Re-embed and re-index on schedule. Version corpora alongside agents.",
    ),
    h2("Modes 6 and 7: Orchestration and human handoff"),
    p(
      "Orchestration bugs — wrong state transitions, lost messages, race conditions in async agents — show as intermittent failures hard to reproduce. Trace every state transition. Property-test workflows.",
    ),
    p(
      "Human handoff failures: escalations without context, SLA misses, operators overriding agents unsafely. Measure time-to-first-human-action and rework rate after handoff.",
    ),
    p(
      "Agents do not remove humans — they move the interface. Design that interface with the same rigour as the API.",
    ),
    quote("If you cannot name the failure mode, you cannot measure it — and you will fund the wrong fix."),
    h2("Building the failure mode dashboard"),
    p(
      "One page: rate per mode, week over week, top agents contributing, linked exemplar traces. Review in weekly ops meeting alongside traditional service health.",
    ),
    p(
      "Set mode-specific initiatives: tool reliability programme, eval pipeline, policy hardening, retrieval freshness monitors.",
    ),
    p(
      "Executive summary: expected annual loss per mode — connects engineering work to risk language leadership understands.",
    ),
    ol([
          "Tag incidents with failure mode in ticketing",
          "Publish monthly mode rate report",
          "Fund top two modes by expected loss",
          "Re-run taxonomy quarterly as architecture evolves"
    ]),
    h2("Questions for your next review"),
    ul([
          "What would we see if we measured agent failure modes for one week in production?",
          "Which dependency or tool call owns the majority of failures or cost?",
          "What assumption in our agent design does the telemetry contradict?",
          "What is the smallest experiment that would change our operating model?"
    ]),
    p(
      "The teams that run agent failure modes reliably are not those with the best prompts. They are those that observe honestly, measure without vanity metrics, and update the control plane when traces disagree with the architecture diagram.",
    ),
    cta(
      "Need help operationalising agent failure modes?",
      "Bring your agent traces, tool inventory, and last incident. We will help you observe what matters, measure what costs, and model what to change.",
      "Start a conversation",
    ),
    p(
      "Combine mode rates with customer impact scores — not all tool errors affect users equally.",
    ),
    p(
      "Run pre-mortems before launch using the seven modes as checklist.",
    ),
    p(
      "Train support to capture failure mode hints from user reports — speeds triage.",
    ),
    p(
      "Compare mode rates across tenants — isolation bugs show as single-tenant spikes.",
    ),
    p(
      "Archive exemplar traces per mode for onboarding new engineers.",
    ),
    p(
      "When mode rates drop, document what changed — build institutional memory.",
    ),
    p(
      "Avoid mode sprawl — subcategories come after the top seven are routinely measured.",
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
      "Combine mode rates with customer impact scores — not all tool errors affect users equally.",
    ),
    p(
      "Run pre-mortems before launch using the seven modes as checklist.",
    ),
    p(
      "Train support to capture failure mode hints from user reports — speeds triage.",
    ),
    p(
      "Compare mode rates across tenants — isolation bugs show as single-tenant spikes.",
    ),
    p(
      "Archive exemplar traces per mode for onboarding new engineers.",
    ),
    p(
      "When mode rates drop, document what changed — build institutional memory.",
    ),
    p(
      "Avoid mode sprawl — subcategories come after the top seven are routinely measured.",
    ),
    p(
      "Production agent systems fail in boring ways long before they fail in interesting ones. Timeouts, stale credentials, ambiguous tool schemas, and missing idempotency keys dominate incident logs. Measure those first. The model is rarely the first place to spend another sprint — the integration edge is.",
    ),
    p(
      "Platform maturity shows up in how teams talk about agents in incident review. Immature teams debate prompts. Mature teams read traces, attribute cost, and ask which policy gate should have fired. Build the habits and tooling that make the second conversation inevitable.",
    ),
  ],
  faqs: [
    [
      "What is the most common failure mode?",
      "Tool and integration failures often dominate — not raw model inaccuracy.",
    ],
    [
      "How do we detect drift?",
      "Golden task evals on every deploy; compare outcome scores week over week.",
    ],
    [
      "Can we eliminate loops?",
      "Not entirely — cap iterations, cost, and time; alert on limit hit rate.",
    ],
    [
      "Where do humans fit?",
      "Handoff failures are a mode — measure escalation latency and rework rate.",
    ],
  ],
}
