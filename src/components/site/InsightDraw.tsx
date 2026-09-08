import type { ReactNode } from "react"
import { Reveal } from "@/components/site/Layout"

/* ============================================================
   Insight drawings — Constrange's own hand.

   Same stroke grammar as Figures.tsx (hairline / drawn / accent /
   dotted / hollow / fill) but at report scale: each composition
   is a picture of a situation, not a tile of copy.

   Devices we do not use (they belong to someone else's report):
   stacked ovals, bell-curve waves, yellow chapter pills,
   glass quote boxes, sparkle "Our take", circled survey stats.
   ============================================================ */

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
    <svg
      className={`idraw ${wide ? "is-wide" : ""}`}
      viewBox={wide ? "0 0 960 340" : "0 0 640 340"}
      role="img"
      aria-label={label}
    >
      {children}
    </svg>
  )
}

function Caption({ refn, note }: { refn: string; note: string }) {
  return (
    <figcaption className="idraw-cap">
      <span>{refn}</span>
      <em>{note}</em>
    </figcaption>
  )
}

export function Field({
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
    <Reveal className={`idraw-field ${className}`.trim()}>
      <span className="idraw-glow" aria-hidden />
      {children}
      <Caption refn={refn} note={note} />
    </Reveal>
  )
}

/* ---------------- method · hero ----------------
   Tool-requests arrive as neat cubes. A constraint bar
   (the mark's opening) intercepts them. One named problem continues. */
export function DrawArrival() {
  const tools: [number, string][] = [
    [54, "PLATFORM"],
    [108, "AI"],
    [162, "STACK"],
    [216, "COPILOT"],
  ]
  return (
    <Frame label="A tool request intercepted by a named problem" wide>
      <text className="k" x={28} y={36}>
        THE REQUEST
      </text>
      {tools.map(([y, label]) => (
        <g key={label}>
          <rect className="hollow" x={28} y={y} width={118} height={36} />
          <text className="k" x={44} y={y + 22}>
            {label}
          </text>
          <line className="d" x1={146} y1={y + 18} x2={268} y2={168} />
        </g>
      ))}

      <line className="a" x1={276} y1={48} x2={276} y2={292} />
      <text className="k on" x={288} y={64}>
        CONSTRAINT
      </text>
      <text className="k" x={288} y={80}>
        THE BAR
      </text>

      <line className="a" x1={276} y1={168} x2={560} y2={168} />
      <rect className="fill" x={560} y={160} width={16} height={16} />
      <text className="k on" x={586} y={172}>
        NAMED PROBLEM
      </text>

      <line className="l" x1={568} y1={176} x2={568} y2={236} />
      <line className="l" x1={568} y1={236} x2={860} y2={236} />
      <circle className="hollow" cx={860} cy={236} r={6} />
      <text className="k" x={860} y={262} textAnchor="middle">
        A PATH, LATER
      </text>

      <line className="r" x1={28} y1={312} x2={936} y2={312} />
    </Frame>
  )
}

/* ---------------- method · stated vs looked-for ---------------- */
export function DrawLook() {
  return (
    <Frame label="The stated request against what we look for" wide>
      <text className="k" x={24} y={32}>
        STATED
      </text>
      <text className="k on" x={520} y={32}>
        LOOKED FOR
      </text>

      {[
        [72, "CHOOSE A PLATFORM"],
        [128, "STAND UP AI"],
        [184, "MODERNISE THE STACK"],
      ].map(([y, label]) => (
        <g key={label as string}>
          <rect className="r" x={24} y={y as number} width={280} height={40} />
          <text className="k" x={40} y={(y as number) + 25}>
            {label as string}
          </text>
        </g>
      ))}
      <line className="d" x1={304} y1={164} x2={420} y2={164} />
      <text className="k" x={360} y={152} textAnchor="middle">
        FUNDABLE
      </text>

      {/* two systems that do not meet */}
      <rect className="hollow" x={520} y={72} width={160} height={72} />
      <text className="k" x={536} y={112}>
        SYSTEM A
      </text>
      <rect className="hollow" x={760} y={184} width={160} height={72} />
      <text className="k" x={776} y={224}>
        SYSTEM B
      </text>

      <line className="l" x1={680} y1={108} x2={720} y2={108} />
      <line className="l" x1={760} y1={220} x2={720} y2={220} />
      <line className="d" x1={720} y1={108} x2={720} y2={220} />

      <rect className="fill" x={712} y={156} width={16} height={16} />
      <text className="k on" x={736} y={168}>
        THE JOIN
      </text>

      <path className="d" d="M580 144 C 580 200, 700 200, 760 200" />
      <text className="k" x={580} y={268}>
        UNOFFICIAL PATH
      </text>

      <line className="r" x1={24} y1={312} x2={936} y2={312} />
    </Frame>
  )
}

