import type { ReactNode } from "react"

type ArtProps = { className?: string }

function Frame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`uc-art ${className}`}>
      <div className="uc-art-chrome">
        <span /><span /><span />
      </div>
      <div className="uc-art-body">{children}</div>
    </div>
  )
}

export function ArtMethodHero({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <svg viewBox="0 0 560 340" fill="none" aria-hidden="true">
        <rect width="560" height="340" rx="16" fill="#121218" />
        <rect x="24" y="24" width="512" height="44" rx="8" fill="#1e1e28" stroke="#2e2e3a" />
        <text x="40" y="52" fill="#8b8798" fontFamily="ui-monospace, monospace" fontSize="11" letterSpacing="2">
          SITUATION READING · LIVE
        </text>
        <circle cx="500" cy="46" r="6" fill="#dbff71" />
        {["Understand", "Define", "Explore", "Structure", "Move"].map((label, i) => (
          <g key={label}>
            <rect x={24 + i * 102} y="88" width="94" height="72" rx="10" fill={i === 1 ? "#271675" : "#1a1a24"} stroke={i === 1 ? "#6757a5" : "#2a2a36"} />
            <text x={24 + i * 102 + 12} y="112" fill="#cbc4e7" fontFamily="ui-monospace, monospace" fontSize="10">
              0{i + 1}
            </text>
            <text x={24 + i * 102 + 12} y="136" fill="#f4f2ea" fontFamily="Georgia, serif" fontSize="13">
              {label}
            </text>
          </g>
        ))}
        <path d="M40 200h480" stroke="#2e2e3a" />
        <text x="40" y="232" fill="#f4f2ea" fontFamily="Georgia, serif" fontSize="18">
          The request arrived as a platform.
        </text>
        <text x="40" y="258" fill="#8b8798" fontFamily="Inter, sans-serif" fontSize="13">
          The reading named the join between operations and finance first.
        </text>
        <rect x="40" y="278" width="140" height="32" rx="6" fill="#271675" />
        <text x="56" y="298" fill="#fff" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600">
          First move identified
        </text>
      </svg>
    </Frame>
  )
}

export function ArtMethodStages({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <svg viewBox="0 0 560 340" fill="none" aria-hidden="true">
        <rect width="560" height="340" rx="16" fill="#0f1418" />
        <defs>
          <linearGradient id="methodGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#271675" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#121218" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <polygon points="280,40 480,300 80,300" fill="url(#methodGlow)" opacity="0.55" />
        {[0, 1, 2, 3, 4].map((i) => {
          const y = 72 + i * 44
          return (
            <g key={i}>
              <circle cx="72" cy={y} r="14" fill={i <= 2 ? "#dbff71" : "#2a2a36"} />
              <text x="72" y={y + 4} textAnchor="middle" fill="#121218" fontSize="11" fontWeight="700">
                {i + 1}
              </text>
              <rect x="104" y={y - 16} width="360" height="32" rx="6" fill="#1a1f24" stroke="#2a3038" />
              <text x="120" y={y + 4} fill="#e8e6df" fontFamily="Inter, sans-serif" fontSize="13">
                {["Map the unofficial path", "Name the constraint", "Hold two credible options", "Design the join", "Define the first move"][i]}
              </text>
            </g>
          )
        })}
      </svg>
    </Frame>
  )
}

export function ArtMethodReading({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <svg viewBox="0 0 560 340" fill="none" aria-hidden="true">
        <rect width="560" height="340" rx="16" fill="#121218" />
        <circle cx="180" cy="170" r="88" stroke="#6757a5" strokeWidth="1.5" fill="none" opacity="0.5" />
        <circle cx="180" cy="170" r="58" stroke="#271675" strokeWidth="2" fill="rgba(39,22,117,0.2)" />
        {[
          [180, 82, "Work"],
          [268, 170, "Systems"],
          [180, 258, "People"],
          [92, 170, "Time"],
          [220, 120, "Risk"],
        ].map(([x, y, label]) => (
          <g key={label}>
            <circle cx={x} cy={y} r="22" fill="#1e1e28" stroke="#dbff71" strokeWidth="1.5" />
            <text x={x} y={y + 4} textAnchor="middle" fill="#f4f2ea" fontSize="10" fontFamily="Inter, sans-serif">
              {label}
            </text>
          </g>
        ))}
        <rect x="300" y="56" width="220" height="228" rx="12" fill="#1a1a24" stroke="#2e2e3a" />
        <text x="320" y="88" fill="#cbc4e7" fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="1.5">
          READING OUTPUT
        </text>
        <text x="320" y="120" fill="#f4f2ea" fontFamily="Georgia, serif" fontSize="16">
          Constraint: the handoff
        </text>
        <text x="320" y="148" fill="#8b8798" fontFamily="Inter, sans-serif" fontSize="12">
          Three systems. One owner missing.
        </text>
        <rect x="320" y="168" width="180" height="8" rx="4" fill="#2e2e3a" />
        <rect x="320" y="168" width="108" height="8" rx="4" fill="#271675" />
        <text x="320" y="210" fill="#dbff71" fontFamily="Inter, sans-serif" fontSize="11">
          Non-goal: new platform this quarter
        </text>
      </svg>
    </Frame>
  )
}

