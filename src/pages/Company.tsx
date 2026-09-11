import { useEffect, useState, type ReactNode } from "react"
import { Link } from "react-router-dom"
import {
  AboutPlate,
  DrawAtmosphere,
  DrawHeld,
  DrawName,
  DrawNot,
  DrawRangeField,
  DrawSign,
  DrawUnofficial,
} from "@/components/site/AboutDraw"
import { legalByKind, legalNav, type LegalKind } from "@/legal-content"
import { Callout, PageHero, Section } from "@/components/site/Blocks"
import { BrandMark } from "@/components/site/BrandMark"
import {
  HouseChapter,
  HouseClose,
  HouseField,
  HouseHero,
  HousePlate,
  HouseShell,
} from "@/components/site/House"
import { DrawDraft, DrawHire } from "@/components/site/HouseDraw"
import { CalInlineEmbed } from "@/components/site/CalEmbed"
import { Reveal } from "@/components/site/Layout"

/* ---------------- about ---------------- */
function AboutChapter({
  id,
  n,
  kicker,
  title,
  lede,
  children,
}: {
  id: string
  n: string
  kicker: string
  title: string
  lede: string
  children?: ReactNode
}) {
  return (
    <section id={id} className="about-chapter">
      <div className="about-inner">
        <Reveal>
          <p className="about-kicker">
            <b>{n}</b> {kicker}
          </p>
          <h2>{title}</h2>
          <p className="about-lede">{lede}</p>
        </Reveal>
        {children}
      </div>
    </section>
  )
}

