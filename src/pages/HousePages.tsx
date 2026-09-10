import { useState, type ReactNode } from "react"
import { Link, useParams } from "react-router-dom"
import { DrawSign } from "@/components/site/AboutDraw"
import {
  HouseChapter,
  HouseClose,
  HouseField,
  HouseHero,
  HousePlate,
  HouseShell,
  type FieldTone,
  type HouseTone,
} from "@/components/site/House"
import {
  DrawCaution,
  DrawChoice,
  DrawContexts,
  DrawHolds,
  DrawInformal,
  DrawJourney,
  DrawOverlap,
  DrawRank,
  DrawSeatsOpen,
  DrawSignSmall,
  DrawStructure,
  DrawUnderstand,
  DrawWorkPath,
} from "@/components/site/HouseDraw"
import { FaqList } from "@/components/site/Prose"
import { Reveal } from "@/components/site/Layout"
import { research, solutionBySlug, solutions, productFromLabel, thinkingThemes } from "@/site-data"
import { solutionContent } from "@/page-content"

function ProseBlock({ children }: { children: ReactNode }) {
  return <div className="about-prose about-prose-wide">{children}</div>
}

function Notes({ items }: { items: [string, string][] }) {
  return (
    <ul className="about-stances">
      {items.map(([title, body], i) => (
        <Reveal as="li" key={title} delay={i * 70}>
          <b>{String(i + 1).padStart(2, "0")}</b>
          <strong>{title}</strong>
          <p>{body}</p>
        </Reveal>
      ))}
    </ul>
  )
}

/* ---------------- thinking ---------------- */
const holds = [
  {
    slug: "understand" as const,
    n: "01",
    title: "Understand",
    note: "The situation as it is done.",
    draw: <DrawUnderstand />,
  },
  {
    slug: "structure" as const,
    n: "02",
    title: "Structure",
    note: "Decisions, not a longer catalogue.",
    draw: <DrawStructure />,
  },
  {
    slug: "priorities" as const,
    n: "03",
    title: "Priorities",
    note: "A ranking under constraint.",
    draw: <DrawRank />,
  },
]

export function ResearchOverview() {
  return (
    <HouseShell>
      <HouseHero
        crumbs={[["Home", "/"], ["Thinking", "/research"]]}
        kicker="Thinking"
        title="Proof of thinking on important decisions."
        lede="Research and writing on technology investment, AI adoption, operational complexity, and when an independent view is worth paying for — the same territory as Constrange Decision Review™."
        primary={{ label: "Discuss a decision", to: "/contact" }}
        secondary={{ label: "Decision Review", to: "/decision-review" }}
        tone="ink"
        figure={
          <HousePlate refn="Fig. I" note="Three holds. A bar. Then, maybe, a tool.">
            <DrawHolds />
          </HousePlate>
        }
      />

      <HouseChapter
        id="holds"
        n="01"
        kicker="Three holds"
        title="Complexity is not solved by adding a layer."
        lede="Each hold is a picture you can challenge. Together they are the work Constrange is built to do — before a stack is selected, and sometimes instead of one."
      >
        <div className="house-index">
          {holds.map((h) => (
            <Link className="house-index-card" to={`/how-we-work#${h.slug === "priorities" ? "prioritize" : h.slug}`} key={h.slug}>
              <HousePlate refn={`Fig. ${h.n}`} note={h.note}>
                {h.draw}
              </HousePlate>
              <span className="about-kicker">
                <b>{h.n}</b> {h.title}
              </span>
              <h3>{research[h.slug].title}</h3>
              <p>{research[h.slug].blurb}</p>
              <span className="arrow-link">
                Read this hold <i>→</i>
              </span>
            </Link>
          ))}
        </div>
      </HouseChapter>

      <HouseChapter
        id="themes"
        n="02"
        kicker="Themes"
        title="Questions the work keeps returning to."
        lede="Not SEO volume — proof that Constrange thinks in the same territory it reviews for clients."
      >
        <ul className="house-points">
          {thinkingThemes.map(([title, body]) => (
            <li key={title}>
              <strong>{title}</strong>
              <p>{body}</p>
            </li>
          ))}
        </ul>
        <p className="about-kicker" style={{ marginTop: 32 }}>
          <Link className="arrow-link" to="/blog">
            Read published articles <i>→</i>
          </Link>
        </p>
      </HouseChapter>

      <HouseChapter
        id="order"
        n="03"
        kicker="Sequence"
        title="The order is the discipline."
        lede="Reverse it and you will spend a year searching for a use that justifies a purchase. Keep it, and the first move can be small enough to be real."
      >
        <HousePlate refn="Fig. II" note="A stance about order — not a score against other firms." className="is-wide">
          <DrawRank />
        </HousePlate>
      </HouseChapter>

      <HouseClose
        title="Have a decision that needs an independent view?"
        lede="Bring the situation as it is. We will determine whether a Decision Review is useful — and say so if it isn't."
        figure={
          <HousePlate refn="Fig. III" note="The conversation is the first artefact.">
            <DrawSignSmall />
          </HousePlate>
        }
        secondary={{ label: "How we work", to: "/how-we-work" }}
      />
    </HouseShell>
  )
}

