import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { LogoMarquee, PageHero } from "@/components/site/Blocks"
import {
  Aside,
  CanvasHero,
  CanvasPage,
  CxSection,
  Defs,
  FigureCard,
  IndexRows,
  Ledger,
  Marks,
  NextRows,
  Note,
  QuietTable,
  Rail,
  Turn,
} from "@/components/site/Canvas"
import { FigurePlate, type FigureKind } from "@/components/site/Figures"
import { Reveal } from "@/components/site/Layout"
import { FaqList, Prose } from "@/components/site/Prose"
import {
  UseCaseCards,
  UseCaseCTA,
  UseCaseFeatures,
  UseCaseHero,
  UseCaseLogoGrid,
  UseCasePage,
  UseCaseStats,
} from "@/components/site/UseCase"
import { ArtProductAI, ArtProductHero, ArtProductOptions, ArtProductSystems } from "@/components/site/UseCaseArt"
import { productContent } from "@/page-content"
import { logos, products, productBySlug, standingInputs } from "@/site-data"

const CRUMBS: [string, string][] = [
  ["Home", "/"],
  ["What we do", "/products"],
]

const relatedSituations: Record<string, { to: string; title: string; blurb: string }[]> = {
  strategy: [
    {
      to: "/solutions/technology-leaders",
      title: "Technology leaders",
      blurb: "When the organisation expects a technology answer, and the harder work is choosing the problem.",
    },
    {
      to: "/enterprise",
      title: "Complex organisations",
      blurb: "When several programmes, several systems and several owners collide.",
    },
  ],
  "ai-automation": [
    {
      to: "/solutions/operations",
      title: "Operations",
      blurb: "When work has outgrown how it is organised, and tools arrive faster than the process can absorb them.",
    },
    {
      to: "/solutions/customer-experience",
      title: "Customer & service",
      blurb: "When service quality depends on several teams and several systems.",
    },
  ],
  "systems-operations": [
    {
      to: "/solutions/operations",
      title: "Operations",
      blurb: "Start with the unofficial path, not the next platform.",
    },
    {
      to: "/solutions/customer-experience",
      title: "Customer & service",
      blurb: "The join between teams is the product the customer actually feels.",
    },
  ],
  "solution-design": [
    {
      to: "/solutions/technology-leaders",
      title: "Technology leaders",
      blurb: "Build, buy, or wait — made explicit against a named problem.",
    },
    {
      to: "/solutions/operations",
      title: "Operations",
      blurb: "A buildable shape has to survive contact with how work actually moves.",
    },
  ],
  implementation: [
    {
      to: "/solutions/growth",
      title: "Growing teams",
      blurb: "Structure without freezing habits that should still be allowed to change.",
    },
    {
      to: "/solutions/operations",
      title: "Operations",
      blurb: "A first move small enough for the current operation to absorb.",
    },
  ],
  transformation: [
    {
      to: "/enterprise",
      title: "Complex organisations",
      blurb: "People, process and technology improved together — not another programme layer.",
    },
    {
      to: "/solutions/operations",
      title: "Operations",
      blurb: "Continuity while the next way of working is built.",
    },
  ],
  judgement: [
    {
      to: "/solutions/regulated",
      title: "Regulated environments",
      blurb: "Caution as a design input when a wrong step is expensive.",
    },
    {
      to: "/solutions/technology-leaders",
      title: "Technology leaders",
      blurb: "A generic model can supply information. It cannot hold this landscape.",
    },
  ],
}

const stance: [string, string][] = [
  [
    "Inside the current landscape",
    "We work with the systems, teams, and constraints you already have. Replacement is a conclusion, not a starting point.",
  ],
  [
    "No default stack",
    "We do not arrive with a preferred platform, and we are not paid to place one. The landscape decides what belongs.",
  ],
  [
    "Constraint as material",
    "Legacy, regulation, budget, and attention span are design inputs. They shape the path rather than excuse it.",
  ],
  [
    "Toward a buildable path",
    "The output is a direction your people — or a partner — can implement. Strategy without a first move is unfinished.",
  ],
]

const neverAssumed: [string, string][] = [
  ["A default platform", "Never"],
  ["A vendor's architecture as the plan", "Never"],
  ["Automation for its own sake", "Never"],
  ["A programme before a problem", "Never"],
]

