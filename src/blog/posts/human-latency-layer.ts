import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const humanLatencyLayerPost: Article = {
  slug: "human-latency-layer",
  title: "The Human Latency Layer in Automated Systems",
  deck: "Automated remediation in seconds. Approval-based remediation in minutes. When humans help — and when they become the bottleneck.",
  category: "Engineering",
  date: "27 August 2026",
  dateIso: "2026-08-27",
  readTime: readTime(407),
  author,
  tags: ["Automation","Operations","Incident response","Governance"],
  art: { label: "Engineering", cells: ["Automated remediation in seconds"], tone: "amber" },
  body: [
    p(
      "Human approval in automation is discussed in architecture reviews and post-mortems, often as a reliability topic or a FinOps exercise. The conversation stops at policy slides. Constrange's Observe → Measure → Model series treats it as an engineering economics problem: what does the system actually do, what does that work cost, and what model explains the gap between intent and invoice.",
    ),
    p(
      "Observe: measure detection-to-resolution with and without human gates. The gap is the human latency layer.",
    ),
    p(
      "Measure: minutes waiting for approval during incidents; correlate with incident duration and customer impact.",
    ),
    p(
      "Model: total remediation time = automation latency + human latency + execution. Optimise the dominant term.",
    ),
    h2("Seconds vs minutes"),
    p(
      "Runbooks promise automated rollback in seconds. Change advisory boards promise prudence. Both are right in context. Wrong when every rollback needs a manager on Slack at 2 a.m. The human layer adds minutes — sometimes hours — while queues grow and error budgets burn.",
    ),
    fig("human-latency-layer.svg", "Automation blocked by approval before remediation", "Minutes in the human layer dominate seconds in automation."),
    h2("When humans help"),
    p(
      "Humans excel at ambiguous judgement: is this attack or misconfiguration? Should we fail over regions? Is the data corrupt? Automate reversible, bounded actions. Reserve humans for irreversible or high-blast-radius moves — but measure the cost of waiting.",
    ),
    ul([
          "Auto-scale within predefined bounds",
          "Restart unhealthy instances with circuit limits",
          "Drain nodes after health check failure",
          "Require human approval for data deletion or cross-region failover"
    ]),
    note("If your automation waits for humans on actions you would trust an intern to click, redesign the gate."),
    h3("Blast radius budget"),
    ol([
          "Classify actions by reversibility and blast radius",
          "Auto-execute low-risk actions with audit log",
          "Pre-approve runbooks for known scenarios",
          "Measure human latency as an SLO"
    ]),
    quote("Governance that cannot distinguish safe automation from reckless automation becomes queue time."),
    h2("Questions for your next review"),
    ul([
          "What would we see if we measured human latency for one week?",
          "Which dependency owns the majority of the cost or delay?",
          "What policy or architecture assumption does the data contradict?",
          "What is the smallest experiment that would change our model?"
    ]),
    p(
      "The organisations that improve human latency are not those with the best slogans. They are those that observe honestly, measure without vanity metrics, and update the model when the bill or the trace disagrees with the diagram.",
    ),
    cta(
      "Need help reading human latency in your stack?",
      "Bring your dashboards, invoices, and last incident. We will help you observe what matters, measure what costs, and model what to change.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Should we remove humans from remediation?",
      "Not always. Model which actions need approval and which can run automatically within blast radius budget.",
    ],
    [
      "How do I measure human latency?",
      "Time from automated detection to human approval to remediation complete.",
    ],
    [
      "When are humans the bottleneck?",
      "When approval is required for reversible actions with bounded blast radius.",
    ],
    [
      "What is the alternative?",
      "Tiered automation: auto-remediate safe actions; escalate edge cases.",
    ],
  ],
}
