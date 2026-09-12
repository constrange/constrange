import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const hiddenCostOneMoreToolPost: Article = {
  slug: "the-hidden-cost-of-just-one-more-tool",
  title: 'The hidden cost of "just one more tool"',
  deck:
    "How organisations accidentally create complexity by solving every problem with another system.",
  category: "Perspectives",
  date: "13 September 2026",
  dateIso: "2026-09-13",
  readTime: readTime(2000),
  author,
  tags: ["Tool sprawl", "Complexity", "Systems", "Integration"],
  art: { label: "Perspectives", cells: ["Every problem becomes another login"], tone: "coral" },
  body: [
    p(
      "The phrase sounds reasonable in the moment: we just need one more tool. A specialist app for intake. A layer for analytics. A copilot on top of the inbox. Each addition solves a local pain. None of them arrive alone. They arrive with accounts, connectors, training, a vendor relationship, and a new place where work can stall when the integration is weaker than the demo suggested.",
    ),
    p(
      "Organisations do not plan complexity. They accumulate it. Each tool is justified on its own merits. The portfolio is never reviewed as a portfolio. Constrange sees estates where the cost of moving a fact from A to B exceeds the cost of the work itself, because five systems each own a fragment of the truth and nobody owns the join.",
    ),
    p(
      "Tool sprawl is not a failure of discipline alone. It is a failure of problem framing. When every symptom becomes a software category, the organisation buys its way out of thinking. The hidden cost is not the licence line. It is the operating model you accidentally build around the sprawl.",
    ),
    h2("How one more tool becomes ten"),
    p(
      "The first tool fills a gap. The second overlaps the first but does one thing better. The third integrates with the second but not the first. The fourth is required because leadership wants a dashboard that none of the others provide without export. Within eighteen months, a team maintains credentials, field mappings, and exception paths across a mesh nobody designed.",
    ),
    fig(
      "hidden-cost-one-more-tool.svg",
      "Diagram showing how adding tools increases integration debt",
      "Each new tool adds a visible licence and an invisible web of joins between systems.",
    ),
    ul([
      "Local optimisation: each team buys what helps them this quarter.",
      "Category thinking: problems are named as 'we need a CRM feature' rather than 'intake is broken'.",
      "Integration as afterthought: connectors are scoped after signature.",
      "No retirement rule: tools are added, nothing is removed.",
      "Shadow tools: spreadsheets and inboxes fill gaps the mesh does not.",
    ]),
    h2("The visible cost vs the real cost"),
    p(
      "Procurement sees seats and subscriptions. Finance sees a growing SaaS line. What rarely appears is the tax on every change: when policy shifts, how many systems must be updated? When a field definition changes, how many reports break? When someone leaves, how many admin panels lose their only expert?",
    ),
    {
      t: "table",
      caption: "Licence cost vs operating tax",
      head: ["Cost", "Usually visible?", "Who pays"],
      rows: [
        ["Annual licence fees", "Yes", "Budget owner"],
        ["Implementation services", "Partially", "Programme"],
        ["Integration maintenance", "Rarely", "IT / operations"],
        ["Time lost at joins", "No", "Frontline teams"],
        ["Decision latency", "No", "Leadership"],
        ["Risk from inconsistent data", "Only after failure", "Organisation"],
      ],
    },
    p(
      "The operating tax compounds quietly. Meetings multiply to reconcile numbers that should match. Teams build parallel trackers because the official stack does not support how they actually decide. Trust in data falls. When trust falls, people revert to conversation and private files. The mesh has not reduced work. It has relocated it.",
    ),
    h2("Why smart teams still add tools"),
    p(
      "Adding a tool is socially easy. It shows responsiveness. It avoids the harder conversation about ownership, definition, or stopping work that should not exist. It also outsources blame: if the vendor fails, the vendor failed. If the process fails, the process is harder to see.",
    ),
    p(
      "Platforms encourage sprawl. Best-of-breed marketing rewards narrow excellence. Enterprise suites promise consolidation but often deliver another layer. AI products arrive with urgency. In each case, the question 'what will we stop using?' is skipped because stopping requires politics that buying does not.",
    ),
    note(
      "If no tool is retired when a new one arrives, you are not replacing capability. You are adding surface area.",
    ),
    h2("Symptoms you are paying the hidden tax"),
    p(
      "You may already be there. Reports disagree and the meeting to reconcile them is recurring. New hires take months to learn which system is authoritative for which fact. Integrations are person-dependent. Roadmaps list 'stabilise integrations' every year and never finish. Leadership asks for a single view; teams deliver another dashboard.",
    ),
    {
      t: "table",
      caption: "Sprawl signals",
      head: ["Signal", "Likely cause"],
      rows: [
        ["Same metric, three values", "No owned definition"],
        ["'Export to Excel' is a step in every process", "Systems do not meet at the join"],
        ["Integration team is a bottleneck", "Mesh grew faster than governance"],
        ["Vendor count rises, outcomes flat", "Tools substituted for design"],
        ["Shadow spreadsheets proliferate", "Official path is too slow or incomplete"],
      ],
    },
    h3("Questions before another purchase"),
    ol([
      "Which tool does this replace, not supplement?",
      "Who owns the join after go-live, in hours per week?",
      "What definition of the core object must be agreed first?",
      "What happens to the unofficial path when this goes live?",
      "What will we stop funding to pay the absorption cost?",
    ]),
    h2("What to do when you already have sprawl"),
    p(
      "You will not fix sprawl with another platform designed to 'sit above everything'. Start with a map of facts, not systems. Which five definitions, if agreed, would remove the most reconciliation work? Which joins fail every week? Which tools have fewer than twenty active users and no unique capability?",
    ),
    p(
      "Retirement is a programme, not a hope. Pick one redundant tool with a named owner and a date. Consolidate one join before you add another product. Make 'what we stop using' a required field on every business case. None of this is glamorous. It is how estates shrink without a catastrophic big bang.",
    ),
    quote(
      "Complexity is not what you intended to build. It is what you did not intend to remove.",
    ),
    h2("A governance habit that prevents the next tool"),
    p(
      "Run a quarterly portfolio review that is not a licence audit. Ask which problems the estate solves, which problems it creates, and which problems are still solved only in shadow. Ask where attention is going. Ask whether a proposed tool removes a join or adds one.",
    ),
    p(
      "The hidden cost of just one more tool is cumulative. Organisations rarely collapse from one bad purchase. They slow from dozens of reasonable ones that nobody connected. The fix is not abstinence from software. It is treating every addition as a change to the operating model, with retirement, ownership, and definition on the same slide as the feature list.",
    ),
    h2("Portfolio questions once a quarter"),
    ol([
      "Which three tools touch the same object definition?",
      "Which integration would hurt most if its maintainer left?",
      "Which licence could we remove without a customer noticing?",
      "Which dashboard duplicates an existing metric?",
      "Which new request adds a join versus removes one?",
    ]),
    p(
      "Quarterly discipline beats annual panic. Sprawl is a portfolio problem. It will not be solved by a single 'platform' purchase that adds another box.",
    ),
    h2("When one more tool is genuinely right"),
    p(
      "Addition is honest when it retires something, when it owns a join that is currently manual, when definition is agreed, and when absorption is funded. The test is subtraction: something must stop.",
    ),
    p(
      "If subtraction is impossible politically, the organisation is not ready for addition. It is ready for a conversation about priorities, not another login.",
    ),
    cta(
      "Feeling the weight of too many tools?",
      "Bring your estate as it is, including the unofficial paths. We will help you find what to simplify before you add anything else.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Should we consolidate onto one suite?",
      "Only if the work is standard enough that one vendor's model fits. Consolidation without definition work often moves sprawl inside a single logo.",
    ],
    [
      "How many tools is too many?",
      "There is no magic number. The test is whether facts have owners, joins have names, and retirement is real. If not, you are already paying the tax.",
    ],
    [
      "Can integration platforms solve sprawl?",
      "They can reduce custom glue. They do not remove the need to agree definitions or retire redundant apps.",
    ],
    [
      "What if each tool has a different sponsor?",
      "Then portfolio governance must sit above sponsors. Local optimisation without a join owner is how sprawl becomes permanent.",
    ],
  ],
}
