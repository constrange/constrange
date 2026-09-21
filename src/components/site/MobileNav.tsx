import { useEffect } from "react"
import { Link } from "react-router-dom"
import { BrandMark } from "@/components/site/BrandMark"
import { solutions } from "@/site-data"

const resourceLinks = [
  ["Blog", "/blog"],
  ["Thinking", "/research"],
  ["Notes", "/newsroom"],
  ["Careers", "/careers"],
]

type MobileNavProps = {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    document.body.classList.toggle("mobile-nav-open", open)
    return () => document.body.classList.remove("mobile-nav-open")
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <>
      <button type="button" className="mobile-drawer-backdrop" aria-label="Close menu" onClick={onClose} />
      <aside className="mobile-drawer" aria-label="Mobile navigation">
        <div className="mobile-drawer-head">
          <Link to="/" className="brand" aria-label="Constrange home" onClick={onClose}>
            <BrandMark className="brand-mark" />
            Constrange
          </Link>
          <button type="button" className="mobile-drawer-close" aria-label="Close menu" onClick={onClose}>
            ×
          </button>
        </div>

        <nav className="mobile-drawer-nav">
          <details className="mobile-drawer-group">
            <summary>What We Do</summary>
            <div className="mobile-drawer-sub">
              <Link to="/products" onClick={onClose}>Overview</Link>
              <p className="mobile-label">Read</p>
              <Link to="/products/strategy" onClick={onClose}>Strategy</Link>
              <Link to="/products/judgement" onClick={onClose}>Judgement</Link>
              <p className="mobile-label">Shape</p>
              <Link to="/products/systems-operations" onClick={onClose}>Systems & operations</Link>
              <Link to="/products/solution-design" onClick={onClose}>Solution design</Link>
              <Link to="/products/ai-automation" onClick={onClose}>AI & automation</Link>
              <p className="mobile-label">Move</p>
              <Link to="/products/implementation" onClick={onClose}>Implementation</Link>
              <Link to="/products/transformation" onClick={onClose}>Transformation</Link>
              <Link to="/pricing" onClick={onClose}>Working with us</Link>
              <Link to="/features" onClick={onClose}>All capabilities</Link>
            </div>
          </details>

          <details className="mobile-drawer-group">
            <summary>Who We Help</summary>
            <div className="mobile-drawer-sub">
              <Link to="/customers" onClick={onClose}>Overview</Link>
              <Link to="/enterprise" onClick={onClose}>Organisations under complexity</Link>
              <Link to="/solutions/growth" onClick={onClose}>Growing teams</Link>
              {solutions.filter((s) => s.slug !== "growth").map((s) => (
                <Link key={s.slug} to={`/solutions/${s.slug}`} onClick={onClose}>
                  {s.name}
                </Link>
              ))}
            </div>
          </details>

          <Link className="mobile-drawer-link" to="/how-we-work" onClick={onClose}>
            How We Work
          </Link>

          <details className="mobile-drawer-group">
            <summary>Blog</summary>
            <div className="mobile-drawer-sub">
              {resourceLinks.map(([label, to]) => (
                <Link key={to} to={to} onClick={onClose}>
                  {label}
                </Link>
              ))}
            </div>
          </details>

          <Link className="mobile-drawer-link" to="/about" onClick={onClose}>
            About
          </Link>
          <Link className="mobile-drawer-link" to="/contact" onClick={onClose}>
            Contact
          </Link>
        </nav>

        <div className="mobile-drawer-foot">
          <Link className="btn" to="/contact" onClick={onClose}>
            Start a Conversation
          </Link>
          <Link className="btn btn-ghost" to="/how-we-work" onClick={onClose}>
            How We Work
          </Link>
        </div>
      </aside>
    </>
  )
}
