import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { Layout } from "@/components/site/Layout"
import { normalizePathname } from "@/pathname"
import Home from "@/pages/Home"
import Pricing from "@/pages/Pricing"
import BlogPost from "@/pages/BlogPost"
import { Features, ProductDetail, ProductsOverview } from "@/pages/Platform"
import HowWeWork from "@/pages/HowWeWork"
import WhoWeHelp from "@/pages/WhoWeHelp"
import {
  Blog,
  Changelog,
  Docs,
  Enterprise,
  Newsroom,
  Playground,
  ResearchDetail,
  ResearchOverview,
  SolutionPage,
  Status,
} from "@/pages/Pages"
import {
  About,
  Careers,
  Contact,
  Languages,
  Legal,
  MediaKit,
  NotFound,
  Security,
} from "@/pages/Company"

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

        <Route path="/products" element={<ProductsOverview />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />

        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/customers" element={<WhoWeHelp />} />
        <Route path="/solutions/:slug" element={<SolutionPage />} />
        <Route path="/languages" element={<Languages />} />

        <Route path="/docs" element={<HowWeWork />} />
        <Route path="/how-we-work" element={<HowWeWork />} />
        <Route path="/docs/api-reference" element={<Docs variant="reference" />} />
        <Route path="/docs/guides" element={<Docs variant="guides" />} />
        <Route path="/status" element={<Status />} />
        <Route path="/changelog" element={<Changelog />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/newsroom" element={<Newsroom />} />
        <Route path="/playground" element={<Playground />} />

        <Route path="/research" element={<ResearchOverview />} />
        <Route path="/understand" element={<ResearchDetail slug="understand" />} />
        <Route path="/structure" element={<ResearchDetail slug="structure" />} />
        <Route path="/priorities" element={<ResearchDetail slug="priorities" />} />

        <Route path="/about" element={<About />} />
        <Route path="/security" element={<Security />} />
        <Route path="/careers" element={<Careers />} />
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
