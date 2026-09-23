import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const theAvailabilityTrapPost: Article = {
  slug: "the-availability-trap",
  title: "The 99.99% Availability Trap: What Happens Between the 9s?",
  deck: "Four nines sounds precise until you decompose where minutes actually go — and which dependency owns them.",
  category: "Engineering",
  date: "7 August 2026",
  dateIso: "2026-08-07",
  readTime: readTime(414),
  author,
  tags: ["SLO","Availability","Dependencies","Reliability"],
  art: { label: "Engineering", cells: ["Four nines sounds precise until you decompose where minutes actually …"], tone: "dusk" },
  body: [
    p(
      "Availability targets is discussed in architecture reviews and post-mortems, often as a reliability topic or a FinOps exercise. The conversation stops at policy slides. Constrange's Observe → Measure → Model series treats it as an engineering economics problem: what does the system actually do, what does that work cost, and what model explains the gap between intent and invoice.",
    ),
    p(
      "Observe: collect minute-level availability per dependency in the critical path. The headline number hides which box turned red.",
    ),
    p(
      "Measure: convert nines to minutes per year and assign minutes to owners. 99.99% is 52 minutes. If cache owns 40, that is the programme.",
    ),
    p(
      "Model: availability composes multiplicatively across serial dependencies. Four nines globally may be three nines on the path that matters.",
    ),
    h2("Between the nines"),
    p(
      "Leadership quotes four nines. Operations lives in the gaps: deploy windows, certificate expiry, regional DNS, throttling, poison messages, human change. Each gap has an owner — or nobody. The trap is treating availability as a property of your service when it is a property of the path.",
    ),
    fig("availability-trap.svg", "Availability budget split across gateway, service, cache, and database", "Most downtime minutes concentrate in one dependency."),
    {
      t: "table",
      caption: "Nines to minutes (per year)",
      head: ["Availability","Downtime budget"],
      rows: [
              [
                      "99%",
                      "~3.65 days"
              ],
              [
                      "99.9%",
                      "~8.76 hours"
              ],
              [
                      "99.99%",
                      "~52.6 minutes"
              ],
              [
                      "99.999%",
                      "~5.26 minutes"
              ]
      ],
    },
    h2("Who owns the minutes"),
    p(
      "Decompose incidents by dependency contribution to missed SLO. Shared platforms — identity, payments, search — often consume budget without appearing on your team's dashboard. Measure journey SLO, not service ping.",
    ),
    note("A green service dashboard does not mean customers completed checkout."),
    h3("Error budgets as currency"),
    p(
      "Spend error budget deliberately on releases. When budget is gone, stop shipping to that path or invest in the dependency that spent it. Without decomposition, teams argue about nines while minutes leak sideways.",
    ),
    quote("Precision in the headline breeds complacency in the dependencies."),
    h2("Questions for your next review"),
    ul([
          "What would we see if we measured availability minutes for one week?",
          "Which dependency owns the majority of the cost or delay?",
          "What policy or architecture assumption does the data contradict?",
          "What is the smallest experiment that would change our model?"
    ]),
    p(
      "The organisations that improve availability minutes are not those with the best slogans. They are those that observe honestly, measure without vanity metrics, and update the model when the bill or the trace disagrees with the diagram.",
    ),
    cta(
      "Need help reading availability minutes in your stack?",
      "Bring your dashboards, invoices, and last incident. We will help you observe what matters, measure what costs, and model what to change.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Is 99.99% enough?",
      "It allows ~52 minutes downtime per year. Whether that is enough depends on which minutes and which customers.",
    ],
    [
      "How do I decompose availability?",
      "Measure uptime per dependency and per user journey, not only per service dashboard green.",
    ],
    [
      "Why do SLOs pass during outages?",
      "Aggregate SLOs hide localized failure and dependency minutes absorbed by retries and queues.",
    ],
    [
      "What should we model?",
      "Error budget consumption by dependency, region, and journey — not a single global percentage.",
    ],
  ],
}
