import { useEffect, useMemo, useRef, useState } from "react"
import { Link } from "react-router-dom"
import type { Block } from "@/blog-content"

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")

/* ---------------- block renderer ---------------- */
export function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose">
      {blocks.map((block, i) => {
        switch (block.t) {
          case "h2":
            return (
              <h2 key={i} id={slugify(block.text)}>
                {block.text}
              </h2>
            )
          case "h3":
            return <h3 key={i}>{block.text}</h3>
          case "p":
            return <p key={i}>{block.text}</p>
          case "ul":
            return (
              <ul key={i}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )
          case "ol":
            return (
              <ol key={i}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            )
          case "table":
            return (
              <div className="table-scroll" key={i}>
                <table className="rate-table">
                  {block.caption && <caption>{block.caption}</caption>}
                  <thead>
                    <tr>
                      {block.head.map((h) => (
                        <th key={h}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell, c) => (
                          <td key={c} className={c === row.length - 1 && /^[$+\d]/.test(cell) ? "price" : ""}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          case "code":
            return (
              <div className="terminal" key={i}>
                <div className="terminal-bar">
                  <i />
                  <i />
                  <i />
                  <em>{block.lang}</em>
                </div>
                <pre>{block.code}</pre>
              </div>
            )
          case "note":
            return (
              <aside className="prose-note" key={i}>
                {block.text}
              </aside>
            )
          case "quote":
            return (
              <blockquote className="prose-quote" key={i}>
                “{block.text}”
                <cite>{block.cite}</cite>
              </blockquote>
            )
          case "cta":
            return (
              <aside className="prose-cta" key={i}>
                <div>
                  <strong>{block.title}</strong>
                  <p>{block.text}</p>
                </div>
                <Link className="btn" to={block.to}>
                  {block.label}
                </Link>
              </aside>
            )
          default:
            return null
        }
      })}
    </div>
  )
}

/* ---------------- reading progress ---------------- */
export function ReadingProgress({ target }: { target: React.RefObject<HTMLElement | null> }) {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const node = target.current
      if (!node) return
      const start = node.offsetTop
      const total = node.offsetHeight - window.innerHeight * 0.5
      const done = window.scrollY - start
      setPct(Math.max(0, Math.min(100, (done / Math.max(total, 1)) * 100)))
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [target])

  return (
    <div className="read-progress" aria-hidden="true">
      <span style={{ width: `${pct}%` }} />
    </div>
  )
}

/* ---------------- table of contents with scroll spy ---------------- */
export function TableOfContents({ blocks }: { blocks: Block[] }) {
  const headings = useMemo(
    () => blocks.filter((b): b is Extract<Block, { t: "h2" }> => b.t === "h2").map((b) => b.text),
    [blocks],
  )
  const [active, setActive] = useState(headings[0] ?? "")
  const ids = useRef<string[]>([])
  const fold = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    ids.current = headings.map(slugify)
    const onScroll = () => {
      let current = ids.current[0]
      for (const id of ids.current) {
        const node = document.getElementById(id)
        if (node && node.getBoundingClientRect().top <= 140) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [headings])

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)")
    const sync = () => {
      if (!fold.current) return
      fold.current.open = !mq.matches
    }
    sync()
    mq.addEventListener("change", sync)
    return () => mq.removeEventListener("change", sync)
  }, [headings])

  if (headings.length === 0) return null

  const goTo = (id: string) => {
    const mobile = window.matchMedia("(max-width: 900px)").matches
    if (mobile) fold.current?.removeAttribute("open")
    const jump = () => {
      const node = document.getElementById(id)
      if (!node) return
      const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 84
      const extra = mobile ? 56 : 24
      const top = node.getBoundingClientRect().top + window.scrollY - header - extra
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" })
    }
    if (mobile) requestAnimationFrame(() => requestAnimationFrame(jump))
    else jump()
  }

  return (
    <nav className="toc" aria-label="On this page">
      <details ref={fold} className="toc-fold" open>
        <summary>
          On this page
        </summary>
        <ol>
          {headings.map((text) => {
            const id = slugify(text)
            return (
              <li key={id} className={active === id ? "active" : ""}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "location" : undefined}
                  onClick={(e) => {
                    e.preventDefault()
                    goTo(id)
                  }}
                >
                  {text}
                </a>
              </li>
            )
          })}
        </ol>
      </details>
    </nav>
  )
}

/* ---------------- faq accordion ---------------- */
export function FaqList({ items, title = "Frequently asked questions" }: { items: [string, string][]; title?: string }) {
  if (items.length === 0) return null
  return (
    <div className="faq">
      <h2 className="serif-md" style={{ marginBottom: 22 }}>
        {title}
      </h2>
      {items.map(([q, a]) => (
        <details key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  )
}
