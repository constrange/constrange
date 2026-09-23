import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const aiMadeCodeCheapPost: Article = {
  slug: "ai-made-code-cheap",
  title: "AI Made Code Cheap. What Became Expensive?",
  deck: "More generated code means larger PRs, more review, more CI, more deployment risk. Verification becomes the constraint.",
  category: "Engineering",
  date: "30 August 2026",
  dateIso: "2026-08-30",
  readTime: readTime(387),
  author,
  tags: ["AI","Engineering","CI/CD","Quality"],
  art: { label: "Engineering", cells: ["More generated code means larger PRs, more review, more CI, more depl…"], tone: "ink" },
  body: [
    p(
      "AI-assisted development is discussed in architecture reviews and post-mortems, often as a reliability topic or a FinOps exercise. The conversation stops at policy slides. Constrange's Observe → Measure → Model series treats it as an engineering economics problem: what does the system actually do, what does that work cost, and what model explains the gap between intent and invoice.",
    ),
    p(
      "Observe: track PR size, review time, CI duration, and defect rate before and after heavy AI adoption.",
    ),
    p(
      "Measure: cost per merged line — reviewer hours, CI minutes, incident rate on generated code paths.",
    ),
    p(
      "Model: if generation is O(1) and verification is O(n), the constraint moves to assurance.",
    ),
    h2("Cheap generation, expensive assurance"),
    p(
      "Models produce diffs quickly. Reviewers read slowly. CI runs every line. Larger PRs skip careful review. Generated code looks plausible — tests pass until edge cases in production. The bottleneck moved from typing to trusting.",
    ),
    fig("ai-made-code-cheap.svg", "Generate, review, CI, deploy pipeline with review and CI as bottlenecks", "Code is cheap; confidence is not."),
    {
      t: "table",
      caption: "Stage",
      head: ["Before AI","After AI"],
      rows: [
              [
                      "Write code",
                      "Slow",
                      "Fast"
              ],
              [
                      "Review",
                      "Bottleneck",
                      "Worse bottleneck"
              ],
              [
                      "CI",
                      "Steady",
                      "Longer queues"
              ],
              [
                      "Operate",
                      "Same",
                      "More surface area"
              ]
      ],
    },
    h2("Verification as strategy"),
    p(
      "Teams that win invest in contract tests, smaller batches, static analysis, and clear ownership of generated modules. Treat AI output as untrusted input until proven — same as any external dependency.",
    ),
    note("A 2000-line PR from a model is not velocity. It is a review debt invoice."),
    h3("Organisational limits"),
    ol([
          "Cap PR size and require decomposition",
          "Mandate tests for generated paths",
          "Track review time and CI cost per team",
          "Own operational runbooks for AI-touched services"
    ]),
    quote("The expensive part of software was never the keystrokes."),
    h2("Questions for your next review"),
    ul([
          "What would we see if we measured verification economics for one week?",
          "Which dependency owns the majority of the cost or delay?",
          "What policy or architecture assumption does the data contradict?",
          "What is the smallest experiment that would change our model?"
    ]),
    p(
      "The organisations that improve verification economics are not those with the best slogans. They are those that observe honestly, measure without vanity metrics, and update the model when the bill or the trace disagrees with the diagram.",
    ),
    cta(
      "Need help reading verification economics in your stack?",
      "Bring your dashboards, invoices, and last incident. We will help you observe what matters, measure what costs, and model what to change.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Did AI reduce engineering cost?",
      "Generation got cheaper; review, test, and operational assurance often got more expensive.",
    ],
    [
      "What became the bottleneck?",
      "Verification — code review capacity, CI time, integration test maintenance.",
    ],
    [
      "How should teams adapt?",
      "Invest in test harnesses, smaller PRs, and automated checks before scaling generation.",
    ],
    [
      "Is more code always progress?",
      "Only if the organisation can absorb, review, and operate it.",
    ],
  ],
}
