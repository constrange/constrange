import {
  UseCaseCards,
  UseCaseCTA,
  UseCaseFeatures,
  UseCaseHero,
  UseCaseLogoGrid,
  UseCasePage,
  UseCaseStats,
} from "@/components/site/UseCase"
import {
  ArtCustomerHero,
  ArtCustomerOps,
  ArtCustomerRegulated,
  ArtCustomerScale,
} from "@/components/site/UseCaseArt"
import { customerStories, customerWall, featuredOutcomes } from "@/site-data"

export default function WhoWeHelp() {
  const featured = customerStories.find((s) => s.featured) ?? customerStories[0]

  return (
    <UseCasePage>
      <UseCaseHero
        tag="Who we help"
        title="Leaders who decide under complexity"
        titleAccent="under complexity"
        lede="The pressure is usually the same: something needs to improve, and it is not obvious where to start, which technology makes sense, or whether AI is even necessary."
        primary={{ label: "Start a conversation", to: "/contact" }}
        secondary={{ label: "How we work", to: "/how-we-work" }}
        visual={<ArtCustomerHero />}
      />

      <UseCaseLogoGrid
        cells={customerWall.map((c) => ({
          label: c.label,
          to: c.slug ? `/solutions/${c.slug}` : undefined,
        }))}
        featured={{
          label: featured.landscape,
          metric: featured.outcomes[0].value,
          metricLabel: featured.outcomes[0].label,
          to: `/solutions/${featured.slug}`,
        }}
      />

      <UseCaseFeatures
        kicker="Situations"
        title="Built for every landscape we recognise"
        lede="Five readings. One method. The constraint is rarely industry-specific — it is structural."
        items={[
          {
            title: "When the unofficial path is winning",
            bullets: [
              "Map how work actually moves — not how the process diagram says it should",
              "Locate the join where context is lost between teams and systems",
              "Design a path the current operation can absorb",
            ],
            art: <ArtCustomerOps />,
          },
          {
            title: "The same pressure in different seats",
            bullets: [
              "Operations, product, finance, service, and technology leaders face the same structural gaps",
              "Anonymous voices from the table — constraint never generic",
              "Readings sized to the situation, not a standard programme",
            ],
            art: <ArtCustomerScale />,
            reverse: true,
          },
          {
            title: "Caution as a design input",
            bullets: [
              "Regulated environments where a wrong step is expensive",
              "Audit trails, role boundaries, and change control built into the path",
              "Continuity while the next way of working is built",
            ],
            art: <ArtCustomerRegulated />,
          },
        ]}
      />

      <UseCaseCards
        kicker="Readings"
        title="Five landscapes. One method."
        lede="Each reading is a contained diagnostic — not a sector slogan."
        cards={customerStories.map((story) => ({
          to: `/solutions/${story.slug}`,
          tag: story.landscape,
          title: story.title,
          body: story.excerpt,
        }))}
      />

      <UseCaseStats
        kicker="Typical outcomes from a first reading"
        stats={featuredOutcomes.map((o) => ({ value: o.value, label: o.label }))}
      />

      <UseCaseCTA
        title="Bring the situation as it actually is"
        body="You do not need a polished brief. You need a clear reading of the pressure, the constraints, and the next move that would be honest."
        primary={{ label: "Start a conversation", to: "/contact" }}
        secondary={{ label: "How we work", to: "/how-we-work" }}
      />
    </UseCasePage>
  )
}
