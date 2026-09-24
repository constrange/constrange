import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const canAiSafelyChangeProductionInfrastructureTerraformPost: Article = {
  slug: "can-ai-safely-change-production-infrastructure-terraform",
  title: "Can AI Safely Change Production Infrastructure? A Terraform Experiment",
  deck: "We measured what happens when an agent proposes Terraform changes: plan quality, blast radius, approval latency, and the gap between confident diffs and safe applies.",
  category: "Engineering",
  date: "2 September 2026",
  dateIso: "2026-09-02",
  readTime: readTime(1454),
  author,
  tags: ["Terraform","AI agents","Infrastructure","Safety"],
  art: { label: "Engineering", cells: ["We measured what happens when an agent proposes Terraform changes: pl…"], tone: "pine" },
  body: [
    p(
      "AI agents show up in vendor decks and architecture reviews, often sold as a capability upgrade or a model selection problem. The conversation stops at demos. Constrange treats AI-driven infrastructure changes as an engineering discipline: observe what systems actually do in your environment, measure the cost and risk of that behaviour, and model the gap between the prompt and the platform that makes it safe to run.",
    ),
    p(
      "Observe: capture every agent-proposed Terraform plan — resource types touched, environment, whether destroy operations appear, and if state locks contend. Compare agent plans to human plans on the same tasks.",
    ),
    p(
      "Measure: plan rejection rate, time from proposal to approved apply, rollback frequency, and incidents attributed to agent-initiated changes. Track near-misses — plans that would have succeeded technically but violated policy.",
    ),
    p(
      "Model: infrastructure change safety = plan correctness × policy enforcement × human review bandwidth. AI increases plan throughput faster than review capacity. Without automation on policy checks, safety degrades.",
    ),
    h2("Why infrastructure tempts agents"),
    p(
      "Infrastructure-as-code looks like the perfect agent domain. APIs are structured. State is declarative. Plans are diffs. Terraform even has a plan-and-apply ritual that maps cleanly to human review. The temptation is to let the agent close the loop: read ticket, edit HCL, open PR, merge, apply.",
    ),
    p(
      "Constrange ran structured experiments with agent-assisted Terraform across sandbox and staging environments before touching production policy. The headline: agents accelerate draft quality on boilerplate but increase risk on judgement calls — security groups, IAM bindings, and destructive replaces.",
    ),
    p(
      "The experiment was not about whether AI can write HCL. It can. The question is whether your organisation can absorb the throughput without missing the one plan that opens port 22 to the world.",
    ),
    fig("ai-terraform-experiment.svg", "AI agent proposing Terraform changes through plan, approval, and apply stages", "AI can draft plans. Policy and humans must own production applies."),
    {
      t: "table",
      caption: "Terraform agent experiment results (illustrative)",
      head: ["Metric","Human baseline","Agent-assisted"],
      rows: [
              [
                      "Plan generation time",
                      "45 min",
                      "4 min"
              ],
              [
                      "Policy violations caught pre-apply",
                      "92%",
                      "61% without gates"
              ],
              [
                      "Rollback within 24h",
                      "2%",
                      "8% without sandbox"
              ],
              [
                      "Reviewer attention per plan",
                      "High",
                      "Lower — automation bias"
              ]
      ],
    },
    h2("Experimental setup"),
    p(
      "We gave agents read access to module catalogues, variable schemas, and architecture diagrams. Tools: terraform plan, cost estimation, policy check, and PR creation. No auto-apply. Human reviewers blind-scored plans for correctness, least privilege, and operational fit.",
    ),
    p(
      "Tasks ranged from 'add a tag' to 'introduce a new regional failover module'. Simple tasks scored well. Complex tasks showed compounding errors — wrong data source, correct syntax, wrong environment workspace.",
    ),
    p(
      "Measure reviewer time. It dropped for simple tasks and rose for complex ones because reviewers spent longer disproving confident agent explanations.",
    ),
    ol([
          "Agent drafts change in isolated git branch",
          "CI runs fmt, validate, plan, policy, cost",
          "Human reviews diff and policy output",
          "Approved applies run through standard pipeline",
          "Post-apply smoke tests and drift check"
    ]),
    h2("Where agents fail silently"),
    p(
      "Silent failures are worse than plan errors. An agent selects the staging workspace but names production resources. Plan output looks reasonable. Policy may not catch naming conventions. Reviewers skim because the agent summary sounds authoritative.",
    ),
    p(
      "Destroy operations are the sharp edge. Agents reconcile drift aggressively. A '-/+' replace on a stateful resource is sometimes correct and sometimes catastrophic. Measure how often agents propose destroy on resources with prevent_destroy in human-written modules — and how often they route around safeguards.",
    ),
    p(
      "IAM changes are subtle. Extra read permission on a bucket seems low risk until combined with another role assumption path. Graph effective permissions, do not review JSON in isolation.",
    ),
    note("Automation bias is real: reviewers approve faster when an agent generated the plan. Track approval time and override rate as leading indicators."),
    h2("Policy gates that actually help"),
    p(
      "OPA, Sentinel, or terraform-cloud policy sets are not bureaucracy — they are the speed bump that lets you trust throughput. Deny destroy on production. Require encryption flags. Block 0.0.0.0/0 ingress. Enforce module sources from internal registry only.",
    ),
    p(
      "Sandbox applies with synthetic traffic catch integration mistakes. Cost estimation catches oversized instance types. Neither replaces human judgement on architecture fit.",
    ),
    p(
      "The winning pattern: agent proposes, machines check, humans judge architecture. Auto-apply only inside narrow guardrails — tags, non-production scaling, documented runbooks.",
    ),
    quote("An agent that applies Terraform without policy is just a faster way to learn about backups."),
    h2("Production recommendations"),
    p(
      "Start with read-only agents: drift explanation, documentation, and plan suggestions without merge rights. Phase two: PR creation with mandatory CI policy. Phase three: auto-merge for allowlisted module bumps with passing tests.",
    ),
    p(
      "Never optimise for 'plans per hour'. Optimise for 'safe outcomes per week' and mean time to recovery when something slips. Measure rollbacks and near-misses, not velocity vanity metrics.",
    ),
    p(
      "Challenge the assumption that infra agents save headcount. They shift work from typing HCL to designing policy, modules, and review workflows. That is platform engineering, not magic.",
    ),
    h3("The human latency layer returns"),
    p(
      "If approval queues grow while agent throughput rises, you have recreated the ticketing system with extra steps. Either widen auto-approve boundaries with better policy or add reviewer capacity. Ignoring the queue creates rubber-stamping — worse than no agent.",
    ),
    h2("Questions for your next review"),
    ul([
          "What would we see if we measured AI-driven infrastructure changes for one week in production?",
          "Which dependency or tool call owns the majority of failures or cost?",
          "What assumption in our agent design does the telemetry contradict?",
          "What is the smallest experiment that would change our operating model?"
    ]),
    p(
      "The teams that run AI-driven infrastructure changes reliably are not those with the best prompts. They are those that observe honestly, measure without vanity metrics, and update the control plane when traces disagree with the architecture diagram.",
    ),
    cta(
      "Need help operationalising AI-driven infrastructure changes?",
      "Bring your agent traces, tool inventory, and last incident. We will help you observe what matters, measure what costs, and model what to change.",
      "Start a conversation",
    ),
    p(
      "Log every agent-suggested variable value alongside human edits. The delta trains better guardrails and shows where schemas confuse models.",
    ),
    p(
      "Run game days: inject ambiguous tickets and measure whether agents ask clarifying questions or guess. Guessing is a production incident.",
    ),
    p(
      "Compare agent plans to historical human changes on similar resources. Divergence is not wrong — but it must be explainable.",
    ),
    p(
      "Treat workspace selection as a first-class policy input. Wrong workspace is the most common high-severity mistake in our experiment logs.",
    ),
    p(
      "Require destroy plans to include rollback steps in the PR description — agent-generated or not.",
    ),
    p(
      "Measure state lock duration during agent retries. Thrashing locks block human pipelines too.",
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
      "Log every agent-suggested variable value alongside human edits. The delta trains better guardrails and shows where schemas confuse models.",
    ),
    p(
      "Run game days: inject ambiguous tickets and measure whether agents ask clarifying questions or guess. Guessing is a production incident.",
    ),
    p(
      "Compare agent plans to historical human changes on similar resources. Divergence is not wrong — but it must be explainable.",
    ),
  ],
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
}
