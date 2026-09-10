import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Reveal } from "@/components/site/Layout"
import { constrangeViews } from "@/site-data"

const journeyPhases = [
  {
    num: "01",
    title: "Name the decision",
    steps: "Define · Evidence",
    body: "What is being decided, and what do we actually know?",
  },
  {
    num: "02",
    title: "Hold the options",
    steps: "Assumptions · Options",
    body: "What must hold true, and what are the real alternatives?",
  },
  {
    num: "03",
    title: "Test the path",
    steps: "Risk · Stress test",
    body: "What could fail, and what would change the answer?",
  },
  {
    num: "04",
    title: "Reach a clear view",
    steps: "Recommend · Act",
    body: "Proceed, modify, or do not proceed — with practical next actions.",
  },
] as const

function JourneyVisual() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((n) => (n + 1) % journeyPhases.length)
    }, 3200)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="dr-home-journey" aria-label="How a Decision Review works">
      <div className="dr-home-journey-track" aria-hidden>
        <span className="dr-home-journey-fill" style={{ width: `${((active + 1) / journeyPhases.length) * 100}%` }} />
      </div>
      <ol className="dr-home-journey-steps">
        {journeyPhases.map((phase, i) => (
          <li key={phase.num} className={i === active ? "is-active" : i < active ? "is-done" : ""}>
            <span className="dr-home-journey-node">{phase.num}</span>
            <div>
              <h3>{phase.title}</h3>
              <p className="dr-home-journey-method">{phase.steps}</p>
              <p className="dr-home-journey-body">{phase.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="dr-home-journey-outcome" aria-label="Possible conclusions">
        {constrangeViews.map((view, i) => (
          <span key={view} className={i === 1 ? "is-mid" : ""}>{view}</span>
        ))}
      </div>
    </div>
  )
}

export function DecisionReviewBand() {
  return (
    <section className="dr-home-band" id="decision-review" aria-labelledby="dr-home-title">
      <span className="dr-home-grain" aria-hidden />
      <div className="shell">
        <div className="dr-home-grid">
          <Reveal className="dr-home-copy">
            <span className="eyebrow">Constrange Decision Review™</span>
            <h2 className="serif-md" id="dr-home-title">
              An independent review before commitment becomes expensive.
            </h2>
            <p className="dr-home-lede">
              A focused independent review of an important technology, AI or operational decision — before significant
              money, time or organisational capacity is committed.
            </p>
            <ul className="dr-home-points">
              <li>One important question — not a generic assessment</li>
              <li>Evidence and assumptions tested before you commit</li>
              <li>A written recommendation leadership can defend</li>
            </ul>
            <div className="dr-home-actions">
              <Link className="btn" to="/contact">Discuss a decision</Link>
              <Link className="btn btn-ghost" to="/decision-review">See the full review</Link>
            </div>
          </Reveal>

          <Reveal className="dr-home-visual" delay={100}>
            <JourneyVisual />
          </Reveal>
        </div>

        <Reveal className="dr-home-foot" delay={160}>
          <p>
            <strong>Not sold by the hour.</strong> Fixed fee, scoped to the decision.
          </p>
          <Link className="arrow-link" to="/engagement">
            How engagement works <i>→</i>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
