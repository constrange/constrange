import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const aiAgentsExplainedLlmPromptToProductionPost: Article = {
  slug: "ai-agents-explained-llm-prompt-to-production",
  title: "AI Agents Explained: From LLM Prompt to Production System",
  deck: "A prompt is not a product. Trace the path from model output to orchestration, tools, memory, policy, and the platform that makes agents runnable in production.",
  category: "Engineering",
  date: "1 September 2026",
  dateIso: "2026-09-01",
  readTime: readTime(1488),
  author,
  tags: ["AI agents","LLM","Architecture","Production"],
  art: { label: "Engineering", cells: ["A prompt is not a product"], tone: "ink" },
  body: [
    p(
      "AI agents show up in vendor decks and architecture reviews, often sold as a capability upgrade or a model selection problem. The conversation stops at demos. Constrange treats agent architecture as an engineering discipline: observe what systems actually do in your environment, measure the cost and risk of that behaviour, and model the gap between the prompt and the platform that makes it safe to run.",
    ),
    p(
      "Observe: log every step in the agent loop — planner decisions, tool invocations, memory reads and writes, policy checks, and final outcomes. Demos show the happy path. Production shows retries, partial failures, and silent tool errors buried in nested JSON.",
    ),
    p(
      "Measure: end-to-end latency per successful task, tool call count and failure rate, token usage per outcome, and human escalation rate. Compare a bare prompt wrapper against a system with orchestration, guardrails, and observability. The delta is your platform tax — and your reliability gain.",
    ),
    p(
      "Model: an agent is a control loop — perceive context, plan actions, execute tools under policy, update state, and terminate with a verifiable outcome. The LLM is the planner, not the system. Production readiness lives in the edges: auth, idempotency, budgets, and audit.",
    ),
    h2("The prompt is the smallest part"),
    p(
      "Engineering teams receive a mandate to 'add agents'. The first artefact is a prompt — often copied from a tutorial. It works in a notebook. Someone wraps it in an API. Traffic arrives. The system hallucinates tool arguments, calls the wrong environment, loops on a failing HTTP 500, and burns token budget while users wait. The prompt was never the product. The product is the system that constrains, observes, and recovers from model behaviour.",
    ),
    p(
      "Constrange separates the demo path from the production path. In the demo path, the model is trusted, tools are mocked, and failure is edited out. In the production path, every tool call is authenticated, rate-limited, logged, and bounded by deadlines. Memory is scoped — session, user, or organisational — with retention policy. The planner may propose; policy approves.",
    ),
    p(
      "Teams that skip this layering ship a chat completion with extra steps. That is not an agent platform. It is an incident waiting for peak traffic.",
    ),
    fig("ai-agents-explained.svg", "Agent architecture from prompt through planner, tools, memory, and policy to production", "The model is one component in a system — not the system itself."),
    {
      t: "table",
      caption: "Agent stack layers",
      head: ["Layer","Production question"],
      rows: [
              [
                      "Model",
                      "Is this the right capability vs cost trade-off?"
              ],
              [
                      "Orchestration",
                      "Are loops bounded and idempotent?"
              ],
              [
                      "Tools",
                      "Are calls authenticated, scoped, and rate-limited?"
              ],
              [
                      "Policy",
                      "Who can trigger what, on which resources?"
              ],
              [
                      "Observability",
                      "Can we explain each outcome post hoc?"
              ]
      ],
    },
    h2("The agent loop in practice"),
    p(
      "A production agent loop has five recurring phases: ingest context, plan the next action, execute one or more tools, integrate results into working memory, and evaluate termination conditions. The loop sounds simple. The engineering lives in the interfaces between phases.",
    ),
    p(
      "Context ingestion is not 'dump everything into the prompt'. It is retrieval with budgets — token caps, relevance ranking, and freshness rules. Planning is not free-form prose; it is structured output validated against a schema. Tool execution is not a function pointer; it is a remote procedure call with timeouts, idempotency keys, and circuit breakers.",
    ),
    p(
      "Termination is where many systems fail. Without explicit success criteria, agents loop until max steps or max cost. Measure how often each limit fires. That metric alone tells you whether the agent understands its job.",
    ),
    ol([
          "Define success criteria before max-step limits",
          "Validate planner output against JSON schema",
          "Attach idempotency keys to mutating tool calls",
          "Record terminal reason codes for every task"
    ]),
    h2("Tools, memory, and policy"),
    p(
      "Tools are the agent's hands. Each tool multiplies capability and risk. A read-only search tool differs from a Terraform apply tool. Production systems classify tools by blast radius and require different approval paths.",
    ),
    p(
      "Memory is state — and state is liability. Session memory helps continuity. Long-term memory without governance becomes a data protection problem. Measure what gets written, who can read it, and how it is deleted. Model memory as a database with compliance requirements, not as a convenience variable.",
    ),
    p(
      "Policy sits between planner and executor. It answers: is this action allowed for this principal on this resource right now? Policy engines are unfashionable next to prompts. They are also what keeps agents from deleting production databases during a misunderstood instruction.",
    ),
    note("If policy is only in the prompt, it is advisory. Production policy must be enforceable and testable outside the model."),
    h2("From notebook to platform"),
    p(
      "The migration path is predictable. Phase one: single agent, single user, mocked tools. Phase two: real tools in a sandbox, structured traces, cost dashboards. Phase three: multi-tenant agents, per-tenant policy, human-in-the-loop for destructive actions. Phase four: continuous evaluation — regression suites that run nightly against golden tasks.",
    ),
    p(
      "Skipping phase two is common. It is also how teams discover their agent shared production credentials with a prompt injection path. There is no shortcut past observability.",
    ),
    p(
      "Platform engineering enters when multiple teams ship agents. Shared tool gateways, standard trace formats, and reusable approval workflows beat bespoke wrappers. The model layer commoditises. The control plane differentiates.",
    ),
    quote("The prompt is the hypothesis. The platform is the experiment you can run safely."),
    h2("What to instrument on day one"),
    p(
      "Instrument before you optimise the prompt. Minimum viable telemetry: trace id per task, span per model call, span per tool call with arguments hash and outcome, cumulative token and dollar cost, and terminal status with reason codes.",
    ),
    p(
      "Add eval hooks early — did the agent accomplish the stated goal, verified independently of the model's self-report? Human labels on a sample of tasks beat aggregate success rates that hide systematic errors.",
    ),
    p(
      "Dashboards should answer operator questions: What is failing right now? What is expensive right now? Which tool is the bottleneck? Which tenant is abusing the loop? If your dashboard only shows model latency, you are flying blind.",
    ),
    h3("Golden tasks and regression"),
    p(
      "Build a library of golden tasks — representative jobs with known correct outcomes. Run them on every deploy of agent code, tool manifests, or model versions. Treat agent regressions like API contract breaks. The model will drift; your tests must catch it before customers do.",
    ),
    h2("Questions for your next review"),
    ul([
          "What would we see if we measured agent architecture for one week in production?",
          "Which dependency or tool call owns the majority of failures or cost?",
          "What assumption in our agent design does the telemetry contradict?",
          "What is the smallest experiment that would change our operating model?"
    ]),
    p(
      "The teams that run agent architecture reliably are not those with the best prompts. They are those that observe honestly, measure without vanity metrics, and update the control plane when traces disagree with the architecture diagram.",
    ),
    cta(
      "Need help operationalising agent architecture?",
      "Bring your agent traces, tool inventory, and last incident. We will help you observe what matters, measure what costs, and model what to change.",
      "Start a conversation",
    ),
    p(
      "Challenge the assumption that a larger model fixes orchestration bugs. In traces we review, tool schema errors and missing timeouts cause more failures than reasoning gaps. Fix the edges first.",
    ),
    p(
      "Run a tabletop exercise: if the agent misinterprets 'clean up unused resources', what happens? If the answer is 'nothing stops it', you do not have an agent problem — you have a policy vacuum.",
    ),
    p(
      "Measure prompt size over time. Unbounded context growth is a hidden cost centre and a latency multiplier. Teams that compress context with structured summaries often cut spend twenty to forty percent without changing models.",
    ),
    p(
      "Treat agent versions like service versions. Pin model builds, tool manifests, and policy packs together. Rolling upgrade without bundle discipline creates non-reproducible behaviour — impossible to debug.",
    ),
    p(
      "The handoff from agent to human is a UX and ops problem. Escalation queues need context bundles, not raw chat logs. Measure time-to-understand for operators receiving escalations.",
    ),
    p(
      "Agents amplify existing integration debt. If your internal APIs are inconsistent, the agent will learn that inconsistency and hide it behind confident language until something expensive breaks.",
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
  ],
  faqs: [
    [
      "What is an AI agent vs a chatbot?",
      "An agent runs a loop: plan, act via tools, observe results, and repeat until a goal is met. A chatbot typically returns one model response per turn without tool execution or state management.",
    ],
    [
      "Do I need a framework to ship agents?",
      "You need the capabilities frameworks provide — orchestration, tool routing, retries, and telemetry — whether you buy, build, or assemble them.",
    ],
    [
      "What is the minimum production stack?",
      "Identity for the agent, tool gateway with policy, structured logging and traces, cost budgets, and human approval for high-blast-radius actions.",
    ],
    [
      "Why do POC agents fail in production?",
      "POCs optimise for demo completion. Production optimises for failure containment, cost predictability, and auditability — different design constraints.",
    ],
  ],
}
