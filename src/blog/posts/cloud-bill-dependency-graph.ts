import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const cloudBillDependencyGraphPost: Article = {
  slug: "cloud-bill-dependency-graph",
  title: "Your Cloud Bill Has a Dependency Graph",
  deck: "Treat invoices as architecture topology. Cost topology beats cost accounting when growth has a join.",
  category: "Engineering",
  date: "14 August 2026",
  dateIso: "2026-08-14",
  readTime: readTime(415),
  author,
  tags: ["FinOps","Architecture","Cloud cost","Dependencies"],
  art: { label: "Engineering", cells: ["Treat invoices as architecture topology"], tone: "plum" },
  body: [
    p(
      "Cloud invoices is discussed in architecture reviews and post-mortems, often as a reliability topic or a FinOps exercise. The conversation stops at policy slides. Constrange's Observe → Measure → Model series treats it as an engineering economics problem: what does the system actually do, what does that work cost, and what model explains the gap between intent and invoice.",
    ),
    p(
      "Observe: export cost by resource tag and service. Overlay the runtime dependency graph from traces.",
    ),
    p(
      "Measure: attribute marginal cost per edge — what does an extra order cost in payments API calls, database reads, egress?",
    ),
    p(
      "Model: cost propagates like latency. A join that fans out to five services multiplies spend when traffic doubles.",
    ),
    h2("Accounting vs topology"),
    p(
      "FinOps dashboards sort by account, project, and tag. Architecture diagrams sort by call direction. When growth has a join — checkout calling payments, search, inventory, and fraud — cost accounting hides which edge thickened. Cost topology makes the join visible.",
    ),
    fig("cloud-bill-dependency-graph.svg", "Invoice spend following service dependency edges", "The expensive hop is often one dependency downstream of the service you optimised."),
    {
      t: "table",
      caption: "View",
      head: ["Shows","Hides"],
      rows: [
              [
                      "Cost accounting",
                      "Who pays",
                      "Why work multiplied"
              ],
              [
                      "Cost topology",
                      "Which edge grew",
                      "Org chargeback politics"
              ],
              [
                      "Traffic metrics",
                      "Request volume",
                      "Per-request work"
              ]
      ],
    },
    h2("Growth with a join"),
    p(
      "Traffic doubled. Bill tripled. The join is the suspect: N+1 queries, missing cache, synchronous fan-out, cross-region calls added for one feature. Measure cost per successful business event, not per service container hour.",
    ),
    note("If you cannot draw your bill as a graph, you cannot explain spikes as architecture."),
    h3("Practical attribution"),
    ol([
          "Pick one journey and tag spans with business event id",
          "Sum cloud cost per service on that path for a day",
          "Divide by successful events — cost per outcome",
          "Repeat monthly and watch which edge moves"
    ]),
    quote("Invoices are logs written in currency. Read them like telemetry."),
    h2("Questions for your next review"),
    ul([
          "What would we see if we measured cost topology for one week?",
          "Which dependency owns the majority of the cost or delay?",
          "What policy or architecture assumption does the data contradict?",
          "What is the smallest experiment that would change our model?"
    ]),
    p(
      "The organisations that improve cost topology are not those with the best slogans. They are those that observe honestly, measure without vanity metrics, and update the model when the bill or the trace disagrees with the diagram.",
    ),
    cta(
      "Need help reading cost topology in your stack?",
      "Bring your dashboards, invoices, and last incident. We will help you observe what matters, measure what costs, and model what to change.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "How do I map bill to architecture?",
      "Tag resources by service and team, then overlay call graphs from tracing or service mesh.",
    ],
    [
      "Why does cost grow faster than traffic?",
      "Joins amplify work — fan-out, retries, and chatty dependencies scale super-linearly.",
    ],
    [
      "What is cost topology?",
      "The shape of spend following dependency edges, not only account hierarchy.",
    ],
    [
      "Where do we start?",
      "Pick one revenue-critical journey and reconcile its trace graph with last month's invoice.",
    ],
  ],
}
