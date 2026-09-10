import { useState } from "react"
import { Link } from "react-router-dom"
import { Reveal } from "@/components/site/Layout"

const outcomes = [
  {
    num: "01",
    label: "Proceed",
    body: "The evidence supports moving forward under the conditions identified.",
    when: "When the path is sound — with named conditions and controls.",
    tone: "proceed",
  },
  {
    num: "02",
    label: "Modify",
    body: "The objective may be sound, but the assumptions, design, sequencing or controls should change first.",
    when: "When the direction is right — but the current shape of the decision is not.",
    tone: "modify",
  },
  {
    num: "03",
    label: "Do not proceed",
    body: "The evidence does not currently justify the proposed course.",
    when: "When stopping or reframing is the responsible outcome.",
    tone: "hold",
  },
] as const

function DecisionFork({ active }: { active: number | null }) {
  const branches = [
    { x: 120, path: "M 480 56 L 120 148", idx: 0 },
    { x: 480, path: "M 480 56 L 480 148", idx: 1 },
    { x: 840, path: "M 480 56 L 840 148", idx: 2 },
  ]

  return (
    <svg className="cv-fork" viewBox="0 0 960 168" aria-hidden>
      <defs>
        <linearGradient id="cvForkGlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#dbff71" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#dbff71" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="430" y="8" width="100" height="40" rx="20" fill="url(#cvForkGlow)" opacity="0.35" />
      <circle className="cv-fork-source" cx="480" cy="28" r="22" />
      <text className="cv-fork-source-label" x="480" y="32" textAnchor="middle">EVIDENCE</text>
      {branches.map((branch) => (
        <path
          key={branch.idx}
          className={active === branch.idx ? "cv-fork-branch is-active" : "cv-fork-branch"}
          d={branch.path}
        />
      ))}
      {branches.map((branch) => (
        <circle
          key={`node-${branch.idx}`}
          className={active === branch.idx ? "cv-fork-node is-active" : "cv-fork-node"}
          cx={branch.x}
          cy="148"
          r={active === branch.idx ? 6 : 4}
        />
      ))}
    </svg>
  )
}

export function ConstrangeViewSection() {
  const [active, setActive] = useState<number | null>(1)

  return (
    <section className="cv-band platform" id="constrange-view" aria-labelledby="view-outcomes-title">
      <span className="cv-grain" aria-hidden />
      <span className="cv-accent-bar" aria-hidden />
      <div className="shell">
        <div className="cv-header">
          <Reveal className="cv-header-copy">
            <span className="eyebrow">The Constrange View</span>
            <h2 className="serif-md" id="view-outcomes-title">Every review ends with a clear position.</h2>
            <p className="cv-lede">
              Not a slide deck of options. A single, reasoned conclusion leadership can defend — with the conditions
              behind it.
            </p>
          </Reveal>
          <Reveal className="cv-header-aside" delay={80}>
            <blockquote className="cv-pull">
              We do not force a positive recommendation. The conclusion follows the evidence — even when the most
              useful answer is to wait, change course, or stop.
            </blockquote>
          </Reveal>
        </div>

        <Reveal className="cv-stage" delay={100}>
          <DecisionFork active={active} />
          <div className="cv-outcomes">
            {outcomes.map((item, i) => (
              <article
                className={`cv-outcome cv-outcome-${item.tone}${active === i ? " is-active" : ""}`}
                key={item.label}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(1)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(1)}
                tabIndex={0}
              >
                <div className="cv-outcome-top">
                  <span className="cv-outcome-num">{item.num}</span>
                  <span className="cv-outcome-mark" aria-hidden />
                </div>
                <h3>{item.label}</h3>
                <p className="cv-outcome-body">{item.body}</p>
                <p className="cv-outcome-when">{item.when}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal className="cv-foot" delay={160}>
          <div className="cv-foot-copy">
            <p className="cv-foot-note">
              <strong>One review. One defensible position.</strong>
            </p>
            <p className="cv-foot-sub">Written recommendation · Leadership readout · Practical next actions</p>
          </div>
          <div className="cv-foot-actions">
            <Link className="btn cv-btn" to="/contact">Discuss a decision</Link>
            <Link className="arrow-link cv-foot-link" to="/decision-review">
              See Decision Review <i>→</i>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
