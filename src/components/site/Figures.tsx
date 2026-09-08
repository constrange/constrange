import type { ReactNode } from "react"

/* ============================================================
   Drawn figures — one hand, one grid.

   Every figure is drawn on a 480 × 300 field with a 20px module.
   Content lives inside x 40–440, y 40–260; the band below y 260 is
   reserved for typeset labels, so the figures optically align even
   when their interiors are very different.

   Stroke vocabulary (see .cx-fig rules in site.css):
     r       hairline rule        — the grid, the frame, the given
     l       drawn line           — a thing that is the case
     a       accent line          — the decision, the chosen path
     d / da  dotted leader        — the possible, the unofficial, the deferred
     fill    filled node         — settled, owned
     hollow  open node           — held, not yet settled
     n / k   typeset numeral / small-caps key
   ============================================================ */

export type FigureKind =
  | "overview"
  | "strategy"
  | "ai-automation"
  | "systems-operations"
  | "solution-design"
  | "implementation"
  | "transformation"
  | "judgement"
  | "capabilities"
  | "engagement"

export type FigureTone =
  | "sand"
  | "gold"
  | "teal"
  | "indigo"
  | "clay"
  | "moss"
  | "slate"
  | "violet"

export const figureTone: Record<FigureKind, FigureTone> = {
  overview: "sand",
  strategy: "violet",
  "ai-automation": "gold",
  "systems-operations": "teal",
  "solution-design": "indigo",
  implementation: "clay",
  transformation: "moss",
  judgement: "slate",
  capabilities: "sand",
  engagement: "violet",
}

export const figureCaption: Record<FigureKind, [string, string]> = {
  overview: ["Fig. 00", "Complexity → understanding → structure → path"],
  strategy: ["Fig. 01", "Options held, then one chosen"],
  "ai-automation": ["Fig. 02", "A fit line, tested against the work"],
  "systems-operations": ["Fig. 03", "The official path and the actual one"],
  "solution-design": ["Fig. 04", "A spine, its joins, and a non-goal"],
  implementation: ["Fig. 05", "A sequence that begins somewhere"],
  transformation: ["Fig. 06", "Three tracks, moved together"],
  judgement: ["Fig. 07", "A position inside real constraint"],
  capabilities: ["Fig. 08", "One list, evenly weighted"],
  engagement: ["Fig. 09", "Depth sized to the situation"],
}

const W = 480
const H = 300

function seeded(seed: number) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296
    return s / 4294967296
  }
}

/* ---------------- 00 · overview ---------------- */
const SCATTER = (() => {
  const rnd = seeded(11)
  return Array.from({ length: 32 }, () => {
    const x = 46 + rnd() * 142
    const y = 56 + rnd() * 168
    const angle = (rnd() * 180 - 90) * (Math.PI / 180)
    const len = 9 + rnd() * 15
    return {
      x1: x - Math.cos(angle) * len * 0.5,
      y1: y - Math.sin(angle) * len * 0.5,
      x2: x + Math.cos(angle) * len * 0.5,
      y2: y + Math.sin(angle) * len * 0.5,
    }
  })
})()

function Overview() {
  const gather = [60, 90, 120, 150, 180, 210, 240]
  return (
    <>
      {SCATTER.map((m, i) => (
        <line key={i} className="l" opacity={0.42 + (i % 5) * 0.1} {...m} />
      ))}

      {gather.map((y) => (
        <line key={y} className="d" x1={202} y1={y} x2={292} y2={150} />
      ))}

      <circle className="fill" cx={294} cy={150} r={3} />

      <g className="r">
        {[138, 150, 162].map((y) => (
          <line key={y} x1={306} y1={y} x2={362} y2={y} />
        ))}
        {[306, 324.6, 343.3, 362].map((x) => (
          <line key={x} x1={x} y1={138} x2={x} y2={162} />
        ))}
      </g>

      <line className="a" x1={362} y1={150} x2={424} y2={150} />
      <rect className="fill" x={424} y={144} width={12} height={12} />

      <g>
        <line className="r" x1={40} y1={272} x2={440} y2={272} />
        {[
          [60, "COMPLEXITY", "start"],
          [202, "UNDERSTANDING", "middle"],
          [330, "STRUCTURE", "middle"],
          [436, "PATH", "end"],
        ].map(([x, label, anchor]) => (
          <g key={label as string}>
            <line className="r" x1={x as number} y1={266} x2={x as number} y2={278} />
            <text className="k" x={x as number} y={292} textAnchor={anchor as string}>
              {label}
            </text>
          </g>
        ))}
      </g>
    </>
  )
}

