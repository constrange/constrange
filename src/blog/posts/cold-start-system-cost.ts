import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const coldStartSystemCostPost: Article = {
  slug: "cold-start-system-cost",
  title: "The Cost of a Cold Start Is Not the Cost of a Cold Start",
  deck: "Lambda duration is one line item. System-level latency, timeouts, retries, and queue growth are the real bill.",
  category: "Engineering",
  date: "11 August 2026",
  dateIso: "2026-08-11",
  readTime: readTime(446),
  author,
  tags: ["Serverless","Latency","Cold start","Architecture"],
  art: { label: "Engineering", cells: ["Lambda duration is one line item"], tone: "frost" },
  body: [
    p(
      "Cold starts is discussed in architecture reviews and post-mortems, often as a reliability topic or a FinOps exercise. The conversation stops at policy slides. Constrange's Observe → Measure → Model series treats it as an engineering economics problem: what does the system actually do, what does that work cost, and what model explains the gap between intent and invoice.",
    ),
    p(
      "Observe: trace cold starts through the full request path. Init duration is one span. Timeouts and retries are others.",
    ),
    p(
      "Measure: compare p99 user latency on cold vs warm invocations. Add retry cost and queue depth during scale-from-zero events.",
    ),
    p(
      "Model: cold start cost = init time + downstream timeout probability × retry cost + queueing delay under burst.",
    ),
    h2("The line item lie"),
    p(
      "Serverless bills reward the story that you pay only for execution. True for the function. False for the system. A cold start at the wrong hop consumes client deadline budget. The client retries. The function runs again — cold or warm. The queue behind the function grows while HTTP returns 504.",
    ),
    fig("cold-start-system-cost.svg", "Cold start rippling into timeouts, retries, and queue depth", "Duration on the invoice is not duration in the customer experience."),
    h2("Scale-from-zero under load"),
    p(
      "Black Friday does not arrive as a single request. It arrives as a step. Scale-from-zero adds latency precisely when concurrency spikes. Autoscaling policies tuned for average traffic underestimate tail risk.",
    ),
    ul([
          "Measure cold start rate during deploys and traffic steps",
          "Correlate cold starts with upstream timeout metrics",
          "Track queue age when functions scale from zero",
          "Compare provisioned concurrency cost vs retry tax"
    ]),
    note("Optimising init time alone while ignoring timeout policy is optimising the wrong variable."),
    h3("Architecture alternatives"),
    ol([
          "Keep warm capacity on the synchronous hot path",
          "Move burst absorption to a queue with honest lag SLO",
          "Shorten chains so fewer hops share one deadline",
          "Fail fast with degraded response instead of retry storms"
    ]),
    quote("The cold start you measure is the cold start you planned for. The expensive one is the timeout it caused upstream."),
    h2("Questions for your next review"),
    ul([
          "What would we see if we measured cold-start system cost for one week?",
          "Which dependency owns the majority of the cost or delay?",
          "What policy or architecture assumption does the data contradict?",
          "What is the smallest experiment that would change our model?"
    ]),
    p(
      "The organisations that improve cold-start system cost are not those with the best slogans. They are those that observe honestly, measure without vanity metrics, and update the model when the bill or the trace disagrees with the diagram.",
    ),
    cta(
      "Need help reading cold-start system cost in your stack?",
      "Bring your dashboards, invoices, and last incident. We will help you observe what matters, measure what costs, and model what to change.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Should we eliminate cold starts?",
      "Not always. Measure system cost first — provisioned concurrency may cost more than occasional cold starts.",
    ],
    [
      "How do cold starts hide cost?",
      "They trigger timeouts upstream, retries, and queue backlog that do not appear on the Lambda line item.",
    ],
    [
      "What should we measure?",
      "End-to-end success latency, retry rate, and queue age — not only function init duration.",
    ],
    [
      "When is provisioned concurrency worth it?",
      "When cold-start-induced retries and timeouts exceed the cost of warm capacity on the hot path.",
    ],
  ],
}
