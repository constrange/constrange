import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const systemsThatKnowWhenTheyDontKnowPost: Article = {
  slug: "systems-that-know-when-they-dont-know",
  title: "Designing systems that know when they don't know",
  deck:
    "Confidence gates, escalating unknowns, and safe defaults for autonomous systems — because acting certain when you are not is the fastest path to incident.",
  category: "Engineering",
  date: "18 September 2026",
  dateIso: "2026-09-18",
  readTime: readTime(1500),
  author,
  tags: ["Autonomous systems", "AI agents", "Safety", "Governance"],
  art: { label: "Engineering", cells: ["Certainty theatre kills faster than honest uncertainty"], tone: "moss" },
  body: [
    p(
      "Autonomous systems are judged on what they do when they know the answer. Production judges them on what they do when they do not. Most failures are not wrong answers delivered confidently — they are actions taken past the boundary of valid input, stale context, or missing policy.",
    ),
    p(
      "Systems that know when they do not know escalate, defer, or choose safe defaults instead of guessing. That capability is not a model feature alone. It is architecture: confidence gates at decision points, explicit unknown states, human paths that are faster than failure, and governance that rewards restraint.",
    ),
    p(
      "Constrange designs autonomous and agentic systems with uncertainty as a first-class output — not an embarrassment to hide behind fluent prose.",
    ),
    h2("Uncertainty is a signal, not a bug"),
    p(
      "Traditional software returns errors. ML and agent systems return completions. A completion looks like success even when it is fabrication. Designing for uncertainty means the system can output: I do not have enough context; this request is out of policy; confidence is below threshold; escalating to human. Those outputs must be as engineered as the happy path.",
    ),
    fig(
      "automation-uncertainty-gate.svg",
      "Decision diamond: high confidence proceeds, low confidence escalates, unknown triggers safe default",
      "The gate is architecture — not a prompt asking the model to be careful.",
    ),
    {
      t: "table",
      caption: "Three responses to low confidence",
      head: ["Response", "When to use"],
      rows: [
        ["Escalate", "High stakes, irreversible, or policy ambiguity"],
        ["Defer", "Missing data that may arrive — wait with timeout"],
        ["Safe default", "Low stakes, reversible, bounded blast radius"],
      ],
    },
    h2("Confidence gates at decision points"),
    p(
      "A confidence gate is an enforced check before action: classify input, score match to known patterns, verify prerequisites, compare to policy rules. If any check fails or score falls below threshold, action does not proceed. The gate is code and policy — not a system prompt that says 'only act if sure'.",
    ),
    p(
      "Gates belong at boundaries: before tool invocation, before production mutation, before sending external communication, before closing an incident. Each boundary has different thresholds. Reading documentation can tolerate lower confidence than deleting a namespace.",
    ),
    ul([
      "Separate read and write thresholds — writes stricter",
      "Require corroboration from two signals for irreversible steps",
      "Log confidence scores and gate decisions for audit",
      "Test gates with adversarial and out-of-distribution inputs",
    ]),
    note(
      "If the only unknown path is 'ask the model again', you do not have a gate — you have a loop.",
    ),
    h2("Escalating unknowns without shame"),
    p(
      "Organisations punish escalation culturally while demanding autonomy technically. On-call learns to make the agent 'just handle it'. Developers disable gates to unblock demos. Escalation must be fast, cheap, and credited — not a failure ticket.",
    ),
    p(
      "Design escalation routes with context bundles: what was attempted, what was uncertain, which policies conflicted, suggested next steps for the human. Humans should not re-research from scratch. Unknown is handoff, not reset.",
    ),
    h3("Escalation SLAs are part of the system"),
    p(
      "If humans take four hours to respond, autonomous systems will absorb risk to avoid waiting. Escalation paths need owners, paging, and timeouts — same as any critical dependency. An agent blocked on human review is healthier than an agent guessing through the block.",
    ),
    h2("Safe defaults: what to do when you cannot know"),
    p(
      "Safe defaults are pre-authorised behaviours for uncertainty: deny write, read-only probe, queue for batch review, apply least-privilege template, return partial answer with explicit gaps. Defaults must be boring and reversible. Creative defaults under uncertainty are incidents.",
    ),
    p(
      "Defaults are policy decisions, not engineering afterthoughts. Security wants deny. Product wants defer. Operations wants alert. Align before deployment — not in post-mortem. Document which default applies per action class and who can override.",
    ),
    {
      t: "table",
      caption: "Default posture by action class",
      head: ["Action class", "Safe default under uncertainty"],
      rows: [
        ["Read / search", "Proceed with narrow scope; flag low confidence in output"],
        ["Create resource", "Defer; require human or higher corroboration"],
        ["Modify config", "Deny; escalate with diff preview only"],
        ["Delete / revoke", "Deny unconditionally below highest threshold"],
        ["External message", "Hold draft; never send without explicit approval"],
      ],
    },
    h2("Agents and the illusion of understanding"),
    p(
      "Agents compound uncertainty because they chain steps. Step one misclassifies; step two acts on the misclassification with high tool confidence because the tool executed successfully. Success of execution is not success of intent. Gates must exist between steps, not only at the entrance.",
    ),
    p(
      "Tool use should require explicit intent objects: what I believe I am doing, why, expected outcome, confidence per field. Downstream tools validate intent against capability. Mismatches escalate. This is tedious engineering. It is cheaper than undoing a production change nobody authorised.",
    ),
    quote(
      "A system that cannot say 'I don't know' will eventually say 'I did' — about the wrong thing.",
    ),
    h2("Governance that rewards restraint"),
    p(
      "Metrics drive behaviour. If agents are scored only on tasks completed, they will complete tasks past certainty. Add metrics: escalation rate, gate blocks, human override frequency, incidents avoided by deferral. Review false negatives — escalations that wasted time — but do not optimise escalation to zero.",
    ),
    p(
      "Policy must be machine-readable. Agents cannot know they do not know policy that lives in PDF. Encode rules, test them, version them. When policy changes, gates update together — not via retraining hope.",
    ),
    h2("Testing for unknowns"),
    p(
      "Test suites full of happy paths prove nothing about uncertainty handling. Add chaos for context: missing fields, contradictory instructions, stale data, prompt injection, tools returning partial errors. Assert the system escalates or defaults — not that it produces fluent text.",
    ),
    ol([
      "Define confidence thresholds per action class in policy, not prompts",
      "Implement gates in code between agent reasoning and tool execution",
      "Build escalation bundles with context, not bare notifications",
      "Choose safe defaults per class with named owners",
      "Measure escalations and gate blocks as health signals",
    ]),
    h3("Human override without bypass culture"),
    p(
      "Overrides are necessary for edge cases. Overrides that skip gates without audit recreate shadow automation. Log who overrode, why, and what gate fired. Review overrides weekly. Patterns indicate bad gates, bad training data, or bad policy — not 'users who do not trust AI'.",
    ),
    h2("Autonomous systems in regulated and operational contexts"),
    p(
      "Finance, health, and infrastructure contexts cannot tolerate confident wrong. Regulators ask for evidence of control — not model size. Uncertainty handling is control: provable gates, auditable escalations, defaults aligned to policy. Fluency is not compliance.",
    ),
    p(
      "Constrange often finds the missing piece is not a better model but a defined unknown state in the workflow — a status incident tools understand, a queue humans monitor, a default that denies until Monday when certainty is impossible Friday night.",
    ),
    h2("Mixed autonomy on the same platform"),
    p(
      "Most estates run several autonomy levels at once: fully manual runbooks, scripted remediation, workflow-gated changes, and experimental agents. Uncertainty handling must be consistent across levels — not strict for the agent and loose for the legacy webhook that still restarts production from chat.",
    ),
    p(
      "When a human override bypasses a gate for the agent but not for the script, teams learn which path is easier, not which is safer. Align thresholds by action class, not by tool brand. A delete is a delete whether triggered by kubectl, Terraform, or an LLM with a tool adapter.",
    ),
    h3("Observability for uncertainty"),
    p(
      "Instrument unknown states the way you instrument errors: rate of gate blocks, escalation depth, time waiting on human, override count, and actions taken after override. Dashboards that only show success rate hide the compensation behaviour that precedes failure. On-call should see 'stuck in uncertain' as clearly as 'stuck in retry'.",
    ),
    h2("Questions for your autonomous system design"),
    ul([
      "What can the system do when confidence is below threshold — besides guess?",
      "How fast can a human receive context and decide?",
      "Which actions have deny-by-default under uncertainty?",
      "Where do chained steps re-validate intent?",
      "What metric rewards escalation instead of punishing it?",
    ]),
    p(
      "Systems that answer well build trust slowly. Systems that stop before harm build trust that survives the first incident.",
    ),
    cta(
      "Agents that act certain but cannot prove why?",
      "Bring your action classes and escalation paths. We will help you design gates, defaults, and unknown states that production can trust.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Can better prompts replace confidence gates?",
      "No. Prompts are not enforceable boundaries. Gates in code and policy survive model and prompt changes.",
    ],
    [
      "Won't high escalation rates mean the system failed?",
      "High escalation can mean gates work. Optimise false escalations, not escalation itself.",
    ],
    [
      "How do we set confidence thresholds?",
      "Start strict on writes, measure outcomes, loosen only with evidence. Involve security and operations, not only ML.",
    ],
    [
      "Is 'I don't know' compatible with customer-facing products?",
      "Yes — honest limits beat confident errors. Phrase as deferral with next step, not technical admission.",
    ],
  ],
}
