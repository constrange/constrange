import type { ReactNode } from "react"

type ArtProps = { className?: string }

const ink = "#121212"
const muted = "#6d6a63"
const line = "#e4e2db"
const purple = "#271675"
const purpleSoft = "rgba(39, 22, 117, 0.08)"
const lime = "#c8e85a"
const surface = "#ffffff"
const canvas = "#f7f6f2"

function Frame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`uc-art ${className}`} aria-hidden="true">
      {children}
    </div>
  )
}

function Panel({ children, x = 0, y = 0, w = 560, h = 360 }: { children: ReactNode; x?: number; y?: number; w?: number; h?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height={h} rx="20" fill={surface} stroke={line} />
      {children}
    </g>
  )
}

export function ArtMethodHero({ className }: ArtProps) {
  const stages = ["Understand", "Define", "Explore", "Structure", "Move"]
  return (
    <Frame className={className}>
      <svg viewBox="0 0 600 380" fill="none">
        <rect width="600" height="380" rx="24" fill={canvas} />
        <Panel x="20" y="20" w="560" h="340">
          <text x="28" y="42" fill={muted} fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="1.6">
            METHOD · FIVE STAGES
          </text>
          <text x="28" y="78" fill={ink} fontFamily="Georgia, serif" fontSize="22">
            From situation to first move
          </text>
          {stages.map((label, i) => {
            const x = 28 + i * 104
            const active = i === 1
            return (
              <g key={label}>
                <rect x={x} y="104" width="92" height="88" rx="14" fill={active ? purpleSoft : surface} stroke={active ? purple : line} />
                <circle cx={x + 18} cy="126" r="10" fill={active ? purple : purpleSoft} />
                <text x={x + 18} y="130" textAnchor="middle" fill={active ? "#fff" : purple} fontSize="10" fontWeight="600">
                  {i + 1}
                </text>
                <text x={x + 14} y="168" fill={ink} fontFamily="Inter, system-ui, sans-serif" fontSize="12" fontWeight="600">
                  {label}
                </text>
                {i < stages.length - 1 && (
                  <path d={`M${x + 96} 148 H${x + 104}`} stroke={line} strokeWidth="2" />
                )}
              </g>
            )
          })}
          <rect x="28" y="220" width="504" height="96" rx="16" fill={canvas} stroke={line} />
          <text x="48" y="252" fill={muted} fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="1.2">
            CURRENT READING
          </text>
          <text x="48" y="280" fill={ink} fontFamily="Inter, system-ui, sans-serif" fontSize="15">
            Constraint named at the join between operations and finance.
          </text>
          <rect x="48" y="292" width="128" height="8" rx="4" fill={line} />
          <rect x="48" y="292" width="84" height="8" rx="4" fill={purple} />
        </Panel>
      </svg>
    </Frame>
  )
}

export function ArtMethodStages({ className }: ArtProps) {
  const rows = [
    "Map the unofficial path",
    "Name the constraint",
    "Hold two credible options",
    "Design the join",
    "Define the first move",
  ]
  return (
    <Frame className={className}>
      <svg viewBox="0 0 600 380" fill="none">
        <rect width="600" height="380" rx="24" fill={canvas} />
        <Panel x="20" y="20" w="560" h="340">
          <text x="28" y="42" fill={muted} fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="1.6">
            STAGE CHECKLIST
          </text>
          {rows.map((label, i) => {
            const y = 72 + i * 52
            const done = i <= 2
            return (
              <g key={label}>
                <rect x="28" y={y} width="504" height="40" rx="12" fill={done ? purpleSoft : surface} stroke={done ? "rgba(39,22,117,0.18)" : line} />
                <circle cx="52" cy={y + 20} r="10" fill={done ? purple : surface} stroke={done ? purple : line} strokeWidth="1.5" />
                {done && (
                  <path d={`M47 ${y + 20} L50 ${y + 23} L57 ${y + 16}`} stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
                )}
                <text x="72" y={y + 25} fill={ink} fontFamily="Inter, system-ui, sans-serif" fontSize="13">
                  {label}
                </text>
              </g>
            )
          })}
        </Panel>
      </svg>
    </Frame>
  )
}

