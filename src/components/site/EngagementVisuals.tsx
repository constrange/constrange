import { useEffect, useRef, useState } from "react"
import { Reveal } from "@/components/site/Layout"

const FLOW_STEPS = ["Question", "Evidence", "Review", "Recommendation", "Action"]

/** Minimal vertical decision-flow diagram for the engagement hero. */
export function DecisionFlowVisual() {
  return (
    <div className="eng-flow-visual" aria-hidden>
      <svg className="eng-flow-svg" viewBox="0 0 220 340" role="img" aria-label="Decision flow">
        <defs>
          <linearGradient id="engFlowGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#271675" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#271675" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <rect x="68" y="24" width="84" height="292" rx="42" fill="url(#engFlowGrad)" />
        {FLOW_STEPS.map((label, i) => {
          const y = 44 + i * 62
          const cx = 110
          return (
            <g key={label} className="eng-flow-node" style={{ animationDelay: `${i * 0.9}s` }}>
              <circle className="eng-flow-ring" cx={cx} cy={y} r="14" />
              <circle className="eng-flow-core" cx={cx} cy={y} r="5" />
              <text className="eng-flow-label" x={cx} y={y + 28} textAnchor="middle">
                {label.toUpperCase()}
              </text>
              {i < FLOW_STEPS.length - 1 && (
                <line className="eng-flow-line" x1={cx} y1={y + 18} x2={cx} y2={y + 44} />
              )}
            </g>
          )
        })}
      </svg>
    </div>
  )
}

const PROCESS_STAGES: [string, string][] = [
  ["Conversation", "We understand the situation, the decision in front of you, and why it matters now."],
  ["Scope", "We define the question, evidence required, stakeholders, boundaries, timeline and deliverables."],
  ["Review", "We investigate the evidence, test assumptions, assess options, dependencies, economics and risks."],
  ["Readout", "We present the conclusion, explain the reasoning, and answer the questions that matter to the decision."],
  ["Next move", "You leave with a clear recommendation and practical next actions."],
]

/** Five-stage engagement process with scroll-revealed connecting line. */
export function EngagementProcess() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [lineProgress, setLineProgress] = useState(0)

  useEffect(() => {
    const node = trackRef.current
    if (!node) return

    const update = () => {
      const rect = node.getBoundingClientRect()
      const vh = window.innerHeight
      const start = vh * 0.82
      const end = vh * 0.22
      const travelled = start - rect.top
      const span = rect.height + start - end
      const p = Math.min(1, Math.max(0, travelled / span))
      setLineProgress(p)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  const activeStage = Math.min(PROCESS_STAGES.length - 1, Math.floor(lineProgress * PROCESS_STAGES.length))

  return (
    <div className="eng-process" ref={trackRef}>
      <div className="eng-process-track" aria-hidden>
        <span className="eng-process-line" style={{ transform: `scaleX(${lineProgress})` }} />
      </div>
      <ol className="eng-process-stages">
        {PROCESS_STAGES.map(([title, body], i) => (
          <Reveal
            as="li"
            key={title}
            className={i <= activeStage ? "is-active" : ""}
            delay={i * 50}
          >
            <span className="eng-process-num">{String(i + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  )
}

const VIEW_OUTCOMES = [
  {
    label: "Proceed",
    body: "The evidence supports moving forward under the conditions identified.",
  },
  {
    label: "Modify",
    body: "The objective may be sound, but the assumptions, design, sequencing or controls should change first.",
  },
  {
    label: "Do not proceed",
    body: "The evidence does not currently justify the proposed course.",
  },
] as const

/** Signature three-outcome band with subtle indicator motion. */
export function ConstrangeViewBand() {
  return (
    <div className="eng-view-band">
      <span className="eng-view-indicator" aria-hidden />
      <div className="eng-view-outcomes">
        {VIEW_OUTCOMES.map((item, i) => (
          <Reveal className={`eng-view-card eng-view-card-${i}`} key={item.label} delay={i * 80}>
            <span className="eng-view-label">{item.label}</span>
            <p>{item.body}</p>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

/** Complexity spectrum below pricing bands. */
export function FeeSpectrum() {
  return (
    <Reveal className="eng-spectrum">
      <div className="eng-spectrum-line" aria-hidden>
        <span className="eng-spectrum-fill" />
      </div>
      <div className="eng-spectrum-labels">
        <span>Contained</span>
        <span>Multi-dimensional</span>
        <span>High-complexity</span>
      </div>
    </Reveal>
  )
}
