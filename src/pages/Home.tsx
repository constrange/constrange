import { Link } from "react-router-dom"
import { Counter, Reveal } from "@/components/site/Layout"
import { HeroDemo, LogoMarquee } from "@/components/site/Blocks"
import { PostCard } from "@/components/site/PostCard"
import { customers, products } from "@/site-data"
import { posts } from "@/blog-content"

const pillars = [
  ["01", "The world is complex — more systems, more options, more decisions"],
  ["02", "More options do not create clarity"],
  ["03", "The real problem must be understood before a tool is chosen"],
  ["04", "Structure, then a path that can become action"],
]

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div>
          <h1 className="serif-xl">
            <span>Complex problems.</span>
            <span>Clearer paths forward.</span>
          </h1>
          <div className="hero-actions">
            <Link className="btn" to="/contact">
              Start a conversation
            </Link>
            <Link className="btn btn-ghost" to="/how-we-work">
              How we work
            </Link>
          </div>
        </div>
        <p className="lede">
          Constrange is a technology and business consultancy. When challenges, systems and changing
          technology collide, the right answer is rarely obvious. We help organisations understand
          the problem, create structure, and design a practical path forward.
        </p>
      </section>

      <div className="shell">
        <HeroDemo />
      </div>

      <LogoMarquee label="Situations we recognise" />

      <section className="platform" id="platform">
        <div className="platform-intro">
          <Reveal>
            <span className="eyebrow">What we do</span>
            <h2 className="serif-lg">From complexity to a path you can act on.</h2>
          </Reveal>
          <Reveal delay={120}>
            <ul>
              {pillars.map(([num, text]) => (
                <li key={num}>
                  <b>{num}</b>
                  {text}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="product-grid">
          {products.map((p, i) => (
            <Link
              key={p.slug}
              to={`/products/${p.slug}`}
              className={`product-card ${i === products.length - 1 ? "span-2" : ""}`}
            >
              <div>
                <h3>{p.name}</h3>
                <p>{p.blurb}</p>
              </div>
              <div className="chips">
                {p.chips.map((chip) => (
                  <span className="chip" key={chip}>
                    <i />
                    {chip}
                  </span>
                ))}
              </div>
            </Link>
          ))}
          <Link to="/products" className="explore-card">
            <div>
              <strong className="serif-sm">See how this comes together</strong>
              <p>Capabilities framed around problems and outcomes, not a service menu.</p>
            </div>
            <span className="arrow-link">
              What we take on <i>→</i>
            </span>
          </Link>
        </div>
      </section>

      <section className="benefits shell">
        <Reveal as="article">
          <div className="line-art globe">
            <i />
            <i />
            <i />
          </div>
          <h3>Technology should wait for the problem</h3>
          <p>
            A platform chosen first will spend the following months looking for a use. We start with
            the work, the systems, and the constraints — then decide whether new technology is even
            required.
          </p>
          <Link className="arrow-link" to="/enterprise">
            Who this is for <i>→</i>
          </Link>
        </Reveal>

        <Reveal as="article" delay={110}>
          <div className="line-art steps">
            <i />
            <i />
            <i />
            <i />
          </div>
          <h3>The right answer depends on the context</h3>
          <p>
            Sometimes AI is the answer. Sometimes automation is. Sometimes the process itself needs
            redesigning. Sometimes the existing system simply needs to work better. When the same
            expensive constraint keeps appearing, we may turn the solution into software.
          </p>
          <Link className="arrow-link" to="/pricing">
            How we shape the work <i>→</i>
          </Link>
        </Reveal>

        <Reveal as="article" delay={220}>
          <div className="line-art nodes">
            <i />
            <i />
            <i />
          </div>
          <h3>A strategy is valuable only when it can become action</h3>
          <p>
            Constrange does not stop at a point of view. We turn a reading of the situation into
            owners, sequence, and a first move that is small enough to be real.
          </p>
          <Link className="arrow-link" to="/products">
            What we take on <i>→</i>
          </Link>
        </Reveal>
      </section>

      <section className="stat-band" aria-labelledby="stat-band-title">
        <span className="stat-band-grain" aria-hidden />
        <span className="stat-band-grain-2" aria-hidden />
        <div className="stat-band-inner">
          <p className="stat-kicker" id="stat-band-title">
            How the work is counted
          </p>
          <div className="stat-row">
            <Reveal className="stat">
              <Counter to={5} />
              <span>stages from situation to first move</span>
            </Reveal>
            <Reveal className="stat" delay={90}>
              <Counter to={3} />
              <span>questions before a technology is chosen</span>
            </Reveal>
            <Reveal className="stat" delay={180}>
              <Counter to={1} />
              <span>problem named before a stack is selected</span>
            </Reveal>
            <Reveal className="stat is-constraint" delay={270}>
              <Counter to={0} />
              <span>default to AI, automation, or a new platform</span>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section shell">
        <Reveal className="section-head">
          <span className="eyebrow">Who we help</span>
          <h2 className="serif-md">Leaders who have to decide under complexity</h2>
          <p>
            The pressure is usually the same: something needs to improve, and it is not obvious
            where to start, which technology makes sense, or whether AI is even necessary.
          </p>
        </Reveal>
        <div className="quote-grid">
          {customers.slice(0, 3).map((c, i) => (
            <Reveal className="quote" key={c.name} delay={i * 100}>
              <span className="logo-word">{c.name}</span>
              <blockquote>“{c.quote}”</blockquote>
              {c.metric && <span className="metric">{c.metric}</span>}
              <span className="quote-meta">{c.label}</span>
            </Reveal>
          ))}
        </div>
        <div style={{ marginTop: 34 }}>
          <Link className="arrow-link" to="/customers">
            Situations we take on <i>→</i>
          </Link>
        </div>
      </section>

      <section className="section shell">
        <Reveal className="section-head">
          <span className="eyebrow">Blog</span>
          <h2 className="serif-md">Writing from the work</h2>
          <p>
            Notes on judgement, constraint, and why more options do not automatically create a
            clearer path.
          </p>
        </Reveal>
        <div className="grid-3">
          {posts.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={i * 90}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
        <div style={{ marginTop: 34 }}>
          <Link className="arrow-link" to="/blog">
            Read the blog <i>→</i>
          </Link>
        </div>
      </section>

      <section className="playground-band">
        <Reveal className="playground-copy">
          <span className="eyebrow">A conversation</span>
          <h2 className="serif-lg">Bring the situation as it actually is</h2>
          <p>
            You do not need a polished brief. You need a clear reading of the pressure, the
            constraints, and the next move that would be honest.
          </p>
          <Link className="btn" to="/contact">
            Start a conversation
          </Link>
        </Reveal>
        <Reveal delay={140}>
          <div className="fake-app">
            <header className="sit-sheet-head">
              <span>Situation reading</span>
              <b>What is actually in play</b>
            </header>
            <table className="sit-sheet">
              <thead>
                <tr>
                  <th scope="col">We look at</th>
                  <th scope="col">The question</th>
                  <th scope="col">Typical pressure</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span>01</span> Work
                  </th>
                  <td>What path does a request actually take?</td>
                  <td>Handoffs lose context. A spreadsheet is the real system.</td>
                </tr>
                <tr>
                  <th scope="row">
                    <span>02</span> Systems
                  </th>
                  <td>What can hold that work — and what cannot?</td>
                  <td>Too many tools. A core that cannot be rebuilt this year.</td>
                </tr>
                <tr>
                  <th scope="row">
                    <span>03</span> People
                  </th>
                  <td>Who owns the join, and who is already tired?</td>
                  <td>Strategy is signed. Nothing has an owner.</td>
                </tr>
              </tbody>
            </table>
            <p className="sit-sheet-note">
              A platform, AI, or a new process comes after this reading — not before.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  )
}
