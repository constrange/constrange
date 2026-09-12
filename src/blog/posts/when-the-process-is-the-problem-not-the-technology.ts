import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const processIsTheProblemPost: Article = {
  slug: "when-the-process-is-the-problem-not-the-technology",
  title: "When the process is the problem, not the technology",
  deck: "Why replacing software rarely fixes a broken operating model.",
  category: "Perspectives",
  date: "14 September 2026",
  dateIso: "2026-09-14",
  readTime: readTime(2000),
  author,
  tags: ["Operating model", "Process design", "Legacy systems"],
  art: { label: "Perspectives", cells: ["Software cannot fix a broken operating model"], tone: "moss" },
  body: [
    p(
      "The incumbent system is blamed for everything slow, opaque, and frustrating. Leadership authorises a replacement. Consultants map workflows. Vendors promise transformation. Eighteen months later, the new platform is live and the same complaints return with different vocabulary. The work still stalls at the same handoff. The same manager still makes the same exception. The same report still arrives late because nobody agreed what 'complete' means.",
    ),
    p(
      "Software encodes process. It does not invent discipline. When the operating model is contested, ambiguous, or dependent on heroics, a replacement system becomes a expensive mirror. Constrange sees replatforming programmes that would have delivered more value as a two-page decision rights document and a single owner for intake.",
    ),
    p(
      "That does not mean technology never matters. It means technology is the wrong first move when the breakdown is in how work is assigned, measured, or escalated. Replacing the tool before fixing the model ships the confusion faster.",
    ),
    h2("How process problems disguise themselves as system problems"),
    p(
      "Symptoms point at software because software is visible. Screens, tickets, error messages. Process problems are social: who can say no, who must approve, what happens when the policy and the emergency disagree. Teams describe the pain as 'the system won't let us' when the truth is 'we never agreed who owns the exception'.",
    ),
    fig(
      "/blog/figures/process-is-the-problem.svg",
      "Comparison of a broken operating model versus adding new software",
      "A new layer on a broken process often produces faster confusion, not faster work.",
    ),
    ul([
      "Multiple teams touch the same object with different definitions.",
      "Escalation paths exist on paper but not in practice.",
      "Volume is high but variance is handled by named individuals, not rules.",
      "Policy requires steps that operations routinely skip with tacit permission.",
      "Success metrics reward speed in one team and caution in another.",
    ]),
    h2("What a broken operating model looks like"),
    p(
      "A broken model is not chaos. It is often highly skilled improvisation. People know which inbox to use, which call to make, which version of the spreadsheet is current this week. That improvisation keeps revenue moving. It also hides risk. When those people leave, the model breaks visibly and leadership blames the tool.",
    ),
    {
      t: "table",
      caption: "Process failure vs system failure",
      head: ["Observation", "More likely a process issue if…"],
      rows: [
        ["Work stalls mid-flow", "Handoffs are unnamed or contested"],
        ["Data is wrong", "Definitions differ by team"],
        ["Reports disagree", "No single owner for the metric"],
        ["Training never sticks", "Real work differs from documented work"],
        ["Automation fails in production", "Exceptions dominate and are undocumented"],
      ],
    },
    p(
      "If more than one row feels familiar, replacing software treats the symptom. You may still need new technology later. You need a readable model first.",
    ),
    h2("Why replatforming repeats the pattern"),
    p(
      "Replacement projects copy the current workflow into a new tool because discovery is easier than negotiation. Political landmines are avoided by 'like for like' migration. Exceptions are described as edge cases rather than core work. Go-live dates dominate definition work.",
    ),
    p(
      "Vendors are not incentivised to tell you the process is broken. Their product assumes a model. Implementation partners map what exists. Neither role is designed to stop the programme and fix ownership. So the new system launches with the old arguments baked in, now with higher switching costs.",
    ),
    note(
      "If your migration strategy is 'lift and shift', ask what you are lifting. Often it is dysfunction with a login.",
    ),
    h2("Fixes that cost less than a platform"),
    p(
      "Name decision rights for the object that stalls. Write the definition everyone argues about. Collapse approval layers that add delay without reducing risk. Stop measuring conflicting outcomes in adjacent teams. Publish the unofficial path and decide whether to formalise or remove it.",
    ),
    h3("Sequence before you sign with a vendor"),
    ol([
      "Map the last ten exceptions. Who resolved them? By what rule?",
      "Identify one handoff that fails weekly. Name an owner.",
      "Agree one definition that would remove a recurring meeting.",
      "Pilot a manual fix for thirty days. Measure whether work moves.",
      "Only then scope what software must encode.",
    ]),
    p(
      "Thirty days of manual discipline sounds slow. It is faster than twelve months of platform configuration that encodes the wrong model.",
    ),
    h2("When software is still the right move"),
    p(
      "Technology earns its place when the model is clear enough to encode, when the join is technical rather than political, or when the incumbent cannot meet a non-negotiable constraint. It is also right when manual fixes worked and now need scale. The sequence matters: clarity, then tool.",
    ),
    {
      t: "table",
      caption: "Ready for software when…",
      head: ["Test", "Pass criteria"],
      rows: [
        ["Definition", "Operations agrees on the core object"],
        ["Ownership", "Named role owns exceptions after go-live"],
        ["Volume", "Work is repeatable enough to encode"],
        ["Capacity", "Organisation can absorb change this year"],
        ["Measure", "Success metric exists before build"],
      ],
    },
    quote(
      "You cannot automate a disagreement. You can only automate what people have already decided to do the same way.",
    ),
    h2("What leadership should ask"),
    p(
      "Ask whether the programme changes who can say no. Ask what happens to the ten most common exceptions. Ask which meeting disappears if this succeeds. Ask who loses a workaround they rely on. If answers are vague, the process is still the problem.",
    ),
    p(
      "Constrange is not anti-software. We are pro-sequence. When the process is the problem, the honest move is smaller, earlier, and more political than a RFP. Fix the model. Then choose the tool that fits a world operations already recognises.",
    ),
    h2("Replatforming red flags"),
    ul([
      "Discovery is mostly 'as-is' mapping without exception depth.",
      "Success metric is go-live date, not behaviour change.",
      "No stop list for parallel tools.",
      "Vendor statement of work owns configuration; operations owns outcomes without hours allocated.",
      "Training plan assumes documented process matches reality.",
    ]),
    p(
      "Two or more red flags suggest the programme will encode the current model faster, not fix it.",
    ),
    h2("Process fixes that unlock later technology"),
    p(
      "Agreeing decision rights often removes half the automation debate. Retiring duplicate reports frees analysts to own definition. A thirty-day manual pilot proves whether volume justifies build. These moves are unmarketable and effective.",
    ),
    p(
      "Leadership that funds process work before platform spend sends a signal: fit matters more than motion.",
    ),
    cta(
      "Replacing a system that still feels broken?",
      "Bring the workflow and the exceptions. We will help you see whether the operating model must move first.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Can BPM or workflow tools fix a broken process?",
      "They can encode a agreed model. They cannot negotiate the model for you.",
    ],
    [
      "What if leadership has already approved budget?",
      "Use the budget for definition, pilot, and a thin slice. Postpone configuration that cements the wrong shape.",
    ],
    [
      "How do we surface the unofficial path without blame?",
      "Treat it as load-bearing infrastructure until proven otherwise. Ask what it protects.",
    ],
    [
      "Is process mapping enough?",
      "Only if it includes exceptions, owners, and decision rights. Maps without those are wallpaper.",
    ],
  ],
}
