import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const backupSuccessNotRestorePost: Article = {
  slug: "backup-success-not-restore",
  title: "Backup Success Is Not Restore Success",
  deck: "Green backup jobs do not answer whether the business can be reconstructed — dependencies, secrets, DNS, integrity.",
  category: "Engineering",
  date: "16 September 2026",
  dateIso: "2026-09-16",
  readTime: readTime(390),
  author,
  tags: ["Disaster recovery","Backups","Operations","Resilience"],
  art: { label: "Engineering", cells: ["Green backup jobs do not answer whether the business can be reconstru…"], tone: "field" },
  body: [
    p(
      "Backup and restore is discussed in architecture reviews and post-mortems, often as a reliability topic or a FinOps exercise. The conversation stops at policy slides. Constrange's Observe → Measure → Model series treats it as an engineering economics problem: what does the system actually do, what does that work cost, and what model explains the gap between intent and invoice.",
    ),
    p(
      "Observe: run restore drills to a clean environment. Green backup jobs are necessary, not sufficient.",
    ),
    p(
      "Measure: time to transactional business function — login, order, payout — not tarball extracted.",
    ),
    p(
      "Model: restore = data + secrets + DNS + dependencies + integrity checks + runbooks. Backup covers data slice only.",
    ),
    h2("The green job lie"),
    p(
      "Backup dashboard shows success for 400 days. Restore drill fails: KMS key in wrong account, Terraform state stale, service mesh certs expired, feature flag defaults wrong. The business cannot reconstruct Tuesday from Sunday's snapshot.",
    ),
    fig("backup-not-restore.svg", "Backup OK path blocked by secrets and DNS before restore", "Backup success does not imply restore success."),
    h2("What backups do not capture"),
    {
      t: "table",
      caption: "Asset",
      head: ["In backup?","Restore needs"],
      rows: [
              [
                      "Database dump",
                      "Often",
                      "Correct version, migrations"
              ],
              [
                      "Secrets",
                      "Rarely",
                      "KMS, rotation state"
              ],
              [
                      "DNS",
                      "No",
                      "Registrar, TTL, health checks"
              ],
              [
                      "IAM",
                      "Partial",
                      "Roles recreated correctly"
              ],
              [
                      "Dependencies",
                      "No",
                      "Third-party keys, queues"
              ]
      ],
    },
    p(
      "Measure RTO and RPO on business outcomes. Document dependency order for restore. Automate drill environment provisioning so drills are cheap enough to run often.",
    ),
    note("Untested restore is Schrödinger's disaster recovery — both fine and catastrophic until opened."),
    h3("Drill programme"),
    ol([
          "Quarterly restore to isolated account",
          "Script business smoke tests post-restore",
          "Track gaps in a living runbook",
          "Rotate secrets used only in DR"
    ]),
    quote("Backup is a snapshot. Restore is a system reconstruction project."),
    h2("Questions for your next review"),
    ul([
          "What would we see if we measured restore readiness for one week?",
          "Which dependency owns the majority of the cost or delay?",
          "What policy or architecture assumption does the data contradict?",
          "What is the smallest experiment that would change our model?"
    ]),
    p(
      "The organisations that improve restore readiness are not those with the best slogans. They are those that observe honestly, measure without vanity metrics, and update the model when the bill or the trace disagrees with the diagram.",
    ),
    cta(
      "Need help reading restore readiness in your stack?",
      "Bring your dashboards, invoices, and last incident. We will help you observe what matters, measure what costs, and model what to change.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Are green backups enough?",
      "No — restore drills expose missing secrets, DNS, dependencies, and data integrity gaps.",
    ],
    [
      "How often should we test restore?",
      "At least quarterly for critical paths; after major architecture changes.",
    ],
    [
      "What fails in restore drills?",
      "IAM, KMS keys, cross-region replication lag, undocumented dependencies, runbook gaps.",
    ],
    [
      "What should we measure?",
      "Time to restored business function, not time to mounted volume.",
    ],
  ],
}
