import {
  CanvasHero,
  CanvasPage,
  CxSection,
  Defs,
  Ledger,
  Turn,
} from "@/components/site/Canvas"
import { FaqList } from "@/components/site/Prose"
import { decisionDeliverables, engagementStages, faqs } from "@/site-data"

const engagementNotes: [string, string][] = [
  [
    "Fixed fee",
    "Engagements are scoped to the decision. Fees are determined by scope, complexity and evidence required.",
  ],
  [
    "Not a rate card",
    "We do not publish a giant rate card. A conversation establishes whether a review is appropriate and what it should hold.",
  ],
  [
    "Limited capacity",
    "We take on a limited number of engagements at a time so the work stays directly led and tightly held.",
  ],
]

const involvement: [string, string][] = [
  ["Your time", "A sponsor, access to relevant people, and working material as it exists — not a polished brief."],
  ["Our time", "Evidence gathering, assumption testing, option comparison, risk assessment and recommendation."],
  ["Duration", "Typically two to six weeks, depending on scope, stakeholders and evidence required."],
  ["Output", "Executive Decision Report, Decision Map, Executive Deck, 90-Day Action Plan and Executive Readout."],
]

export default function Pricing() {
  return (
    <CanvasPage>
      <CanvasHero
        figure="engagement"
        crumbs={[
          ["Home", "/"],
          ["Working with us", "/pricing"],
        ]}
        eyebrow="Working with us"
        title="How an engagement works."
        lede="A Decision Review is a fixed-fee engagement scoped to the decision — not an open-ended consulting programme or a platform sold by the hour."
        keys={["Conversation", "Scope", "Review", "Readout"]}
        primary={{ label: "Discuss a decision", to: "/contact" }}
        secondary={{ label: "Decision Review", to: "/decision-review" }}
      />

      <CxSection first label="Process" title="Four stages from first conversation to recommendation.">
        <ol className="cx-rail">
          {engagementStages.map(([title, body], i) => (
            <li key={title}>
              <span className="cx-rail-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </CxSection>

      <CxSection label="Engagement model" title="Fixed fee, scoped to the decision.">
        <Defs items={engagementNotes} />
      </CxSection>

      <CxSection label="What to expect" title="Time, involvement and deliverables.">
        <Ledger dense rows={involvement} />
        <div style={{ marginTop: 40 }}>
          <p className="cx-label" style={{ marginBottom: 14 }}>Typical deliverables</p>
          <Ledger dense rows={decisionDeliverables.map((d) => [d, "Included"])} />
        </div>
      </CxSection>

      <CxSection label="Questions" title="Asked before most engagements.">
        <div className="cx-faq">
          <FaqList items={faqs} />
        </div>
      </CxSection>

      <Turn
        tone="engagement"
        kicker="Working with us"
        title="Begin with the decision as it stands."
        body="Bring the situation as it is. We will determine whether a Decision Review is useful — and say so if it isn't."
        primary={{ label: "Discuss a decision", to: "/contact" }}
        secondary={{ label: "How we work", to: "/how-we-work" }}
      />
    </CanvasPage>
  )
}
