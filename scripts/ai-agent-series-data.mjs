/** Post content data for generate-ai-agent-series.mjs */

export const SERIES_DATES = [
  "2026-09-01",
  "2026-09-02",
  "2026-09-04",
  "2026-09-05",
  "2026-09-07",
  "2026-09-08",
  "2026-09-11",
  "2026-09-13",
  "2026-09-14",
  "2026-09-24",
]

export const POSTS = [
  {
    slug: "ai-agents-explained-llm-prompt-to-production",
    title: "AI Agents Explained: From LLM Prompt to Production System",
    deck:
      "A prompt is not a product. Trace the path from model output to orchestration, tools, memory, policy, and the platform that makes agents runnable in production.",
    figure: "ai-agents-explained.svg",
    tone: "ink",
    tags: ["AI agents", "LLM", "Architecture", "Production"],
    topic: "agent architecture",
    observe:
      "Observe: log every step in the agent loop — planner decisions, tool invocations, memory reads and writes, policy checks, and final outcomes. Demos show the happy path. Production shows retries, partial failures, and silent tool errors buried in nested JSON.",
    measure:
      "Measure: end-to-end latency per successful task, tool call count and failure rate, token usage per outcome, and human escalation rate. Compare a bare prompt wrapper against a system with orchestration, guardrails, and observability. The delta is your platform tax — and your reliability gain.",
    model:
      "Model: an agent is a control loop — perceive context, plan actions, execute tools under policy, update state, and terminate with a verifiable outcome. The LLM is the planner, not the system. Production readiness lives in the edges: auth, idempotency, budgets, and audit.",
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
    figAlt: "Agent architecture from prompt through planner, tools, memory, and policy to production",
    figCap: "The model is one component in a system — not the system itself.",
    table: {
      caption: "Agent stack layers",
      head: ["Layer", "Production question"],
      rows: [
        ["Model", "Is this the right capability vs cost trade-off?"],
        ["Orchestration", "Are loops bounded and idempotent?"],
        ["Tools", "Are calls authenticated, scoped, and rate-limited?"],
        ["Policy", "Who can trigger what, on which resources?"],
        ["Observability", "Can we explain each outcome post hoc?"],
      ],
    },
    sections: [
      {
        h2: "The prompt is the smallest part",
        paras: [
          "Engineering teams receive a mandate to 'add agents'. The first artefact is a prompt — often copied from a tutorial. It works in a notebook. Someone wraps it in an API. Traffic arrives. The system hallucinates tool arguments, calls the wrong environment, loops on a failing HTTP 500, and burns token budget while users wait. The prompt was never the product. The product is the system that constrains, observes, and recovers from model behaviour.",
          "Constrange separates the demo path from the production path. In the demo path, the model is trusted, tools are mocked, and failure is edited out. In the production path, every tool call is authenticated, rate-limited, logged, and bounded by deadlines. Memory is scoped — session, user, or organisational — with retention policy. The planner may propose; policy approves.",
          "Teams that skip this layering ship a chat completion with extra steps. That is not an agent platform. It is an incident waiting for peak traffic.",
        ],
      },
      {
        h2: "The agent loop in practice",
        paras: [
          "A production agent loop has five recurring phases: ingest context, plan the next action, execute one or more tools, integrate results into working memory, and evaluate termination conditions. The loop sounds simple. The engineering lives in the interfaces between phases.",
          "Context ingestion is not 'dump everything into the prompt'. It is retrieval with budgets — token caps, relevance ranking, and freshness rules. Planning is not free-form prose; it is structured output validated against a schema. Tool execution is not a function pointer; it is a remote procedure call with timeouts, idempotency keys, and circuit breakers.",
          "Termination is where many systems fail. Without explicit success criteria, agents loop until max steps or max cost. Measure how often each limit fires. That metric alone tells you whether the agent understands its job.",
        ],
        ol: [
          "Define success criteria before max-step limits",
          "Validate planner output against JSON schema",
          "Attach idempotency keys to mutating tool calls",
          "Record terminal reason codes for every task",
        ],
      },
      {
        h2: "Tools, memory, and policy",
        paras: [
          "Tools are the agent's hands. Each tool multiplies capability and risk. A read-only search tool differs from a Terraform apply tool. Production systems classify tools by blast radius and require different approval paths.",
          "Memory is state — and state is liability. Session memory helps continuity. Long-term memory without governance becomes a data protection problem. Measure what gets written, who can read it, and how it is deleted. Model memory as a database with compliance requirements, not as a convenience variable.",
          "Policy sits between planner and executor. It answers: is this action allowed for this principal on this resource right now? Policy engines are unfashionable next to prompts. They are also what keeps agents from deleting production databases during a misunderstood instruction.",
        ],
        note:
          "If policy is only in the prompt, it is advisory. Production policy must be enforceable and testable outside the model.",
      },
      {
        h2: "From notebook to platform",
        paras: [
          "The migration path is predictable. Phase one: single agent, single user, mocked tools. Phase two: real tools in a sandbox, structured traces, cost dashboards. Phase three: multi-tenant agents, per-tenant policy, human-in-the-loop for destructive actions. Phase four: continuous evaluation — regression suites that run nightly against golden tasks.",
          "Skipping phase two is common. It is also how teams discover their agent shared production credentials with a prompt injection path. There is no shortcut past observability.",
          "Platform engineering enters when multiple teams ship agents. Shared tool gateways, standard trace formats, and reusable approval workflows beat bespoke wrappers. The model layer commoditises. The control plane differentiates.",
        ],
        quote: "The prompt is the hypothesis. The platform is the experiment you can run safely.",
      },
      {
        h2: "What to instrument on day one",
        paras: [
          "Instrument before you optimise the prompt. Minimum viable telemetry: trace id per task, span per model call, span per tool call with arguments hash and outcome, cumulative token and dollar cost, and terminal status with reason codes.",
          "Add eval hooks early — did the agent accomplish the stated goal, verified independently of the model's self-report? Human labels on a sample of tasks beat aggregate success rates that hide systematic errors.",
          "Dashboards should answer operator questions: What is failing right now? What is expensive right now? Which tool is the bottleneck? Which tenant is abusing the loop? If your dashboard only shows model latency, you are flying blind.",
        ],
        h3: "Golden tasks and regression",
        p3:
          "Build a library of golden tasks — representative jobs with known correct outcomes. Run them on every deploy of agent code, tool manifests, or model versions. Treat agent regressions like API contract breaks. The model will drift; your tests must catch it before customers do.",
      },
    ],
    fillers: [
      "Challenge the assumption that a larger model fixes orchestration bugs. In traces we review, tool schema errors and missing timeouts cause more failures than reasoning gaps. Fix the edges first.",
      "Run a tabletop exercise: if the agent misinterprets 'clean up unused resources', what happens? If the answer is 'nothing stops it', you do not have an agent problem — you have a policy vacuum.",
      "Measure prompt size over time. Unbounded context growth is a hidden cost centre and a latency multiplier. Teams that compress context with structured summaries often cut spend twenty to forty percent without changing models.",
      "Treat agent versions like service versions. Pin model builds, tool manifests, and policy packs together. Rolling upgrade without bundle discipline creates non-reproducible behaviour — impossible to debug.",
      "The handoff from agent to human is a UX and ops problem. Escalation queues need context bundles, not raw chat logs. Measure time-to-understand for operators receiving escalations.",
      "Agents amplify existing integration debt. If your internal APIs are inconsistent, the agent will learn that inconsistency and hide it behind confident language until something expensive breaks.",
    ],
  },
  {
    slug: "can-ai-safely-change-production-infrastructure-terraform",
    title: "Can AI Safely Change Production Infrastructure? A Terraform Experiment",
    deck:
      "We measured what happens when an agent proposes Terraform changes: plan quality, blast radius, approval latency, and the gap between confident diffs and safe applies.",
    figure: "ai-terraform-experiment.svg",
    tone: "pine",
    tags: ["Terraform", "AI agents", "Infrastructure", "Safety"],
    topic: "AI-driven infrastructure changes",
    observe:
      "Observe: capture every agent-proposed Terraform plan — resource types touched, environment, whether destroy operations appear, and if state locks contend. Compare agent plans to human plans on the same tasks.",
    measure:
      "Measure: plan rejection rate, time from proposal to approved apply, rollback frequency, and incidents attributed to agent-initiated changes. Track near-misses — plans that would have succeeded technically but violated policy.",
    model:
      "Model: infrastructure change safety = plan correctness × policy enforcement × human review bandwidth. AI increases plan throughput faster than review capacity. Without automation on policy checks, safety degrades.",
    faqs: [
      [
        "Should AI apply Terraform directly?",
        "Not without plan review, policy gates, and sandbox validation. Auto-apply is viable only for low-blast-radius, well-tested modules.",
      ],
      [
        "What policies matter most?",
        "Deny destroy on production, require tags, block public exposure, limit provider scope, and enforce module allowlists.",
      ],
      [
        "How do we test agent-generated plans?",
        "Run terraform plan in CI, OPA/Sentinel checks, cost estimation, and drift detection before any human approval.",
      ],
      [
        "What failed in real experiments?",
        "Subtle variable mistakes, wrong workspace selection, and confident language that discouraged scrutiny of risky destroys.",
      ],
    ],
    figAlt: "AI agent proposing Terraform changes through plan, approval, and apply stages",
    figCap: "AI can draft plans. Policy and humans must own production applies.",
    table: {
      caption: "Terraform agent experiment results (illustrative)",
      head: ["Metric", "Human baseline", "Agent-assisted"],
      rows: [
        ["Plan generation time", "45 min", "4 min"],
        ["Policy violations caught pre-apply", "92%", "61% without gates"],
        ["Rollback within 24h", "2%", "8% without sandbox"],
        ["Reviewer attention per plan", "High", "Lower — automation bias"],
      ],
    },
    sections: [
      {
        h2: "Why infrastructure tempts agents",
        paras: [
          "Infrastructure-as-code looks like the perfect agent domain. APIs are structured. State is declarative. Plans are diffs. Terraform even has a plan-and-apply ritual that maps cleanly to human review. The temptation is to let the agent close the loop: read ticket, edit HCL, open PR, merge, apply.",
          "Constrange ran structured experiments with agent-assisted Terraform across sandbox and staging environments before touching production policy. The headline: agents accelerate draft quality on boilerplate but increase risk on judgement calls — security groups, IAM bindings, and destructive replaces.",
          "The experiment was not about whether AI can write HCL. It can. The question is whether your organisation can absorb the throughput without missing the one plan that opens port 22 to the world.",
        ],
      },
      {
        h2: "Experimental setup",
        paras: [
          "We gave agents read access to module catalogues, variable schemas, and architecture diagrams. Tools: terraform plan, cost estimation, policy check, and PR creation. No auto-apply. Human reviewers blind-scored plans for correctness, least privilege, and operational fit.",
          "Tasks ranged from 'add a tag' to 'introduce a new regional failover module'. Simple tasks scored well. Complex tasks showed compounding errors — wrong data source, correct syntax, wrong environment workspace.",
          "Measure reviewer time. It dropped for simple tasks and rose for complex ones because reviewers spent longer disproving confident agent explanations.",
        ],
        ol: [
          "Agent drafts change in isolated git branch",
          "CI runs fmt, validate, plan, policy, cost",
          "Human reviews diff and policy output",
          "Approved applies run through standard pipeline",
          "Post-apply smoke tests and drift check",
        ],
      },
      {
        h2: "Where agents fail silently",
        paras: [
          "Silent failures are worse than plan errors. An agent selects the staging workspace but names production resources. Plan output looks reasonable. Policy may not catch naming conventions. Reviewers skim because the agent summary sounds authoritative.",
          "Destroy operations are the sharp edge. Agents reconcile drift aggressively. A '-/+' replace on a stateful resource is sometimes correct and sometimes catastrophic. Measure how often agents propose destroy on resources with prevent_destroy in human-written modules — and how often they route around safeguards.",
          "IAM changes are subtle. Extra read permission on a bucket seems low risk until combined with another role assumption path. Graph effective permissions, do not review JSON in isolation.",
        ],
        note:
          "Automation bias is real: reviewers approve faster when an agent generated the plan. Track approval time and override rate as leading indicators.",
      },
      {
        h2: "Policy gates that actually help",
        paras: [
          "OPA, Sentinel, or terraform-cloud policy sets are not bureaucracy — they are the speed bump that lets you trust throughput. Deny destroy on production. Require encryption flags. Block 0.0.0.0/0 ingress. Enforce module sources from internal registry only.",
          "Sandbox applies with synthetic traffic catch integration mistakes. Cost estimation catches oversized instance types. Neither replaces human judgement on architecture fit.",
          "The winning pattern: agent proposes, machines check, humans judge architecture. Auto-apply only inside narrow guardrails — tags, non-production scaling, documented runbooks.",
        ],
        quote: "An agent that applies Terraform without policy is just a faster way to learn about backups.",
      },
      {
        h2: "Production recommendations",
        paras: [
          "Start with read-only agents: drift explanation, documentation, and plan suggestions without merge rights. Phase two: PR creation with mandatory CI policy. Phase three: auto-merge for allowlisted module bumps with passing tests.",
          "Never optimise for 'plans per hour'. Optimise for 'safe outcomes per week' and mean time to recovery when something slips. Measure rollbacks and near-misses, not velocity vanity metrics.",
          "Challenge the assumption that infra agents save headcount. They shift work from typing HCL to designing policy, modules, and review workflows. That is platform engineering, not magic.",
        ],
        h3: "The human latency layer returns",
        p3:
          "If approval queues grow while agent throughput rises, you have recreated the ticketing system with extra steps. Either widen auto-approve boundaries with better policy or add reviewer capacity. Ignoring the queue creates rubber-stamping — worse than no agent.",
      },
    ],
    fillers: [
      "Log every agent-suggested variable value alongside human edits. The delta trains better guardrails and shows where schemas confuse models.",
      "Run game days: inject ambiguous tickets and measure whether agents ask clarifying questions or guess. Guessing is a production incident.",
      "Compare agent plans to historical human changes on similar resources. Divergence is not wrong — but it must be explainable.",
      "Treat workspace selection as a first-class policy input. Wrong workspace is the most common high-severity mistake in our experiment logs.",
      "Require destroy plans to include rollback steps in the PR description — agent-generated or not.",
      "Measure state lock duration during agent retries. Thrashing locks block human pipelines too.",
    ],
  },
  {
    slug: "platform-engineering-for-ai-agents-control-plane",
    title: "Platform Engineering for AI Agents: Designing the Control Plane",
    deck:
      "Agents need a control plane — identity, policy, budgets, tool registry, and audit — the same way Kubernetes needed more than containers.",
    figure: "ai-agent-control-plane-platform.svg",
    tone: "plum",
    tags: ["Platform engineering", "AI agents", "Control plane", "Governance"],
    topic: "agent control planes",
    observe:
      "Observe: inventory every agent deployment, its tool entitlements, credential paths, and spend. Shadow agents — built in notebooks with production keys — are more common than platform teams admit.",
    measure:
      "Measure: cost per agent per outcome, policy denial rate, tool error rate by registry entry, and time to onboard a new agent safely. Platform success is median time-to-production with guardrails, not number of demos.",
    model:
      "Model: the control plane is the product. Agents are workloads. Tool gateways are APIs. Policy is admission control. Observability is the feedback loop. Without a plane, every team rebuilds the same brittle scaffolding.",
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
    figAlt: "Control plane components governing agent runtime identity, policy, budget, and audit",
    figCap: "The control plane is what makes agents a platform workload — not a side project.",
    table: {
      caption: "Control plane capabilities",
      head: ["Capability", "Without it"],
      rows: [
        ["Tool registry", "Ad-hoc credentials per agent"],
        ["Policy engine", "Prompt-only guardrails"],
        ["Budget caps", "Surprise invoices"],
        ["Trace store", "Post-mortems without evidence"],
        ["Approval workflows", "Destructive actions in autopilot"],
      ],
    },
    sections: [
      {
        h2: "Agents are workloads, not prompts",
        paras: [
          "Platform teams have seen this movie. Developers containerised apps before Kubernetes existed. Each team built bespoke deploy scripts, secret handling, and monitoring. Kubernetes did not invent containers — it standardised how workloads run, connect, and are governed.",
          "AI agents are entering the same phase. Each product team wraps an SDK, embeds API keys, and ships. Security discovers production credentials in a laptop repo. Finance sees uncapped token bills. Incidents lack traces. The answer is not 'ban agents'. It is build the control plane.",
          "Constrange defines the agent control plane as the layer that answers: who is this agent, what may it touch, how much may it spend, and what did it do — with evidence.",
        ],
      },
      {
        h2: "Core components",
        paras: [
          "Identity: agents run as principals, not shared service accounts. Federation to human initiators matters for audit. Policy: admission checks before tool execution, not after damage. Tool registry: versioned manifests with schemas, owners, and blast-radius class.",
          "Budgets: per-agent, per-tenant, per-task ceilings on tokens, tool calls, and wall-clock time. Audit: immutable logs of plans, tool args hashes, outcomes, and policy decisions.",
          "Approval workflows: integrate with existing change management for high-risk tools. Do not create a parallel Slack-based shadow process.",
        ],
        ul: [
          "Tool registry with schema validation and ownership metadata",
          "Policy engine outside the model — testable, versioned",
          "Secrets broker — no long-lived keys in agent configs",
          "Standard trace format across teams",
          "Cost allocation labels per business unit",
        ],
      },
      {
        h2: "Platform golden paths",
        paras: [
          "Golden paths reduce cognitive load. A team should scaffold a new agent with tracing, policy hooks, and budget defaults in one command — the same way they create a service from a template with CI and observability baked in.",
          "The anti-pattern is documentation that says 'call security for credentials'. Developers will skip it. Measure golden path adoption vs shadow agents. Shadow count is your platform debt metric.",
          "Version the golden path. Agent SDKs, tool protocols, and model APIs change monthly. Unversioned templates drift into unsupported patterns.",
        ],
        note:
          "If your platform team cannot ship agent templates faster than product teams ship shadow agents, the platform has already lost the adoption fight.",
      },
      {
        h2: "FinOps and reliability together",
        paras: [
          "FinOps often enters agent conversations after the first invoice shock. Reliability enters after the first incident. The control plane connects them: budget throttles are reliability valves — they stop runaway loops before they become outages or bankruptcy.",
          "Measure unit economics: cost per resolved support ticket, per automated remediation, per code review assist. Some agents are not worth running at scale once measured honestly.",
          "Challenge headcount replacement narratives. Platform engineering for agents creates new work — policy curation, tool lifecycle, eval suites. Account for that in roadmaps.",
        ],
        quote: "You do not have an agent strategy. You have a control plane strategy or a collection of risks.",
      },
      {
        h2: "Rollout playbook",
        paras: [
          "Quarter one: inventory and freeze on new production credentials outside the broker. Quarter two: mandatory tool registry and tracing for all new agents. Quarter three: policy-as-code for top ten tools by spend. Quarter four: continuous eval and automated regression on golden tasks.",
          "Do not wait for perfect coverage. Measure shadow agent count monthly and drive it down with better paths, not edicts.",
          "Executive dashboards: spend by agent, incident count by agent, policy denials trending up (good early, bad if sustained without fixes).",
        ],
        h3: "When to centralise vs federate",
        p3:
          "Centralise policy and observability standards. Federate tool implementations to domain teams who own the underlying systems. The control plane is the contract surface — not the entire tool graph.",
      },
    ],
    fillers: [
      "Run a credential census. Count API keys with agent-related names in vaults and git history. The number starts uncomfortable conversations that matter.",
      "Platform teams should publish SLOs for the control plane — trace ingestion lag, policy evaluation latency, registry availability.",
      "Treat tool deprecation like API deprecation: sunset dates, migration guides, and enforcement via policy.",
      "Multi-region agents need data residency rules in policy, not in prompts.",
      "Integrate agent audit logs with existing SIEM. Security teams will not open a second portal.",
      "Measure developer satisfaction with the golden path quarterly. Low scores predict shadow agents.",
    ],
  },
  {
    slug: "ai-agent-observability-what-to-monitor",
    title: "AI Agent Observability: What Should You Actually Monitor?",
    deck:
      "Model latency is not enough. Measure the full loop — planning quality, tool reliability, cost accumulation, policy denials, and outcome correctness.",
    figure: "ai-agent-observability.svg",
    tone: "slate",
    tags: ["Observability", "AI agents", "Monitoring", "SRE"],
    topic: "agent observability",
    observe:
      "Observe: distributed traces that span model calls, tool executions, memory operations, and human escalations. Logs alone miss causality. Metrics alone miss argument detail.",
    measure:
      "Measure: task success rate verified independently, p95 end-to-end latency, cost per successful task, tool error rate by tool, loop iteration count, and escalation rate. Slice by agent version and tenant.",
    model:
      "Model: agent SLOs are outcome-based. Sub-SLOs cover model availability, tool p95 latency, and budget burn rate. Alert on burn rate anomalies, not only on 5xx from the model API.",
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
    figAlt: "Observability signals across traces, tool calls, cost, latency, and outcomes",
    figCap: "Telemetry must span the full agent loop — not only the model API.",
    table: {
      caption: "Signal hierarchy for agents",
      head: ["Signal", "Answers"],
      rows: [
        ["Outcome success", "Did the business task complete correctly?"],
        ["Tool span errors", "Which dependency failed?"],
        ["Iteration count", "Is the agent looping?"],
        ["Token burn rate", "Is spend accelerating?"],
        ["Policy denials", "Is the agent probing boundaries?"],
      ],
    },
    sections: [
      {
        h2: "Why traditional dashboards fail",
        paras: [
          "Microservice dashboards assume deterministic code paths. A service either returns 200 or 500. Agents return 200 with wrong answers, successful tool calls that accomplish the wrong thing, and silent loops that terminate only at budget limits.",
          "Teams paste model API dashboards into agent runbooks. Model latency is green. Customers complain. The gap is everything between tokens — tool latency, retrieval quality, planner errors, and missing termination.",
          "Constrange recommends outcome-first observability: define the business task, verify it independently, then decompose failures along the trace.",
        ],
      },
      {
        h2: "The minimum viable trace",
        paras: [
          "One trace per user task. Root span: task. Children: plan steps, each model call, each tool call, each memory read/write, each policy check, each human escalation. Attributes: agent id, version, tenant, model, token counts, dollar cost estimate.",
          "Hash tool arguments for search without storing secrets. Store tool response status and size, not always full payloads — unless debugging retention policy allows.",
          "Link traces to tickets and deploys. Agent regressions often correlate with tool version bumps, not model changes.",
        ],
        ol: [
          "Adopt a single trace id across async continuations",
          "Propagate tenant and principal on every span",
          "Emit structured terminal reason codes",
          "Sample full payloads only on failure paths",
        ],
      },
      {
        h2: "Metrics that matter",
        paras: [
          "Task success rate — verified, not self-reported. Tool error rate by tool name and version. Iteration histogram — bimodal distributions often mean two failure modes. Cost per successful task — finance-friendly and diagnostic when loops inflate spend.",
          "Policy denial rate trending up may mean attack, misconfiguration, or agent drift. Escalation rate and time-to-resolution measure human-in-the-loop health.",
          "Model metrics still matter — time to first token, completion latency — but as sub-SLOs, not headline health.",
        ],
        note:
          "Alerting on model 5xx alone misses the majority of agent incidents we review. Alert on outcome SLO burn and cost anomalies.",
      },
      {
        h2: "Semantic failures and evals",
        paras: [
          "Semantic failures pass all infrastructure checks. The database updated the wrong row. The email went to the wrong customer. Detect with domain validators, sampling, and human review queues — not only HTTP status.",
          "Offline eval suites run golden tasks nightly. Online eval can shadow-test new versions on sampled traffic. Compare outcome metrics before promote.",
          "Challenge the assumption that more logs solve semantic risk. You need validators at tool boundaries and business-level assertions.",
        ],
        quote: "A green agent dashboard without outcome verification is confidence theatre.",
      },
      {
        h2: "Operational runbooks",
        paras: [
          "Runbooks should map symptoms to spans: 'cost spike' → check iteration count and tool fan-out; 'slow tasks' → check tool p95, not model p95; 'wrong answers' → check retrieval freshness and eval regression.",
          "Keep a kill switch per agent — disable tool classes or entire agents without redeploying consumers. Practice using it.",
          "Post-incident reviews need trace replay, not chat exports. If replay is impossible, observability was incomplete.",
        ],
        h3: "Cardinality discipline",
        p3:
          "Do not label metrics with unbounded user ids or session ids. Use aggregated dimensions — agent version, tool name, tenant tier. High-cardinality agent telemetry bankrupts the same systems microservices already stress.",
      },
    ],
    fillers: [
      "Compare tool latency p95 to model latency p95 weekly. When tools dominate, model upgrades will not help user experience.",
      "Track 'max steps exceeded' as a product metric — it often means unclear task definitions, not model weakness.",
      "Build a weekly trace review ritual with PM and eng. Five random failed traces teach more than fifty dashboards.",
      "Expose agent health to internal status pages when agents are customer-facing.",
      "Correlate policy denials with subsequent escalations — users work around blocked agents unsafely.",
      "Store eval scores as time series alongside deploy markers for quick rollback decisions.",
    ],
  },
  {
    slug: "what-does-an-ai-agent-really-cost-production",
    title: "What Does an AI Agent Really Cost? The True Cost of Running AI in Production",
    deck:
      "Token pricing is the visible line item. Production cost includes tools, retries, human review, observability, and the incidents agents prevent — or cause.",
    figure: "ai-agent-production-cost.svg",
    tone: "amber",
    tags: ["FinOps", "AI agents", "Cost", "Production"],
    topic: "agent economics",
    observe:
      "Observe: attribute spend across model APIs, tool infrastructure, vector stores, egress, and operator time reviewing escalations. Unattributed 'AI' lines on invoices hide tool-heavy agents.",
    measure:
      "Measure: fully loaded cost per successful business outcome — not per request. Include retry multipliers, idle warm capacity, and platform team hours amortised per agent.",
    model:
      "Model: total cost = Σ(model tokens × price) + Σ(tool compute) + Σ(human minutes × rate) + platform overhead + incident cost amortised. Compare to alternative — usually human labour or simpler automation.",
    faqs: [
      [
        "Why is our token bill lower than total AI cost?",
        "Tools, databases, search, and human review often exceed model charges for agentic workloads.",
      ],
      [
        "How do we budget agents?",
        "Set per-task and per-tenant ceilings; alert on burn rate; require business case with measured unit economics.",
      ],
      [
        "When is an agent not worth it?",
        "When unit cost exceeds alternative minus risk — and when error cost is high relative to savings.",
      ],
      [
        "Do smaller models always save money?",
        "Only if they maintain outcome success; otherwise retries and escalations erase savings.",
      ],
    ],
    figAlt: "Production cost components beyond tokens including tools, retries, human review, and ops",
    figCap: "Token cost is the visible tip — system and people costs dominate many agent workloads.",
    table: {
      caption: "Cost components often missed",
      head: ["Component", "Typical share"],
      rows: [
        ["Model tokens", "20–40% for tool-heavy agents"],
        ["Tool compute and APIs", "30–50%"],
        ["Human review", "10–30% when risk is high"],
        ["Observability and storage", "5–15%"],
        ["Incident and rework", "Spiky — dominates when wrong"],
      ],
    },
    sections: [
      {
        h2: "The invoice tells half the story",
        paras: [
          "Finance receives a OpenAI or Anthropic line item and asks engineering to 'optimise AI spend'. Engineering tunes model selection. Next month the bill shifts slightly. Total cost of ownership barely moves because the agent fans out to search clusters, serverless functions, data warehouses, and on-call humans.",
          "Constrange decomposes agent invoices like microservice bills: follow the dependency graph. A support agent that searches ten million documents on every turn burns retrieval infrastructure harder than tokens.",
          "Measure cost per resolved ticket with full attribution. Compare to tier-one human handle time. Without the comparison, you cannot know if the agent is economics or theatre.",
        ],
      },
      {
        h2: "Retry and loop multipliers",
        paras: [
          "Agents retry at two layers: model-level regeneration when JSON is invalid, and task-level replanning when tools fail. Each multiplies spend. A 3% tool error rate with three replans per error is not 3% extra — it is compounding.",
          "Loops without termination burn budgets silently until caps trigger. Measure tasks that hit max steps — their average cost is your worst-case unit economics.",
          "Circuit breakers save money and reliability. Deprioritise agents that repeatedly fail the same tool sequence until root-caused.",
        ],
        ul: [
          "Track attempts per successful outcome",
          "Alert when p95 iterations exceed design threshold",
          "Cap daily spend per tenant with graceful degradation",
          "Log cost at task termination, not only per API call",
        ],
      },
      {
        h2: "Human cost is still cost",
        paras: [
          "High-risk agents route to humans for approval or correction. That is correct — and expensive. Measure minutes per escalation, not only escalation count. A complex infra agent may save senior engineer typing time while consuming more review time than it returns.",
          "Hide human cost and agents look free. Include fully loaded labour in business cases. Sometimes the right answer is a human with a better UI, not an agent with a tool belt.",
          "Challenge automation mandates that ignore error cost. Wrong invoice processing at scale dwarfs token savings.",
        ],
        note:
          "If your ROI model assumes zero human review, it is not a production model — it is a POC spreadsheet.",
      },
      {
        h2: "Platform and observability tax",
        paras: [
          "Traces, eval pipelines, vector stores, and policy infrastructure are real line items. Amortise platform engineering across agents — but attribute overhead per agent for kill decisions.",
          "Cold start and warm pool strategies affect cost. Always-on small models for routing plus large models on demand can beat single-model architectures — or double spend if misconfigured.",
          "FinOps and platform teams should share dashboards. Cost without reliability context leads to dangerous cuts.",
        ],
        quote: "The cheapest agent is not the one with the lowest per-token price. It is the one that succeeds once.",
      },
      {
        h2: "Unit economics playbook",
        paras: [
          "Pick one outcome — ticket resolved, PR merged, incident diagnosed. Measure total cost for thirty days. Compare to baseline. Include incident rework from agent errors in the baseline adjustment.",
          "Kill agents that cannot show positive unit economics after guardrails. Keep agents with narrow scope and high success rates. Expand scope only with measured margin.",
          "Renegotiate vendor contracts after you understand tool-heavy vs token-heavy profiles. Different agents need different discount levers.",
        ],
        h3: "When to use simpler automation",
        p3:
          "If the task is deterministic, use code. Agents earn their cost on tasks requiring judgement under messy context — not on cron replacements dressed in natural language.",
      },
    ],
    fillers: [
      "Tag cloud resources created for agent tooling with agent id. Unlabeled spend becomes impossible to optimise.",
      "Run monthly 'cost per outcome' reviews with product owners, not only engineering.",
      "Model cache hit rates for repeated retrievals — duplicate context is wasted money.",
      "Compare weekend vs weekday cost — batch jobs disguised as interactive agents show up clearly.",
      "Finance should see the same outcome metrics engineering uses, not only API invoices.",
      "Budget caps are product features — communicate degradation clearly to users when caps hit.",
    ],
  },
  {
    slug: "mcp-vs-rest-apis-vs-function-calling",
    title: "MCP vs REST APIs vs Function Calling: A Technical Comparison",
    deck:
      "Three ways to give models hands — in-process function calling, HTTP APIs, and Model Context Protocol servers. Compare boundaries, ops burden, and security honestly.",
    figure: "mcp-vs-rest-comparison.svg",
    tone: "frost",
    tags: ["MCP", "APIs", "Function calling", "Integration"],
    topic: "tool integration patterns",
    observe:
      "Observe: how each pattern appears in your architecture — credentials per path, latency profiles, schema evolution practices, and who owns the integration when it breaks.",
    measure:
      "Measure: p95 tool latency, schema breakage rate on model upgrades, engineer hours per new tool, and security review time per integration pattern.",
    model:
      "Model: choose by trust boundary and lifecycle — in-process for low-latency trusted code, REST for existing enterprise APIs, MCP for standardised tool servers with discoverability and multi-client reuse.",
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
    figAlt: "Comparison of function calling, REST API, and MCP server integration patterns",
    figCap: "Three patterns — three trust boundaries and ops models.",
    table: {
      caption: "Pattern comparison",
      head: ["Dimension", "Function calling", "REST", "MCP"],
      rows: [
        ["Boundary", "In-process", "Network", "Network"],
        ["Reuse across clients", "Low", "High", "High"],
        ["Discovery", "Code-defined", "OpenAPI", "MCP manifest"],
        ["Ops maturity", "App release", "API ops", "Emerging"],
        ["Latency", "Lowest", "Network-bound", "Network-bound"],
      ],
    },
    sections: [
      {
        h2: "The integration decision is architectural",
        paras: [
          "Every agent needs tools. The debate is not which syntax the model prefers — it is where code runs, who owns credentials, and how integrations evolve when models and products change weekly.",
          "Function calling embeds tools in the application process. REST calls existing HTTP APIs. MCP exposes tools through a protocol designed for agent hosts to discover and invoke capabilities dynamically.",
          "Constrange sees teams default to whichever pattern appeared in the first blog post they read. That is not engineering. Map trust boundaries first.",
        ],
      },
      {
        h2: "Function calling: speed and coupling",
        paras: [
          "In-process function calling offers the lowest latency and simplest local debugging. Schema lives in code. Types are enforced by your language. Perfect for a single team's agent with a handful of trusted operations.",
          "Coupling is the cost. Every new tool ships with the agent binary. Third-party tools run in your security perimeter unless wrapped. Multi-team reuse duplicates schemas across repos.",
          "Measure when function calling stops fitting: security review per release, schema copied in three services, or need for polyglot tool implementations.",
        ],
      },
      {
        h2: "REST: the enterprise default",
        paras: [
          "Most enterprises already have REST APIs with auth, rate limits, and monitoring. Wrapping them for agents is incremental work. OpenAPI specs become tool definitions with variable quality — ambiguous enums and underspecified errors confuse models.",
          "REST shines when tools are shared beyond agents — mobile apps, partners, and agents hit the same surface. Operational maturity transfers.",
          "Weakness: discovery is manual. Each agent team writes its own tool descriptions. Drift is inevitable without a central registry.",
        ],
        ol: [
          "Publish OpenAPI with agent-friendly descriptions",
          "Standardise error shapes models can parse",
          "Add idempotency keys on mutating endpoints",
          "Instrument agent traffic separately from human clients",
        ],
      },
      {
        h2: "MCP: protocol for tool servers",
        paras: [
          "Model Context Protocol positions itself between ad-hoc wrappers and bespoke SDKs. Tools advertise capabilities via manifests. Clients connect to servers that may wrap REST, databases, or local files.",
          "MCP helps when multiple agent hosts — IDE, chat, automation — should share the same tool server. Update once, consume many. Ops looks like running small services with auth and versioning.",
          "MCP is younger. Operational playbooks, security patterns, and HA models are still forming. Treat MCP servers like any production microservice — not like config files.",
        ],
        note:
          "MCP does not eliminate the need for policy. It standardises invocation — not authorization decisions.",
      },
      {
        h2: "Choosing and combining",
        paras: [
          "Hybrid architectures are normal: in-process router, MCP for shared tools, REST for legacy systems without MCP wrappers yet. Measure integration cost per tool and consolidate where reuse justifies protocol investment.",
          "Challenge 'MCP everywhere' mandates six months before your platform team has auth sorted. Challenge 'REST only' when five teams duplicate the same wrapper.",
          "Security: function calling inherits process compromise. Network patterns need mTLS, OAuth, scoped tokens, and egress controls. Compare attack surface honestly in architecture review.",
        ],
        quote: "The best integration pattern is the one your organisation can operate safely at your scale — not the newest acronym.",
        h3: "Migration path",
        p3:
          "Start REST on existing APIs. Extract high-reuse tools to MCP servers when third client appears. Keep function calling for hot-path read-only operations that cannot tolerate network hops.",
      },
    ],
    fillers: [
      "Benchmark tool p95 latency per pattern with production-like payloads — not hello-world calls.",
      "Track schema change frequency. High churn patterns need codegen and contract tests.",
      "Document who pages when a tool fails — agent teams often assume API teams will notice.",
      "Run security review per pattern: in-process has supply-chain risk; network has credential sprawl risk.",
      "Version tool manifests alongside agent versions for reproducible debugging.",
      "Compare developer onboarding time for adding a new tool across patterns — platform ROI lives here.",
    ],
  },
  {
    slug: "mcp-security-hidden-attack-surface",
    title: "MCP Security: The Hidden Attack Surface Behind AI Tool Calling",
    deck:
      "Every tool is a trust boundary. MCP standardises invocation — not threat modelling. Map prompt injection, credential theft, and confused deputy paths before production.",
    figure: "mcp-security-attack-surface.svg",
    tone: "wine",
    tags: ["MCP", "Security", "AI agents", "Threat model"],
    topic: "MCP security",
    observe:
      "Observe: inventory MCP servers, their credential stores, network exposure, and which data classes each tool can read or write. Include developer laptops running local MCP with production tokens.",
    measure:
      "Measure: policy denial rate, anomalous tool argument patterns, credential scope per server, and time to revoke compromised tool access. Run red-team prompt injection exercises monthly.",
    model:
      "Model: attack surface = tools × credentials × context window × users. MCP multiplies tools and clients. Security scales with policy enforcement points, not with security awareness slides.",
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
    figAlt: "Attack paths from agent through MCP tools to credentials and sensitive data",
    figCap: "Every tool is a trust boundary — MCP standardises the wire, not the threat model.",
    table: {
      caption: "Threat categories for MCP deployments",
      head: ["Threat", "Example"],
      rows: [
        ["Prompt injection", "Hidden instructions in retrieved docs trigger deletes"],
        ["Confused deputy", "Agent uses user's token beyond intent"],
        ["Credential exfil", "Tool returns secrets into model context"],
        ["Tool shadowing", "Malicious server registers overlapping tool names"],
        ["Supply chain", "Compromised MCP server package"],
      ],
    },
    sections: [
      {
        h2: "Tools are credentials with opinions",
        paras: [
          "Security teams understand APIs. MCP arrives as 'just another integration' in agent demos. Under the hood, tools execute with whatever authority the server holds. The model chooses when and how — influenced by user text, retrieved content, and adversarial inputs.",
          "Constrange threat models start from a simple question: if an attacker controls part of the context window, what can they make the agent do? The answer is 'anything allowed tools permit'. MCP does not shrink that set.",
          "Local MCP servers on engineer laptops with production read access are a common finding in assessments. Convenience migrates to production paths without redesign.",
        ],
      },
      {
        h2: "Prompt injection meets tool calling",
        paras: [
          "Classic prompt injection told the model to ignore instructions. Tool-era injection tells the model to call tools — export customer data, modify infra, send messages. Retrieved documents and email bodies become attack vectors.",
          "Defence is layered: input sanitisation helps but is insufficient. Policy engines must enforce allowlists on tool + argument combinations. Sensitive tools require step-up auth or human approval regardless of model confidence.",
          "Measure injection success rate in red-team exercises. Track near-misses where policy blocked abuse. If you have no blocks, you likely have no policy.",
        ],
      },
      {
        h2: "Credential and network hygiene",
        paras: [
          "MCP servers need secrets. Vault integration, short-lived tokens, and per-tenant scoping are baseline — not stretch goals. Shared long-lived API keys across agents and humans complicate revocation.",
          "Network placement matters. MCP servers bridging internal databases should not be internet-exposed. mTLS between client and server. Egress allowlists from server to downstream APIs.",
          "Audit every tool response for sensitive fields before returning to the model context. DLP at the tool boundary beats hoping the model forgets.",
        ],
        ul: [
          "Separate MCP servers per environment",
          "Rotate credentials independently per server",
          "Deny tools by default; allowlist explicitly",
          "Log argument hashes and policy decisions",
          "Run dependency scanning on MCP server images",
        ],
      },
      {
        h2: "Tool shadowing and supply chain",
        paras: [
          "When multiple MCP servers register tools, name collisions create shadowing risks — malicious or misconfigured server wins. Central registry with canonical names and version pins reduces ambiguity.",
          "Third-party MCP packages are software supply chain. Pin versions, review code, sign images. A compromised server is full access to whatever credentials it holds.",
          "Challenge the 'install MCP from the community' pattern without the same review as npm packages with production DB access — because that is what it is.",
        ],
        quote: "MCP did not invent tool risk. It industrialised it.",
      },
      {
        h2: "Security programme integration",
        paras: [
          "Include MCP servers in CMDB, vulnerability scanning, and incident response playbooks. Define kill switches for tool classes during active incidents.",
          "Security review should cover tool manifests — not only server infrastructure. A read tool that accepts arbitrary URLs is SSRF with agent branding.",
          "Train developers on confused deputy patterns when agents act on behalf of users. OAuth scopes must match least privilege for automated action.",
        ],
        h3: "Red team cadence",
        p3:
          "Monthly automated injection batteries against staging agents. Quarterly human-led exercises attempting cross-tenant data access via tools. Publish results to engineering, not only security.",
      },
    ],
    fillers: [
      "Map data flows from tool responses back into prompts — loops can re-inject secrets into retrievable memory.",
      "Require human approval for tools added to production registry — same as production API endpoints.",
      "Monitor for unusual tool sequencing — reconnaissance patterns precede exfiltration.",
      "Use separate model accounts per environment to limit cross-environment tool routing mistakes.",
      "Document MCP server owners in the registry — orphaned servers accumulate creds.",
      "Test revocation: disable a server and verify agents fail closed within minutes.",
    ],
  },
  {
    slug: "ai-coding-agents-changed-cicd",
    title: "AI Coding Agents Changed Software Development. What Happened to CI/CD?",
    deck:
      "Generation got faster. Review, test, and deploy pipelines became the bottleneck. Measure PR size, CI time, and verification debt — then redesign pipelines for agent-scale throughput.",
    figure: "ai-coding-agents-cicd.svg",
    tone: "moss",
    tags: ["CI/CD", "AI coding", "DevOps", "Quality"],
    topic: "CI/CD with coding agents",
    observe:
      "Observe: PR size distribution, review turnaround, CI queue depth, and test flake rate since coding agent adoption. Compare teams with and without heavy agent usage.",
    measure:
      "Measure: minutes of CI per merged line, reviewer hours per PR, defect escape rate, and rollback frequency. Agent-assisted code should not increase escape rate.",
    model:
      "Model: pipeline capacity = min(generation, review, CI, deploy). Speeding generation without expanding verification shifts bottleneck and may increase risk.",
    faqs: [
      [
        "Should CI be stricter with AI code?",
        "Yes — same or higher bar. Generated code needs the same gates plus style and security scanners tuned for common agent mistakes.",
      ],
      [
        "How do we handle huge agent PRs?",
        "Split by concern, cap size, require incremental merges. Large PRs are a process failure, not a tool win.",
      ],
      [
        "Do agents break test maintenance?",
        "They can — tests are edited to pass without understanding. Track mutation testing and review test changes carefully.",
      ],
      [
        "What pipeline investments help most?",
        "Faster CI via parallelisation, contract tests, static analysis, and preview environments per PR.",
      ],
    ],
    figAlt: "Coding agent pipeline showing bottlenecks at PR review and CI stages",
    figCap: "Generation accelerated — verification became the constraint.",
    table: {
      caption: "Pipeline metrics before and after heavy agent use",
      head: ["Metric", "Typical shift"],
      rows: [
        ["Median PR size", "Increases 2–5×"],
        ["Review time", "Up or flat — skim risk"],
        ["CI minutes per merge", "Up"],
        ["Defect escape rate", "Up without added gates"],
        ["Time to first commit", "Down"],
      ],
    },
    sections: [
      {
        h2: "The bottleneck moved",
        paras: [
          "Coding agents write diffs in seconds. Reviewers read at human speed. CI runs every test the repo owns. Deploy pipelines still require approvals, soak time, and manual checks nobody automated yet.",
          "Constrange interviews teams celebrating '10× developer productivity' while CI queues stretch to hours and on-call load rises from subtle regressions in generated code. The bottleneck moved from keyboard to verification.",
          "CI/CD was designed for human-paced commits. Agent-paced commits stress assumptions — branch longevity, PR granularity, test selection, and reviewer attention.",
        ],
      },
      {
        h2: "PR culture under pressure",
        paras: [
          "Agents produce large PRs because they touch every file needed for a feature in one pass. Reviewers skim. Comments cluster on style while logic errors slip through. Measure review depth — comments per hundred lines, time per line — not only approval time.",
          "Enforce PR size caps for agent-assisted changes. Require decomposition: scaffold, tests, implementation, docs as separate merges. Agents can run multiple passes; humans cannot review monoliths safely.",
          "Blameless post-mortems on bad merges should tag 'agent-assisted' when true. Patterns emerge quickly.",
        ],
      },
      {
        h2: "CI capacity and test strategy",
        paras: [
          "More code means more CI unless you optimise. Test selection — run impacted tests first, full suite on main — cuts feedback time. Flaky tests become unbearable when agents trigger CI ten times per hour.",
          "Invest in static analysis and security scanners tuned for common agent mistakes: hardcoded secrets, SQL string concat, missing error handling, hallucinated imports.",
          "Cache dependencies aggressively. Parallelise jobs. Measure cost per merge — FinOps for CI is back.",
        ],
        note:
          "If CI is slow, developers bypass it with direct commits or 'fix CI later' merges. Agents amplify that temptation.",
      },
      {
        h2: "Deploy and rollback",
        paras: [
          "Smaller deploy units reduce blast radius when agent code ships bugs. Feature flags decouple merge from exposure. Automated rollback on SLO burn is essential when merge frequency rises.",
          "Canary analysis should include business metrics, not only errors — agents break semantics while HTTP stays green.",
          "Challenge teams shipping agent-generated infra changes through the same pipeline as app code without additional policy gates.",
        ],
        quote: "Fast generation without fast verification is fast technical debt.",
      },
      {
        h2: "Redesigning pipelines for agents",
        paras: [
          "Treat agent output as untrusted input — like dependencies from npm. Pin agent versions and prompts in PR metadata for reproducibility.",
          "Add automated review bots for style, security, and test coverage deltas. Humans focus on architecture and business logic.",
          "Measure end-to-end lead time separately for agent-assisted and human-only work. Optimise the whole system, not generation vanity metrics.",
        ],
        h3: "Human roles evolve",
        p3:
          "Senior engineers become verifiers and architects — designing test harnesses, contracts, and guardrails. Junior engineers orchestrate agents under supervision. Hiring and performance reviews should reflect verification skill, not line count.",
      },
    ],
    fillers: [
      "Track percentage of merges tagged agent-assisted — correlate with incident rate monthly.",
      "Require agents to run tests locally before PR creation; measure CI failure rate reduction.",
      "Build golden-file tests for codegen templates agents use repeatedly.",
      "Schedule weekly flaky test burndown — agents expose flakiness faster than humans.",
      "Preview environments per PR become mandatory when agents touch UI.",
      "Document which directories are agent-off-limits — auth, billing, crypto.",
    ],
  },
  {
    slug: "mcp-servers-in-production",
    title: "MCP Servers in Production: Architecture, Security, and Reliability",
    deck:
      "Running MCP servers like side projects invites outages. Cover deployment topologies, auth, rate limits, HA, and how to SLO tool latency for agents depending on them.",
    figure: "mcp-servers-production.svg",
    tone: "tide",
    tags: ["MCP", "Production", "Architecture", "Reliability"],
    topic: "production MCP servers",
    observe:
      "Observe: map every MCP server — where it runs, who owns it, dependency chain to backends, and current SLO if any. Include IDE-local servers accidentally used for batch jobs.",
    measure:
      "Measure: tool p95 latency, error rate, availability, deploy frequency, and blast radius per server. Agents amplify downstream outages — track fan-out.",
    model:
      "Model: MCP servers are microservices with agent-specific traffic patterns — bursty, verbose payloads, retry-heavy callers. Apply service mesh discipline.",
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
    figAlt: "Production MCP server architecture with auth, rate limiting, and backend dependencies",
    figCap: "MCP servers are production services — not developer utilities.",
    table: {
      caption: "Production readiness checklist",
      head: ["Area", "Minimum bar"],
      rows: [
        ["Auth", "Per-client scoped tokens"],
        ["Rate limits", "Per client and per tool"],
        ["Observability", "Traces, metrics, structured logs"],
        ["HA", "Multi-instance with health checks"],
        ["Deploy", "CI, rollback, versioned manifests"],
      ],
    },
    sections: [
      {
        h2: "From laptop to datacenter",
        paras: [
          "MCP began as a developer convenience — local servers wrapping filesystem and git. Production agents need always-available tools backed by enterprise systems. That shift requires everything microservices needed a decade ago: deploy pipelines, secrets management, on-call, and capacity planning.",
          "Constrange sees teams promote the same laptop config to production via a hurried Dockerfile. Missing: health checks, graceful shutdown, connection pooling, and backoff when backends throttle.",
          "Treat MCP promotion as a service launch, not a config tweak.",
        ],
      },
      {
        h2: "Topology and scaling",
        paras: [
          "Deploy MCP servers close to their backends — same VPC, low latency. Agent hosts may be remote; tool latency dominates task time. Scale horizontally for read-heavy tools. Queue mutating tools if backends cannot handle agent retry storms.",
          "Separate servers by blast radius: read-only search vs write-capable admin tools. Policy routes agents to the right server class.",
          "Measure concurrent sessions per server. MCP may hold connections open — load balancers need appropriate timeouts.",
        ],
        ol: [
          "Health endpoints checking downstream connectivity",
          "Circuit breakers on failing backends",
          "Idempotent handlers for mutating tools",
          "Graceful degradation — partial tool availability",
        ],
      },
      {
        h2: "Security and tenancy",
        paras: [
          "Multi-tenant agents require tenant context propagated to MCP servers. Row-level security in tools, not only in apps. Test cross-tenant isolation explicitly.",
          "Rotate credentials without redeploying agents — use secret broker integration. Break-glass access logged and time-bounded.",
          "Rate limit per tenant to prevent one customer from exhausting shared tool capacity.",
        ],
        note:
          "A single MCP server holding admin credentials for all environments is a consolidation mistake — not an efficiency win.",
      },
      {
        h2: "Reliability and SLOs",
        paras: [
          "Define SLOs on tool success and latency — agents need error budgets too. Alert on error budget burn. Page owners who registered the server in the tool registry.",
          "Chaos test: disable a backend and observe agent behaviour. Fail closed or degrade gracefully — never infinite retry into outage.",
          "Version MCP manifests. Breaking schema changes should be dual-run with deprecation windows — same as REST APIs.",
        ],
        quote: "An MCP server without an owner is a production incident with no runbook.",
      },
      {
        h2: "Operating model",
        paras: [
          "Register every server in the platform catalogue with owner, SLO, dependencies, and data classification. Onboarding a new tool is a ticket to the owning team — not a silent YAML edit.",
          "Run game days for high-traffic agents pulling many tools. Fan-out amplifies small MCP outages into task failures.",
          "FinOps: attribute MCP compute and downstream API cost per agent. Right-size instances after measuring real load — agents are spiky.",
        ],
        h3: "When not to run MCP",
        p3:
          "If only one agent needs one REST API, a thin wrapper in-process may beat operating a server. MCP earns its ops cost at reuse and standardisation scale.",
      },
    ],
    fillers: [
      "Load test MCP servers with agent-like retry patterns — not steady single-thread traffic.",
      "Publish status pages for critical MCP dependencies when customer agents rely on them.",
      "Automate manifest validation in CI — broken schemas should not reach production.",
      "Keep canary deploys for MCP servers the same as for APIs.",
      "Document maximum payload sizes — agents can generate verbose arguments.",
      "Practice credential rotation quarterly without agent downtime.",
    ],
  },
  {
    slug: "why-ai-agents-fail-in-production-seven-failure-modes",
    title: "Why AI Agents Fail in Production: 7 Failure Modes Engineers Can Measure",
    deck:
      "Flagship guide to the seven measurable failure modes — drift, tools, cost, loops, policy, data, and human handoff — and the metrics that catch them before customers do.",
    figure: "ai-agent-failure-modes.svg",
    tone: "coral",
    tags: ["AI agents", "Reliability", "Failure modes", "Production"],
    topic: "agent failure modes",
    observe:
      "Observe: classify last quarter's agent incidents into failure modes. Most teams list 'model quality' for everything. Granular taxonomy reveals which platform investments matter.",
    measure:
      "Measure: rate per failure mode — drift regressions, tool errors, budget exceeded, max steps hit, policy denials, stale retrieval, escalation timeouts. Trend monthly.",
    model:
      "Model: production reliability = 1 − Σ(mode_rate × mode_impact). Prioritise modes with highest expected loss. Not all failures are model problems.",
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
    figAlt: "Seven failure modes for production AI agents including drift, tools, cost, and policy",
    figCap: "Name the failure mode — then measure it.",
    table: {
      caption: "Seven failure modes at a glance",
      head: ["Mode", "Leading metric"],
      rows: [
        ["Model and prompt drift", "Eval score delta"],
        ["Tool and integration", "Tool error rate"],
        ["Cost and loop runaway", "Budget cap hit rate"],
        ["Policy and safety", "Denial and bypass attempts"],
        ["Data and retrieval", "Stale context rate"],
        ["Orchestration bugs", "Max steps exceeded"],
        ["Human handoff", "Escalation SLA miss"],
      ],
    },
    sections: [
      {
        h2: "Stop blaming the model generically",
        paras: [
          "Post-mortems say 'the model hallucinated'. Engineering detail stops there. No action items land on platform, tools, or data. The same incident repeats with a different prompt tweak.",
          "Constrange catalogues seven failure modes we see repeatedly in production agent systems. Each is measurable. Each has owners beyond the ML team. This is the flagship synthesis — use it to structure reviews, roadmaps, and SLO design.",
          "Challenge the assumption that a model upgrade fixes production instability. Measure mode rates first. Upgrading a model while tool error rate dominates spend is misallocated effort.",
        ],
      },
      {
        h2: "Mode 1: Model and prompt drift",
        paras: [
          "Models change behaviour with version bumps, temperature defaults, and silent vendor updates. Prompts rot as product context shifts. Drift manifests as gradual eval score decline — not sudden outage.",
          "Measure: nightly golden task suite, outcome scoring, comparison across model versions in shadow. Roll back on regression thresholds.",
          "Pin versions and bundle prompts with deploy artefacts. 'Latest' is not a production strategy.",
        ],
      },
      {
        h2: "Mode 2: Tool and integration failure",
        paras: [
          "Timeouts, schema mismatches, auth expiry, and downstream 500s are the workhorses of agent incidents. The model did its job — the tool did not.",
          "Measure: tool error rate by name and version, p95 latency, retry counts. SLO tools independently from models.",
          "Circuit breakers and cached fallbacks reduce user impact. Fix the tool path before fine-tuning reasoning.",
        ],
        h3: "Mode 3: Cost and loop runaway",
        p3:
          "Agents loop until success or cap. Misconfigured termination, ambiguous goals, or failing tools cause runaway spend. Measure tasks hitting max steps or budget caps — rate trending up is an early warning. Alert on dollar burn rate anomalies per tenant.",
      },
      {
        h2: "Mode 4: Policy and safety gaps",
        paras: [
          "Policy failures are both false negatives — harmful actions execute — and false positives — work stalls. Measure denials, overrides, and bypass attempts via prompt injection red teams.",
          "High override rate signals bad policy design or bad agent prompts fighting the policy layer.",
          "Safety is not static. Re-run threat models when new tools join the registry.",
        ],
      },
      {
        h2: "Mode 5: Data and retrieval failure",
        paras: [
          "Stale indexes, wrong tenant data, missing documents, and embedding drift produce confident wrong answers. Measure retrieval freshness, hit rate, and post-hoc relevance labels on samples.",
          "Separate retrieval SLO from generation SLO. Many 'model bugs' are search bugs.",
          "Re-embed and re-index on schedule. Version corpora alongside agents.",
        ],
      },
      {
        h2: "Modes 6 and 7: Orchestration and human handoff",
        paras: [
          "Orchestration bugs — wrong state transitions, lost messages, race conditions in async agents — show as intermittent failures hard to reproduce. Trace every state transition. Property-test workflows.",
          "Human handoff failures: escalations without context, SLA misses, operators overriding agents unsafely. Measure time-to-first-human-action and rework rate after handoff.",
          "Agents do not remove humans — they move the interface. Design that interface with the same rigour as the API.",
        ],
        quote: "If you cannot name the failure mode, you cannot measure it — and you will fund the wrong fix.",
      },
      {
        h2: "Building the failure mode dashboard",
        paras: [
          "One page: rate per mode, week over week, top agents contributing, linked exemplar traces. Review in weekly ops meeting alongside traditional service health.",
          "Set mode-specific initiatives: tool reliability programme, eval pipeline, policy hardening, retrieval freshness monitors.",
          "Executive summary: expected annual loss per mode — connects engineering work to risk language leadership understands.",
        ],
        ol: [
          "Tag incidents with failure mode in ticketing",
          "Publish monthly mode rate report",
          "Fund top two modes by expected loss",
          "Re-run taxonomy quarterly as architecture evolves",
        ],
      },
    ],
    fillers: [
      "Combine mode rates with customer impact scores — not all tool errors affect users equally.",
      "Run pre-mortems before launch using the seven modes as checklist.",
      "Train support to capture failure mode hints from user reports — speeds triage.",
      "Compare mode rates across tenants — isolation bugs show as single-tenant spikes.",
      "Archive exemplar traces per mode for onboarding new engineers.",
      "When mode rates drop, document what changed — build institutional memory.",
      "Avoid mode sprawl — subcategories come after the top seven are routinely measured.",
    ],
  },
]
