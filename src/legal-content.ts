export type LegalKind = "terms" | "privacy" | "handling"

export type LegalSection = {
  id: string
  title: string
  paragraphs: string[]
  items?: string[]
}

export type LegalDoc = {
  kind: LegalKind
  path: string
  kicker: string
  title: string
  lede: string
  updated: string
  sections: LegalSection[]
}

export const legalNav: { kind: LegalKind; label: string; to: string }[] = [
  { kind: "terms", label: "Terms of service", to: "/legal/terms-of-service" },
  { kind: "privacy", label: "Privacy policy", to: "/legal/privacy-policy" },
  { kind: "handling", label: "Information handling", to: "/security" },
]

export const legalDocs: Record<LegalKind, LegalDoc> = {
  terms: {
    kind: "terms",
    path: "/legal/terms-of-service",
    kicker: "Terms of service",
    title: "How Constrange offers the work.",
    lede: "These notes describe the public site and how consultancy is offered. A signed engagement letter governs any live work and takes precedence where the two differ.",
    updated: "6 September 2026",
    sections: [
      {
        id: "who",
        title: "Who these notes are for",
        paragraphs: [
          "Constrange is a technology and business consultancy. The practice helps organisations decide under constraint, complexity, change, and uncertainty — then turn that decision into a path operations can absorb.",
          "These notes apply to anyone using constrange.com, starting a conversation, or considering an engagement. They are written in ordinary language on purpose. If a sentence here and a signed letter disagree, the letter wins.",
        ],
      },
      {
        id: "site",
        title: "The site",
        paragraphs: [
          "The website is information about the practice: how we work, who the work is for, and writing from the work. Nothing on the site is an automated sale of a licence, a subscription, or a default technology stack.",
          "Examples, drawings, and sample readings are illustrative. They are not a diagnosis of your organisation and not a guarantee of a particular outcome.",
        ],
      },
      {
        id: "conversation",
        title: "Conversations and the contact form",
        paragraphs: [
          "You may start a conversation without a polished brief. That invitation is not a commitment by either side to an engagement.",
          "The contact form on this site does not send a message. What you type is kept in the browser for that visit so you can copy it. It is not transmitted to Constrange, stored on a server, or used to open a file. If we are already in conversation, send the note to the address we have been using. If we are not, the form is a drafting aid — not a submission.",
        ],
      },
      {
        id: "engagements",
        title: "Engagements",
        paragraphs: [
          "Live work begins only when both sides have agreed, in writing, what the work is, what it is not, and how it will be paid for. That writing is usually an engagement letter. Until then, a conversation is only a conversation.",
          "The work is advisory unless a separate implementation agreement says otherwise. Direction is always in scope. Build can sit with your team, a partner, or a mix. Either way, recommendations have to be buildable — they are not a warranty that a particular system will be delivered by Constrange.",
        ],
      },
      {
        id: "nature",
        title: "Nature of the work",
        paragraphs: [
          "Judgement under complexity is the point of the practice. A recommendation is a reasoned position about what to do next in a specific situation, including the option to wait, simplify, or change a process instead of buying a layer.",
          "It is not a warranty of a commercial result, a regulatory finding, or a substitute for legal, tax, audit, or clinical advice. Where those professions are required, you remain responsible for instructing them.",
        ],
      },
      {
        id: "your-side",
        title: "What remains yours",
        paragraphs: [
          "You remain responsible for your systems, vendors, people, and regulatory obligations. You decide what to implement, what to stop, and who owns a first move. Constrange does not operate your organisation and does not become a controller of your production systems by giving advice.",
          "You are responsible for the accuracy of what you share, for who inside your organisation is authorised to instruct us, and for obtaining any consents your own rules require before material is shown to us.",
        ],
        items: [
          "Your landscape, data, and unofficial paths stay yours.",
          "Artefacts we produce for an engagement are yours to use inside the organisation that paid for them, unless the letter says otherwise.",
          "Our method, drawings, and public writing remain Constrange’s, including when they appear in a recommendation.",
        ],
      },
      {
        id: "confidentiality",
        title: "Confidentiality",
        paragraphs: [
          "Working material is treated as confidential. The Information handling page describes the practice in more detail. An engagement letter can add tighter terms, named people, and a retention period.",
        ],
      },
      {
        id: "fees",
        title: "Fees and timing",
        paragraphs: [
          "Fees, expenses, and payment timing are set in the engagement letter. Work already delivered remains payable if an engagement ends early, unless the letter says otherwise.",
          "We do not take a success fee on a vendor purchase, and we do not receive a commission for recommending a product. Independence is part of the work.",
        ],
      },
      {
        id: "ending",
        title: "Ending an engagement",
        paragraphs: [
          "Either party can end an engagement with written notice as the letter describes. Work already delivered remains yours to use. We will return or delete working material as the letter and the Information handling page describe.",
        ],
      },
      {
        id: "liability",
        title: "Liability",
        paragraphs: [
          "Advice is given for the situation as described to us. It cannot cover facts that were withheld, unofficial paths that were not shown, or decisions taken after the engagement without a further reading.",
          "To the extent the law allows, Constrange’s liability arising from an engagement is limited to the fees paid for that engagement. We are not liable for indirect or consequential loss, lost profit, or loss arising from a third-party product. Nothing here limits liability that cannot legally be limited, including for fraud or personal injury caused by negligence.",
        ],
      },
      {
        id: "law",
        title: "Law and changes",
        paragraphs: [
          "The governing law, venue, and entity that contracts with you are named in the engagement letter. These public notes do not choose a jurisdiction on their own.",
          "We may update these notes as the practice changes. The date at the top of the page is the date they were last written. Continuing to use the site after a change means you have read the current notes. An engagement already signed is not rewritten by a later website update.",
        ],
      },
    ],
  },
  privacy: {
    kind: "privacy",
    path: "/legal/privacy-policy",
    kicker: "Privacy policy",
    title: "What this site does — and does not — collect.",
    lede: "We collect only what a conversation or an engagement needs. This page is the public summary. An engagement letter can add tighter terms. The Information handling page describes how live working material is treated.",
    updated: "4 September 2026",
    sections: [
      {
        id: "scope",
        title: "Scope",
        paragraphs: [
          "This policy covers constrange.com and contact started from it. It does not replace the confidentiality terms of a signed engagement. If you are already in a live piece of work, the letter and the Information handling page are the more specific account.",
        ],
      },
      {
        id: "site-data",
        title: "What the site collects",
        paragraphs: [
          "Browsing the public pages does not require an account. We do not run a marketing pixel, a third-party analytics tag, or a cookie banner for tracking cookies, because we do not set tracking cookies on this site.",
          "The server or host that delivers the pages may keep ordinary technical logs (such as the time of a request and a network address) for security and operation of the site. Those logs are not used to build a profile of you, and they are not combined with the content of a conversation.",
        ],
      },
      {
        id: "form",
        title: "The contact form",
        paragraphs: [
          "The form on this site does not transmit what you type. It does not create a record on a Constrange server. It is a local drafting step so you can keep a copy. If you want us to receive a note, send it through a channel we have already opened with you, or wait until a conversation has an address attached to it.",
          "Because the form does not send, submitting it is not a request that we process personal information, and it is not consent to marketing. There is no mailing list attached to the button.",
        ],
      },
      {
        id: "conversation-data",
        title: "If we are in conversation",
        paragraphs: [
          "If you write to us, or we write to you, we will hold the contact details you use and the situation you describe, so we can reply and — if we work together — do the work. That typically includes a name, a work email, an organisation, and whatever you choose to say about the pressure you are under.",
          "We use that material to understand whether we can help, to shape an engagement, and to keep a record of what was agreed. We do not sell it. We do not use it to train a public model. We do not pass it to a vendor so they can market to you.",
        ],
      },
      {
        id: "models",
        title: "Models and tools",
        paragraphs: [
          "Constrange may use ordinary professional tools (writing, diagrams, secure file exchange) to do the work. We do not put your working material into a public model as training data. If a tool is used to assist a reading, it is used under the same confidentiality as the rest of the engagement, and it does not become a reason to treat a fluent sentence as a decision.",
        ],
      },
      {
        id: "sharing",
        title: "Who else might see it",
        paragraphs: [
          "Inside Constrange, only the people on the work see the situation in detail. We do not have a large staff and we do not subcontract a reading without telling you.",
          "We may share what the law requires (for example a lawful request we cannot refuse) or what you instruct us to share (for example a briefing sent to a vendor you have chosen). Processors that only host email or files, if used, are bound to keep them for the work and not for their own product.",
        ],
      },
      {
        id: "retention",
        title: "How long we keep it",
        paragraphs: [
          "Contact notes are kept only as long as the conversation or engagement requires, then deleted or returned. An engagement letter can set a specific period. We do not keep a private archive of other organisations’ unofficial paths “for later.”",
          "Artefacts delivered to you (a reading, a path, a first-move note) remain yours to keep. Our copy follows the letter.",
        ],
      },
      {
        id: "rights",
        title: "What you can ask",
        paragraphs: [
          "If you have written to us, you can ask what we hold, ask for a correction, or ask for it to be removed, subject to what we must keep for a live engagement or a legal duty. Send the request through the same channel as the conversation. We will answer in plain language.",
        ],
      },
      {
        id: "children",
        title: "Children",
        paragraphs: [
          "This site and this practice are for organisations and the people who work in them. We do not seek information from children, and we do not offer the work as a consumer service to minors.",
        ],
      },
      {
        id: "changes",
        title: "Changes",
        paragraphs: [
          "The date on this page is when it was last written. A later change to the public policy does not silently rewrite a signed letter. If the way we handle information on the site changes in a material way, we will update this page.",
        ],
      },
    ],
  },
  handling: {
    kind: "handling",
    path: "/security",
    kicker: "Information handling",
    title: "Working material is not content.",
    lede: "Consultancy depends on discretion. We treat your landscape, constraints, and internal debate as confidential working material. This page is the practice. A signed letter can go further.",
    updated: "5 September 2026",
    sections: [
      {
        id: "stance",
        title: "The stance",
        paragraphs: [
          "A situation is shown to us so we can hold it long enough to name a problem. That is a position of trust. We do not treat the unofficial path, the contested picture, or the cost of a wrong turn as material for a case study, a model, or a marketing page.",
          "We do not claim certifications we do not hold. Your regulatory obligations remain yours. This page describes how Constrange behaves; it is not a substitute for your own security or privacy programme.",
        ],
      },
      {
        id: "confidentiality",
        title: "Confidentiality",
        paragraphs: [
          "Working material stays inside the engagement unless you ask otherwise. We do not publish identifiable accounts of your systems, and we do not use a live situation as “anonymised colour” in public writing without a separate, explicit agreement.",
          "If we need an example in a public note, it is invented or so general that it could belong to many organisations. The test is simple: you should not be able to recognise yourselves.",
        ],
      },
      {
        id: "access",
        title: "Named access",
        paragraphs: [
          "Only the people on the work see the situation in detail. There is no internal “anyone can browse the files” culture. Access is named, time-bounded, and tied to the engagement.",
        ],
      },
      {
        id: "systems",
        title: "Your systems, your data",
        paragraphs: [
          "We do not take a copy of a production system unless the work requires it and you have authorised that copy. We do not train public models on what you share. We do not use advisory material to train or improve software unless a signed letter says otherwise.",
          "If a file must move, we prefer a channel you already control. We do not ask for more access than the reading needs.",
        ],
      },
      {
        id: "artefacts",
        title: "Clear artefacts",
        paragraphs: [
          "Recommendations are written so they can be inspected, challenged, and handed on. A point of view that cannot survive contact with operations is not finished. Artefacts are yours to use inside the organisation that paid for them, as the letter describes.",
          "Drafts and working notes are not the deliverable. When the work ends, drafts are treated as working material: kept only as long as required, then deleted or returned.",
        ],
      },
      {
        id: "retention",
        title: "Proportionate retention",
        paragraphs: [
          "Notes are kept only as long as the work requires. We do not retain unofficial maps as a library of other people’s operations. If you ask for deletion after an engagement, we will do so except where a legal duty or the letter requires a short, named hold.",
        ],
      },
      {
        id: "incidents",
        title: "If something goes wrong",
        paragraphs: [
          "If working material is exposed in a way it should not have been, we will tell the people named on the engagement as soon as we understand what happened, what was involved, and what we are doing. We will not wait for a tidy narrative.",
        ],
      },
      {
        id: "site",
        title: "The public site",
        paragraphs: [
          "The contact form on constrange.com does not send email. It does not create a Constrange record of the situation you typed. See the Privacy policy for what the site does and does not collect. Live work is a different channel, opened on purpose.",
        ],
      },
      {
        id: "ask",
        title: "What you can ask",
        paragraphs: [
          "You can ask who has seen the situation, what we still hold, and when it will be removed. You can ask us not to use a particular tool on the work. Put it in the letter if it needs to bind; say it in the conversation if it needs to start immediately.",
        ],
      },
    ],
  },
}

export const legalByKind = (kind: LegalKind) => legalDocs[kind]