export function ArtMethodArtefacts({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <svg viewBox="0 0 560 340" fill="none" aria-hidden="true">
        <rect width="560" height="340" rx="16" fill="#10141a" />
        <rect x="32" y="40" width="220" height="260" rx="10" fill="#f7f6f1" stroke="#d8d6ce" />
        <text x="52" y="72" fill="#271675" fontFamily="ui-monospace, monospace" fontSize="10">ARTEFACT · v1</text>
        <text x="52" y="104" fill="#171717" fontFamily="Georgia, serif" fontSize="18">Problem statement</text>
        <text x="52" y="132" fill="#4c4b46" fontFamily="Inter, sans-serif" fontSize="12">Named constraint with owners.</text>
        <line x1="52" y1="150" x2="232" y2="150" stroke="#e0ded6" />
        <text x="52" y="178" fill="#171717" fontFamily="Georgia, serif" fontSize="14">Sequence</text>
        <text x="52" y="202" fill="#4c4b46" fontFamily="Inter, sans-serif" fontSize="11">01 · Stabilise the join</text>
        <text x="52" y="222" fill="#4c4b46" fontFamily="Inter, sans-serif" fontSize="11">02 · Pilot with one team</text>
        <rect x="280" y="40" width="248" height="120" rx="10" fill="#1a1f24" stroke="#2a3038" />
        <rect x="280" y="180" width="248" height="120" rx="10" fill="#1a1f24" stroke="#2a3038" />
        <text x="300" y="72" fill="#8b8798" fontSize="11" fontFamily="ui-monospace, monospace">OPTION A</text>
        <text x="300" y="212" fill="#8b8798" fontSize="11" fontFamily="ui-monospace, monospace">OPTION B</text>
        <text x="300" y="100" fill="#f4f2ea" fontFamily="Inter, sans-serif" fontSize="13">Adapt existing stack</text>
        <text x="300" y="240" fill="#f4f2ea" fontFamily="Inter, sans-serif" fontSize="13">Targeted replacement</text>
      </svg>
    </Frame>
  )
}

export function ArtCustomerHero({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <svg viewBox="0 0 560 340" fill="none" aria-hidden="true">
        <rect width="560" height="340" rx="16" fill="#121218" />
        <rect x="28" y="28" width="504" height="36" rx="8" fill="#1e1e28" />
        <text x="44" y="52" fill="#8b8798" fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="2">
          LANDSCAPE MAP
        </text>
        {[
          [60, 110, "Operations"],
          [200, 90, "Technology"],
          [340, 110, "Service"],
          [460, 130, "Regulated"],
          [140, 220, "Growth"],
          [300, 240, "Finance"],
        ].map(([x, y, label]) => (
          <g key={label}>
            <rect x={x} y={y} width="96" height="56" rx="8" fill="#271675" fillOpacity="0.35" stroke="#6757a5" />
            <text x={x + 12} y={y + 32} fill="#f4f2ea" fontFamily="Inter, sans-serif" fontSize="12">{label}</text>
          </g>
        ))}
        <path d="M156 138 L200 118 M296 138 L340 138 M436 158 L460 158" stroke="#dbff71" strokeWidth="1.5" opacity="0.7" />
        <rect x="28" y="280" width="504" height="36" rx="8" fill="#1e1e28" />
        <text x="44" y="304" fill="#dbff71" fontFamily="Inter, sans-serif" fontSize="12">
          5 landscapes · 1 method · constraint named first
        </text>
      </svg>
    </Frame>
  )
}

