import { type ReactNode } from "react"
import { Reveal } from "@/components/site/Layout"

const deliverables = [
  {
    num: "01",
    title: "Executive Decision Report",
    format: "PDF report",
    meta: "10–20 pages, depending on scope.",
    includes: [
      "Executive conclusion",
      "Business context",
      "Key evidence",
      "Assumptions",
      "Options and trade-offs",
      "Economics where appropriate",
      "Risks and dependencies",
      "Constrange recommendation",
    ],
    visual: "report",
    featured: true,
  },
  {
    num: "02",
    title: "Decision Map",
    format: "Visual",
    meta: "A concise map of the decision landscape.",
    includes: ["Decision → Options → Risks → Trade-offs → Expected outcome"],
    visual: "map",
    featured: false,
  },
  {
    num: "03",
    title: "Executive Decision Deck",
    format: "Slides",
    meta: "8–12 slides for leadership discussion and decision-making.",
    includes: [],
    visual: "deck",
    featured: false,
  },
  {
    num: "04",
    title: "90-Day Action Plan",
    format: "Timeline",
    meta: "A practical sequence across three horizons.",
    includes: ["0–30 days", "31–60 days", "61–90 days"],
    visual: "plan",
    featured: false,
  },
  {
    num: "05",
    title: "Executive Readout",
    format: "Session",
    meta: "A focused walkthrough of the conclusion, reasoning and next actions.",
    includes: [],
    visual: "readout",
    featured: false,
  },
] as const

function DeliverableVisual({ kind }: { kind: (typeof deliverables)[number]["visual"] }) {
  const views: Record<(typeof deliverables)[number]["visual"], ReactNode> = {
    report: (
      <div className="eng-deliverable-art eng-deliverable-art-report" aria-hidden>
        <span />
        <span />
        <span />
      </div>
    ),
    map: (
      <svg className="eng-deliverable-art eng-deliverable-art-map" viewBox="0 0 120 72" aria-hidden>
        <circle cx="60" cy="12" r="5" />
        <line x1="60" y1="17" x2="24" y2="52" />
        <line x1="60" y1="17" x2="60" y2="52" />
        <line x1="60" y1="17" x2="96" y2="52" />
        <circle cx="24" cy="56" r="4" />
        <circle cx="60" cy="56" r="4" />
        <circle cx="96" cy="56" r="4" />
      </svg>
    ),
    deck: (
      <div className="eng-deliverable-art eng-deliverable-art-deck" aria-hidden>
        <span />
        <span />
      </div>
    ),
    plan: (
      <div className="eng-deliverable-art eng-deliverable-art-plan" aria-hidden>
        <i style={{ width: "88%" }} />
        <i style={{ width: "62%" }} />
        <i style={{ width: "44%" }} />
      </div>
    ),
    readout: (
      <div className="eng-deliverable-art eng-deliverable-art-readout" aria-hidden>
        <span />
        <span />
      </div>
    ),
  }

  return views[kind]
}

export function EngagementDeliverables() {
  return (
    <div className="eng-deliverables-wrap">
      <div className="eng-deliverables-grid">
        {deliverables.map((item, i) => (
          <Reveal
            as="article"
            className={`eng-deliverable-card eng-deliverable-${item.visual}${item.featured ? " is-featured" : ""}`}
            key={item.title}
            delay={i * 65}
          >
            <div className="eng-deliverable-card-top">
              <div className="eng-deliverable-card-meta">
                <span className="eng-deliverable-num">{item.num}</span>
                <span className="eng-deliverable-format">{item.format}</span>
              </div>
              <DeliverableVisual kind={item.visual} />
            </div>
            <h3>{item.title}</h3>
            <p className="eng-deliverable-desc">{item.meta}</p>
            {item.includes.length > 0 && (
              <ul className="eng-deliverable-chips">
                {item.includes.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </div>
      <Reveal className="eng-deliverables-note" delay={220}>
        <p>
          Deliverables scale with scope. A focused review may include a subset; a strategic review typically includes
          the full set.
        </p>
      </Reveal>
    </div>
  )
}
