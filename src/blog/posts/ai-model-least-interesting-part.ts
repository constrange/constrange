import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const aiModelLeastInterestingPartPost: Article = {
  slug: "ai-model-least-interesting-part",
  title: "The AI model is often the least interesting part of the system",
  deck:
    "Why production AI depends more on data pipelines, evaluation, retrieval, orchestration, latency, cost and fallback design.",
  category: "Engineering",
  date: "21 May 2026",
  dateIso: "2026-05-21",
  readTime: readTime(1500),
  author,
  tags: ["Production AI", "Architecture", "Operating model", "Constraints"],
  art: { label: "Engineering", cells: ["The model is one box in a longer chain"], tone: "field" },
  body: [
    p(
      "Vendor demos centre the model. Benchmarks centre the model. Steering meetings ask which model you chose, as if the choice explains reliability, cost, adoption, and audit. Production centres everything else: whether the right data arrives on time, whether the join to legacy systems holds, whether evaluation catches drift before customers do, whether latency fits the workflow, whether fallback exists when the model abstains or fails.",
    ),
    p(
      "That is not an argument against models. Models matter. It is an argument against architecture by model selection — the belief that picking the newest frontier model substitutes for ingestion design, ownership, orchestration, and the boring work of making wrong answers visible before they become incidents.",
    ),
    p(
      "Constrange reads AI programmes as systems under constraint. The model is rarely the binding constraint. The binding constraint is usually data quality at the join, missing evaluation, or a workflow that cannot absorb two hundred milliseconds of extra latency without breaking.",
    ),
    h2("Why the model gets the attention"),
    p(
      "Models are legible to executives in ways pipelines are not. A leaderboard movement is easy to discuss. A schema drift problem in the nightly extract is not. Models also ship fast in demo form — paste text, get text — which creates the illusion that production is the same activity with more users.",
    ),
    p(
      "Procurement reinforces the focus. Licences are priced per token or seat. Vendors compete on model capability. Internal teams inherit a purchase and must retrofit everything the purchase assumed: clean identity, authoritative sources, escalation paths, logging, and humans who remain accountable when the model is wrong.",
    ),
    fig(
      "ai-model-least-interesting.svg",
      "A large model box dwarfed by surrounding stages: data, retrieval, orchestration, evaluation, fallback and operations",
      "The diagram stakeholders remember is rarely the diagram production runs.",
    ),
    {
      t: "table",
      caption: "Demo focus versus production reality",
      head: ["What demos optimise", "What production requires"],
      rows: [
        ["Fluent output", "Correct, permitted, attributable output"],
        ["Single-turn interaction", "Multi-step workflows with state and handoffs"],
        ["Curated inputs", "Messy joins and missing fields"],
        ["Model swap as upgrade", "System regression tests across the chain"],
        ["Cost abstracted", "Cost per successful outcome, fully loaded"],
      ],
    },
    h2("Data pipelines: where answers are won or lost"),
    p(
      "Models answer from what they are given. In production, what they are given is assembled by pipelines — extracts, transforms, feature stores, caches, enrichment steps, and manual corrections nobody documented. When the pipeline is late, the model is confidently wrong with fresh wording. When the pipeline duplicates records, the model reconciles contradictions by inventing a third truth.",
    ),
    p(
      "Strong programmes instrument pipelines with the same seriousness as model metrics: freshness SLAs, null rates, anomaly detection on inputs, reconciliation when sources disagree, and explicit ownership when a field's definition changes. The model cannot fix a join that operations stopped trusting years ago.",
    ),
    ul([
      "Lineage: which source field produced which model input",
      "Freshness: maximum age per input class tied to decision risk",
      "Quality gates: block inference when inputs fail validation",
      "Idempotency: replays do not double-charge or double-act",
      "Shadow comparisons: old pipeline versus new pipeline before cutover",
    ]),
    note(
      "Upgrading the model on bad data is not an upgrade. It is faster confusion.",
    ),
    h2("Retrieval and context assembly"),
    p(
      "Even when the model is capable, the system may retrieve the wrong paragraph, the superseded policy, or a chunk the user is not permitted to see. Context assembly — what enters the prompt, in what order, with what instructions — often determines outcomes more than a incremental model release.",
    ),
    p(
      "Retrieval programmes need ranking, permissions, deduplication, and abstention when nothing relevant returns. Teams that treat retrieval as 'embeddings plus vector DB' discover the gap at go-live, when users ask about the one regulation number semantic search handles poorly.",
    ),
    h2("Orchestration: the work between prompts"),
    p(
      "Production AI is rarely one call. It is classify, retrieve, validate, generate, check, route, and maybe call a tool — with retries, timeouts, and compensating actions when a step fails. Orchestration encodes business rules the model should not be trusted to infer: approval thresholds, prohibited actions, mandatory human review, and which system is system of record.",
    ),
    h3("State and side effects"),
    p(
      "Agents that update tickets, move money, or change records need transactional boundaries. A clever plan that fails halfway through is not a demo inconvenience. It is an operations incident. Orchestration must define what is reversible, what requires confirmation, and what never runs without a human latch.",
    ),
    h3("Tool access is a security surface"),
    p(
      "Every tool connection is permission design. The model becomes a proxy for whoever owns the runtime credentials. Architecture must constrain tools, log invocations, and reject actions that violate policy — not rely on prompt politeness.",
    ),
    quote(
      "The model proposes. Orchestration disposes — or refuses, or escalates, or rolls back.",
    ),
    h2("Latency, cost, and workload shape"),
    p(
      "A model that answers in three seconds may be unusable in a call centre workflow that allows one. A model that answers in three hundred milliseconds may be unusable if each answer costs more than the margin on the transaction it supports. Production design starts from workload shape: peak concurrency, acceptable wait, budget per successful outcome, and what can be precomputed or cached.",
    ),
    p(
      "Cost optimisation is not only smaller models. It is routing easy queries to cheaper paths, caching stable retrievals, batching where real time is unnecessary, and refusing to generate when retrieval confidence is low. Programmes that measure cost per API call instead of cost per resolved case optimise the wrong number.",
    ),
    {
      t: "table",
      caption: "Constraints that models do not remove",
      head: ["Constraint", "Typical owner"],
      rows: [
        ["Latency budget", "Workflow and channel design"],
        ["Unit economics", "Product and finance"],
        ["Peak load", "Platform and capacity planning"],
        ["Fallback capacity", "Operations and support"],
        ["Regulatory logging", "Risk and compliance"],
      ],
    },
    h2("Evaluation: the discipline demos skip"),
    p(
      "Without evaluation, improvement is opinion. With weak evaluation, teams chase benchmark wins while incident volume rises. Production evaluation combines offline golden sets — grounded questions with expected answers — with online monitoring: escalation rates, human correction frequency, abstention patterns, and user outcomes that operations recognise as success.",
    ),
    p(
      "Evaluation must survive model swaps. If your tests break every time you change model version, you are testing the model, not the system. System-level tests cover retrieval, tools, permissions, and orchestration — the parts that persist across vendors.",
    ),
    ol([
      "Define success in operational terms, not model terms",
      "Separate retrieval failures from generation failures in incident review",
      "Track regressions when any layer changes — not only when the model changes",
      "Publish thresholds that trigger rollback or human takeover",
      "Review wrong answers with lineage, not blame",
    ]),
    h2("Fallback design: what happens when the model fails"),
    p(
      "Models fail openly — timeouts, refusals, nonsense — and quietly — plausible wrong answers. Fallback design covers both. Open failures need retry logic, degraded modes, and clear user messaging. Quiet failures need evaluation, sampling, and humans in the loop where the cost of being wrong exceeds the cost of review.",
    ),
    p(
      "The worst fallback is 'always show an answer' because the UI requires text. That trains users to distrust the system and hides the signal that retrieval or inputs are broken. Better fallbacks route to search, forms, or people — and measure when those paths activate.",
    ),
    h2("Ownership across the chain"),
    p(
      "Model teams rarely own the CRM extract, the policy wiki, or the approval workflow. Production AI without cross-functional owners becomes a platform project that operations tolerate. Name owners for data freshness, retrieval quality, orchestration rules, evaluation thresholds, and incident response — before scaling traffic.",
    ),
    p(
      "When something goes wrong in public, executives ask about the model. Root cause usually lives two boxes left on the diagram. Organisations that learn slowly repeat the same upgrade cycle without fixing the join.",
    ),
    h2("A production-first sequencing"),
    ol([
      "Define the decision, non-goals, and cost of being wrong",
      "Instrument inputs and retrieval before tuning prompts",
      "Build orchestration with explicit prohibitions and audit logs",
      "Add evaluation that survives model changes",
      "Scale traffic only when fallback and ownership are real",
    ]),
    p(
      "Choosing the model is a step in month two, not a substitute for month one.",
    ),
    h2("Questions for your next architecture review"),
    ul([
      "If we swap models tomorrow, what breaks besides prompts?",
      "What input freshness does this decision require — and who owns it?",
      "Where does the system abstain, and where does it escalate?",
      "What does a wrong answer cost — and how do we detect it early?",
      "What is the fully loaded cost per successful outcome, not per token?",
    ]),
    p(
      "If the room can only discuss model names, the programme is optimising the least interesting part of the system — and the most expensive surprises remain unpriced.",
    ),
    cta(
      "Strong model, fragile everything else?",
      "Bring your pipeline, workflow, and incident stories. We will help you read where production actually breaks — and design the chain, not just the box in the middle.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Should we wait for better models before building?",
      "No — build the data, orchestration, and evaluation layers now. They persist across model generations.",
    ],
    [
      "How much should we spend on the model versus infrastructure?",
      "Spend enough that unit economics work at expected volume. Often the larger cost is bad inputs, rework, and incidents — not the licence line.",
    ],
    [
      "Can a better prompt fix pipeline problems?",
      "Prompts can mask small gaps. They cannot fix stale data, wrong retrieval, or missing permissions reliably.",
    ],
    [
      "Who should own production AI?",
      "A shared model: product or operations accountable for outcomes, platform for runtime, data for inputs, risk for constraints — not a single 'AI team' in isolation.",
    ],
  ],
}
