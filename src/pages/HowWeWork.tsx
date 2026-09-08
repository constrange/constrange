import { Link } from "react-router-dom"
import { Chapter, Close, InsightHero, InsightShell, Pull } from "@/components/site/Insight"
import {
  DrawArrival,
  DrawArtefacts,
  DrawClose,
  DrawLook,
  DrawReading,
  DrawStages,
  Field,
  StageNotes,
} from "@/components/site/InsightDraw"

const stages = [
  { n: "01", title: "Understand", body: "Work, systems, people, and constraints as they actually are — including unofficial paths." },
  { n: "02", title: "Define", body: "A named problem, non-goals, and what would count as better. Not a catalogue of initiatives." },
  { n: "03", title: "Explore", body: "More than one credible path, held long enough to compare. Doing less is an option." },
  { n: "04", title: "Structure", body: "Architecture, owners, and sequence. The join is designed, not hoped for." },
  { n: "05", title: "Move", body: "A first action small enough to be real, and a rhythm to review it." },
]

export default function HowWeWork() {
  return (
    <InsightShell variant="method">
      <InsightHero
        kicker="Method"
        title="How a situation becomes a path."
        lede="Constrange does not start with a platform, a model, or a programme. We start with the pressure as it actually is — then create enough structure for a decision that operations can absorb."
        primary={{ label: "Start a conversation", to: "/contact" }}
        secondary={{ label: "Who this is for", to: "/customers" }}
        aura="method"
        figure={
          <Field refn="Fig. I" note="A tool is asked for. A named problem is what continues.">
            <DrawArrival />
          </Field>
        }
      />

      <Chapter
        id="request"
        n="01"
        kicker="The opening move"
        title="The request usually arrives as a tool."
        lede="Leadership wants a platform, an AI programme, or a new system this quarter. The work underneath is almost always a contested picture of the problem."
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
        title="Five stages. One first move."
        lede="The method is meant to produce action, not a longer catalogue. Each stage leaves an artefact you can challenge."
        tone="forest"
      >
        <Field refn="Fig. IV" note="The path firms as it moves. The last mark is the first action.">
          <DrawStages stages={stages} />
        </Field>
        <StageNotes stages={stages} />
      </Chapter>

      <Chapter
        id="leave"
        n="04"
        kicker="What remains"
        title="Artefacts you can stand behind."
        lede="If the work cannot be explained without a slide of jargon, it is not finished."
        tone="navy"
      >
        <Field refn="Fig. V" note="A reading held. A problem named. A first move small enough to be real.">
          <DrawArtefacts />
        </Field>
        <p className="insight-note">
          Working notes: <Link to="/docs/guides">the shape of a brief</Link>
          {" · "}
          <Link to="/docs/api-reference">what each stage produces</Link>
          {" · "}
          <Link to="/products">what we take on</Link>
        </p>
        <p className="insight-note">
          The three holds: <Link to="/understand">Understand</Link>
          {" · "}
          <Link to="/structure">Structure</Link>
          {" · "}
          <Link to="/priorities">Priorities</Link>
        </p>
      </Chapter>

      <Close
        sign="Constrange"
        title="Judgement, then structure, then action."
        figure={<DrawClose />}
        paragraphs={[
          "We are not a software-first vendor. The world of work is more complex than a single tool can hold, and more options do not create clarity on their own.",
          "We help organisations understand the real problem, create structure around it, and design a path that can become action — whether that path is technology, process, or a clearer priority. The right answer depends on the context. It is never assumed in advance.",
          "When a problem is recurring, important, and existing tools do not hold it, we may turn the answer into software. An engagement still starts with the situation — never with a platform looking for a problem.",
        ]}
        to="/contact"
        label="Bring the situation as it is"
      />
    </InsightShell>
  )
}
