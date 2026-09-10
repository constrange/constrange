import { Link } from "react-router-dom"
import { Reveal } from "@/components/site/Layout"
import { reviewAreas } from "@/site-data"

export function ReviewIntro() {
  return (
    <section className="review-intro-band" aria-labelledby="review-intro-title">
      <span className="review-intro-grain" aria-hidden />
      <div className="shell">
        <div className="review-intro-grid">
          <Reveal className="review-intro-copy">
            <span className="eyebrow">What we review</span>
            <h2 className="serif-md" id="review-intro-title">
              When the decision matters, an independent view helps.
            </h2>
            <p className="review-intro-lede">
              The difficult part is rarely knowing what is possible. It is knowing what is worth doing, what could
              fail, and what should happen first.
            </p>
            <ul className="review-intro-signals">
              <li>Before significant money or time is committed</li>
              <li>When vendors all sound credible — but the landscape does not</li>
              <li>When leadership agrees on the goal — not the path</li>
            </ul>
            <div className="review-intro-actions">
              <Link className="btn" to="/contact">Discuss a decision</Link>
              <Link className="arrow-link" to="/decision-review">
                See Decision Review <i>→</i>
              </Link>
            </div>
          </Reveal>

          <div className="review-intro-stack" aria-label="Review coverage areas">
            <span className="review-intro-rail" aria-hidden />
            {reviewAreas.map((area, i) => (
              <Reveal className={`review-intro-card review-intro-card-${area.slug}`} key={area.slug} delay={i * 90}>
                <div className="review-intro-card-head">
                  <span className="review-intro-index">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{area.title}</h3>
                </div>
                <p>{area.blurb}</p>
                <ul className="review-intro-examples">
                  {area.examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="review-intro-foot" delay={180}>
          <p className="review-intro-tagline">
            <strong>One review. One clear recommendation.</strong>
            <span>Proceed · Modify · Do not proceed</span>
          </p>
          <Link className="arrow-link" to="/engagement">
            How engagement works <i>→</i>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
