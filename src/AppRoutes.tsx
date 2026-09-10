import { Navigate, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { Layout } from "@/components/site/Layout"
import { normalizePathname } from "@/pathname"
import Home from "@/pages/Home"
import Pricing from "@/pages/Pricing"
import BlogPost from "@/pages/BlogPost"
import DecisionReview from "@/pages/DecisionReview"
import HowWeWork from "@/pages/HowWeWork"
import {
  Blog,
  Changelog,
  Docs,
  Newsroom,
  Playground,
  ResearchOverview,
} from "@/pages/Pages"
import {
  About,
  Contact,
  Legal,
  MediaKit,
  NotFound,
  Security,
} from "@/pages/Company"

function ProductRedirect() {
  const { slug } = useParams()
  const to = slug === "judgement" ? "/how-we-work" : "/decision-review"
  return <Navigate to={to} replace />
}

function CanonicalPathRedirect() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const normalized = normalizePathname(location.pathname)
    if (normalized !== location.pathname) {
      navigate(`${normalized}${location.search}${location.hash}`, { replace: true })
    }
  }, [location.hash, location.pathname, location.search, navigate])

  return null
}

export function AppRoutes() {
  return (
    <Layout>
      <CanonicalPathRedirect />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/velocity" element={<Navigate to="/" replace />} />
        <Route path="/desk/*" element={<Navigate to="/" replace />} />
        <Route path="/dashboard/*" element={<Navigate to="/" replace />} />

        <Route path="/decision-review" element={<DecisionReview />} />
        <Route path="/products" element={<Navigate to="/decision-review" replace />} />
        <Route path="/products/:slug" element={<ProductRedirect />} />
        <Route path="/features" element={<Navigate to="/decision-review" replace />} />
        <Route path="/pricing" element={<Pricing />} />

        <Route path="/enterprise" element={<Navigate to="/decision-review" replace />} />
        <Route path="/customers" element={<Navigate to="/decision-review" replace />} />
        <Route path="/solutions/:slug" element={<Navigate to="/decision-review" replace />} />
        <Route path="/languages" element={<Navigate to="/decision-review" replace />} />

        <Route path="/docs" element={<HowWeWork />} />
        <Route path="/how-we-work" element={<HowWeWork />} />
        <Route path="/docs/api-reference" element={<Navigate to="/how-we-work#stages" replace />} />
        <Route path="/method" element={<Navigate to="/how-we-work#stages" replace />} />
        <Route path="/docs/guides" element={<Docs variant="guides" />} />
        <Route path="/status" element={<Navigate to="/contact" replace />} />
        <Route path="/changelog" element={<Changelog />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/newsroom" element={<Newsroom />} />
        <Route path="/playground" element={<Playground />} />

        <Route path="/research" element={<ResearchOverview />} />
        <Route path="/understand" element={<Navigate to="/how-we-work#understand" replace />} />
        <Route path="/structure" element={<Navigate to="/how-we-work#structure" replace />} />
        <Route path="/priorities" element={<Navigate to="/how-we-work#prioritize" replace />} />

        <Route path="/about" element={<About />} />
        <Route path="/security" element={<Security />} />
        <Route path="/careers" element={<Navigate to="/about" replace />} />
        <Route path="/media" element={<MediaKit />} />

        <Route path="/contact" element={<Contact variant="general" />} />
        <Route path="/contact/sales" element={<Contact variant="sales" />} />
        <Route path="/contact/support" element={<Contact variant="support" />} />
        <Route path="/contact/startup-program" element={<Contact variant="startups" />} />

        <Route path="/legal/terms-of-service" element={<Legal kind="terms" />} />
        <Route path="/legal/privacy-policy" element={<Legal kind="privacy" />} />
        <Route path="/legal/subprocessors" element={<Navigate to="/security" replace />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
