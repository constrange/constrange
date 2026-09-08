import type { ReactNode } from "react"
import { Reveal } from "@/components/site/Layout"

/* ============================================================
   About drawings — Constrange's house pictures.

   Same stroke grammar as InsightDraw / Figures (hairline, drawn,
   accent, dotted, fill, hollow) but the subject is the firm, not
   the method: range held by a constraint, unofficial paths, a
   picture that only appears at the join, what we are not.

   Not the ribbon mark at large size. Not AssemblyAI. Not a
   product dashboard. These plates are brand atmosphere.
   ============================================================ */

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
  tall = false,
}: {
  label: string
  children: ReactNode
  wide?: boolean
  tall?: boolean
}) {
  const vb = tall ? "0 0 640 640" : wide ? "0 0 960 360" : "0 0 640 360"
  return (
    <svg className={`adraw ${wide ? "is-wide" : ""} ${tall ? "is-tall" : ""}`} viewBox={vb} role="img" aria-label={label}>
      {children}
    </svg>
  )
}

export function AboutCaption({ refn, note }: { refn: string; note: string }) {
  return (
    <figcaption className="about-cap">
      <span>{refn}</span>
      <em>{note}</em>
    </figcaption>
  )
}

export function AboutPlate({
  refn,
  note,
  children,
  className = "",
}: {
  refn: string
  note: string
  children: ReactNode
  className?: string
}) {
  return (
    <Reveal className={`about-plate ${className}`.trim()}>
      <span className="about-plate-grain" aria-hidden />
      {children}
      <AboutCaption refn={refn} note={note} />
    </Reveal>
  )
}

/* ---------------- hero · range held by a bar ---------------- */
export function DrawRangeField() {
  const ys = [72, 96, 120, 144, 168, 192, 216, 240, 264, 288]
  return (
    <Frame label="A field of options held by a constraint. One path continues." wide>
      <text className="k" x={28} y={36}>
        RANGE
      </text>
      <text className="k on" x={418} y={36}>
        CONSTRAINT
      </text>
      <text className="k" x={820} y={36}>
        PATH
      </text>

      <Stipple n={220} seed={11} x={24} y={52} w={360} h={260} />

      {ys.map((y, i) => {
        const wobble = [18, 42, 8, 64, 28, 50, 12, 38, 22, 46][i]
        const keep = i === 3 || i === 4 || i === 5
        return (
          <g key={y}>
            <line className="d" x1={28} y1={y} x2={392} y2={y + (i % 2 === 0 ? 6 : -4)} />
            <line className={keep ? "l" : "r"} x1={28 + wobble} y1={y} x2={400} y2={y} />
          </g>
        )
      })}

      <rect className="bar" x={408} y={56} width={10} height={250} />

      <line className="l" x1={428} y1={144} x2={780} y2={144} />
      <line className="l" x1={428} y1={168} x2={820} y2={168} />
      <line className="a" x1={428} y1={192} x2={886} y2={192} />
      <rect className="fill" x={886} y={184} width={16} height={16} />

      <line className="r" x1={28} y1={328} x2={932} y2={328} />
    </Frame>
  )
}

/* ---------------- the name ---------------- */
export function DrawName() {
  return (
    <Frame label="The name drawn: a range held open by a constraint bar">
      <Stipple n={90} seed={7} x={40} y={48} w={560} h={260} />

      <circle className="r" cx={268} cy={178} r={118} />
      <circle className="l" cx={268} cy={178} r={86} />
      <path className="a" d="M 268 92 A 86 86 0 1 0 268 264" />

      <rect className="bar" x={348} y={148} width={86} height={18} />

      <text className="k" x={40} y={36}>
        RANGE
      </text>
      <text className="k on" x={348} y={140}>
        THE BAR
      </text>
      <text className="k" x={40} y={332}>
        CONSTRANGE
      </text>
      <text className="k" x={348} y={332}>
        CONSTRAINT · RANGE
      </text>
    </Frame>
  )
}

