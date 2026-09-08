import type { ReactNode } from "react"

/* House drawings — one grammar, different pictures.
   Hairline / drawn / accent / dotted / fill / hollow / bar / stipple. */

function seeded(seed: number) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296
    return s / 4294967296
  }
}

function Stipple({
  n,
  seed,
  x,
  y,
  w,
  h,
  fill = "currentColor",
}: {
  n: number
  seed: number
  x: number
  y: number
  w: number
  h: number
  fill?: string
}) {
  const rand = seeded(seed)
  const dots: ReactNode[] = []
  for (let i = 0; i < n; i++) {
    const px = x + rand() * w
    const py = y + rand() * h
    const r = 0.35 + rand() * 1.55
    const o = 0.08 + rand() * 0.42
    dots.push(<circle key={i} cx={px} cy={py} r={r} fill={fill} opacity={o} />)
  }
  return <g aria-hidden>{dots}</g>
}

function Frame({
  label,
  children,
  wide = false,
}: {
  label: string
  children: ReactNode
  wide?: boolean
}) {
  return (
    <svg className={`adraw ${wide ? "is-wide" : ""}`} viewBox={wide ? "0 0 960 360" : "0 0 640 360"} role="img" aria-label={label}>
      {children}
    </svg>
  )
}

/* ---------------- thinking · three holds ---------------- */
export function DrawHolds() {
  const cols: [number, string, boolean][] = [
    [48, "UNDERSTAND", false],
    [248, "STRUCTURE", false],
    [448, "PRIORITIES", true],
  ]
  return (
    <Frame label="Three holds. Technology waits.">
      <Stipple n={70} seed={3} x={28} y={48} w={580} h={250} />
      {cols.map(([x, label, last]) => (
        <g key={label}>
          <rect className="hollow" x={x} y={72} width={148} height={168} />
          <text className={last ? "k on" : "k"} x={x + 16} y={100}>
            {label}
          </text>
          <line className="d" x1={x + 74} y1={240} x2={x + 74} y2={288} />
        </g>
      ))}
      <line className="a" x1={48} y1={288} x2={520} y2={288} />
      <rect className="bar" x={528} y={278} width={64} height={20} />
      <text className="k" x={28} y={36}>
        HOLDS
      </text>
      <text className="k on" x={528} y={270}>
        THEN, MAYBE
      </text>
      <line className="r" x1={28} y1={328} x2={612} y2={328} />
    </Frame>
  )
}

export function DrawUnderstand() {
  const threads: [number, string][] = [
    [88, "WORK"],
    [136, "SYSTEMS"],
    [184, "PEOPLE"],
    [232, "RISK"],
    [280, "TIME"],
  ]
  return (
    <Frame label="The situation held as five threads">
      {threads.map(([y, label]) => (
        <g key={label}>
          <text className="k" x={28} y={y + 4}>
            {label}
          </text>
          <line className="d" x1={110} y1={y} x2={360} y2={184} />
        </g>
      ))}
      <rect className="fill" x={360} y={176} width={16} height={16} />
      <line className="a" x1={376} y1={184} x2={560} y2={184} />
      <text className="k on" x={388} y={172}>
        AS IT IS
      </text>
      <line className="r" x1={28} y1={328} x2={612} y2={328} />
    </Frame>
  )
}

export function DrawStructure() {
  return (
    <Frame label="A dense situation reduced to a spine">
      <Stipple n={80} seed={5} x={40} y={60} w={220} h={220} />
      {[80, 120, 160, 200, 240].map((y, i) => (
        <line key={y} className="d" x1={48} y1={y} x2={280} y2={168 + (i - 2) * 8} />
      ))}
      <rect className="bar" x={286} y={70} width={10} height={200} />
      <line className="l" x1={306} y1={120} x2={560} y2={120} />
      <line className="l" x1={306} y1={168} x2={520} y2={168} />
      <line className="a" x1={306} y1={216} x2={580} y2={216} />
      <rect className="fill" x={580} y={208} width={16} height={16} />
      <text className="k" x={28} y={36}>
        DECISIONS
      </text>
      <text className="k on" x={306} y={104}>
        SPINE
      </text>
      <line className="r" x1={28} y1={328} x2={612} y2={328} />
    </Frame>
  )
}