const holdDraw = {
  understand: DrawUnderstand,
  structure: DrawStructure,
  priorities: DrawRank,
}

const holdEssays: Record<keyof typeof research, { kicker: string; title: string; tone: HouseTone; paras: string[] }> = {
  understand: {
    kicker: "Hold 01",
    title: "See the work as it is done.",
    tone: "mist",
    paras: [
      "A stated request is usually a tool. The situation underneath is a contested picture: unofficial paths, tired joins, systems that will not move this year, and a team already carrying more change than it can absorb.",
      "Understanding is not a pile of interviews. It is holding work, systems, people, risk, and time in the same frame until the pressure has a name. Until then, more information is only more noise.",
      "We write down what is known, what is assumed, and what is still open. The unofficial map is taken seriously without being romanticised. Some workarounds are wisdom. Some are debt. You cannot tell which from a generated operating model.",
    ],
  },
  structure: {
    kicker: "Hold 02",
    title: "Turn density into decisions.",
    tone: "gold",
    paras: [
      "A dense situation is not a shopping list. It is a set of decisions: the problem, the non-goals, the credible paths, the joins, and the order. Structure is the record of those decisions — inspectable enough to challenge.",
      "We hold more than one path long enough to compare them, including the path that changes a process and leaves the stack alone. Novelty is not a signal. Fit is.",
      "Without non-goals the work reopens itself. Without owners the spine is only a diagram. Structure is finished when operations can recognise it on a Tuesday.",
    ],
  },
  priorities: {
    kicker: "Hold 03",
    title: "Clarity is a ranking, not a longer list.",
    tone: "field",
    paras: [
      "More options do not create clarity. They postpone the moment someone has to say what will not be done. Priorities are a reduction made under constraint — with a first move small enough to start.",
      "Rank by consequence, not by novelty. Separate what is urgent from what is merely available. Leave later work named, not implied, so the catalogue cannot quietly return next quarter.",
      "Technology sits after this ranking. Sometimes it is the right class of move. Sometimes the honest first step is to stop a programme that has no owner.",
    ],
  },
}

