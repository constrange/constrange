import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const deploymentNotUnitOfChangePost: Article = {
  slug: "deployment-not-unit-of-change",
  title: "The Deployment Is Not the Unit of Change",
  deck: "Compare one large change versus twenty small ones. Change size may matter more than deployment frequency alone.",
  category: "Engineering",
  date: "19 September 2026",
  dateIso: "2026-09-19",
  readTime: readTime(400),
  author,
  tags: ["Deployments","CI/CD","Risk","Engineering"],
  art: { label: "Engineering", cells: ["Compare one large change versus twenty small ones"], tone: "dusk" },
  body: [
    p(
      "Deployment strategy is discussed in architecture reviews and post-mortems, often as a reliability topic or a FinOps exercise. The conversation stops at policy slides. Constrange's Observe → Measure → Model series treats it as an engineering economics problem: what does the system actually do, what does that work cost, and what model explains the gap between intent and invoice.",
    ),
    p(
      "Observe: histogram deploy diff size — lines, files, services touched. Frequency without size context misleads.",
    ),
    p(
      "Measure: incident rate and rollback success vs change size bucket. Twenty small deploys ≠ one deploy twenty times larger.",
    ),
    p(
      "Model: risk scales with change entropy — files touched, teams involved, feature flags flipped — not only deploy count.",
    ),
    h2("Frequency without size"),
    p(
      "DORA celebrates deploy frequency. Teams ship once a week — one 8,000-line merge. Another ships daily — twenty-line fixes. Same metric, different blast radius. The unit of change is the diff, not the pipeline run.",
    ),
    fig("deployment-unit-of-change.svg", "One large change vs twenty small changes with different blast radius", "Change size shapes rollback and diagnosis."),
    h2("Large change pathology"),
    ul([
          "Review skims large diffs",
          "Tests added after the fact",
          "Rollback unclear which commit to revert",
          "Multiple features share one flag",
          "Branch lives long enough to diverge"
    ]),
    {
      t: "table",
      caption: "Pattern",
      head: ["Risk","Mitigation"],
      rows: [
              [
                      "One large weekly deploy",
                      "High blast radius",
                      "Split by feature, stack behind flags"
              ],
              [
                      "Many small deploys",
                      "Lower per change",
                      "Requires mature CI and observability"
              ],
              [
                      "Hotfix on giant branch",
                      "Highest",
                      "Trunk-based development"
              ]
      ],
    },
    note("Deploying often without shrinking change size is motion, not safety."),
    h3("Change size as metric"),
    ol([
          "Track diff size and files touched per deploy",
          "Set team policy max PR size",
          "Correlate incidents to deploy size buckets",
          "Prefer feature flags over long branches"
    ]),
    quote("The deploy button is honest. The change behind it may not be."),
    h2("Questions for your next review"),
    ul([
          "What would we see if we measured change size for one week?",
          "Which dependency owns the majority of the cost or delay?",
          "What policy or architecture assumption does the data contradict?",
          "What is the smallest experiment that would change our model?"
    ]),
    p(
      "The organisations that improve change size are not those with the best slogans. They are those that observe honestly, measure without vanity metrics, and update the model when the bill or the trace disagrees with the diagram.",
    ),
    cta(
      "Need help reading change size in your stack?",
      "Bring your dashboards, invoices, and last incident. We will help you observe what matters, measure what costs, and model what to change.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Is deploy frequency always good?",
      "Only with small change size and strong rollback. Large infrequent deploys carry different risk.",
    ],
    [
      "What is the unit of change?",
      "The diff that moves through review, test, and production — not the deploy button click.",
    ],
    [
      "How do large changes fail?",
      "Harder review, weaker test coverage, ambiguous rollback, long-lived branches.",
    ],
    [
      "What should we measure?",
      "Change size distribution, rollback rate, and mean time to diagnose per deploy size bucket.",
    ],
  ],
}
