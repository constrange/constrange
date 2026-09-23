import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const queueHidingTheIncidentPost: Article = {
  slug: "queue-hiding-the-incident",
  title: "Your Queue Is Hiding the Real Incident",
  deck: "Zero HTTP errors while depth and age climb. Lag is a first-class reliability metric with a recoverability horizon.",
  category: "Engineering",
  date: "10 September 2026",
  dateIso: "2026-09-10",
  readTime: readTime(396),
  author,
  tags: ["Queues","Reliability","SLO","Incident response"],
  art: { label: "Engineering", cells: ["Zero HTTP errors while depth and age climb"], tone: "tide" },
  body: [
    p(
      "Queue-backed systems is discussed in architecture reviews and post-mortems, often as a reliability topic or a FinOps exercise. The conversation stops at policy slides. Constrange's Observe → Measure → Model series treats it as an engineering economics problem: what does the system actually do, what does that work cost, and what model explains the gap between intent and invoice.",
    ),
    p(
      "Observe: monitor queue depth and message age alongside HTTP error rate. Incidents often start in lag, not 5xx.",
    ),
    p(
      "Measure: recoverability horizon = backlog / processing rate. If horizon exceeds customer SLA, you are in incident.",
    ),
    p(
      "Model: async systems decouple acceptance from completion. Green HTTP with growing lag is deferred failure.",
    ),
    h2("HTTP green, system red"),
    p(
      "API returns 202 Accepted. Producer celebrates. Consumers fall behind. Depth climbs. Age crosses hours. Support tickets mention 'delayed notifications' while Grafana shows green. The queue absorbed the failure until it could not.",
    ),
    fig("queue-hiding-incident.svg", "Queue depth rising while HTTP error metric stays at zero", "Lag is a first-class reliability signal."),
    h2("Lag as SLO"),
    p(
      "Define SLO on processing latency: 95% of messages processed within N minutes. Page on age p99, not only consumer restarts. Model drain time after producer spike — can you recover before business impact?",
    ),
    {
      t: "table",
      caption: "Metric",
      head: ["Shows","Misses"],
      rows: [
              [
                      "HTTP 5xx",
                      "Sync path failure",
                      "Backlog"
              ],
              [
                      "Queue depth",
                      "Accumulated work",
                      "Per-message age distribution"
              ],
              [
                      "Consumer CPU",
                      "Worker health",
                      "Poison messages"
              ],
              [
                      "Age p99",
                      "Oldest stuck work",
                      "Future arrival rate"
              ]
      ],
    },
    note("A queue without age SLO is a buffer that lies about system health."),
    h3("Incident playbooks"),
    ol([
          "Scale consumers with proven throughput, not hope",
          "Throttle producers when horizon exceeds SLA",
          "Quarantine poison messages to unblock drain",
          "Communicate customer delay honestly"
    ]),
    quote("The incident you see in HTTP is often the incident your queue postponed."),
    h2("Questions for your next review"),
    ul([
          "What would we see if we measured queue lag for one week?",
          "Which dependency owns the majority of the cost or delay?",
          "What policy or architecture assumption does the data contradict?",
          "What is the smallest experiment that would change our model?"
    ]),
    p(
      "The organisations that improve queue lag are not those with the best slogans. They are those that observe honestly, measure without vanity metrics, and update the model when the bill or the trace disagrees with the diagram.",
    ),
    cta(
      "Need help reading queue lag in your stack?",
      "Bring your dashboards, invoices, and last incident. We will help you observe what matters, measure what costs, and model what to change.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Why zero errors during an outage?",
      "Synchronous paths return 200 while async backlog grows — errors appear later or never on HTTP dashboards.",
    ],
    [
      "What metrics matter for queues?",
      "Depth, age p99, consumer lag, and time-to-drain at current throughput.",
    ],
    [
      "What is recoverability horizon?",
      "How long until backlog clears at steady processing rate — defines customer-visible delay.",
    ],
    [
      "When should queues page?",
      "When age or depth breaches SLO, not only when consumers crash.",
    ],
  ],
}
