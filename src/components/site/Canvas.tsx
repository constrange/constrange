import { useEffect, useState, type CSSProperties, type ReactNode } from "react"
import { Link } from "react-router-dom"
import { Reveal } from "@/components/site/Layout"
import { FigurePlate, figureTone, type FigureKind } from "@/components/site/Figures"

/* ============================================================
   Canvas — the shared layout language for the "What we do" family.

   A full-bleed mesh-gradient hero field with grain, a drawn figure
   that breaks the lower edge of that field, then quiet cream
   sections built from rules, dotted leaders and typeset numerals.
   ============================================================ */

type Action = { label: string; to: string }

/** Let the hero gradient run behind the sticky header until it sticks. */
function useCanvasHeader() {
  useEffect(() => {
    document.body.classList.add("cx-canvas")
    return () => document.body.classList.remove("cx-canvas")
  }, [])
}

export function CanvasPage({ children }: { children: ReactNode }) {
  useCanvasHeader()
  return <div className="cx">{children}</div>
}

export function CanvasHero({
  figure,
  crumbs,
  eyebrow,
  title,
  lede,
  primary = { label: "Start a conversation", to: "/contact" },
  secondary = { label: "How we work", to: "/how-we-work" },
  keys,
  align = "center",
}: {
  figure: FigureKind
  crumbs?: [string, string][]
  eyebrow: string
  title: string
  lede: string
  primary?: Action | null
  secondary?: Action | null
  keys?: string[]
  align?: "center" | "left"
}) {
  return (
    <header className={`cx-hero cx-field-${figureTone[figure]} cx-hero-${align}`}>
      <span className="cx-hero-grain" aria-hidden />
      <span className="cx-hero-grain-2" aria-hidden />
      <div className="cx-hero-inner">
        {crumbs && (
          <p className="cx-crumbs">
            {crumbs.map(([label, to], i) => (
              <span key={`${i}-${to}`}>
                {i > 0 && <i>/</i>}
                <Link to={to}>{label}</Link>
              </span>
            ))}
          </p>
        )}
        <span className="cx-eyebrow">{eyebrow}</span>
        <h1 className="cx-display">{title}</h1>
        <p className="cx-lede">{lede}</p>
        {(primary || secondary) && (
          <div className="cx-actions">
            {primary && (
              <Link className="btn" to={primary.to}>
                {primary.label}
              </Link>
            )}
            {secondary && (
              <Link className="btn btn-ghost" to={secondary.to}>
                {secondary.label}
              </Link>
            )}
          </div>
        )}
      </div>
      <div className="cx-hero-figure">
        <FigurePlate kind={figure} keys={keys} />
      </div>
    </header>
  )
}

const conceptChips = [
  { label: "Constraint", x: "8%", y: "22%" },
  { label: "The join", x: "78%", y: "18%" },
  { label: "Shadow system", x: "14%", y: "68%" },
  { label: "Non-goals", x: "72%", y: "62%" },
]

export function CanvasCinematicHero({
  figure,
  crumbs,
  eyebrow,
  title,
  lede,
  primary = { label: "Start a conversation", to: "/contact" },
  secondary = { label: "How we work", to: "/how-we-work" },
  keys,
}: {
  figure: FigureKind
  crumbs?: [string, string][]
  eyebrow: string
  title: string
  lede: string
  primary?: Action | null
  secondary?: Action | null
  keys?: string[]
}) {
  return (
    <header className={`cx-hero cx-hero-cinematic cx-field-${figureTone[figure]} cx-hero-center`}>
      <span className="cx-hero-grain" aria-hidden />
      <span className="cx-hero-grain-2" aria-hidden />
      <span className="cx-dot-grid" aria-hidden />
      <div className="cx-concept-chips" aria-hidden>
        {conceptChips.map((chip) => (
          <span
            key={chip.label}
            className="cx-concept-chip"
            style={{ "--chip-x": chip.x, "--chip-y": chip.y } as CSSProperties}
          >
            <i aria-hidden />
            {chip.label}
          </span>
        ))}
      </div>
      <div className="cx-hero-inner">
        {crumbs && (
          <p className="cx-crumbs">
            {crumbs.map(([label, to], i) => (
              <span key={`${i}-${to}`}>
                {i > 0 && <i>/</i>}
                <Link to={to}>{label}</Link>
              </span>
            ))}
          </p>
        )}
        <span className="cx-eyebrow">{eyebrow}</span>
        <h1 className="cx-display cx-display-sans">{title}</h1>
        <p className="cx-lede">{lede}</p>
        {(primary || secondary) && (
          <div className="cx-actions">
            {primary && (
              <Link className="btn" to={primary.to}>
                {primary.label}
              </Link>
            )}
            {secondary && (
              <Link className="btn btn-ghost" to={secondary.to}>
                {secondary.label}
              </Link>
            )}
          </div>
        )}
      </div>
      <div className="cx-hero-figure cx-hero-figure-cinematic">
        <FigurePlate kind={figure} keys={keys} size="full" />
      </div>
    </header>
  )
}

