import { Link } from "react-router-dom"
import { CanvasPage, CxSection, Defs, Turn } from "@/components/site/Canvas"
import {
  DeliverableStack,
  MethodPipelineVisual,
  MethodSequenceTrack,
  QuestionGrid,
  SponsorGrid,
} from "@/components/site/DecisionReviewVisuals"
import { ConstrangeViewBand } from "@/components/site/EngagementVisuals"
import { Reveal } from "@/components/site/Layout"
import { FaqList } from "@/components/site/Prose"
import {
  decisionQuestions,
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

export default function DecisionReview() {
  return (
    <CanvasPage>
      <header className="dr-hero cx-field-indigo">
        <span className="cx-hero-grain" aria-hidden />
        <div className="dr-hero-grid cx-inner">
          <div className="dr-hero-copy">
            <p className="cx-crumbs">
              <Link to="/">Home</Link>
              <i>/</i>
              <span>Decision Review</span>
            </p>
            <span className="cx-eyebrow">Constrange Decision Review™</span>
            <h1 className="cx-display">An independent second opinion before commitment becomes expensive.</h1>
            <p className="cx-lede">
              A focused independent review of an important technology, AI or operational decision — before significant
              money, time or organisational capacity is committed.
            </p>
            <div className="cx-actions">
              <Link className="btn" to="/contact">Discuss a decision</Link>
              <Link className="btn btn-ghost" to="/engagement">How engagement works</Link>
            </div>
          </div>
          <div className="dr-hero-visual">
            <MethodPipelineVisual variant="hero" />
          </div>
        </div>
      </header>

      <CxSection first label="Coverage" title="What we review." lede="Technology, AI and operations — one independent review built around the decision you are actually facing.">
        <div className="dr-coverage">
          {reviewAreas.map((area, i) => (
            <Reveal className="dr-coverage-card" key={area.slug} delay={i * 80}>
              <span className="dr-coverage-index">{String(i + 1).padStart(2, "0")}</span>
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
        <QuestionGrid questions={decisionQuestions} />
      </CxSection>

      <section className="dr-method-band">
        <div className="cx-inner">
          <Reveal className="cx-head">
            <span className="cx-label">Method</span>
            <h2 className="cx-h2">Evidence → Assumptions → Options → Risks → Recommendation → Action.</h2>
            <p className="cx-section-lede">
              The sequence is designed to produce a position a leadership team can stand behind.
            </p>
          </Reveal>
          <div className="dr-method-layout">
            <MethodSequenceTrack />
            <div className="dr-method-visual">
              <MethodPipelineVisual variant="section" />
            </div>
          </div>
        </div>
      </section>

      <CxSection label="Deliverables" title="What you receive." lede="Built for decision-makers — not for page count.">
        <DeliverableStack />
      </CxSection>

      <CxSection
        label="The Constrange View"
        title="Every review ends with a clear position."
        lede="We do not force a positive recommendation. The conclusion follows the evidence."
      >
        <ConstrangeViewBand />
      </CxSection>

      <CxSection label="Engagement" title="How an engagement works." lede="From first conversation to a clear recommendation — typically two to six weeks, depending on scope.">
        <ol className="dr-engagement-stages">
          {engagementStages.map(([title, body], i) => (
            <Reveal as="li" key={title} delay={i * 60}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        <div className="dr-engagement-aside">
          <Reveal className="dr-engagement-notes">
            <p className="cx-label">Engagement model</p>
            <Defs items={reviewNotes} />
          </Reveal>
          <Reveal className="dr-engagement-cta" delay={80}>
            <p className="cx-label">Commercial</p>
            <p>Fees, duration and deliverables are scoped to the decision — not sold as open-ended consulting hours.</p>
            <Link className="arrow-link" to="/engagement">
              See how engagement works <i>→</i>
            </Link>
          </Reveal>
        </div>
      </CxSection>

      <CxSection label="Who brings us in" title="Leaders facing consequential decisions.">
        <SponsorGrid rows={whoBringsUsIn} />
      </CxSection>

      <CxSection label="Principles" title="Why independent matters.">
        <div className="dr-principles">
          {methodologyPrinciples.map(([title, body], i) => (
            <Reveal className="dr-principle" key={title} delay={i * 70}>
              <b>{title}</b>
              <p>{body}</p>
            </Reveal>
          ))}
        </div>
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
        secondary={{ label: "Engagement", to: "/engagement" }}
      />
    </CanvasPage>
  )
}
