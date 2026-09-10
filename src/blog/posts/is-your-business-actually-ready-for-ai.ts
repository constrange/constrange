import type { Article } from "../types"
import { author, cta, h2, h3, note, p, quote, readTime, ul } from "../helpers"

export const aiReadinessPost: Article = {
  slug: "is-your-business-actually-ready-for-ai",
  title: "Is your business actually ready for AI?",
  deck: "Readiness is not a maturity score. It is whether your data, process, and ownership can absorb what you add — without hiding the real problem.",
  category: "Decision guides",
  date: "17 September 2026",
  dateIso: "2026-09-17",
  readTime: readTime(1700),
  author,
  tags: ["AI readiness", "Digital transformation", "Data quality", "Operating model"],
  art: { label: "Readiness", cells: ["Hype", "Reality"], tone: "tide" },
  body: [
    p(
      "Every quarter, someone asks whether the business is ready for AI. The question is usually asked too late, after a budget line exists and a vendor has been briefed. The honest answer is rarely a single number on a maturity model. It is a set of plain facts about whether the organisation can absorb another layer without mistaking fluency for fit.",
    ),
    p(
      "Readiness is not enthusiasm. It is not whether the board has seen a demo. It is whether the work you want to improve is understood well enough that a model can serve it — and whether the people who run the work have capacity to change how they verify, correct, and own outcomes when the model is wrong.",
    ),
    p(
      "Constrange treats readiness as a constraint question, not a branding exercise. You may be ready for a narrow, bounded use. You may not be ready for a platform that claims to transform the function. Those are different answers. Collapsing them is how organisations buy capability they cannot use and then blame the tool.",
    ),
    h2("What readiness is not"),
    p(
      "Readiness is not a checklist from a vendor. Those checklists are designed to move you toward a purchase. They measure inputs that sound responsible — data strategy, cloud footprint, executive sponsorship — without testing whether the specific use case has a named owner and a path that survives contact with Friday afternoon.",
    ),
    p(
      "Readiness is also not universal. One team may be ready because their process is documented, their exceptions are visible, and their data is good enough for the claim they want to make. Another team in the same building may fail every test because their real system is a spreadsheet and their join is a person. Averages lie. Readiness is local.",
    ),
    ul([
      "A maturity score without a named use case",
      "Executive sponsorship without operational ownership",
      "A data strategy deck without a sample of the data the use case will touch",
      "A pilot that cannot fail without embarrassing the sponsor",
      "Capacity that exists on paper but not after three other programmes",
    ]),
    p(
      "If your readiness assessment does not mention what you will stop doing to make room, it is describing appetite, not capacity.",
    ),
    h2("The four tests we actually use"),
    p(
      "We use four tests. They are blunt on purpose. You can run them in a week if you are willing to look at the unofficial path.",
    ),
    h3("1. The problem is named"),
    p(
      "You can say, in one sentence that operations would recognise, what is under pressure and what constraint will not move. The sentence includes a non-goal. If you can only say we need AI, you are not ready. You are in a category conversation.",
    ),
    h3("2. The data can support the claim"),
    p(
      "Not perfect data. Honest data. Sample the records the use case will touch. Look for the fields that are empty, duplicated, or mean different things in different systems. A model can sound authoritative over bad data. That is worse than no model, because it adds confidence to error.",
    ),
    note(
      "If nobody can explain how a field is populated, the model cannot fix that. It can hide it behind fluent output until a customer or regulator asks a question nobody can answer.",
    ),
    h3("3. The process can absorb verification"),
    p(
      "Someone must own checking outputs, handling exceptions, and updating the unofficial path when the model meets reality. If that person is already at capacity, you are not adding intelligence. You are adding rework with a better font.",
    ),
    p(
      "Verification is not a phase you grow out of. It is the permanent cost of probabilistic tools in deterministic processes. Budget it or do not deploy.",
    ),
    h3("4. The downside is bounded"),
    p(
      "You know what happens when the model is wrong, how you will detect it, and how you will correct or unwind. If the downside is reputational, regulatory, or hard to reverse, readiness requires amber or red zone design — human gates, sampling, limits — not a green zone rollout because the pilot looked clean.",
    ),
    h2("Hype versus reality in the room"),
    p(
      "Hype speaks in futures: transform the function, ten times productivity, competitive necessity. Reality speaks in joins: this handoff, this field, this owner, this exception queue. Readiness lives on the reality side. It is unglamorous. It is also what separates a tool that earns its place from a programme that spends a year proving the problem was elsewhere.",
    ),
    p(
      "Watch for hype signals in internal documents: no non-goals, no mention of what stops, no owner named for verification, no example of a wrong answer and its cost. Those omissions are not oversights. They are a bet that the tool will make the awkward facts disappear.",
    ),
    p(
      "Reality signals look smaller: a first slice, a named team, a sample of data with warts visible, a written limit on what the model may do, a review rhythm that already has a calendar invite. Small is not unambitious. Small is how you learn without betting the function.",
    ),
    h2("You may be ready for less than you think — and that is fine"),
    p(
      "The most common honest outcome of a readiness reading is not no forever. It is not this, not yet, not at this scale. A narrow use with tight limits may be ready now. A platform purchase may be ready in eighteen months if you fix a join and a data definition first. That sequence is cheaper than buying first and discovering the sequence in reverse.",
    ),
    ul([
      "Drafting with human final ownership — often ready if verification time is budgeted",
      "Internal search across stable documentation — ready when the corpus is maintained",
      "Customer-facing answers without retrieval grounding — rarely ready without serious risk design",
      "Automating a broken process — not ready until the process decision is made",
      "Replacing judgement with scoring — not ready unless the trade-offs are owned politically",
    ]),
    p(
      "Saying not yet is a decision. It should be written down with the condition that would change it. Otherwise the same purchase will return next quarter with a new name.",
    ),
    h2("The organisational blockers"),
    p(
      "Readiness is often blocked by ownership, not technology. The data is owned by no one. The exception path is owned by whoever is fastest on the day. The sponsor wants a win before year end. Legal was consulted once about the category, not about the use. Each blocker is fixable. None of them are fixed by a larger model.",
    ),
    p(
      "Another blocker is shame. Teams hide the spreadsheet because it is embarrassing. Embarrassing data is still the data the work uses. Readiness work is partly permission to describe the situation honestly without being punished for it. If honesty is unsafe, readiness assessments will be theatre.",
    ),
    quote(
      "A business that cannot describe how work actually runs is not unready for AI alone. It is unready for any serious change. AI just makes the gap visible faster.",
    ),
    h2("A readiness conversation that earns its time"),
    p(
      "Bring the use case, not the category. Bring a sample of data, not a strategy. Bring the person who handles exceptions, not only the sponsor. Ask what will stop. Ask what wrong looks like. Ask who verifies. If those answers are thin, you have learned something valuable before money moves.",
    ),
    p(
      "Readiness work should end in one of three outcomes: proceed with limits and owners; proceed with a precondition and a date to re-check; or do not proceed, with the reason written so it survives the next hype cycle. A fourth outcome — proceed because the demo was good — is the one that wastes the year.",
    ),
    h2("What changes after you are honest"),
    p(
      "Organisations that pass the four tests do not necessarily move faster on day one. They move faster by month six, because they are not unwinding a deployment that never matched the work. They also build credibility with the teams who must live with the tool — credibility that the next initiative will need.",
    ),
    p(
      "If you are under pressure to show AI progress, show progress on the precondition. Fixing a join, naming an owner, sampling data — these are board-legible when framed as risk reduction. They are also what makes the later tool actually work.",
    ),
    p(
      "Readiness is not a gate to keep you out of the future. It is a way to arrive in the future with the organisation still intact — data understood, owners named, limits clear, and hype replaced by a problem that can be solved.",
    ),
    cta(
      "Check the real picture",
      "Bring the use case and the sample. We will tell you plainly whether you are ready — and what would need to be true if you are not.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Do we need perfect data before starting?",
      "No. You need honest data and a use case that matches what you have. Perfection is often an excuse to buy a platform instead of fixing a definition.",
    ],
    [
      "Can we run a pilot without full readiness?",
      "Yes, if the pilot is bounded, can fail without embarrassment, and has owners who will tell you the truth. A pilot that cannot fail is not a pilot. It is a purchase in disguise.",
    ],
    [
      "Who should own a readiness assessment?",
      "Operations and the team who hold the exception path, with sponsorship that will accept a not yet answer. IT alone cannot sign readiness for a process it does not run.",
    ],
    [
      "What if competitors are moving faster?",
      "They may be moving faster into the same mistake. Compete on fit and absorption, not on who announced first. A narrow live use beats a broad shelfware programme.",
    ],
  ],
}
