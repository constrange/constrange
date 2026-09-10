import { Link } from "react-router-dom"
import { HeroDemo } from "@/components/site/Blocks"
import { MethodFlow } from "@/components/site/MethodFlow"
import { PostCard } from "@/components/site/PostCard"
import { Reveal } from "@/components/site/Layout"
import { posts } from "@/blog-content"
import {
  constrangeViews,
  decisionDeliverables,
  encounterScenarios,
  methodologyPrinciples,
  reviewAreas,
} from "@/site-data"

const independencePoints = [
  "We do not sell the technology we evaluate.",
  "We do not require implementation work to justify our recommendation.",
  "We are willing to recommend less technology, delayed investment, or no investment when the evidence supports it.",
]

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div>
          <h1 className="serif-xl">
            <span>Complex problems.</span>
            <span>Clearer paths forward.</span>
          </h1>
          <div className="hero-actions">
            <Link className="btn" to="/contact">
              Discuss a decision
            </Link>
            <Link className="btn btn-ghost" to="/how-we-work">
              How we work
            </Link>
          </div>
        </div>
        <p className="lede">
          Constrange helps organisations understand what is changing, what matters, and what to do next. We
          independently examine important technology, AI and operational decisions—testing assumptions,
          exposing dependencies and risks, and identifying the actions that matter most.
        </p>
      </section>

      <section className="section shell review-intro">
        <Reveal className="section-head">
          <span className="eyebrow">What we review</span>
          <h2 className="serif-md">When the decision matters, an independent view helps.</h2>
          <p>
            The difficult part is rarely knowing what is possible. It is knowing what is worth doing, what
            could fail, and what should happen first.
          </p>
        </Reveal>
        <div className="review-areas">
          {reviewAreas.map((area, i) => (
            <Reveal className="review-area" key={area.slug} delay={i * 90}>
              <h3>{area.title}</h3>
              <p>{area.blurb}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="review-tagline">
            <strong>One review. One clear recommendation.</strong>
          </p>
        </Reveal>
      </section>

      <div className="shell">
        <HeroDemo />
      </div>

      <section className="section shell decision-review-band" id="decision-review">
        <Reveal className="section-head">
          <span className="eyebrow">Constrange Decision Review™</span>
          <h2 className="serif-md">An independent review before commitment becomes expensive.</h2>
          <p>
            A focused independent review of an important technology, AI or operational decision — before
            significant money, time or organisational capacity is committed.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <MethodFlow />
        </Reveal>
        <div className="hero-actions" style={{ marginTop: 32 }}>
          <Link className="arrow-link" to="/decision-review">
            See the full review <i>→</i>
          </Link>
        </div>
      </section>

      <section className="platform view-outcomes-section" aria-labelledby="view-outcomes-title">
        <div className="shell">
          <Reveal className="section-head">
            <span className="eyebrow">The Constrange View</span>
            <h2 className="serif-md" id="view-outcomes-title">Every review ends with a clear position.</h2>
          </Reveal>
          <div className="view-outcomes">
            {constrangeViews.map((view, i) => (
              <Reveal className={`view-outcome view-outcome-${i}`} key={view} delay={i * 100}>
                <span>{view}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <Reveal className="section-head">
          <span className="eyebrow">What you receive</span>
          <h2 className="serif-md">Deliverables built for decision-makers.</h2>
        </Reveal>
        <Reveal delay={80}>
          <ul className="deliverable-list">
            {decisionDeliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="stat-band principles-band" aria-labelledby="principles-title">
        <span className="stat-band-grain" aria-hidden />
        <div className="stat-band-inner shell">
          <p className="stat-kicker" id="principles-title">How the work is held</p>
          <div className="principles-row">
            {methodologyPrinciples.map(([title, body], i) => (
              <Reveal className="principle" key={title} delay={i * 80}>
                <b>{title}</b>
                <span>{body}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <Reveal className="section-head">
          <span className="eyebrow">Why independent?</span>
          <h2 className="serif-md">A second opinion that is not selling the answer.</h2>
        </Reveal>
        <ul className="independence-list">
          {independencePoints.map((point, i) => (
            <Reveal as="li" key={point} delay={i * 70}>
              {point}
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="section shell">
        <Reveal className="section-head">
          <span className="eyebrow">Situations we encounter</span>
          <h2 className="serif-md">Recognisable pressure, without the theatre.</h2>
        </Reveal>
        <div className="scenario-grid">
          {encounterScenarios.map((item, i) => (
            <Reveal className="scenario-card" key={item.label} delay={i * 90}>
              <span className="scenario-label">{item.label}</span>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section shell">
        <Reveal className="section-head">
          <span className="eyebrow">Thinking</span>
          <h2 className="serif-md">Writing from the work</h2>
          <p>Notes on judgement, constraint, and why more options do not automatically create a clearer path.</p>
        </Reveal>
        <div className="grid-3">
          {posts.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={i * 90}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
        <div style={{ marginTop: 34 }}>
          <Link className="arrow-link" to="/research">
            Research & thinking <i>→</i>
          </Link>
        </div>
      </section>

      <section className="playground-band">
        <Reveal className="playground-copy">
          <span className="eyebrow">A decision</span>
          <h2 className="serif-lg">Have a decision that needs an independent view?</h2>
          <p>
            Bring the situation as it is. We will determine whether a Decision Review is useful — and say so
            if it isn't.
          </p>
          <Link className="btn" to="/contact">
            Discuss a decision
          </Link>
        </Reveal>
      </section>
    </>
  )
}