export function ArtMethodReading({ className }: ArtProps) {
  const nodes = [
    [150, 110, "Work"],
    [250, 110, "Systems"],
    [350, 110, "People"],
    [150, 210, "Time"],
    [350, 210, "Risk"],
  ]
  return (
    <Frame className={className}>
      <svg viewBox="0 0 600 380" fill="none">
        <rect width="600" height="380" rx="24" fill={canvas} />
        <Panel x="20" y="20" w="560" h="340">
          <text x="28" y="42" fill={muted} fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="1.6">
            CONTEXT MAP
          </text>
          <circle cx="250" cy="170" r="54" fill={purpleSoft} stroke={purple} strokeWidth="1.5" />
          <text x="250" y="166" textAnchor="middle" fill={purple} fontFamily="Georgia, serif" fontSize="14">
            Reading
          </text>
          <text x="250" y="186" textAnchor="middle" fill={muted} fontFamily="Inter, system-ui, sans-serif" fontSize="11">
            held together
          </text>
          {nodes.map(([x, y, label]) => (
            <g key={label}>
              <line x1="250" y1="170" x2={x} y2={y} stroke={line} strokeWidth="1.5" />
              <rect x={x - 44} y={y - 22} width="88" height="44" rx="12" fill={surface} stroke={line} />
              <text x={x} y={y + 5} textAnchor="middle" fill={ink} fontFamily="Inter, system-ui, sans-serif" fontSize="12">
                {label}
              </text>
            </g>
          ))}
          <rect x="410" y="88" width="122" height="184" rx="16" fill={canvas} stroke={line} />
          <text x="426" y="116" fill={muted} fontFamily="ui-monospace, monospace" fontSize="9" letterSpacing="1.2">
            OUTPUT
          </text>
          <text x="426" y="142" fill={ink} fontFamily="Georgia, serif" fontSize="14">
            Constraint
          </text>
          <text x="426" y="164" fill={muted} fontFamily="Inter, system-ui, sans-serif" fontSize="11">
            The handoff
          </text>
          <rect x="426" y="180" width="90" height="6" rx="3" fill={line} />
          <rect x="426" y="180" width="58" height="6" rx="3" fill={purple} />
          <text x="426" y="214" fill={purple} fontFamily="Inter, system-ui, sans-serif" fontSize="10">
            Non-goal written
          </text>
        </Panel>
      </svg>
    </Frame>
  )
}

export function ArtMethodArtefacts({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <svg viewBox="0 0 600 380" fill="none">
        <rect width="600" height="380" rx="24" fill={canvas} />
        <rect x="36" y="48" width="220" height="284" rx="18" fill={surface} stroke={line} />
        <rect x="52" y="68" width="72" height="20" rx="10" fill={purpleSoft} />
        <text x="64" y="82" fill={purple} fontFamily="ui-monospace, monospace" fontSize="9">
          ARTEFACT
        </text>
        <text x="52" y="118" fill={ink} fontFamily="Georgia, serif" fontSize="20">
          Problem statement
        </text>
        <text x="52" y="144" fill={muted} fontFamily="Inter, system-ui, sans-serif" fontSize="12">
          Named constraint with owners.
        </text>
        <line x1="52" y1="162" x2="240" y2="162" stroke={line} />
        <text x="52" y="188" fill={ink} fontFamily="Inter, system-ui, sans-serif" fontSize="13" fontWeight="600">
          Sequence
        </text>
        <text x="52" y="212" fill={muted} fontFamily="Inter, system-ui, sans-serif" fontSize="11">
          01 · Stabilise the join
        </text>
        <text x="52" y="232" fill={muted} fontFamily="Inter, system-ui, sans-serif" fontSize="11">
          02 · Pilot with one team
        </text>
        <rect x="280" y="48" width="284" height="132" rx="18" fill={surface} stroke={line} />
        <rect x="280" y="200" width="284" height="132" rx="18" fill={surface} stroke={purple} strokeWidth="1.5" />
        <text x="300" y="80" fill={muted} fontFamily="ui-monospace, monospace" fontSize="9">
          OPTION A
        </text>
        <text x="300" y="232" fill={purple} fontFamily="ui-monospace, monospace" fontSize="9">
          RECOMMENDED
        </text>
        <text x="300" y="108" fill={ink} fontFamily="Inter, system-ui, sans-serif" fontSize="14">
          Adapt existing stack
        </text>
        <text x="300" y="260" fill={ink} fontFamily="Inter, system-ui, sans-serif" fontSize="14" fontWeight="600">
          Targeted replacement
        </text>
        <text x="300" y="284" fill={muted} fontFamily="Inter, system-ui, sans-serif" fontSize="11">
          Consequences spelled out before sign-off.
        </text>
      </svg>
    </Frame>
  )
}

