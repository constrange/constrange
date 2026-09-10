import { useEffect, useRef, useState } from "react"
import { decisionReviewSteps } from "@/site-data"
import { Reveal } from "@/components/site/Layout"

const STEP_LABELS = decisionReviewSteps

/** Animated method pipeline for Decision Review hero and method section. */
export function MethodPipelineVisual({ variant = "hero" }: { variant?: "hero" | "section" }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((n) => (n + 1) % STEP_LABELS.length)
    }, 2400)
    return () => window.clearInterval(id)
  }, [])

  const cx = 300
  const cy = 118
  const r = 88

  const nodes = STEP_LABELS.map((label, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / STEP_LABELS.length
    return {
      label,
      x: cx + r * Math.cos(a),
      y: cy + r * Math.sin(a),
      i,
    }
  })

  const ring = nodes.map((n) => `${n.x},${n.y}`).join(" ")

  return (
    <div className={`dr-pipeline dr-pipeline-${variant}`} aria-hidden={variant === "hero"}>
      <svg className="dr-pipeline-svg" viewBox="0 0 600 236" role="img" aria-label="Decision Review method sequence">
        <defs>
          <radialGradient id="drPipeGlow" cx="50%" cy="46%" r="52%">
            <stop offset="0%" stopColor="#271675" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#271675" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx={cx} cy={cy} r="104" fill="url(#drPipeGlow)" />
        <polygon className="dr-pipe-ring" points={ring} />
        {nodes.map((from, i) => {
          const to = nodes[(i + 1) % nodes.length]
          const on = i <= active || (active === 0 && i === nodes.length - 1)
          return (
            <line
              key={`edge-${i}`}
              className={on ? "dr-pipe-edge on" : "dr-pipe-edge"}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
            />
          )
        })}
        {nodes.map((node) => {
          const on = node.i === active
          const lit = node.i <= active
          const dx = node.x - cx
          const dy = node.y - cy
          const len = Math.hypot(dx, dy) || 1
          const lx = node.x + (dx / len) * 34
          const ly = node.y + (dy / len) * 34
          return (
            <g key={node.label} className={on ? "dr-pipe-node on" : lit ? "dr-pipe-node lit" : "dr-pipe-node"}>
              {on && <circle className="dr-pipe-halo" cx={node.x} cy={node.y} r="16" />}
              <circle className="dr-pipe-core" cx={node.x} cy={node.y} r={on ? 7 : 5} />
              <text className="dr-pipe-idx" x={node.x} y={node.y + 3.5} textAnchor="middle">
                {String(node.i + 1).padStart(2, "0")}
              </text>
              <text className="dr-pipe-label" x={lx} y={ly + 3.5} textAnchor="middle">
                {node.label}
              </text>
            </g>
          )
        })}
        <text className="dr-pipe-center" x={cx} y={cy + 4} textAnchor="middle">VIEW</text>
      </svg>
      <ol className="dr-pipeline-legend">
        {STEP_LABELS.map((label, i) => (
          <li key={label} className={i === active ? "on" : i < active ? "lit" : ""}>
            <b>{String(i + 1).padStart(2, "0")}</b>
            {label}
          </li>
        ))}
      </ol>
    </div>
  )
}

/** Scroll-driven vertical method track for the method section. */
export function MethodSequenceTrack() {
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const update = () => {
      const rect = node.getBoundingClientRect()
      const vh = window.innerHeight
      const travelled = vh * 0.78 - rect.top
      const span = rect.height + vh * 0.5
      setProgress(Math.min(1, Math.max(0, travelled / span)))
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  const active = Math.min(STEP_LABELS.length - 1, Math.floor(progress * STEP_LABELS.length))

  return (
    <div className="dr-method-track" ref={ref}>
      <div className="dr-method-rail" aria-hidden>
        <span style={{ transform: `scaleY(${progress})` }} />
      </div>
      <ol>
        {STEP_LABELS.map((step, i) => (
          <Reveal as="li" key={step} className={i <= active ? "is-active" : ""} delay={i * 40}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3>{step}</h3>
              <p>{methodCopy[step]}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  )
}

const methodCopy: Record<string, string> = {
  Define: "Name the decision, scope and what a useful answer must resolve.",
  Evidence: "Gather what is known, name gaps, and make working material visible.",
  Assumptions: "Surface what must hold true — and what would change the answer.",
  Options: "Hold alternatives long enough to compare trade-offs honestly.",
  Risk: "Test dependencies, failure modes and downstream consequences.",
  "Stress test": "Pressure-test the preferred path against what could go wrong.",
  Recommend: "Arrive at proceed, modify, or do not proceed — with conditions.",
  Act: "Sequence the next actions leadership can actually take.",
}

export function QuestionGrid({ questions }: { questions: string[] }) {
  return (
    <ul className="dr-questions">
      {questions.map((q, i) => (
        <Reveal as="li" key={q} delay={(i % 3) * 60}>
          <span>{String(i + 1).padStart(2, "0")}</span>
          <p>{q}</p>
        </Reveal>
      ))}
    </ul>
  )
}

const deliverableCopy: { title: string; body: string }[] = [
  {
    title: "Executive Decision Report",
    body: "A reasoned written account — context, evidence, assumptions, options, risks and recommendation.",
  },
  {
    title: "Decision Map",
    body: "A visual path from the decision through options, risks and trade-offs to expected outcome.",
  },
  {
    title: "Executive Deck",
    body: "Leadership-ready slides for discussion — not a substitute for the reasoning underneath.",
  },
  {
    title: "90-Day Action Plan",
    body: "A practical sequence across three horizons so the next move is clear.",
  },
  {
    title: "Executive Readout",
    body: "A focused session to walk through the conclusion, reasoning and next actions.",
  },
]

export function DeliverableStack() {
  return (
    <ol className="dr-deliverables">
      {deliverableCopy.map((item, i) => (
        <Reveal as="li" className="dr-deliverable" key={item.title} delay={i * 55}>
          <span>{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  )
}

export function SponsorGrid({ rows }: { rows: [string, string][] }) {
  return (
    <div className="dr-sponsors">
      {rows.map(([role, when], i) => (
        <Reveal className="dr-sponsor" key={role} delay={i * 70}>
          <span className="dr-sponsor-role">{role}</span>
          <p>{when}</p>
        </Reveal>
      ))}
    </div>
  )
}
