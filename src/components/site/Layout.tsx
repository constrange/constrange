import { useEffect, useRef, useState, type ReactNode } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { BrandMark } from "@/components/site/BrandMark"
import { BlogMega, WhatWeDoMega } from "@/components/site/NavMega"
import { Seo } from "@/components/site/Seo"
import { normalizePathname } from "@/pathname"
import { solutions } from "@/site-data"

/* ---------------- scroll reveal ---------------- */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode
  delay?: number
  as?: keyof HTMLElementTagNameMap
  className?: string
}) {
  const ref = useRef<HTMLElement>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  const Component = Tag as "div"
  return (
    <Component
      ref={ref as never}
      className={`reveal ${seen ? "in" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  )
}

/* ---------------- animated counter ---------------- */
export function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLBElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now: number) => {
        const p = Math.min((now - start) / 1100, 1)
        setValue(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
    io.observe(node)
    return () => io.disconnect()
  }, [to])

  return (
    <b ref={ref as never}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </b>
  )
}

export function Brand({ dark = false }: { dark?: boolean }) {
  return (
    <Link to="/" className="brand" aria-label="Constrange home">
      <BrandMark className={dark ? "brand-mark on-dark" : "brand-mark"} />
      Constrange
    </Link>
  )
}

/* ---------------- header ---------------- */
const resourceLinks = [
  ["Blog", "/blog"],
  ["Thinking", "/research"],
  ["Notes", "/newsroom"],
  ["Careers", "/careers"],
]

export function housePath(pathname: string) {
  const path = normalizePathname(pathname)
  if (path === "/about") return true
  if (path === "/research" || path === "/understand" || path === "/structure" || path === "/priorities") return true
  if (path === "/languages" || path === "/status" || path === "/enterprise") return true
  if (path.startsWith("/legal/") || path === "/security") return true
  if (path === "/careers" || path === "/contact" || path.startsWith("/contact/")) return true
  if (path.startsWith("/solutions/")) return true
  return false
}

export function insightVariant(pathname: string): "method" | "audience" | null {
  const path = normalizePathname(pathname)
  if (path === "/customers") return "audience"
  if (path === "/docs" || path === "/how-we-work") return "method"
  return null
}

function Header({ canvas, onDark }: { canvas: boolean; onDark: boolean }) {
  const [open, setOpen] = useState<string | null>(null)
  const [mobile, setMobile] = useState(false)
  const [stuck, setStuck] = useState(false)
  const location = useLocation()
  const pathname = normalizePathname(location.pathname)
  const hideTimer = useRef(0)
  const pinned = useRef(false)

  const show = (id: string) => {
    window.clearTimeout(hideTimer.current)
    pinned.current = false
    setOpen(id)
  }
  const hide = (force = false) => {
    if (pinned.current && !force) return
    pinned.current = false
    window.clearTimeout(hideTimer.current)
    hideTimer.current = window.setTimeout(() => setOpen(null), 160)
  }
  const toggle = (id: string) => {
    window.clearTimeout(hideTimer.current)
    setOpen((cur) => {
      if (cur === id) {
        if (!pinned.current) {
          pinned.current = true
          return id
        }
        pinned.current = false
        return null
      }
      pinned.current = true
      return id
    })
  }

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setStuck(window.scrollY > 12)
        ticking = false
      })
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobile(false)
    setOpen(null)
  }, [location.pathname])

  useEffect(() => () => window.clearTimeout(hideTimer.current), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        pinned.current = false
        setOpen(null)
      }
    }
    const onDown = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      if (el.closest(".mega-slot, .nav-item")) return
      pinned.current = false
      setOpen(null)
    }
    window.addEventListener("keydown", onKey)
    document.addEventListener("mousedown", onDown)
    return () => {
      window.removeEventListener("keydown", onKey)
      document.removeEventListener("mousedown", onDown)
    }
  }, [open])

  const practiceOpen =
    pathname.startsWith("/products") ||
    pathname === "/features" ||
    pathname === "/pricing"
  const writingOpen =
    pathname.startsWith("/blog") ||
    pathname === "/research" ||
    pathname === "/newsroom" ||
    pathname === "/understand" ||
    pathname === "/structure" ||
    pathname === "/priorities"

  return (
    <>
      <header
        className={["header", stuck ? "stuck" : "", canvas ? "on-canvas" : "", onDark ? "on-dark" : ""]
          .filter(Boolean)
          .join(" ")}
      >
        <Brand dark={onDark} />

        <nav className="nav-main" aria-label="Primary">
          <div className="nav-item" onMouseEnter={() => show("practice")} onMouseLeave={() => hide()}>
            <button
              className={`nav-trigger ${practiceOpen ? "active" : ""}`}
              aria-expanded={open === "practice"}
              aria-controls="mega-practice"
              onClick={() => toggle("practice")}
            >
              What We Do <span className="nav-caret" />
            </button>
          </div>

          <NavLink to="/how-we-work"
            className={({ isActive }) =>
              isActive || pathname === "/docs" ? "nav-link active" : "nav-link"
            }
            onMouseEnter={() => hide(true)}
          >
            How We Work
          </NavLink>
          <NavLink to="/customers" className="nav-link" onMouseEnter={() => hide(true)}>
            Who We Help
          </NavLink>

          <div className="nav-item" onMouseEnter={() => show("writing")} onMouseLeave={() => hide()}>
            <button
              className={`nav-trigger ${writingOpen ? "active" : ""}`}
              aria-expanded={open === "writing"}
              aria-controls="mega-writing"
              onClick={() => toggle("writing")}
            >
              Blog <span className="nav-caret" />
            </button>
          </div>
        </nav>

        <div className="header-actions" onMouseEnter={() => hide(true)}>
          <Link to="/about" className="plain">
            About
          </Link>
          <Link to="/contact" className="btn">
            Start a Conversation
          </Link>
        </div>

        <button
          className={mobile ? "burger open" : "burger"}
          aria-label={mobile ? "Close menu" : "Open menu"}
          aria-expanded={mobile}
          onClick={() => setMobile(!mobile)}
        >
          <span />
          <span />
          <span />
        </button>

        {open === "practice" && (
          <div
            id="mega-practice"
            className="mega-slot"
            onMouseEnter={() => show("practice")}
            onMouseLeave={() => hide()}
          >
            <WhatWeDoMega />
          </div>
        )}
        {open === "writing" && (
          <div
            id="mega-writing"
            className="mega-slot"
            onMouseEnter={() => show("writing")}
            onMouseLeave={() => hide()}
          >
            <BlogMega />
          </div>
        )}
      </header>

      {mobile && (
        <div className="mobile-panel">
          <details>
            <summary>What We Do</summary>
            <div className="mobile-sub">
              <Link to="/products">Overview</Link>
              <p className="mobile-label">Read</p>
              <Link to="/products/strategy">Strategy</Link>
              <Link to="/products/judgement">Judgement</Link>
              <p className="mobile-label">Shape</p>
              <Link to="/products/systems-operations">Systems & operations</Link>
              <Link to="/products/solution-design">Solution design</Link>
              <Link to="/products/ai-automation">AI & automation</Link>
              <p className="mobile-label">Move</p>
              <Link to="/products/implementation">Implementation</Link>
              <Link to="/products/transformation">Transformation</Link>
              <Link to="/pricing">Working with us</Link>
              <Link to="/features">All capabilities</Link>
            </div>
          </details>
          <details>
            <summary>Who We Help</summary>
            <div className="mobile-sub">
              <Link to="/customers">Overview</Link>
              <Link to="/enterprise">Organisations under complexity</Link>
              <Link to="/solutions/growth">Growing teams</Link>
              {solutions.filter((s) => s.slug !== "growth").map((s) => (
                <Link key={s.slug} to={`/solutions/${s.slug}`}>
                  {s.name}
                </Link>
              ))}
            </div>
          </details>
          <Link to="/how-we-work">How We Work</Link>
          <details>
            <summary>Blog</summary>
            <div className="mobile-sub">
              {resourceLinks.map(([label, to]) => (
                <Link key={to} to={to}>
                  {label}
                </Link>
              ))}
            </div>
          </details>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <div className="mobile-cta">
            <Link to="/contact" className="btn">
              Start a Conversation
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

/* ---------------- footer ---------------- */
const footerColumns: [string, [string, string][]][] = [
  [
    "Capabilities",
    [
      ["Overview", "/products"],
      ["Strategy", "/products/strategy"],
      ["AI & automation", "/products/ai-automation"],
      ["Systems & operations", "/products/systems-operations"],
      ["Solution design", "/products/solution-design"],
      ["Working with us", "/pricing"],
    ],
  ],
  [
    "Who We Help",
    [
      ["Overview", "/customers"],
      ["Organisations", "/enterprise"],
      ["Growing teams", "/solutions/growth"],
      ["Operations", "/solutions/operations"],
      ["Customer & service", "/solutions/customer-experience"],
      ["Technology leaders", "/solutions/technology-leaders"],
      ["Regulated environments", "/solutions/regulated"],
    ],
  ],
  [
    "Method",
    [
      ["How We Work", "/how-we-work"],
      ["Stages in detail", "/docs/api-reference"],
      ["Working notes", "/docs/guides"],
      ["Contact", "/contact"],
      ["Practice notes", "/changelog"],
    ],
  ],
    [
    "Company",
    [
      ["About", "/about"],
      ["How we handle information", "/security"],
      ["Careers", "/careers"],
      ["Notes", "/newsroom"],
      ["Media kit", "/media"],
      ["Contact", "/contact"],
    ],
  ],
  [
    "Resources",
    [
      ["Blog", "/blog"],
      ["Thinking", "/research"],
      ["Contexts", "/languages"],
      ["Availability", "/status"],
    ],
  ],
]

function Footer() {
  return (
    <footer className="site-footer">
      <span className="footer-grain" aria-hidden />
      <span className="footer-grain-2" aria-hidden />
      <div className="footer-close">
        <Reveal>
          <p className="footer-kicker">Constrange</p>
          <h2>
            Complexity held
            <br />
            until it can be named.
          </h2>
          <p className="footer-lede">
            You do not need a polished brief. We will say whether we can hold it — and if we cannot.
          </p>
          <div className="footer-actions">
            <Link to="/contact" className="btn btn-light">
              Start a Conversation
            </Link>
            <Link to="/how-we-work" className="btn btn-dark-ghost">
              How We Work
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="footer-rule" aria-hidden />

      <div className="footer-practice">
        <Brand dark />
        <p>Technology and business consultancy. Direction first; build where it belongs.</p>
      </div>

      <div className="footer-links">
        {footerColumns.map(([title, links]) => (
          <div key={title}>
            <h3>{title}</h3>
            <nav>
              {links.map(([label, to]) => (
                <Link key={label} to={to}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <nav aria-label="Legal">
          <Link to="/legal/terms-of-service">Terms of service</Link>
          <Link to="/legal/privacy-policy">Privacy policy</Link>
          <Link to="/security">Information handling</Link>
        </nav>
        <p>© 2026 Constrange</p>
      </div>
    </footer>
  )
}

/* ---------------- shell ---------------- */
function GrainField() {
  return <div className="insight-grain" aria-hidden />
}

export function Layout({ children }: { children: ReactNode }) {
  const [announcement, setAnnouncement] = useState(true)
  const [onDark, setOnDark] = useState(false)
  const { pathname: rawPathname } = useLocation()
  const pathname = normalizePathname(rawPathname)
  const canvas = insightVariant(pathname)
  const isHouse = housePath(pathname)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
    setOnDark(false)
  }, [pathname])

  useEffect(() => {
    if (!canvas && !isHouse) return
    const read = () => {
      const probe = 72
      if (isHouse) {
        const field = document.querySelector<HTMLElement>(".about-field")
        if (!field) {
          setOnDark(false)
          return
        }
        const r = field.getBoundingClientRect()
        setOnDark(r.top <= probe && r.bottom > probe)
        return
      }
      const nodes = document.querySelectorAll<HTMLElement>(".insight-hero, .insight-chapter, .insight-close")
      let dark = false
      nodes.forEach((node) => {
        const r = node.getBoundingClientRect()
        if (r.top <= probe && r.bottom > probe) {
          dark = node.classList.contains("tone-forest") || node.classList.contains("tone-navy") || node.classList.contains("insight-close")
        }
      })
      setOnDark(dark)
    }
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        read()
        ticking = false
      })
    }
    read()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [canvas, isHouse, pathname])

  return (
    <div className={canvas ? `page-insight page-insight-${canvas}` : undefined}>
      <Seo />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      {canvas && <GrainField />}
      {announcement && !canvas && !isHouse && (
        <aside className="announcement" aria-label="Announcement">
          <div className="announcement-inner">
            <span className="tag">New</span>
            <b>The right technology is rarely the first decision.</b>
            <small>Read:</small>
            <Link to="/how-we-work">How We Work</Link>
            <Link to="/blog/information-is-not-judgement">Judgement</Link>
          </div>
          <button type="button" onClick={() => setAnnouncement(false)} aria-label="Dismiss announcement">
            ×
          </button>
        </aside>
      )}
      <Header canvas={Boolean(canvas)} onDark={onDark} />
      <main id="main" className={canvas ? "is-insight" : undefined}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