export function About() {
  useEffect(() => {
    document.body.classList.add("on-about")
    return () => document.body.classList.remove("on-about")
  }, [])

  return (
    <article className="about">
      <header className="about-hero">
        <span className="about-hero-grain" aria-hidden />
        <span className="about-hero-wash" aria-hidden />
        <div className="about-hero-inner">
          <div className="about-hero-copy">
            <p className="about-crumbs">
              <Link to="/">Home</Link>
              <i>/</i>
              <span>About</span>
            </p>
            <span className="about-kicker">Practice</span>
            <h1>The name is the work.</h1>
            <p className="about-lede">
              Constrange is a technology and business consultancy. We help organisations decide under
              constraint, complexity, change, and uncertainty — then turn that decision into a path
              operations can actually absorb.
            </p>
            <div className="about-actions">
              <Link className="btn" to="/contact">
                Start a conversation
              </Link>
              <Link className="btn btn-ghost" to="/how-we-work">
                How we work
              </Link>
            </div>
          </div>
          <AboutPlate refn="Fig. A" note="A field of options. A bar. One path continues." className="about-hero-plate">
            <DrawRangeField />
          </AboutPlate>
        </div>
      </header>

      <section className="about-founder" id="founder">
        <div className="about-inner">
          <Reveal className="about-founder-grid">
            <figure className="about-founder-photo">
              <img
                src="/about/deepak-patil.jpg"
                alt="Deepak Patil, founder of Constrange"
                width={804}
                height={1024}
                loading="eager"
                decoding="async"
              />
            </figure>
            <div className="about-founder-copy">
              <span className="about-kicker">Founder</span>
              <h2>Deepak Patil</h2>
              <div className="about-founder-body">
                <p>I run Constrange.</p>
                <p>
                  Most organisations do not fail because they lack technology. They fail because they commit
                  before the problem is clear.
                </p>
                <p>
                  We fix that. We read the actual situation — systems, people, constraints — and say what to
                  do. Build. Buy. Automate. Or leave it alone. One recommendation, with reasons you can
                  defend.
                </p>
                <p>No theatre. No endless options. Just a clear call when the evidence supports it.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <AboutChapter
        id="name"
        n="01"
        kicker="The name"
        title="Constraint is not a limit we regret. It is the thing that makes a decision possible."
        lede="Constrange is constraint and range held in one word. The range is everything that could be done. The constraint is what makes most of it irrelevant. The work is to see both clearly enough that a path can be chosen."
      >
        <div className="about-split">
          <AboutPlate refn="Fig. B" note="Range held open. The bar is the decision.">
            <DrawName />
          </AboutPlate>
          <Reveal className="about-prose">
            <p>
              Most organisations do not lack ideas. They lack a picture of the situation that is honest
              enough to rank those ideas. Tools arrive as catalogues. Programmes arrive as ambition.
              Meanwhile the actual work continues through unofficial paths, tired joins, and systems that
              will not move this year.
            </p>
            <p>
              The name is a reminder we keep in view. A constraint that is unnamed still governs the work —
              it just governs it badly. A range that is unbounded is not freedom. It is noise. We name the
              constraint so the range can be used.
            </p>
            <p>
              The mark follows the same logic: a ribbon that opens like a C, held by a bar. The ribbon is
              range. The bar is constraint. We do not decorate the work with it. We let it sit quietly, the
              way a good decision sits — visible, not loud.
            </p>
          </Reveal>
        </div>
      </AboutChapter>

      <AboutChapter
        id="why"
        n="02"
        kicker="Why this firm exists"
        title="Complexity without a named problem is expensive."
        lede="Constrange exists for the gap between a fluent answer and a decision that can live among real systems, real people, and a constraint that will not move."
      >
        <AboutPlate refn="Fig. C" note="The process as drawn, and the process as done." className="is-wide">
          <DrawUnofficial />
        </AboutPlate>
        <div className="about-prose about-prose-wide">
          <p>
            Leadership is not short of information. It is short of judgement that has been held against the
            operating landscape. A model can list options. A vendor can narrate a future. Neither has sat
            with the unofficial process, the join that fails, or the team that cannot absorb another change
            this quarter.
          </p>
          <p>
            We started the practice because that gap kept repeating. A platform is selected before the
            problem is named. An AI programme is funded because the category is fashionable. A
            transformation is announced, then spends a year searching for a use that will justify it. The
            organisation is not careless. It is overloaded. Possibility has outrun structure.
          </p>
          <p>
            Constrange’s job is to restore the sequence: understand the situation, define the problem,
            then look at technology — including the option that no new technology is required. We are not
            here to query a model on your behalf. We are here to tell when the answer belongs to a
            different organisation. And when the same expensive constraint keeps appearing, and existing
            tools do not hold it, we may turn the solution into software. That is not how we start a
            conversation.
          </p>
        </div>
      </AboutChapter>

      <AboutChapter
        id="think"
        n="03"
        kicker="How we think"
        title="Hold the picture. Reduce the options. Leave a first move."
        lede="The method lives on its own page. What belongs here is the stance: context before tools, structure over catalogues, action as the last artefact."
      >
        <div className="about-split">
          <Reveal className="about-prose">
            <p>
              We do not begin with a stack. We begin with the pressure as it actually is — work, systems,
              people, risk, and time, including the unofficial paths that keep the organisation running.
              Until those threads are in the same picture, more options only add noise.
            </p>
            <p>
              Clarity is a reduction. It is a ranking made under constraint, with non-goals written down.
              A longer comparison sheet is not progress if every idea remains live. The useful question is
              not “what else could we do?” It is “what makes most of the other ideas irrelevant?”
            </p>
            <p>
              A point of view is unfinished until it has an owner and a first move small enough to be real.
              Direction is always in scope. Build can sit with your team, a partner, or a mix. Either way
              the path has to be buildable.
            </p>
            <p>
              <Link className="arrow-link" to="/how-we-work">
                Read the method <i>→</i>
              </Link>
            </p>
          </Reveal>
          <AboutPlate refn="Fig. D" note="Five threads. They only become a picture at the join.">
            <DrawHeld />
          </AboutPlate>
        </div>
        <ul className="about-stances">
          {[
            ["Context", "A generic answer does not know your systems, your unofficial processes, or the cost of a wrong turn."],
            ["Reduction", "More options do not create clarity. A ranked path, with non-goals, does."],
            ["Action", "The last artefact is not a recommendation. It is a first move with a name next to it."],
          ].map(([title, body], i) => (
            <Reveal as="li" key={title} delay={i * 80}>
              <b>0{i + 1}</b>
              <strong>{title}</strong>
              <p>{body}</p>
            </Reveal>
          ))}
        </ul>
      </AboutChapter>

      <AboutChapter
        id="not"
        n="04"
        kicker="What we are not"
        title="A practice, not a playbook. Software when the problem has earned it."
        lede="Saying what Constrange is requires saying what it is not. The distinction is not branding. It is how we refuse to work — including when we build software."
      >
        <AboutPlate refn="Fig. E" note="The catalogue stops at the bar. A situation continues." className="is-wide">
          <DrawNot />
        </AboutPlate>
        <ul className="about-not">
          {[
            ["Not an AI agency", "We use models when they fit the problem. We do not sell a default intelligence layer, and we do not treat fluency as a decision."],
            ["Not a software-first vendor", "We do not arrive with a platform looking for a problem to justify it. We start with the operating problem, the constraints around it, and the outcome that matters. When software is the right answer, we build or introduce only what earns its place in the system."],
            ["Not a body shop", "We do not place anonymous capacity against an unnamed brief. The work is a held picture, then a path — not extra hands for a programme that has not been defined."],
            ["Not a sector playbook", "Constraint is the landscape. We do not arrive with a template for your industry and a slide that already knows the answer."],
          ].map(([title, body], i) => (
            <Reveal as="li" key={title} delay={i * 70}>
              <h3>{title}</h3>
              <p>{body}</p>
            </Reveal>
          ))}
        </ul>
      </AboutChapter>

      <AboutChapter
        id="deliver"
        n="05"
        kicker="How the work is delivered"
        title="Understand the system. Find the constraint. Change what matters."
        lede="The sequence does not change with the artefact. Consultancy, process change, automation, or software — each is a way the same reading can become action. None of them is assumed in advance."
      >
        <ul className="about-not">
          <Reveal as="li">
            <h3>Advisory</h3>
            <p>
              We work directly with an organisation. Situation, constraints, system, intervention, outcome.
              Sometimes the answer is not to buy anything. Sometimes it is to change a process, automate a
              join, or replace a system. Sometimes there is no technology problem at all.
            </p>
          </Reveal>
          <Reveal as="li" delay={70}>
            <h3>Products</h3>
            <p>
              When a problem is recurring, important, and existing tools do not hold it, we may productize
              the answer. That software is the technology expression of the practice, not a second identity.
            </p>
          </Reveal>
        </ul>
      </AboutChapter>

      <section className="about-field field-tone-indigo" id="field">
        <span className="about-field-grain" aria-hidden />
        <div className="about-inner">
          <Reveal>
            <p className="about-kicker light">
              <b>06</b> Brand language
            </p>
            <h2>A field, a bar, a path.</h2>
            <p className="about-lede light">
              The illustrations on this page are Constrange’s own geometry — grain for the noise of
              options, a bar for the constraint that holds them, a continuing line for the decision.
              They are not decoration borrowed from a product company. They are how we picture the work.
            </p>
          </Reveal>
          <div className="about-field-grid">
            <AboutPlate refn="Fig. F" note="The field mark. Range nested. Constraint in the opening." className="on-ink">
              <DrawAtmosphere />
            </AboutPlate>
            <div className="about-field-notes">
              {[
                ["Grain", "The unofficial, the incomplete, the catalogue that will not rank itself."],
                ["The bar", "A named constraint. Without it, the range is only noise."],
                ["The path", "What continues after the reduction — owned, small enough to start."],
              ].map(([title, body], i) => (
                <Reveal key={title} delay={i * 90}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </Reveal>
              ))}
              <Link className="arrow-link light" to="/media">
                Media kit <i>→</i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about-close">
        <div className="about-inner about-close-grid">
          <AboutPlate refn="Fig. G" note="The conversation is the first artefact.">
            <DrawSign />
          </AboutPlate>
          <Reveal>
            <p className="about-kicker">A conversation</p>
            <h2>Bring the pressure as you currently see it.</h2>
            <p className="about-lede">
              You do not need a polished brief. If the next move is unclear, that is enough to start.
              We will help you find the problem underneath — and whether technology should wait.
            </p>
            <div className="about-actions">
              <Link className="btn" to="/contact">
                Start a conversation
              </Link>
              <Link className="btn btn-ghost" to="/customers">
                Who this is for
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  )
}