export function DrawRank() {
  const rows: [number, string, string][] = [
    [88, "UNDERSTAND", "FIRST"],
    [136, "DEFINE", "THEN"],
    [184, "TECHNOLOGY", "LATER"],
    [232, "DEFAULT STACK", "RARELY"],
    [280, "MODEL ALONE", "NOT ENOUGH"],
  ]
  return (
    <Frame label="A ranking under constraint, not a benchmark">
      <text className="k" x={28} y={36}>
        ORDER
      </text>
      {rows.map(([y, label, tag], i) => {
        const w = 420 - i * 58
        return (
          <g key={label}>
            <line className={i < 2 ? "a" : "r"} x1={40} y1={y} x2={40 + w} y2={y} />
            <text className={i === 0 ? "k on" : "k"} x={48} y={y - 8}>
              {label}
            </text>
            <text className="k" x={48 + w - 4} y={y - 8} textAnchor="end">
              {tag}
            </text>
          </g>
        )
      })}
      <rect className="bar" x={40} y={300} width={16} height={16} />
      <text className="k on" x={66} y={312}>
        A STANCE, NOT A SCORE
      </text>
    </Frame>
  )
}

/* ---------------- contexts ---------------- */
export function DrawContexts() {
  const pts: [number, number, string][] = [
    [120, 110, "WORK"],
    [280, 80, "SYSTEMS"],
    [460, 120, "RISK"],
    [180, 220, "TIME"],
    [340, 200, "PEOPLE"],
    [500, 240, "JOIN"],
  ]
  return (
    <Frame label="Contexts as a field, not a sector list">
      <Stipple n={120} seed={21} x={36} y={48} w={560} h={260} />
      {pts.map(([x, y, label], i) => (
        <g key={label}>
          {i > 0 && <line className="d" x1={pts[i - 1][0]} y1={pts[i - 1][1]} x2={x} y2={y} />}
          <circle className={label === "JOIN" ? "fill" : "hollow"} cx={x} cy={y} r={label === "JOIN" ? 6 : 5} />
          <text className={label === "JOIN" ? "k on" : "k"} x={x + 12} y={y + 4}>
            {label}
          </text>
        </g>
      ))}
      <text className="k" x={28} y={36}>
        LANDSCAPE
      </text>
      <line className="r" x1={28} y1={328} x2={612} y2={328} />
    </Frame>
  )
}

/* ---------------- availability ---------------- */
export function DrawSeatsOpen() {
  return (
    <Frame label="Two seats open. One held. A small practice.">
      <text className="k" x={28} y={36}>
        PRACTICE
      </text>
      {[[120, "OPEN"], [280, "OPEN"], [440, "HELD"]].map(([x, tag], i) => (
        <g key={String(x)}>
          <rect className={i === 2 ? "fill" : "hollow"} x={Number(x)} y={120} width={88} height={88} />
          <text className={i === 2 ? "k on" : "k"} x={Number(x) + 16} y={168}>
            {String(tag)}
          </text>
        </g>
      ))}
      <line className="a" x1={120} y1={248} x2={528} y2={248} />
      <text className="k" x={28} y={312}>
        A SMALL NUMBER OF SITUATIONS
      </text>
      <line className="r" x1={28} y1={328} x2={612} y2={328} />
    </Frame>
  )
}

/* ---------------- organisations ---------------- */
export function DrawOverlap() {
  return (
    <Frame label="Overlapping programmes held by one constraint" wide>
      <text className="k" x={28} y={36}>
        PROGRAMMES
      </text>
      <rect className="hollow" x={48} y={80} width={280} height={72} />
      <text className="k" x={64} y={122}>
        DIGITAL A
      </text>
      <rect className="hollow" x={160} y={140} width={280} height={72} />
      <text className="k" x={176} y={182}>
        DIGITAL B
      </text>
      <rect className="hollow" x={90} y={200} width={280} height={72} />
      <text className="k" x={106} y={242}>
        AI PROGRAMME
      </text>
      <rect className="bar" x={520} y={70} width={10} height={220} />
      <text className="k on" x={542} y={96}>
        ATTENTION
      </text>
      <line className="a" x1={530} y1={180} x2={820} y2={180} />
      <rect className="fill" x={820} y={172} width={16} height={16} />
      <text className="k" x={542} y={200}>
        ONE PROBLEM
      </text>
      <line className="r" x1={28} y1={328} x2={932} y2={328} />
    </Frame>
  )
}

