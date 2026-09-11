import type { Article } from "../types"
import { author, cta, h2, h3, note, p, quote, readTime, ul } from "../helpers"

export const aiGovernancePost: Article = {
  slug: "practical-ai-governance-framework",
  title: "A practical AI governance framework",
  deck: "Governance is not a policy PDF. It is who decides, what they may not do, and how you know the boundary moved — before a regulator or customer tells you.",
  category: "Decision guides",
  date: "19 September 2026",
  dateIso: "2026-09-19",
  readTime: readTime(1700),
  author,
  tags: ["AI governance", "Risk management", "Compliance", "Operating model"],
  art: { label: "Decision guides", cells: ["Policy on paper vs practice in the room"], tone: "frost" },
  body: [
    p(
      "AI governance has become a document genre. Principles appear on intranets. Committees meet. Someone owns a slide that says human in the loop. Meanwhile, a team deploys a tool into a live path because the quarter needed a win, and the loop turns out to be a checkbox on a hundred items nobody reads.",
    ),
    p(
      "Governance fails when it is separated from practice. Policy without practice is theatre. Practice without policy is drift. The useful middle is small enough to run weekly and serious enough that a named person would notice if it were ignored.",
    ),
    p(
      "Constrange does not sell a forty-page framework. We help organisations build governance that matches how work actually moves — owners, limits, evidence, and a rhythm that survives the next tool change.",
    ),
    h2("What governance is for"),
    p(
      "Governance exists to make three things visible: what is allowed, who is accountable, and how you detect when reality diverges from intent. It is not there to stop innovation. It is there to stop unowned innovation — the kind that becomes a incident, a fine, or a quiet loss of trust before anyone can explain why.",
    ),
    p(
      "If your governance cannot answer what we will not do with AI this year, it is aspirational writing. Refusal is the part that protects you. A list of permitted use cases without a list of refused patterns is an open door with a welcome mat.",
    ),
    h2("Policy versus practice"),
    p(
      "Policy sets the boundary. Practice enforces it in the paths where work happens. The gap between them is where organisations get hurt.",
    ),
    ul([
      "Policy: classes of use, data rules, approval requirements, prohibited actions",
      "Practice: how teams request a use, how data is sampled, how outputs are verified",
      "Evidence: logs, review samples, incident records, changes to the boundary",
      "Rhythm: a regular forum where practice is compared to policy, not only when something breaks",
    ]),
    p(
      "A policy that requires approval for customer-facing use is useless if every team interprets customer-facing differently. Practice names the paths — support chat, marketing copy, credit decisioning — and assigns zones with examples.",
    ),
    note(
      "If legal reviewed AI once at the category level, you have policy. You do not yet have governance for the use case that went live last month in customer operations.",
    ),
    h2("A framework you can run in a month"),
    p(
      "This is a minimum viable governance model. It is deliberately boring. Boring is operable.",
    ),
    h3("1. Register uses, not tools"),
    p(
      "Maintain a register of live and planned uses: what work changes, whose data is touched, which zone applies, who owns verification, what stops if the use is paused. Tools change. Uses persist. Governing tools alone is always behind.",
    ),
    h3("2. Three zones with examples"),
    p(
      "Green: act with sample review. Amber: propose, human approves. Red: human decides, tools inform only. Attach three internal examples per zone so teams do not argue from abstraction.",
    ),
    h3("3. Data rules that fit the estate"),
    p(
      "Not every field is equal. Name classes: public, internal, personal, regulated, contractual. Map which classes may enter which uses. Forbid training on customer data unless you have a written basis and a named owner. Sample before you trust.",
    ),
    h3("4. Verification as a line item"),
    p(
      "Every amber and green use has a verification method: rate, queue, rubric, escalation path. Budget time. If verification is zero hours, you have lied to yourself about the zone.",
    ),
    h3("5. A forum with teeth"),
    p(
      "A monthly thirty-minute review: new uses, near-misses, zone changes, refusals. Attendees include operations, risk, and someone who can stop a deployment. Minutes are short. Actions have names and dates.",
    ),
    h2("Accountability without blame theatre"),
    p(
      "Governance needs names, not committees in the abstract. For each use, one operational owner and one risk counterpart. The operational owner is accountable for fit and verification. The risk counterpart is accountable for whether the zone still matches the downside.",
    ),
    p(
      "When something goes wrong, the first question is not who clicked the wrong button. It is whether the class of action was governed, whether the zone was honest, and whether review was real. Blame without structure produces hiding. Structure without blame produces learning.",
    ),
    h2("Regulation and the board"),
    p(
      "Regulatory language will keep shifting. Your framework should not require a rewrite every time a guidance note appears. Anchor on consequence: personal data, automated decisions with legal effect, critical infrastructure, financial promotions, employment decisions. Those categories have durable weight even when the article numbers change.",
    ),
    p(
      "The board does not need to understand embeddings. It needs to understand exposure: which uses are live, which zones apply, what incidents occurred, what was refused, and whether the organisation can explain a decision to a customer or regulator in plain language. That is a governance pack, not a technical deep dive.",
    ),
    quote(
      "If you cannot explain to a customer why they received an outcome, you do not have governance. You have automation.",
    ),
    h2("Common failures"),
    p(
      "One-size policy: a single approval form for every use, so teams route around it. Over-centralisation: a centre of excellence that becomes a bottleneck while shadow uses multiply. Under-centralisation: every team invents its own rules until data leaks are inevitable. Documentation without sampling: policies exist, nobody checks outputs. Sampling without power: reviewers see problems and cannot stop the path.",
    ),
    p(
      "Each failure has a fix that is organisational, not technical. Narrow the approval paths. Give the forum stop authority. Register shadow uses without punishing the first confession — punish only repeated hiding.",
    ),
    h2("Making governance stick"),
    p(
      "Governance sticks when it helps teams ship safely, not when it only says no. Provide templates: zone request, data checklist, verification rubric. Provide a fast path for low-risk green uses. Provide a clear escalation when amber is unsure. Slow the dangerous moves. Speed the bounded ones.",
    ),
    p(
      "Measure what matters: time to decision for a new use, incident rate, percentage of uses with named owners, sample review completion, refusals recorded. Do not measure number of policies published.",
    ),
    h2("Starting from zero"),
    p(
      "If you have nothing today, start with inventory. Ask every function what is live or piloting. You will find more than IT knows about. Classify roughly. Pause the highest-risk unowned uses until a zone and owner exist. Stand up the monthly forum before you stand up the perfect policy.",
    ),
    p(
      "Perfect governance delayed is unowned practice continued. A thin framework running beats a thick framework in draft. You can tighten as you learn. You cannot unlearn an incident.",
    ),
    p(
      "Policy sets intent. Practice proves whether intent survived contact with the quarter. Constrange helps teams build both — small, named, and inspectable — so AI use stays a decision your organisation owns rather than a surprise it explains later.",
    ),
    cta(
      "Make governance operable",
      "Bring what is live today — including the pilots IT has not seen. We will help you build a framework that fits how you actually work.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Do we need a dedicated AI governance committee?",
      "You need a forum with stop authority and a rhythm, not necessarily a large committee. Small, frequent, named beats broad and rare.",
    ],
    [
      "How does this relate to existing data governance?",
      "AI governance extends data rules into use, verification, and zones. It should connect to data ownership, not duplicate it in a separate silo.",
    ],
    [
      "What if teams deploy tools without asking?",
      "Inventory, classify, and bring shadow uses into the register without immediate punishment. Repeat hiding is a disciplinary matter; first confession is a governance win.",
    ],
    [
      "Is a policy enough for regulators?",
      "No. Regulators care about practice, evidence, and accountability. Policy is the start. Samples, owners, and incident response are what you will be asked to show.",
    ],
  ],
}