/* ---------------- why we exist · unofficial path ---------------- */
export function DrawUnofficial() {
  return (
    <Frame label="The official path and the actual one, meeting at a join" wide>
      <text className="k" x={28} y={36}>
        AS DRAWN
      </text>
      <text className="k on" x={28} y={200}>
        AS DONE
      </text>
      <text className="k" x={780} y={36}>
        THE JOIN
      </text>

      <line className="r" x1={40} y1={88} x2={720} y2={88} />
      <circle className="hollow" cx={40} cy={88} r={5} />
      <circle className="hollow" cx={720} cy={88} r={5} />

      <path
        className="d"
        d="M 40 248 C 120 248, 150 160, 230 210 C 310 260, 340 300, 430 240 C 520 180, 560 120, 640 168 C 700 200, 740 220, 820 220"
      />
      <circle className="hollow" cx={40} cy={248} r={5} />

      <line className="a" x1={720} y1={88} x2={820} y2={220} />
      <rect className="fill" x={812} y={212} width={16} height={16} />

      <line className="r" x1={28} y1={328} x2={932} y2={328} />
    </Frame>
  )
}

/* ---------------- how we think · a picture at the join ---------------- */
export function DrawHeld() {
  const threads: [number, string][] = [
    [80, "WORK"],
    [148, "SYSTEMS"],
    [216, "PEOPLE"],
    [284, "RISK"],
    [352, "TIME"],
  ]
  return (
    <Frame label="Five threads become a picture only at the join">
      <text className="k" x={28} y={36}>
        HELD SEPARATELY
      </text>
      <text className="k on" x={420} y={36}>
        ONE PICTURE
      </text>

      {threads.map(([y, label]) => (
        <g key={label}>
          <text className="k" x={28} y={y + 4}>
            {label}
          </text>
          <line className="d" x1={110} y1={y} x2={318} y2={188} />
        </g>
      ))}

      <rect className="bar" x={318} y={70} width={8} height={220} />
      <line className="a" x1={326} y1={188} x2={520} y2={188} />
      <rect className="fill" x={520} y={180} width={16} height={16} />
      <text className="k on" x={548} y={192}>
        NAMED
      </text>

      <line className="r" x1={28} y1={328} x2={612} y2={328} />
    </Frame>
  )
}

/* ---------------- what we are not ---------------- */
export function DrawNot() {
  const stack: [number, string][] = [
    [72, "AI AGENCY"],
    [118, "DEFAULT STACK"],
    [164, "SOFTWARE-FIRST"],
    [210, "BODY SHOP"],
    [256, "PLAYBOOK"],
  ]
  return (
    <Frame label="A catalogue of what we are not, against the work that continues" wide>
      <text className="k" x={28} y={36}>
        NOT THIS
      </text>
      <text className="k on" x={520} y={36}>
        THIS
      </text>

      {stack.map(([y, label]) => (
        <g key={label}>
          <rect className="hollow" x={28} y={y - 16} width={200} height={36} />
          <text className="k" x={44} y={y + 6}>
            {label}
          </text>
          <line className="d" x1={228} y1={y} x2={400} y2={188} />
        </g>
      ))}

      <rect className="bar" x={400} y={56} width={10} height={250} />
      <line className="a" x1={420} y1={188} x2={780} y2={188} />
      <circle className="hollow" cx={798} cy={188} r={8} />
      <text className="k" x={820} y={192}>
        A SITUATION, HELD
      </text>

      <line className="r" x1={28} y1={328} x2={932} y2={328} />
    </Frame>
  )
}

/* ---------------- brand atmosphere — unique field mark ---------------- */
export function DrawAtmosphere() {
  const arcs = [210, 168, 126, 84]
  return (
    <Frame label="Constrange field: nested range, constraint bar, grain" tall>
      <rect className="void" x={0} y={0} width={640} height={640} />
      <Stipple n={420} seed={19} x={24} y={24} w={592} h={592} fill="#dbff71" />

      {arcs.map((r, i) => (
        <path
          key={r}
          className={i === 1 ? "a-light" : "r-light"}
          d={`M ${320 + r * 0.18} ${320 - r} A ${r} ${r} 0 1 0 ${320 + r * 0.18} ${320 + r}`}
        />
      ))}

      <rect className="bar-light" x={368} y={292} width={118} height={22} />

      <text className="k light" x={48} y={64}>
        FIELD
      </text>
      <text className="k light" x={48} y={592}>
        CONSTRAINT HOLDS THE RANGE
      </text>
    </Frame>
  )
}

export function DrawSign() {
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
