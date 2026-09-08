import { Link } from "react-router-dom"
import { Chapter, Close, InsightHero, InsightShell, Pull } from "@/components/site/Insight"
import {
  DrawClose,
  DrawConstellation,
  DrawPressureFlow,
  DrawPressureHero,
  DrawSeats,
  Field,
  Voice,
} from "@/components/site/InsightDraw"
import { customers, solutions } from "@/site-data"

export default function WhoWeHelp() {
  return (
    <InsightShell variant="audience">
      <InsightHero
        kicker="Who we help"
        title="Leaders who have to decide under complexity."
        lede="The pressure is usually the same: something needs to improve, and it is not obvious where to start, which technology makes sense, or whether AI is even necessary. Constrange sits with that pressure — not with a sector slogan."
        primary={{ label: "Start a conversation", to: "/contact" }}
        secondary={{ label: "How we work", to: "/how-we-work" }}
        aura="audience"
        figure={
          <Field refn="Fig. I" note="Three seats. One pressure. The next move is unclear.">
            <DrawPressureHero />
          </Field>
        }
      />

      <Chapter
        id="seats"
        n="01"
        kicker="Who sits across the table"
        title="Situations, not slogans."
        lede="We work with people who already know the organisation is strained. They do not need another vision. They need a reading they can act on."
        tone="mist"
      >
        <Field refn="Fig. II" note="A broken handoff. A crowded stack. An informal path at risk of freezing.">
          <DrawSeats />
        </Field>
      </Chapter>

      <Chapter
        id="pressure"
        n="02"
        kicker="How the pressure shows"
        title="The first sentence is almost always a request for a tool."
        lede="What follows is a picture of overlapping programmes, vendor gravity, and a join that nobody owns."
        tone="gold"
      >
        <Field refn="Fig. III" note="Request. Landscape. The join — where the work actually is.">
          <DrawPressureFlow />
        </Field>
        <Pull
          quote="We knew the work was strained. We did not know whether the next system would help, or simply add another place to look."
          attrib="Operations · process under pressure"
        />
      </Chapter>

      <Chapter
        id="voices"
        n="03"
        kicker="In their words"
        title="The constraint is never generic."
        tone="forest"
      >
        <div className="idraw-voices">
          {customers.slice(0, 6).map((c) => (
            <Voice key={c.name} kicker={c.label} quote={c.quote} attrib={c.name} />
          ))}
        </div>
      </Chapter>

      <Chapter
        id="where"
        n="04"
        kicker="Where we typically sit"
        title="The same method, applied to different constraints."
        tone="navy"
      >
        <Field refn="Fig. IV" note="Five landscapes. One method. Constraint at the centre.">
          <DrawConstellation
            items={solutions.map((s) => ({
              slug: s.slug,
              name:
                {
                  operations: "Operations",
                  "customer-experience": "Service",
                  "technology-leaders": "Technology",
                  growth: "Growing",
                  regulated: "Regulated",
                }[s.slug] ?? s.name,
              hint: s.stat[1],
            }))}
          />
        </Field>
        <p className="insight-note">
          Larger organisations:{" "}
          <Link to="/enterprise">when the organisation is already complicated</Link>
          {" · "}
          Growing teams: <Link to="/solutions/growth">structure without rigidity</Link>
        </p>
      </Chapter>

      <Close
        sign="Constrange"
        title="Bring the situation as it actually is."
        figure={<DrawClose />}
        paragraphs={[
          "You do not need a polished brief. You need a clear reading of the pressure, the constraints, and the next move that would be honest.",
          "If you are a leader who has to decide under complexity — and cannot yet see whether the next move is technology, process, or simply a clearer priority — that is the conversation this practice is built for.",
        ]}
        to="/contact"
        label="Start a conversation"
      />
    </InsightShell>
  )
}
