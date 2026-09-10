import { useEffect, useRef, useState, type ReactNode } from "react"
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

const PROCESS_STAGES = [
  {
    num: "01",
    title: "Conversation",
    phase: "Understand",
    body: "We understand the situation, the decision in front of you, and why it matters now.",
    output: "Fit confirmed",
    icon: "dialogue",
  },
  {
    num: "02",
    title: "Scope",
    phase: "Define",
    body: "We define the question, evidence required, stakeholders, boundaries, timeline and deliverables.",
    output: "Scope agreed",
    icon: "scope",
  },
  {
    num: "03",
    title: "Review",
    phase: "Investigate",
    body: "We investigate the evidence, test assumptions, assess options, dependencies, economics and risks.",
    output: "Analysis complete",
    icon: "review",
  },
  {
    num: "04",
    title: "Readout",
    phase: "Present",
    body: "We present the conclusion, explain the reasoning, and answer the questions that matter to the decision.",
    output: "Leadership aligned",
    icon: "readout",
  },
  {
    num: "05",
    title: "Next move",
    phase: "Act",
    body: "You leave with a clear recommendation and practical next actions.",
    output: "Clear recommendation",
    icon: "action",
  },
] as const

function ProcessIcon({ kind }: { kind: (typeof PROCESS_STAGES)[number]["icon"] }) {
  const paths: Record<(typeof PROCESS_STAGES)[number]["icon"], ReactNode> = {
    dialogue: (
      <>
        <circle cx="12" cy="12" r="7" />
        <path d="M7 19c2-2 4-3 5-3s3 1 5 3" />
      </>
    ),
    scope: (
      <>
        <path d="M6 8h12M6 16h12" />
        <path d="M8 6v12M16 6v12" />
      </>
    ),
    review: (
      <>
        <circle cx="11" cy="11" r="6" />
        <path d="M16 16l4 4" />
        <path d="M8 11h6M11 8v6" />
      </>
    ),
    readout: (
      <>
        <rect x="5" y="6" width="14" height="10" rx="1" />
        <path d="M8 16h8M10 19h4" />
      </>
    ),
    action: (
      <>
        <path d="M6 12h10" />
        <path d="M13 8l5 4-5 4" />
      </>
    ),
  }

  return (
    <svg className="eng-process-icon" viewBox="0 0 24 24" aria-hidden>
      <g className="eng-process-icon-stroke">{paths[kind]}</g>
    </svg>
  )
}

function ProcessRail({ active, progress }: { active: number; progress: number }) {
  const nodes = [10, 27.5, 45, 62.5, 80]
  return (
    <svg className="eng-process-rail" viewBox="0 0 100 24" aria-hidden>
      <line className="eng-process-rail-base" x1="10" y1="12" x2="90" y2="12" />
      <line
        className="eng-process-rail-fill"
        x1="10"
        y1="12"
        x2="90"
        y2="12"
        pathLength="100"
        style={{ strokeDashoffset: `${100 - progress * 100}` }}
      />
      {nodes.map((x, i) => (
        <g key={i} className={i <= active ? "is-lit" : ""}>
          <circle className="eng-process-rail-node" cx={x} cy="12" r={i === active ? 4.2 : 3.2} />
          {i === active && <circle className="eng-process-rail-halo" cx={x} cy="12" r="7" />}
        </g>
      ))}
    </svg>
  )
}

/** Five-stage engagement journey with visual timeline and interactive cards. */
export function EngagementProcess() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [lineProgress, setLineProgress] = useState(0)
  const [scrollActive, setScrollActive] = useState(0)
  const [hoverActive, setHoverActive] = useState<number | null>(null)
  const active = hoverActive ?? scrollActive

  useEffect(() => {
    const node = trackRef.current
    if (!node) return

    const update = () => {
      const rect = node.getBoundingClientRect()
      const vh = window.innerHeight
      const travelled = vh * 0.78 - rect.top
      const span = rect.height + vh * 0.48
      const p = Math.min(1, Math.max(0, travelled / span))
      setLineProgress(p)
      setScrollActive(Math.min(PROCESS_STAGES.length - 1, Math.floor(p * PROCESS_STAGES.length)))
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return (
    <div className="eng-process" ref={trackRef}>
      <div className="eng-process-panel">
        <ProcessRail active={active} progress={lineProgress} />
        <ol className="eng-process-stages" aria-label="Engagement stages">
          {PROCESS_STAGES.map((stage, i) => (
            <Reveal
              as="li"
              key={stage.title}
              className={`eng-process-card${i === active ? " is-active" : i < active ? " is-done" : ""}`}
              delay={i * 55}
            >
              <button
                type="button"
                className="eng-process-card-hit"
                onMouseEnter={() => setHoverActive(i)}
                onMouseLeave={() => setHoverActive(null)}
                onFocus={() => setHoverActive(i)}
                onBlur={() => setHoverActive(null)}
                aria-pressed={i === active}
                aria-label={`${stage.title}: ${stage.body}`}
              >
                <div className="eng-process-card-head">
                  <span className="eng-process-node">{stage.num}</span>
                  <ProcessIcon kind={stage.icon} />
                </div>
                <span className="eng-process-phase">{stage.phase}</span>
                <h3>{stage.title}</h3>
                <p>{stage.body}</p>
                <span className="eng-process-output">{stage.output}</span>
              </button>
            </Reveal>
          ))}
        </ol>
      </div>
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