/* ---------------- method · five threads held at a join ---------------- */
export function DrawReading() {
  const threads: [string, number, string][] = [
    ["WORK", 70, "M40 70 H 420"],
    ["SYSTEMS", 118, "M40 118 H 180 V 90 H 260 V 118 H 420"],
    ["PEOPLE", 166, "M40 166 H 420"],
    ["TIME", 214, "M40 214 H 420"],
    ["CONSTRAINT", 262, "M40 262 H 420"],
  ]
  return (
    <Frame label="Five threads held at a single join">
      {threads.map(([label, y, d]) => (
        <g key={label}>
          <text className="k" x={40} y={y - 12}>
            {label}
          </text>
          <path className={label === "CONSTRAINT" ? "a" : "l"} d={d} />
        </g>
      ))}

      {/* people as nodes on their thread */}
      {[120, 210, 300].map((x) => (
        <circle key={x} className="hollow" cx={x} cy={166} r={5} />
      ))}
      {/* time ticks */}
      {[80, 140, 200, 260, 320, 380].map((x) => (
        <line key={x} className="r" x1={x} y1={208} x2={x} y2={220} />
      ))}

      <line className="a" x1={420} y1={70} x2={420} y2={262} />
      <rect className="fill" x={412} y={158} width={16} height={16} />
      <text className="k on" x={440} y={170}>
        THE JOIN
      </text>
      <text className="k" x={440} y={186}>
        WHERE THE PATH
      </text>
      <text className="k" x={440} y={200}>
        HOLDS OR FAILS
      </text>

      <line className="r" x1={40} y1={312} x2={600} y2={312} />
    </Frame>
  )
}

/* ---------------- method · five stages as a score ---------------- */
export function DrawStages({
  stages,
}: {
  stages: { n: string; title: string; body: string }[]
}) {
  const xs = [80, 220, 360, 500, 640]
  return (
    <svg className="idraw is-wide" viewBox="0 0 720 280" role="img" aria-label="Five stages, one first move">
      <line className="l" x1={40} y1={118} x2={680} y2={118} />
      <line className="d" x1={680} y1={118} x2={710} y2={118} />
      <text className="k" x={40} y={36}>
        THE SEQUENCE
      </text>
      <text className="k on" x={680} y={36} textAnchor="end">
        A FIRST MOVE
      </text>

      {stages.map((s, i) => {
        const x = xs[i]
        const last = i === stages.length - 1
        return (
          <g key={s.n}>
            {last ? (
              <rect className="fill" x={x - 8} y={110} width={16} height={16} />
            ) : (
              <circle className="hollow" cx={x} cy={118} r={7} />
            )}
            <line className="r" x1={x} y1={126} x2={x} y2={168} />
            <text className={last ? "n on" : "n"} x={x} y={188} textAnchor="middle">
              {s.n}
            </text>
            <text className={last ? "k on" : "k"} x={x} y={208} textAnchor="middle">
              {s.title.toUpperCase()}
            </text>
            {i < stages.length - 1 && (
              <path className="d" d={`M${x + 12} 118 H ${xs[i + 1] - 12}`} />
            )}
          </g>
        )
      })}

      <text className="k" x={40} y={252}>
        EACH STAGE LEAVES AN ARTEFACT YOU CAN CHALLENGE
      </text>
    </svg>
  )
}