export function ProductsOverview() {
  return (
    <UseCasePage>
      <UseCaseHero
        tag="What we do"
        title="From complexity to a practical path"
        titleAccent="practical path"
        lede="Constrange sits where business, systems, technology, AI, and implementation meet. The work is to understand the problem, create structure around it, and design a path that can become action."
        primary={{ label: "Start a conversation", to: "/contact" }}
        secondary={{ label: "How we work", to: "/how-we-work" }}
        visual={<ArtProductHero />}
      />

      <UseCaseLogoGrid
        cells={logos.slice(0, 11).map((label) => ({ label }))}
        featured={{
          label: "Strategy",
          metric: "7",
          metricLabel: "ways of contributing in one reading",
          to: "/products/strategy",
        }}
      />

      <UseCaseFeatures
        id="capabilities"
        kicker="Capabilities"
        title="Built for every kind of pressure we take on"
        lede="Seven ways of contributing — held in one reading. The same method across strategy, systems, AI, design, implementation, transformation, and judgement."
        items={[
          {
            title: "Options held, then one chosen",
            bullets: [
              "Compare credible paths on fit, not novelty",
              "Make trade-offs explicit before a stack is selected",
              "Give leaders a recommendation they can stand behind",
            ],
            art: <ArtProductOptions />,
          },
          {
            title: "How work actually moves",
            bullets: [
              "Map unofficial paths alongside the official process",
              "Locate handoffs where context is lost",
              "Design the join between teams and tools",
            ],
            art: <ArtProductSystems />,
            reverse: true,
          },
          {
            title: "Only if AI or automation fits",
            bullets: [
              "Run a necessity test before a pilot is funded",
              "Find work repetitive or error-prone enough to change",
              "Name failure modes before the business case is written",
            ],
            art: <ArtProductAI />,
          },
        ]}
      />

      <UseCaseCards
        kicker="All capabilities"
        title="One reading, seven ways of contributing"
        lede="Which of them applies is the first question — not the last."
        cards={products.map((p) => ({
          to: `/products/${p.slug}`,
          tag: p.price,
          title: p.short,
          body: p.blurb,
        }))}
      />

      <UseCaseStats
        kicker="What is true of every engagement"
        stats={[
          { value: "7", label: "capabilities held in one reading" },
          { value: "0", label: "default platforms assumed" },
          { value: "1", label: "problem named before a stack is chosen" },
          { value: "3", label: "credible options compared before a path is settled" },
        ]}
      />

      <div className="uc-demo-wrap shell" style={{ borderBottom: 0, paddingBottom: 0 }}>
        <LogoMarquee label="The pressure is rarely a missing tool" />
      </div>

      <UseCaseCTA
        title="That is usually the right moment to talk"
        body="A conversation can name the problem before a programme is funded. Bring the situation as it is — you do not need a polished brief."
        primary={{ label: "Start a conversation", to: "/contact" }}
        secondary={{ label: "Working with us", to: "/pricing" }}
      />
    </UseCasePage>
  )
}

