import { posts, postBySlug } from "@/blog-content"
import { productContent, solutionContent } from "@/page-content"
import { faqs as engagementFaqs, productBySlug, products, solutionBySlug } from "@/site-data"

export const SITE_ORIGIN = "https://constrange.com"
export const SITE_NAME = "Constrange"
export const DEFAULT_OG = `${SITE_ORIGIN}/og.svg`
export const LOGO_URL = `${SITE_ORIGIN}/brand/constrange-mark.svg`

export type SeoRecord = {
  title: string
  description: string
  canonical: string
  robots: string
  ogType: "website" | "article"
  ogImage?: string
  breadcrumbs: [string, string][]
  h1: string
  primary: string
  intent: string
  schema: "home" | "service" | "solution" | "article" | "collection" | "about" | "contact" | "legal" | "method"
  faqs?: [string, string][]
  datePublished?: string
  dateModified?: string
}

type PageSeo = Omit<SeoRecord, "canonical" | "ogType" | "ogImage" | "schema"> & {
  path: string
  schema?: SeoRecord["schema"]
  ogType?: SeoRecord["ogType"]
  robots?: string
}

const INDEX = "index, follow"
const NOINDEX = "noindex, follow"

function abs(path: string) {
  if (path.startsWith("http")) return path
  return `${SITE_ORIGIN}${path === "/" ? "/" : path}`
}

function pack(page: PageSeo): SeoRecord {
  return {
    title: page.title,
    description: page.description,
    canonical: abs(page.path),
    robots: page.robots ?? INDEX,
    ogType: page.ogType ?? "website",
    breadcrumbs: page.breadcrumbs,
    h1: page.h1,
    primary: page.primary,
    intent: page.intent,
    schema: page.schema ?? "collection",
    faqs: page.faqs,
    datePublished: page.datePublished,
    dateModified: page.dateModified,
  }
}

