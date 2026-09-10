import { Link } from "react-router-dom"
import { CanvasPage, CxSection } from "@/components/site/Canvas"
import {
  ConstrangeViewBand,
  DecisionFlowVisual,
  EngagementProcess,
  FeeSpectrum,
} from "@/components/site/EngagementVisuals"
import { Reveal } from "@/components/site/Layout"

const buyingCards = [
  [
    "A defined question",
    "We establish exactly what needs to be decided, why it matters now, and what a useful answer must resolve.",
  ],
  [
    "Independent analysis",
    "We examine evidence, assumptions, alternatives, economics, dependencies and risks without a technology implementation agenda.",
  ],
  [
    "A clear outcome",
    "You receive a reasoned recommendation, the conditions behind it, and a practical sequence of next actions.",
  ],
] as const

const deliverables = [
  {
    num: "01",
    title: "Executive Decision Report",
    meta: "10–20 page PDF, depending on scope.",
    includes: [
      "Executive conclusion",
      "Business context",
      "Key evidence",
      "Assumptions",
      "Options and trade-offs",
      "Economics where appropriate",
      "Risks and dependencies",
      "Constrange recommendation",
    ],
  },
  {
    num: "02",
    title: "Decision Map",
    meta: "A concise visual representation of:",
    includes: ["Decision → Options → Risks → Trade-offs → Expected outcome"],
  },
  {
    num: "03",
    title: "Executive Decision Deck",
    meta: "An 8–12 slide presentation designed for leadership discussion and decision-making.",
    includes: [],
  },
  {
    num: "04",
    title: "90-Day Action Plan",
    meta: "A practical sequence showing:",
    includes: ["0–30 days", "31–60 days", "61–90 days"],
  },
  {
    num: "05",
    title: "Executive Readout",
    meta: "A focused session to walk leadership through the conclusion, reasoning and next actions.",
    includes: [],
  },
] as const

const pricingBands = [
  {
    label: "Focused review",
    title: "One important decision",
    description: "For a clearly defined decision with a contained scope.",
    duration: "1–2 weeks",
    deliverables: [
      "Decision analysis",
      "Assumption review",
      "Options assessment",
      "Risk analysis",
      "Recommendation",
      "Executive readout",
    ],
    price: "From $2,500",
    note: "Best suited to a contained decision with limited stakeholders and a clear evidence base.",
    featured: false,
  },
  {
    label: "Strategic review",
    title: "A consequential or multi-dimensional decision",
    description:
      "For decisions involving multiple systems, stakeholders, financial considerations, operational dependencies or significant change.",
    duration: "2–4 weeks",
    deliverables: [
      "Full Executive Decision Report",
      "Decision Map",
      "Scenario analysis",
      "Risk and dependency assessment",
      "Executive Decision Deck",
      "90-Day Action Plan",
      "Executive readout",
    ],
    price: "From $5,000",
    note: "Scope is confirmed after the initial conversation.",
    featured: true,
  },
  {
    label: "Ongoing advisory",
    title: "Continued decision support",
    description: "For organisations that want continued independent input after the initial review.",
    duration: "Monthly",
    deliverables: [
      "Decision support",
      "Advisory sessions",
      "Follow-up analysis",
      "New decision reviews",
      "Targeted research",
      "Periodic executive briefings",
    ],
    price: "Custom",
    note: "Scoped around the level of involvement required.",
    featured: false,
  },
] as const

const includedItems = [
  "Defined review scope",
  "Independent analysis",
  "Evidence and assumption testing",
  "Options and trade-offs",
  "Risk and dependency assessment",
  "Recommendation",
  "Action plan",
  "Executive readout",
]

const excludedItems = [
  "Software development",
  "Technology implementation",
  "Managed services",
  "Permanent staffing",
  "Open-ended consulting hours",
]

const whenToBringIn = [
  "A major technology investment is being considered.",
  "An AI or automation initiative has moved beyond the idea stage and the business case needs scrutiny.",
  "A transformation or operational change carries meaningful dependencies, risk or uncertainty.",
  "A leadership team is aligned on the objective but not on the right path.",
]

const boundaries = [
  ["Clear scope", "The question is defined before the work begins."],
  ["Direct access", "The engagement is directly led by the person doing the analysis."],
  ["No implementation agenda", "The recommendation is not tied to selling a technology or implementation service."],
] as const

