import {
  UseCaseCTA,
  UseCaseFeatures,
  UseCaseHero,
  UseCaseLogoGrid,
  UseCasePage,
  UseCaseStats,
} from "@/components/site/UseCase"
import {
  ArtMethodArtefacts,
  ArtMethodHero,
  ArtMethodReading,
  ArtMethodStages,
} from "@/components/site/UseCaseArt"

export default function HowWeWork() {
  return (
    <UseCasePage>
      <UseCaseHero
        tag="How we work"
        title="How a situation becomes a path"
        titleAccent="becomes a path"
        lede="Constrange does not start with a platform, a model, or a programme. We start with the pressure as it actually is — then create enough structure for a decision that operations can absorb."
        primary={{ label: "Start a conversation", to: "/contact" }}
        secondary={{ label: "Who we help", to: "/customers" }}
        visual={<ArtMethodHero />}
      />

      <UseCaseLogoGrid
        cells={[
          { label: "Understand" },
          { label: "Define" },
          { label: "Explore" },
          { label: "Structure" },
          { label: "Move" },
          { label: "Reading" },
          { label: "Constraint" },
          { label: "Sequence" },
          { label: "Owners" },
          { label: "Non-goals" },
          { label: "First move" },
        ]}
        featured={{
          label: "Typical diagnostic",
          metric: "3 weeks",
          metricLabel: "to a first reading",
          to: "/pricing",
        }}
      />

      <UseCaseFeatures
        kicker="The method"
        title="Built for every kind of complexity"
        lede="The same sequence applies whether the pressure is operational, strategic, or technical — because the constraint is rarely the tool that was first requested."
        items={[
          {
            title: "Five stages before a path is settled",
            bullets: [
              "Understand the work, systems, and unofficial paths as they are",
              "Define the problem, non-goals, and what would count as better",
              "Hold more than one credible option long enough to compare",
              "Structure owners, architecture, and delivery sequence",
            ],
            art: <ArtMethodStages />,
          },
          {
            title: "Context held before judgement is useful",
            bullets: [
              "Map work, systems, people, time, and risk in one reading",
              "Name the constraint that keeps reappearing across teams",
              "Separate a fluent answer from a decision your organisation can own",
            ],
            art: <ArtMethodReading />,
            reverse: true,
          },
          {
            title: "Artefacts you can challenge",
            bullets: [
              "Problem statement with named owners for the join",
              "Two or three credible paths with consequences spelled out",
              "A first move small enough for the current operation to absorb",
            ],
            art: <ArtMethodArtefacts />,
          },
        ]}
      />

      <UseCaseStats
        kicker="How the work is counted"
        stats={[
          { value: "5", label: "stages from situation to first move" },
          { value: "3", label: "weeks to a first reading" },
          { value: "1", label: "constraint named before a stack is chosen" },
          { value: "0", label: "default to AI, automation, or a new platform" },
        ]}
      />

      <UseCaseCTA
        title="Bring the situation as it actually is"
        body="You do not need a polished brief. A conversation is usually enough to name the problem and decide whether there is work here at all."
        primary={{ label: "Start a conversation", to: "/contact" }}
        secondary={{ label: "What we take on", to: "/products" }}
      />
    </UseCasePage>
  )
}