const pages: PageSeo[] = [
  {
    path: "/",
    title: "Constrange | Independent Decision Intelligence",
    description:
      "Constrange helps organisations understand what is changing, what matters, and what to do next. Independent review of important technology, AI and operational decisions.",
    h1: "Complex problems. Clearer paths forward.",
    primary: "independent decision intelligence",
    intent: "provider",
    schema: "home",
    breadcrumbs: [["Home", "/"]],
  },
  {
    path: "/decision-review",
    title: "Constrange Decision Review™ | Independent Technology & AI Decision Review",
    description:
      "An independent review of an important technology, AI or operational decision — before significant money, time or organisational capacity is committed.",
    h1: "Constrange Decision Review™",
    primary: "decision review",
    intent: "service",
    schema: "service",
    breadcrumbs: [
      ["Home", "/"],
      ["Decision Review", "/decision-review"],
    ],
    faqs: engagementFaqs.slice(0, 5),
  },
  {
    path: "/products",
    title: "Technology Consulting Services | Constrange",
    description:
      "Strategy, systems, AI, automation and implementation — framed around the actual problem, not a catalogue of tools or a default stack.",
    h1: "From complexity to a practical path",
    primary: "technology consulting services",
    intent: "service",
    schema: "collection",
    breadcrumbs: [
      ["Home", "/"],
      ["What we do", "/products"],
    ],
  },
  {
    path: "/products/strategy",
    title: "Business & Technology Strategy | Constrange",
    description:
      "Where business priorities and technology decisions should connect — before a stack is chosen. Constraint, trade-offs, and a path leadership can stand behind.",
    h1: "Business & technology strategy",
    primary: "business and technology strategy",
    intent: "service",
    schema: "service",
    breadcrumbs: [
      ["Home", "/"],
      ["What we do", "/products"],
      ["Strategy", "/products/strategy"],
    ],
  },
  {
    path: "/products/ai-automation",
    title: "AI Strategy & Automation Consulting | Constrange",
    description:
      "Practical uses of AI and automation, identified against the work. We test whether a model is required — or whether a simpler change would do.",
    h1: "AI & automation opportunity",
    primary: "AI strategy and automation consulting",
    intent: "service",
    schema: "service",
    breadcrumbs: [
      ["Home", "/"],
      ["What we do", "/products"],
      ["AI & automation", "/products/ai-automation"],
    ],
  },
  {
    path: "/products/systems-operations",
    title: "Process & Systems Design | Constrange",
    description:
      "Disconnected processes and overlapping tools, redesigned into a way of working people can follow — including unofficial paths and the joins between teams.",
    h1: "Process & system design",
    primary: "process and systems design",
    intent: "service",
    schema: "service",
    breadcrumbs: [
      ["Home", "/"],
      ["What we do", "/products"],
      ["Systems & operations", "/products/systems-operations"],
    ],
  },
  {
    path: "/products/solution-design",
    title: "Solution Architecture Consulting | Constrange",
    description:
      "A complex requirement turned into a buildable shape: what is built, what is connected, in what order — and what will not be done yet.",
    h1: "Solution architecture",
    primary: "solution architecture consulting",
    intent: "service",
    schema: "service",
    breadcrumbs: [
      ["Home", "/"],
      ["What we do", "/products"],
      ["Solution design", "/products/solution-design"],
    ],
  },
  {
    path: "/products/implementation",
    title: "Implementation Strategy Consulting | Constrange",
    description:
      "A practical path from a decision to work on the ground: owners, sequence, and a first move small enough to be real.",
    h1: "Implementation strategy",
    primary: "implementation strategy",
    intent: "service",
    schema: "service",
    breadcrumbs: [
      ["Home", "/"],
      ["What we do", "/products"],
      ["Implementation", "/products/implementation"],
    ],
  },
  {
    path: "/products/transformation",
    title: "Digital Transformation Consulting | Constrange",
    description:
      "People, process and technology improved together — not a tool rollout dressed as change. Continuity while the next way of working is built.",
    h1: "Digital transformation",
    primary: "digital transformation consulting",
    intent: "service",
    schema: "service",
    breadcrumbs: [
      ["Home", "/"],
      ["What we do", "/products"],
      ["Transformation", "/products/transformation"],
    ],
  },
  {
    path: "/products/judgement",
    title: "Structured Problem Solving | Constrange",
    description:
      "A generic model can supply information. It cannot hold your systems, constraints, or the cost of a wrong turn. Judgement against the actual situation.",
    h1: "Context, judgement & structured problem solving",
    primary: "structured problem solving",
    intent: "service",
    schema: "service",
    breadcrumbs: [
      ["Home", "/"],
      ["What we do", "/products"],
      ["Judgement", "/products/judgement"],
    ],
  },
  {
    path: "/features",
    title: "Consulting Capabilities | Constrange",
    description:
      "One list of how Constrange contributes — problem framing, constraint reading, architecture, and a first move — without a service menu.",
    h1: "The work, in one list",
    primary: "consulting capabilities",
    intent: "information",
    schema: "collection",
    breadcrumbs: [
      ["Home", "/"],
      ["What we do", "/products"],
      ["Capabilities", "/features"],
    ],
  },
  {
    path: "/pricing",
    title: "How an Engagement Works | Constrange",
    description:
      "How a Decision Review engagement works: conversation, scope, review and readout. Fixed fee, scoped to the decision — not an open-ended rate card.",
    h1: "How an engagement works.",
    primary: "consulting engagement",
    intent: "service",
    schema: "method",
    faqs: engagementFaqs,
    breadcrumbs: [
      ["Home", "/"],
      ["Working with us", "/pricing"],
    ],
  },
  {
    path: "/how-we-work",
    title: "How a Decision Becomes Clear | Constrange",
    description:
      "The Constrange Decision Review™ method: define, establish evidence, challenge assumptions, evaluate options, and recommend — proceed, modify, or do not proceed.",
    h1: "How a decision becomes clear.",
    primary: "decision review method",
    intent: "information",
    schema: "method",
    breadcrumbs: [
      ["Home", "/"],
      ["How we work", "/how-we-work"],
    ],
  },
  {
    path: "/docs/api-reference",
    title: "Consulting Stages in Detail | Constrange",
    description:
      "What each stage produces: situation reading, problem statement, options, architecture, and a first move — inspectable enough to challenge.",
    h1: "What each stage produces",
    primary: "consulting stages and artefacts",
    intent: "information",
    schema: "method",
    breadcrumbs: [
      ["Home", "/"],
      ["How we work", "/how-we-work"],
      ["Stages in detail", "/docs/api-reference"],
    ],
  },
  {
    path: "/docs/guides",
    title: "Working Notes & Briefs | Constrange",
    description:
      "The shape of a brief, a map, a sequence, and a constraint log — working notes from the Constrange method, not a playbook to copy.",
    h1: "Working notes",
    primary: "consulting working notes",
    intent: "information",
    schema: "method",
    breadcrumbs: [
      ["Home", "/"],
      ["How we work", "/how-we-work"],
      ["Working notes", "/docs/guides"],
    ],
  },
  {
    path: "/customers",
    title: "Who Constrange Helps | Complex Organisations",
    description:
      "Leaders who must decide under complexity — in operations, technology, service, growth and regulated work. Situations, not sector slogans.",
    h1: "Leaders who have to decide under complexity.",
    primary: "who Constrange helps",
    intent: "provider",
    schema: "collection",
    breadcrumbs: [
      ["Home", "/"],
      ["Who we help", "/customers"],
    ],
  },
  {
    path: "/enterprise",
    title: "Consulting for Complex Organisations | Constrange",
    description:
      "When several programmes, several systems and several owners collide. Constrange sits with organisational complexity — not a transformation slogan.",
    h1: "Organisations under complexity",
    primary: "consulting for complex organisations",
    intent: "solution",
    schema: "solution",
    breadcrumbs: [
      ["Home", "/"],
      ["Who we help", "/customers"],
      ["Organisations", "/enterprise"],
    ],
  },
  {
    path: "/solutions/operations",
    title: "Operations Consulting | Constrange",
    description:
      "When work has outgrown how it is organised, and tools arrive faster than the process can absorb them. Start with the unofficial path, not the next platform.",
    h1: "Start with the work, not the tool.",
    primary: "operations consulting",
    intent: "solution",
    schema: "solution",
    breadcrumbs: [
      ["Home", "/"],
      ["Who we help", "/customers"],
      ["Operations", "/solutions/operations"],
    ],
  },
  {
    path: "/solutions/customer-experience",
    title: "Customer Operations Consulting | Constrange",
    description:
      "When service quality depends on several teams and several systems, and the customer should not have to know any of that. The join is the product.",
    h1: "The join is the product.",
    primary: "customer operations consulting",
    intent: "solution",
    schema: "solution",
    breadcrumbs: [
      ["Home", "/"],
      ["Who we help", "/customers"],
      ["Customer & service", "/solutions/customer-experience"],
    ],
  },
  {
    path: "/solutions/technology-leaders",
    title: "Technology Leadership Consulting | Constrange",
    description:
      "When the organisation expects a technology answer, and the harder work is choosing which problem is worth solving. Build, buy, or wait — made explicit.",
    h1: "Choose the problem first.",
    primary: "technology leadership consulting",
    intent: "solution",
    schema: "solution",
    breadcrumbs: [
      ["Home", "/"],
      ["Who we help", "/customers"],
      ["Technology leaders", "/solutions/technology-leaders"],
    ],
  },
  {
    path: "/solutions/growth",
    title: "Consulting for Growing Teams | Constrange",
    description:
      "When informal ways of working no longer scale, and the next system will either create order or freeze the wrong habits. Structure without rigidity.",
    h1: "Structure without rigidity.",
    primary: "consulting for growing organisations",
    intent: "solution",
    schema: "solution",
    breadcrumbs: [
      ["Home", "/"],
      ["Who we help", "/customers"],
      ["Growing teams", "/solutions/growth"],
    ],
  },
  {
    path: "/solutions/regulated",
    title: "Regulated Environment Consulting | Constrange",
    description:
      "When a wrong step is expensive, and technology cannot be introduced as an experiment on live operations. Caution as a design input.",
    h1: "Caution is a design input.",
    primary: "consulting for regulated environments",
    intent: "solution",
    schema: "solution",
    breadcrumbs: [
      ["Home", "/"],
      ["Who we help", "/customers"],
      ["Regulated environments", "/solutions/regulated"],
    ],
  },
  {
    path: "/about",
    title: "About Constrange | The Practice",
    description:
      "Constrange is an independent decision-intelligence practice. We help organisations evaluate important technology, AI and operational decisions before significant commitment.",
    h1: "The name is the work.",
    primary: "about Constrange",
    intent: "information",
    schema: "about",
    breadcrumbs: [
      ["Home", "/"],
      ["About", "/about"],
    ],
  },
  {
    path: "/blog",
    title: "Thinking & Articles | Constrange",
    description:
      "Writing on important decisions: when to automate, when to delay AI investment, how to stress-test technology choices, and why judgement is not a model output.",
    h1: "Writing from the work",
    primary: "decision intelligence essays",
    intent: "information",
    schema: "collection",
    breadcrumbs: [
      ["Home", "/"],
      ["Blog", "/blog"],
    ],
  },
  {
    path: "/newsroom",
    title: "Practice Notes | Constrange",
    description:
      "Company writing from Constrange — shorter notes on the practice, kept distinct from the longer essays on the blog.",
    h1: "Notes",
    primary: "Constrange practice notes",
    intent: "information",
    schema: "collection",
    breadcrumbs: [
      ["Home", "/"],
      ["Notes", "/newsroom"],
    ],
  },
  {
    path: "/research",
    title: "Thinking | Constrange Decision Intelligence",
    description:
      "Research and writing on important technology, AI and operational decisions — automation, system cost, investment stress-tests, and when software begins making operational choices.",
    h1: "Thinking",
    primary: "decision intelligence research",
    intent: "information",
    schema: "method",
    breadcrumbs: [
      ["Home", "/"],
      ["Thinking", "/research"],
    ],
  },
  {
    path: "/understand",
    title: "Understand the Situation | Constrange",
    description:
      "The first hold: work, systems, people and constraints as they actually are — including unofficial paths — before a tool is chosen.",
    h1: "Understand",
    primary: "understanding complex business situations",
    intent: "information",
    schema: "method",
    breadcrumbs: [
      ["Home", "/"],
      ["Thinking", "/research"],
      ["Understand", "/understand"],
    ],
  },
  {
    path: "/structure",
    title: "Structure the Work | Constrange",
    description:
      "The second hold: turn a dense situation into architecture, owners and sequence, so a decision can survive contact with operations.",
    h1: "Structure",
    primary: "structuring complex work",
    intent: "information",
    schema: "method",
    breadcrumbs: [
      ["Home", "/"],
      ["Thinking", "/research"],
      ["Structure", "/structure"],
    ],
  },
  {
    path: "/priorities",
    title: "Set Priorities Under Constraint | Constrange",
    description:
      "The third hold: what moves first, what can wait, and what will not be done yet. Priorities treated as design, not as a slide of urgency.",
    h1: "Priorities",
    primary: "priority setting under constraint",
    intent: "information",
    schema: "method",
    breadcrumbs: [
      ["Home", "/"],
      ["Thinking", "/research"],
      ["Priorities", "/priorities"],
    ],
  },
  {
    path: "/languages",
    title: "Operating Contexts | Constrange",
    description:
      "The landscapes Constrange reads: operations, service, technology, growth and regulated work. Context is the material, not a template.",
    h1: "Contexts",
    primary: "operating contexts for consulting",
    intent: "information",
    schema: "collection",
    breadcrumbs: [
      ["Home", "/"],
      ["Contexts", "/languages"],
    ],
  },
  {
    path: "/status",
    title: "Availability | Constrange",
    description:
      "How Constrange currently takes on work. Capacity is finite; we say whether we can hold a situation — and if we cannot.",
    h1: "Open to a small number of situations.",
    primary: "Constrange availability",
    intent: "information",
    schema: "about",
    breadcrumbs: [
      ["Home", "/"],
      ["Availability", "/status"],
    ],
  },
  {
    path: "/changelog",
    title: "Practice Changelog | Constrange",
    description:
      "How the Constrange practice has shifted over time: method, writing, and what we treat as a first-class artefact.",
    h1: "Practice notes",
    primary: "Constrange practice changelog",
    intent: "information",
    schema: "collection",
    breadcrumbs: [
      ["Home", "/"],
      ["Practice notes", "/changelog"],
    ],
  },
  {
    path: "/contact",
    title: "Discuss a Decision | Constrange",
    description:
      "Tell us what you are trying to decide, what is changing, or where the situation has become difficult. Book a 30-minute first conversation.",
    h1: "Discuss a decision.",
    primary: "contact Constrange",
    intent: "service",
    schema: "contact",
    breadcrumbs: [
      ["Home", "/"],
      ["Contact", "/contact"],
    ],
  },
  {
    path: "/contact/sales",
    title: "Request a Diagnostic Conversation | Constrange",
    description:
      "When the next move is unclear and an independent Decision Review would help. Book a conversation or describe the decision you are facing.",
    h1: "For a decision that is already due.",
    primary: "diagnostic conversation",
    intent: "service",
    schema: "contact",
    breadcrumbs: [
      ["Home", "/"],
      ["Contact", "/contact"],
      ["A diagnostic", "/contact/sales"],
    ],
  },
  {
    path: "/contact/support",
    title: "Continue an Engagement | Constrange",
    description:
      "For work already in motion. Put the current constraint here so you have a copy, then send it on the channel already in use.",
    h1: "If we are already in the work.",
    primary: "continue a Constrange engagement",
    intent: "service",
    schema: "contact",
    breadcrumbs: [
      ["Home", "/"],
      ["Contact", "/contact"],
      ["Continue the work", "/contact/support"],
    ],
  },
  {
    path: "/contact/startup-program",
    title: "Growing-Team Conversation | Constrange",
    description:
      "When informal coordination is failing and the next system might freeze the wrong habits. Draft the constraint before buying complexity.",
    h1: "Informal coordination is failing.",
    primary: "conversation about a growing organisation",
    intent: "service",
    schema: "contact",
    breadcrumbs: [
      ["Home", "/"],
      ["Contact", "/contact"],
      ["Growing teams", "/contact/startup-program"],
    ],
  },
  {
    path: "/careers",
    title: "Careers | Constrange",
    description:
      "How Constrange hires. There is no invented roster of open roles on this site. If the work described here is the work you do, start a conversation.",
    h1: "We hire against a named need.",
    primary: "Constrange careers",
    intent: "information",
    schema: "about",
    breadcrumbs: [
      ["Home", "/"],
      ["Careers", "/careers"],
    ],
  },
  {
    path: "/media",
    title: "Media Kit | Constrange",
    description:
      "Name, mark and how to describe Constrange: an independent decision-intelligence practice. Complex problems. Clearer paths forward.",
    h1: "Media kit",
    primary: "Constrange media kit",
    intent: "information",
    schema: "about",
    breadcrumbs: [
      ["Home", "/"],
      ["Media kit", "/media"],
    ],
  },
  {
    path: "/security",
    title: "Information Handling | Constrange",
    description:
      "How Constrange treats working material. Your landscape is not content. Confidentiality, named access, and proportionate retention.",
    h1: "Working material is not content.",
    primary: "information handling and confidentiality",
    intent: "information",
    schema: "legal",
    breadcrumbs: [
      ["Home", "/"],
      ["Information handling", "/security"],
    ],
  },
  {
    path: "/legal/terms-of-service",
    title: "Terms of Service | Constrange",
    description:
      "How Constrange offers the work. The public site is information about the practice. A signed engagement letter governs live work.",
    h1: "How Constrange offers the work.",
    primary: "Constrange terms of service",
    intent: "information",
    schema: "legal",
    breadcrumbs: [
      ["Home", "/"],
      ["Terms of service", "/legal/terms-of-service"],
    ],
  },
  {
    path: "/legal/privacy-policy",
    title: "Privacy Policy | Constrange",
    description:
      "What constrange.com collects and what it does not. No tracking cookies. Cal.com bookings are described here. Engagements have their own terms.",
    h1: "What this site does — and does not — collect.",
    primary: "Constrange privacy policy",
    intent: "information",
    schema: "legal",
    breadcrumbs: [
      ["Home", "/"],
      ["Privacy policy", "/legal/privacy-policy"],
    ],
  },
]

