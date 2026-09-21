import {
  UseCaseCTA,
  UseCaseHero,
  UseCaseLogoGrid,
  UseCasePage,
  UseCaseStats,
  UseCaseSteps,
} from "@/components/site/UseCase"

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

      <UseCaseSteps
        kicker="The method"
        title="Five stages. One first move."
        lede="The same sequence applies whether the pressure is operational, strategic, or technical — because the constraint is rarely the tool that was first requested."
        steps={[
          {
            title: "Understand",
            body: "Work, systems, people, and constraints as they actually are — including unofficial paths.",
            bullets: [
              "Map how work moves today, not how the diagram says it should",
              "Surface the shadow systems keeping operations alive",
            ],
          },
          {
            title: "Define",
            body: "A named problem, non-goals, and what would count as better.",
            bullets: [
              "Write non-goals before the next tool is discussed",
              "Separate a fluent answer from a decision the organisation can own",
            ],
          },
          {
            title: "Explore",
            body: "More than one credible path, held long enough to compare.",
            bullets: [
              "Hold two or three options without collapsing to the first plausible one",
              "Doing less remains a valid path",
            ],
          },
          {
            title: "Structure",
            body: "Architecture, owners, and sequence — the join is designed, not hoped for.",
            bullets: [
              "Name who owns the handoff between teams and systems",
              "Make trade-offs explicit before a stack is selected",
            ],
          },
          {
            title: "Move",
            body: "A first action small enough to be real, and a rhythm to review it.",
            bullets: [
              "One move the current operation can absorb",
              "Artefacts you can challenge without a slide of jargon",
            ],
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
