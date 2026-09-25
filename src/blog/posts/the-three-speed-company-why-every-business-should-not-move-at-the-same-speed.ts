import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const theThreeSpeedCompanyWhyEveryBusinessShouldNotMoveAtTheSameSpeedPost: Article = {
  slug: "the-three-speed-company-why-every-business-should-not-move-at-the-same-speed",
  title: "The Three-Speed Company: Why Every Business Should Not Move at the Same Speed",
  deck: "Exploration, growth, and run-the-business work operate on different clocks. Forcing one cadence creates either reckless stability or paralysed innovation.",
  category: "Decision guides",
  date: "4 May 2026",
  dateIso: "2026-05-04",
  readTime: readTime(1505),
  author,
  tags: ["Operating rhythm","Innovation","Governance","Portfolio"],
  art: { label: "Decision guides", cells: ["Exploration, growth, and run-the-business work operate on different c…"], tone: "dusk" },
  body: [
    p(
      "Companies default to one calendar — the budget cycle, the sprint, the quarterly business review. Exploration needs quarters. Growth bets need months. Core operations need weeks. Collapsing those clocks guarantees misfit funding and false failure.",
    ),
    p(
      "Constrange models three speeds: explore (test hypotheses), grow (scale what worked), run (deliver reliably). Each speed has different risk appetite, metrics, and governance. Mixing them in one forum kills exploration or starves operations.",
    ),
    p(
      "Three-speed design is not bureaucracy. It is permission structure — so a pilot is not judged like a factory, and a factory is not asked to pivot like a lab.",
    ),
    h2("Why one speed fails"),
    p(
      "Exploration judged on quarterly ROI dies early. Core ops judged on experiment KPIs thrashes customers. Same meeting, same template, wrong outcomes.",
    ),
    p(
      "High performers in run mode get assigned innovation without protection — they fail, and the lesson learned is do not innovate.",
    ),
    p(
      "Budget cycles fund explore like grow — multi-year commitments before learning — or fund grow like run — no scale investment.",
    ),
    fig("three-speed-company.svg", "Three boxes labelled explore, grow, and run with different time horizons", "Different work needs different clocks — not one corporate calendar."),
    {
      t: "table",
      caption: "Three speeds at a glance",
      head: ["Speed","Clock","Primary metric","Governance"],
      rows: [
              [
                      "Explore",
                      "Quarters",
                      "Learning per dollar",
                      "Kill or pivot fast"
              ],
              [
                      "Grow",
                      "Months",
                      "Adoption and unit economics",
                      "Scale gates"
              ],
              [
                      "Run",
                      "Weeks",
                      "SLA, margin, reliability",
                      "Continuous improvement"
              ],
              [
                      "Risk",
                      "Varies",
                      "Loss avoided",
                      "Separate review"
              ]
      ],
    },
    h2("Designing the explore clock"),
    p(
      "Fund small, time-boxed bets with explicit kill criteria. Learning is success; scale is optional.",
    ),
    p(
      "Separate explore metrics from P&L for early phases — but cap explore spend as percent of portfolio.",
    ),
    p(
      "Protect teams from run-mode escalation paths during explore windows.",
    ),
    ul([
          "Hypothesis statement per bet",
          "Maximum spend and duration",
          "Kill criteria written upfront",
          "Retro within two weeks of end"
    ]),
    h2("The grow clock"),
    p(
      "Transition from explore to grow requires evidence gate — not enthusiasm. Adoption, unit economics, operational readiness.",
    ),
    p(
      "Grow spends on capacity, GTM, and platform — not more hypothesis testing.",
    ),
    p(
      "Monthly reviews on scale metrics; quarterly on strategic fit still.",
    ),
    note("Grow is where most companies should live for any initiative that passed explore — not perpetual explore disguised as agile."),
    h2("Run the business without suffocation"),
    p(
      "Run mode owns majority of revenue and customers. Stability is the job. Improvement is incremental unless explore replaces.",
    ),
    p(
      "Weekly operational cadence, clear SLAs, blameless incident culture. Innovation requests enter explore funnel — not side doors.",
    ),
    p(
      "Run leaders sit on explore councils as reality checks, not as veto without alternative funding.",
    ),
    quote("Speed is not velocity. It is matching decision horizon to work type."),
    h2("Risk as a fourth clock"),
    p(
      "Regulatory, security, and resilience work spans speeds but often needs its own review — not buried in explore or deferred in run.",
    ),
    p(
      "Risk spends should show risk-adjusted return, not growth ROI.",
    ),
    p(
      "Crisis mode is not a speed — it is temporary override with expiry.",
    ),
    h3("Calendar hygiene"),
    p(
      "Publish which forums decide which speed. Explore council monthly. Grow portfolio bi-monthly. Run ops weekly. Attendees overlap; agendas do not.",
    ),
    h2("Making three speeds stick"),
    p(
      "Label initiatives in every dashboard with speed tag. Orphans default to run and get run metrics.",
    ),
    p(
      "Train finance to budget by speed mix aligned to strategy season.",
    ),
    p(
      "Celebrate kills in explore — saved cash and focus — as visibly as launches.",
    ),
    h2("Questions worth putting in the next leadership review"),
    ul([
          "Where does our data on three-speed operating clocks actually live — and who owns updating it?",
          "What decision would we make differently if we trusted the number?",
          "Which incentive or reporting line is working against the outcome we want?",
          "What is the smallest test that would change our mind in ninety days?"
    ]),
    p(
      "Strategy work that stops at the slide deck is expensive theatre. The useful version is slower, messier, and more specific: name the constraint, measure the gap, assign an owner, and set a date when the number gets reviewed again.",
    ),
    cta(
      "Bring the situation as it is",
      "If this framework matches a pressure you are already feeling, start with the facts you have — not the narrative you wish were true. We help leadership teams quantify gaps, choose constraints, and design paths that operations can absorb.",
      "Start a conversation",
    ),
    p(
      "Audit meeting invites — explore topics in run forums die or thrash.",
    ),
    p(
      "Track percent of spend by speed; explore below two percent is often theatre.",
    ),
    p(
      "Measure time from explore kill to redeployment of people — slow redeployment hides headcount tax.",
    ),
    p(
      "Compare incident rates when run teams forced into dual explore — spikes predict customer pain.",
    ),
    p(
      "Document speed transitions with dates — grow pretending to explore avoids gates.",
    ),
    p(
      "The numbers in this article are illustrative ranges from client work and published benchmarks — not universal laws. Your organisation will have its own shape. The discipline is to measure yours rather than borrow someone else's headline.",
    ),
    p(
      "Finance, operations, and commercial teams often use the same words with different definitions. Before any index or ratio goes on a dashboard, agree what counts in the numerator and who certifies it monthly.",
    ),
    p(
      "Boards respond to frameworks when they see a decision attached. Pair every metric with a threshold and a pre-agreed action. Measurement without a trigger is reporting; measurement with a trigger is management.",
    ),
    p(
      "Avoid benchmarking envy. Another company's attractive ratio may reflect a business model you do not have. Compare yourself to your own prior quarters first; external peers second.",
    ),
    p(
      "Short-term fixes that improve a ratio while weakening the underlying economics are more common than admitted. When a metric moves, ask what behaviour it rewarded and whether that behaviour survives a bad quarter.",
    ),
    p(
      "Audit meeting invites — explore topics in run forums die or thrash.",
    ),
    p(
      "Track percent of spend by speed; explore below two percent is often theatre.",
    ),
    p(
      "Measure time from explore kill to redeployment of people — slow redeployment hides headcount tax.",
    ),
    p(
      "Compare incident rates when run teams forced into dual explore — spikes predict customer pain.",
    ),
    p(
      "Document speed transitions with dates — grow pretending to explore avoids gates.",
    ),
    p(
      "The numbers in this article are illustrative ranges from client work and published benchmarks — not universal laws. Your organisation will have its own shape. The discipline is to measure yours rather than borrow someone else's headline.",
    ),
    p(
      "Finance, operations, and commercial teams often use the same words with different definitions. Before any index or ratio goes on a dashboard, agree what counts in the numerator and who certifies it monthly.",
    ),
    p(
      "Boards respond to frameworks when they see a decision attached. Pair every metric with a threshold and a pre-agreed action. Measurement without a trigger is reporting; measurement with a trigger is management.",
    ),
    p(
      "Avoid benchmarking envy. Another company's attractive ratio may reflect a business model you do not have. Compare yourself to your own prior quarters first; external peers second.",
    ),
    p(
      "Short-term fixes that improve a ratio while weakening the underlying economics are more common than admitted. When a metric moves, ask what behaviour it rewarded and whether that behaviour survives a bad quarter.",
    ),
    p(
      "Audit meeting invites — explore topics in run forums die or thrash.",
    ),
    p(
      "Track percent of spend by speed; explore below two percent is often theatre.",
    ),
    p(
      "Measure time from explore kill to redeployment of people — slow redeployment hides headcount tax.",
    ),
    p(
      "Compare incident rates when run teams forced into dual explore — spikes predict customer pain.",
    ),
    p(
      "Document speed transitions with dates — grow pretending to explore avoids gates.",
    ),
    p(
      "The numbers in this article are illustrative ranges from client work and published benchmarks — not universal laws. Your organisation will have its own shape. The discipline is to measure yours rather than borrow someone else's headline.",
    ),
    p(
      "Finance, operations, and commercial teams often use the same words with different definitions. Before any index or ratio goes on a dashboard, agree what counts in the numerator and who certifies it monthly.",
    ),
    p(
      "Boards respond to frameworks when they see a decision attached. Pair every metric with a threshold and a pre-agreed action. Measurement without a trigger is reporting; measurement with a trigger is management.",
    ),
    p(
      "Avoid benchmarking envy. Another company's attractive ratio may reflect a business model you do not have. Compare yourself to your own prior quarters first; external peers second.",
    ),
    p(
      "Short-term fixes that improve a ratio while weakening the underlying economics are more common than admitted. When a metric moves, ask what behaviour it rewarded and whether that behaviour survives a bad quarter.",
    ),
    p(
      "Audit meeting invites — explore topics in run forums die or thrash.",
    ),
    p(
      "Track percent of spend by speed; explore below two percent is often theatre.",
    ),
    p(
      "Measure time from explore kill to redeployment of people — slow redeployment hides headcount tax.",
    ),
    p(
      "Compare incident rates when run teams forced into dual explore — spikes predict customer pain.",
    ),
    p(
      "Document speed transitions with dates — grow pretending to explore avoids gates.",
    ),
    p(
      "The numbers in this article are illustrative ranges from client work and published benchmarks — not universal laws. Your organisation will have its own shape. The discipline is to measure yours rather than borrow someone else's headline.",
    ),
    p(
      "Finance, operations, and commercial teams often use the same words with different definitions. Before any index or ratio goes on a dashboard, agree what counts in the numerator and who certifies it monthly.",
    ),
  ],
  faqs: [
    [
      "How many speeds can we afford?",
      "Three core plus risk review is enough; more speeds recreate matrix confusion.",
    ],
    [
      "Do small companies need this?",
      "Especially — without labels, everything is urgent and nothing finishes.",
    ],
    [
      "Who owns explore?",
      "A council with P&L sponsor, not a lone innovation officer without budget.",
    ],
    [
      "Can an initiative change speed?",
      "Yes — with explicit gate and metric change, not gradual drift.",
    ],
  ],
}