export function ArtCustomerHero({ className }: ArtProps) {
  const items = [
    [56, 96, "Operations"],
    [196, 76, "Technology"],
    [336, 96, "Service"],
    [456, 116, "Regulated"],
    [136, 196, "Growth"],
    [296, 216, "Finance"],
  ]
  return (
    <Frame className={className}>
      <svg viewBox="0 0 600 380" fill="none">
        <rect width="600" height="380" rx="24" fill={canvas} />
        <Panel x="20" y="20" w="560" h="340">
          <text x="28" y="42" fill={muted} fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="1.6">
            LANDSCAPES WE RECOGNISE
          </text>
          {items.map(([x, y, label]) => (
            <g key={label}>
              <rect x={x} y={y} width="108" height="52" rx="14" fill={surface} stroke={line} />
              <circle cx={x + 18} cy={y + 26} r="5" fill={lime} />
              <text x={x + 30} y={y + 30} fill={ink} fontFamily="Inter, system-ui, sans-serif" fontSize="12" fontWeight="500">
                {label}
              </text>
            </g>
          ))}
          <path
            d="M164 122 L196 102 M304 122 L336 122 M444 142 L456 142 M244 222 L296 242"
            stroke={purple}
            strokeWidth="1.5"
            strokeOpacity="0.35"
          />
          <rect x="28" y="280" width="504" height="48" rx="14" fill={purpleSoft} />
          <text x="44" y="310" fill={purple} fontFamily="Inter, system-ui, sans-serif" fontSize="13">
            Five landscapes · one method · constraint named first
          </text>
        </Panel>
      </svg>
    </Frame>
  )
}

export function ArtCustomerOps({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <svg viewBox="0 0 600 380" fill="none">
        <rect width="600" height="380" rx="24" fill={canvas} />
        <Panel x="20" y="20" w="560" h="340">
          <text x="28" y="42" fill={muted} fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="1.6">
            HOW WORK ACTUALLY MOVES
          </text>
          <text x="28" y="78" fill={muted} fontFamily="Inter, system-ui, sans-serif" fontSize="11">
            Official path
          </text>
          <path d="M48 96 H200 V136 H352 V176 H512" stroke={line} strokeWidth="2" fill="none" strokeDasharray="6 5" />
          <text x="28" y="214" fill={purple} fontFamily="Inter, system-ui, sans-serif" fontSize="11" fontWeight="600">
            Actual path
          </text>
          <path d="M48 234 C120 214 180 274 260 244 S380 204 512 264" stroke={purple} strokeWidth="2.2" fill="none" />
          <circle cx="260" cy="244" r="30" fill={purpleSoft} stroke={purple} strokeWidth="1.5" />
          <text x="260" y="249" textAnchor="middle" fill={purple} fontSize="12" fontFamily="Inter, system-ui, sans-serif" fontWeight="600">
            Join
          </text>
          <rect x="28" y="288" width="240" height="40" rx="12" fill={surface} stroke={line} />
          <text x="44" y="314" fill={ink} fontFamily="Inter, system-ui, sans-serif" fontSize="12">
            Shadow system surfaced in the reading
          </text>
        </Panel>
      </svg>
    </Frame>
  )
}

export function ArtCustomerScale({ className }: ArtProps) {
  const seats = ["Operations", "Product", "Finance", "Service", "Technology"]
  return (
    <Frame className={className}>
      <svg viewBox="0 0 600 380" fill="none">
        <rect width="600" height="380" rx="24" fill={canvas} />
        <Panel x="20" y="20" w="560" h="340">
          <text x="28" y="42" fill={muted} fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="1.6">
            SAME PRESSURE · DIFFERENT SEAT
          </text>
          {seats.map((seat, i) => {
            const x = 40 + i * 100
            const h = 120 + i * 18
            return (
              <g key={seat}>
                <rect x={x} y={320 - h} width="72" height={h} rx="12" fill={i === 2 ? purpleSoft : surface} stroke={i === 2 ? purple : line} />
                <text x={x + 36} y={334} textAnchor="middle" fill={muted} fontFamily="Inter, system-ui, sans-serif" fontSize="9">
                  {seat}
                </text>
              </g>
            )
          })}
          <text x="280" y="300" textAnchor="middle" fill={ink} fontFamily="Georgia, serif" fontSize="18">
            One structural gap. Many voices.
          </text>
        </Panel>
      </svg>
    </Frame>
  )
}

