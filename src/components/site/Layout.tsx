import { useEffect, useRef, useState, type ReactNode } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { BrandMark } from "@/components/site/BrandMark"
import { Seo } from "@/components/site/Seo"
import { normalizePathname } from "@/pathname"

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
  const [mobile, setMobile] = useState(false)
  const [stuck, setStuck] = useState(false)
  const location = useLocation()
  const pathname = normalizePathname(location.pathname)

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
  }, [location.pathname])

  return (
    <>
      <header
        className={["header", stuck ? "stuck" : "", canvas ? "on-canvas" : "", onDark ? "on-dark" : ""]
          .filter(Boolean)
          .join(" ")}
      >
        <Brand dark={onDark} />

        <nav className="nav-main" aria-label="Primary">
          <NavLink
            to="/decision-review"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Decision Review
          </NavLink>
          <NavLink
            to="/how-we-work"
            className={({ isActive }) =>
              isActive || pathname === "/docs" ? "nav-link active" : "nav-link"
            }
          >
            How We Work
          </NavLink>
          <NavLink
            to="/research"
            className={({ isActive }) =>
              isActive || pathname.startsWith("/blog") ? "nav-link active" : "nav-link"
            }
          >
            Thinking
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="btn">
            Discuss a decision
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

      </header>

      {mobile && (
        <div className="mobile-panel">
          <Link to="/decision-review">Decision Review</Link>
          <Link to="/how-we-work">How We Work</Link>
          <Link to="/research">Thinking</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <div className="mobile-cta">
            <Link to="/contact" className="btn">
              Discuss a decision
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
    "Practice",
    [
      ["Decision Review", "/decision-review"],
      ["How We Work", "/how-we-work"],
      ["Working with us", "/pricing"],
      ["Contact", "/contact"],
    ],
  ],
  [
    "Thinking",
    [
      ["Research & thinking", "/research"],
      ["Articles", "/blog"],
      ["Practice notes", "/changelog"],
    ],
  ],
  [
    "Company",
    [
      ["About", "/about"],
      ["Information handling", "/security"],
      ["Media kit", "/media"],
      ["Contact", "/contact"],
    ],
  ],
]

function Footer() {
  return (
    <footer className="site-footer">
      <span className="footer-grain" aria-hidden />
      <div className="footer-close">
        <Reveal>
          <p className="footer-kicker">Constrange</p>
          <h2>
            Have a decision that needs
            <br />
            an independent view?
          </h2>
          <p className="footer-lede">
            Bring the situation as it is. We will determine whether a Decision Review is useful — and say
            so if it isn't.
          </p>
          <div className="footer-actions">
            <Link to="/contact" className="btn btn-light">
              Discuss a decision
            </Link>
            <Link to="/decision-review" className="btn btn-dark-ghost">
              Decision Review
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="footer-rule" aria-hidden />

      <div className="footer-practice">
        <Brand dark />
        <p>Independent decision intelligence for important technology, AI and operational decisions.</p>
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
            <b>Constrange Decision Review™</b>
            <small>Read:</small>
            <Link to="/decision-review">Decision Review</Link>
            <Link to="/how-we-work">How We Work</Link>
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