export default function Engagement() {
  return (
    <CanvasPage>
      <header className="eng-hero cx-field-violet">
        <span className="cx-hero-grain" aria-hidden />
        <div className="eng-hero-grid cx-inner">
          <div className="eng-hero-copy">
            <p className="cx-crumbs">
              <Link to="/">Home</Link>
              <i>/</i>
              <span>Engagement</span>
            </p>
            <span className="cx-eyebrow">Engagement</span>
            <h1 className="cx-display">A focused engagement, scoped to the decision.</h1>
            <p className="cx-lede">
              Every engagement starts with the decision itself—not a predefined consulting package. We define the
              question, establish the evidence required, conduct the review, and present a clear recommendation and next
              actions.
            </p>
            <div className="cx-actions">
              <Link className="btn" to="/contact">Discuss a decision</Link>
              <Link className="btn btn-ghost" to="/how-we-work">How we work</Link>
            </div>
          </div>
          <div className="eng-hero-visual">
            <DecisionFlowVisual />
          </div>
        </div>
      </header>

      <CxSection first label="Engagement" title="What you are buying" lede="A Decision Review is a focused piece of independent work around one important question. The scope changes with the complexity of the decision, but the objective remains the same: make the decision clearer before significant money, time or organisational capacity is committed.">
        <div className="cx-cards cx-cards-3 eng-buying-cards">
          {buyingCards.map(([title, body], i) => (
            <Reveal className="eng-panel" key={title} delay={i * 70}>
              <span className="eng-panel-mark" aria-hidden />
              <h3>{title}</h3>
              <p>{body}</p>
            </Reveal>
          ))}
        </div>
      </CxSection>

      <CxSection label="Process" title="From decision to recommendation.">
        <EngagementProcess />
      </CxSection>

      <CxSection
        label="Deliverables"
        title="What you receive"
        lede="The deliverable is built around the decision—not around a predetermined page count."
      >
        <ol className="eng-deliverables">
          {deliverables.map((item, i) => (
            <Reveal as="li" className="eng-deliverable" key={item.title} delay={i * 60}>
              <span className="eng-deliverable-num">{item.num}</span>
              <div>
                <h3>{item.title}</h3>
                <p className="eng-deliverable-meta">{item.meta}</p>
                {item.includes.length > 0 && (
                  <ul>
                    {item.includes.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </CxSection>

      <CxSection
        label="The Constrange View"
        title="The Constrange View"
        lede="We do not force a positive recommendation. The conclusion follows the evidence."
      >
        <ConstrangeViewBand />
      </CxSection>

      <CxSection label="Pricing" title="A fixed fee, scoped to the decision." lede="We work on a fixed-fee basis rather than charging for hours. The fee reflects the complexity of the decision, the evidence required, the number of stakeholders involved, and the depth of analysis needed.">
        <div className="eng-pricing">
          {pricingBands.map((band, i) => (
            <Reveal
              className={band.featured ? "eng-price-card is-featured" : "eng-price-card"}
              key={band.label}
              delay={i * 70}
            >
              {band.featured && <span className="eng-price-badge">Most common</span>}
              <span className="eng-price-label">{band.label}</span>
              <h3>{band.title}</h3>
              <p className="eng-price-desc">{band.description}</p>
              <dl className="eng-price-meta">
                <div>
                  <dt>{band.label === "Ongoing advisory" ? "Typical engagement" : "Typical duration"}</dt>
                  <dd>{band.duration}</dd>
                </div>
                <div>
                  <dt>{band.label === "Ongoing advisory" ? "Typical support" : "Typical deliverables"}</dt>
                  <dd>
                    <ul>
                      {band.deliverables.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
              <p className="eng-price-amount">{band.price}</p>
              <p className="eng-price-note">{band.note}</p>
              <p className="eng-price-fine">Final fee confirmed after scope.</p>
            </Reveal>
          ))}
        </div>
        <p className="eng-pricing-disclaimer">
          Indicative pricing reflects typical engagement shapes and is not a fixed quote. Final scope, fee and timeline
          are confirmed in the proposal and Statement of Work.
        </p>
      </CxSection>

      <CxSection label="Fee structure" title="Why the fee varies" lede="No two important decisions require the same level of work. A focused review may involve a single workflow and a small number of stakeholders. A broader review may require financial analysis, multiple interviews, technology assessment, scenario modelling or deeper dependency analysis.">
        <FeeSpectrum />
      </CxSection>

      <CxSection label="Scope" title="What is included — and what is not.">
        <div className="cx-pair eng-scope-pair">
          <Reveal className="eng-scope-col">
            <h3>Included</h3>
            <ul>
              {includedItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="eng-scope-col" delay={80}>
            <h3>Not included by default</h3>
            <ul>
              {excludedItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
        <p className="eng-scope-note">
          Where implementation is the appropriate next step, it can be discussed separately. A Decision Review does not
          require Constrange to implement the recommendation.
        </p>
      </CxSection>

      <CxSection label="Fit" title="When to bring us in">
        <ol className="eng-scenarios">
          {whenToBringIn.map((text, i) => (
            <Reveal as="li" key={text} delay={i * 60}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <p>{text}</p>
            </Reveal>
          ))}
        </ol>
        <p className="eng-scenarios-close">You do not need a polished brief. The decision can still be taking shape.</p>
      </CxSection>

      <CxSection label="Boundaries" title="Focused by design." lede="We keep the scope tight enough for the work to remain useful. If the real question changes during the review, we surface that explicitly rather than quietly expanding the engagement.">
        <div className="eng-boundaries">
          {boundaries.map(([title, body], i) => (
            <Reveal className="eng-boundary" key={title} delay={i * 70}>
              <b>{title}</b>
              <p>{body}</p>
            </Reveal>
          ))}
        </div>
      </CxSection>

      <section className="eng-final cx-turn cx-field-violet">
        <span className="cx-hero-grain" aria-hidden />
        <div className="cx-inner">
          <Reveal className="cx-turn-grid">
            <div>
              <span className="cx-eyebrow">Next step</span>
              <h2 className="cx-turn-title">Have a decision that needs an independent view?</h2>
            </div>
            <div>
              <p>
                Bring the situation as it currently stands. We will first determine whether a Decision Review is actually
                useful.
              </p>
              <div className="cx-actions">
                <Link className="btn" to="/contact">Discuss a decision</Link>
              </div>
              <p className="eng-final-alt">
                Prefer a conversation first?{" "}
                <Link to="/contact">Book a 30-minute first conversation.</Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

    </CanvasPage>
  )
}