export function ProductDetail() {
  const { slug } = useParams()
  const product = productBySlug(slug)

  if (!product) {
    return (
      <PageHero
        title="Page not found"
        blurb="That capability page does not exist. See the overview for the work we take on."
        primary={{ label: "What we do", to: "/products" }}
        secondary={null}
      />
    )
  }

  const kind = product.slug as FigureKind
  const others = products.filter((p) => p.slug !== product.slug).slice(0, 3)
  const content = productContent[product.slug]
  const situations = relatedSituations[product.slug] ?? []

  return (
    <CanvasPage>
      <CanvasHero
        figure={kind}
        crumbs={[...CRUMBS, [product.short, `/products/${product.slug}`]]}
        eyebrow={product.price}
        title={product.name}
        lede={product.blurb}
        keys={product.chips}
      />

      {content && (
        <CxSection first>
          <Aside label="Overview">
            <Prose blocks={content.intro} />
          </Aside>
        </CxSection>
      )}

      {content && (
        <CxSection
          label="Approach"
          title="Four stages before a path is treated as settled."
          lede="Each stage leaves an artefact you can challenge. Nothing is carried forward on confidence alone."
        >
          <Rail steps={content.steps} />
        </CxSection>
      )}

      <CxSection label="What this involves" title={`Inside ${product.short.toLowerCase()}.`}>
        <IndexRows items={product.capabilities} />
      </CxSection>

      {content && (
        <CxSection label="What we hold in view" title="The terms of the work.">
          <div className="cx-pair">
            <Ledger rows={content.specs} />
            <div>
              <FigurePlate kind={kind} size="half" keys={product.chips} />
            </div>
          </div>
          {content.table && (
            <div style={{ marginTop: 64 }}>
              <QuietTable
                caption={content.table.caption}
                head={content.table.head}
                rows={content.table.rows}
                mono={[content.table.head.length - 1]}
              />
            </div>
          )}
        </CxSection>
      )}

      {content && (
        <CxSection
          label="Artefact"
          title="A working note."
          lede="The kind of thing this work produces — inspectable, arguable, and short enough to be read."
        >
          <div className="cx-pair">
            <Note label={content.code.lang} body={content.code.code} meta={product.short} />
            <div>
              <p className="cx-label" style={{ marginBottom: 18 }}>
                When this usually appears
              </p>
              <Marks items={product.useCases} />
            </div>
          </div>
        </CxSection>
      )}

      {content && content.faqs.length > 0 && (
        <CxSection label="Questions" title={`${product.short}, asked directly.`}>
          <div className="cx-faq">
            <FaqList items={content.faqs} />
          </div>
        </CxSection>
      )}

      <CxSection label="Often sits beside" title="Adjacent work.">
        <NextRows
          items={[
            ...others.map((p) => ({
              to: `/products/${p.slug}`,
              kicker: p.price,
              title: p.short,
              blurb: p.blurb,
            })),
            ...situations.map((s) => ({
              to: s.to,
              kicker: "Situation",
              title: s.title,
              blurb: s.blurb,
            })),
          ]}
        />
      </CxSection>

      <Turn
        tone={kind}
        kicker={`Talk about ${product.short.toLowerCase()}`}
        title="Bring the situation as it is."
        body="You do not need a polished brief to start. A conversation is usually enough to name the problem and decide whether there is work here at all."
        primary={{ label: "Start a conversation", to: "/contact" }}
        secondary={{ label: "Working with us", to: "/pricing" }}
      />
    </CanvasPage>
  )
}

export function Features() {
  const [active, setActive] = useState(products[0].slug)

  useEffect(() => {
    const onScroll = () => {
      let current = products[0].slug
      for (const p of products) {
        const node = document.getElementById(`cap-${p.slug}`)
        if (node && node.getBoundingClientRect().top <= 200) current = p.slug
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <CanvasPage>
      <CanvasHero
        figure="capabilities"
        crumbs={[...CRUMBS, ["All capabilities", "/features"]]}
        eyebrow="Capabilities"
        title="The work, in one list"
        lede="These are ways of contributing to a situation — not packages to mix and match off a menu. Nothing here is weighted more heavily than the reading that decides which of it applies."
        keys={["Seven ways", "Evenly weighted", "No menu"]}
        secondary={{ label: "Working with us", to: "/pricing" }}
      />

      <CxSection first>
        <div className="cx-split">
          <nav className="cx-sidenav" aria-label="Capabilities index">
            <h4>Seven ways</h4>
            <ol>
              {products.map((p, i) => (
                <li key={p.slug} className={active === p.slug ? "on" : ""}>
                  <a
                    href={`#cap-${p.slug}`}
                    onClick={(e) => {
                      e.preventDefault()
                      const node = document.getElementById(`cap-${p.slug}`)
                      if (node) window.scrollTo({ top: node.offsetTop - 120, behavior: "smooth" })
                    }}
                  >
                    <b>{String(i + 1).padStart(2, "0")}</b>
                    {p.short}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div>
            {products.map((p, i) => (
              <article className="cx-cap" id={`cap-${p.slug}`} key={p.slug}>
                <Reveal className="cx-cap-head">
                  <div>
                    <span className="cx-label">
                      {String(i + 1).padStart(2, "0")} / {p.price}
                    </span>
                    <h2 className="cx-h2">{p.name}</h2>
                    <p>{p.blurb}</p>
                    <Link className="arrow-link" to={`/products/${p.slug}`}>
                      Full page <i>→</i>
                    </Link>
                  </div>
                  <FigurePlate kind={p.slug as FigureKind} size="thumb" />
                </Reveal>
                <Defs items={p.capabilities} />
              </article>
            ))}
          </div>
        </div>
      </CxSection>

      <Turn
        tone="capabilities"
        kicker="One list, one reading"
        title="Which of these applies is the first question."
        body="We would rather name the two that matter than sell the seven. A conversation is the cheapest way to find out which."
        primary={{ label: "Start a conversation", to: "/contact" }}
        secondary={{ label: "How we work", to: "/how-we-work" }}
      />
    </CanvasPage>
  )
}
