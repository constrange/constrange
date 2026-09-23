import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const oneMoreMicroserviceComplexityCurvePost: Article = {
  slug: "one-more-microservice-complexity-curve",
  title: "One More Microservice: The Complexity Curve",
  deck: "Measure operational complexity as service count grows — deployments, alerts, IAM, failure paths — and ask where decomposition stops paying.",
  category: "Engineering",
  date: "24 August 2026",
  dateIso: "2026-08-24",
  readTime: readTime(389),
  author,
  tags: ["Microservices","Complexity","Architecture","Operations"],
  art: { label: "Engineering", cells: ["Measure operational complexity as service count grows — deployments, …"], tone: "moss" },
  body: [
    p(
      "Service decomposition is discussed in architecture reviews and post-mortems, often as a reliability topic or a FinOps exercise. The conversation stops at policy slides. Constrange's Observe → Measure → Model series treats it as an engineering economics problem: what does the system actually do, what does that work cost, and what model explains the gap between intent and invoice.",
    ),
    p(
      "Observe: count services, deploy pipelines, alert rules, and IAM roles. Complexity accumulates in operations, not slides.",
    ),
    p(
      "Measure: plot operational load vs service count — incidents involving multiple services, mean time to diagnose cross-boundary failures.",
    ),
    p(
      "Model: complexity often super-linear. The nth service costs more than the first because integration surface grows.",
    ),
    h2("The complexity curve"),
    p(
      "Early splits reduce coupling and speed small teams. Later splits fragment ownership: partial deploys, version skew, distributed transactions nobody wanted. 'One more microservice' feels like progress. Measure whether deployment independence still justifies the integration tax.",
    ),
    fig("microservice-complexity-curve.svg", "Operational load rising faster than delivery benefit as service count grows", "The curve bends when coordination cost dominates."),
    h2("What each service adds"),
    ul([
          "CI/CD pipeline and test matrix",
          "On-call rotation and runbooks",
          "IAM roles and network policies",
          "Observability dashboards and SLOs",
          "Cross-service contract tests and versioning"
    ]),
    {
      t: "table",
      caption: "Stage",
      head: ["Benefit","Cost"],
      rows: [
              [
                      "1–5 services",
                      "Team autonomy",
                      "Moderate ops"
              ],
              [
                      "5–15 services",
                      "Independent deploy",
                      "Alert sprawl"
              ],
              [
                      "15+ services",
                      "Theoretical scaling",
                      "Coordination dominates"
              ]
      ],
    },
    note("If most incidents require a war room across five services, you bought distribution without buying isolation."),
    h3("Where decomposition stops paying"),
    p(
      "Stop when boundaries are stable, teams are sized to services, and operational metrics flatten delivery. If every feature touches six repos, the model is wrong regardless of diagram aesthetics.",
    ),
    quote("Microservices are a scaling strategy, not a maturity badge."),
    h2("Questions for your next review"),
    ul([
          "What would we see if we measured service complexity for one week?",
          "Which dependency owns the majority of the cost or delay?",
          "What policy or architecture assumption does the data contradict?",
          "What is the smallest experiment that would change our model?"
    ]),
    p(
      "The organisations that improve service complexity are not those with the best slogans. They are those that observe honestly, measure without vanity metrics, and update the model when the bill or the trace disagrees with the diagram.",
    ),
    cta(
      "Need help reading service complexity in your stack?",
      "Bring your dashboards, invoices, and last incident. We will help you observe what matters, measure what costs, and model what to change.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "When do microservices stop paying off?",
      "When operational load rises faster than team autonomy and deployment independence.",
    ],
    [
      "What should we measure?",
      "Deploy frequency per service, alert count, IAM policies, and cross-service incident rate.",
    ],
    [
      "Is one more service ever free?",
      "No. Each service adds deploy pipeline, on-call surface, and failure paths.",
    ],
    [
      "What is the alternative?",
      "Modular monolith or well-bounded contexts before splitting for fashion.",
    ],
  ],
}
