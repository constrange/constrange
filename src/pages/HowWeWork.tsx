import { Link } from "react-router-dom"
import { Chapter, Close, InsightHero, InsightShell, Panel, Pull, Rail } from "@/components/site/Insight"
import {
  DrawArrival,
  DrawArtefacts,
  DrawClose,
  DrawLook,
  DrawReading,
  DrawStages,
  Field,
} from "@/components/site/InsightDraw"
import { MethodFlow } from "@/components/site/MethodFlow"
import { Reveal } from "@/components/site/Layout"
import { research } from "@/site-data"

const stages = [
  { n: "01", title: "Define", body: "What exactly is being decided? Scope, non-goals, and what would count as a useful answer." },
  { n: "02", title: "Establish", body: "What do we actually know? Evidence gathered, gaps named, and assumptions made visible." },
  { n: "03", title: "Challenge", body: "Which assumptions could invalidate the decision? Dependencies and failure modes tested." },
  { n: "04", title: "Evaluate", body: "What are the alternatives, economics, risks and dependencies? Options held long enough to compare." },
  { n: "05", title: "Recommend", body: "What should happen, and what should happen first? A clear view — proceed, modify, or do not proceed." },
]

const holds = [
  { id: "understand", ...research.understand },
  { id: "structure", ...research.structure },
  {
    id: "prioritize",
    title: research.priorities.title,
    blurb: research.priorities.blurb,
    bullets: research.priorities.bullets,
  },
]

export default function HowWeWork() {
  return (
    <InsightShell variant="method">
      <InsightHero
        kicker="Method"
        title="How a decision becomes clear."
        lede="Constrange Decision Review™ is built around one question: what should happen next? We start with the decision as it actually stands — then work through evidence, assumptions, options, risk and recommendation."
        primary={{ label: "Discuss a decision", to: "/contact" }}
        secondary={{ label: "Decision Review", to: "/decision-review" }}
        aura="method"
        figure={
          <Field refn="Fig. I" note="A tool is asked for. A named decision is what continues.">
            <DrawArrival />
          </Field>
        }
      />

      <Chapter
        id="request"
        n="01"
        kicker="The opening move"
        title="The request usually arrives as a tool."
        lede="Leadership wants a platform, an AI programme, or a new system this quarter. Underneath is almost always a decision that has not yet been named."
        tone="mist"
      >
        <Field refn="Fig. II" note="Fundable on the left. The join, on the right, is what we look for.">
          <DrawLook />
        </Field>
      </Chapter>

      <Chapter
        id="reading"
        n="02"
        kicker="A reading"
        title="Context has to be held before judgement is useful."
        lede="A generic model can supply information. It cannot hold your systems, your constraints, or the cost of a wrong turn."
        tone="gold"
      >
        <Field refn="Fig. III" note="Five threads. They only become a picture at the join.">
          <DrawReading />
        </Field>
        <Pull
          quote="A fluent answer is not a decision. Until the work, the landscape, and the constraint are in the same picture, more options only add noise."
          attrib="Held in the reading — not after it"
        />
      </Chapter>

      <Chapter
        id="stages"
        n="03"
        kicker="The sequence"
        title="Five stages. One clear recommendation."
        lede="The method is designed to produce a position leadership can stand behind — not a longer catalogue of initiatives."
        tone="forest"
      >
        <Reveal>
          <MethodFlow className="method-flow-insight" />
        </Reveal>
        <Field refn="Fig. IV" note="The path firms as it moves. The last mark is the recommended action.">
          <DrawStages stages={stages} />
        </Field>
        <Rail steps={stages} />
      </Chapter>

      <Chapter
        id="leave"
        n="04"
        kicker="What remains"
        title="Artefacts you can stand behind."
        lede="If the work cannot be explained without a slide of jargon, it is not finished."
        tone="navy"
      >
        <Field refn="Fig. V" note="A reading held. A decision named. A first move small enough to be real.">
          <DrawArtefacts />
        </Field>
        <p className="insight-note">
          <Link to="/decision-review">Decision Review deliverables</Link>
          {" · "}
          <Link to="/docs/guides">The shape of a brief</Link>
          {" · "}
          <Link to="/pricing">How engagements work</Link>
        </p>
      </Chapter>

      <Chapter
        id="holds"
        n="05"
        kicker="Three holds"
        title="Understand. Structure. Prioritize."
        lede="The intellectual work underneath the method — how complexity is held before a recommendation is made."
        tone="navy"
      >
        <div className="insight-triple">
          {holds.map((hold) => (
            <Panel key={hold.id}>
              <article id={hold.id}>
                <span className="insight-mini">{hold.title}</span>
                <h3>{hold.title}</h3>
                <p>{hold.blurb}</p>
                <ul className="insight-list">
                  {hold.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            </Panel>
          ))}
        </div>
      </Chapter>

      <Close
        sign="Constrange"
        title="Independent review. Clear recommendation. Actionable next steps."
        figure={<DrawClose />}
        paragraphs={[
          "We are not a software-first vendor. We do not sell the technology we evaluate, and we do not require implementation work to justify a recommendation.",
          "Constrange Decision Review™ helps organisations evaluate important technology, AI and operational decisions when the evidence is incomplete, the options are numerous, and the cost of a wrong move is real.",
          "Every review ends with a Constrange View — proceed, modify, or do not proceed — and what should happen first.",
        ]}
        to="/contact"
        label="Discuss a decision"
      />
    </InsightShell>
  )
}
