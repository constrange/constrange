import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const buildBuyAdaptWalkAwayPost: Article = {
  slug: "build-buy-adapt-or-walk-away",
  title: "Build, buy, adapt — or walk away",
  deck: "A more honest framework for deciding when technology investment isn't worth making.",
  category: "Decision guides",
  date: "20 September 2026",
  dateIso: "2026-09-20",
  readTime: readTime(2000),
  author,
  tags: ["Build vs buy", "Investment", "Decision guides"],
  art: { label: "Decision guides", cells: ["Four paths including doing nothing"], tone: "clay" },
  body: [
    p(
      "Most frameworks offer three doors: build, buy, or partner. Real rooms need a fourth: walk away. Not as failure — as a disciplined choice when the problem is misnamed, the capacity is missing, or the absorption cost exceeds the constraint you are trying to remove. Without the fourth door, every comparison becomes a forced purchase.",
    ),
    p(
      "Adapt sits between buy and walk away: change how you use what you have, fix the join, govern the shadow spreadsheet, clarify ownership. It is unglamorous and often sufficient. Constrange adds adapt and walk away to stop build versus buy debates that ignore the majority of good outcomes.",
    ),
    p(
      "This framework holds the same first slice constant across paths so comparisons are honest. It also requires non-goals: what you will not do even if a vendor makes it look easy.",
    ),
    h2("Four paths defined"),
    p(
      "Build: own the design around the work — custom software, owned integrations, explicit exception handling. Buy: adopt a product's model of the work with eyes open about fit. Adapt: change process, configuration, or ownership without a new platform. Walk away: defer, simplify, or accept risk with named conditions for reopening.",
    ),
    fig(
      "/blog/figures/build-buy-adapt-walk-away.svg",
      "Four columns labelled build, buy, adapt, and walk away",
      "Walking away is a legitimate outcome when the problem or capacity does not justify investment.",
    ),
    {
      t: "table",
      caption: "Four paths at a glance",
      head: ["Path", "When it fits", "Primary risk"],
      rows: [
        ["Build", "Work is specific; exceptions are the product", "Ownership and maintenance"],
        ["Buy", "Work is standard; join is shallow", "Misfit and shelfware"],
        ["Adapt", "System adequate; model is not", "Politics of change without new toy"],
        ["Walk away", "Constraint elsewhere; capacity full", "Being read as delay without conditions"],
      ],
    },
    h2("When to build"),
    p(
      "Build when encoding judgement is the value — what to retrieve, refuse, escalate, record. Build when the join is deep and long-lived. Build when a product would force misdescription of the work. Fund a slice, not a platform ambition.",
    ),
    h3("Build tests"),
    ul([
      "Named internal owner for data, evaluation, and change",
      "Exceptions are documented, not heroic",
      "First slice does not require whole-estate migration",
      "You can explain what you will not automate",
    ]),
    h2("When to buy"),
    p(
      "Buy when the workflow matches the product's centre of gravity, integration is bounded, and you accept the vendor's roadmap for the core. Buy narrow — one team, one workflow — before enterprise rollouts.",
    ),
    h3("Buy tests"),
    ul([
      "Operations recognises the workflow without translation",
      "Data required is stable and owned",
      "You know what happens if the vendor pauses for a year",
      "Licence growth is priced honestly",
    ]),
    h2("When to adapt"),
    p(
      "Adapt when the tool is adequate but the operating model is not. Examples: enforce a single definition, retire duplicate reports, name queue owners, formalise a shadow spreadsheet with controls, remove approval layers that add delay without risk reduction.",
    ),
    p(
      "Adapt fails when leadership will not enforce change without a new logo. Then honesty requires walk away or build/buy with eyes open about politics.",
    ),
    {
      t: "table",
      caption: "Adapt moves that often outperform new software",
      head: ["Move", "Typical impact"],
      rows: [
        ["Single definition workshop", "Removes reconciliation meetings"],
        ["Queue owner with SLA", "Replaces inbox chaos"],
        ["Retire one redundant tool", "Reduces integration tax"],
        ["Exception playbook", "Reduces hero dependency"],
        ["Stop list for reports", "Frees analyst time"],
      ],
    },
    h2("When to walk away"),
    p(
      "Walk away when the problem is not in the technology layer, when capacity is the binding constraint, or when the unofficial path is load-bearing and unowned. Walking away includes wait with conditions: what signal reopens the decision, who watches, what metric would change your mind.",
    ),
    note(
      "Walk away is not 'no forever'. It is 'not now, because' — written down.",
    ),
    h2("Comparing paths on one slice"),
    ol([
      "Define the problem and non-goals in one page.",
      "Sketch the unofficial path.",
      "Scope the same thin end-to-end slice for all four paths.",
      "Price twelve months including ownership hours, not only licences or build fees.",
      "Choose the path that removes the constraint with the smallest absorbed change.",
    ]),
    quote(
      "The honest framework includes the option to spend nothing — on purpose, with conditions.",
    ),
    h2("What leadership should demand"),
    p(
      "Demand all four columns in the business case. Demand a stop list. Demand named owners. Reject decks that only compare vendors. Celebrate walk-away decisions that prevented a bad programme.",
    ),
    p(
      "Constrange uses this framework in every engagement. Build, buy, adapt, or walk away — the right path is the one that fits a named problem inside real limits.",
    ),
    h2("Sequencing multiple paths"),
    p(
      "Common sequence: walk away from platform RFP → adapt process for ninety days → buy narrow slice if adapt plateaus → build only if buy misdescribes exceptions. Sequencing beats parallel pilots that compete for attention.",
    ),
    p(
      "Write the sequence with dates and owners. Without dates, adapt becomes permanent limbo.",
    ),
    h2("Board-level framing"),
    ul([
      "Present all four columns, not only vendor quotes.",
      "Show stop list and capacity impact.",
      "Name risk of walk away explicitly.",
      "Tie first slice to one measurable behaviour.",
      "Set review date before scale funding.",
    ]),
    p(
      "Boards approve trade-offs, not logos. Give them trade-offs.",
    ),
    cta(
      "Stuck in a build versus buy debate?",
      "Bring the problem and the pressure to buy. We will run all four paths against the same first slice.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Is adapt just change management?",
      "Adapt includes process and ownership change, with or without new software. It is not communications alone.",
    ],
    [
      "How do we justify walk away to the board?",
      "Show the absorption cost, the missing owner, and the conditions to reopen. That is risk reduction.",
    ],
    [
      "When does adapt become build?",
      "When configuration cannot encode the work honestly and exceptions dominate.",
    ],
    [
      "Can we combine paths?",
      "Yes. Adapt while buying a narrow slice is common. Sequencing matters.",
    ],
  ],
}
