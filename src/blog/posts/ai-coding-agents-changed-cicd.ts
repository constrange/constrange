import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const aiCodingAgentsChangedCicdPost: Article = {
  slug: "ai-coding-agents-changed-cicd",
  title: "AI Coding Agents Changed Software Development. What Happened to CI/CD?",
  deck: "Generation got faster. Review, test, and deploy pipelines became the bottleneck. Measure PR size, CI time, and verification debt — then redesign pipelines for agent-scale throughput.",
  category: "Engineering",
  date: "13 September 2026",
  dateIso: "2026-09-13",
  readTime: readTime(1478),
  author,
  tags: ["CI/CD","AI coding","DevOps","Quality"],
  art: { label: "Engineering", cells: ["Generation got faster"], tone: "moss" },
  body: [
    p(
      "AI agents show up in vendor decks and architecture reviews, often sold as a capability upgrade or a model selection problem. The conversation stops at demos. Constrange treats CI/CD with coding agents as an engineering discipline: observe what systems actually do in your environment, measure the cost and risk of that behaviour, and model the gap between the prompt and the platform that makes it safe to run.",
    ),
    p(
      "Observe: PR size distribution, review turnaround, CI queue depth, and test flake rate since coding agent adoption. Compare teams with and without heavy agent usage.",
    ),
    p(
      "Measure: minutes of CI per merged line, reviewer hours per PR, defect escape rate, and rollback frequency. Agent-assisted code should not increase escape rate.",
    ),
    p(
      "Model: pipeline capacity = min(generation, review, CI, deploy). Speeding generation without expanding verification shifts bottleneck and may increase risk.",
    ),
    h2("The bottleneck moved"),
    p(
      "Coding agents write diffs in seconds. Reviewers read at human speed. CI runs every test the repo owns. Deploy pipelines still require approvals, soak time, and manual checks nobody automated yet.",
    ),
    p(
      "Constrange interviews teams celebrating '10× developer productivity' while CI queues stretch to hours and on-call load rises from subtle regressions in generated code. The bottleneck moved from keyboard to verification.",
    ),
    p(
      "CI/CD was designed for human-paced commits. Agent-paced commits stress assumptions — branch longevity, PR granularity, test selection, and reviewer attention.",
    ),
    fig("ai-coding-agents-cicd.svg", "Coding agent pipeline showing bottlenecks at PR review and CI stages", "Generation accelerated — verification became the constraint."),
    {
      t: "table",
      caption: "Pipeline metrics before and after heavy agent use",
      head: ["Metric","Typical shift"],
      rows: [
              [
                      "Median PR size",
                      "Increases 2–5×"
              ],
              [
                      "Review time",
                      "Up or flat — skim risk"
              ],
              [
                      "CI minutes per merge",
                      "Up"
              ],
              [
                      "Defect escape rate",
                      "Up without added gates"
              ],
              [
                      "Time to first commit",
                      "Down"
              ]
      ],
    },
    h2("PR culture under pressure"),
    p(
      "Agents produce large PRs because they touch every file needed for a feature in one pass. Reviewers skim. Comments cluster on style while logic errors slip through. Measure review depth — comments per hundred lines, time per line — not only approval time.",
    ),
    p(
      "Enforce PR size caps for agent-assisted changes. Require decomposition: scaffold, tests, implementation, docs as separate merges. Agents can run multiple passes; humans cannot review monoliths safely.",
    ),
    p(
      "Blameless post-mortems on bad merges should tag 'agent-assisted' when true. Patterns emerge quickly.",
    ),
    h2("CI capacity and test strategy"),
    p(
      "More code means more CI unless you optimise. Test selection — run impacted tests first, full suite on main — cuts feedback time. Flaky tests become unbearable when agents trigger CI ten times per hour.",
    ),
    p(
      "Invest in static analysis and security scanners tuned for common agent mistakes: hardcoded secrets, SQL string concat, missing error handling, hallucinated imports.",
    ),
    p(
      "Cache dependencies aggressively. Parallelise jobs. Measure cost per merge — FinOps for CI is back.",
    ),
    note("If CI is slow, developers bypass it with direct commits or 'fix CI later' merges. Agents amplify that temptation."),
    h2("Deploy and rollback"),
    p(
      "Smaller deploy units reduce blast radius when agent code ships bugs. Feature flags decouple merge from exposure. Automated rollback on SLO burn is essential when merge frequency rises.",
    ),
    p(
      "Canary analysis should include business metrics, not only errors — agents break semantics while HTTP stays green.",
    ),
    p(
      "Challenge teams shipping agent-generated infra changes through the same pipeline as app code without additional policy gates.",
    ),
    quote("Fast generation without fast verification is fast technical debt."),
    h2("Redesigning pipelines for agents"),
    p(
      "Treat agent output as untrusted input — like dependencies from npm. Pin agent versions and prompts in PR metadata for reproducibility.",
    ),
    p(
      "Add automated review bots for style, security, and test coverage deltas. Humans focus on architecture and business logic.",
    ),
    p(
      "Measure end-to-end lead time separately for agent-assisted and human-only work. Optimise the whole system, not generation vanity metrics.",
    ),
    h3("Human roles evolve"),
    p(
      "Senior engineers become verifiers and architects — designing test harnesses, contracts, and guardrails. Junior engineers orchestrate agents under supervision. Hiring and performance reviews should reflect verification skill, not line count.",
    ),
    h2("Questions for your next review"),
    ul([
          "What would we see if we measured CI/CD with coding agents for one week in production?",
          "Which dependency or tool call owns the majority of failures or cost?",
          "What assumption in our agent design does the telemetry contradict?",
          "What is the smallest experiment that would change our operating model?"
    ]),
    p(
      "The teams that run CI/CD with coding agents reliably are not those with the best prompts. They are those that observe honestly, measure without vanity metrics, and update the control plane when traces disagree with the architecture diagram.",
    ),
    cta(
      "Need help operationalising CI/CD with coding agents?",
      "Bring your agent traces, tool inventory, and last incident. We will help you observe what matters, measure what costs, and model what to change.",
      "Start a conversation",
    ),
    p(
      "Track percentage of merges tagged agent-assisted — correlate with incident rate monthly.",
    ),
    p(
      "Require agents to run tests locally before PR creation; measure CI failure rate reduction.",
    ),
    p(
      "Build golden-file tests for codegen templates agents use repeatedly.",
    ),
    p(
      "Schedule weekly flaky test burndown — agents expose flakiness faster than humans.",
    ),
    p(
      "Preview environments per PR become mandatory when agents touch UI.",
    ),
    p(
      "Document which directories are agent-off-limits — auth, billing, crypto.",
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
      "Track percentage of merges tagged agent-assisted — correlate with incident rate monthly.",
    ),
    p(
      "Require agents to run tests locally before PR creation; measure CI failure rate reduction.",
    ),
    p(
      "Build golden-file tests for codegen templates agents use repeatedly.",
    ),
    p(
      "Schedule weekly flaky test burndown — agents expose flakiness faster than humans.",
    ),
    p(
      "Preview environments per PR become mandatory when agents touch UI.",
    ),
    p(
      "Document which directories are agent-off-limits — auth, billing, crypto.",
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
}
