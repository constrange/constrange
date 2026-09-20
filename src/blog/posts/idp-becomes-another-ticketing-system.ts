import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const idpBecomesAnotherTicketingSystemPost: Article = {
  slug: "idp-becomes-another-ticketing-system",
  title: "Why your internal developer platform becomes another ticketing system",
  deck:
    '"I need a production PostgreSQL" hides identity, Terraform, network, secrets, policy, and a queue — unless you design against the default.',
  category: "Engineering",
  date: "2 February 2027",
  dateIso: "2027-02-02",
  readTime: readTime(1500),
  author,
  tags: ["Platform engineering", "IDP", "Self-service", "Developer experience"],
  art: { label: "Engineering", cells: ["Self-service that ends in a ticket is not self-service"], tone: "field" },
  body: [
    p(
      "The internal developer platform promise is simple: developers request what they need, the platform delivers, everyone ships faster. The reality in year two is familiar: a portal, a form, a ticket number, a platform team queue that grows faster than headcount. Self-service became another place to wait.",
    ),
    p(
      "This is not because platform engineers are slow or developers are greedy. It is because the request 'I need a production PostgreSQL' is not one thing. It is identity provisioning, infrastructure as code, network segmentation, secrets management, backup policy, monitoring hooks, cost allocation, compliance evidence, and often a human who must approve something the form cannot see. Hide that chain behind a button and you get ticketing with better typography.",
    ),
    p(
      "Constrange helps platform teams name the real workflow — then decide what to automate, what to template, and what must stay human. Without that honesty, every IDP becomes Jira with a logo.",
    ),
    h2("The hidden chain behind every simple request"),
    p(
      "Developers experience requests as nouns: database, queue, bucket, cluster. Platforms experience them as verbs across systems: create principal, attach policy, apply module, peer VPC, inject secret, register service, wire alert, tag for chargeback, document in CMDB. The noun is the tip. The chain is the iceberg.",
    ),
    fig(
      "idp-ticketing-system.svg",
      "Simple request box expanding into identity, IaC, network, secrets, policy, and ticket queue",
      "The portal shows the noun. The platform team lives in the chain.",
    ),
    {
      t: "table",
      caption: "What 'production PostgreSQL' actually contains",
      head: ["Layer", "Work hidden in the request"],
      rows: [
        ["Identity", "Service account, IAM roles, rotation, least privilege"],
        ["Infrastructure", "Terraform module, sizing, HA, backups, patching"],
        ["Network", "Subnet, security groups, private link, egress rules"],
        ["Secrets", "Credential store, injection into workloads, audit"],
        ["Policy", "Data classification, retention, encryption, region rules"],
        ["Operations", "Monitoring, on-call routing, runbooks, cost tags"],
      ],
    },
    h2("Why portals default to tickets"),
    p(
      "Portals are easy to buy and demo. Deep automation is hard and political. A form that opens a ticket satisfies the demo and the audit trail. It does not satisfy the developer who needed the database on Tuesday. Platform teams under pressure ship the portal first and promise automation later. Later becomes never because the ticket queue is full of exceptions that do not fit the template.",
    ),
    p(
      "Exceptions are the real product. The happy path is a blog post. Production requests arrive with legacy dependencies, shared services, wrong region, special retention, and a security question the form did not ask. Each exception becomes a manual step. Manual steps do not scale. The queue grows. Developers learn the unofficial path — ask in Slack, DM the platform lead, use the old Terraform repo. The IDP becomes shelfware with a login page.",
    ),
    note(
      "If median time-to-provision is measured in days, you have a ticketing system — regardless of what the landing page calls itself.",
    ),
    h2("Self-service is an outcome, not a UI"),
    p(
      "True self-service means the developer gets a working, policy-compliant resource without a human touching the request — for a defined class of request. That requires golden paths: opinionated templates where choices are pre-made, guardrails where choices are bounded, and fast feedback when the request is out of scope.",
    ),
    p(
      "Golden paths are not restrictive for sport. They are how platforms absorb complexity so developers do not have to become part-time network engineers. The trade is explicit: fewer knobs, faster delivery. Teams that refuse to standardise cannot automate — they can only ticket.",
    ),
    ul([
      "Catalogue the ten requests that consume eighty percent of queue time",
      "Automate one path end-to-end before adding portal features",
      "Measure time-to-ready, not time-to-ticket-created",
      "Publish what the platform will not do without human review",
    ]),
    h2("Identity and policy: where tickets reproduce"),
    p(
      "Identity is the slowest layer. Who is allowed to request production resources? Which team owns the cost? Which roles can access secrets after provision? Platforms that automate Terraform but leave identity manual recreate the queue at the permissions step. Policy engines help when rules are codified. When policy lives in someone's head, every request is a consultation.",
    ),
    h3("Terraform is not the whole platform"),
    p(
      "Teams invest in modules and pipelines, then wonder why developers still wait. Applying infrastructure is one step. Wiring observability, registering in service catalogue, attaching backup policy, and handing credentials to the workload are often separate systems with separate tickets. End-to-end automation means one transaction across those systems — or honest acknowledgment that the developer must complete steps two through five manually.",
    ),
    {
      t: "table",
      caption: "Portal maturity vs ticketing trap",
      head: ["Ticketing trap", "Self-service outcome"],
      rows: [
        ["Form creates Jira", "Form triggers provisioned resource"],
        ["Status page shows 'in progress'", "Status shows resource health and endpoints"],
        ["Exceptions handled in Slack", "Exceptions routed to defined approvers with SLA"],
        ["Documentation links to wiki", "Embedded policy and live dependency checks"],
        ["Metrics: tickets closed", "Metrics: time-to-ready and developer retry rate"],
      ],
    },
    h2("Developer experience without lying"),
    p(
      "Developers resent platforms that pretend instant delivery while the queue says five days. Honest UX sets expectations: this request is automated in minutes; that request needs security review and typically takes two days. Better still, shift review left — policy checks at submit time, not after a human reads the ticket.",
    ),
    p(
      "Developer experience also means failure messages that teach. 'Request denied' without reason breeds shadow IT. 'Denied: production databases in this region require data residency approval — link here' breeds trust. Platforms earn adoption when they explain the constraint, not when they hide it behind a ticket.",
    ),
    quote(
      "A platform that cannot say no in code will say no in queue depth.",
    ),
    h2("Organisational antibodies"),
    p(
      "Platform teams compete with existing gatekeepers: security review, architecture board, finance allocation, operations change windows. Automating Terraform without aligning those gates moves wait time from platform to security. Programme success requires sponsors who will codify policy — not exceptions stored in email.",
    ),
    p(
      "Constrange often finds the IDP ticket queue is doing the work architecture review never finished: deciding boundaries, standards, and ownership in real time, under pressure, per request. That is expensive governance. Cheaper to decide once, encode in policy, automate the eighty percent, and reserve humans for genuine exceptions.",
    ),
    h2("Escaping the ticketing default"),
    ol([
      "Map the full chain for top requests — identity through operations",
      "Pick one golden path and automate end-to-end including failure messages",
      "Codify policy checks before submission, not after ticket creation",
      "Measure developer outcomes: time-to-ready, not tickets opened",
      "Retire unofficial paths when golden path proves reliable — or document risk",
    ]),
    h3("When tickets are correct"),
    p(
      "Some requests should be tickets: novel architectures, cross-border data, production access for humans, policy exceptions with executive sign-off. The goal is not zero tickets. It is zero tickets for requests that should be automated. Platforms that ticket everything and platforms that automate everything both fail. Discrimination is the work.",
    ),
    h2("Platform product management"),
    p(
      "Treat the IDP as a product with a backlog ranked by developer pain and automation feasibility — not as internal infrastructure that accretes features. Interview developers who stopped using the portal. They will show you the shadow path. Fix that path or kill it deliberately.",
    ),
    p(
      "Roadmaps that prioritise another integration over shortening the top queue are choosing visibility over outcomes. Developers do not want more tiles. They want Tuesday's database on Tuesday.",
    ),
    h2("The platform team's capacity trap"),
    p(
      "Every manual step in the chain consumes platform engineering time that cannot automate the next path. Ticket queues are not steady state — they are a tax that grows with adoption. Teams that measure success by portal launches instead of provisioned resources recruit demand faster than they remove toil.",
    ),
    p(
      "Capacity planning for platform teams must include automation debt: hours spent per request type, recurrence of exceptions, and shadow path volume. Without that data, hiring more platform engineers buys a larger ticket team, not self-service.",
    ),
    h2("Questions for your platform review"),
    ul([
      "What percentage of portal requests complete without human touch?",
      "Where does the chain break after Terraform apply?",
      "Which exceptions recur monthly — and why are they not policy or template?",
      "What do developers use instead of the portal — and is it safer?",
      "Who owns end-to-end time-to-ready, not ticket closure?",
    ]),
    p(
      "Honest answers separate platform engineering from portal administration. Both are work. Only one ships faster.",
    ),
    cta(
      "Portal live but developers still queue in Slack?",
      "Bring your top five requests and the chain behind them. We will help you find what to automate — and what to stop pretending is self-service.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Is some ticketing inevitable?",
      "Yes. Genuine exceptions need humans. The failure is ticketing the routine eighty percent.",
    ],
    [
      "Should we buy an IDP product or build?",
      "Buy for portal and catalog patterns; build golden paths and policy for your estate. Neither alone avoids the queue without integration work.",
    ],
    [
      "How do we prioritise automation?",
      "Rank by request volume times manual steps times developer wait. Automate the highest product of the three first.",
    ],
    [
      "What metric proves we escaped the trap?",
      "Median time-to-ready for standard requests, measured from submit to usable resource — not ticket closed.",
    ],
  ],
}