export function ArtCustomerOps({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <svg viewBox="0 0 560 340" fill="none" aria-hidden="true">
        <rect width="560" height="340" rx="16" fill="#0d1117" />
        <text x="32" y="48" fill="#8b8798" fontFamily="ui-monospace, monospace" fontSize="10">OFFICIAL PATH</text>
        <path d="M48 80 H220 V120 H392 V160 H512" stroke="#4c4b46" strokeWidth="2" fill="none" />
        <text x="32" y="200" fill="#dbff71" fontFamily="ui-monospace, monospace" fontSize="10">ACTUAL PATH</text>
        <path d="M48 220 C120 200 180 260 260 230 S380 190 512 250" stroke="#271675" strokeWidth="2.5" fill="none" />
        <circle cx="260" cy="230" r="28" fill="#271675" fillOpacity="0.4" stroke="#dbff71" />
        <text x="260" y="235" textAnchor="middle" fill="#f4f2ea" fontSize="11" fontFamily="Inter, sans-serif">Join</text>
        <rect x="32" y="280" width="200" height="36" rx="6" fill="#1a1f24" stroke="#2a3038" />
        <text x="48" y="304" fill="#f4f2ea" fontSize="12" fontFamily="Inter, sans-serif">Shadow system detected</text>
      </svg>
    </Frame>
  )
}

export function ArtCustomerScale({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <svg viewBox="0 0 560 340" fill="none" aria-hidden="true">
        <rect width="560" height="340" rx="16" fill="#10141a" />
        <defs>
          <linearGradient id="custScale" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#271675" />
            <stop offset="100%" stopColor="#0d1117" />
          </linearGradient>
        </defs>
        <rect x="80" y="40" width="400" height="260" rx="12" fill="url(#custScale)" opacity="0.8" />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={120 + i * 64} y={80 + i * 12} width="48" height="180 - i * 24" rx="4" fill="#dbff71" fillOpacity={0.15 + i * 0.12} />
        ))}
        <text x="280" y="300" textAnchor="middle" fill="#f4f2ea" fontFamily="Georgia, serif" fontSize="16">
          Same pressure. Different seat.
        </text>
      </svg>
    </Frame>
  )
}

export function ArtCustomerRegulated({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <svg viewBox="0 0 560 340" fill="none" aria-hidden="true">
        <rect width="560" height="340" rx="16" fill="#121218" />
        <rect x="40" y="48" width="480" height="56" rx="8" fill="#1a1f24" stroke="#6757a5" />
        <text x="60" y="82" fill="#f4f2ea" fontFamily="Inter, sans-serif" fontSize="14">Caution as a design input</text>
        {["Audit trail", "Data residency", "Role boundary", "Change control"].map((label, i) => (
          <g key={label}>
            <rect x={40 + (i % 2) * 244} y={128 + Math.floor(i / 2) * 72} width="224" height="52" rx="8" fill="#1e1e28" stroke="#2e2e3a" />
            <circle cx="64" cy={154 + Math.floor(i / 2) * 72} r="6" fill="#dbff71" />
            <text x="80" y={158 + Math.floor(i / 2) * 72} fill="#cbc4e7" fontFamily="Inter, sans-serif" fontSize="13">{label}</text>
          </g>
        ))}
      </svg>
    </Frame>
  )
}

export function ArtProductHero({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <svg viewBox="0 0 560 340" fill="none" aria-hidden="true">
        <rect width="560" height="340" rx="16" fill="#121218" />
        <rect x="24" y="24" width="512" height="44" rx="8" fill="#1e1e28" stroke="#2e2e3a" />
        <text x="40" y="52" fill="#8b8798" fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="2">
          CAPABILITY EXPLORER
        </text>
        {["Strategy", "AI", "Systems", "Design", "Implement", "Transform", "Judgement"].map((label, i) => (
          <rect
            key={label}
            x={24 + i * 72}
            y="84"
            width="64"
            height="28"
            rx="14"
            fill={i === 0 ? "#271675" : "#1a1a24"}
            stroke={i === 0 ? "#6757a5" : "#2a2a36"}
          />
        ))}
        <rect x="24" y="128" width="512" height="188" rx="12" fill="#1a1a24" stroke="#2e2e3a" />
        <text x="44" y="164" fill="#f4f2ea" fontFamily="Georgia, serif" fontSize="20">Business & Technology Strategy</text>
        <text x="44" y="192" fill="#8b8798" fontFamily="Inter, sans-serif" fontSize="13">
          Where priorities and technology decisions connect — before a stack is chosen.
        </text>
        {["Priorities", "Constraints", "Trade-offs"].map((chip, i) => (
          <rect key={chip} x={44 + i * 108} y="216" width="96" height="28" rx="14" fill="#271675" fillOpacity="0.35" stroke="#6757a5" />
        ))}
      </svg>
    </Frame>
  )
}