export function ArtCustomerRegulated({ className }: ArtProps) {
  const items = ["Audit trail", "Data residency", "Role boundary", "Change control"]
  return (
    <Frame className={className}>
      <svg viewBox="0 0 600 380" fill="none">
        <rect width="600" height="380" rx="24" fill={canvas} />
        <Panel x="20" y="20" w="560" h="340">
          <text x="28" y="42" fill={muted} fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="1.6">
            REGULATED ENVIRONMENTS
          </text>
          <text x="28" y="78" fill={ink} fontFamily="Georgia, serif" fontSize="20">
            Caution as a design input
          </text>
          {items.map((label, i) => {
            const col = i % 2
            const row = Math.floor(i / 2)
            const x = 28 + col * 272
            const y = 108 + row * 88
            return (
              <g key={label}>
                <rect x={x} y={y} width="256" height="64" rx="14" fill={surface} stroke={line} />
                <circle cx={x + 24} cy={y + 32} r="10" fill={purpleSoft} stroke={purple} strokeWidth="1.2" />
                <path d={`M${x + 20} ${y + 32} L${x + 23} ${y + 35} L${x + 28} ${y + 28}`} stroke={purple} strokeWidth="1.6" strokeLinecap="round" />
                <text x={x + 44} y={y + 37} fill={ink} fontFamily="Inter, system-ui, sans-serif" fontSize="13">
                  {label}
                </text>
              </g>
            )
          })}
        </Panel>
      </svg>
    </Frame>
  )
}

export function ArtProductHero({ className }: ArtProps) {
  const caps = ["Strategy", "AI", "Systems", "Design", "Implement", "Transform", "Judgement"]
  return (
    <Frame className={className}>
      <svg viewBox="0 0 600 380" fill="none">
        <rect width="600" height="380" rx="24" fill={canvas} />
        <Panel x="20" y="20" w="560" h="340">
          <text x="28" y="42" fill={muted} fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="1.6">
            SEVEN CAPABILITIES · ONE READING
          </text>
          {caps.map((label, i) => {
            const x = 28 + i * 76
            const active = i === 0
            return (
              <g key={label}>
                <rect x={x} y="64" width="68" height="30" rx="15" fill={active ? purple : surface} stroke={active ? purple : line} />
                <text x={x + 34} y="83" textAnchor="middle" fill={active ? "#fff" : muted} fontFamily="Inter, system-ui, sans-serif" fontSize="9.5">
                  {label}
                </text>
              </g>
            )
          })}
          <rect x="28" y="112" width="504" height="200" rx="18" fill={canvas} stroke={line} />
          <text x="48" y="148" fill={ink} fontFamily="Georgia, serif" fontSize="22">
            Business & technology strategy
          </text>
          <text x="48" y="176" fill={muted} fontFamily="Inter, system-ui, sans-serif" fontSize="13">
            Where priorities and technology decisions connect — before a stack is chosen.
          </text>
          {["Priorities", "Constraints", "Trade-offs"].map((chip, i) => (
            <g key={chip}>
              <rect x={48 + i * 112} y="200" width="96" height="28" rx="14" fill={purpleSoft} />
              <text x={48 + i * 112 + 48} y="218" textAnchor="middle" fill={purple} fontFamily="Inter, system-ui, sans-serif" fontSize="10">
                {chip}
              </text>
            </g>
          ))}
        </Panel>
      </svg>
    </Frame>
  )
}

