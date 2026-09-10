import { Link } from "react-router-dom"
import { Reveal } from "@/components/site/Layout"

const pricingBands = [
  {
    label: "Focused review",
    title: "One important decision",
    description: "For a clearly defined decision with a contained scope.",
    durationLabel: "Typical duration",
    duration: "1–2 weeks",
    deliverablesLabel: "Typical deliverables",
    deliverables: [
      "Decision analysis",
      "Assumption review",
      "Options assessment",
      "Risk analysis",
      "Recommendation",
      "Executive readout",
    ],
    pricePrefix: "From",
    price: "$2,500",
    note: "Best suited to a contained decision with limited stakeholders and a clear evidence base.",
    featured: false,
  },
  {
    label: "Strategic review",
    title: "A consequential or multi-dimensional decision",
    description:
      "For decisions involving multiple systems, stakeholders, financial considerations, operational dependencies or significant change.",
    durationLabel: "Typical duration",
    duration: "2–4 weeks",
    deliverablesLabel: "Typical deliverables",
    deliverables: [
      "Full Executive Decision Report",
      "Decision Map",
      "Scenario analysis",
      "Risk and dependency assessment",
      "Executive Decision Deck",
      "90-Day Action Plan",
      "Executive readout",
    ],
    pricePrefix: "From",
    price: "$5,000",
    note: "Scope is confirmed after the initial conversation.",
    featured: true,
  },
  {
    label: "Ongoing advisory",
    title: "Continued decision support",
    description: "For organisations that want continued independent input after the initial review.",
    durationLabel: "Typical engagement",
    duration: "Monthly",
    deliverablesLabel: "Typical support",
    deliverables: [
      "Decision support",
      "Advisory sessions",
      "Follow-up analysis",
      "New decision reviews",
      "Targeted research",
      "Periodic executive briefings",
    ],
    pricePrefix: null,
    price: "Custom",
    note: "Scoped around the level of involvement required.",
    featured: false,
  },
] as const

export function EngagementPricing() {
  return (
    <div className="eng-pricing-wrap">
      <div className="eng-pricing-grid">
        {pricingBands.map((band, i) => (
          <Reveal
            key={band.label}
            className={band.featured ? "eng-price-card is-featured" : "eng-price-card"}
            delay={i * 70}
          >
            {band.featured && <span className="eng-price-badge">Most common</span>}
            <header className="eng-price-head">
              <span className="eng-price-kicker">{band.label}</span>
              <h3>{band.title}</h3>
              <p className="eng-price-desc">{band.description}</p>
            </header>

            <div className="eng-price-blocks">
              <div className="eng-price-block">
                <span className="eng-price-block-label">{band.durationLabel}</span>
                <strong>{band.duration}</strong>
              </div>
              <div className="eng-price-block eng-price-block-list">
                <span className="eng-price-block-label">{band.deliverablesLabel}</span>
                <ul>
                  {band.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <footer className="eng-price-foot">
              <p className="eng-price-amount">
                {band.pricePrefix ? (
                  <>
                    <span className="eng-price-from">{band.pricePrefix}</span>
                    <span className="eng-price-value">{band.price}</span>
                  </>
                ) : (
                  <span className="eng-price-value">{band.price}</span>
                )}
              </p>
              <p className="eng-price-note">{band.note}</p>
              <p className="eng-price-fine">Final fee confirmed after scope.</p>
            </footer>
          </Reveal>
        ))}
      </div>

      <Reveal className="eng-pricing-aside" delay={200}>
        <p className="eng-pricing-disclaimer">
          Indicative pricing reflects typical engagement shapes and is not a fixed quote. Final scope, fee and timeline
          are confirmed in the proposal and Statement of Work.
        </p>
        <Link className="arrow-link" to="/contact">
          Discuss scope and fee <i>→</i>
        </Link>
      </Reveal>
    </div>
  )
}
