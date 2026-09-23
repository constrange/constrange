import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const theRetryTaxPost: Article = {
  slug: "the-retry-tax",
  title: "The Retry Tax: How Much of Your Cloud Bill Is Failure?",
  deck: "Don't just explain retries. Measure the economics of extra compute, network, database work, and queueing when failure meets retry policy.",
  category: "Engineering",
  date: "5 August 2026",
  dateIso: "2026-08-05",
  readTime: readTime(553),
  author,
  tags: ["Retries","FinOps","Reliability","Cloud cost"],
  art: { label: "Engineering", cells: ["Don't just explain retries"], tone: "coral" },
  body: [
    p(
      "Retry policy is discussed in architecture reviews and post-mortems, often as a reliability topic or a FinOps exercise. The conversation stops at policy slides. Constrange's Observe → Measure → Model series treats it as an engineering economics problem: what does the system actually do, what does that work cost, and what model explains the gap between intent and invoice.",
    ),
    p(
      "Observe: log retry attempt count per operation, per dependency, and per caller. Most teams only log final outcome. The attempts are where the money goes.",
    ),
    p(
      "Measure: multiply retried requests by unit cost — Lambda duration, API gateway charges, database CPU, egress bytes. A 3% error rate with 3 retries per failure is not 3% extra load. It is multiplicative.",
    ),
    p(
      "Model: treat retry as a tax rate on failure. If dependency failure probability is p and average attempts is a, expected work scales with 1 + p(a-1) before fan-out. Fan-out makes it worse.",
    ),
    h2("The invoice line items retries create"),
    p(
      "Retries show up everywhere the first attempt touched — and sometimes places it did not. A timed-out HTTP call may still have consumed database connections. A retried Lambda may cold-start twice. A message redelivered may run two consumers. Finance sees steady growth in compute. Engineering sees acceptable success rates.",
    ),
    fig("retry-tax.svg", "Retry path multiplying billable work across compute and database", "Each retry attempt bills like success — without guaranteeing value."),
    {
      t: "table",
      caption: "Retry cost components",
      head: ["Resource","How retries inflate it"],
      rows: [
              [
                      "Compute",
                      "Repeated execution of the same handler"
              ],
              [
                      "Database",
                      "Duplicate queries and connection hold time"
              ],
              [
                      "Network",
                      "Extra egress and cross-region hops"
              ],
              [
                      "Queues",
                      "Redelivery, visibility timeout churn"
              ],
              [
                      "Observability",
                      "Duplicate traces and log volume"
              ]
      ],
    },
    h2("Failure mode meets policy"),
    p(
      "Retry policy is not neutral. Aggressive retries during partial outage convert a sick dependency into an unavailable one. The tax is paid in money and in minutes of recovery. Measure the tax during game days: artificially slow a dependency and watch cost per successful user action climb.",
    ),
    note("If retry amplification is invisible in metrics, it is invisible in architecture review — until finance asks why compute doubled."),
    h2("From policy to model"),
    ol([
          "Instrument retry count on every outbound client",
          "Allocate cloud cost by service and compare to traffic",
          "Compute retry multiplier = total attempts / successful outcomes",
          "Set a budget: retry traffic must not exceed N% of baseline",
          "Review policies where multiplier exceeds budget monthly"
    ]),
    h3("Idempotency changes the economics"),
    p(
      "Retries without idempotency create duplicate side effects — refunds issued twice, emails resent, inventory decremented again. The tax then includes operational reconciliation, not only cloud spend. Model idempotency as a prerequisite for any retry on mutating paths.",
    ),
    quote("A retry without a budget is optimism with a load generator attached."),
    h2("Questions for your next review"),
    ul([
          "What would we see if we measured retry economics for one week?",
          "Which dependency owns the majority of the cost or delay?",
          "What policy or architecture assumption does the data contradict?",
          "What is the smallest experiment that would change our model?"
    ]),
    p(
      "The organisations that improve retry economics are not those with the best slogans. They are those that observe honestly, measure without vanity metrics, and update the model when the bill or the trace disagrees with the diagram.",
    ),
    cta(
      "Need help reading retry economics in your stack?",
      "Bring your dashboards, invoices, and last incident. We will help you observe what matters, measure what costs, and model what to change.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "How do I measure the retry tax?",
      "Tag retry attempts in metrics and allocate compute, egress, and database time per dependency. Compare successful vs retried request cost.",
    ],
    [
      "Is disabling retries the answer?",
      "No. Cap attempts, add jitter, require idempotency, and measure amplification before and after policy changes.",
    ],
    [
      "Why does finance not see retry cost?",
      "Bills aggregate by service, not by failure mode. Split cost by outcome: first attempt vs retry path.",
    ],
    [
      "What is a healthy retry multiplier?",
      "It depends on dependency SLO. If retries routinely exceed 1.2x baseline traffic, investigate before the next incident.",
    ],
  ],
}
