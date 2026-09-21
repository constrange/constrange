import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const unrecordedDependencyPost: Article = {
  slug: "the-most-dangerous-dependency-is-the-one-nobody-recorded",
  title: "The most dangerous dependency is the one nobody recorded",
  deck: "Unwritten relationships between people, tools and timing that only surface when they break.",
  category: "Perspectives",
  date: "24 November 2025",
  dateIso: "2025-11-24",
  readTime: readTime(1500),
  author,
  tags: ["Risk", "Dependencies", "Operations"],
  art: {
    label: "Perspectives",
    cells: ["The join that existed only in memory"],
    tone: "dusk",
  },
  body: [
    p(
      "Dependencies are usually drawn as arrows between systems. Procurement records them. Architecture reviews them. Disaster recovery names the servers. But the dependencies that actually stop work are often nowhere on any register: the analyst who reconciles two definitions before month-end, the export that must finish before a batch job runs, the manager who signs off in chat because the workflow tool does not allow the exception.",
    ),
    p(
      "These relationships are unwritten. They formed because someone needed speed, because an integration was deferred, or because the official model never matched how judgement moves through the organisation. They work quietly for years. Nobody records them because recording feels like admitting the design is incomplete. Then someone leaves, a tool changes, or volume doubles — and the dependency breaks in public.",
    ),
    p(
      "Constrange treats unrecorded dependencies as operational debt. They are not accidents. They are the organisation's answer to gaps in official design. The danger is not that they exist. The danger is that nobody knows they exist until failure forces the conversation.",
    ),
    h2("What an unrecorded dependency looks like"),
    p(
      "It is rarely a missing server. It is a relationship: between a person and a deadline, between two tools connected only by email, between a definition in finance and a field in sales that were never aligned. It has no owner in the CMDB. It may have no name at all — only a habit. 'We always wait for Alex.' 'Finance needs the sheet by Thursday.' 'Do not submit until the legacy export finishes.'",
    ),
    fig(
      "unrecorded-dependency.svg",
      "System diagram with invisible unrecorded dependencies highlighted",
      "The critical path often runs through relationships nobody wrote down.",
    ),
    ul([
      "The person who is the integration layer between two teams",
      "The timing rule that exists only in conversation",
      "The spreadsheet that feeds three decks and one batch job",
      "The approval that happens in chat, not in the tool",
      "The definition mismatch everyone works around but nobody fixes",
    ]),
    h2("Why nobody records them"),
    p(
      "Recording feels like exposure. If you write down that the real queue is an inbox, someone may ask why the ticket system exists. If you document that month-end depends on one analyst's export, someone may ask about succession. If you admit the API does not integrate what operations need, someone may reopen a programme that was marked complete. Silence is safer in the short term.",
    ),
    {
      t: "table",
      caption: "Recorded vs unrecorded",
      head: ["Recorded dependency", "Unrecorded dependency"],
      rows: [
        ["In architecture diagram", "In someone's head"],
        ["Owned by a system team", "Owned by whoever is available"],
        ["Tested in DR exercise", "Discovered in incident"],
        ["In procurement scope", "Grew after go-live"],
        ["Updated on change calendar", "Updated when it breaks"],
      ],
    },
    p(
      "The table explains why incidents feel surprising. The organisation planned for dependencies it could see. It operated on dependencies it never named.",
    ),
    h2("When unrecorded dependencies surface"),
    h3("People leave"),
    p(
      "The most common trigger. The person who held the mapping, ran the export, or knew which definition to use moves on. Nobody knew the work was a dependency because it looked like 'just what they did'. Replacement hiring begins. Operations discovers the role was not a role — it was infrastructure.",
    ),
    h3("Systems change"),
    p(
      "A field is renamed. An API version deprecates. A spreadsheet moves to read-only. Each change is small in the programme plan. Each change breaks an unrecorded chain that connected old behaviour to new reporting. The programme team marks the ticket done. Operations marks the week lost.",
    ),
    h3("Volume shifts"),
    p(
      "The human bridge that worked for fifty cases a week fails at five hundred. The inbox queue that was manageable becomes a backlog nobody owns. Timing assumptions — 'it always finishes overnight' — stop holding. Unrecorded dependencies often have no SLA because they were never acknowledged as dependencies at all.",
    ),
    note(
      "If your risk register names systems but not the three relationships operations would mention first, it is incomplete.",
    ),
    h2("The cost of surprise"),
    p(
      "Unrecorded dependencies convert operational adaptation into sudden risk. Continuity plans fail. Replatforming cuts paths nobody mapped. Audits discover controls that were bypassed by habit, not malice. Teams burn time rebuilding knowledge that lived in one person or one undocumented step. Leadership interprets failure as execution weakness when it was inventory weakness.",
    ),
    quote(
      "The dependency nobody recorded is the one that owns your quarter when it breaks.",
    ),
    h2("Surfacing dependencies without a witch hunt"),
    ol([
      "Ask teams: what must be true before you trust this number or this handoff?",
      "Follow one high-volume object for a week — map every person, tool, and delay.",
      "Review the last five incidents for recurring human or timing bridges.",
      "List exports, inboxes, and chat approvals on the critical path.",
      "Compare what new hires are told to what veterans actually check.",
    ]),
    p(
      "Discovery should produce a map operations recognises — not a diagram that looks good in review and wrong on the floor.",
    ),
    h3("What good recording looks like"),
    p(
      "Name the relationship. Name an owner. State what breaks if it fails. Tag it: formalise, replace, or accept risk. Update when people leave or tools change. The goal is not zero unofficial dependencies. The goal is zero surprises about what you depend on.",
    ),
    {
      t: "table",
      caption: "What to do with each unrecorded dependency",
      head: ["Dependency type", "Options"],
      rows: [
        ["Human bridge", "Document, duplicate skill, redesign workflow"],
        ["Timing rule", "Encode in schedule with owner and alert"],
        ["Shadow spreadsheet", "Formalise, replace, or eliminate need"],
        ["Chat approval", "Encode decision rights or accept risk"],
        ["Definition mismatch", "Agree one definition or name reconciliation owner"],
      ],
    },
    h2("Governance that keeps the map current"),
    p(
      "Record dependencies when programmes go live, when people change roles, and when volume shifts materially. Make 'what breaks if this disappears?' a standard question in design review — not only 'what does the API connect?' Review the map with operations quarterly. Link it to succession planning and incident learning.",
    ),
    p(
      "Constrange helps organisations build the second inventory — the one of relationships, timing, and human bridges that the official architecture never carried. When unrecorded dependencies are named, risk becomes a choice. Programmes stop deleting infrastructure nobody knew was infrastructure.",
    ),
    h2("Dependencies between timing and trust"),
    p(
      "Some unrecorded dependencies are not people or tools but timing: the export that must finish before the batch, the reconciliation that must happen before the board deck, the quiet hour when nobody schedules meetings because finance is closing. These rules live in culture, not runbooks. They break when time zones shift, when volume grows, or when a new team joins without inheriting the folklore.",
    ),
    p(
      "Trust dependencies are equally invisible. Operations trusts finance's number because someone once validated the mapping. Sales trusts the inventory figure because a veteran said it was reliable. Trust is efficient until the person or the validation disappears. Recording trust means recording what was verified, when, and by whom — not only which system displayed the figure.",
    ),
    h3("After an incident"),
    p(
      "Post-incident reviews often stop at root cause in a system. Push one level further: what relationship failed? Who was assumed available? What timing rule was violated? Feed those answers back into the dependency map. Incidents are expensive discovery. Waste them if the map does not update.",
    ),
    h2("Building a culture that records honestly"),
    p(
      "Recording unwritten dependencies requires psychological safety. Teams must be able to say 'we depend on this inbox' without immediate punishment. Leadership must respond with design — owner, SLA, succession — not with 'use the official tool' when the official tool cannot carry the load. Honesty without response drives hiding. Hiding grows the next unrecorded dependency.",
    ),
    p(
      "Start small. Record the top three relationships operations would name if asked directly. Review them monthly. Retire entries when the official path truly absorbs the function. Celebrate when a programme removes a bridge instead of when it launches another logo.",
    ),
    h2("Recording before replatforming"),
    p(
      "Replatforming without a dependency map is surgery without imaging. Teams cut integrations that were never on the diagram but carried the quarter. Go-live succeeds in the programme report and fails in operations the following Monday. Recording dependencies before change is not bureaucracy — it is how you avoid deleting infrastructure nobody knew was infrastructure.",
    ),
    p(
      "Sequence matters: map, decide formalise or replace, then migrate. Skipping the map saves a workshop and costs a recovery programme.",
    ),
    h2("Patterns across sectors"),
    p(
      "In regulated firms, unrecorded dependencies often carry judgement: overrides, client-specific terms, tacit sign-off. In high-growth firms, they carry speed: side integrations, manual reconciliations, named experts who never made the org chart. In cost programmes, they carry survival: bridges between systems integration never funded. The tools differ. The pattern is stable: official design incomplete, operations adapts, adaptation becomes infrastructure without a register.",
    ),
    p(
      "Sector language changes. The inventory move does not: record what you depend on before it depends on you.",
    ),
    h2("Questions for your next risk review"),
    ul([
      "Which relationships would break the quarter if one person were unavailable for two weeks?",
      "What timing rules exist only in conversation, not in runbooks?",
      "Which exports or inboxes sit on the critical path but not in the CMDB?",
      "When did we last update our dependency map after a go-live or a departure?",
      "Do incident reviews feed back into what we record?",
    ]),
    p(
      "If the room answers with silence, the most dangerous dependencies are still unrecorded — and the next surprise is already scheduled.",
    ),
    cta(
      "Planning change without a map of what you actually depend on?",
      "Bring the architecture and the incident stories. We will help you record what matters before it breaks.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Is this the same as shadow IT?",
      "Related. Shadow tools are often unrecorded dependencies. The focus here is any unwritten relationship — people, timing, definitions — not only unofficial software.",
    ],
    [
      "Will recording create compliance problems?",
      "Ignoring unrecorded dependencies creates larger problems. Recording enables deliberate choice: formalise, replace, or accept risk with eyes open.",
    ],
    [
      "How detailed should the map be?",
      "Detailed enough that if one node disappeared tomorrow, you know what breaks. Start with the top ten load-bearing relationships.",
    ],
    [
      "Who should own the dependency map?",
      "Operations and architecture jointly. If only IT owns it, human and timing bridges stay invisible.",
    ],
  ],
}