/* ---------------- method · three artefacts as objects ---------------- */
export function DrawArtefacts() {
  return (
    <Frame label="Three artefacts you can stand behind" wide>
      {/* reading — scattered marks held */}
      <rect className="r" x={40} y={48} width={260} height={220} />
      <text className="k on" x={56} y={72}>
        01  SITUATION READING
      </text>
      {[
        [80, 110],
        [140, 128],
        [92, 168],
        [168, 154],
        [120, 196],
        [200, 188],
      ].map(([x, y], i) => (
        <line
          key={i}
          className="l"
          opacity={0.55}
          x1={x}
          y1={y}
          x2={x + 18}
          y2={y + (i % 2 ? 10 : -8)}
        />
      ))}
      <rect className="fill" x={168} y={148} width={10} height={10} />

      {/* statement — one named line */}
      <rect className="r" x={350} y={48} width={260} height={220} />
      <text className="k on" x={366} y={72}>
        02  PROBLEM STATEMENT
      </text>
      <text className="k" x={366} y={128}>
        WHAT
      </text>
      <line className="a" x1={366} y1={140} x2={560} y2={140} />
      <text className="k" x={366} y={176}>
        NOT
      </text>
      <line className="d" x1={366} y1={188} x2={520} y2={188} />
      <text className="k" x={366} y={224}>
        BETTER
      </text>
      <line className="l" x1={366} y1={236} x2={540} y2={236} />

      {/* path — first move */}
      <rect className="r" x={660} y={48} width={260} height={220} />
      <text className="k on" x={676} y={72}>
        03  PATH AND FIRST MOVE
      </text>
      <line className="l" x1={692} y1={160} x2={880} y2={160} />
      <rect className="fill" x={684} y={152} width={16} height={16} />
      <text className="k" x={692} y={140}>
        FIRST MOVE
      </text>
      {[760, 820, 880].map((x) => (
        <circle key={x} className="hollow" cx={x} cy={160} r={5} />
      ))}
      <text className="k" x={676} y={220}>
        CONSEQUENCES NAMED
      </text>
    </Frame>
  )
}

/* ---------------- method · close ---------------- */
export function DrawClose() {
  return (
    <svg className="idraw" viewBox="0 0 640 160" role="img" aria-label="Judgement, then structure, then action">
      <line className="a" x1={40} y1={80} x2={600} y2={80} />
      {[
        [120, "JUDGEMENT", true],
        [320, "STRUCTURE", false],
        [520, "ACTION", false],
      ].map(([x, label, first]) => (
        <g key={label as string}>
          {first ? (
            <rect className="fill" x={(x as number) - 8} y={72} width={16} height={16} />
          ) : (
            <circle className="hollow" cx={x as number} cy={80} r={7} />
          )}
          <text className="k on" x={x as number} y={120} textAnchor="middle">
            {label as string}
          </text>
        </g>
      ))}
    </svg>
  )
}

/* ---------------- audience · hero ----------------
   Three sightlines on one pressure. Not a roundtable. */
export function DrawPressureHero() {
  const seats: [number, number, string][] = [
    [80, 70, "OPERATORS"],
    [80, 168, "TECHNOLOGY"],
    [80, 266, "GROWING TEAMS"],
  ]
  return (
    <Frame label="Three seats looking at one pressure" wide>
      {seats.map(([x, y, label]) => (
        <g key={label}>
          <circle className="hollow" cx={x} cy={y} r={7} />
          <text className="k" x={x + 16} y={y + 4}>
            {label}
          </text>
          <line className="d" x1={x + 8} y1={y} x2={568} y2={168} />
        </g>
      ))}
      <rect className="fill" x={560} y={160} width={16} height={16} />
      <text className="k on" x={588} y={172}>
        THE PRESSURE
      </text>
      <text className="k" x={588} y={188}>
        SOMETHING MUST IMPROVE
      </text>
      <text className="k" x={588} y={204}>
        THE NEXT MOVE IS UNCLEAR
      </text>
      <line className="r" x1={40} y1={312} x2={936} y2={312} />
    </Frame>
  )
}

