import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const dependencyOnDiagramPost: Article = {
  slug: "the-dependency-nobody-put-on-the-diagram",
  title: "The dependency nobody put on the diagram",
  deck:
    "How invisible relationships between people, systems and processes create operational risk.",
  category: "Perspectives",
  date: "17 September 2026",
  dateIso: "2026-09-17",
  readTime: readTime(2000),
  author,
  tags: ["Risk", "Architecture", "Operations"],
  art: { label: "Perspectives", cells: ["The joins that never made the architecture"], tone: "dusk" },
  body: [
    p(
      "Architecture diagrams show boxes and arrows. They imply completeness. Operations lives in the gaps: the inbox that is the real queue, the analyst who is the only person who knows the mapping, the spreadsheet that is the authoritative forecast until it is not. These dependencies are rarely documented. They are load-bearing.",
    ),
    p(
      "When they fail, incidents look like system failures. Often they are relationship failures: a handoff nobody owned, a definition nobody maintained, a human bridge that went on leave. Constrange reviews programmes that priced servers and missed Sarah's inbox.",
    ),
    p(
      "Invisible dependencies are not accidents. They emerge when official design does not match how work actually moves. The organisation adapts. The adaptation becomes infrastructure without a name.",
    ),
    h2("Types of dependencies diagrams miss"),
    p(
      "People dependencies: single experts, approvers who are never in the workflow tool, managers who reconcile numbers manually. Process dependencies: tacit sequencing ('send it to Alex before finance'), exception paths that bypass controls. Data dependencies: shadow tables, exports that feed other exports, definitions that exist only in a deck from 2019.",
    ),
    fig(
      "dependency-on-diagram.svg",
      "Architecture diagram with invisible human and spreadsheet dependencies highlighted",
      "Critical paths often run through people and unofficial tools, not through the systems on the diagram.",
    ),
    ul([
      "The inbox as queue",
      "The spreadsheet as system of record",
      "The veteran as integration layer",
      "The meeting as approval gate",
      "The export-import as nightly batch",
    ]),
    h2("Why they persist"),
    p(
      "They solve real problems faster than the official path. They are politically easier than fixing the model. They are embarrassing to admit in architecture review. Documenting them feels like confessing non-compliance. So they stay invisible until they break loudly.",
    ),
    {
      t: "table",
      caption: "Official vs invisible dependency",
      head: ["Official view", "Operational reality"],
      rows: [
        ["Ticket system owns queue", "Inbox owns urgency"],
        ["CRM is customer source", "Finance definition differs"],
        ["API integrates A and B", "CSV and email integrate A and B"],
        ["Role owns approval", "Named individual owns judgement"],
        ["DR covers systems", "DR does not cover expert knowledge"],
      ],
    },
    h2("Risk when the invisible fails"),
    p(
      "Continuity risk: the expert leaves. Quality risk: the spreadsheet formula is wrong for three quarters. Compliance risk: the tacit path bypasses control. Scale risk: volume grows but the human bridge does not. Strategic risk: replatforming cuts the invisible path without replacing its function.",
    ),
    p(
      "Incidents are treated as surprises. They were predictable if anyone had mapped dependencies as operations experience them, not as procurement drew them.",
    ),
    note(
      "If your disaster recovery plan names servers but not the three people who know how data really flows, it is incomplete.",
    ),
    h2("How to surface dependencies without blame"),
    h3("Practical discovery"),
    ol([
      "Ask teams: what do you check before you trust the number?",
      "Follow one object for a week — where does it actually go?",
      "List exports that feed other systems or decks.",
      "Identify single points of human judgement in high-volume work.",
      "Compare incident stories — recurring patterns point at invisible joins.",
    ]),
    p(
      "Discovery should produce ownership conversations, not punishment. The goal is to see the real architecture.",
    ),
    {
      t: "table",
      caption: "What to do with each dependency class",
      head: ["Dependency", "Options"],
      rows: [
        ["Human bridge", "Document, duplicate skill, or redesign workflow"],
        ["Shadow spreadsheet", "Formalise, replace, or eliminate need"],
        ["Inbox queue", "Migrate to owned queue with SLA"],
        ["Tacit approval", "Encode decision rights or accept risk"],
        ["Export chain", "Automate with contract or stop exporting"],
      ],
    },
    h2("Putting dependencies on the diagram"),
    p(
      "Update architecture artefacts to include operational truth. Not every shadow should become official. Some should be removed. The diagram should show choices: accepted risk, planned retirement, or intentional formalisation.",
    ),
    quote(
      "The system diagram describes what we bought. The dependency map describes what we depend on.",
    ),
    h2("Governance that keeps the map honest"),
    p(
      "Review dependencies when programmes launch, when people leave, and when volume shifts. Make 'who owns the join' a standard question in design review. Treat invisible load-bearing paths as risk registers, not gossip.",
    ),
    p(
      "Constrange helps organisations draw the second diagram — the one operations already carries in their heads. When invisible dependencies are named, replatforming stops surprise. Risk becomes a choice.",
    ),
    h2("Incident stories as mapping tools"),
    p(
      "Post-incident reviews often name a system failure when the break was a person on leave, a stale export, or an approval that lived only in chat. Collect ten stories. Patterns reveal dependencies no CMDB contains.",
    ),
    p(
      "Use stories in architecture review the same way you use diagrams: not for blame, for completeness.",
    ),
    h2("Maintaining the second diagram"),
    ul([
      "Update when programmes go live or people leave.",
      "Tag dependencies: formalise, replace, accept risk.",
      "Review quarterly with operations, not only IT.",
      "Link to stop list and first slice plans.",
      "Retire entries when official path truly carries load.",
    ]),
    p(
      "A living map beats a perfect map that is outdated before print.",
    ),
    cta(
      "Planning change without a map of real dependencies?",
      "Bring the architecture and the incident stories. We will help you see what the diagram left out.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Will surfacing shadow systems create compliance issues?",
      "Ignoring them creates larger issues. Surfacing enables a deliberate choice: formalise, replace, or accept risk with eyes open.",
    ],
    [
      "How detailed should the map be?",
      "Detailed enough that if one node disappeared tomorrow, you know what breaks. Start with top ten load-bearing paths.",
    ],
    [
      "Is this the same as shadow IT?",
      "Related. Shadow IT is often a subset of invisible dependencies — unofficial tools carrying official load.",
    ],
    [
      "Who should own the dependency map?",
      "Operations and architecture jointly. If only IT owns it, human bridges stay invisible.",
    ],
  ],
}
