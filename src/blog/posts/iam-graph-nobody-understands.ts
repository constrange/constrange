import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const iamGraphNobodyUnderstandsPost: Article = {
  slug: "iam-graph-nobody-understands",
  title: "The IAM Graph Nobody Can Understand",
  deck: "Permissions as a graph: principals, roles, policies, resources — overlap, unused grants, escalation paths.",
  category: "Engineering",
  date: "12 September 2026",
  dateIso: "2026-09-12",
  readTime: readTime(387),
  author,
  tags: ["IAM","Security","Cloud","Governance"],
  art: { label: "Engineering", cells: ["Permissions as a graph: principals, roles, policies, resources — over…"], tone: "pine" },
  body: [
    p(
      "IAM complexity is discussed in architecture reviews and post-mortems, often as a reliability topic or a FinOps exercise. The conversation stops at policy slides. Constrange's Observe → Measure → Model series treats it as an engineering economics problem: what does the system actually do, what does that work cost, and what model explains the gap between intent and invoice.",
    ),
    p(
      "Observe: export principals, roles, policies, and resource bindings. Draw the graph — overlap appears quickly.",
    ),
    p(
      "Measure: count unused permissions, cross-account assumable roles, and admin-equivalent paths.",
    ),
    p(
      "Model: risk scales with graph connectivity, not policy count. One assumable admin role connects many nodes.",
    ),
    h2("Permissions are topology"),
    p(
      "IAM consoles list policies. Attackers and auditors think in paths. Service A assumes role B with s3:* on bucket C. Developer D can assume A for debugging. The graph nobody draws is the graph that matters in breach and compliance.",
    ),
    fig("iam-graph.svg", "Roles and policies connecting to shared resources", "Overlap and escalation paths hide in the graph."),
    h2("Overlap and drift"),
    ul([
          "Duplicate policies with different names",
          "Wildcard resources on production roles",
          "Unused grants never revoked after migrations",
          "Break-glass roles without expiry or monitoring",
          "CI roles with broader scope than deploy requires"
    ]),
    {
      t: "table",
      caption: "Review",
      head: ["Question","Bad answer"],
      rows: [
              [
                      "Last used?",
                      "Unknown",
                      "Grant stands forever"
              ],
              [
                      "Assumable by?",
                      "Everyone in account",
                      "Lateral movement"
              ],
              [
                      "Resource scope",
                      "*",
                      "Blast radius entire estate"
              ]
      ],
    },
    note("If nobody can explain effective permissions for one service, you do not have least privilege — you have archaeology."),
    h3("Graph-first governance"),
    ol([
          "Generate effective permission graph per service",
          "Remove grants with no access in 90 days",
          "Require justification for wildcards",
          "Alert on new assumable admin paths"
    ]),
    quote("IAM lists are inventories. IAM graphs are risk models."),
    h2("Questions for your next review"),
    ul([
          "What would we see if we measured IAM graph for one week?",
          "Which dependency owns the majority of the cost or delay?",
          "What policy or architecture assumption does the data contradict?",
          "What is the smallest experiment that would change our model?"
    ]),
    p(
      "The organisations that improve IAM graph are not those with the best slogans. They are those that observe honestly, measure without vanity metrics, and update the model when the bill or the trace disagrees with the diagram.",
    ),
    cta(
      "Need help reading IAM graph in your stack?",
      "Bring your dashboards, invoices, and last incident. We will help you observe what matters, measure what costs, and model what to change.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Why is IAM a graph?",
      "Principals assume roles bound to policies on resources — edges multiply with teams and services.",
    ],
    [
      "How do I find unused permissions?",
      "Compare policy grants to CloudTrail or audit logs — last accessed vs granted.",
    ],
    [
      "What is privilege escalation path?",
      "A chain of assumable roles and policies that grants more than any single policy shows.",
    ],
    [
      "Where do we start?",
      "Graph one production service's effective permissions and remove unused grants.",
    ],
  ],
}
