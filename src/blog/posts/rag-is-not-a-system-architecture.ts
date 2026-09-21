import type { Article } from "../types"
import { author, cta, fig, h2, h3, note, ol, p, quote, readTime, ul } from "../helpers"

export const ragIsNotSystemArchitecturePost: Article = {
  slug: "rag-is-not-a-system-architecture",
  title: "RAG is not a system architecture",
  deck:
    "Retrieval is one component; discuss ingestion, chunking, indexing, ranking, freshness, permissions, citations, evaluation and failure modes.",
  category: "Engineering",
  date: "13 May 2026",
  dateIso: "2026-05-13",
  readTime: readTime(1500),
  author,
  tags: ["RAG", "Architecture", "Retrieval", "Production AI"],
  art: { label: "Engineering", cells: ["Retrieval is one layer, not the system"], tone: "wine" },
  body: [
    p(
      "Retrieval-augmented generation has become shorthand for a production knowledge system. A vector database, an embedding model, a prompt template, and a demo that cites a PDF. Stakeholders see citations and assume the architecture is solved. Engineering teams inherit a diagram with a box labelled RAG and a mandate to scale it before anyone has named ingestion, permissions, freshness, or what happens when the retrieved chunk is wrong.",
    ),
    p(
      "RAG is a pattern, not an architecture. It describes one move in a longer chain: find relevant material, pass it to a model, generate an answer. The chain includes everything upstream of retrieval and everything downstream of generation. Upstream is where most programmes fail quietly — duplicate sources, stale indexes, documents nobody owns, access rules the demo ignored. Downstream is where failures become visible — confident wrong answers, missing citations, users who stop trusting the system after the third hallucinated policy paragraph.",
    ),
    p(
      "Constrange treats RAG programmes as constraint maps. The interesting limits are rarely the embedding model. They are permissions, freshness, evaluation, and the gap between what retrieval returns and what the user is allowed to know.",
    ),
    h2("What RAG actually is"),
    p(
      "At minimum, RAG combines retrieval with generation. A query becomes a search. Search results become context. The model conditions its answer on that context. That is useful when the model's training data is insufficient, when answers must reflect internal documents, or when citations matter for audit and trust.",
    ),
    p(
      "The pattern does not specify how documents enter the system, how they are chunked, how duplicates are handled, how often indexes refresh, how results are ranked for your users, how access control is enforced at query time, or how you measure whether retrieval helped or hurt. Those omissions are not implementation details. They are the system.",
    ),
    fig(
      "rag-not-architecture.svg",
      "A pipeline diagram with retrieval as one stage among ingestion, permissions, indexing, ranking, generation, citations and evaluation",
      "The box labelled RAG is one stage. Production lives in the arrows between boxes.",
    ),
    {
      t: "table",
      caption: "Pattern versus architecture",
      head: ["RAG as a pattern", "RAG as production architecture"],
      rows: [
        ["Retrieve then generate", "Ingest, govern, index, retrieve, rank, generate, cite, evaluate"],
        ["Demo on a static corpus", "Living corpus with owners and drift"],
        ["Single tenant, open access", "Permissions enforced per chunk and per user"],
        ["Success = plausible answer", "Success = correct, permitted, attributable answer"],
        ["Failure = bad prompt", "Failure = stale index, wrong chunk, silent overreach"],
      ],
    },
    h2("Ingestion: where architectures hide their debt"),
    p(
      "Ingestion is not a one-time import. Documents arrive continuously: policy updates, product releases, ticket resolutions, contracts, wikis nobody maintains, exports from systems that disagree on definitions. Without ingestion design, the index becomes a museum of whatever was convenient at go-live.",
    ),
    p(
      "Strong ingestion programmes name sources, owners, formats, and retirement rules. They handle duplicates — the same policy in SharePoint, Confluence, and a PDF attachment. They record lineage: which version of which document produced which chunk. They fail visibly when a source is unreachable rather than serving last year's answer with today's confidence.",
    ),
    ul([
      "Source registry: what enters, from where, under whose authority",
      "Change detection: what triggers re-indexing versus full rebuild",
      "Duplicate resolution: one canonical chunk, not three conflicting ones",
      "Format handling: tables, appendices, and scanned PDFs need explicit treatment",
      "Deletion and retention: removed documents must leave the index, not linger as ghosts",
    ]),
    note(
      "If ingestion is a script someone runs manually, freshness is a hope — not a property of the system.",
    ),
    h2("Chunking and indexing: the decisions that shape answers"),
    h3("Chunk size is a product decision"),
    p(
      "Chunks that are too small lose context — a paragraph about approval limits separated from the table that defines them. Chunks that are too large dilute retrieval — the model receives noise and cites the wrong section. Chunk boundaries should follow how people actually look things up in your organisation, not a default token count from a tutorial.",
    ),
    h3("Metadata is not optional"),
    p(
      "Title, section, effective date, product line, region, classification, and document owner belong in the index. Ranking and filtering depend on them. Permissions often depend on them. Teams that embed raw text alone discover too late that retrieval cannot respect 'finance only' or 'effective after January' because nobody stored those facts.",
    ),
    h3("Hybrid search is usually necessary"),
    p(
      "Semantic search finds conceptually similar text. Keyword search finds exact identifiers — SKUs, regulation numbers, internal codes. Production systems combine both because users ask both ways. A architecture that assumes vectors alone will miss the query that matters most on Tuesday.",
    ),
    h2("Ranking, freshness, and permissions"),
    p(
      "Retrieval returns candidates. Ranking decides what the model sees. Default similarity scores are not a ranking strategy. You need boosts for authoritative sources, penalties for superseded versions, recency signals where policy changes often, and business rules that reflect how experts actually trust documents.",
    ),
    p(
      "Freshness is a constraint, not a cron job you add later. Legal, operations, and product teams have different tolerances for staleness. A support assistant that cites last quarter's refund policy is not slightly outdated — it is a liability dressed as automation. Define maximum age per source class and measure violations before users report them.",
    ),
    p(
      "Permissions are where demos cheat. The POC indexes a folder everyone can read. Production must enforce access at query time: user identity, role, data classification, jurisdiction. A retrieved chunk the user is not allowed to see is a breach whether or not the model mentions it. Architecture must filter before generation, not apologise after.",
    ),
    {
      t: "table",
      caption: "Three constraints retrieval must respect",
      head: ["Constraint", "When ignored…"],
      rows: [
        ["Freshness", "Correct-sounding answers from obsolete material"],
        ["Permissions", "Leaked context and audit failure"],
        ["Authority", "Popular drafts outrank approved policy"],
      ],
    },
    h2("Citations, generation, and trust"),
    p(
      "Citations exist so users can verify. That only works when citations point to stable locations, include enough context to find the passage, and reflect what the model actually used — not a post-hoc link to a related document. Fragile citations erode trust faster than no citations at all, because they simulate accountability.",
    ),
    p(
      "Generation should be explicit about uncertainty when retrieval is weak. If nothing relevant returns, the system should say so — not generalise from partial chunks. Fallback paths matter: escalate to a human, search the official portal, open a ticket. A RAG layer that always produces an answer trains users to stop checking sources.",
    ),
    quote(
      "A citation that cannot be audited is not a citation. It is decoration on a guess.",
    ),
    h2("Evaluation and failure modes"),
    p(
      "Production RAG needs evaluation beyond 'looks good in the demo'. Measure retrieval precision and recall on representative queries. Measure answer correctness against grounded truth. Measure citation accuracy — did the cited passage support the claim? Measure permission violations in test harnesses. Measure latency and cost per successful answer, not per request.",
    ),
    p(
      "Failure modes are predictable once you look for them. Stale index serving outdated policy. Wrong chunk ranked first because duplicates were never merged. Over-broad retrieval flooding the context window. Under-retrieval causing the model to improvise. Permission gaps exposing restricted content. Citation to a document the user cannot open. Silent language drift when source documents change wording but IDs stay the same.",
    ),
    ol([
      "Build a golden set of questions from real operations — including edge cases and known hard queries",
      "Run retrieval-only evaluation before blaming the model",
      "Track regressions when sources or chunking change",
      "Monitor production queries that retrieve nothing or retrieve too much",
      "Review incidents where users acted on wrong answers — root cause by layer, not by vibe",
    ]),
    h2("Organisation and ownership"),
    p(
      "RAG systems touch content owners, security, data engineering, platform, and the teams who answer when the bot is wrong. Without named owners, freshness slips, permissions rot, and evaluation becomes a slide. The architecture is also an operating model: who approves a new source, who responds when retrieval quality drops, who signs off when policy documents change weekly.",
    ),
    p(
      "Programmes that treat RAG as a model feature ship a chatbot. Programmes that treat it as a knowledge supply chain ship something operations can maintain — slower at first, survivable later.",
    ),
    h2("A sensible sequencing"),
    ol([
      "Month one: inventory sources, owners, access classes, and acceptable staleness",
      "Month two: ingestion and chunking on a bounded corpus with lineage and deduplication",
      "Month three: retrieval and ranking with hybrid search and permission filters",
      "Month four: generation with citations, abstention, and human fallback",
      "Month five onward: evaluation harness, monitoring, and source lifecycle governance",
    ]),
    p(
      "Skipping straight to month four produces the demo again — this time with a vector database invoice.",
    ),
    h2("Questions before you fund scale"),
    ul([
      "What enters the index, how often, and who owns each source class?",
      "How do we enforce permissions at retrieval time, not after generation?",
      "What is the maximum acceptable age of an answer per domain?",
      "How do we know a citation is correct — and what do we do when it is not?",
      "What happens when retrieval returns nothing — abstain, escalate, or search elsewhere?",
    ]),
    p(
      "If the programme cannot answer those questions, RAG is not your architecture yet. It is a hypothesis that retrieval might help — once the rest of the system exists.",
    ),
    cta(
      "Building retrieval into production and discovering the demo skipped half the pipeline?",
      "Bring your sources, permissions, and failure stories. We will help you map what retrieval needs — and what must exist before the model matters.",
      "Start a conversation",
    ),
  ],
  faqs: [
    [
      "Do we need a vector database to do RAG?",
      "Not always. You need search that fits your queries, metadata, and scale. Vectors are one tool; keyword and hybrid approaches are often required.",
    ],
    [
      "How often should we re-index?",
      "Per source class, based on how fast content changes and how costly wrong answers are — not a single nightly job for everything.",
    ],
    [
      "Can we add permissions later?",
      "You can, but retrofitting is expensive and risky. Permission filters belong in retrieval design from the first production slice.",
    ],
    [
      "What metric matters most?",
      "Grounded correctness on real user questions — retrieval quality, answer accuracy, and citation fidelity together, not latency alone.",
    ],
  ],
}
