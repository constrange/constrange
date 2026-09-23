import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const onePercentFailureAmplificationPost: Article = {
  slug: "one-percent-failure-amplification",
  title: "The 1% Failure That Takes Down the 99%",
  deck: "Small failure rates compound through retries, fan-out, concurrency, and shared dependencies.",
  category: "Engineering",
  date: "6 September 2026",
  dateIso: "2026-09-06",
  readTime: readTime(386),
  author,
  tags: ["Reliability","Failure modes","Retries","Resilience"],
  art: { label: "Engineering", cells: ["Small failure rates compound through retries, fan-out, concurrency, a…"], tone: "coral" },
  body: [
    p(
      "Partial failure amplification is discussed in architecture reviews and post-mortems, often as a reliability topic or a FinOps exercise. The conversation stops at policy slides. Constrange's Observe → Measure → Model series treats it as an engineering economics problem: what does the system actually do, what does that work cost, and what model explains the gap between intent and invoice.",
    ),
    p(
      "Observe: track failure rate per dependency and retry multiplier on callers. One percent at the edge is not one percent at the core.",
    ),
    p(
      "Measure: simulate 1% errors on a fan-out path and record pool exhaustion, latency, and success rate at the edge.",
    ),
    p(
      "Model: effective load = baseline × (1 + failure_rate × (retry_factor - 1)) × fan_out. Shared pools make it nonlinear.",
    ),
    h2("Small numbers, large outcomes"),
    p(
      "Dashboards show 99% success. The 1% retries three times into a database with fixed connections. Connection wait becomes timeout. Timeouts retry. The 1% becomes 30% slow responses. Customers experience outage while error rate looks fine.",
    ),
    fig("one-percent-failure.svg", "1% failure amplifying through retry and fan-out to broad impact", "Partial failure compounds through the architecture."),
    h2("Mechanisms of amplification"),
    ul([
          "Retries multiply load on failing dependencies",
          "Fan-out turns one slow call into many",
          "Shared connection pools couple unrelated traffic",
          "Queues hide overload until age explodes",
          "Autoscaling lags behind retry storms"
    ]),
    {
      t: "table",
      caption: "Control",
      head: ["Reduces","Trade-off"],
      rows: [
              [
                      "Circuit breaker",
                      "Retry amplification",
                      "Hard failures visible"
              ],
              [
                      "Bulkhead",
                      "Pool coupling",
                      "Lower utilisation"
              ],
              [
                      "Load shed",
                      "Cascading latency",
                      "Dropped requests"
              ],
              [
                      "Retry budget",
                      "Storm size",
                      "More user-visible errors"
              ]
      ],
    },
    note("Chasing 99.9% on every hop while ignoring amplification is measuring leaves and missing the forest fire."),
    quote("The dangerous failure rate is the one your retries turn into a load test."),
    h2("Questions for your next review"),
    ul([
          "What would we see if we measured failure amplification for one week?",
          "Which dependency owns the majority of the cost or delay?",
          "What policy or architecture assumption does the data contradict?",
          "What is the smallest experiment that would change our model?"
    ]),
    p(
      "The organisations that improve failure amplification are not those with the best slogans. They are those that observe honestly, measure without vanity metrics, and update the model when the bill or the trace disagrees with the diagram.",
    ),
    cta(
      "Need help reading failure amplification in your stack?",
      "Bring your dashboards, invoices, and last incident. We will help you observe what matters, measure what costs, and model what to change.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Can 1% failure take down a system?",
      "Yes — through retries, fan-out, and shared resources that amplify partial failure.",
    ],
    [
      "How do I model amplification?",
      "Multiply failure probability across retries and fan-out; add shared dependency contention.",
    ],
    [
      "What metrics expose this?",
      "Retry rate, error budget burn, pool exhaustion, and cascading timeout rate.",
    ],
    [
      "How do we contain it?",
      "Circuit breakers, bulkheads, load shedding, and retry budgets.",
    ],
  ],
}