/* ---------------- 01 · strategy ---------------- */
function Strategy() {
  const ends = [64, 100, 136, 172, 208, 244]
  const chosen = 3
  return (
    <>
      <line className="r" x1={286} y1={46} x2={286} y2={256} />
      <text className="k" x={286} y={36} textAnchor="middle">
        DECIDE
      </text>

      <g className="r">
        <line x1={44} y1={124} x2={52} y2={124} />
        <line x1={44} y1={124} x2={44} y2={176} />
        <line x1={44} y1={176} x2={52} y2={176} />
      </g>
      <text className="k" x={40} y={112} textAnchor="start">
        SITUATION
      </text>

      {ends.map((y, i) =>
        i === chosen ? null : (
          <g key={y}>
            <line className="d" x1={78} y1={150} x2={404} y2={y} />
            <circle className="hollow" cx={410} cy={y} r={4.5} />
            <text className="n" x={424} y={y + 3.5}>
              {String(i + 1).padStart(2, "0")}
            </text>
          </g>
        ),
      )}

      <line className="a" x1={78} y1={150} x2={404} y2={ends[chosen]} />
      <rect className="fill" x={404} y={ends[chosen] - 6} width={12} height={12} />
      <text className="n on" x={424} y={ends[chosen] + 3.5}>
        01
      </text>
      <circle className="fill" cx={72} cy={150} r={5.5} />

      <g>
        <line className="r" x1={40} y1={272} x2={440} y2={272} />
        <text className="k" x={40} y={288}>
          SIX CREDIBLE PATHS
        </text>
        <text className="k" x={440} y={288} textAnchor="end">
          ONE RECOMMENDED
        </text>
      </g>
    </>
  )
}

/* ---------------- 02 · ai & automation ---------------- */
const BARS = [58, 96, 142, 74, 118, 168, 88, 132, 62, 150, 104, 72, 126]
const THRESHOLD = 106

function AiAutomation() {
  const base = 236
  const fits = BARS.filter((h) => h > THRESHOLD).length
  return (
    <>
      <line className="r" x1={40} y1={base} x2={440} y2={base} />

      {BARS.map((h, i) => {
        const x = 56 + i * 30
        const top = base - h
        const on = h > THRESHOLD
        return (
          <g key={i}>
            <line className={on ? "a" : "l"} opacity={on ? 1 : 0.4} x1={x} y1={base} x2={x} y2={top} />
            {on ? (
              <rect className="fill" x={x - 5} y={top - 10} width={10} height={10} />
            ) : (
              <line className="r" x1={x - 5} y1={top} x2={x + 5} y2={top} />
            )}
          </g>
        )
      })}

      <line className="a" opacity={0.55} strokeDasharray="1 6" x1={40} y1={base - THRESHOLD} x2={440} y2={base - THRESHOLD} />
      <text className="k on" x={40} y={base - THRESHOLD - 10}>
        FIT LINE
      </text>

      <g>
        <line className="r" x1={40} y1={272} x2={440} y2={272} />
        <text className="k" x={40} y={288}>
          {BARS.length} CANDIDATES
        </text>
        <text className="k" x={440} y={288} textAnchor="end">
          {fits} WORTH DOING
        </text>
      </g>
    </>
  )
}

/* ---------------- 03 · systems & operations ---------------- */
function SystemsOperations() {
  const nodes = [60, 150, 240, 330, 420]
  return (
    <>
      <text className="k" x={40} y={92}>
        OFFICIAL
      </text>
      <line className="l" x1={60} y1={120} x2={420} y2={120} />
      {nodes.slice(0, 4).map((x) => (
        <rect key={x} className="hollow" x={x - 4} y={116} width={8} height={8} />
      ))}

      <text className="k" x={40} y={196}>
        ACTUAL
      </text>
      <path
        className="d"
        d="M150 120 L182 196 L296 196 L318 220 L392 220 L420 120"
      />

      <g>
        <circle className="hollow" cx={182} cy={196} r={6} />
        <line className="l" x1={178.5} y1={192.5} x2={185.5} y2={199.5} />
        <line className="l" x1={185.5} y1={192.5} x2={178.5} y2={199.5} />
        <text className="k" x={190} y={218}>
          CONTEXT DROPS
        </text>
      </g>

      <line className="r" strokeDasharray="1 5" x1={240} y1={124} x2={240} y2={192} />
      <text className="k" x={248} y={162}>
        GAP
      </text>

      <rect className="fill" x={414} y={114} width={12} height={12} />
      <text className="k on" x={410} y={100} textAnchor="end">
        THE JOIN
      </text>

      <g>
        <line className="r" x1={40} y1={272} x2={440} y2={272} />
        <text className="k" x={40} y={288}>
          REQUEST
        </text>
        <text className="k" x={440} y={288} textAnchor="end">
          CUSTOMER
        </text>
      </g>
    </>
  )
}

