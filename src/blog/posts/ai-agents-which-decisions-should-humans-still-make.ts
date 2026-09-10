import type { Article } from "../types"
import { author, cta, h2, h3, note, p, quote, readTime, ul } from "../helpers"

export const aiAgentsPost: Article = {
  slug: "ai-agents-which-decisions-should-humans-still-make",
  title: "AI agents: which decisions should humans still make?",
  deck: "Agents can act. That does not mean every action should be delegated. The question is which decisions carry consequence your organisation cannot outsource.",
  category: "Decision guides",
  date: "16 September 2026",
  dateIso: "2026-09-16",
  readTime: readTime(1700),
  author,
  tags: ["AI agents", "Human judgement", "Decision-making", "Governance"],
  art: { label: "Agents", cells: ["Machine", "Human"], tone: "wine" },
  body: [
    p(
      "An agent is not a chat window. It is a system that can take steps — query a database, draft a document, send a message, trigger a workflow — without a human in the loop for each move. That is useful. It is also a category error to treat every business decision as a candidate for delegation simply because the agent is competent at the mechanics.",
    ),
    p(
      "The question is not whether agents work. They do, within bounds. The question is which decisions carry consequence that your organisation cannot outsource — legally, operationally, or morally — and which are routine enough that a machine can act while a human reviews the pattern rather than every instance.",
    ),
    p(
      "Constrange sees this distinction collapse in two directions. Some teams delegate too much: an agent books refunds, changes records, or commits spend because it can, and nobody has written down what must still be held by a person. Other teams delegate too little: they keep humans in loops that add delay without adding judgement. Both errors cost money. Only one of them makes the evening news.",
    ),
    h2("What an agent is actually good at"),
    p(
      "Agents excel at work that is repetitive, well-defined, and reversible within clear limits. Fetching information from systems that already exist. Drafting a first version of something a human will edit. Routing a request to the right queue. Executing a playbook when the conditions are unambiguous. These are not trivial tasks. They are tasks where the cost of a mistake is bounded and the path to correction is known.",
    ),
    p(
      "They are also good at speed across volume. A human cannot read every exception in a large dataset. An agent can flag patterns for review. That is a different job from deciding what to do about the pattern. The flag is mechanical. The decision is not.",
    ),
    ul([
      "Retrieval and synthesis across systems with stable schemas",
      "First drafts where a human owns the final version",
      "Routing and triage against explicit rules",
      "Monitoring for conditions that trigger a defined response",
      "Executing playbooks where the steps are written and the rollback is known",
    ]),
    p(
      "Notice what is absent from that list: naming a problem, refusing a popular option, accepting trade-offs that will anger a sponsor, or deciding that the organisation should stop doing something. Those are judgement calls. They require a held picture of the situation, not a faster executor.",
    ),
    h2("The decisions that must stay human"),
    p(
      "A decision should stay with a human when any of the following is true: the consequence is irreversible or hard to unwind; the decision allocates scarce resources between competing legitimate claims; the decision affects people in ways they did not consent to; the decision crosses a regulatory or contractual line where accountability must be named; or the decision changes what the organisation is willing to do, not merely how it does it.",
    ),
    p(
      "This is not a complete legal framework. It is a practical filter. If you cannot answer who will be asked, in a year, why this happened and who owned it, the agent should not have been the actor of record.",
    ),
    h3("Irreversibility and asymmetry"),
    p(
      "Some actions are easy to undo in theory and expensive in practice. Firing a customer. Publishing a statement. Committing to a vendor for three years. Changing a price for a segment. An agent that can take these steps is not an efficiency gain. It is a liability with autocomplete.",
    ),
    p(
      "Asymmetry matters too. A wrong refund costs money. A wrong denial of a legitimate claim costs trust, and trust does not have a rollback script. Humans are not perfect at these calls either. The point is that when the downside is uneven, the organisation should know who made the call and why — not discover it from a log file after the pattern has repeated.",
    ),
    note(
      "If you would not let a junior employee take the action without a supervisor, you should not let an agent take it without a human gate — and you should be honest about whether the supervisor is reviewing or merely rubber-stamping.",
    ),
    h3("Allocation and refusal"),
    p(
      "Agents are poor at saying no for good reasons. They optimise within a frame. They do not usually hold the frame. When two teams both need the same capacity, when a programme should be killed, when a customer segment is not worth serving at the current cost — these are allocation decisions. They require a view of constraint that is political as well as technical.",
    ),
    p(
      "Refusal is where strategy lives. An agent can implement a policy. It should not invent one by accumulating small optimisations that add up to a direction nobody chose.",
    ),
    h2("A simple boundary model"),
    p(
      "We use a three-zone model with clients who are deploying agents. It is not sophisticated. It is meant to be used in a room without a consultant present.",
    ),
    ul([
      "Green zone: the agent acts; humans review samples and tune rules. Mistakes are bounded and reversible.",
      "Amber zone: the agent proposes; a human approves before action. Volume may be high; each instance still has a named owner at approval.",
      "Red zone: humans decide; agents may inform, draft, or retrieve. No autonomous action on the record.",
    ]),
    p(
      "Most organisations need all three zones. The failure mode is painting everything green because the demo looked clean, or painting everything red because legal was never brought into a practical conversation about where the line sits.",
    ),
    p(
      "Move work between zones deliberately. Something that starts in amber may earn green status after months of stable behaviour and clear limits. Something in green that produces a near-miss should move to amber without shame. The zones are not a maturity ladder. They are a risk map.",
    ),
    h2("Where teams get this wrong"),
    p(
      "The most common error is automating the visible step while leaving the broken join untouched. An agent that drafts customer replies faster does not fix the fact that the customer had to ask three times because the systems do not agree. You have accelerated a symptom. The decision about the join — whether to fix data, process, or ownership — is still human, and still avoided.",
    ),
    p(
      "The second error is governance theatre: a human clicks approve on a hundred items they cannot possibly read. That is not a human in the loop. It is a human on the liability chain. If approval is meaningless, say so and redesign the zone. If approval matters, give the human enough context and few enough items to actually judge.",
    ),
    p(
      "The third error is treating the agent as the strategy. Leadership asks what agents we have, rather than what work should change. The agent becomes the answer looking for a process. Six months later the organisation has faster drafts and the same bottleneck at the handoff.",
    ),
    h2("Designing for judgement, not just throughput"),
    p(
      "A useful design question: if this agent disappeared tomorrow, which decisions would we still need to make? Those decisions should have owners, artefacts, and a rhythm that does not depend on the tool. The agent should serve the owners, not replace the act of owning.",
    ),
    p(
      "Another useful question: what would we want to see in the log if this went wrong? If the answer is only a model trace, you have not designed for accountability. You have designed for debugging. Accountability needs a name, a timestamp, and a reason that would make sense to someone who was not in the room.",
    ),
    quote(
      "Delegation is not abdication. An agent that acts without a clear owner for the class of action is not automation. It is drift.",
    ),
    h2("A practical sequence"),
    p(
      "Before you deploy an agent into a live path, work through the sequence. Name the work as it is done today, including the unofficial path. Name the decision embedded in that work — not the task, the decision. Classify the decision using the irreversibility and allocation tests. Assign a zone. Write the limits: what the agent cannot do, what triggers escalation, what gets sampled in review. Name the human owner for the class, not only for exceptions.",
    ),
    p(
      "Only then choose the tool. Tool-first design produces agents that are impressive in isolation and expensive in production because nobody agreed what they were allowed to change.",
    ),
    h2("What leadership should ask"),
    p(
      "Ask for the zone map, not the roadmap of features. Ask which decisions moved from human to machine this quarter, and which moved the other way. Ask for an example of a refusal the agent cannot make. Ask who reviews samples and what they do when the sample is wrong.",
    ),
    p(
      "If those questions cannot be answered plainly, you do not have an agent programme. You have a pilot that is looking for permanence without a decision about permanence.",
    ),
    p(
      "Agents will keep improving. The boundary problem will not solve itself. Organisations that treat judgement as a scarce resource — and protect it where consequence is real — will use agents well. Those that treat judgement as friction will find that friction was holding something important in place.",
    ),
    cta(
      "Map the boundary",
      "If you are deploying agents into live operations, start with the decisions — not the demo. Bring the path as it runs today.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Should humans approve every agent action?",
      "No. That creates rubber-stamp theatre. Use zones: green for bounded reversible work with sample review, amber for propose-and-approve, red for human-only decisions where agents may inform but not act.",
    ],
    [
      "Can agents make customer-facing decisions?",
      "Sometimes, in the green zone, for low-consequence reversible actions with clear limits. Anything that affects trust, legal position, or significant spend should stay amber or red until you have evidence, not optimism.",
    ],
    [
      "How do we move work from amber to green?",
      "Months of stable behaviour, clear limits, bounded mistakes, and a review rhythm that actually catches drift. It is a risk decision, not a maturity badge.",
    ],
    [
      "Is this anti-automation?",
      "No. It is pro-accountability. Automate what is routine and bounded. Keep humans where refusal, allocation, and irreversible consequence require a named owner.",
    ],
  ],
}
