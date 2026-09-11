import type { Article } from "../types"
import { author, cta, h2, h3, note, p, quote, readTime, ul } from "../helpers"

export const legacyReplacePost: Article = {
  slug: "when-should-you-replace-a-legacy-system",
  title: "When should you replace a legacy system?",
  deck: "Legacy is not an insult. It is a system that still carries work. Replace when staying costs more than change — not when a vendor tells you to.",
  category: "Decision guides",
  date: "18 September 2026",
  dateIso: "2026-09-18",
  readTime: readTime(1700),
  author,
  tags: ["Legacy systems", "Modernisation", "Technical debt", "Systems strategy"],
  art: { label: "Decision guides", cells: ["Replace the system or repair the join"], tone: "pine" },
  body: [
    p(
      "Legacy is a word people use when they are tired. Tired of the interface. Tired of the vendor. Tired of explaining to new hires why a critical path still runs through something built before they were born. Tired is a feeling. It is not a strategy.",
    ),
    p(
      "A legacy system is often doing work the organisation still needs. It may be ugly. It may be poorly documented. It may be held together by people who will retire before the replacement goes live. It is still the system of record for something real. Replacing it is a decision about consequence, not aesthetics.",
    ),
    p(
      "Constrange sees two expensive mistakes. One is replacement as morale project: a new platform bought because the old one is embarrassing, without a honest map of what it does that nothing else does. The other is repair forever: endless patching because change feels too risky, until the people who understand the joins leave and risk arrives anyway.",
    ),
    h2("What legacy actually means"),
    p(
      "In practice, legacy means entangled. Data definitions live in the system and in the heads of long-serving staff. Integrations are bespoke. Reports depend on fields that were added for a regulation three cycles ago. The unofficial path routes around the official one because the official one was never finished.",
    ),
    p(
      "That entanglement is not solved by a modern shell. It is moved. Sometimes it is simplified. Often it is rediscovered during migration at higher cost. Calling something legacy is the easy part. Naming what it holds is the work.",
    ),
    ul([
      "System of record for a domain others depend on",
      "Joins that fail upstream and downstream",
      "Tribal knowledge not written anywhere durable",
      "Regulatory or audit history that must survive transition",
      "Capacity consumed keeping it running instead of improving it",
    ]),
    p(
      "If you cannot list what the system does in operational terms — not module names, outcomes — you are not ready to replace it. You are ready to look.",
    ),
    h2("Replace versus repair: a decision, not a default"),
    p(
      "Repair is the right move when the pain is local, the domain is stable, and the constraint is time or money. A targeted fix to a join, a rebuilt interface on the same core, a data cleanup with owners, a retirement of one module that nobody should still be using. Repair respects that the system still earns its keep.",
    ),
    p(
      "Replace is the right move when the cost of staying is compounding: security exposure you cannot patch, vendor end-of-life with no credible path, inability to meet regulatory or customer requirements, or organisational paralysis because every change touches a brittle core. Replace is also right when the domain itself has changed — the business is no longer doing what the system was built for — and repair would preserve the wrong shape.",
    ),
    note(
      "If the main argument for replace is that recruiting engineers is hard, ask whether you are solving a people market problem with a nine-figure programme. Sometimes that trade is correct. Often it is not.",
    ),
    h2("The tests before you choose replace"),
    p(
      "We use five tests. They are meant to be argued about in the open, with operations in the room.",
    ),
    h3("1. The problem is not the word legacy"),
    p(
      "Name the failure mode. Slow change? Bad data? Customer experience at a join? Regulatory gap? If the answer is only that it is old, you may be buying a calendar event, not solving a pressure.",
    ),
    h3("2. Repair has a ceiling you can state"),
    p(
      "List what repair can achieve in twelve to eighteen months with the capacity you actually have. If repair meets the constraint, replace is optional, not urgent. If repair cannot meet the constraint even with honest effort, replace becomes credible.",
    ),
    h3("3. The organisation can absorb change"),
    p(
      "Replacement is two programmes: building the new thing and moving the work. Most failures happen in the second. If the business cannot pause conflicting initiatives, name owners for migration, and accept temporary duplication, the new system will sit beside the old one indefinitely.",
    ),
    h3("4. The data story is writable"),
    p(
      "You can describe what must migrate, what can be archived, what must be recreated, and who signs off on definitions. If data is a mystery, migration is a lottery.",
    ),
    h3("5. You know what you will stop"),
    p(
      "A new system should retire capabilities, customisations, and workarounds — not replicate all of them because a stakeholder panics. Without stops, you rebuild legacy inside modern infrastructure.",
    ),
    h2("The hidden cost of staying"),
    p(
      "Staying feels cheaper because the invoice is familiar. The cost is often invisible: every new initiative pays a tax to integrate with the old core; every hire spends months learning workarounds; every audit finds another exception; every competitor move that needs speed hits the same wall.",
    ),
    p(
      "Quantify what you can. Hours per month on manual bridges. Revenue at risk at a join. Incidents tied to the same brittle component. People risk — who leaves if this does not change. Staying is not free. It is just billed differently.",
    ),
    p(
      "Equally, do not pretend replacement removes cost. It moves cost to migration, retraining, and dual running. The question is whether the new curve is better than the old one under your constraint.",
    ),
    h2("The hidden cost of replacing"),
    p(
      "Replacement programmes fail quietly first. They fail in scope that grows to protect stakeholders. They fail in data definitions that were never agreed. They fail in parallel running that was supposed to last a quarter and lasts two years. They fail when the new system must do everything the old one did on day one because nobody had the political courage to drop features.",
    ),
    quote(
      "The most common legacy recreated in a new platform is the customisation nobody dared to kill.",
    ),
    p(
      "If you cannot describe a first slice that delivers value without full parity, you are not ready to sign the programme. You are ready to design the slice.",
    ),
    h2("A sequence that survives contact"),
    p(
      "Understand the system as operated, not as sold. Map joins, owners, exceptions, and dependencies. Define the problem replacement must solve, with non-goals. Compare repair and replace on fit to constraint, not on slide quality. If replace wins, structure migration as a sequence of slices, each with a stop and a rollback. Move with named owners who will still be there when the exception queue fills.",
    ),
    p(
      "Technology should wait for that sequence. Vendor selection comes after the problem and the slice are clear. Otherwise you will choose a platform that matches the demo and mismatches the estate.",
    ),
    h2("When repair is the brave choice"),
    p(
      "Leadership sometimes needs to hear that replace is not required this year. That is not defeat. It is discipline. A well-scoped repair with owners and a written ceiling can outperform a replacement that the organisation cannot absorb.",
    ),
    p(
      "Repair becomes cowardice only when the ceiling is a fiction — when everyone knows the vendor is leaving, the security posture is failing, or the business model has moved and the system has not. In those cases, repair is delay with interest.",
    ),
    p(
      "The judgement call is which side of that line you are on. Constrange’s job is to put the line on the first page, with the constraint visible, so the decision is yours — not the vendor’s, and not the loudest sponsor’s.",
    ),
    cta(
      "Name the pressure",
      "Bring the system as it runs today — joins, exceptions, and all. We will help you decide whether to replace, repair, or wait with a condition.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Is legacy always bad?",
      "No. Legacy often means proven, entangled, and still carrying work. The question is whether staying or changing fits your constraint — not whether the system is fashionable.",
    ],
    [
      "How long should repair be attempted before replace?",
      "Until you can state repair’s ceiling honestly. If repair cannot meet regulatory, security, or business requirements within the capacity you have, replace becomes credible.",
    ],
    [
      "Can we replace in phases?",
      "You should. Full big-bang replacement is rarely absorbable. Slices with value, stops, and rollback beat parity promises.",
    ],
    [
      "What if the vendor is forcing migration?",
      "Treat end-of-life as a constraint, not as automatic approval for their replacement product. The problem may still be repair, partial migration, or a different vendor — decided on fit, not fear.",
    ],
  ],
}