/* ---------------- 04 · solution design ---------------- */
const MODULES: [number, number, boolean][] = [
  [84, 118, false],
  [132, 92, false],
  [180, 138, false],
  [228, 96, true],
]

function SolutionDesign() {
  return (
    <>
      <text className="k" x={150} y={44} textAnchor="middle">
        SPINE
      </text>
      <line className="a" x1={150} y1={56} x2={150} y2={248} />

      <text className="k" x={44} y={70}>
        EXISTING
      </text>
      {[84, 132, 180].map((y) => (
        <g key={y}>
          <rect className="hollow" x={60} y={y - 4} width={8} height={8} />
          <line className="d" x1={72} y1={y} x2={148} y2={y} />
        </g>
      ))}

      {MODULES.map(([y, w, deferred], i) => (
        <g key={y}>
          <line className={deferred ? "d" : "l"} x1={150} y1={y} x2={214} y2={y} />
          <line className="r" x1={166} y1={y - 6} x2={166} y2={y + 6} />
          <line className="r" x1={172} y1={y - 6} x2={172} y2={y + 6} />
          <rect
            className="r"
            x={214}
            y={y - 15}
            width={w}
            height={30}
            strokeDasharray={deferred ? "2 5" : undefined}
            opacity={deferred ? 0.65 : 1}
          />
          <text className={deferred ? "n" : "n on"} x={224} y={y + 3.5}>
            {String(i + 1).padStart(2, "0")}
          </text>
          {deferred && (
            <text className="k" x={244} y={y + 3.5}>
              NOT YET
            </text>
          )}
        </g>
      ))}

      <g>
        <line className="r" x1={40} y1={272} x2={440} y2={272} />
        <text className="k" x={40} y={288}>
          THREE OPTIONS HELD
        </text>
        <text className="k" x={440} y={288} textAnchor="end">
          SEQUENCE 01 → 04
        </text>
      </g>
    </>
  )
}

/* ---------------- 05 · implementation ---------------- */
function Implementation() {
  const ticks = [56, 130, 204, 278, 352, 420]
  return (
    <>
      <path className="r" d="M44 132 L44 118 L108 118 L108 132" />
      <text className="k on" x={76} y={108} textAnchor="middle">
        FIRST MOVE
      </text>

      <line className="l" x1={56} y1={166} x2={420} y2={166} />
      <line className="d" x1={428} y1={166} x2={456} y2={166} />

      {ticks.map((x, i) => (
        <g key={x} opacity={i === 0 ? 1 : 0.92 - i * 0.11}>
          {i === 0 ? (
            <rect className="fill" x={x - 6} y={160} width={12} height={12} />
          ) : (
            <circle className="hollow" cx={x} cy={166} r={4.5} />
          )}
          <line className="r" x1={x} y1={178} x2={x} y2={190} />
          <text className={i === 0 ? "n on" : "n"} x={x} y={204} textAnchor="middle">
            {String(i + 1).padStart(2, "0")}
          </text>
        </g>
      ))}

      <g>
        {[56, 130, 204].map((x, i) => (
          <g key={x}>
            <line className="r" x1={x} y1={154} x2={x} y2={142} />
            <circle className="fill" cx={x} cy={138} r={3} opacity={1 - i * 0.24} />
          </g>
        ))}
        <text className="k" x={216} y={142}>
          OWNERS NAMED
        </text>
      </g>

      <g>
        <line className="r" x1={40} y1={272} x2={440} y2={272} />
        <text className="k" x={40} y={288}>
          DECISION
        </text>
        <text className="k" x={440} y={288} textAnchor="end">
          DAILY WORK
        </text>
      </g>
    </>
  )
}

/* ---------------- 06 · transformation ---------------- */
const TRACKS: [string, number, number, number][] = [
  ["PEOPLE", 112, 84, 126],
  ["PROCESS", 158, 150, 150],
  ["TECHNOLOGY", 204, 216, 174],
]

