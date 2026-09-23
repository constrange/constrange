import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const architectureOf500msTimeoutPost: Article = {
  slug: "architecture-of-500ms-timeout",
  title: "The Architecture of a 500ms Timeout",
  deck: "A client deadline is a budget across DNS, TLS, gateways, services, and databases — until one slow hop consumes the rest.",
  category: "Engineering",
  date: "20 August 2026",
  dateIso: "2026-08-20",
  readTime: readTime(431),
  author,
  tags: ["Latency","Timeouts","Architecture","SLO"],
  art: { label: "Engineering", cells: ["A client deadline is a budget across DNS, TLS, gateways, services, an…"], tone: "wine" },
  body: [
    p(
      "Client deadlines is discussed in architecture reviews and post-mortems, often as a reliability topic or a FinOps exercise. The conversation stops at policy slides. Constrange's Observe → Measure → Model series treats it as an engineering economics problem: what does the system actually do, what does that work cost, and what model explains the gap between intent and invoice.",
    ),
    p(
      "Observe: trace each hop in a critical path with span timings. The client timeout is the envelope.",
    ),
    p(
      "Measure: how much of 500ms DNS, TLS, gateway, service, cache, and database consume at p95 and p99.",
    ),
    p(
      "Model: serial hops sum; the slowest hop near the end leaves no margin for recovery or retry.",
    ),
    h2("A deadline is not a single knob"),
    p(
      "Mobile clients set 500ms. API gateways inherit it. Services copy it into HTTP clients. Nobody allocated budget per hop. DNS spikes. TLS handshake on cold connection. Gateway auth. Service logic. Cache miss to database. One slow hop does not take 20% of 500ms — it takes whatever is left.",
    ),
    fig("architecture-of-500ms-timeout.svg", "500ms deadline split across DNS, TLS, gateway, service, cache, and database", "One slow hop consumes the shared budget."),
    {
      t: "table",
      caption: "Hop",
      head: ["Typical p95","Budget risk"],
      rows: [
              [
                      "DNS",
                      "5–30ms",
                      "Spikes on resolver issues"
              ],
              [
                      "TLS",
                      "20–80ms",
                      "Cold connections, cert chains"
              ],
              [
                      "Gateway",
                      "10–50ms",
                      "Auth, rate limits, WAF"
              ],
              [
                      "Service",
                      "50–200ms",
                      "Business logic, fan-out"
              ],
              [
                      "Database",
                      "10–300ms",
                      "Cache miss, lock, query"
              ]
      ],
    },
    h2("Timeout policy as architecture"),
    p(
      "Per-hop timeouts should be shorter than the client deadline, with context passed downstream. Parent remaining budget beats static 500ms on every call. Without propagation, inner services think they have 500ms when the client has 50ms left.",
    ),
    note("Retries inside a deadline often guarantee timeout — budget was already spent."),
    h3("Design for partial failure"),
    ol([
          "Return degraded response before deadline exhaustion",
          "Cache aggressively on the hot path",
          "Parallelise independent hops where possible",
          "Measure budget consumption per hop in traces"
    ]),
    quote("A timeout without a budget map is a wish that the slowest hop will cooperate."),
    h2("Questions for your next review"),
    ul([
          "What would we see if we measured latency budgets for one week?",
          "Which dependency owns the majority of the cost or delay?",
          "What policy or architecture assumption does the data contradict?",
          "What is the smallest experiment that would change our model?"
    ]),
    p(
      "The organisations that improve latency budgets are not those with the best slogans. They are those that observe honestly, measure without vanity metrics, and update the model when the bill or the trace disagrees with the diagram.",
    ),
    cta(
      "Need help reading latency budgets in your stack?",
      "Bring your dashboards, invoices, and last incident. We will help you observe what matters, measure what costs, and model what to change.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Is 500ms a good timeout?",
      "Only if the budget is allocated across hops. A single global timeout hides which hop spent it.",
    ],
    [
      "How do I budget latency?",
      "Sum p95 hop latency with margin; set per-hop timeouts less than client deadline.",
    ],
    [
      "Why do timeouts cascade?",
      "Upstream waits for downstream; one slow database hop consumes gateway and TLS budget.",
    ],
    [
      "What should we model?",
      "Deadline as a shared budget with per-hop caps and fail-fast at each layer.",
    ],
  ],
}