const byPath = new Map(pages.map((p) => [p.path, p]))

function notFound(pathname: string): SeoRecord {
  return {
    title: "Page not found | Constrange",
    description: "That address is not part of this site. See what Constrange takes on, or return home.",
    canonical: abs(pathname),
    robots: NOINDEX,
    ogType: "website",
    breadcrumbs: [["Home", "/"]],
    h1: "That page moved",
    primary: "404",
    intent: "information",
    schema: "collection",
  }
}

export function resolveSeo(pathname: string): SeoRecord {
  const path = pathname.replace(/\/+$/, "") || "/"

  if (path === "/docs") {
    const method = byPath.get("/how-we-work")!
    return {
      ...pack(method),
      robots: NOINDEX,
      canonical: abs("/how-we-work"),
    }
  }

  if (path === "/playground") {
    return {
      title: "Diagnostic | Constrange",
      description: "A first reading of a sample pressure — not a live diagnostic, and not a product demo.",
      canonical: abs("/playground"),
      robots: NOINDEX,
      ogType: "website",
      breadcrumbs: [
        ["Home", "/"],
        ["Diagnostic", "/playground"],
      ],
      h1: "A first reading, not a demo",
      primary: "sample diagnostic",
      intent: "information",
      schema: "collection",
    }
  }

  const exact = byPath.get(path)
  if (exact) {
    const rec = pack(exact)
    if (path.startsWith("/products/") && path !== "/products") {
      const slug = path.slice("/products/".length)
      rec.faqs = productContent[slug]?.faqs
    }
    if (path.startsWith("/solutions/")) {
      const slug = path.slice("/solutions/".length)
      rec.faqs = solutionContent[slug]?.faqs
    }
    return rec
  }

  if (path.startsWith("/blog/")) {
    const slug = path.slice("/blog/".length)
    const article = postBySlug(slug)
    if (!article) return notFound(path)
    return {
      title: `${article.title} | Constrange`.slice(0, 70),
      description: article.deck.slice(0, 160),
      canonical: abs(path),
      robots: INDEX,
      ogType: "article",
      breadcrumbs: [
        ["Home", "/"],
        ["Blog", "/blog"],
        [article.title, path],
      ],
      h1: article.title,
      primary: article.title,
      intent: "information",
      schema: "article",
      faqs: article.faqs,
      datePublished: article.dateIso,
      dateModified: article.dateIso,
    }
  }

  if (path.startsWith("/products/")) {
    const slug = path.slice("/products/".length)
    const product = productBySlug(slug)
    if (!product) return notFound(path)
  }

  if (path.startsWith("/solutions/")) {
    const slug = path.slice("/solutions/".length)
    const solution = solutionBySlug(slug)
    if (!solution) return notFound(path)
  }

  return notFound(path)
}