/* ---------------- security ---------------- */
export function Security() {
  return <Legal kind="handling" />
}

/* ---------------- careers ---------------- */
export function Careers() {
  return (
    <HouseShell>
      <HouseHero
        crumbs={[
          ["Home", "/"],
          ["Company", "/about"],
          ["Careers", "/careers"],
        ]}
        kicker="Careers"
        title="We hire against a named need."
        lede="Small practice, direct ownership, and writing that has to survive contact with a real operating landscape. There are no open roles on this site."
        primary={{ label: "About Constrange", to: "/about" }}
        secondary={{ label: "How we work", to: "/how-we-work" }}
        tone="mist"
        figure={
          <HousePlate refn="Fig. I" note="No catalogue of vacancies. A named need, or nothing." className="about-hero-plate">
            <DrawHire />
          </HousePlate>
        }
      />

      <HouseChapter
        id="ledger"
        n="01"
        kicker="Open roles"
        title="Nothing listed just now."
        lede="We do not keep a public pipeline of jobs to look busy. When a need is named, it will appear here. Until then, the honest page is an empty ledger."
      >
        <ol className="house-ledger">
          <Reveal as="li">
            <b>—</b>
            <div>
              <strong>No role is open</strong>
              <p>
                There is no application form hiding behind a closed listing. If the work described on
                this site is the kind of work you want to do, a short note on a situation you have held
                is enough to start — not a polished CV as a product.
              </p>
            </div>
            <span className="house-closed">Closed</span>
          </Reveal>
        </ol>
      </HouseChapter>

      <HouseChapter
        id="work"
        n="02"
        kicker="The work"
        title="Hold a situation. Write so operations can use it."
        lede="The practice is small on purpose. Anyone who joins it has to sit with unofficial paths, contested pictures, and the cost of a wrong turn — then leave a first move that can be owned."
      >
        <ul className="about-stances">
          {[
            ["A situation, held", "Not a catalogue of services. A reading that can be challenged."],
            ["Writing that survives", "A point of view that cannot survive contact with operations is not finished."],
            ["Named ownership", "Small enough that the people on the work are the people who saw it."],
            ["No inherited playbook", "If a template would have been enough, we would not have taken the work."],
          ].map(([title, body], i) => (
            <Reveal as="li" key={title} delay={i * 70}>
              <b>{String(i + 1).padStart(2, "0")}</b>
              <strong>{title}</strong>
              <p>{body}</p>
            </Reveal>
          ))}
        </ul>
      </HouseChapter>

      <HouseField
        n="03"
        kicker="How to write"
        title="A situation you have held is the artefact."
        lede="Not a cover letter that could belong to anyone. Name the pressure, the constraint, and what you did when the picture was still unofficial."
        tone="clay"
      >
        <ul className="house-field-list">
          <li>Use the contact page to book a first conversation or share context before you book.</li>
          <li>If we are already in conversation, send the note to the address we have been using.</li>
          <li>We will not invent a role to match a strong letter. If there is no named need, we will say so.</li>
        </ul>
      </HouseField>

      <HouseClose
        title="If the work here is the work you want to do."
        lede="Draft the situation. If a need is named later, we will know how you hold one."
        primary={{ label: "Draft a note", to: "/contact" }}
        secondary={{ label: "About Constrange", to: "/about" }}
        figure={
          <HousePlate refn="Fig. II" note="A first conversation, booked on the calendar.">
            <DrawDraft />
          </HousePlate>
        }
      />
    </HouseShell>
  )
}

