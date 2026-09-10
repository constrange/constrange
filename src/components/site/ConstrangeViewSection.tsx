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

function OutcomeArc() {
  return (
    <svg className="cv-arc" viewBox="0 0 960 120" aria-hidden>
      <defs>
        <linearGradient id="cvArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#dbff71" stopOpacity="0.35" />
          <stop offset="50%" stopColor="#f4f2ea" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#cbc4e7" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <path
        className="cv-arc-path"
        d="M 48 96 Q 480 8 912 96"
        fill="none"
        stroke="url(#cvArcGrad)"
        strokeWidth="1.2"
      />
      <circle className="cv-arc-node cv-arc-node-0" cx="48" cy="96" r="4" />
      <circle className="cv-arc-node cv-arc-node-1" cx="480" cy="24" r="5" />
      <circle className="cv-arc-node cv-arc-node-2" cx="912" cy="96" r="4" />
      <circle className="cv-arc-pulse" cx="48" cy="96" r="3">
        <animateMotion dur="8s" repeatCount="indefinite" path="M 48 96 Q 480 8 912 96" />
      </circle>
    </svg>
  )
}

export function ConstrangeViewSection() {
  return (
    <section className="cv-band platform" aria-labelledby="view-outcomes-title">
      <span className="cv-grain" aria-hidden />
      <div className="shell">
        <div className="cv-header">
          <Reveal className="cv-header-copy">
            <span className="eyebrow">The Constrange View</span>
            <h2 className="serif-md" id="view-outcomes-title">Every review ends with a clear position.</h2>
          </Reveal>
          <Reveal className="cv-header-aside" delay={80}>
            <p className="cv-pull">
              We do not force a positive recommendation. The conclusion follows the evidence — even when the most useful
              answer is to wait, change course, or stop.
            </p>
          </Reveal>
        </div>

        <Reveal className="cv-stage" delay={120}>
          <OutcomeArc />
          <div className="cv-outcomes">
            {outcomes.map((item, i) => (
              <article className={`cv-outcome cv-outcome-${item.tone}`} key={item.label}>
                <span className="cv-outcome-num">{item.num}</span>
                <h3>{item.label}</h3>
                <p className="cv-outcome-body">{item.body}</p>
                <p className="cv-outcome-when">{item.when}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal className="cv-foot" delay={180}>
          <p className="cv-foot-note">
            <strong>One review. One defensible position.</strong>
            <span>Written, presented and owned by leadership.</span>
          </p>
          <Link className="arrow-link cv-foot-link" to="/decision-review">
            See Decision Review <i>→</i>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
