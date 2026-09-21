import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const apiDependencyYouDontControlPost: Article = {
  slug: "api-dependency-you-dont-control",
  title: "Your API is becoming a dependency you don't control",
  deck:
    "API contracts, versioning, rate limits, vendor changes, cascading failures, and what dependency really means.",
  category: "Engineering",
  date: "27 February 2026",
  dateIso: "2026-02-27",
  readTime: readTime(1500),
  author,
  tags: ["API", "Dependencies", "Integration"],
  art: {
    label: "Engineering",
    cells: ["Every external API is someone else's roadmap on your critical path"],
    tone: "ink",
  },
  body: [
    p(
      "Your product integrates a payment provider, a identity service, a maps API, a CRM, a government registry. Each integration started as a ticket: connect, authenticate, ship. Over time the integration becomes load-bearing. Customer journeys depend on it. Revenue depends on it. Nobody updated the dependency register because APIs feel lighter than servers — until the vendor changes pricing, deprecates a field, throttles your traffic, or has an outage that becomes your outage.",
    ),
    p(
      "An API dependency is still a dependency. You do not control its availability, its roadmap, its rate limits, or its definition of breaking change. You control your side of the contract — and often not even that, if the vendor interprets terms differently after an acquisition.",
    ),
    p(
      "Constrange treats external APIs as architectural components with failure modes, not as glue code. The question is not whether to integrate. It is whether you know what you have outsourced — and what you will do when the API behaves unlike the documentation.",
    ),
    h2("Contracts are promises with an asymmetry"),
    p(
      "API documentation describes happy paths. Production describes rate limits, ambiguous error codes, undocumented fields, and behaviour changes without version bumps. Your contract tests may pass while your customers fail because the vendor rolled out a change to ten percent of traffic first.",
    ),
    fig(
      "api-dependency-uncontrolled.svg",
      "Your system diagram with a thin API line hiding vendor outages, version churn, and rate limit walls",
      "The line on the diagram is thin. The dependency is not.",
    ),
    {
      t: "table",
      caption: "What you control vs what you do not",
      head: ["Your side", "Vendor side"],
      rows: [
        ["Retry and timeout policy", "Actual latency and error semantics"],
        ["Caching strategy", "Cache invalidation rules that change"],
        ["Fallback behaviour", "Whether fallback is permitted by terms"],
        ["Version you call", "Deprecation timeline they enforce"],
        ["Incident communication to customers", "Their status page accuracy"],
      ],
    },
    h2("Versioning is a lifecycle, not a header"),
    p(
      "Teams pin a version in config and forget it. Vendors sunset versions on calendars that do not respect your change freeze. Fields marked optional disappear. Semver on the label does not guarantee semver in behaviour. If you have not rehearsed migration across API versions, you do not have a version strategy — you have a hope.",
    ),
    ul([
      "Deprecated endpoints still in production at sunset minus thirty days",
      "Breaking changes announced in a blog post, not a changelog",
      "Sandbox behaviour that does not match production edge cases",
      "Multiple teams on different versions of the same vendor API",
      "No owner for vendor release notes review",
    ]),
    note(
      "If nobody reads the vendor changelog until something breaks, the API is an unmanaged dependency — regardless of integration quality.",
    ),
    h2("Rate limits are architecture"),
    p(
      "Rate limits are not edge cases. They are capacity boundaries on your critical path. A burst of legitimate traffic — campaign, batch reconciliation, retry storm — can convert success into four-twenty-nine responses that cascade into your own timeouts. Designing without rate limit headroom is designing for silent failure at scale.",
    ),
    p(
      "Read limits early. Model your peak honestly, including retries. Negotiate limits before launch, not during incident. Cache where terms allow. Queue where latency permits. Fail gracefully where it does not — with a customer message that is not 'unknown error'.",
    ),
    ol([
      "Per-client limits lower than your peak concurrent users",
      "Daily quotas exhausted by batch jobs sharing the same key",
      "Different limits per endpoint; only one documented",
      "Hard stops without graceful degradation path",
      "Retry logic that burns quota faster than progress",
    ]),
    h2("Vendor change is a deployment you did not schedule"),
    h3("Acquisitions, pivots, and policy shifts"),
    p(
      "Vendors get acquired. APIs get bundled. Free tiers disappear. Data handling changes. A region stops being served. Your architecture assumed stability because the SDK was convenient. Convenience is not control. When the vendor's strategy moves, your roadmap moves with it — unless you built abstraction and exit paths early.",
    ),
    {
      t: "table",
      caption: "Vendor change signals to monitor",
      head: ["Signal", "Risk"],
      rows: [
        ["Pricing model change", "Budget and unit economics break"],
        ["Terms of use update", "Data residency or use case forbidden"],
        ["SDK deprecation", "Security patches stop"],
        ["Endpoint consolidation", "Hidden coupling exposed"],
        ["Support tier restructure", "Incident response slows"],
      ],
    },
    h2("Cascading failure through the API boundary"),
    p(
      "Your service waits on the vendor. Your UI waits on your service. The vendor times out slowly. Your thread pool fills. Unrelated features stall. The API dependency is one hop but the blast radius is your platform — because shared connection pools and synchronous calls were easier than isolation.",
    ),
    p(
      "Treat external calls like any unreliable dependency: timeouts shorter than the user's patience, bulkheads so one integration cannot exhaust workers, circuit breakers with observable state, and async paths where the business allows.",
    ),
    quote(
      "You outsourced the integration. You did not outsource the outage. Customers still call you when the vendor disappears.",
    ),
    h2("What dependency really means on the diagram"),
    p(
      "A dependency is anything whose failure stops your outcome. APIs belong on the diagram with the same seriousness as databases — including RTO assumptions, fallback modes, and named owners who read release notes. If the only documentation is 'we use Stripe' in a README, the organisation does not understand its dependency graph.",
    ),
    ul([
      "No runbook for vendor outage beyond 'wait'",
      "Single API key shared across environments",
      "Secrets in code without rotation rehearsal",
      "Compliance assumed because vendor is 'certified'",
      "No alternative path priced or prototyped",
    ]),
    h2("Designing for APIs you do not control"),
    h3("Abstraction without illusion"),
    p(
      "Wrap vendor APIs behind an internal interface that reflects your domain, not theirs. This is not denial — it is damage containment. Migrations become feasible. Tests mock your interface. Vendor quirks stay in one module instead of spreading through the codebase.",
    ),
    h3("Exit options before you need them"),
    p(
      "Two vendors is expensive. One vendor with no exit is more expensive when they change terms. Prototype the second path before the contract renewal negotiation. Know what data you can export and how long migration takes — in weeks, not slides.",
    ),
    h2("Operational habits for API dependencies"),
    ol([
      "Assign an owner to each critical vendor integration — release notes, limits, incidents.",
      "Contract test against vendor sandboxes on every deploy; record drift.",
      "Track quota usage like CPU; alert before hard stops.",
      "Rehearse vendor outage quarterly; measure customer impact.",
      "Maintain an integration register linked to architecture diagrams.",
    ]),
    p(
      "These habits are boring. So are most production incidents that started with 'the API changed'.",
    ),
    h2("Integration registers nobody maintains"),
    p(
      "Enterprise architecture repositories love boxes. They rarely list which external API keys exist, who rotates them, or which customer journeys fail when a vendor degrades. The register rots because integrations feel small at go-live and load-bearing at scale.",
    ),
    p(
      "Constrange starts dependency reviews with production config and finance invoices — not diagrams. Keys, quotas, and renewal dates tell the truth about coupling. If only one engineer knows the integration exists, you have a bus factor on your critical path.",
    ),
    ol([
      "Inventory every external API on the revenue and fulfilment path.",
      "Assign named owners — not 'platform team' generically.",
      "Link each integration to customer-visible outcomes and SLAs.",
      "Review vendor terms annually, not only at procurement.",
      "Archive post-mortems where vendor behaviour was root cause.",
    ]),
    h2("Questions for your next dependency review"),
    ul([
      "Which customer outcomes stop if this API is down for four hours?",
      "Who read the last vendor changelog — and when?",
      "What happens at rate limit during our honest peak?",
      "How long to migrate to an alternative — tested, not estimated?",
      "Is this call synchronous on a path that cannot afford vendor latency?",
    ]),
    p(
      "APIs accelerate delivery. They also concentrate risk. Naming that risk is how engineering keeps control of outcomes it no longer fully controls at the wire level.",
    ),
    p(
      "Your API is becoming a dependency you do not control the moment customer value flows through it without a owner, a fallback story, and an honest bill for vendor behaviour. Integrate deliberately — or inherit someone else's roadmap as your incident queue.",
    ),
    p(
      "Control what you can: timeouts, isolation, abstraction, exit rehearsal, and honest customer messaging. Leave the vendor's roadmap on their slide deck — not unexamined on yours.",
    ),
    p(
      "Dependency reviews that start in production — keys, quotas, invoices, incident history — finish faster than reviews that start in the architecture repository. The repository shows intent. Production shows coupling.",
    ),
    h3("The contract is not the relationship"),
    p(
      "Legal terms, support tiers, and roadmap calls matter as much as OpenAPI specs. A breaking change announced in a changelog is still a breaking change if your abstraction layer never isolated consumers from field renames. Engineering control ends where commercial relationship begins — unless you have rehearsed what happens when the relationship shifts.",
    ),
    p(
      "Procurement often optimises for unit price. Operations pays for coupling in incidents, rewrites, and customer apologies. Name that trade explicitly before the API becomes load-bearing.",
    ),
    cta(
      "Critical path runs through a vendor API you do not own?",
      "Bring the integration map and the last three incidents. We will help you read where API dependency is load-bearing — and design boundaries, fallbacks, and exit paths that match your risk.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Should we wrap every external API?",
      "Wrap load-bearing integrations at minimum. Convenience APIs can stay thin if failure is acceptable.",
    ],
    [
      "How often should we review vendor changelogs?",
      "Critical integrations: weekly scan, immediate review on deprecation notices. Assign an owner.",
    ],
    [
      "Are webhooks safer than polling?",
      "Different failure modes — delivery retries, signature rotation, ordering. Neither removes dependency.",
    ],
    [
      "When is a second vendor worth the cost?",
      "When the integration is revenue-critical and exit time without a prototype exceeds one quarter.",
    ],
  ],
}
