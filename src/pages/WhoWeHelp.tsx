import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { CanvasCinematicHero, CanvasPage, CxSection, Turn } from "@/components/site/Canvas"
import { FigurePlate, type FigureKind } from "@/components/site/Figures"
import { Reveal } from "@/components/site/Layout"
import { FaqList } from "@/components/site/Prose"
import {
  customerFaqs,
  customerFilters,
  customerStories,
  customerWall,
  customers,
  featuredOutcomes,
  type CustomerFilter,
} from "@/site-data"

const CRUMBS: [string, string][] = [
  ["Home", "/"],
  ["Who we help", "/customers"],
]

const landscapeShort: Record<string, string> = {
  operations: "Operations",
  "customer-experience": "Service",
  "technology-leaders": "Technology",
  growth: "Growth",
  regulated: "Regulated",
}

export default function WhoWeHelp() {
  const [filter, setFilter] = useState<CustomerFilter>("all")
  const [query, setQuery] = useState("")

  const featured = customerStories.find((s) => s.featured) ?? customerStories[0]

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return customers.filter((c) => {
      if (filter !== "all" && c.filter !== filter) return false
      if (!q) return true
      const hay = `${c.name} ${c.label} ${c.quote}`.toLowerCase()
      return hay.includes(q)
    })
  }, [filter, query])

  return (
    <CanvasPage>
      <CanvasCinematicHero
        figure="systems-operations"
        crumbs={CRUMBS}
        eyebrow="Who we help"
        title="Leaders who have to decide under complexity"
        lede="The pressure is usually the same: something needs to improve, and it is not obvious where to start, which technology makes sense, or whether AI is even necessary. Constrange sits with that pressure — not with a sector slogan."
        keys={["Constraint", "The join", "Ownership", "Sequence"]}
        primary={{ label: "Start a conversation", to: "/contact" }}
        secondary={{ label: "How we work", to: "/how-we-work" }}
      />

      <CxSection first label="Landscapes" title="Situations we recognise across sectors.">
        <div className="cust-wall" aria-label="Situations and landscapes">
          {customerWall.map((cell, i) => (
            <Reveal
              key={cell.label}
              className={cell.slug ? "cust-wall-cell is-reading" : "cust-wall-cell"}
              delay={(i % 4) * 40}
            >
              {cell.slug ? (
                <Link to={`/solutions/${cell.slug}`}>
                  <span className="cust-wall-tag">Reading</span>
                  <span className="cust-wall-label">{cell.label}</span>
                </Link>
              ) : (
                <span className="cust-wall-label">{cell.label}</span>
              )}
            </Reveal>
          ))}
        </div>
      </CxSection>

      <section className="cust-featured">
        <div className="cx-inner">
          <Reveal className="cust-featured-grid">
            <div className="cust-featured-copy">
              <span className="cx-label">Featured reading</span>
              <p className="cust-featured-landscape">{featured.landscape}</p>
              <h2 className="cust-featured-title">{featured.title}</h2>
              <p className="cust-featured-excerpt">{featured.excerpt}</p>
              <Link className="arrow-link" to={`/solutions/${featured.slug}`}>
                Read the situation <i>→</i>
              </Link>
            </div>
            <div className="cust-featured-figure">
              <FigurePlate kind={featured.figure as FigureKind} size="full" />
            </div>
          </Reveal>
          <Reveal className="cust-metrics">
            {featuredOutcomes.map((m) => (
              <div key={m.label} className="cust-metric">
                <span className="cust-metric-val">{m.value}</span>
                <span className="cust-metric-label">{m.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CxSection label="Readings" title="Five landscapes. One method.">
        <div className="cust-rail" role="list" aria-label="Situation readings">
          {customerStories.map((story, i) => (
            <Reveal as="article" key={story.slug} className="cust-rail-card" delay={i * 50} role="listitem">
              <span className="cust-rail-num">{story.outcomes[0].value}</span>
              <h3>
                <Link to={`/solutions/${story.slug}`}>{story.title}</Link>
              </h3>
              <p>{landscapeShort[story.slug] ?? story.landscape}</p>
            </Reveal>
          ))}
        </div>
      </CxSection>

      <CxSection
        id="voices"
        label="In their words"
        title="The constraint is never generic."
        lede="Anonymous voices from the kinds of conversations we take on — operations, product, finance, service, clinical, and growth."
      >
        <div className="cust-toolbar">
          <div className="cust-filters" role="tablist" aria-label="Filter by landscape">
            {customerFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                className={filter === f.id ? "on" : ""}
                aria-selected={filter === f.id}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <label className="cust-search">
            <input
              type="search"
              aria-label="Search situations"
              placeholder="Search by pressure, role, or phrase…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>

        <div className="cust-grid">
          {filtered.map((c, i) => (
            <Reveal className="cust-card" key={`${c.name}-${c.label}`} delay={(i % 3) * 60}>
              <span className="cust-card-kicker">{c.label}</span>
              <blockquote>“{c.quote}”</blockquote>
              <footer>
                <span className="logo-word">{c.name}</span>
                <span className="cust-card-tag">{customerFilters.find((f) => f.id === c.filter)?.label}</span>
              </footer>
            </Reveal>
          ))}
          {filtered.length === 0 && (
            <p className="cust-empty">No situations match that filter. Try a broader landscape or a shorter phrase.</p>
          )}
        </div>
      </CxSection>

      <section className="cust-voices-band" aria-label="More voices from the work">
        <div className="cx-inner">
          <Reveal className="cust-voices-head">
            <span className="cx-label">From the table</span>
            <h2 className="cx-h2">The same pressure, in different seats.</h2>
          </Reveal>
        </div>
        <div className="cust-quotes-marquee">
          <div className="cust-quotes-track">
            {[...customers, ...customers].map((c, i) => (
              <figure key={`${c.name}-${i}`} className="cust-quote-slide">
                <blockquote>“{c.quote}”</blockquote>
                <figcaption>
                  <span>{c.name}</span>
                  <i>·</i>
                  <span>{c.label}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CxSection label="Questions" title="What leaders usually ask first.">
        <div className="cx-faq">
          <FaqList items={customerFaqs} title="Questions we are asked" />
        </div>
      </CxSection>

      <Turn
        tone="systems-operations"
        kicker="Who we help"
        title="Bring the situation as it actually is."
        body="You do not need a polished brief. You need a clear reading of the pressure, the constraints, and the next move that would be honest."
        primary={{ label: "Start a conversation", to: "/contact" }}
        secondary={{ label: "How we work", to: "/how-we-work" }}
      />
    </CanvasPage>
  )
}
