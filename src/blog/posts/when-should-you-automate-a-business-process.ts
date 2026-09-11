import type { Article } from "../types"
import { author, cta, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const whenToAutomatePost: Article = {
  slug: "when-should-you-automate-a-business-process",
  title: "When should you automate a business process?",
  deck:
    "Automation is not a moral good. It is a move that only pays off when the work, the join, and the organisation are ready.",
  category: "Decision guides",
  date: "15 September 2026",
  dateIso: "2026-09-15",
  readTime: readTime(1700),
  author,
  tags: ["Process automation", "Operations", "AI readiness", "Workflow design"],
  art: { label: "Decision guides", cells: ["When the work earns automation"], tone: "moss" },
  body: [
    p(
      "Automation has returned to board agendas with a new wardrobe: models that read, classify, summarise, and draft. The temptation is to automate whatever is slow, visible, or embarrassing in customer correspondence. That temptation produces tools that look clever in a demo and fail in the exception — which is where live work actually lives.",
    ),
    p(
      "Constrange treats automation as a judgement call, not a category purchase. The question is not 'can this be automated?' Most work can be, partially, with enough services budget and enough willingness to misdescribe exceptions. The question is 'should this be automated now, in this slice, with these owners, and at this cost of being wrong?'",
    ),
    p(
      "When organisations skip that question, they automate the symptom. The join stays broken. The unofficial path gains a new layer. People learn to work around the automation, and leadership interprets low adoption as a training problem.",
    ),
    h2("Work first, tool second"),
    p(
      "Begin with the work as done, not as drawn. Walk the path with the people who run it on a difficult day — month end, backlog week, the day the upstream feed is late. Note where delay lives: missing facts, unclear ownership, policy ambiguity, system handshake, or genuine capacity limits.",
    ),
    {
      t: "table",
      caption: "Where delay actually lives",
      head: ["Cause of delay", "Automation fit"],
      rows: [
        ["Missing fact at intake", "Fix intake first; automate later"],
        ["Unclear ownership between teams", "Clarify ownership; automation will not"],
        ["Broken join between systems", "Fix join; otherwise automate the wrong object"],
        ["High-volume, low-variance steps", "Strong automation candidate"],
        ["Judgement in exceptions", "Assist or route; full automation rarely honest"],
        ["Regulatory discretion required", "Human-in-the-loop by design"],
      ],
    },
    p(
      "If your delay cause is in the top three rows, automation is not the first move. It is a way to hide the missing fact behind fluency.",
    ),
    h2("The blunt capacity test"),
    p(
      "Ask: if a capable person had complete inputs tomorrow morning, would the work still stall? If no, you have an information or ownership problem. If yes, you may have a capacity or rules problem worth automating — after you define the slice and the error cost.",
    ),
    p(
      "This test is older than current models. It still works because it separates 'slow because blind' from 'slow because voluminous'. Models are excellent at volume with stable rules. They are dangerous at blindness dressed as volume.",
    ),
    note(
      "Automating a broken intake does not speed the organisation. It speeds the production of wrong objects.",
    ),
    h2("Good candidates for automation"),
    p(
      "Strong candidates share traits: high volume, low variance, clear inputs, measurable outputs, acceptable error rates with human review, and a join that can be defined without fantasy. Examples include standard categorisation, extraction from structured documents, routing against explicit rules, and first-draft generation where a reviewer is priced in advance.",
    ),
    ul([
      "Inputs are available digitally, with stable identifiers.",
      "Rules are written or learnable from labelled examples — not tacit folklore.",
      "Exceptions are a known percentage, not 'we will handle in phase two'.",
      "A reviewer role exists with hours allocated, not heroics.",
      "Success can be measured without argument: time, quality, incidents.",
      "Rollback is possible without customer harm.",
    ]),
    p(
      "If you cannot tick most of the list, you may still assist — suggest, summarise, route for review — but full automation is probably dishonest.",
    ),
    h2("Poor candidates — often popular anyway"),
    p(
      "Poor candidates include early-stage judgement, negotiations, complaints requiring empathy and discretion, workflows where the policy is contested, and anything regulators expect a named human to own. These are often the workflows leadership finds embarrassing — which makes them attractive targets. Embarrassment is not a selection criterion.",
    ),
    h3("The exception trap"),
    p(
      "Teams say exceptions are 'only ten per cent' without measuring. In many processes, ten per cent of cases carry ninety per cent of risk and value. Automating the easy ninety per cent can be fine — if the ten per cent has a designed path, not a hope. Hope is not a workflow.",
    ),
    quote(
      "Automate the stable centre. Design the exception path as carefully as the happy path — or do not automate.",
    ),
    h2("Assist versus automate"),
    p(
      "Not every model deployment should remove humans. Assistance — draft, suggest, retrieve, check — can be the right class of move when error costs are high or policy is evolving. Assistance is also easier to roll back. The business case should name which mode you are buying: removal of labour, or reduction of labour with review.",
    ),
    {
      t: "table",
      caption: "Assist versus automate",
      head: ["Assist (human-in-the-loop)", "Automate (machine-led)"],
      rows: [
        ["Reviewer priced from day one", "Review assumed temporary"],
        ["Policy still evolving", "Policy stable and written"],
        ["Error cost high or reputational", "Error cost low and measurable"],
        ["Rollback is frequent and normal", "Rollback is rare and exceptional"],
        ["Good for judgement-heavy work", "Good for volume-heavy work"],
      ],
    },
    p(
      "Many failed 'automations' were assist jobs implemented as automate jobs — review was treated as scaffolding to remove, not as production architecture.",
    ),
    h2("Readiness: organisation, not technology"),
    p(
      "Readiness is an owner, a measure, a training plan, policy alignment, and capacity to maintain data contracts. Technology readiness without organisational readiness produces shelfware with a model inside.",
    ),
    ol([
      "Name the owner who will run this after go-live — role and hours.",
      "Write the policy: when to trust, when to override, how to record overrides.",
      "Define evaluation thresholds with operations and risk.",
      "Pilot on one team with real backlog, not volunteers.",
      "Decide what work stops to create absorption capacity.",
      "Plan rollback before launch, not after the first incident.",
    ]),
    p(
      "If readiness work feels too slow, compare it to the speed of unwinding a bad automation in front of customers.",
    ),
    h2("Sequence: simplify before you automate"),
    p(
      "Often the highest return is not a model. It is removing a step, fixing a join, standardising intake, or stopping a duplicate control. Simplification is unfashionable because it does not photograph well. It is frequently faster and more durable than a tool on top of complexity.",
    ),
    p(
      "Use automation when simplification has plateaued — when the remaining work is genuinely volumetric and the rules are honest. Until then, you are paying to automate your own mess.",
    ),
    h2("A decision checklist"),
    p(
      "Before funding automation, answer yes to all of the following — or write why an exception is justified in one sentence with an owner.",
    ),
    ul([
      "The problem is named with a constraint, not a use case.",
      "Delay was diagnosed with the capacity test, not assumed.",
      "Slice one is one team, one workflow, one measure.",
      "Exceptions have a designed path and named reviewers.",
      "Evaluation and rollback are budgeted.",
      "Something else will stop to fund absorption.",
    ]),
    p(
      "A single no is not a veto. It is a signal to narrow, assist instead of automate, or fix the join first.",
    ),
    h2("What leadership should refuse"),
    p(
      "Refuse organisation-wide automation mandates without slices. Refuse benchmarks that ignore error cost. Refuse demos without the join. Refuse business cases without review labour. Refuse 'AI will figure out exceptions'. Those refusals are how you protect the organisation's appetite for the next move that actually fits.",
    ),
    p(
      "Constrange helps teams decide whether automation is the right class of move — and if so, whether to assist or automate, what slice to fund, and what to stop. The outcome is often smaller than the vendor hoped. It is usually more likely to last past the POC.",
    ),
    h2("Sector patterns — without stereotypes"),
    p(
      "Regulated environments often need assist-first designs with strong audit trails — not because regulators dislike technology, but because discretion and accountability must remain visible. High-volume operations can justify automate-first on stable slices if error costs are low and review is sampled. Professional services firms frequently confuse drafting assistance with judgement replacement; the cost shows up in rework and client trust, not in the API bill.",
    ),
    p(
      "Patterns are not prescriptions. The same sector can contain both excellent automation candidates and terrible ones in adjacent teams. Walk the work.",
    ),
    h2("Designing the exception path"),
    p(
      "If you automate, design escalation as carefully as automation. Who sees the exception? How fast? With what context? What gets logged? What happens if the reviewer disagrees with the model twice in a row? Exceptions are not debris. In many processes they are where expertise lives.",
    ),
    ol([
      "Classify exceptions up front — data missing, policy ambiguous, customer distress, fraud signal.",
      "Route each class to a role with hours allocated, not to 'the team'.",
      "Record overrides in a place audit can reach.",
      "Review exception rates weekly in early production, not quarterly.",
      "Feed exception learning back into policy and training — not only into model tuning.",
    ]),
    p(
      "An automation without an exception path is a machine for generating silent policy breaches.",
    ),
    h2("Maintenance is a feature"),
    p(
      "Processes change: products update, regulations shift, customers learn how to game intake. Automation must be maintained — prompts, rules, thresholds, training material. Maintenance is not failure. It is the cost of keeping a machine aligned with reality.",
    ),
    p(
      "Budget maintenance hours from go-live, not from 'steady state'. Steady state is a fiction in live operations. If nobody owns maintenance, the automation will drift until someone turns it off and blames adoption.",
    ),
    h2("When to revisit the decision"),
    p(
      "Revisit automation decisions when the join changes, when error costs change, when policy changes, or when adoption diverges from forecast by more than you can explain. Revisit also when the unofficial path reasserts itself — that is a signal the tool does not match the work.",
    ),
    quote(
      "The right automation is the one you can maintain honestly — not the one that looked most impressive in the first demo.",
    ),
    cta(
      "Considering automation?",
      "Bring the workflow as it runs on a hard day — not the process pack. We will help you decide if a tool is warranted yet.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Can we automate incrementally?",
      "Yes — and you should. Slice one should be small enough to roll back. Incremental is not the same as vague; the slice still needs a measure and owner.",
    ],
    [
      "What if leadership wants quick wins?",
      "Quick wins that skip the join create slow losses. A narrow assist with review is often the honest quick win.",
    ],
    [
      "How do we measure success?",
      "Use measures operations recognises: handling time, rework rate, escalation rate, incidents — not tool logins.",
    ],
    [
      "When should we not automate at all?",
      "When the work is misnamed, the join is broken, ownership is absent, or error costs are high and policy is unsettled. Fix or assist first.",
    ],
  ],
}
