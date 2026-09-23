import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const engineeringToolSprawlTaxPost: Article = {
  slug: "engineering-tool-sprawl-tax",
  title: "The Hidden Cost of Tool Sprawl in Engineering",
  deck: "Fragmentation is an integration tax — auth boundaries, webhooks, duplicate capability, context switching.",
  category: "Engineering",
  date: "3 September 2026",
  dateIso: "2026-09-03",
  readTime: readTime(382),
  author,
  tags: ["Tooling","Engineering","Operations","Productivity"],
  art: { label: "Engineering", cells: ["Fragmentation is an integration tax — auth boundaries, webhooks, dupl…"], tone: "clay" },
  body: [
    p(
      "Engineering tool sprawl is discussed in architecture reviews and post-mortems, often as a reliability topic or a FinOps exercise. The conversation stops at policy slides. Constrange's Observe → Measure → Model series treats it as an engineering economics problem: what does the system actually do, what does that work cost, and what model explains the gap between intent and invoice.",
    ),
    p(
      "Observe: inventory tools per capability — alerting, ticketing, docs, CI, feature flags. Count overlaps.",
    ),
    p(
      "Measure: time to assemble incident context across tools; number of webhooks and sync failures per week.",
    ),
    p(
      "Model: each tool adds nodes and edges. Sprawl tax = integration maintenance + context switching + duplicate licences.",
    ),
    h2("Fragmentation as tax"),
    p(
      "Every team picks favourites. Jira here, Linear there. Datadog and a second APM. Slack and Teams bridges. Auth boundaries multiply. Incidents start with 'which dashboard?' instead of 'what broke?'",
    ),
    fig("engineering-tool-sprawl.svg", "Team connected to many tools via dashed integration edges", "Every tool adds an integration edge."),
    h2("Duplicate capability"),
    {
      t: "table",
      caption: "Capability",
      head: ["Sprawl symptom","Tax"],
      rows: [
              [
                      "Alerting",
                      "Three on-call rotations",
                      "Missed pages"
              ],
              [
                      "Docs",
                      "Notion + Confluence + README",
                      "Stale truth"
              ],
              [
                      "CI",
                      "Per-team pipelines",
                      "Drift"
              ],
              [
                      "Feature flags",
                      "Two vendors",
                      "Wrong flag in prod"
              ]
      ],
    },
    p(
      "Consolidation is unpopular because it threatens local optima. Measure the tax before debating tools: hours per sprint on glue work, failed webhooks, manual copy-paste between systems.",
    ),
    note("Tool sprawl is invisible until the incident where nobody could find the runbook."),
    h3("A sprawl audit"),
    ol([
          "List tools by capability, not by team",
          "Mark duplicates and retired-but-still-billing tools",
          "Measure incident context assembly time",
          "Pick one standard per capability with migration dates"
    ]),
    quote("Integration tax is paid in every incident and every onboarding."),
    h2("Questions for your next review"),
    ul([
          "What would we see if we measured tool sprawl for one week?",
          "Which dependency owns the majority of the cost or delay?",
          "What policy or architecture assumption does the data contradict?",
          "What is the smallest experiment that would change our model?"
    ]),
    p(
      "The organisations that improve tool sprawl are not those with the best slogans. They are those that observe honestly, measure without vanity metrics, and update the model when the bill or the trace disagrees with the diagram.",
    ),
    cta(
      "Need help reading tool sprawl in your stack?",
      "Bring your dashboards, invoices, and last incident. We will help you observe what matters, measure what costs, and model what to change.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "How do I measure tool sprawl cost?",
      "Count integrations, auth systems, and context switches per incident and per developer day.",
    ],
    [
      "Is more tooling always bad?",
      "No — but duplicate capability and missing integration compound silently.",
    ],
    [
      "What is the integration tax?",
      "Time spent syncing state, copying links, and reconciling conflicting dashboards.",
    ],
    [
      "Where do we start reducing sprawl?",
      "Map tools to capabilities; retire duplicates; standardise on one auth and alert path.",
    ],
  ],
}