/* ---------------- operations ---------------- */
export function DrawWorkPath() {
  return (
    <Frame label="Official path above. Actual path below. The join is the work." wide>
      <text className="k" x={28} y={36}>
        AS DRAWN
      </text>
      <line className="r" x1={48} y1={88} x2={700} y2={88} />
      <circle className="hollow" cx={48} cy={88} r={5} />
      <circle className="hollow" cx={700} cy={88} r={5} />
      <text className="k on" x={28} y={200}>
        AS DONE
      </text>
      <path className="d" d="M 48 248 C 140 248, 170 150, 260 210 C 350 270, 400 300, 500 230 C 600 160, 660 200, 780 220" />
      <rect className="fill" x={772} y={212} width={16} height={16} />
      <text className="k" x={800} y={192}>
        THE JOIN
      </text>
      <line className="r" x1={28} y1={328} x2={932} y2={328} />
    </Frame>
  )
}

/* ---------------- customer & service ---------------- */
export function DrawJourney() {
  const nodes: [number, string][] = [
    [80, "ASK"],
    [260, "TEAM A"],
    [440, "TEAM B"],
    [620, "SYSTEM"],
    [800, "ANSWER"],
  ]
  return (
    <Frame label="A customer journey that breaks at the joins" wide>
      <text className="k" x={28} y={36}>
        FRONT
      </text>
      {nodes.map(([x, label], i) => (
        <g key={label}>
          <circle className={i === 0 || i === 4 ? "hollow" : "fill"} cx={x} cy={88} r={6} />
          <text className="k" x={x} y={64} textAnchor="middle">
            {label}
          </text>
          {i < nodes.length - 1 && <line className="d" x1={x + 10} y1={88} x2={nodes[i + 1][0] - 10} y2={88} />}
        </g>
      ))}
      <text className="k on" x={28} y={180}>
        THE JOIN
      </text>
      <line className="a" x1={260} y1={108} x2={260} y2={220} />
      <line className="a" x1={260} y1={220} x2={620} y2={220} />
      <line className="a" x1={620} y1={220} x2={620} y2={108} />
      <text className="k" x={268} y={244}>
        CONTEXT DROPS HERE
      </text>
      <line className="r" x1={28} y1={328} x2={932} y2={328} />
    </Frame>
  )
}

/* ---------------- technology leaders ---------------- */
export function DrawChoice() {
  const tools = ["PLATFORM", "MODEL", "STACK", "COPILOT"]
  return (
    <Frame label="Tool requests intercepted. A named problem continues." wide>
      <text className="k" x={28} y={36}>
        ASKED FOR
      </text>
      {tools.map((label, i) => (
        <g key={label}>
          <rect className="hollow" x={28} y={64 + i * 52} width={150} height={36} />
          <text className="k" x={44} y={86 + i * 52}>
            {label}
          </text>
          <line className="d" x1={178} y1={82 + i * 52} x2={360} y2={180} />
        </g>
      ))}
      <rect className="bar" x={360} y={70} width={10} height={220} />
      <line className="a" x1={370} y1={180} x2={780} y2={180} />
      <rect className="fill" x={780} y={172} width={16} height={16} />
      <text className="k on" x={382} y={96}>
        THE PROBLEM
      </text>
      <line className="r" x1={28} y1={328} x2={932} y2={328} />
    </Frame>
  )
}

/* ---------------- regulated ---------------- */
export function DrawCaution() {
  return (
    <Frame label="Contained steps that can be reversed">
      <text className="k" x={28} y={36}>
        LIVE OPERATIONS
      </text>
      <rect className="hollow" x={48} y={72} width={544} height={200} />
      {[160, 280, 400].map((x, i) => (
        <g key={x}>
          <circle className={i === 0 ? "fill" : "hollow"} cx={x} cy={172} r={8} />
          <text className="k" x={x} y={204} textAnchor="middle">
            {`STEP ${i + 1}`}
          </text>
        </g>
      ))}
      <line className="a" x1={168} y1={172} x2={272} y2={172} />
      <line className="d" x1={288} y1={172} x2={392} y2={172} />
      <text className="k on" x={64} y={96}>
        REVERSIBLE
      </text>
      <rect className="bar" x={500} y={140} width={64} height={16} />
      <text className="k" x={500} y={132}>
        HOLD
      </text>
      <line className="r" x1={28} y1={328} x2={612} y2={328} />
    </Frame>
  )
}

