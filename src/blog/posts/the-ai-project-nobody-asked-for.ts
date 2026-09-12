import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const aiProjectNobodyAskedForPost: Article = {
  slug: "the-ai-project-nobody-asked-for",
  title: "The AI project nobody asked for",
  deck:
    "How organisations end up building AI because everyone else is, rather than because the problem requires it.",
  category: "Perspectives",
  date: "15 September 2026",
  dateIso: "2026-09-15",
  readTime: readTime(2000),
  author,
  tags: ["AI strategy", "Hype", "Governance"],
  art: { label: "Perspectives", cells: ["Building because the market is building"], tone: "wine" },
  body: [
    p(
      "The board deck includes a slide on AI. Competitors announce copilots. A vendor offers a pilot. Internal champions assemble a team. Within a quarter there is a demo, a name, and a narrative. What is missing is a question from operations: did anyone ask for this? Not as scepticism. As a test of fit.",
    ),
    p(
      "AI projects nobody asked for share a shape. They begin with capability, not constraint. They measure activity — models deployed, documents ingested — not outcomes in the work. They end with a impressive presentation and no owner when the first exception arrives on a Tuesday morning.",
    ),
    p(
      "Constrange is not arguing against AI. We are arguing against AI as a substitute for problem selection. When the market moves, organisations feel they must move too. That feeling is not a strategy. It is anxiety with a budget line.",
    ),
    h2("How unsolicited AI projects start"),
    p(
      "They often start upstairs. Leadership visibility, investor questions, fear of being left behind. They descend as a mandate without a named operational pain. Teams interpret the mandate as 'build something intelligent' rather than 'remove a specific constraint'.",
    ),
    fig(
      "ai-project-nobody-asked-for.svg",
      "Flow from market signal to internal AI initiative without operational demand",
      "Market pressure can create programmes that operations never requested and cannot sustain.",
    ),
    ul([
      "Mandate without owner: a programme exists, nobody owns exceptions.",
      "Demo-driven scope: what looks fluent wins over what is load-bearing.",
      "Data as proxy for readiness: ingestion mistaken for understanding.",
      "Parallel unofficial work continues unchanged after launch.",
      "Success defined as deployment, not adoption in the real workflow.",
    ]),
    h2("Why operations did not ask"),
    p(
      "Sometimes the pain is real but unnamed. Teams suffer in silence because raising it requires admitting the official process fails. Sometimes the pain is elsewhere — intake, ownership, policy — and AI is irrelevant. Sometimes operations was not in the room because the conversation was framed as innovation, not operations.",
    ),
    p(
      "Asking operations is not a veto. It is a fit test. If the people who will live with the output cannot describe the problem in one sentence, the project is about signal, not service.",
    ),
    {
      t: "table",
      caption: "Asked for vs announced",
      head: ["Asked-for AI project", "Nobody-asked-for AI project"],
      rows: [
        ["Named team and workflow", "Generic 'transformation' audience"],
        ["Measure agreed before build", "Measure chosen after demo"],
        ["Owner for exceptions", "Owner is 'the centre'"],
        ["First slice is narrow", "Pilot spans many use cases"],
        ["Failure mode discussed", "Failure discussed as reputational risk only"],
      ],
    },
    h2("The cost of building for the market"),
    p(
      "Resources attach to the visible programme. Other fixes starve. Teams learn that theatre matters. When the AI layer does not change throughput, cynicism spreads. The next honest proposal faces harder scrutiny.",
    ),
    p(
      "There is also opportunity cost. The join that fails every week could have been fixed for less than the embedding bill. The definition fight that blocks every report could have been settled in a workshop. AI did not fail. It distracted.",
    ),
    note(
      "If the only people excited about the project are not the people who will use it daily, treat that as data.",
    ),
    h2("Tests before you fund the next initiative"),
    h3("The operational ask test"),
    ol([
      "Can operations name the workflow and the stall point without jargon?",
      "Is there a named owner who wants this enough to change how they work?",
      "What will they stop doing to adopt it?",
      "What happens when the model is wrong — who decides?",
      "Would a non-AI fix be unacceptable for a stated reason?",
    ]),
    p(
      "If you cannot answer the last question with a constraint, pause. You may be building because the market is building.",
    ),
    h2("What to do when the mandate already exists"),
    p(
      "Shrink the slice until operations recognises it. Pair with a non-AI fix that removes a join. Publish non-goals. Name the owner in job-title terms, not committee terms. Measure one behaviour change, not model metrics.",
    ),
    {
      t: "table",
      caption: "Rescoping a mandate",
      head: ["From", "To"],
      rows: [
        ["Enterprise copilot", "One team, one corpus, one review step"],
        ["Many use cases", "One exception class handled"],
        ["Ingest everything", "Define the object first"],
        ["Innovation KPI", "Throughput or error rate in the workflow"],
        ["Centre owns", "Named operational owner"],
      ],
    },
    quote(
      "The question is not whether you can build AI. It is whether anyone with skin in the game asked you to solve something they already could not solve.",
    ),
    h2("Building AI people would ask for"),
    p(
      "Asked-for projects feel different. They are smaller, uglier, and more specific. They include review steps nobody glamorises. They accept that exceptions are the product. They measure whether Tuesday got easier.",
    ),
    p(
      "Constrange helps leadership separate signal from service. The market will keep moving. Your organisation only needs to move where the problem requires it — and where someone accountable is ready to own what happens after the demo ends.",
    ),
    h2("Language that creates unwanted programmes"),
    p(
      "Phrases like 'we need an AI strategy' without a problem create programmes in search of demos. 'Catch up to competitors' without a constraint creates vanity pilots. 'Innovation KPI' without adoption measures creates theatre.",
    ),
    p(
      "Replace with operational language: which workflow, which stall, which owner, which measure, which non-goals. If the sentence still sounds like press release, it is not ready for funding.",
    ),
    h2("Rescuing a live initiative"),
    ol([
      "Pause net-new use cases; finish one slice.",
      "Pair with operations sponsor who did not start the programme.",
      "Publish non-goals and retirement of parallel experiments.",
      "Measure behaviour in the workflow, not model accuracy alone.",
      "Set a date to stop if adoption threshold is not met.",
    ]),
    p(
      "Stopping a failed initiative with learning is better than perpetual pilot status.",
    ),
    cta(
      "Running an AI initiative without a clear operational ask?",
      "Bring the mandate and the demo. We will help you find whether operations recognises the problem.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Isn't some top-down AI investment necessary?",
      "Exploration can be top-down. Production adoption needs a bottom-up ask with an owner.",
    ],
    [
      "How do we respond to board pressure without a project?",
      "Respond with a reading: named problems, ranked constraints, and a first slice proposal — not a generic lab.",
    ],
    [
      "What if vendors say we will fall behind?",
      "Falling behind on theatre is not the same as falling behind on outcomes. Define which you mean.",
    ],
    [
      "Can an AI lab help?",
      "Yes, if it is bounded, publishes non-goals, and cannot launch into operations without an owner.",
    ],
  ],
}