export function ArtProductOptions({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <svg viewBox="0 0 560 340" fill="none" aria-hidden="true">
        <rect width="560" height="340" rx="16" fill="#0f1418" />
        <text x="32" y="44" fill="#8b8798" fontFamily="ui-monospace, monospace" fontSize="10">SIX PATHS · ONE RECOMMENDED</text>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <circle key={i} cx={80 + i * 72} cy="100" r="20" fill={i === 2 ? "#dbff71" : "#1e1e28"} stroke={i === 2 ? "#dbff71" : "#2e2e3a"} />
        ))}
        <rect x="32" y="140" width="496" height="160" rx="12" fill="#1a1f24" stroke="#271675" strokeWidth="2" />
        <text x="52" y="176" fill="#dbff71" fontFamily="ui-monospace, monospace" fontSize="10">RECOMMENDED</text>
        <text x="52" y="208" fill="#f4f2ea" fontFamily="Georgia, serif" fontSize="18">Adapt the join before replacing the stack</text>
        <text x="52" y="236" fill="#8b8798" fontFamily="Inter, sans-serif" fontSize="12">Constraint: 14-week delivery window · Owner: Operations lead</text>
      </svg>
    </Frame>
  )
}

export function ArtProductSystems({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <svg viewBox="0 0 560 340" fill="none" aria-hidden="true">
        <rect width="560" height="340" rx="16" fill="#121218" />
        {[
          [120, 100, "CRM"],
          [280, 80, "ERP"],
          [420, 120, "Inbox"],
          [200, 220, "Spreadsheet"],
          [360, 240, "Warehouse"],
        ].map(([x, y, label]) => (
          <g key={label}>
            <rect x={x} y={y} width="80" height="48" rx="8" fill="#1e1e28" stroke="#6757a5" />
            <text x={x + 40} y={y + 28} textAnchor="middle" fill="#f4f2ea" fontSize="11" fontFamily="Inter, sans-serif">{label}</text>
          </g>
        ))}
        <path d="M200 124 L280 104 M360 124 L420 144 M240 220 L280 128" stroke="#dbff71" strokeWidth="1.5" opacity="0.6" />
        <rect x="32" y="288" width="220" height="32" rx="6" fill="#271675" />
        <text x="48" y="308" fill="#fff" fontSize="12" fontFamily="Inter, sans-serif">Unofficial path mapped</text>
      </svg>
    </Frame>
  )
}

export function ArtProductAI({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <svg viewBox="0 0 560 340" fill="none" aria-hidden="true">
        <rect width="560" height="340" rx="16" fill="#10141a" />
        <text x="32" y="44" fill="#8b8798" fontFamily="ui-monospace, monospace" fontSize="10">FIT LINE · 13 CANDIDATES · 6 WORTH DOING</text>
        <line x1="48" y1="260" x2="512" y2="260" stroke="#2e2e3a" strokeWidth="2" />
        <line x1="48" y1="80" x2="48" y2="260" stroke="#2e2e3a" strokeWidth="2" />
        {Array.from({ length: 13 }).map((_, i) => (
          <circle key={i} cx={72 + i * 34} cy={200 - (i % 5) * 22} r="6" fill={i < 6 ? "#dbff71" : "#2a3038"} />
        ))}
        <line x1="48" y1="140" x2="512" y2="140" stroke="#271675" strokeWidth="2" strokeDasharray="6 4" />
        <text x="520" y="144" fill="#dbff71" fontSize="10" fontFamily="ui-monospace, monospace">FIT</text>
      </svg>
    </Frame>
  )
}