/* ---------------- languages ---------------- */
export { Languages } from "@/pages/HousePages"

/* ---------------- contact forms ---------------- */
const contactNav: { variant: ContactVariant; label: string; to: string }[] = [
  { variant: "general", label: "A first conversation", to: "/contact" },
  { variant: "sales", label: "A diagnostic", to: "/contact/sales" },
  { variant: "support", label: "Continue the work", to: "/contact/support" },
  { variant: "startups", label: "Growing teams", to: "/contact/startup-program" },
]

type ContactVariant = "general" | "sales" | "support" | "startups"

const contactCopy: Record<
  ContactVariant,
  {
    kicker: string
    title: string
    lede: string
    tone: "clay" | "ink" | "mist" | "gold"
    note: string
  }
> = {
  general: {
    kicker: "Contact",
    title: "Bring the pressure as it currently is.",
    lede: "You do not need a polished brief. We will say whether we can hold it — and if we cannot.",
    tone: "clay",
    note: "A first reading of a situation under pressure. Unofficial is enough.",
  },
  sales: {
    kicker: "A diagnostic",
    title: "For a decision that is already due.",
    lede: "A contained reading, a leadership choice, or a path into implementation. Still a conversation first.",
    tone: "ink",
    note: "When a technology, programme, or vendor choice is being asked for before the problem is named.",
  },
  support: {
    kicker: "Continue",
    title: "If we are already in the work.",
    lede: "Use the channel we have already opened. If you need to book a follow-up conversation, choose a time below.",
    tone: "mist",
    note: "This page does not open a ticket. Live work already has an address.",
  },
  startups: {
    kicker: "Growing teams",
    title: "Informal coordination is failing.",
    lede: "The next system will either create enough order to keep moving — or freeze habits that should still be allowed to change.",
    tone: "gold",
    note: "When the unofficial path is still the real one, and a tool is being asked to replace it.",
  },
}

