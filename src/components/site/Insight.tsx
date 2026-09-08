import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import { Reveal } from "@/components/site/Layout"

function Action({ to, className, children }: { to: string; className: string; children: ReactNode }) {
  if (/^https?:\/\//i.test(to)) {
    return (
      <a className={className} href={to}>
        {children}
      </a>
    )
  }
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  )
}

export function InsightShell({
  variant = "method",
  children,
}: {
  variant?: "method" | "audience"
  children: ReactNode
}) {
  return <article className={`insight insight-${variant}`}>{children}</article>
}

export function InsightHero({
  kicker,
  title,
  lede,
  primary,
  secondary,
  aura = "method",
  figure,
}: {
  kicker: string
  title: string
  lede: string
  primary: { label: string; to: string }
  secondary?: { label: string; to: string }
  aura?: "method" | "audience"
  figure?: ReactNode
}) {
  return (
    <header className={figure ? "insight-hero has-figure" : "insight-hero"}>
      <div className={`insight-aura insight-aura-${aura}`} aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <div className="insight-hero-grid">
        <div>
          <span className="insight-kicker">{kicker}</span>
          <h1 className="insight-title">{title}</h1>
          <div className="insight-hero-copy">
            <p>{lede}</p>
            <div className="insight-actions">
              <Action className="btn" to={primary.to}>
                {primary.label}
              </Action>
              {secondary && (
                <Action className="btn btn-ghost" to={secondary.to}>
                  {secondary.label}
                </Action>
              )}
            </div>
          </div>
        </div>
      </div>
      {figure && <div className="insight-hero-figure">{figure}</div>}
    </header>
  )
}

export function Chapter({
  id,
  n,
  kicker,
  title,
  lede,
  tone,
  children,
}: {
  id: string
  n: string
  kicker: string
  title: string
  lede?: string
  tone: "mist" | "gold" | "forest" | "navy"
  children: ReactNode
}) {
  return (
    <section id={id} className={`insight-chapter tone-${tone}`}>
      <div className="insight-chapter-inner">
        <Reveal>
          <div className="insight-chapter-head">
            <span className="insight-kicker">
              <b>{n}</b> {kicker}
            </span>
            <h2>{title}</h2>
            {lede && <p className="insight-lede">{lede}</p>}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  )
}

export function Index({
  items,
}: {
  items: { value: string; label: string; hint: string }[]
}) {
  return (
    <div className="insight-index">
      {items.map((item) => (
        <Reveal className="insight-index-tile" key={item.label}>
          <b>{item.value}</b>
          <strong>{item.label}</strong>
          <p>{item.hint}</p>
        </Reveal>
      ))}
    </div>
  )
}

export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <Reveal className={`insight-panel ${className}`.trim()}>{children}</Reveal>
}

export function Pull({ quote, attrib }: { quote: string; attrib: string }) {
  return (
    <Reveal className="insight-pull">
      <blockquote>{quote}</blockquote>
      <cite>{attrib}</cite>
    </Reveal>
  )
}

export function Ledger({
  rows,
  close,
}: {
  rows: [string, string][]
  close: [string, string]
}) {
  return (
    <Reveal className="insight-layers">
      {rows.map(([left, right], i) => (
        <div key={left} className="insight-layer" style={{ "--w": `${86 - i * 7}%` } as never}>
          <b>{left}</b>
          <span>{right}</span>
        </div>
      ))}
      <div className="insight-layer is-hold">
        <b>{close[1]}</b>
        <span>{close[0]}</span>
      </div>
    </Reveal>
  )
}

export function Rail({
  steps,
}: {
  steps: { n: string; title: string; body: string }[]
}) {
  return (
    <ol className="insight-rail">
      {steps.map((step) => (
        <Reveal as="li" key={step.n}>
          <span>{step.n}</span>
          <div>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  )
}

export function Close({
  sign,
  title,
  paragraphs,
  to,
  label,
  figure,
}: {
  sign: string
  title: string
  paragraphs: string[]
  to: string
  label: string
  figure?: ReactNode
}) {
  return (
    <section className="insight-close">
      <div className="insight-chapter-inner">
        {figure && <div className="insight-close-figure">{figure}</div>}
        <Reveal>
          <p className="insight-sign">{sign}</p>
          <h2>{title}</h2>
          {paragraphs.map((p) => (
            <p key={p.slice(0, 28)} className="insight-close-copy">
              {p}
            </p>
          ))}
          <Action className="btn btn-light" to={to}>
            {label}
          </Action>
        </Reveal>
      </div>
    </section>
  )
}