function Transformation() {
  return (
    <>
      {TRACKS.map(([label, x0, y0, y1]) => (
        <g key={label}>
          <text className="k" x={(x0 as number) - 10} y={(y0 as number) + 3.5} textAnchor="end">
            {label}
          </text>
          <path className="d" d={`M${x0} ${y0} Q 252 ${y0} 300 ${y1}`} />
          <line className="a" x1={300} y1={y1 as number} x2={424} y2={y1 as number} />
        </g>
      ))}

      <line className="r" x1={300} y1={112} x2={300} y2={188} />
      <text className="k on" x={300} y={100} textAnchor="middle">
        TOGETHER
      </text>

      <path className="l" d="M424 118 L436 118 L436 182 L424 182" />

      <g>
        <line className="r" x1={40} y1={272} x2={440} y2={272} />
        <text className="k" x={40} y={288}>
          THREE TRACKS, NOT THREE LAYERS
        </text>
        <text className="k" x={440} y={288} textAnchor="end">
          ONE WAY OF WORKING
        </text>
      </g>
    </>
  )
}

/* ---------------- 07 · judgement ---------------- */
function Judgement() {
  const left = 96
  const right = 384
  const top = 52
  const bottom = 216
  return (
    <>
      <rect className="r" x={left} y={top} width={right - left} height={bottom - top} />

      <g className="l" opacity={0.3}>
        {Array.from({ length: 12 }, (_, i) => (
          <line key={`t${i}`} x1={left + 12 + i * 24} y1={top} x2={left + 12 + i * 24} y2={top + 11} />
        ))}
        {Array.from({ length: 7 }, (_, i) => (
          <line key={`s${i}`} x1={right - 11} y1={top + 16 + i * 24} x2={right} y2={top + 16 + i * 24} />
        ))}
      </g>

      <line className="d" x1={left} y1={158} x2={252} y2={158} />
      <line className="d" x1={252} y1={bottom} x2={252} y2={158} />
      <circle className="fill" cx={252} cy={158} r={5.5} />
      <text className="k on" x={266} y={154}>
        ONE POSITION
      </text>

      <g opacity={0.75}>
        <circle className="hollow" cx={424} cy={84} r={6} />
        <line className="r" x1={419.5} y1={79.5} x2={428.5} y2={88.5} />
        <line className="r" x1={428.5} y1={79.5} x2={419.5} y2={88.5} />
        <text className="k" x={410} y={88} textAnchor="end">
          GENERIC ANSWER
        </text>
      </g>

      <text className="k" x={left} y={236}>
        CONTEXT
      </text>
      <text className="k" x={84} y={134} textAnchor="middle" transform="rotate(-90 84 134)">
        CONSTRAINT
      </text>

      <g>
        <line className="r" x1={40} y1={272} x2={440} y2={272} />
        <text className="k" x={40} y={288}>
          MANY PLAUSIBLE ANSWERS
        </text>
        <text className="k" x={440} y={288} textAnchor="end">
          ONE, WITH REASONS
        </text>
      </g>
    </>
  )
}

/* ---------------- 08 · capabilities ---------------- */
const ROWS = [104, 72, 118, 88, 132, 96, 110]

function Capabilities() {
  return (
    <>
      <line className="r" x1={40} y1={48} x2={440} y2={48} />
      {ROWS.map((len, i) => {
        const y = 74 + i * 27
        return (
          <g key={i}>
            <text className="n" x={40} y={y + 3.5}>
              {String(i + 1).padStart(2, "0")}
            </text>
            <line className="l" x1={72} y1={y} x2={72 + len} y2={y} />
            <line className="d" x1={80 + len} y1={y} x2={412} y2={y} />
            <line className="r" x1={420} y1={y - 5} x2={420} y2={y + 5} />
          </g>
        )
      })}
      <line className="r" x1={40} y1={264} x2={440} y2={264} />
      <text className="k" x={40} y={286}>
        SEVEN WAYS OF CONTRIBUTING
      </text>
      <text className="k" x={440} y={286} textAnchor="end">
        NO MENU
      </text>
    </>
  )
}

/* ---------------- 09 · engagement ---------------- */
const BRACKETS: [string, boolean][] = [
  ["BEGIN", false],
  ["CONTAIN", false],
  ["STRUCTURE", false],
  ["MOVE", true],
]

