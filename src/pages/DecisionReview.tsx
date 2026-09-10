import { Link } from "react-router-dom"
import {
  CanvasHero,
  CanvasPage,
  CxSection,
  Defs,
  Ledger,
  QuietTable,
  Rail,
  Turn,
} from "@/components/site/Canvas"
import { Reveal } from "@/components/site/Layout"
import { FaqList } from "@/components/site/Prose"
import {
  constrangeViews,
  decisionDeliverables,
  decisionQuestions,
  decisionReviewSteps,
  engagementStages,
  faqs,
  methodologyPrinciples,
  reviewAreas,
  whoBringsUsIn,
} from "@/site-data"

const reviewNotes: [string, string][] = [
  [
    "Before commitment",
    "The review is designed to run before significant money, time or organisational capacity is committed — not after a vendor is chosen.",
  ],
  [
    "Fixed fee",
    "Engagements are scoped to the decision. Fees are determined by scope, complexity and evidence required — not an open-ended rate card.",
  ],
  [
    "Honest scope",
    "If a review is not the right fit, we will say so. That is a useful outcome.",
  ],
]

const methodRows = decisionReviewSteps.map((step, i) => [
  String(i + 1).padStart(2, "0"),
  step,
  i < decisionReviewSteps.length - 1 ? "→" : "The Constrange View",
])

export default function DecisionReview() {
  return (
    <CanvasPage>
      <CanvasHero
        figure="engagement"
        crumbs={[
          ["Home", "/"],
          ["Decision Review", "/decision-review"],
        ]}
        eyebrow="Constrange Decision Review™"
        title="An independent second opinion before commitment becomes expensive."
        lede="A focused independent review of an important technology, AI or operational decision — before significant money, time or organisational capacity is committed."
        keys={["Define", "Evidence", "Assumptions", "Options", "Risk", "Recommend", "Act"]}
        primary={{ label: "Discuss a decision", to: "/contact" }}
        secondary={{ label: "How we work", to: "/how-we-work" }}
      />

      <CxSection first label="Coverage" title="What we review.">
        <div className="review-areas review-areas-page">
          {reviewAreas.map((area) => (
            <Reveal className="review-area" key={area.slug}>
              <h3>{area.title}</h3>
              <p>{area.blurb}</p>
            </Reveal>
          ))}
        </div>
      </CxSection>

      <CxSection
        label="Questions"
        title="Questions we answer."
        lede="A Decision Review is built around the decision you are actually facing — not a generic assessment template."
      >
        <Ledger dense rows={decisionQuestions.map((q) => [q, ""])} />
      </CxSection>

      <CxSection
        label="Method"
        title="Evidence → Assumptions → Options → Risks → Recommendation → Action."
        lede="The sequence is designed to produce a position a leadership team can stand behind."
      >
        <QuietTable
          caption="Decision Review sequence"
          head={["Step", "Stage", ""]}
          rows={methodRows}
          mono={[0]}
        />
        <ol className="review-flow review-flow-page" aria-label="Decision Review method">
          {decisionReviewSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </CxSection>

      <CxSection label="Deliverables" title="What you receive.">
        <Ledger dense rows={decisionDeliverables.map((d) => [d, "Included"])} />
      </CxSection>

      <CxSection label="The Constrange View" title="Every review ends with a clear position.">
        <div className="view-outcomes view-outcomes-page">
          {constrangeViews.map((view, i) => (
            <Reveal className={`view-outcome view-outcome-${i}`} key={view}>
              <span>{view}</span>
            </Reveal>
          ))}
        </div>
      </CxSection>

      <CxSection label="Engagement" title="How an engagement works.">
        <Rail steps={engagementStages} />
        <div className="cx-aside" style={{ marginTop: 56 }}>
          <p className="cx-label cx-aside-label">Engagement model</p>
          <Defs items={reviewNotes} />
          <p style={{ marginTop: 24 }}>
            <Link className="arrow-link" to="/pricing">
              Working with us <i>→</i>
            </Link>
          </p>
        </div>
      </CxSection>

      <CxSection label="Who brings us in" title="Leaders facing consequential decisions.">
        <QuietTable
          caption="Typical sponsors"
          head={["Role", "When"]}
          rows={whoBringsUsIn}
        />
      </CxSection>

      <CxSection label="Principles" title="Why independent matters.">
        <Defs items={methodologyPrinciples} />
      </CxSection>

      <CxSection label="Questions" title="Asked before most reviews.">
        <div className="cx-faq">
          <FaqList items={faqs.slice(0, 5)} />
        </div>
      </CxSection>

      <Turn
        tone="engagement"
        kicker="Constrange Decision Review™"
        title="Have a decision that needs an independent view?"
        body="Bring the situation as it is. We will determine whether a Decision Review is useful — and say so if it isn't."
        primary={{ label: "Discuss a decision", to: "/contact" }}
        secondary={{ label: "How we work", to: "/how-we-work" }}
      />
    </CanvasPage>
  )
}
