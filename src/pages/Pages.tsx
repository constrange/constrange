import { useState } from "react"
import { Callout, PageHero, Section } from "@/components/site/Blocks"
import { Reveal } from "@/components/site/Layout"
import { PostCard } from "@/components/site/PostCard"
import { posts } from "@/blog-content"
import { changelog, codeSamples } from "@/site-data"

export { Enterprise, ResearchDetail, ResearchOverview, SolutionPage, Status } from "@/pages/HousePages"


export function Docs({ variant = "docs" }: { variant?: "docs" | "reference" | "guides" }) {
  const [lang, setLang] = useState<keyof typeof codeSamples>("brief")

  const copy = {
    docs: {
      title: "How we work",
      blurb: "Understand, define, explore, structure, move. A method meant to produce a first action, not a longer catalogue.",
    },
    reference: {
      title: "What each stage produces",
      blurb: "The artefacts we actually leave behind — inspectable enough to challenge, brief enough to use.",
    },
    guides: {
      title: "Working notes",
      blurb: "The shape of a brief, a map, a sequence, and a constraint log.",
    },
  }[variant]

  const endpoints: [string, string, string][] = [
    ["01", "Understand", "Situation reading: work, systems, people, constraints"],
    ["02", "Define", "Problem statement, non-goals, what would count as better"],
    ["03", "Explore", "Options compared on fit and risk, including doing less"],
    ["04", "Structure", "Architecture, owners, sequence"],
    ["05", "Move", "First actions and a review rhythm"],
    ["—", "Hold", "Context and judgement through the work, not only at the start"],
  ]

  return (
    <>
      <PageHero
        crumbs={[["Home", "/"], ["How we work", "/how-we-work"]]}
        eyebrow="Method"
        title={copy.title}
        blurb={copy.blurb}
        primary={{ label: "Start a conversation", to: "/contact" }}
        secondary={{ label: "Blog", to: "/blog" }}
      />

      <Section title="A working note" blurb="The same situation, held four ways. None of them is a default stack.">
        <div className="lang-tabs">
          {(Object.keys(codeSamples) as (keyof typeof codeSamples)[]).map((key) => (
            <button key={key} className={lang === key ? "active" : ""} onClick={() => setLang(key)}>
              {key}
            </button>
          ))}
        </div>
        <Reveal className="terminal">
          <div className="terminal-bar">
            <i />
            <i />
            <i />
          </div>
          <pre>{codeSamples[lang]}</pre>
        </Reveal>
      </Section>

      <Section title="The stages">
        <Reveal className="table-scroll">
          <table className="rate-table">
            <caption>constrange.com / method</caption>
            <thead>
              <tr>
                <th>Stage</th>
                <th>Name</th>
                <th>What it produces</th>
              </tr>
            </thead>
            <tbody>
              {endpoints.map(([method, path, desc]) => (
                <tr key={path + method}>
                  <td className="price">{method}</td>
                  <td style={{ fontFamily: "var(--mono)", fontSize: 12 }}>{path}</td>
                  <td>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <Callout
          title="The method is only useful in a real situation"
          blurb="If something is under pressure and the next move is unclear, start there."
          to="/contact"
          label="Start a conversation"
        />
      </Section>
    </>
  )
}

export function Blog() {
  const [tag, setTag] = useState("All")
  const tags = ["All", ...Array.from(new Set(posts.map((a) => a.category)))]
  const shown = tag === "All" ? posts : posts.filter((a) => a.category === tag)
  const [featured, ...rest] = shown

  return (
    <>
      <PageHero
        crumbs={[["Home", "/"], ["Blog", "/blog"]]}
        eyebrow="Blog"
        title="Writing from the work"
        blurb="Notes on judgement, constraint, and why more options do not automatically create a clearer path."
        primary={null}
        secondary={null}
      />
      <Section>
        <div className="lang-tabs">
          {tags.map((t) => (
            <button key={t} className={tag === t ? "active" : ""} onClick={() => setTag(t)}>
              {t}
            </button>
          ))}
        </div>

        {featured && (
          <Reveal>
            <PostCard post={featured} featured />
          </Reveal>
        )}

        <div className="blog-grid">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 2) * 80}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}

export function Changelog() {
  return (
    <>
      <PageHero
        crumbs={[["Home", "/"], ["How we work", "/how-we-work"]]}
        eyebrow="Practice"
        title="Practice notes"
        blurb="How the method has been sharpened. Newest first."
        primary={null}
        secondary={null}
      />
      <Section>
        {changelog.map(([date, area, note], i) => (
          <Reveal className="article-row" key={date + note} delay={i * 60}>
            <time>{date}</time>
            <div>
              <h3>{note}</h3>
            </div>
            <span className="tag">{area}</span>
          </Reveal>
        ))}
      </Section>
    </>
  )
}

export function Newsroom() {
  return (
    <>
      <PageHero
        crumbs={[["Home", "/"], ["Company", "/about"]]}
        eyebrow="Company"
        title="Notes"
        blurb="Company writing and the occasional public position."
        primary={{ label: "Media kit", to: "/media" }}
        secondary={{ label: "Contact", to: "/contact" }}
      />
      <Section>
        {[
          ["2026-09-02", "Writing", "Blog opened with a note on judgement versus information"],
          ["2026-04-02", "Practice", "Implementation path treated as a first-class artefact"],
          ["2025-12-11", "Company", "Constrange established around structured problem solving under constraint"],
        ].map(([date, tag, title], i) => (
          <Reveal className="article-row" key={title} delay={i * 70}>
            <time>{date}</time>
            <div>
              <h3>{title}</h3>
            </div>
            <span className="tag">{tag}</span>
          </Reveal>
        ))}
      </Section>
    </>
  )
}


export function Playground() {
  const [live, setLive] = useState(false)
  const [model, setModel] = useState("Operations under strain")
  const [diarize, setDiarize] = useState(true)
  const [redact, setRedact] = useState(false)

  const transcript = redact
    ? "Intake is incomplete. The unofficial path is a spreadsheet. A copilot would hide the gap, not close it."
    : "Intake is incomplete. The unofficial path is a spreadsheet. Leadership wants a platform this quarter."

  return (
    <>
      <PageHero
        crumbs={[["Home", "/"], ["Diagnostic", "/playground"]]}
        eyebrow="Diagnostic"
        title="A first reading, not a demo"
        blurb="Pick a pressure, toggle whether the process or the tool is in view, and see the kind of structured note we would start from."
        primary={null}
        secondary={null}
      />
      <Section>
        <div className="estimator">
          <Reveal>
            <label className="field">
              <span>Pressure</span>
              <select value={model} onChange={(e) => setModel(e.target.value)}>
                <option>Operations under strain</option>
                <option>A technology decision is due</option>
                <option>An AI idea without a problem</option>
              </select>
            </label>
            <div className="field">
              <span>Hold in view</span>
              <div className="lang-tabs">
                <button className={diarize ? "active" : ""} aria-pressed={diarize} onClick={() => setDiarize(!diarize)}>
                  Owners at the joins
                </button>
                <button className={redact ? "active" : ""} aria-pressed={redact} onClick={() => setRedact(!redact)}>
                  Hide the unofficial path
                </button>
              </div>
            </div>
            <button className={live ? "btn btn-lime" : "btn"} onClick={() => setLive(!live)}>
              {live ? "Clear reading" : "Read the situation"}
            </button>
          </Reveal>

          <Reveal delay={110}>
            <div className="tile">
              <span className="tile-num">{model}</span>
              <p style={{ marginTop: 8 }}>
                {live
                  ? diarize
                    ? `${transcript} Owner: unnamed.`
                    : transcript
                  : "Press read to see a structured note."}
              </p>
            </div>
          </Reveal>
        </div>
        <Callout
          title="The real situation will not fit a sample"
          blurb="If this is close to the pressure you are under, a conversation is the next artefact."
          to="/contact"
          label="Start a conversation"
        />
      </Section>
    </>
  )
}

