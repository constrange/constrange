import type { Article } from "../types"
import { author, cta, h2, h3, note, p, quote, readTime, ul } from "../helpers"

export const buildBuyAutomatePost: Article = {
  slug: "build-buy-automate-or-leave-alone",
  title: "Build, buy, automate, or leave alone?",
  deck: "Four paths, one constraint. The right choice is rarely the most interesting one — it is the one operations can absorb without hiding the real problem.",
  category: "Decision guides",
  date: "20 September 2026",
  dateIso: "2026-09-20",
  readTime: readTime(1700),
  author,
  tags: ["Build vs buy", "Automation", "Technology strategy", "Prioritisation"],
  art: { label: "Four paths", cells: ["Build", "Leave"], tone: "clay" },
  body: [
    p(
      "Every technology conversation eventually collapses into four verbs: build it yourself, buy something that exists, automate what is repetitive, or leave the work alone for now. The verbs are simple. The choice is not, because each path carries a different cost in money, attention, risk, and political capital.",
    ),
    p(
      "Teams often treat the choice as a preference. Engineers lean build. Procurement leans buy. Operations leans leave alone. Transformation offices lean automate. Preferences are not analysis. The analysis starts with the problem, the constraint, and whether the organisation can absorb the path it is flattering.",
    ),
    p(
      "Constrange uses these four paths as a forced ranking, not a menu. You may combine them in sequence. You may not honestly choose all four at once for the same problem without paying twice.",
    ),
    h2("Start with leave alone"),
    p(
      "Leave alone is the path people forget to list. It means the problem is not worth solving this year under this constraint, or the pain is local enough that a workaround is cheaper than change, or the organisation lacks capacity to absorb any of the other three paths without breaking something else.",
    ),
    p(
      "Leave alone is not negligence. It is a decision with a written reason and, ideally, a condition that would reopen the choice. Without that discipline, leave alone becomes drift — the problem compounds while everyone waits for a budget cycle.",
    ),
    note(
      "If nobody can say why a problem has been tolerated for two years, you do not have a leave-alone strategy. You have avoidance.",
    ),
    p(
      "Leave alone wins when the downside of change exceeds the downside of staying, when the domain is about to be reshaped by an external event anyway, or when fixing the join matters more than adding a tool. It is often the bravest slide in the deck.",
    ),
    h2("Automate: when the work is known"),
    p(
      "Automate fits when the steps are stable, the inputs are reliable enough, the exceptions are visible, and a human can own verification without drowning. Good automation removes toil. Bad automation encodes a broken process at machine speed.",
    ),
    ul([
      "The process is documented as done, not only as drawn",
      "Exceptions have a queue and an owner",
      "Rollback is understood if the automation is wrong",
      "The team has time to maintain rules when reality shifts",
      "The join upstream will not invalidate the automation next month",
    ]),
    p(
      "Automate is often the right first move when buy or build would be oversized. It is the wrong move when the work is unstable because the organisation has not decided what the work should be. Automating undecided work preserves confusion efficiently.",
    ),
    h2("Buy: when the problem is common"),
    p(
      "Buy fits when the problem is shared across your industry, the vendor’s core is credible, integration cost is honest, and you are willing to adapt process to the product where the product is genuinely stronger. Buy fails when you need the vendor to become your operating model, or when your differentiator is exactly what the product will standardise away.",
    ),
    p(
      "Sophisticated buying starts with non-goals. What you will not customise. What you will not integrate on day one. What you will stop doing because the product replaces it. Without stops, buy becomes build with someone else’s codebase and your unpaid services team.",
    ),
    h3("The integration tax"),
    p(
      "Every buy pays an integration tax. The tax is higher when data definitions disagree, when the unofficial path must be preserved, and when the vendor’s object model does not match how finance or operations actually thinks. Estimate the tax in people-months, not in licence fees. If the tax exceeds build for the slice you need, the spreadsheet favours a different path.",
    ),
    h2("Build: when the fit is the product"),
    p(
      "Build fits when the capability is genuinely specific to how you create value, when no vendor will prioritise your edge case, when ownership and pace matter more than feature breadth, and when you have the team to maintain what you ship — not only to launch it.",
    ),
    p(
      "Build is not free because you already employ engineers. Those engineers were doing something else. Build also creates a permanent maintenance obligation. If the organisation treats build as a project with an end date, you will inherit shelfware you own entirely.",
    ),
    p(
      "A useful build test: if we stopped investing in this in year two, would we still be better off than the buy option? If the answer is no, you are renting a build team to avoid a procurement conversation, not creating durable advantage.",
    ),
    h2("How to rank the four paths"),
    p(
      "Work in this order. First, is the problem named with a constraint and non-goals? If not, stop. Second, should we leave alone with a condition? If yes, write it down and exit. Third, is the work stable enough to automate a slice? If yes, automate the slice before you buy a platform. Fourth, is the problem common enough to buy with honest integration cost? If yes, buy with stops. Fifth, is the capability specific enough to build and maintain? If yes, build the smallest thing that proves fit.",
    ),
    p(
      "This order offends people who have already chosen a vendor. It is still cheaper than discovering the order in reverse during implementation.",
    ),
    quote(
      "The most expensive path is the one you chose because it was interesting, not because it fit the constraint.",
    ),
    h2("Combining paths without paying twice"),
    p(
      "Sequences are allowed. Automate a slice while you evaluate buy. Buy a core and build a thin differentiator on top. Leave a domain alone while you fix a join that blocks every other option. What you cannot do is fund build and buy for the same problem without naming what each owns. Parallel paths multiply cost and diffused accountability.",
    ),
    p(
      "Write the sequence on one page: this quarter automate intake; next quarter decide buy versus build for the core; these non-goals stay fixed. Sequences die when every quarter replays the same vendor demo because nobody wrote the refusal.",
    ),
    h2("Politics and the obvious path"),
    p(
      "Sometimes the right path is politically unavailable. A sponsor needs a buy to show progress. A team needs a build to protect headcount. An automation tool is already licensed and must be used. Politics is a constraint too. Name it. Then decide whether you are making a fit decision or a peace decision. Peace decisions are valid. They should be labelled, so operations knows what it is absorbing.",
    ),
    h2("What leadership should see"),
    p(
      "Ask for the ranking, not the roadmap. Ask what you are leaving alone and why. Ask what stops if you buy. Ask who maintains what you build. Ask what verification costs if you automate. Ask what happens if the chosen path is wrong in six months — can you unwind, and who will?",
    ),
    p(
      "Four paths, one constraint. The work is to hold them long enough that one path is clearly first — and the others are refused or sequenced, not kept alive as a comfort blanket.",
    ),
    p(
      "Constrange’s role in these decisions is not to prefer build or buy as ideology. It is to restore the problem to the centre, put the constraint on the first page, and leave you with a path that someone can start on a Tuesday — including the path that changes nothing until the organisation is ready.",
    ),
    cta(
      "Rank the paths honestly",
      "Bring the problem and the constraint. We will help you choose build, buy, automate, or leave alone — with non-goals written down.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Is leave alone ever the right recommendation?",
      "Yes. When capacity, downside of change, or an impending external shift makes action wasteful, leave alone with a written condition is responsible — not passive.",
    ],
    [
      "Should we always try automate before buy?",
      "Often for a slice, not always forever. Automate proves stability and fit cheaply. If the domain is inherently commodity, buy may win without a long automate phase.",
    ],
    [
      "How do we estimate integration tax for a buy?",
      "In people-months against a named slice: data mapping, joins, exceptions, testing, training. Compare to build for the same slice, not to the whole product vision.",
    ],
    [
      "What if we already bought the platform?",
      "Then the decision is what problem it will serve and what you will stop. The four paths still apply to what remains — you are not obliged to build everything on top of a mismatch.",
    ],
  ],
}