/* ---------------- audience · three seats as drawings ---------------- */
export function DrawSeats() {
  return (
    <Frame label="Operators, technology leaders, growing teams" wide>
      {/* operators — a chain with a break */}
      <text className="k on" x={40} y={36}>
        OPERATORS
      </text>
      {[80, 160, 240].map((x, i) => (
        <g key={x}>
          <rect className="hollow" x={x} y={120} width={44} height={28} />
          {i < 2 && <line className="l" x1={x + 44} y1={134} x2={x + 80} y2={134} />}
        </g>
      ))}
      <line className="d" x1={284} y1={134} x2={340} y2={134} />
      <line className="l" x1={318} y1={124} x2={330} y2={144} />
      <text className="k" x={40} y={200}>
        HANDOFFS BREAK
      </text>
      <text className="k" x={40} y={216}>
        UNOFFICIAL PATHS CARRY THE LOAD
      </text>

      <line className="r" x1={400} y1={48} x2={400} y2={280} />

      {/* tech — many stacks, one question becoming a problem */}
      <text className="k on" x={440} y={36}>
        TECHNOLOGY LEADERS
      </text>
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} className="r" x={440 + i * 22} y={88} width={18} height={36 + (i % 3) * 18} />
      ))}
      <line className="a" x1={560} y1={168} x2={640} y2={168} />
      <rect className="fill" x={640} y={160} width={16} height={16} />
      <text className="k" x={440} y={216}>
        MANY STACKS
      </text>
      <text className="k on" x={440} y={232}>
        ONE PROBLEM WORTH SOLVING
      </text>

      <line className="r" x1={720} y1={48} x2={720} y2={280} />

      {/* growing — informal path freezing into a box */}
      <text className="k on" x={760} y={36}>
        GROWING TEAMS
      </text>
      <path className="d" d="M780 150 C 820 110, 860 190, 900 150" />
      <rect className="r" x={868} y={128} width={64} height={44} strokeDasharray="3 5" />
      <text className="k" x={760} y={216}>
        INFORMAL WAYS
      </text>
      <text className="k on" x={760} y={232}>
        RISK FREEZING THE WRONG HABIT
      </text>
    </Frame>
  )
}

/* ---------------- audience · request → landscape → join ---------------- */
export function DrawPressureFlow() {
  return (
    <Frame label="A tool is asked for; the join is the problem" wide>
      <text className="k" x={40} y={36}>
        01  REQUEST
      </text>
      <rect className="hollow" x={40} y={80} width={160} height={120} />
      <text className="k" x={56} y={140}>
        A PLATFORM
      </text>
      <text className="k" x={56} y={156}>
        OR AN AI
      </text>
      <text className="k" x={56} y={172}>
        PROGRAMME
      </text>

      <line className="d" x1={200} y1={140} x2={280} y2={140} />

      <text className="k" x={300} y={36}>
        02  LANDSCAPE
      </text>
      <rect className="r" x={300} y={72} width={140} height={80} />
      <rect className="r" x={360} y={120} width={140} height={80} />
      <rect className="r" x={320} y={168} width={140} height={64} />
      <text className="k" x={312} y={250}>
        SYSTEMS OVERLAP
      </text>
      <text className="k" x={312} y={266}>
        NONE HOLDS THE JOURNEY
      </text>

      <line className="d" x1={500} y1={160} x2={600} y2={160} />

      <text className="k on" x={640} y={36}>
        03  THE JOIN
      </text>
      <line className="l" x1={640} y1={100} x2={760} y2={100} />
      <line className="l" x1={800} y1={220} x2={920} y2={220} />
      <line className="d" x1={760} y1={100} x2={800} y2={220} />
      <rect className="fill" x={772} y={152} width={16} height={16} />
      <text className="k on" x={800} y={164}>
        NOBODY OWNS THIS
      </text>
    </Frame>
  )
}

