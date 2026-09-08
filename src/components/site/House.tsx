import { useEffect, type ReactNode } from "react"
import { Link } from "react-router-dom"
import { AboutPlate } from "@/components/site/AboutDraw"
import { Reveal } from "@/components/site/Layout"

export const HousePlate = AboutPlate

export type HouseTone = "paper" | "mist" | "gold" | "ink" | "field" | "slate" | "clay"

export function HouseShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.body.classList.add("on-about")
    return () => document.body.classList.remove("on-about")
  }, [])
  return <article className="about">{children}</article>
}

export function HouseHero({
  crumbs,
  kicker,
  title,
  lede,
  primary = { label: "Start a conversation", to: "/contact" },
  secondary = { label: "How we work", to: "/how-we-work" },
  figure,
  tone = "paper",
  className = "",
}: {
  crumbs: [string, string][]
  kicker: string
  title: string
  lede: string
  primary?: { label: string; to: string } | null
  secondary?: { label: string; to: string } | null
  figure?: ReactNode
  tone?: HouseTone
  className?: string
}) {
  return (
    <header className={`about-hero house-tone-${tone} ${className}`.trim()}>
      <span className="about-hero-grain" aria-hidden />
      <span className="about-hero-wash" aria-hidden />
      <div className="about-hero-inner">
        <div className="about-hero-copy">
          <p className="about-crumbs">
            {crumbs.map(([label, to], i) => (
              <span key={`${i}-${to}`}>
                {i > 0 && <i>/</i>}
                {i < crumbs.length - 1 ? <Link to={to}>{label}</Link> : <span>{label}</span>}
              </span>
            ))}
          </p>
          <span className="about-kicker">{kicker}</span>
          <h1>{title}</h1>
          <p className="about-lede">{lede}</p>
          {(primary || secondary) && (
            <div className="about-actions">
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
        {figure}
      </div>
    </header>
  )
}

export function HouseChapter({
  id,
  n,
  kicker,
  title,
  lede,
  children,
}: {
  id: string
  n: string
  kicker: string
  title: string
  lede?: string
  children?: ReactNode
}) {
  return (
    <section id={id} className="about-chapter">
      <div className="about-inner">
        <Reveal>
          <p className="about-kicker">
            <b>{n}</b> {kicker}
          </p>
          <h2>{title}</h2>
          {lede && <p className="about-lede">{lede}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}

export function HouseClose({
  kicker = "A conversation",
  title,
  lede,
  primary = { label: "Start a conversation", to: "/contact" },
  secondary,
  figure,
}: {
  kicker?: string
  title: string
  lede: string
  primary?: { label: string; to: string }
  secondary?: { label: string; to: string } | null
  figure?: ReactNode
}) {
  return (
    <section className="about-close">
      <div className="about-inner about-close-grid">
        {figure}
        <Reveal>
          <p className="about-kicker">{kicker}</p>
          <h2>{title}</h2>
          <p className="about-lede">{lede}</p>
          <div className="about-actions">
            <Link className="btn" to={primary.to}>
              {primary.label}
            </Link>
            {secondary && (
              <Link className="btn btn-ghost" to={secondary.to}>
                {secondary.label}
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export type FieldTone = "indigo" | "olive" | "slate" | "clay" | "fold"

export function HouseField({
  n,
  kicker,
  title,
  lede,
  children,
  tone = "olive",
}: {
  n: string
  kicker: string
  title: string
  lede: string
  children?: ReactNode
  tone?: FieldTone
}) {
  return (
    <section className={`about-field field-tone-${tone}`}>
      <span className="about-field-grain" aria-hidden />
      <div className="about-inner">
        <Reveal>
          <p className="about-kicker light">
            <b>{n}</b> {kicker}
          </p>
          <h2>{title}</h2>
          <p className="about-lede light">{lede}</p>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