export function ArtProductOptions({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <svg viewBox="0 0 600 380" fill="none">
        <rect width="600" height="380" rx="24" fill={canvas} />
        <Panel x="20" y="20" w="560" h="340">
          <text x="28" y="42" fill={muted} fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="1.6">
            OPTIONS COMPARED
          </text>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <circle key={i} cx={56 + i * 84} cy="88" r="16" fill={i === 2 ? purple : surface} stroke={i === 2 ? purple : line} strokeWidth="1.5" />
          ))}
          <rect x="28" y="124" width="504" height="188" rx="18" fill={surface} stroke={purple} strokeWidth="1.5" />
          <rect x="48" y="144" width="96" height="22" rx="11" fill={purpleSoft} />
          <text x="60" y="160" fill={purple} fontFamily="ui-monospace, monospace" fontSize="9">
            RECOMMENDED
          </text>
          <text x="48" y="196" fill={ink} fontFamily="Georgia, serif" fontSize="20">
            Adapt the join before replacing the stack
          </text>
          <text x="48" y="224" fill={muted} fontFamily="Inter, system-ui, sans-serif" fontSize="12">
            Constraint · 14-week delivery window · Owner · Operations lead
          </text>
          <rect x="48" y="248" width="420" height="8" rx="4" fill={line} />
          <rect x="48" y="248" width="280" height="8" rx="4" fill={purple} />
        </Panel>
      </svg>
    </Frame>
  )
}

export function ArtProductSystems({ className }: ArtProps) {
  const nodes = [
    [108, 108, "CRM"],
    [256, 88, "ERP"],
    [404, 118, "Inbox"],
    [168, 228, "Spreadsheet"],
    [332, 248, "Warehouse"],
  ]
  return (
    <Frame className={className}>
      <svg viewBox="0 0 600 380" fill="none">
        <rect width="600" height="380" rx="24" fill={canvas} />
        <Panel x="20" y="20" w="560" h="340">
          <text x="28" y="42" fill={muted} fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="1.6">
            SYSTEM LANDSCAPE
          </text>
          {nodes.map(([x, y, label]) => (
            <g key={label}>
              <rect x={x} y={y} width="88" height="52" rx="14" fill={surface} stroke={line} />
              <text x={x + 44} y={y + 30} textAnchor="middle" fill={ink} fontFamily="Inter, system-ui, sans-serif" fontSize="12">
                {label}
              </text>
            </g>
          ))}
          <path d="M196 134 L256 114 M344 134 L404 144 M216 228 L256 114" stroke={purple} strokeWidth="1.5" strokeOpacity="0.45" />
          <rect x="28" y="288" width="220" height="40" rx="12" fill={purpleSoft} />
          <text x="44" y="314" fill={purple} fontFamily="Inter, system-ui, sans-serif" fontSize="12" fontWeight="500">
            Unofficial path mapped
          </text>
        </Panel>
      </svg>
    </Frame>
  )
}

export function ArtProductAI({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <svg viewBox="0 0 600 380" fill="none">
        <rect width="600" height="380" rx="24" fill={canvas} />
        <Panel x="20" y="20" w="560" h="340">
          <text x="28" y="42" fill={muted} fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="1.6">
            NECESSITY TEST
          </text>
          <text x="28" y="68" fill={muted} fontFamily="Inter, system-ui, sans-serif" fontSize="11">
            13 candidates · 6 worth doing
          </text>
          <line x1="48" y1="280" x2="512" y2="280" stroke={line} strokeWidth="1.5" />
          <line x1="48" y1="96" x2="48" y2="280" stroke={line} strokeWidth="1.5" />
          {Array.from({ length: 13 }).map((_, i) => (
            <circle
              key={i}
              cx={72 + i * 34}
              cy={220 - (i % 5) * 20}
              r="7"
              fill={i < 6 ? purple : surface}
              stroke={i < 6 ? purple : line}
              strokeWidth="1.2"
            />
          ))}
          <line x1="48" y1="156" x2="512" y2="156" stroke={purple} strokeWidth="1.5" strokeDasharray="5 4" />
          <text x="520" y="160" fill={purple} fontFamily="ui-monospace, monospace" fontSize="9">
            FIT
          </text>
          <rect x="48" y="300" width="180" height="36" rx="12" fill={surface} stroke={line} />
          <text x="64" y="324" fill={ink} fontFamily="Inter, system-ui, sans-serif" fontSize="12">
            Only if automation fits
          </text>
        </Panel>
      </svg>
    </Frame>
  )
}