export function Contact({ variant = "general" }: { variant?: ContactVariant }) {
  const copy = contactCopy[variant]

  return (
    <HouseShell>
      <HouseHero
        crumbs={
          variant === "general"
            ? [["Home", "/"], ["Contact", "/contact"]]
            : [
                ["Home", "/"],
                ["Contact", "/contact"],
                [copy.kicker, contactNav.find((item) => item.variant === variant)?.to ?? "/contact"],
              ]
        }
        kicker={copy.kicker}
        title={copy.title}
        lede={copy.lede}
        primary={null}
        secondary={{ label: "How we work", to: "/how-we-work" }}
        tone={copy.tone}
        figure={
          <HousePlate refn="Fig. I" note="A first conversation, booked on the calendar." className="about-hero-plate">
            <DrawDraft />
          </HousePlate>
        }
      />

      <section className="house-strip">
        <div className="about-inner">
          <p className="legal-updated">{copy.note}</p>
          <nav className="house-switch" aria-label="Kinds of conversation">
            {contactNav.map((item) => (
              <Link
                key={item.variant}
                to={item.to}
                className={item.variant === variant ? "is-on" : undefined}
                aria-current={item.variant === variant ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <HouseChapter
        id="book-calendar"
        n="01"
        kicker="Book"
        title="Choose a time for a first conversation."
        lede="Pick a slot below. Cal.com will collect your details, send a calendar invite, and any reminders for the booking."
      >
        <div className="house-contact house-contact-booking">
          <CalInlineEmbed />
          <aside className="house-aside">
            <p className="about-kicker">What happens next</p>
            <ul className="house-points">
              <li>You choose a time that works. The booking is confirmed by Cal.com.</li>
              <li>Add context in the booking notes if useful — unofficial is enough.</li>
              <li>It is not a mailing list. There is no automated nurture attached to booking.</li>
              {variant === "support" && (
                <li>If we are already in an engagement, use the channel already open — not a new public booking.</li>
              )}
              {variant === "startups" && (
                <li>
                  Growing teams is a situation, not a programme. Read{" "}
                  <Link to="/solutions/growth">how we sit with that pressure</Link>.
                </li>
              )}
            </ul>
            <p className="form-note">
              See the <Link to="/legal/privacy-policy">Privacy policy</Link>
              {" · "}
              <Link to="/security">Information handling</Link>.
            </p>
          </aside>
        </div>
      </HouseChapter>

      <HouseChapter
        id="after"
        n="02"
        kicker="After a conversation"
        title="A signed letter governs live work."
        lede="Until then, a conversation is only a conversation. We will say if we cannot hold the situation rather than staff one we cannot sit with."
      >
        <ul className="about-stances">
          {[
            ["Unnamed is enough", "You do not need a brief that already knows the answer."],
            ["We will say no", "Capacity is a design input. An unlimited queue is not the practice."],
            ["Working material stays held", "What you share is not content. See Information handling."],
          ].map(([title, body], i) => (
            <Reveal as="li" key={title} delay={i * 70}>
              <b>{String(i + 1).padStart(2, "0")}</b>
              <strong>{title}</strong>
              <p>{body}</p>
            </Reveal>
          ))}
        </ul>
      </HouseChapter>

      <HouseClose
        title="If the next move is still unclear, that is enough."
        lede="How we work describes the method. Information handling describes how a situation is treated once it is shown to us."
        primary={{ label: "How we work", to: "/how-we-work" }}
        secondary={{ label: "Information handling", to: "/security" }}
        figure={
          <HousePlate refn="Fig. II" note="A first move, owned.">
            <DrawSign />
          </HousePlate>
        }
      />
    </HouseShell>
  )
}

/* ---------------- legal + fallback ---------------- */
export function Legal({ kind }: { kind: LegalKind }) {
  const doc = legalByKind(kind)
  return (
    <HouseShell>
      <HouseHero
        crumbs={[
          ["Home", "/"],
          ["Legal", "/legal/terms-of-service"],
          [doc.kicker, doc.path],
        ]}
        kicker={doc.kicker}
        title={doc.title}
        lede={doc.lede}
        primary={null}
        secondary={null}
        tone="slate"
        className="legal-hero"
      />

      <section className="legal-strip">
        <div className="about-inner">
          <p className="legal-updated">Last written {doc.updated}</p>
          <nav className="legal-switch" aria-label="Legal documents">
            {legalNav.map((item) => (
              <Link key={item.kind} to={item.to} className={item.kind === kind ? "is-on" : undefined} aria-current={item.kind === kind ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <div className="legal-wrap">
        <div className="legal-doc about-inner">
        <nav className="legal-toc" aria-label="On this page">
          <p>On this page</p>
          <ol>
            {doc.sections.map((section, i) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="legal-body">
          {doc.sections.map((section, i) => (
            <section id={section.id} key={section.id}>
              <h2>
                <b>{String(i + 1).padStart(2, "0")}</b>
                {section.title}
              </h2>
              {section.paragraphs.map((p, pi) => (
                <p key={`${section.id}-p-${pi}`}>{p}</p>
              ))}
              {section.items && (
                <ul>
                  {section.items.map((item, ii) => (
                    <li key={`${section.id}-i-${ii}`}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <p className="legal-foot">
            Related:{" "}
            {legalNav
              .filter((item) => item.kind !== kind)
              .map((item, i, arr) => (
                <span key={item.kind}>
                  <Link to={item.to}>{item.label}</Link>
                  {i < arr.length - 1 ? " · " : "."}
                </span>
              ))}
          </p>
        </div>
        </div>
      </div>
    </HouseShell>
  )
}

export function MediaKit() {
  return (
    <>
      <PageHero
        crumbs={[["Home", "/"], ["Company", "/about"]]}
        eyebrow="Media"
        title="Media kit"
        blurb="The mark is a ribbon, not a thin letter — built to sit on a card, a profile square, or a banner without changing shape."
        primary={null}
        secondary={null}
      />
      <Section title="Brand assets">
        <div className="grid-2">
          <Reveal className="tile">
            <div className="brand-stage on-paper">
              <BrandMark className="brand-mark" />
            </div>
            <h3 style={{ fontSize: 19 }}>On paper</h3>
            <p style={{ fontFamily: "var(--mono)", fontSize: 12 }}>Cards, slides, light social</p>
            <a className="brand-dl" href="/brand/constrange-mark.svg" download="constrange-mark.svg">
              Download constrange-mark.svg
            </a>
          </Reveal>
          <Reveal className="tile" delay={70}>
            <div className="brand-stage on-ink">
              <BrandMark className="brand-mark on-dark" />
            </div>
            <h3 style={{ fontSize: 19 }}>On ink</h3>
            <p style={{ fontFamily: "var(--mono)", fontSize: 12 }}>Banners, dark UI, night mode</p>
            <a className="brand-dl" href="/brand/constrange-mark-dark.svg" download="constrange-mark-dark.svg">
              Download constrange-mark-dark.svg
            </a>
          </Reveal>
          <Reveal className="tile" delay={140}>
            <div className="brand-stage on-indigo">
              <BrandMark className="brand-mark on-dark" />
            </div>
            <h3 style={{ fontSize: 19 }}>On indigo</h3>
            <p style={{ fontFamily: "var(--mono)", fontSize: 12 }}>Profile marks, campaign squares</p>
            <a className="brand-dl" href="/brand/constrange-mark-dark.svg" download="constrange-mark-dark.svg">
              Download constrange-mark-dark.svg
            </a>
          </Reveal>
          <Reveal className="tile" delay={210}>
            <div className="brand-stage on-lime">
              <BrandMark className="brand-mark on-signal" />
            </div>
            <h3 style={{ fontSize: 19 }}>On lime</h3>
            <p style={{ fontFamily: "var(--mono)", fontSize: 12 }}>Signal fields, event covers</p>
            <a className="brand-dl" href="/brand/constrange-mark.svg" download="constrange-mark.svg">
              Download constrange-mark.svg
            </a>
          </Reveal>
        </div>
      </Section>
      <Section title="Lockups">
        <div className="grid-2">
          <Reveal className="tile">
            <div className="brand-stage on-paper brand-stage-lockup">
              <img src="/brand/constrange-lockup.svg" alt="Constrange lockup on light" />
            </div>
            <h3 style={{ fontSize: 19 }}>Name with mark</h3>
            <p style={{ fontFamily: "var(--mono)", fontSize: 12 }}>Light backgrounds</p>
            <a className="brand-dl" href="/brand/constrange-lockup.svg" download="constrange-lockup.svg">
              Download constrange-lockup.svg
            </a>
          </Reveal>
          <Reveal className="tile" delay={70}>
            <div className="brand-stage on-ink brand-stage-lockup">
              <img src="/brand/constrange-lockup-dark.svg" alt="Constrange lockup on dark" />
            </div>
            <h3 style={{ fontSize: 19 }}>Name with mark, dark</h3>
            <p style={{ fontFamily: "var(--mono)", fontSize: 12 }}>Dark banners and night UI</p>
            <a className="brand-dl" href="/brand/constrange-lockup-dark.svg" download="constrange-lockup-dark.svg">
              Download constrange-lockup-dark.svg
            </a>
          </Reveal>
        </div>
        <div className="grid-2" style={{ marginTop: 28 }}>
          {[
            ["Indigo", "#271675"],
            ["Fold", "#6757a5"],
            ["Signal lime", "#dbff71"],
            ["Ink", "#171717"],
          ].map(([name, hex], i) => (
            <Reveal className="tile" key={name} delay={i * 70}>
              <div style={{ height: 90, borderRadius: 10, background: hex, marginBottom: 16, border: "1px solid var(--line)" }} />
              <h3 style={{ fontSize: 19 }}>{name}</h3>
              <p style={{ fontFamily: "var(--mono)", fontSize: 12 }}>{hex}</p>
            </Reveal>
          ))}
        </div>
        <Callout
          title="Press enquiries"
          blurb="For interviews, briefings, and use of the mark, start a conversation."
          to="/contact"
          label="Contact"
        />
      </Section>
    </>
  )
}

export function NotFound() {
  return (
    <PageHero
      eyebrow="404"
      title="That page moved"
      blurb="That address is not part of this site. Try what we do, or go back home."
      primary={{ label: "What we do", to: "/products" }}
      secondary={{ label: "Back home", to: "/" }}
    />
  )
}
