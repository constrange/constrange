import { useEffect, type ReactNode } from "react"
import { Link } from "react-router-dom"
import { Reveal } from "@/components/site/Layout"

type Action = { label: string; to: string }

export function UseCasePage({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.body.classList.add("uc-page")
    return () => document.body.classList.remove("uc-page")
  }, [])
  return <div className="uc">{children}</div>
}

export function UseCaseHero({
  tag,
  title,
  titleAccent,
  lede,
  primary = { label: "Start a conversation", to: "/contact" },
  secondary = { label: "How we work", to: "/how-we-work" },
  visual,
}: {
  tag: string
  title: string
  titleAccent?: string
  lede: string
  primary?: Action
  secondary?: Action | null
  visual?: ReactNode
}) {
  const parts = titleAccent ? title.split(titleAccent) : [title]

  return (
    <header className="uc-hero">
      <div className="uc-hero-inner shell">
        <div className="uc-hero-copy">
          <span className="uc-tag">{tag}</span>
          <h1 className="uc-title">
            {titleAccent && parts.length > 1 ? (
              <>
                {parts[0]}
                <span className="uc-accent">{titleAccent}</span>
                {parts[1]}
              </>
            ) : (
              title
            )}
          </h1>
          <p className="uc-lede">{lede}</p>
          <div className="uc-actions">
            <Link className="btn uc-btn" to={primary.to}>{primary.label}</Link>
            {secondary && (
              <Link className="btn btn-ghost uc-btn-ghost" to={secondary.to}>{secondary.label}</Link>
            )}
          </div>
        </div>
        {visual && <div className="uc-hero-visual">{visual}</div>}
      </div>
    </header>
  )
}

type LogoCell = { label: string; to?: string }

export function UseCaseLogoGrid({
  cells,
  featured,
}: {
  cells: LogoCell[]
  featured: { label: string; metric: string; metricLabel: string; to: string }
}) {
  const gridCells = cells.filter((c) => c.label !== featured.label).slice(0, 11)

  return (
    <section className="uc-logo-grid" aria-label="Trusted landscapes">
      <div className="uc-logo-grid-inner">
        {gridCells.slice(0, 5).map((cell) => (
          <div key={cell.label} className="uc-logo-cell">
            {cell.to ? <Link to={cell.to}>{cell.label}</Link> : <span>{cell.label}</span>}
          </div>
        ))}
        <div className="uc-logo-featured">
          <span className="uc-logo-featured-brand">{featured.label}</span>
          <p className="uc-logo-featured-metric">
            <strong>{featured.metric}</strong> {featured.metricLabel}
          </p>
          <Link className="uc-logo-featured-link" to={featured.to}>See the reading →</Link>
        </div>
        {gridCells.slice(5, 11).map((cell) => (
          <div key={cell.label} className="uc-logo-cell">
            {cell.to ? <Link to={cell.to}>{cell.label}</Link> : <span>{cell.label}</span>}
          </div>
        ))}
      </div>
    </section>
  )
}

export type UseCaseFeature = {
  title: string
  lede?: string
  bullets: string[]
  art: ReactNode
  reverse?: boolean
}

export function UseCaseFeatures({
  id,
  kicker,
  title,
  lede,
  items,
}: {
  id?: string
  kicker?: string
  title: string
  lede?: string
  items: UseCaseFeature[]
}) {
  return (
    <section className="uc-features" id={id}>
      <div className="shell">
        <Reveal className="uc-features-head">
          {kicker && <span className="uc-kicker">{kicker}</span>}
          <h2 className="uc-h2">{title}</h2>
          {lede && <p className="uc-features-lede">{lede}</p>}
        </Reveal>
        <div className="uc-feature-list">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              className={`uc-feature-row${item.reverse ? " is-reverse" : ""}`}
              delay={i * 60}
            >
              <div className="uc-feature-copy">
                <h3 className="uc-feature-title">{item.title}</h3>
                {item.lede && <p className="uc-feature-lede">{item.lede}</p>}
                <ul className="uc-feature-bullets">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
              <div className="uc-feature-art">{item.art}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function UseCaseCards({
  kicker,
  title,
  lede,
  cards,
}: {
  kicker?: string
  title: string
  lede?: string
  cards: { to: string; title: string; body: string; tag?: string }[]
}) {
  return (
    <section className="uc-cards-section">
      <div className="shell">
        <Reveal className="uc-features-head">
          {kicker && <span className="uc-kicker">{kicker}</span>}
          <h2 className="uc-h2">{title}</h2>
          {lede && <p className="uc-features-lede">{lede}</p>}
        </Reveal>
        <div className="uc-cards">
          {cards.map((card, i) => (
            <Reveal key={card.to} delay={i * 50}>
              <Link className="uc-card" to={card.to}>
                {card.tag && <span className="uc-card-tag">{card.tag}</span>}
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <span className="uc-card-link">Explore →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function UseCaseStats({
  kicker,
  stats,
}: {
  kicker: string
  stats: { value: string; label: string }[]
}) {
  return (
    <section className="uc-stats" aria-labelledby="uc-stats-title">
      <div className="shell">
        <p className="uc-stats-kicker" id="uc-stats-title">{kicker}</p>
        <div className="uc-stats-row">
          {stats.map((s, i) => (
            <Reveal key={s.label} className="uc-stat" delay={i * 70}>
              <span className="uc-stat-val">{s.value}</span>
              <span className="uc-stat-label">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function UseCaseCTA({
  title,
  body,
  primary = { label: "Start a conversation", to: "/contact" },
  secondary = { label: "How we work", to: "/how-we-work" },
}: {
  title: string
  body: string
  primary?: Action
  secondary?: Action
}) {
  return (
    <section className="uc-cta">
      <div className="shell uc-cta-inner">
        <Reveal>
          <h2 className="uc-cta-title">{title}</h2>
          <p className="uc-cta-body">{body}</p>
          <div className="uc-actions">
            <Link className="btn uc-btn" to={primary.to}>{primary.label}</Link>
            <Link className="btn btn-ghost uc-btn-ghost" to={secondary.to}>{secondary.label}</Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