/* ---------------- growing teams ---------------- */
export function DrawInformal() {
  return (
    <Frame label="An informal path that needs structure without freezing" wide>
      <text className="k" x={28} y={36}>
        INFORMAL
      </text>
      <path className="d" d="M 48 200 C 120 80, 200 300, 280 160 C 360 40, 420 280, 500 180" />
      <rect className="bar" x={520} y={70} width={10} height={220} />
      <line className="l" x1={540} y1={140} x2={780} y2={140} />
      <line className="a" x1={540} y1={200} x2={860} y2={200} />
      <line className="l" x1={540} y1={260} x2={720} y2={260} />
      <text className="k on" x={540} y={120}>
        STRUCTURE
      </text>
      <text className="k" x={540} y={292}>
        STILL ABLE TO MOVE
      </text>
      <circle className="hollow" cx={48} cy={200} r={5} />
      <rect className="fill" x={860} y={192} width={16} height={16} />
      <line className="r" x1={28} y1={328} x2={932} y2={328} />
    </Frame>
  )
}

export function DrawSignSmall() {
  return (
    <Frame label="A first move, owned">
      <line className="d" x1={40} y1={180} x2={240} y2={180} />
      <rect className="bar" x={240} y={70} width={10} height={220} />
      <line className="a" x1={250} y1={180} x2={520} y2={180} />
      <rect className="fill" x={520} y={172} width={16} height={16} />
      <text className="k" x={40} y={36}>
        CONVERSATION
      </text>
      <text className="k on" x={250} y={64}>
        FIRST MOVE
      </text>
      <line className="r" x1={40} y1={328} x2={600} y2={328} />
    </Frame>
  )
}

/* ---------------- contact · a note that stays here ---------------- */
export function DrawDraft() {
  return (
    <Frame label="A note kept in the browser. It is not sent.">
      <rect className="hollow" x={88} y={52} width={464} height={240} />
      <rect className="bar" x={88} y={52} width={10} height={240} />
      <text className="k" x={118} y={84}>
        DRAFT
      </text>
      <text className="k on" x={400} y={84}>
        NOT SENT
      </text>
      <line className="d" x1={118} y1={118} x2={500} y2={118} />
      <line className="d" x1={118} y1={148} x2={470} y2={148} />
      <line className="d" x1={118} y1={178} x2={430} y2={178} />
      <line className="d" x1={118} y1={208} x2={390} y2={208} />
      <text className="k" x={28} y={320}>
        THE FORM STAYS IN THIS BROWSER
      </text>
      <line className="r" x1={28} y1={336} x2={612} y2={336} />
    </Frame>
  )
}

/* ---------------- careers · no catalogue ---------------- */
export function DrawHire() {
  const ghosts: [number, string][] = [
    [92, "ROLE"],
    [140, "ROLE"],
    [188, "ROLE"],
  ]
  return (
    <Frame label="No catalogue of vacancies. A named need, or nothing.">
      <text className="k" x={28} y={36}>
        CATALOGUE
      </text>
      {ghosts.map(([y, label]) => (
        <g key={y} opacity={0.45}>
          <rect className="hollow" x={28} y={y} width={176} height={36} />
          <text className="k" x={44} y={y + 24}>
            {label}
          </text>
          <line className="d" x1={204} y1={y + 18} x2={292} y2={180} />
        </g>
      ))}
      <rect className="bar" x={292} y={64} width={10} height={220} />
      <line className="a" x1={302} y1={180} x2={520} y2={180} />
      <rect className="hollow" x={520} y={136} width={56} height={88} />
      <text className="k on" x={314} y={56}>
        NAMED NEED
      </text>
      <text className="k" x={28} y={312}>
        NOTHING LISTED
      </text>
      <line className="r" x1={28} y1={328} x2={612} y2={328} />
    </Frame>
  )
}
