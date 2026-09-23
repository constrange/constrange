import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const observabilityCardinalityBudgetPost: Article = {
  slug: "observability-cardinality-budget",
  title: "Observability Has a Cardinality Budget",
  deck: "Telemetry becomes infrastructure. Model useful signal against ingestion, storage, and query cost as dimensions grow.",
  category: "Engineering",
  date: "17 August 2026",
  dateIso: "2026-08-17",
  readTime: readTime(414),
  author,
  tags: ["Observability","Cardinality","Metrics","Cost"],
  art: { label: "Engineering", cells: ["Telemetry becomes infrastructure"], tone: "slate" },
  body: [
    p(
      "Telemetry cardinality is discussed in architecture reviews and post-mortems, often as a reliability topic or a FinOps exercise. The conversation stops at policy slides. Constrange's Observe → Measure → Model series treats it as an engineering economics problem: what does the system actually do, what does that work cost, and what model explains the gap between intent and invoice.",
    ),
    p(
      "Observe: count active series per metric and team. Cardinality explosions arrive quietly in the ingest bill.",
    ),
    p(
      "Measure: dollars per million samples, query latency at p95, and dashboard time-to-answer during incidents.",
    ),
    p(
      "Model: insight scales sub-linearly with dimensions; cost scales linearly or worse. There is a budget.",
    ),
    h2("Telemetry as infrastructure"),
    p(
      "Metrics, logs, and traces are not free side effects of shipping code. They are storage systems with query engines and retention policies. High-cardinality labels — user ids, session ids, unbounded route templates — turn observability into a cost centre that competes with production workloads.",
    ),
    fig("observability-cardinality-budget.svg", "Ingest cost rising faster than useful signal as dimensions grow", "More dimensions do not automatically mean more understanding."),
    h2("The cardinality budget"),
    p(
      "Assign each team a monthly cardinality budget: max active series, max ingest gigabytes, max custom metrics. Exceeding budget requires justification — usually an incident-driven temporary lift with expiry.",
    ),
    {
      t: "table",
      caption: "Label class",
      head: ["Example","Metric safe?"],
      rows: [
              [
                      "Low",
                      "service, region, status",
                      "Yes"
              ],
              [
                      "Medium",
                      "route template, tenant tier",
                      "With caps"
              ],
              [
                      "High",
                      "user_id, request_id",
                      "Traces/logs only, sampled"
              ],
              [
                      "Unbounded",
                      "free-text error message",
                      "Never in metrics"
              ]
      ],
    },
    note("If querying your metrics during an incident times out, you optimised for collection over retrieval."),
    h3("Sampling is a design choice"),
    p(
      "Trace sampling, log filtering, and metric aggregation are not admissions of failure. They are how you keep signal dense enough to use. Model sampling rate against incident debuggability — 1% may be fine until it is not.",
    ),
    quote("Dashboards you cannot afford to query are observability theatre."),
    h2("Questions for your next review"),
    ul([
          "What would we see if we measured cardinality budget for one week?",
          "Which dependency owns the majority of the cost or delay?",
          "What policy or architecture assumption does the data contradict?",
          "What is the smallest experiment that would change our model?"
    ]),
    p(
      "The organisations that improve cardinality budget are not those with the best slogans. They are those that observe honestly, measure without vanity metrics, and update the model when the bill or the trace disagrees with the diagram.",
    ),
    cta(
      "Need help reading cardinality budget in your stack?",
      "Bring your dashboards, invoices, and last incident. We will help you observe what matters, measure what costs, and model what to change.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "What is cardinality?",
      "The number of unique time series — often driven by high-cardinality labels like user id or request id.",
    ],
    [
      "How do I set a budget?",
      "Cap labels per metric, sample traces, and measure ingest cost per team per month.",
    ],
    [
      "Does more telemetry mean more insight?",
      "Only until query latency and cost make dashboards unusable. Signal-to-spend matters.",
    ],
    [
      "What labels are safe?",
      "Low-cardinality: service, region, route, status class. Avoid unbounded ids in metrics.",
    ],
  ],
}