/* ---------------- audience · situations as a constellation ---------------- */
export function DrawConstellation({
  items,
}: {
  items: { slug: string; name: string; hint: string }[]
}) {
  const places: [number, number][] = [
    [180, 80],
    [520, 70],
    [780, 120],
    [240, 230],
    [620, 240],
  ]
  return (
    <svg className="idraw is-wide idraw-map" viewBox="0 0 960 320" role="img" aria-label="Where we typically sit">
      <circle className="hollow" cx={460} cy={160} r={18} />
      <rect className="fill" x={452} y={152} width={16} height={16} />
      <text className="k on" x={460} y={44} textAnchor="middle">
        CONSTRAINT
      </text>

      {items.map((item, i) => {
        const [x, y] = places[i] ?? [460, 160]
        return (
          <g key={item.slug}>
            <line className="d" x1={460} y1={160} x2={x} y2={y} />
            <circle className="hollow" cx={x} cy={y} r={6} />
            <a href={`/solutions/${item.slug}`}>
              <text className="k on" x={x} y={y - 16} textAnchor="middle">
                {item.name.toUpperCase()}
              </text>
            </a>
            <text className="k" x={x} y={y + 24} textAnchor="middle">
              {item.hint.toUpperCase()}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

export function Voice({
  kicker,
  quote,
  attrib,
}: {
  kicker: string
  quote: string
  attrib: string
}) {
  return (
    <Reveal className="idraw-voice" as="figure">
      <span className="idraw-voice-rule" aria-hidden />
      <span className="insight-mini">{kicker}</span>
      <blockquote>{quote}</blockquote>
      <cite>{attrib}</cite>
    </Reveal>
  )
}

export function DrawWatch() {
  return (
    <Frame label="A watched constraint catching a change in the operating field" wide>
      <text className="k" x={28} y={36}>
        THE DECISION
      </text>
      <rect className="hollow" x={28} y={54} width={220} height={88} />
      <text className="k on" x={44} y={92}>
        SUPPORT STAYS
      </text>
      <text className="k" x={44} y={114}>
        IN-HOUSE
      </text>

      <text className="k" x={28} y={176}>
        CONSTRAINT
      </text>
      <line className="a" x1={28} y1={196} x2={248} y2={196} />
      <rect className="fill" x={248} y={188} width={16} height={16} />

      <ellipse className="d" cx={560} cy={170} rx={168} ry={86} />
      <ellipse className="d" cx={560} cy={170} rx={118} ry={54} />
      <circle className="fill" cx={560} cy={170} r={10} />
      <text className="k on" x={620} y={96}>
        WATCHED FIELD
      </text>
      <text className="k" x={620} y={248}>
        #OPS
      </text>
      <line className="a" x1={264} y1={196} x2={470} y2={170} />
    </Frame>
  )
}

export function DrawFinding() {
  return (
    <Frame label="A cited finding raised from a watched channel">
      <text className="k" x={28} y={36}>
        FINDING
      </text>
      <rect className="hollow" x={28} y={54} width={584} height={72} />
      <rect className="fill" x={28} y={54} width={8} height={72} />
      <text className="k on" x={52} y={86}>
        POTENTIALLY OUTDATED
      </text>
      <text className="k" x={52} y={108}>
        KEEP THE PAYROLL VENDOR
      </text>
      <text className="k" x={28} y={168}>
        WHAT CHANGED
      </text>
      <rect className="hollow" x={28} y={184} width={280} height={88} />
      <text className="k" x={48} y={224}>
        PRICE GAP 40% → 12%
      </text>
      <text className="k" x={48} y={246}>
        FINANCE · COMPARISON
      </text>
      <text className="k" x={340} y={168}>
        STILL HUMAN
      </text>
      <rect className="hollow" x={340} y={184} width={272} height={88} />
      <rect className="fill" x={360} y={214} width={12} height={12} />
      <text className="k on" x={384} y={226}>
        REVIEW
      </text>
    </Frame>
  )
}

export function DrawScope() {
  return (
    <Frame label="Channel scope, narrow by default" wide>
      <text className="k" x={28} y={36}>
        GRANTED
      </text>
      <rect className="hollow" x={28} y={58} width={200} height={64} />
      <rect className="fill" x={28} y={58} width={8} height={64} />
      <text className="k on" x={48} y={96}>
        #OPS
      </text>
      <rect className="hollow" x={244} y={58} width={180} height={64} />
      <text className="k" x={264} y={96}>
        #HIRING-UPDATES
      </text>
      <rect className="d" x={440} y={58} width={200} height={64} />
      <text className="k" x={460} y={96}>
        NOT GRANTED
      </text>
      <line className="a" x1={28} y1={168} x2={640} y2={168} />
      <text className="k" x={28} y={208}>
        THE FINDING ALWAYS CITES THE CHANNEL IT CAME FROM
      </text>
      <rect className="fill" x={28} y={228} width={16} height={16} />
      <text className="k" x={56} y={242}>
        SOURCE · NOT AN OPAQUE CLAIM
      </text>
    </Frame>
  )
}

export function StageNotes({
  stages,
}: {
  stages: { n: string; title: string; body: string }[]
}) {
  return (
    <ol className="idraw-notes">
      {stages.map((s) => (
        <Reveal as="li" key={s.n}>
          <b>{s.n}</b>
          <div>
            <strong>{s.title}</strong>
            <p>{s.body}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  )
}
