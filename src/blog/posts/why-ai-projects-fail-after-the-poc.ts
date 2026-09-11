import type { Article } from "../types"
import { author, cta, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const aiProjectsFailAfterPocPost: Article = {
  slug: "why-ai-projects-fail-after-the-poc",
  title: "Why AI projects fail after the POC",
  deck:
    "The demo worked. Production did not. The gap is rarely the model — it is ownership, joins, evaluation, and the unofficial path.",
  category: "Decision guides",
  date: "12 September 2026",
  dateIso: "2026-09-12",
  readTime: readTime(1700),
  author,
  tags: ["POC to production", "AI implementation", "Operating model", "Risk"],
  art: { label: "Decision guides", cells: ["From demo success to production failure"], tone: "coral" },
  body: [
    p(
      "The proof of concept was a success. Stakeholders saw fluent output. Someone took a screenshot. A steering group nodded. Six months later the capability is either quietly abandoned, buried inside a slide about 'lessons learned', or running in production while the people who actually do the work route around it. The failure is rarely announced. It is absorbed as extra friction, another login, or a policy nobody follows.",
    ),
    p(
      "Organisations blame the model, the vendor, or the team's lack of ambition. Those explanations are convenient and usually wrong. The POC did what POCs are designed to do: prove that something can happen once, in favourable conditions, with attention. Production asks a different question: can this happen reliably, inside your joins, under your constraints, with owners who remain when the spotlight moves?",
    ),
    p(
      "Constrange spends a large part of its practice in that gap — between a demo that looked finished and an operating landscape that was never finished to begin with. The work is not to make the model cleverer. It is to make the move honest.",
    ),
    h2("What a POC actually proves"),
    p(
      "A POC proves feasibility in a narrow sense: given curated inputs, a willing audience, and tolerance for manual correction, the system can produce an output that looks right. That is useful. It is not the same as proving value, safety, adoption, or maintainability. Treating the two as equivalent is how programmes acquire momentum they cannot sustain.",
    ),
    {
      t: "table",
      caption: "Demo versus production",
      head: ["Proof of concept", "Production"],
      rows: [
        ["Curated data and friendly users", "Messy data and tired users"],
        ["Manual review assumed but not priced", "Review capacity is a bottleneck"],
        ["Exceptions handled by the project team", "Exceptions handled by operations"],
        ["Success measured by applause", "Success measured by outcomes and incidents"],
        ["No join to legacy systems", "Joins are where work actually lives"],
      ],
    },
    p(
      "If your business case was written in the left column and your operating reality is the right column, the POC was not a lie. It was answering a different question. The organisation simply forgot to ask the second question before funding the programme.",
    ),
    h2("The five failures we see most often"),
    h3("1. The problem was never named"),
    p(
      "POCs are often funded as exploration: 'see what AI can do for us'. Exploration is legitimate. It is not a problem statement. Without a named problem — including non-goals and a constraint — production becomes a search for justification. Teams implement features because they exist in the toolkit, not because they remove pressure from a specific join.",
    ),
    h3("2. The unofficial path was ignored"),
    p(
      "Every organisation has a second map: the spreadsheet that is the real system of record, the chat thread that is the real escalation path, the senior person who is asked because the official owner is too slow. POCs routinely run beside that map, not through it. Production must run through it or replace it. Replacement requires stopping something. Stopping is the move organisations avoid.",
    ),
    h3("3. Evaluation was a vibe"),
    p(
      "In the POC, 'it looks good' is enough. In production, you need measures that survive disagreement: quality thresholds, escalation rates, time saved that operations recognise, incidents, and drift. Without evaluation design, the programme cannot learn. It can only defend. Defence consumes the same calendar as improvement.",
    ),
    h3("4. Ownership was a project role"),
    p(
      "POCs have project managers. Production needs product owners in the operational sense: people accountable for exceptions, policy, training, and the decision to roll back. When ownership reverts to 'IT' or 'innovation' after go-live, the capability becomes someone else's side project. Side projects lose to Friday afternoon every time.",
    ),
    h3("5. The join was hand-waved"),
    p(
      "Demos love a clean API and a single source of truth. Operations live at the handshake between systems where definitions of done disagree. If the POC did not include the join — ingest, identity, authorisation, logging, audit, fallback — production will discover the join expensively, in front of customers or regulators.",
    ),
    note(
      "A POC that avoids the join is not cautious. It is optimistic in the most expensive place.",
    ),
    h2("Why good teams still fail"),
    p(
      "Competent engineering does not rescue a vague problem. Strong data science does not rescue absent operations ownership. Capable vendors do not rescue a buyer who needed a reading, not a platform. Failure after POC is usually a sequence error: technology before problem, demo before join, programme before owner.",
    ),
    p(
      "There is also a cultural trap. POCs reward novelty. Production rewards boring reliability. Teams promoted for demos are not always rewarded for documentation, monitoring, and saying no to scope. If your incentive system pays for the screenshot, you will get more screenshots.",
    ),
    quote(
      "Production is not a larger POC. It is a different discipline: exceptions, owners, joins, and the cost of being wrong in public.",
    ),
    h2("What to do before you scale"),
    p(
      "Before you convert a POC into a programme, run a production readiness reading — not a longer demo. The reading should be uncomfortable enough that someone in operations nods and someone in risk asks a follow-up question.",
    ),
    ol([
      "Restate the problem in one sentence with a constraint. If the POC cannot be mapped to that sentence, stop.",
      "Walk the unofficial path with the people who run it. Ask what would break if this capability disappeared tomorrow.",
      "Define evaluation for slice one: inputs, outputs, human review, escalation, and rollback.",
      "Name owners in business and technology — roles with hours per week, not titles on a slide.",
      "Prototype the join, not only the model: identity, data freshness, logging, and failure modes.",
      "Size absorption: training, policy, support, and what work will stop to create capacity.",
    ]),
    p(
      "If you cannot complete that list, you are not ready to scale. You are ready to extend the POC — smaller, closer to the join, with a measure. Extended POCs are cheaper than production failures that teach the organisation to distrust the category.",
    ),
    h2("A better POC design"),
    p(
      "If you are still designing the POC, design it to fail usefully. Choose a slice where the join is visible. Use real data with real warts. Include the reviewer who will actually review in production. Set a success threshold that operations helped write. Time-box not only build but ownership: who will run this on week thirteen?",
    ),
    ul([
      "One workflow, not a platform vision.",
      "Real inputs with known quality issues — not a cleaned export.",
      "A human review step priced as hours, not as 'for now'.",
      "Logging and audit from day one, even if ugly.",
      "A written non-goal list to prevent scope creep into 'transformation'.",
    ]),
    p(
      "A POC designed this way looks less impressive in the steering group. It produces fewer gasps. It also produces fewer post-mortems.",
    ),
    h2("When to kill a POC"),
    p(
      "Killing is underused governance. If the reading shows the problem is misnamed, the join is too broken, or the owner role cannot be filled, kill the POC with a written reason. Killing early is not embarrassment. It is how you protect attention for moves that can absorb.",
    ),
    p(
      "Signs it should stop: the only success metric is engagement with the tool; reviewers are the same people who built it; exceptions are 'edge cases' scheduled for phase two; legal and risk met the project for the first time at go-live; the business case assumes organisation-wide adoption without training capacity.",
    ),
    {
      t: "table",
      caption: "Signals to scale versus signals to stop",
      head: ["Scale", "Stop or narrow"],
      rows: [
        ["Operations recognises the workflow", "Only the project team recognises it"],
        ["Evaluation thresholds agreed in advance", "Success is qualitative enthusiasm"],
        ["Named owner with committed hours", "Ownership defaults to IT or innovation"],
        ["Join tested with real identities and data", "Join described on a future roadmap"],
        ["Non-goals written and respected", "Scope expands to justify the programme"],
      ],
    },
    h2("From demo to durable capability"),
    p(
      "Durable capabilities are boring on purpose. They have owners, measures, runbooks, and a defined slice of the work they own — not the whole firm. They connect to the unofficial path honestly, either by replacing a step or by making the step cheaper without hiding the join.",
    ),
    p(
      "Constrange's work in this space is not to rescue demos. It is to name whether production is warranted, what slice should move first, and what must be stopped so the move has a chance. Sometimes the right outcome is a smaller automation, a process fix, or wait. Those outcomes save more than another model fine-tune.",
    ),
    h2("The steering group problem"),
    p(
      "POCs often succeed in rooms that will not run production. Steering groups love demos because demos compress uncertainty into a single impressive moment. Production spreads uncertainty across twelve months of exceptions, vendor upgrades, and reorganisations. If the steering group's only question is 'can we scale this?', the organisation has already chosen momentum over fit.",
    ),
    p(
      "A healthier steering question is: 'what would we stop if this worked?' Stopping is how you create absorption. Without a stop list, production competes with everything else for the same people's attention — and loses, because the unofficial path does not require a login.",
    ),
    h3("Governance that matches production"),
    ul([
      "Monthly review of evaluation metrics, not demo attendance.",
      "A single owner with authority to narrow scope when fit is poor.",
      "Risk and legal engaged on slice one, not at go-live.",
      "A written rollback plan before launch, exercised in rehearsal.",
      "A parking lot for ideas that are not slice one — with conditions, not guilt.",
    ]),
    p(
      "Governance sounds heavy. It is lighter than a year-long unwind. The organisations that do this well treat production as operations, not as innovation theatre.",
    ),
    h2("What 'scale' should mean"),
    p(
      "Scale is often used as a synonym for 'more'. More teams, more use cases, more data, more budget. Useful scale is narrower: the same slice working reliably for one team, then a second team with the same join — not a parallel expansion into every department with a slide about synergy.",
    ),
    p(
      "Scaling before the join is stable multiplies cost faster than value. You inherit five instances of the same handshake failure, five sets of reviewers who were never trained, and five steering conversations about why adoption is 'slower than expected'. Slower than expected is usually a polite name for mis-fit.",
    ),
    quote(
      "Scale is replication of a working slice, not distribution of a flattering demo.",
    ),
    h2("A twelve-month view"),
    p(
      "If you are funding past the POC, write a twelve-month narrative that includes boredom: monitoring, policy updates, reviewer rotas, vendor release notes, and the quarterly argument about whether the measure still matches the work. If the narrative only contains build milestones, you are funding a project, not a capability.",
    ),
    p(
      "Month one is join and evaluation. Month three is honest adoption on one team. Month six is a decision: expand, narrow, or kill — based on measures, not enthusiasm. Month twelve is maintenance and drift. Organisations that skip months one and three arrive at month twelve with a tool and a grievance.",
    ),
    cta(
      "Past the demo?",
      "If the POC succeeded but production is stalling, bring the join and the unofficial path — not another deck.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "How long should a POC run?",
      "Long enough to test the join and evaluation, not long enough to become a shadow product. If there is no owner for week thirteen, the POC is already too long.",
    ],
    [
      "Is the model usually the problem?",
      "Rarely first. Most post-POC failures are problem definition, ownership, joins, and evaluation — not marginal model quality.",
    ],
    [
      "Should risk and legal be involved early?",
      "Yes, on slice one — not at go-live. Early involvement shapes a feasible path. Late involvement produces either blockage or quiet policy breaches.",
    ],
    [
      "Can we salvage a failing production rollout?",
      "Often, by narrowing the slice, naming an owner, and fixing the join — not by adding features. Salvage starts with honesty about what is actually being used.",
    ],
  ],
}