export const indexablePaths = [
  ...pages.map((p) => p.path),
  ...posts.map((p) => `/blog/${p.slug}`),
]

function orgNode() {
  return {
    "@type": "ProfessionalService",
    "@id": `${SITE_ORIGIN}/#org`,
    name: SITE_NAME,
    url: SITE_ORIGIN,
    logo: LOGO_URL,
    image: DEFAULT_OG,
    description:
      "Constrange is an independent decision-intelligence practice. We help organisations evaluate important technology, AI and operational decisions before significant commitment.",
    slogan: "Complex problems. Clearer paths forward.",
    areaServed: "Worldwide",
    knowsAbout: [
      "Decision review",
      "Technology investment decisions",
      "AI adoption decisions",
      "Operational decision-making",
      "Technology risk assessment",
      "Independent second opinion",
    ],
  }
}

function faqNode(faqs: [string, string][]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  }
}

export function jsonLdFor(seo: SeoRecord) {
  const graph: Record<string, unknown>[] = [
    orgNode(),
    {
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      url: SITE_ORIGIN,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_ORIGIN}/#org` },
      inLanguage: "en-GB",
    },
    {
      "@type": "WebPage",
      "@id": `${seo.canonical}#webpage`,
      url: seo.canonical,
      name: seo.title,
      description: seo.description,
      isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
      about: { "@id": `${SITE_ORIGIN}/#org` },
      inLanguage: "en-GB",
    },
  ]

  if (seo.breadcrumbs.length > 1) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: seo.breadcrumbs.map(([name, path], i) => ({
        "@type": "ListItem",
        position: i + 1,
        name,
        item: abs(path),
      })),
    })
  }

  if (seo.schema === "service") {
    const slug = seo.canonical.replace(SITE_ORIGIN, "")
    const product = products.find((p) => `/products/${p.slug}` === slug)
    graph.push({
      "@type": "Service",
      name: product?.name ?? seo.h1,
      description: seo.description,
      provider: { "@id": `${SITE_ORIGIN}/#org` },
      url: seo.canonical,
      serviceType: seo.primary,
    })
  }

  if (seo.schema === "article") {
    graph.push({
      "@type": "BlogPosting",
      headline: seo.h1,
      description: seo.description,
      datePublished: seo.datePublished,
      dateModified: seo.dateModified ?? seo.datePublished,
      author: { "@type": "Organization", name: SITE_NAME, url: SITE_ORIGIN },
      publisher: { "@id": `${SITE_ORIGIN}/#org` },
      mainEntityOfPage: seo.canonical,
      image: DEFAULT_OG,
      inLanguage: "en-GB",
    })
  }

  if (seo.faqs && seo.faqs.length > 0) {
    graph.push(faqNode(seo.faqs))
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  }
}