type ExplorerItem = {
  slug: string
  name: string
  short: string
  blurb: string
  price: string
}

export function CapabilityExplorer({ items }: { items: ExplorerItem[] }) {
  const [active, setActive] = useState(0)
  const current = items[active]
  const figure = current.slug as FigureKind

  return (
    <div className="cx-explorer">
      <div className="cx-tabs cx-tabs-scroll" role="tablist" aria-label="Capabilities">
        {items.map((item, i) => (
          <button
            key={item.slug}
            type="button"
            role="tab"
            className={i === active ? "on" : ""}
            aria-selected={i === active}
            onClick={() => setActive(i)}
          >
            {item.short}
          </button>
        ))}
      </div>
      <div className="cx-explorer-panel" role="tabpanel">
        <FigurePlate kind={figure} size="full" />
        <div className="cx-explorer-copy">
          <span className="cx-label">{current.price}</span>
          <h3>{current.name}</h3>
          <p>{current.blurb}</p>
          <Link className="arrow-link" to={`/products/${current.slug}`}>
            Explore capability <i>→</i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export function CxSection({
  id,
  label,
  title,
  lede,
  children,
  first = false,
}: {
  id?: string
  label?: string
  title?: string
  lede?: string
  children: ReactNode
  first?: boolean
}) {
  return (
    <section id={id} className={first ? "cx-section is-first" : "cx-section"}>
      <div className="cx-inner">
        {(label || title || lede) && (
          <Reveal className="cx-head">
            {label && <span className="cx-label">{label}</span>}
            {title && <h2 className="cx-h2">{title}</h2>}
            {lede && <p className="cx-section-lede">{lede}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}

/** Editorial two-column: a sticky mono label beside running copy. */
export function Aside({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="cx-aside">
      <p className="cx-label cx-aside-label">{label}</p>
      <div className="cx-aside-body">{children}</div>
    </div>
  )
}

/** Numbered rows with a dotted leader — a list that reads as a set. */
export function IndexRows({ items, columns = 2 }: { items: [string, string][]; columns?: 1 | 2 }) {
  return (
    <div className={`cx-rows cx-rows-${columns}`}>
      {items.map(([term, body], i) => (
        <Reveal className="cx-row" key={term} delay={(i % columns) * 70}>
          <span className="cx-row-num">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3>{term}</h3>
            <p>{body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

/** Definition rules: term set in serif, description beside it. */
export function Defs({ items }: { items: [string, string][] }) {
  return (
    <Reveal className="cx-defs" as="dl">
      {items.map(([term, body]) => (
        <div className="cx-def" key={term}>
          <dt>{term}</dt>
          <dd>{body}</dd>
        </div>
      ))}
    </Reveal>
  )
}

/** Ledger rules: label left, value right, dotted leader between. */
export function Ledger({ rows, dense = false }: { rows: [string, string][]; dense?: boolean }) {
  return (
    <Reveal className={dense ? "cx-ledger is-dense" : "cx-ledger"}>
      {rows.map(([label, value]) => (
        <div className="cx-ledger-row" key={label}>
          <b>{label}</b>
          <i aria-hidden />
          <span>{value}</span>
        </div>
      ))}
    </Reveal>
  )
}

/** A sequence on a rail. */
export function Rail({ steps }: { steps: [string, string][] }) {
  return (
    <ol className="cx-rail">
      {steps.map(([title, body], i) => (
        <Reveal as="li" key={title} delay={i * 60}>
          <span className="cx-rail-num">{String(i + 1).padStart(2, "0")}</span>
          <h3>{title}</h3>
          <p>{body}</p>
        </Reveal>
      ))}
    </ol>
  )
}

/** The artefact: a typeset working note on paper, not a terminal. */
export function Note({ label, body, meta }: { label: string; body: string; meta?: string }) {
  return (
    <Reveal className="cx-note">
      <div className="cx-note-head">
        <span className="cx-label">{label}</span>
        {meta && <em>{meta}</em>}
      </div>
      <pre>{body}</pre>
    </Reveal>
  )
}

export function QuietTable({
  caption,
  head,
  rows,
  mono,
}: {
  caption?: string
  head: string[]
  rows: string[][]
  mono?: number[]
}) {
  return (
    <Reveal className="cx-table-wrap">
      <table className="cx-table">
        {caption && <caption>{caption}</caption>}
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, c) => (
                <td key={c} data-label={head[c]} className={mono?.includes(c) ? "is-mono" : undefined}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  )
}

/** Short statements, each on its own rule. */
export function Marks({ items }: { items: string[] }) {
  return (
    <Reveal className="cx-marks" as="ul">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </Reveal>
  )
}

/** Adjacent work: link rows, where a figure would be too small to read. */
export function NextRows({
  items,
}: {
  items: { to: string; kicker: string; title: string; blurb: string }[]
}) {
  return (
    <div className="cx-next">
      {items.map((item, i) => (
        <Reveal key={item.to} delay={i * 60}>
          <Link className="cx-next-row" to={item.to}>
            <span className="cx-label">{item.kicker}</span>
            <h3>{item.title}</h3>
            <p>{item.blurb}</p>
            <span className="arrow-link">
              Explore <i>→</i>
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  )
}

/** A card that leads somewhere, with its own drawn figure. */
export function FigureCard({
  to,
  figure,
  kicker,
  title,
  blurb,
  size = "half",
  wide = false,
}: {
  to: string
  figure: FigureKind
  kicker: string
  title: string
  blurb: string
  size?: "half" | "thumb"
  wide?: boolean
}) {
  return (
    <Link className={wide ? "cx-card is-wide" : "cx-card"} to={to}>
      <FigurePlate kind={figure} size={size} />
      <div className="cx-card-body">
        <span className="cx-label">{kicker}</span>
        <h3>{title}</h3>
        <p>{blurb}</p>
        <span className="arrow-link">
          Explore <i>→</i>
        </span>
      </div>
    </Link>
  )
}

/** The bookend: the hero field, returned at the foot of the page. */
export function Turn({
  tone = "sand",
  kicker,
  title,
  body,
  primary,
  secondary,
}: {
  tone?: FigureKind
  kicker: string
  title: string
  body: string
  primary: Action
  secondary?: Action
}) {
  return (
    <section className={`cx-turn cx-field-${figureTone[tone]}`}>
      <span className="cx-hero-grain" aria-hidden />
      <span className="cx-hero-grain-2" aria-hidden />
      <div className="cx-inner">
        <Reveal className="cx-turn-grid">
          <div>
            <span className="cx-eyebrow">{kicker}</span>
            <h2 className="cx-turn-title">{title}</h2>
          </div>
          <div>
            <p>{body}</p>
            <div className="cx-actions">
              <Link className="btn" to={primary.to}>
                {primary.label}
              </Link>
              {secondary && (
                <Link className="btn btn-ghost" to={secondary.to}>
                  {secondary.label}
                </Link>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