function Engagement() {
  const axis = 122
  const mid = 142
  return (
    <>
      {BRACKETS.map(([label, deferred], i) => {
        const x1 = 186 + i * 66
        const half = 24 + i * 22
        const y1 = mid - half
        const y2 = mid + half
        return (
          <g key={label}>
            <path
              className={i === 0 ? "a" : deferred ? "d" : "l"}
              opacity={i === 0 ? 1 : deferred ? 0.9 : 0.6}
              d={`M${axis} ${y1} H ${x1} V ${y2} H ${axis}`}
            />
            <text className={i === 0 ? "k on" : "k"} x={x1} y={y1 - 8} textAnchor="end">
              {`${String(i + 1).padStart(2, "0")}  ${label}${deferred ? "  ·  IF REQUIRED" : ""}`}
            </text>
          </g>
        )
      })}

      <circle className="fill" cx={axis} cy={mid} r={4.5} />
      <text className="k" x={axis - 14} y={mid + 3.5} textAnchor="end">
        STARTS HERE
      </text>

      <g>
        <line className="r" x1={40} y1={262} x2={440} y2={262} />
        {Array.from({ length: 12 }, (_, i) => {
          const x = 44 + i * 36
          const major = i === 0 || i === 5 || i === 11
          return (
            <g key={i}>
              <line className="r" x1={x} y1={262} x2={x} y2={major ? 274 : 269} />
              {major && (
                <text className="k" x={x} y={288} textAnchor="middle">
                  {String(i + 1).padStart(2, "0")}
                </text>
              )}
            </g>
          )
        })}
        <text className="k" x={440} y={252} textAnchor="end">
          HOW CONTAINED IS THE SITUATION
        </text>
      </g>
    </>
  )
}

const FIGURES: Record<FigureKind, () => ReactNode> = {
  overview: Overview,
  strategy: Strategy,
  "ai-automation": AiAutomation,
  "systems-operations": SystemsOperations,
  "solution-design": SolutionDesign,
  implementation: Implementation,
  transformation: Transformation,
  judgement: Judgement,
  capabilities: Capabilities,
  engagement: Engagement,
}

export function Figure({ kind, label }: { kind: FigureKind; label?: string }) {
  const Draw = FIGURES[kind]
  return (
    <svg className="cx-fig" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label ?? figureCaption[kind][1]}>
      <Draw />
    </svg>
  )
}

/* ---------------- the figure plate ---------------- */
export function FigurePlate({
  kind,
  size = "full",
  keys,
  className = "",
}: {
  kind: FigureKind
  size?: "full" | "half" | "thumb"
  keys?: string[]
  className?: string
}) {
  const [ref, caption] = figureCaption[kind]
  return (
    <figure className={`cx-plate cx-plate-${size} cx-fill-${figureTone[kind]} ${className}`.trim()}>
      <span className="cx-plate-grain" aria-hidden />
      <div className="cx-plate-art">
        <Figure kind={kind} />
      </div>
      {size !== "thumb" && (
        <figcaption>
          <span className="cx-plate-ref">{ref}</span>
          <span className="cx-plate-note">{caption}</span>
          {keys && keys.length > 0 && (
            <span className="cx-plate-keys">
              {keys.map((k) => (
                <i key={k}>{k}</i>
              ))}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  )
}

/* ---------------- depth dial (pricing estimator) ---------------- */
export function DepthDial({ depth, containment }: { depth: number; containment: number }) {
  const cells = 12
  return (
    <svg className="cx-fig cx-dial" viewBox="0 0 300 150" role="img" aria-label={`Indicative depth ${depth} of 12`}>
      <text className="k" x={0} y={12}>
        INDICATIVE DEPTH
      </text>
      <text className="n on" x={300} y={14} textAnchor="end">
        {String(Math.min(depth, cells)).padStart(2, "0")} / 12
      </text>

      {Array.from({ length: cells }, (_, i) => {
        const x = i * 25
        const on = i < depth
        return (
          <rect
            key={i}
            className={on ? "fill" : "r"}
            x={x}
            y={30}
            width={19}
            height={on ? 34 : 34}
            opacity={on ? 1 - i * 0.045 : 1}
          />
        )
      })}

      <line className="r" x1={0} y1={92} x2={300} y2={92} />
      <text className="k" x={0} y={112}>
        CONTAINMENT
      </text>
      <text className="n" x={300} y={112} textAnchor="end">
        {String(containment).padStart(2, "0")} / 12
      </text>
      {Array.from({ length: cells }, (_, i) => {
        const x = i * 25 + 9.5
        return (
          <line
            key={i}
            className={i < containment ? "a" : "r"}
            x1={x}
            y1={126}
            x2={x}
            y2={i < containment ? 138 : 133}
          />
        )
      })}
    </svg>
  )
}