export function ResearchDetail({ slug }: { slug: keyof typeof research }) {
  const entry = research[slug]
  const essay = holdEssays[slug]
  const Draw = holdDraw[slug]
  const others = holds.filter((h) => h.slug !== slug)

  return (
    <HouseShell>
      <HouseHero
        crumbs={[
          ["Home", "/"],
          ["Thinking", "/research"],
          [entry.title, `/${slug}`],
        ]}
        kicker={essay.kicker}
        title={essay.title}
        lede={entry.blurb}
        tone={essay.tone}
        figure={
          <HousePlate refn="Fig. I" note={entry.title}>
            <Draw />
          </HousePlate>
        }
      />

      <HouseChapter
        id="requires"
        n="01"
        kicker="What this requires"
        title="A picture you can hand on."
        lede="The hold is useful only when it can be inspected, challenged, and used by people who were not in the room."
      >
        <ul className="house-points">
          {entry.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <ProseBlock>
          {essay.paras.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </ProseBlock>
      </HouseChapter>

      {slug === "priorities" && (
        <HouseChapter
          id="order"
          n="02"
          kicker="Order"
          title="What usually gets done too early."
          lede="The lines are a stance about sequence — not a benchmark against other firms, and not a claim about your last programme."
        >
          <HousePlate refn="Fig. II" note="Understand first. A default stack, rarely." className="is-wide">
            <DrawRank />
          </HousePlate>
        </HouseChapter>
      )}

      <HouseChapter
        id="also"
        n={slug === "priorities" ? "03" : "02"}
        kicker="The other holds"
        title="They only work together."
      >
        <div className="house-sibs">
          {others.map((h) => (
            <Link to={`/${h.slug}`} key={h.slug}>
              <b>{h.n}</b>
              <strong>{research[h.slug].title}</strong>
              <span>{research[h.slug].blurb}</span>
            </Link>
          ))}
        </div>
      </HouseChapter>

      <HouseClose
        title="If this is the pressure, start with the situation."
        lede="You do not need a polished brief. A named constraint is enough to begin."
        figure={
          <HousePlate refn="Fig. Z" note="A first move, owned.">
            <DrawSign />
          </HousePlate>
        }
      />
    </HouseShell>
  )
}

/* ---------------- contexts ---------------- */
const contextGroups: { title: string; items: string[] }[] = [
  {
    title: "Pressure",
    items: [
      "Operations under strain",
      "Manual work at volume",
      "Unclear ownership",
      "Parallel digital programmes",
      "A technology decision is due",
    ],
  },
  {
    title: "Landscape",
    items: [
      "Legacy-core estates",
      "Vendor-heavy stacks",
      "Post-merger landscapes",
      "Distributed teams",
      "Growth-stage organisations",
      "Regulated environments",
    ],
  },
  {
    title: "Domain",
    items: [
      "Finance & control",
      "Product & technology",
      "Customer service",
      "Clinical & care",
      "Logistics",
      "Public sector",
      "Professional services",
      "Insurance",
      "Energy",
      "Industrial",
      "Retail",
      "Education",
      "Legal",
      "Property",
    ],
  },
]

export function Languages() {
  const [query, setQuery] = useState("")
  const q = query.trim().toLowerCase()
  const match = (item: string) => !q || item.toLowerCase().includes(q)
  const any = contextGroups.some((g) => g.items.some(match))

  return (
    <HouseShell>
      <HouseHero
        crumbs={[["Home", "/"], ["Contexts", "/languages"]]}
        kicker="Contexts"
        title="Constraint is the landscape."
        lede="We do not sell a sector playbook. We work inside the actual limits — systems, people, risk, and time — whether the organisation is clinical, industrial, public, or still informal."
        primary={{ label: "Who we help", to: "/customers" }}
        secondary={{ label: "Start a conversation", to: "/contact" }}
        tone="field"
        figure={
          <HousePlate refn="Fig. I" note="A field of conditions. They only become a picture at the join.">
            <DrawContexts />
          </HousePlate>
        }
      />

      <HouseChapter
        id="field"
        n="01"
        kicker="The field"
        title="Name the constraint. The sector can wait."
        lede="Filter if you need to. The list is not a menu of offerings. It is a reminder that the method does not change when the letterhead does."
      >
        <label className="house-filter">
          <span>Filter the field</span>
          <input
            type="search"
            value={query}
            placeholder="Try “operations”, “legacy”, “care”"
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <div className="house-contexts">
          {contextGroups.map((group) => {
            const items = group.items.filter(match)
            if (items.length === 0) return null
            return (
              <Reveal as="section" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
        {!any && <p className="about-lede">Nothing in the field matches “{query}”. Try a looser word — or start from the pressure as you currently see it.</p>}
      </HouseChapter>

      <HouseClose
        title="If your context is not named, it is still a situation."
        lede="Bring the constraint. We do not need it to match a heading."
        figure={
          <HousePlate refn="Fig. II" note="The conversation is the first artefact.">
            <DrawSignSmall />
          </HousePlate>
        }
      />
    </HouseShell>
  )
}

/* ---------------- availability ---------------- */
const openSeats: [string, string][] = [
  ["New conversations", "A first reading of a situation under pressure."],
  ["Strategy & problem framing", "What should change, in what order, and why."],
  ["AI & automation reading", "Whether a model is required — or a process is."],
  ["Systems & operations", "The path as done, including unofficial joins."],
  ["Solution architecture", "A shape that can be built under constraint."],
  ["Implementation direction", "Owners, sequence, a first move."],
  ["Insights & writing", "A public position only when it is earned."],
]

export function Status() {
  return (
    <HouseShell>
      <HouseHero
        crumbs={[["Home", "/"], ["Availability", "/status"]]}
        kicker="Availability"
        title="Open to a small number of situations."
        lede="This is not a platform status board. Constrange is a practice. We take on work we can hold — not an unlimited queue of programmes."
        primary={{ label: "Start a conversation", to: "/contact" }}
        secondary={{ label: "How we work", to: "/how-we-work" }}
        tone="slate"
        figure={
          <HousePlate refn="Fig. I" note="Two seats open. One held. Capacity is a design input.">
            <DrawSeatsOpen />
          </HousePlate>
        }
      />

      <HouseChapter
        id="seats"
        n="01"
        kicker="What we are taking"
        title="Open means we can still sit with the work."
        lede="If a line is open, a conversation is possible. If the picture is already full, we will say so rather than staff a situation we cannot hold."
      >
        <ol className="house-ledger">
          {openSeats.map(([name, hint], i) => (
            <Reveal as="li" key={name} delay={i * 40}>
              <b>{String(i + 1).padStart(2, "0")}</b>
              <div>
                <strong>{name}</strong>
                <p>{hint}</p>
              </div>
              <span className="house-open">Open</span>
            </Reveal>
          ))}
        </ol>
      </HouseChapter>

      <HouseClose
        title="If the situation is live, write while it is still unnamed."
        lede="You do not need a polished brief. If we cannot take it, we will say so early."
        figure={
          <HousePlate refn="Fig. II" note="A first move, owned.">
            <DrawSignSmall />
          </HousePlate>
        }
      />
    </HouseShell>
  )
}

/* ---------------- organisations ---------------- */
export function Enterprise() {
  return (
    <HouseShell>
      <HouseHero
        crumbs={[
          ["Home", "/"],
          ["Who we help", "/customers"],
          ["Organisations", "/enterprise"],
        ]}
        kicker="Organisations"
        title="Scale does not create clarity."
        lede="It multiplies options, systems, and the cost of a wrong turn. Constrange helps leadership see the actual problem — and a path operations can absorb."
        primary={{ label: "Start a conversation", to: "/contact" }}
        secondary={{ label: "How we handle information", to: "/security" }}
        tone="ink"
        figure={
          <HousePlate refn="Fig. I" note="Several programmes. One pool of attention. A named problem continues." className="is-wide">
            <DrawOverlap />
          </HousePlate>
        }
      />

      <HouseChapter
        id="looks"
        n="01"
        kicker="What complexity looks like"
        title="The work is not to add another initiative."
        lede="It is to decide which existing ones should continue — and which should stop so a path has a chance."
      >
        <Notes
          items={[
            ["Overlapping programmes", "Several digital efforts, no shared problem, one pool of attention."],
            ["Vendor gravity", "Each supplier has a coherent story. None of them hold your landscape."],
            ["Change load", "The organisation cannot absorb another parallel way of working."],
            ["Legacy as landscape", "The core will not move this year. Design has to respect that."],
            ["Unclear ownership", "Workstreams exist. Names at the joins do not."],
            ["AI as a substitute", "A fluent answer standing in for a decision."],
          ]}
        />
      </HouseChapter>

      <HouseChapter
        id="hold"
        n="02"
        kicker="How we sit with it"
        title="A reading before a programme is funded."
        lede="The method does not change because the organisation is large. The constraint is simply heavier — and the unofficial paths more expensive to ignore."
      >
        <div className="about-split">
          <ProseBlock>
            <p>
              Large organisations are not short of frameworks. They are short of a picture that operations
              will recognise. We start with the join that actually fails, the system that will not move,
              and the team that cannot take another process this quarter.
            </p>
            <p>
              Discretion is part of the work. The landscape stays inside the engagement. There is no
              inherited default stack, and no theatre of transformation that cannot name a first move.
            </p>
          </ProseBlock>
          <HousePlate refn="Fig. II" note="Unofficial paths are part of the landscape.">
            <DrawWorkPath />
          </HousePlate>
        </div>
      </HouseChapter>

      <HouseClose
        title="Bring the real constraint."
        lede="A first conversation is a reading of the situation — not a tour of a platform."
        secondary={{ label: "Who we help", to: "/customers" }}
        figure={
          <HousePlate refn="Fig. III" note="The conversation is the first artefact.">
            <DrawSignSmall />
          </HousePlate>
        }
      />
    </HouseShell>
  )
}

/* ---------------- situation pages ---------------- */
const fieldFromHero: Record<HouseTone, FieldTone> = {
  paper: "slate",
  mist: "slate",
  gold: "clay",
  ink: "fold",
  field: "olive",
  slate: "slate",
  clay: "clay",
}

type SituationView = {
  tone: HouseTone
  kicker: string
  title: string
  lede: string
  heroNote: string
  hero: ReactNode
  chapterTitle: string
  chapterLede: string
  body: string[]
  notes: [string, string][]
  fieldTitle: string
  fieldLede: string
  wide?: boolean
}

const situationView: Record<string, SituationView> = {
  operations: {
    tone: "slate",
    kicker: "Operations",
    title: "Start with the work, not the tool.",
    lede: "When the work has outgrown the way it is organised, tools keep arriving faster than the process can absorb them. The unofficial path becomes the real one.",
    heroNote: "As drawn, and as done. The join is the work.",
    hero: <DrawWorkPath />,
    wide: true,
    chapterTitle: "The unofficial path is not a footnote.",
    chapterLede: "Operations feel the cost of complexity first. A new system, introduced without a reading of the work, usually adds another place to look.",
    body: [
      "We map how work actually moves — including the spreadsheet that is the real system of record, and the person who is asked because the official owner is too slow.",
      "Then we find the few constraints that create most of the delay. Often the problem is a join, not a missing platform. Buying a layer that hides the gap makes Friday afternoon harder.",
      "The useful output is a sequence operations can run: owners at the joins, a first slice that does not require the estate to move, and a clear account of what will stop.",
    ],
    notes: [
      ["Start from", "The work as it is done"],
      ["Typical pressure", "Delay, rework, silent workarounds"],
      ["Usual mistake", "Buying a system for a process problem"],
      ["Useful output", "A path with owners at the joins"],
    ],
    fieldTitle: "A path they can staff.",
    fieldLede: "Not a catalogue of initiatives. A designed way of working that is easier than the workaround.",
  },
  "customer-experience": {
    tone: "mist",
    kicker: "Customer & service",
    title: "The join is the product.",
    lede: "Service quality depends on several teams, several systems, and a customer who should not have to know any of that. A fluent front end on a broken path is still a broken path.",
    heroNote: "Context drops where the organisation hands over.",
    hero: <DrawJourney />,
    wide: true,
    chapterTitle: "Customers experience the joins you cannot see.",
    chapterLede: "Three teams, two systems, one person who has to repeat themselves. A chatbot on top of that structure makes the organisation sound fluent and remain incoherent.",
    body: [
      "We see the journey as a system, including the back-office joins. The damage is rarely in the channel. It is in the handshake: lost context, contradictory answers, re-entry.",
      "Automation helps where the intent is stable and the facts are present. Where judgement under exception is the work, a person still needs an owned path — not a layer that hides the missing fact.",
      "The design has to be staffable. An experience that operations cannot run will recreate the unofficial path by next quarter.",
    ],
    notes: [
      ["Start from", "The journey including back-office joins"],
      ["Typical pressure", "Lost context, contradictory answers"],
      ["Usual mistake", "A front-end layer on a broken path"],
      ["Useful output", "Fewer handoffs that drop meaning"],
    ],
    fieldTitle: "Fewer handoffs that drop meaning.",
    fieldLede: "The customer should not have to assemble the organisation.",
  },
  "technology-leaders": {
    tone: "ink",
    kicker: "Technology leaders",
    title: "Choose the problem first.",
    lede: "The organisation expects a technology answer. The harder work is choosing which problem is worth solving — and which fashionable stack should wait.",
    heroNote: "What is asked for, and what continues.",
    hero: <DrawChoice />,
    wide: true,
    chapterTitle: "A stack is a way to end the conversation too early.",
    chapterLede: "Vendors arrive with architectures. Internal teams arrive with preferences. The scarce skill is holding the landscape still long enough to choose.",
    body: [
      "We separate architecture decisions from fashion. Build, buy, and wait are explicit options — including the option that the process is the product.",
      "Vendors and internal teams are held to the same problem statement. If the statement is missing, the shortlist is only a catalogue.",
      "The output is a sequence leadership can fund: consequences named, non-goals written, a first slice that does not require a new operating model on day one.",
    ],
    notes: [
      ["Start from", "The decision that is actually being asked"],
      ["Typical pressure", "Time, vendors, competing architectures"],
      ["Usual mistake", "Selecting a stack to end the conversation"],
      ["Useful output", "Options with consequences, then a path"],
    ],
    fieldTitle: "An inspectable choice.",
    fieldLede: "Not a replacement for the architecture function. A picture it can stand behind.",
  },
  growth: {
    tone: "gold",
    kicker: "Growing teams",
    title: "Structure without freezing the wrong habits.",
    lede: "Informal coordination is failing. The next system will either create enough order to keep moving — or freeze habits that should still be allowed to change.",
    heroNote: "A wandering path, then enough structure to continue.",
    hero: <DrawInformal />,
    wide: true,
    chapterTitle: "Too much system, too early, is its own constraint.",
    chapterLede: "Growing organisations outgrow chat and spreadsheets. They do not yet need an estate built for a different scale.",
    body: [
      "We name the processes that now need structure — usually a handful of joins, not a full operating model. The rest can stay light.",
      "Enterprise complexity bought too early becomes a second unofficial path: people route around the tool that was meant to help.",
      "The useful output is a light spine: the few systems that matter, connected; room for the operating model to keep changing; a first move the current team can actually run.",
    ],
    notes: [
      ["Start from", "What now fails because it is informal"],
      ["Typical pressure", "Volume, new roles, first serious tools"],
      ["Usual mistake", "Buying enterprise complexity too early"],
      ["Useful output", "A light structure that can still flex"],
    ],
    fieldTitle: "Enough order to keep moving.",
    fieldLede: "If informal coordination is already failing, it is the right time — and the wrong time to over-build.",
  },
  regulated: {
    tone: "clay",
    kicker: "Regulated environments",
    title: "Caution is a design input.",
    lede: "A wrong step is expensive. Technology cannot be introduced as an experiment on live operations. Constraint and compliance belong in the first picture, not as a later review.",
    heroNote: "Contained steps, reversible, inside live operations.",
    hero: <DrawCaution />,
    chapterTitle: "An experiment on live work is not a strategy.",
    chapterLede: "High-stakes settings need paths that can be explained later — and stopped if they fail.",
    body: [
      "We treat constraint and compliance as part of the design. Automation is used conservatively. Where a competent person would still be slow with complete inputs, capacity or rules may be the issue — not a model.",
      "An audit trail of why a path was chosen is part of the artefact. Fluency is not enough when the cost of being wrong is operational, legal, or human.",
      "We move in contained steps that operations can reverse. If a slice cannot fail safely, it is not yet a first move.",
    ],
    notes: [
      ["Start from", "The obligation and the live operation together"],
      ["Typical pressure", "Risk, evidence, irreversible change"],
      ["Usual mistake", "A pilot that cannot be unwound"],
      ["Useful output", "A cautious sequence with a written why"],
    ],
    fieldTitle: "A path you can defend.",
    fieldLede: "Not theatre. A sequence that operations can reverse if the first step teaches you something.",
  },
}

export function SolutionPage() {
  const { slug } = useParams()
  const solution = solutionBySlug(slug)
  const view = slug ? situationView[slug] : undefined
  const content = slug ? solutionContent[slug] : undefined

  if (!solution || !view) {
    return (
      <HouseShell>
        <HouseHero
          crumbs={[["Home", "/"], ["Who we help", "/customers"]]}
          kicker="Who we help"
          title="That situation is not on this site."
          lede="See who we sit with, or start from the pressure as you currently see it."
          primary={{ label: "Who we help", to: "/customers" }}
          secondary={{ label: "Start a conversation", to: "/contact" }}
        />
      </HouseShell>
    )
  }

  const others = solutions.filter((s) => s.slug !== solution.slug)

  return (
    <HouseShell>
      <HouseHero
        crumbs={[
          ["Home", "/"],
          ["Who we help", "/customers"],
          [view.kicker, `/solutions/${solution.slug}`],
        ]}
        kicker={view.kicker}
        title={view.title}
        lede={view.lede}
        tone={view.tone}
        figure={
          <HousePlate refn="Fig. I" note={view.heroNote} className={view.wide ? "is-wide" : ""}>
            {view.hero}
          </HousePlate>
        }
      />

      <HouseChapter id="picture" n="01" kicker="The picture" title={view.chapterTitle} lede={view.chapterLede}>
        {view.wide === false || view.hero ? (
          <ProseBlock>
            {view.body.map((p) => (
              <p key={p.slice(0, 36)}>{p}</p>
            ))}
          </ProseBlock>
        ) : null}
        <Notes items={view.notes} />
      </HouseChapter>

      <HouseField n="02" kicker="What continues" title={view.fieldTitle} lede={view.fieldLede} tone={fieldFromHero[view.tone]}>
        <ul className="house-field-list">
          {solution.points.map((point) => (
            <Reveal as="li" key={point}>
              {point}
            </Reveal>
          ))}
        </ul>
      </HouseField>

      <HouseChapter
        id="also"
        n="03"
        kicker="Adjacent situations"
        title="The method is the same. The constraint is not."
      >
        <div className="house-sibs">
          {others.map((s) => (
            <Link to={`/solutions/${s.slug}`} key={s.slug}>
              <strong>{situationView[s.slug]?.kicker ?? s.name}</strong>
              <span>{s.blurb}</span>
            </Link>
          ))}
        </div>
        {solution.stack.length > 0 && (
          <>
            <p className="about-kicker" style={{ marginTop: 36 }}>
              Work that often applies
            </p>
            <div className="house-sibs">
              {solution.stack.map((label) => {
                const p = productFromLabel(label)
                if (!p) return null
                return (
                  <Link to={`/products/${p.slug}`} key={p.slug}>
                    <strong>{p.short}</strong>
                    <span>{p.blurb}</span>
                  </Link>
                )
              })}
            </div>
          </>
        )}
        {content && (
          <div className="house-faq">
            <FaqList items={content.faqs} title="Questions we are asked" />
          </div>
        )}
      </HouseChapter>

      <HouseClose
        title="Bring the constraint as it currently stands."
        lede="We will help you find the problem underneath — and whether technology should wait."
        primary={
          solution.slug === "growth"
            ? { label: "Start a conversation", to: "/contact/startup-program" }
            : { label: "Start a conversation", to: "/contact" }
        }
        secondary={{ label: "Who we help", to: "/customers" }}
        figure={
          <HousePlate refn="Fig. Z" note="The conversation is the first artefact.">
            <DrawSignSmall />
          </HousePlate>
        }
      />
    </HouseShell>
  )
}
