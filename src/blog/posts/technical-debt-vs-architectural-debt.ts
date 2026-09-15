import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const technicalDebtVsArchitecturalDebtPost: Article = {
  slug: "technical-debt-vs-architectural-debt",
  title: "Technical debt vs architectural debt: they are not the same problem",
  deck:
    "Code-level debt versus decisions that constrain future architecture, data, scaling, security or organizational change.",
  category: "Engineering",
  date: "18 December 2026",
  dateIso: "2026-12-18",
  readTime: readTime(1500),
  author,
  tags: ["Technical debt", "Architecture", "Constraints", "Programme design"],
  art: { label: "Engineering", cells: ["Refactoring code does not unwind a bad boundary"], tone: "clay" },
  body: [
    p(
      "Engineering teams know technical debt: shortcuts in code, missing tests, outdated libraries, modules nobody dares touch. Refactoring backlog items, sprint margins, and 'we will fix it later' that later never arrives. Architectural debt is different. It is the debt of decisions — boundaries drawn in haste, data models that encode one region's policy as global truth, integrations that bypass the system of record, org structures mirrored into software so tightly that reorganisation requires a programme.",
    ),
    p(
      "Treating both as 'tech debt' produces the wrong remedy. You can refactor a service. You cannot refactor away a monolith that is also the legal system of record without a migration programme, executive sponsorship, and operational cutover. You can upgrade a library. You cannot upgrade away from a vendor contract that owns your customer identity.",
    ),
    p(
      "Constrange separates the two because the constraint map differs. Technical debt constrains velocity inside a team. Architectural debt constrains what the organisation can become — scale, security posture, data authority, speed of change across units.",
    ),
    h2("Definitions that hold up in steering meetings"),
    p(
      "Technical debt lives in implementation: code quality, test coverage, deployment hygiene, observability gaps. Remedies are engineering-led — refactors, incremental improvement, strangler patterns on bounded components. Architectural debt lives in structure: which system owns which truth, how services communicate, where permissions are enforced, how data crosses borders, which decisions were frozen into platforms or contracts.",
    ),
    fig(
      "technical-vs-architectural-debt.svg",
      "Two layers: code tangled below, rigid boxes and arrows above labelled with org and vendor boundaries",
      "Cleaning the bottom layer does not unlock the top layer if the shape is wrong.",
    ),
    {
      t: "table",
      caption: "Two debts, two remedies",
      head: ["Technical debt", "Architectural debt"],
      rows: [
        ["Local to codebase or service", "Spans systems, vendors, and org units"],
        ["Symptom: slow feature delivery", "Symptom: impossible migration or policy change"],
        ["Remedy: refactor, test, modernise stack", "Remedy: redesign boundaries, migrate, renegotiate"],
        ["Owner: engineering team", "Owner: architecture, product, executive sponsor"],
        ["Paydown in sprints", "Paydown in programmes measured in quarters"],
      ],
    },
    h2("How architectural debt gets created"),
    p(
      "It rarely arrives as a bad decision on day one. It accretes from expedient choices under deadline: duplicate customer tables because the CRM project slipped, point-to-point integrations because the enterprise bus was 'too slow', a regional exception baked into core schema because headquarters wanted a quick win, shadow APIs because the official platform could not ship in time.",
    ),
    p(
      "Each choice was rational in context. Combined, they constrain the future: you cannot consolidate data without reconciling three definitions of customer; you cannot enforce zero-trust while a bypass integration carries production traffic; you cannot reorganise without rewriting role models embedded in ten services.",
    ),
    ul([
      "Expedient integration over canonical boundary",
      "Single system forced to be system of record and innovation sandbox",
      "Data model mirrors today's org chart",
      "Security enforced at the edge only, not at data layer",
      "Vendor capability mistaken for enterprise architecture",
    ]),
    note(
      "If paydown requires a programme slide, it is probably architectural debt — not a refactor ticket.",
    ),
    h2("Symptoms you are paying the wrong kind of attention"),
    h3("Refactors that never change outcomes"),
    p(
      "Teams modernise frameworks while migrations still fail for the same reason: nobody agrees which system owns the truth. Velocity improves locally; enterprise outcomes do not. That is architectural debt wearing a refactor costume.",
    ),
    h3("Every change touches five teams"),
    p(
      "Not because code is tangled — because boundaries were drawn without stable contracts. A pricing change requires CRM, billing, data warehouse, marketing automation, and finance exports to move in lockstep without a published owner for the definition of price.",
    ),
    h3("Scale breaks policy, not servers"),
    p(
      "Adding regions or products exposes that permissions, retention, and audit were designed for one market. CPU scales. Compliance does not. That is architectural debt in data and security design, not capacity planning.",
    ),
    h2("Data and scaling constraints"),
    p(
      "Architectural debt in data appears as conflicting golden sources, batch chains nobody dares replace, and analytics built on copies that diverged years ago. Scaling traffic is easier than scaling definitions. Programmes that buy bigger warehouses without resolving authority move faster toward conflicting board numbers.",
    ),
    p(
      "Scaling constraints also include operational shape: manual approvals hidden inside 'automated' flows, connection pools sized for demo load, queues that assume polite traffic patterns. Technical tuning helps until the architecture assumes humans or serial steps that business growth eliminates.",
    ),
    {
      t: "table",
      caption: "Scaling questions",
      head: ["Technical scaling ask", "Architectural scaling ask"],
      rows: [
        ["More CPU and memory", "Can definitions travel across regions?"],
        ["Faster queries", "Which source is authoritative under dispute?"],
        ["Auto-scaling instances", "Can permissions model new org structure?"],
        ["Cache hot paths", "Can workflow absorb parallel approvals at volume?"],
      ],
    },
    h2("Security and organisational change"),
    p(
      "Security architectural debt accumulates when shortcuts become permanent: shared service accounts, overly broad API keys, data copied for convenience into ungoverned lakes, integrations that cannot be rotated without a weekend outage. Refactoring code does not narrow tokens or re-segment networks without redesign.",
    ),
    p(
      "Organisational change debt appears when software encodes reporting lines: approval chains hard-coded to role titles, data visibility tied to legacy departments, workflows that assume a single shared service centre. Reorgs break software that leadership treated as neutral infrastructure.",
    ),
    quote(
      "Technical debt slows teams. Architectural debt slows the organisation — and sometimes reverses strategy.",
    ),
    h2("Paydown strategies that match the debt"),
    h3("Technical debt paydown"),
    p(
      "Incremental, measurable, owned by engineering: test coverage on critical paths, dependency upgrades with CI gates, module extraction within agreed boundaries, observability on services you already operate. Success is faster safe change inside stable architecture.",
    ),
    h3("Architectural debt paydown"),
    p(
      "Programmatic, sponsored, cross-functional: define system of record, publish contracts, migrate consumers with dates, retire bypass paths, align data definitions with named owners, renegotiate vendor boundaries. Success is new options — enter market, pass audit, reorganise without rewrite — not cleaner code alone.",
    ),
    ol([
      "Name the debt type before funding paydown",
      "Quantify constraint: what cannot we do today because of this?",
      "Choose strangler boundaries that match business ownership",
      "Pair migration with definition work — not only plumbing",
      "Retire shadow paths when official paths go live — or document risk",
    ]),
    h2("When to stop refactoring and start redesigning"),
    p(
      "Stop when refactors repeat on the same seam — the join between CRM and billing, the identity bridge, the export finance trusts. Stop when incidents trace to boundary disputes, not bugs. Stop when executives ask for strategy moves the architecture forbids. Those are signals to fund architectural paydown, not another hygiene quarter.",
    ),
    p(
      "Continuing to label architectural problems 'tech debt' starves them of sponsorship. Steering groups approve sprint capacity, not migration programmes. Debt compounds invisibly until a regulatory change or acquisition makes the constraint undeniable — at maximum cost.",
    ),
    h2("Governance without theatre"),
    p(
      "Architecture review that only approves diagrams does not prevent debt. Review that forces explicit trade-offs does: which system owns truth, what happens to exceptions, what is the retirement plan for bypass integrations, who signs when definitions diverge. Debt is a decision log problem as much as a code problem.",
    ),
    p(
      "Constrange often finds architectural debt in exception queues and unofficial exports — places where the official diagram was never true. Reading those paths is faster than auditing repositories alone.",
    ),
    h2("Mixed debt on the same programme"),
    p(
      "Real programmes carry both debts at once. A service may need tests and dependency upgrades while the enterprise also needs a migration off a bypass integration. Ranking everything in one backlog hides the mismatch: engineering pays down code smell while strategy waits on a boundary nobody funded.",
    ),
    p(
      "Separate backlogs, separate sponsors, shared milestones. Technical paydown ships safer change inside today's shape. Architectural paydown changes the shape. Conflating the two in status reports produces green sprints and red transformations.",
    ),
    p(
      "Executives sometimes prefer technical debt language because it sounds fixable in quarter. Architectural debt language sounds like delay. The reverse is often true: unfunded architectural debt makes every subsequent feature slower, no matter how clean the new code reads.",
    ),
    h2("Questions for your next portfolio review"),
    ul([
      "Which goals are blocked by structure, not by code quality?",
      "Where do three systems disagree on the same noun — and who can decide?",
      "What bypass integration still carries production traffic — and why?",
      "If we reorganise next quarter, which workflows break by design?",
      "Are we funding refactors where we need migrations?",
    ]),
    p(
      "Honest answers reorder investment. Mixed debt needs mixed paydown — not a single backlog ranked only by developer pain.",
    ),
    h3("Paying down the right debt"),
    p(
      "Sprints that only refactor code inside wrong boundaries feel productive and change nothing strategic. Programmes that only redraw architecture without fixing operational code feel visionary and frustrate delivery. The discipline is matching the remedy to the debt: refactor where seams are sound; restructure where seams are the problem.",
    ),
    p(
      "Architectural paydown often looks slow because it requires agreement — across teams, vendors, and executives — that code paydown does not. That slowness is the work, not a failure of engineering.",
    ),
    cta(
      "Refactoring faster but still stuck at the same boundaries?",
      "Bring your diagrams and your unofficial paths. We will help you read which debt is code — and which is architecture that needs a programme.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Can good engineering prevent architectural debt?",
      "It can delay it. Architectural debt comes from boundary and ownership decisions — often outside any single team.",
    ],
    [
      "Should we stop all refactors until architecture is fixed?",
      "No. Pay technical debt where boundaries are stable; fund architectural paydown where boundaries block strategy.",
    ],
    [
      "How do we explain architectural debt to executives?",
      "In constraints: what we cannot launch, acquire, or comply with — not in framework names.",
    ],
    [
      "Is vendor lock-in always architectural debt?",
      "When the vendor owns identity, workflow, or data authority you cannot migrate, yes — it constrains future architecture regardless of code quality.",
    ],
  ],
}
