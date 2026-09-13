import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const constraintIsRulePost: Article = {
  slug: "when-the-constraint-is-a-rule",
  title: "When the constraint is a rule",
  deck:
    "Some limits are technical. Some are policy. Both behave like physics until someone changes them.",
  category: "Perspectives",
  date: "20 October 2026",
  dateIso: "2026-10-20",
  readTime: readTime(1500),
  author,
  tags: ["Constraints", "Policy", "Change"],
  art: { label: "Perspectives", cells: ["Policy limits behave like physics until changed"], tone: "plum" },
  body: [
    p(
      "Programmes talk about constraints as if they were all technical. Latency, capacity, legacy code, data quality. Those are real. So are rules: approval thresholds, retention periods, segregation of duties, channel restrictions, definitions buried in policy nobody has read since the last restructure. Both kinds behave like physics. Work hits them and stops, bends, or finds an unofficial route.",
    ),
    p(
      "Constrange distinguishes constraint types because the remedy differs. A technical constraint may yield to engineering, budget, or time. A rule constraint yields to governance, sponsorship, and the uncomfortable question of whether the rule still serves the outcome it was written for. Treating a rule like a bug produces expensive software that policy still forbids.",
    ),
    p(
      "Reading constraints honestly is prerequisite to honest transformation. If the limit is a rule, the first move may be a decision meeting, not a sprint.",
    ),
    h2("Technical constraints vs rule constraints"),
    p(
      "Technical constraints live in systems: throughput ceilings, schema limits, integration patterns, skill gaps in the team that maintains the estate. Rule constraints live in documents and habits: who may approve, what may be stored where, which channel is permitted, what counts as a record, when legal must review.",
    ),
    fig(
      "constraint-is-a-rule.svg",
      "Two walls blocking flow — one labelled technical, one labelled policy — with work routing around both",
      "Both walls feel immovable to operations. Only one can be changed in a architecture workshop alone.",
    ),
    {
      t: "table",
      caption: "Two kinds of limit",
      head: ["Technical constraint", "Rule constraint"],
      rows: [
        ["Changed by engineering or spend", "Changed by decision and sponsorship"],
        ["Visible in logs and metrics", "Visible in exceptions and workarounds"],
        ["Often modelled in architecture", "Often modelled nowhere"],
        ["Fails with error messages", "Fails with 'we are not allowed'"],
        ["Remedy: build, buy, fix data", "Remedy: policy, role, definition"],
      ],
    },
    h2("Why rules feel like physics"),
    p(
      "Rules persist because they once solved a real problem: fraud, privacy breach, regulatory fine, reputational damage. They outlive the context that created them. They accumulate. They conflict. Frontline teams experience them as immovable because challenge routes to a committee that meets quarterly — or because nobody knows who can waive them.",
    ),
    p(
      "Technical teams learn to respect hard limits in systems. Policy teams learn to respect precedent. Operations sits between both and routes work around whatever will not move. The result feels like physics: you cannot pass through the wall, so you walk around it. The workaround is evidence that the rule is load-bearing — or that nobody with authority has decided otherwise.",
    ),
    ul([
      "Audit memory: 'we got burned in 2019'",
      "Ambiguous ownership: policy exists but no sponsor maintains it",
      "Incentive mismatch: local teams punished for speed, not for workarounds",
      "Definition drift: the rule uses words the organisation no longer agrees on",
      "Tool substitution: software encodes an old rule that policy has not updated",
    ]),
    note(
      "If the workaround exists because 'we are not allowed', you have a rule constraint — not a training problem.",
    ),
    h2("Symptoms you are fighting a rule with software"),
    p(
      "The programme builds elaborate workarounds inside the platform. Fields multiply to simulate exceptions policy will not permit. Integrations stop at a boundary nobody put on the diagram. Go-live slips while legal 'reviews' the same paragraph for the third quarter. Teams continue the unofficial path because the official one still violates a rule someone forgot to name in discovery.",
    ),
    p(
      "Software can make a forbidden path more elegant. It cannot make it permitted. If the constraint is a rule, engineering effort without sponsorship is expensive rehearsal for a go-live that audit will reject.",
    ),
    ol([
      "Requirements keep returning to 'permitted' and 'prohibited' language",
      "Exceptions are high volume and structurally similar",
      "The vendor says 'the product can do it' but internal policy says no",
      "Architecture is sound; deployment is stuck in governance",
      "Operations already runs the desired outcome unofficially",
    ]),
    h2("How to read a rule constraint"),
    h3("Questions that surface the real limit"),
    p(
      "Who can change this rule? What outcome was it protecting? What happens if we violate it — actually, not theoretically? Is the rule written, or is it habit dressed as compliance? Does the unofficial path prove the rule is obsolete, or that enforcement is uneven?",
    ),
    {
      t: "table",
      caption: "Rule reading checklist",
      head: ["Question", "If unclear…"],
      rows: [
        ["Who owns the rule?", "Change will stall in committee"],
        ["What risk does it mitigate?", "You cannot weigh trade-offs"],
        ["Is it written or habitual?", "You will argue about memory"],
        ["Who can waive it?", "Exceptions become permanent"],
        ["What unofficial path exists?", "Operations already voted"],
      ],
    },
    h2("Three responses when the constraint is a rule"),
    h3("Change the rule"),
    p(
      "Sponsor, forum, evidence, new wording, communicated owner. Appropriate when the rule no longer matches risk or outcome. Requires courage and a named executive, not a workshop alone.",
    ),
    h3("Change the process within the rule"),
    p(
      "Sometimes the rule is right but the path is wrong. Redesign handoffs, roles, or definitions without asking policy to disappear. Slower than wishing, faster than building forbidden capability.",
    ),
    h3("Choose risk explicitly"),
    p(
      "If the rule will not move and the unofficial path will not stop, document the gap and decide: enforce, formalise, or accept exposure. Pretending the constraint does not exist is how programmes fund software that cannot go live.",
    ),
    quote(
      "A rule constraint does not bend because the architecture is elegant. It bends when someone with authority decides the outcome matters more than the inherited fear.",
    ),
    h2("Rules, workarounds, and shadow paths"),
    p(
      "Unofficial paths often exist at rule boundaries. The inbox approval because the workflow cannot model the waiver. The export because retention policy was written for paper. The side system because the approved platform cannot store the field legal requires.",
    ),
    p(
      "Reading workarounds alongside rules reveals which limits are load-bearing and which are theatre. Constrange starts many constraint maps in the exception queue — not because exceptions are failures, but because they are where policy meets Tuesday.",
    ),
    h2("Patterns across sectors"),
    p(
      "In financial services, rule constraints often encode fear of fines — real and remembered. In healthcare, they encode patient safety and consent models that outlast any single platform. In public sector, they encode accountability to ministers and auditors. The technology differs. The shape is similar: policy arrives on the critical path late, dressed as immovable.",
    ),
    p(
      "Sector language changes. The structural move does not: name which limits are rules before you fund software to overcome them.",
    ),
    h2("Programme design under rule constraints"),
    p(
      "Sequence policy moves with technology moves. A thin slice that proves value within the rule beats a platform build that assumes the rule will vanish at go-live. Pair legal, risk, and operations in the same room early — not as gatekeepers at the end.",
    ),
    p(
      "The worst pattern is parallel workstreams: engineering builds capability while policy reviews the same paragraph in a separate calendar. By month six, the build is committed and the policy conversation becomes a blocker dressed as diligence. Shared milestones — 'definition agreed', 'exception model approved', 'pilot within rule' — keep both streams honest.",
    ),
    p(
      "Rule constraints also explain why some transformations succeed in one region and stall in another. The technology is identical. The policy interpretation is not. Reading constraints region by region is tedious and necessary. A global platform decision without local rule reading is a global surprise budget.",
    ),
    p(
      "Executives sometimes ask for a single enterprise answer when the organisation has never agreed one definition. That is not a technology problem wearing a policy hat. It is a governance problem that software will amplify. Name it early or pay for it at go-live.",
    ),
    h2("A twelve-month rule programme"),
    ol([
      "Quarter one: inventory top ten 'not allowed' statements — source, owner, last review date.",
      "Quarter two: classify each — change rule, change process within rule, or accept risk explicitly.",
      "Quarter three: execute one policy move paired with one technology move on the same object.",
      "Quarter four: measure exception volume — did the rule change or only the slide deck?",
    ]),
    p(
      "Twelve months is enough to show whether the organisation changes limits or only changes vendors. If exception volume is flat, the rule constraint won.",
    ),
    ul([
      "Name non-goals: what the programme will not ask policy to waive",
      "Publish decision rights: who can approve exception volume above threshold",
      "Measure unofficial path volume as a policy signal",
      "Retire rules that exceptions have already falsified",
      "Do not encode obsolete rules deeper into software",
    ]),
    h2("Questions for your next steering meeting"),
    ul([
      "Which limit on the diagram is policy, not technology?",
      "Who can change that rule this quarter?",
      "What unofficial path exists because we are not allowed?",
      "Are we building capability policy will still forbid at go-live?",
      "What risk are we accepting if the rule stays and the workaround stays?",
    ]),
    p(
      "If the room can only discuss sprints and licences, rule constraints will arrive late — as rework, as delay, or as a system that works in demo and fails in audit.",
    ),
    p(
      "The organisations that move fastest are not those with the fewest rules. They are those that know which rules are load-bearing, which are habit, and who can change each — before the build commits.",
    ),
    p(
      "When the constraint is a rule, the first sprint may be a decision meeting. That is not delay. It is the work that prevents expensive software from waiting on permission that was never sought.",
    ),
    cta(
      "Stuck between what the platform can do and what policy permits?",
      "Bring the architecture and the exception stories. We will help you read which constraints are rules — and design a path that changes the limit or changes the bet honestly.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Can we automate around a rule constraint?",
      "Sometimes within the rule. Automation that violates policy creates audit risk and shadow paths. Read the rule first.",
    ],
    [
      "Who should own policy change?",
      "A named executive sponsor with risk and operations in the room — not IT alone.",
    ],
    [
      "What if legal will not move?",
      "Then scope technology to what is permitted, or choose risk explicitly. Building forbidden capability is not a strategy.",
    ],
    [
      "How do we tell rule vs technical constraints quickly?",
      "Listen for 'not allowed' vs 'cannot connect'. The first is policy; the second is often engineering.",
    ],
  ],
}
