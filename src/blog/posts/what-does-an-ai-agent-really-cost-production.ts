import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const whatDoesAnAiAgentReallyCostProductionPost: Article = {
  slug: "what-does-an-ai-agent-really-cost-production",
  title: "What Does an AI Agent Really Cost? The True Cost of Running AI in Production",
  deck: "Token pricing is the visible line item. Production cost includes tools, retries, human review, observability, and the incidents agents prevent — or cause.",
  category: "Engineering",
  date: "7 September 2026",
  dateIso: "2026-09-07",
  readTime: readTime(1454),
  author,
  tags: ["FinOps","AI agents","Cost","Production"],
  art: { label: "Engineering", cells: ["Token pricing is the visible line item"], tone: "amber" },
  body: [
    p(
      "AI agents show up in vendor decks and architecture reviews, often sold as a capability upgrade or a model selection problem. The conversation stops at demos. Constrange treats agent economics as an engineering discipline: observe what systems actually do in your environment, measure the cost and risk of that behaviour, and model the gap between the prompt and the platform that makes it safe to run.",
    ),
    p(
      "Observe: attribute spend across model APIs, tool infrastructure, vector stores, egress, and operator time reviewing escalations. Unattributed 'AI' lines on invoices hide tool-heavy agents.",
    ),
    p(
      "Measure: fully loaded cost per successful business outcome — not per request. Include retry multipliers, idle warm capacity, and platform team hours amortised per agent.",
    ),
    p(
      "Model: total cost = Σ(model tokens × price) + Σ(tool compute) + Σ(human minutes × rate) + platform overhead + incident cost amortised. Compare to alternative — usually human labour or simpler automation.",
    ),
    h2("The invoice tells half the story"),
    p(
      "Finance receives a OpenAI or Anthropic line item and asks engineering to 'optimise AI spend'. Engineering tunes model selection. Next month the bill shifts slightly. Total cost of ownership barely moves because the agent fans out to search clusters, serverless functions, data warehouses, and on-call humans.",
    ),
    p(
      "Constrange decomposes agent invoices like microservice bills: follow the dependency graph. A support agent that searches ten million documents on every turn burns retrieval infrastructure harder than tokens.",
    ),
    p(
      "Measure cost per resolved ticket with full attribution. Compare to tier-one human handle time. Without the comparison, you cannot know if the agent is economics or theatre.",
    ),
    fig("ai-agent-production-cost.svg", "Production cost components beyond tokens including tools, retries, human review, and ops", "Token cost is the visible tip — system and people costs dominate many agent workloads."),
    {
      t: "table",
      caption: "Cost components often missed",
      head: ["Component","Typical share"],
      rows: [
              [
                      "Model tokens",
                      "20–40% for tool-heavy agents"
              ],
              [
                      "Tool compute and APIs",
                      "30–50%"
              ],
              [
                      "Human review",
                      "10–30% when risk is high"
              ],
              [
                      "Observability and storage",
                      "5–15%"
              ],
              [
                      "Incident and rework",
                      "Spiky — dominates when wrong"
              ]
      ],
    },
    h2("Retry and loop multipliers"),
    p(
      "Agents retry at two layers: model-level regeneration when JSON is invalid, and task-level replanning when tools fail. Each multiplies spend. A 3% tool error rate with three replans per error is not 3% extra — it is compounding.",
    ),
    p(
      "Loops without termination burn budgets silently until caps trigger. Measure tasks that hit max steps — their average cost is your worst-case unit economics.",
    ),
    p(
      "Circuit breakers save money and reliability. Deprioritise agents that repeatedly fail the same tool sequence until root-caused.",
    ),
    ul([
          "Track attempts per successful outcome",
          "Alert when p95 iterations exceed design threshold",
          "Cap daily spend per tenant with graceful degradation",
          "Log cost at task termination, not only per API call"
    ]),
    h2("Human cost is still cost"),
    p(
      "High-risk agents route to humans for approval or correction. That is correct — and expensive. Measure minutes per escalation, not only escalation count. A complex infra agent may save senior engineer typing time while consuming more review time than it returns.",
    ),
    p(
      "Hide human cost and agents look free. Include fully loaded labour in business cases. Sometimes the right answer is a human with a better UI, not an agent with a tool belt.",
    ),
    p(
      "Challenge automation mandates that ignore error cost. Wrong invoice processing at scale dwarfs token savings.",
    ),
    note("If your ROI model assumes zero human review, it is not a production model — it is a POC spreadsheet."),
    h2("Platform and observability tax"),
    p(
      "Traces, eval pipelines, vector stores, and policy infrastructure are real line items. Amortise platform engineering across agents — but attribute overhead per agent for kill decisions.",
    ),
    p(
      "Cold start and warm pool strategies affect cost. Always-on small models for routing plus large models on demand can beat single-model architectures — or double spend if misconfigured.",
    ),
    p(
      "FinOps and platform teams should share dashboards. Cost without reliability context leads to dangerous cuts.",
    ),
    quote("The cheapest agent is not the one with the lowest per-token price. It is the one that succeeds once."),
    h2("Unit economics playbook"),
    p(
      "Pick one outcome — ticket resolved, PR merged, incident diagnosed. Measure total cost for thirty days. Compare to baseline. Include incident rework from agent errors in the baseline adjustment.",
    ),
    p(
      "Kill agents that cannot show positive unit economics after guardrails. Keep agents with narrow scope and high success rates. Expand scope only with measured margin.",
    ),
    p(
      "Renegotiate vendor contracts after you understand tool-heavy vs token-heavy profiles. Different agents need different discount levers.",
    ),
    h3("When to use simpler automation"),
    p(
      "If the task is deterministic, use code. Agents earn their cost on tasks requiring judgement under messy context — not on cron replacements dressed in natural language.",
    ),
    h2("Questions for your next review"),
    ul([
          "What would we see if we measured agent economics for one week in production?",
          "Which dependency or tool call owns the majority of failures or cost?",
          "What assumption in our agent design does the telemetry contradict?",
          "What is the smallest experiment that would change our operating model?"
    ]),
    p(
      "The teams that run agent economics reliably are not those with the best prompts. They are those that observe honestly, measure without vanity metrics, and update the control plane when traces disagree with the architecture diagram.",
    ),
    cta(
      "Need help operationalising agent economics?",
      "Bring your agent traces, tool inventory, and last incident. We will help you observe what matters, measure what costs, and model what to change.",
      "Start a conversation",
    ),
    p(
      "Tag cloud resources created for agent tooling with agent id. Unlabeled spend becomes impossible to optimise.",
    ),
    p(
      "Run monthly 'cost per outcome' reviews with product owners, not only engineering.",
    ),
    p(
      "Model cache hit rates for repeated retrievals — duplicate context is wasted money.",
    ),
    p(
      "Compare weekend vs weekday cost — batch jobs disguised as interactive agents show up clearly.",
    ),
    p(
      "Finance should see the same outcome metrics engineering uses, not only API invoices.",
    ),
    p(
      "Budget caps are product features — communicate degradation clearly to users when caps hit.",
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
      "Tag cloud resources created for agent tooling with agent id. Unlabeled spend becomes impossible to optimise.",
    ),
    p(
      "Run monthly 'cost per outcome' reviews with product owners, not only engineering.",
    ),
    p(
      "Model cache hit rates for repeated retrievals — duplicate context is wasted money.",
    ),
    p(
      "Compare weekend vs weekday cost — batch jobs disguised as interactive agents show up clearly.",
    ),
    p(
      "Finance should see the same outcome metrics engineering uses, not only API invoices.",
    ),
    p(
      "Budget caps are product features — communicate degradation clearly to users when caps hit.",
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
}
