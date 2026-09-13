import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const smallDecisionDownstreamPost: Article = {
  slug: "the-decision-that-looks-small-until-you-follow-it-downstream",
  title: "The decision that looks small until you follow it downstream",
  deck:
    "A naming choice, a field definition, a routing rule — small decisions compound into large consequences.",
  category: "Perspectives",
  date: "1 November 2026",
  dateIso: "2026-11-01",
  readTime: readTime(1500),
  author,
  tags: ["Decisions", "Downstream effects", "Design"],
  art: { label: "Perspectives", cells: ["Small decisions compound downstream"], tone: "frost" },
  body: [
    p(
      "Some decisions arrive as footnotes. A column name in the data model. A default status in the workflow. A routing rule that sends one exception type to a shared inbox. They are approved in minutes because nobody expects them to matter. Years later they own reconciliation meetings, migration scope, and the unofficial spreadsheet that exists because the official field never matched how operations thinks.",
    ),
    p(
      "Small decisions are small only at the point of choice. Downstream they multiply: every report, integration, approval, and audit trail inherits them. Constrange treats these as design decisions, not implementation detail — because that is what they become once encoded.",
    ),
    p(
      "Following a decision downstream is uncomfortable work. It slows the meeting that wanted a quick yes. It also prevents the programme that discovers, too late, that a 'minor' choice became load-bearing infrastructure.",
    ),
    h2("What counts as a small decision"),
    p(
      "Naming — customer, client, account, party — when each team already uses a different word. Field optional versus required. Enum values that merge distinct operational states. Routing that treats unlike cases alike for convenience. Timestamp timezone. Identifier format. Retention default. Each looks local. Each travels.",
    ),
    fig(
      "small-decision-downstream.svg",
      "Single small node branching into many downstream systems and reports",
      "One field choice replicated across integrations becomes policy by accident.",
    ),
    ul([
      "Name choices that become API contracts",
      "Defaults that become behaviour",
      "Routing rules that become org structure",
      "Nullable fields that become 'unknown' in every dashboard",
      "Codes that collapse exceptions into false certainty",
    ]),
    h2("How small choices compound"),
    p(
      "Encodings are sticky. Changing a field after go-live touches extracts, transforms, access rules, training, and external parties who built against your schema. Teams adapt around the choice instead of changing it — the unofficial path grows roots.",
    ),
    {
      t: "table",
      caption: "Small decision, large downstream bill",
      head: ["At decision time", "Downstream at year two"],
      rows: [
        ["Quick enum for demo", "Reporting categories finance cannot reconcile"],
        ["Shared inbox routing", "Hidden queue with no SLA owner"],
        ["Optional address field", "Failed deliveries and manual correction"],
        ["Friendly display name in API", "Breaking change for three integrators"],
        ["Single timezone assumption", "Regulatory timestamps contested in audit"],
      ],
    },
    note(
      "If nobody asked who consumes the field outside this sprint, the decision is not small — it is unowned.",
    ),
    h2("Three questions before you say yes"),
    h3("Who reads this later?"),
    p(
      "List consumers: the next system, finance, regulators, partners, the analyst who exports weekly. If the list is longer than the room expected, slow down.",
    ),
    h3("What breaks if we change it?"),
    p(
      "If the honest answer is 'everything', treat the choice as architecture — review, document, version — not as a ticket closed before lunch.",
    ),
    h3("What unofficial path does this create?"),
    p(
      "If operations will maintain a parallel column in a sheet because the official one does not match judgement, you are not saving time. You are scheduling shadow work.",
    ),
    quote(
      "Small decisions are large decisions that have not been followed downstream yet.",
    ),
    h2("Following one decision for thirty minutes"),
    ol([
      "Pick the field or rule on the slide.",
      "Trace it to the next system, the report, and the exception path.",
      "Ask operations what they do when the value is wrong or missing.",
      "Ask finance how it aggregates.",
      "Write one sentence of ownership: who can change this later.",
    ]),
    p(
      "Thirty minutes rarely kills velocity. It often kills a migration surprise. Constrange uses this walk in design reviews because it surfaces load-bearing choices while they are still cheap.",
    ),
    h2("When speed is worth the downstream cost"),
    p(
      "Sometimes a provisional choice is correct — if labelled provisional: owner, retirement date, list of systems that must not depend on it yet. Speed without that label is debt with amnesia.",
    ),
    p(
      "Permanent choices deserve permanent review: definition agreed across consumers, change process, test for breaking impact. The decision stays small only if the organisation treats it as small on purpose — not by accident.",
    ),
    h2("Migration archaeology starts with small decisions"),
    p(
      "Late in replatforming, teams dig through years of encoded choices nobody documented. The migration is not slow because the new platform is weak. It is slow because each small field carries hidden consumers — a regulator report, a partner feed, a bonus calculation, a manual check someone added in 2019.",
    ),
    p(
      "Archaeology is expensive because the original decision took minutes. Following downstream before encode is how you avoid paying twice.",
    ),
    h2("Naming choices that travel"),
    p(
      "Some decisions are genuinely local: a button label, a help text, a sort order that affects only one screen. Others travel silently: identifiers in APIs, enums in extracts, routing rules that decide which queue receives exceptions. The discipline is to know which kind you are making before you approve it. Local choices can move fast. Travelling choices need a consumer list.",
    ),
    p(
      "Consumer lists sound bureaucratic until migration week, when fourteen teams claim breakage from one renamed field. The list is cheaper at design time than the war room at cutover.",
    ),
    h2("Product velocity and downstream debt"),
    p(
      "Product teams are rewarded for shipping. Downstream consumers are rewarded for stability. Small decisions become the friction between those incentives. A product manager hears 'can we change it later?' as flexibility. A finance analyst hears it as another quarter of manual reconciliation.",
    ),
    p(
      "Healthy product organisations tier decisions: provisional with expiry, shared with owner, breaking with versioned change. Unhealthy ones treat every field as provisional until someone screams. Screaming is a expensive governance model.",
    ),
    h2("Partners and regulators as hidden consumers"),
    p(
      "Internal downstream is hard enough. External consumers are worse because they arrive late: a partner feed that assumed a code value, a regulator report that hard-coded a category, an auditor who compares this year to last year on a definition that shifted in March. Following downstream includes asking who outside the building will notice — and when they will notice.",
    ),
    h2("Technical debt vs definition debt"),
    p(
      "Engineering teams track technical debt. Few teams track definition debt: fields that mean different things in different systems, enums that merged two exception types for convenience, routing rules that hid a queue instead of staffing it. Definition debt does not show in SonarQube. It shows in reconciliation hours and migration archaeology.",
    ),
    p(
      "Following a small decision downstream is how you discover definition debt before it becomes infrastructure. Thirty minutes at design time is cheaper than a quarter of forensic mapping at cutover.",
    ),
    h2("Examples that looked small on the day"),
    p(
      "A 'temporary' status code that merged two exception types became the category finance reported to the board for three years. A routing rule that sent complex cases to a shared inbox created a hidden queue with no owner and no SLA — until regulators asked about response time.",
    ),
    p(
      "These are not horror stories about careless developers. They are normal outcomes when speed wins over downstream reading. The fix is procedural, not moral: trace before encode, tier governance, name owners.",
    ),
    h2("Design reviews that protect downstream"),
    ol([
      "Invite one downstream consumer per review — rotate finance, ops, partner.",
      "Ban the phrase 'we can change it later' without a change owner.",
      "Record provisional fields in a visible register with expiry.",
      "Re-run the thirty-minute trace before major go-lives.",
      "Retire one legacy field per quarter instead of accumulating silent debt.",
    ]),
    p(
      "Reviews that protect downstream feel slower for a week and faster for three years. That trade is the point.",
    ),
    h2("Governance that fits the size of the choice"),
    p(
      "Not every field needs a council. A simple tiering model works: provisional choices with expiry; shared definitions with named owner; breaking identifiers with versioned change. Governance fails when everything is urgent or nothing is reviewed.",
    ),
    {
      t: "table",
      caption: "Tiering small decisions",
      head: ["Choice type", "Minimum governance"],
      rows: [
        ["Display label only", "Document in release notes"],
        ["Shared enum across teams", "Named owner and change log"],
        ["Identifier in API or extract", "Versioning and consumer notice"],
        ["Routing that hides exceptions", "SLA owner and monthly review"],
        ["Provisional demo field", "Expiry date and dependency ban"],
      ],
    },
    h2("Questions for your next design review"),
    ul([
      "Who consumes this field outside the building?",
      "What report breaks if we rename it?",
      "What exception does this routing hide?",
      "Which team will re-key because the definition is wrong?",
      "Is this provisional — and who retires it?",
    ]),
    p(
      "If reviewers cannot trace downstream, the decision is not approved — it is deferred until someone follows it.",
    ),
    p(
      "Constrange uses downstream walks early because migration archaeology is the tax on small decisions nobody followed. Paying thirty minutes at design time beats paying quarters at cutover.",
    ),
    h2("Building the habit on high-velocity teams"),
    p(
      "High-velocity teams resist downstream walks because they feel like brakes. Reframe them as insurance: the thirty minutes that prevents a migration war room. Teams that adopt the habit ship as fast — they simply ship fewer silent dependencies.",
    ),
    p(
      "The decision that looks small is often the one that travels farthest. Follow it once. Encode it once. Own it once. That is cheaper than discovering it again at cutover, when every consumer arrives at once and everyone is surprised except operations.",
    ),
    p(
      "Small decisions are how large organisations store their future migration cost. Follow them downstream while they are still cheap to change.",
    ),
    p(
      "If you cannot name who consumes a field, you are not making a small decision. You are making an unowned one — and unowned decisions grow.",
    ),
    cta(
      "Approving 'small' choices that keep returning as rework?",
      "Walk one decision downstream with us before it becomes infrastructure.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Will this slow every delivery?",
      "Only the choices that travel — names, identifiers, routing, definitions. That is most of the expensive ones.",
    ],
    [
      "Who should run the downstream walk?",
      "A designer or architect with operations in the room — not the same person who wants the quick yes.",
    ],
    [
      "Can we fix bad small decisions later?",
      "Often at high cost. Early definition work is cheaper than migration archaeology.",
    ],
    [
      "What about agile 'good enough for now'?",
      "Good enough needs an owner and a retirement plan. Otherwise 'now' becomes production forever.",
    ],
  ],
}
