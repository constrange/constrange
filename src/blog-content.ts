export type { Article, Block, BlogTone } from "./blog/types"
import type { Article } from "./blog/types"
import {
  aiAgentsPost,
  aiGovernancePost,
  aiProjectCostPost,
  aiProjectsFailAfterPocPost,
  aiProjectNobodyAskedForPost,
  aiReadinessPost,
  buildBuyAdaptWalkAwayPost,
  buildBuyAutomatePost,
  buildVsBuyPost,
  dependencyOnDiagramPost,
  evaluateAiVendorPost,
  hiddenCostOneMoreToolPost,
  legacyReplacePost,
  moreDataLessUnderstandingPost,
  problemBehindProblemPost,
  processIsTheProblemPost,
  shadowSystemPost,
  technologyYouDontNeedPost,
  weShouldAndWeDidPost,
  whenToAutomatePost,
} from "./blog/posts"

const legacyPosts: Article[] = [
  {
    slug: "information-is-not-judgement",
    title: "Information is cheap. Judgement is not.",
    deck: "A model can answer a question. It cannot tell you whether you asked the right one, or what the answer costs inside your organisation.",
    category: "Perspectives",
    date: "2 September 2026",
    dateIso: "2026-09-02",
    readTime: "9 min read",
    author: { name: "Constrange", role: "Practice" },
    tags: ["Judgement", "AI", "Decision-making"],
    art: { label: "Perspectives", cells: ["When information is not judgement"], tone: "ink" },
    body: [
      {
        t: "p",
        text: "It is now easy to get an articulate answer to almost any business question. That has changed the value of information. It has not changed the value of judgement. The two are routinely confused, because they arrive in the same sentence, in the same register, and often on the same screen. A fluent paragraph looks like a decision. It is not one.",
      },
      {
        t: "p",
        text: "Judgement is what you do with an answer once it has to live among existing systems, tired teams, incomplete data, and a constraint that will not move this year. A generic model does not hold that situation. It cannot. It has not seen it. It has seen a statistical average of situations that resemble yours in vocabulary and not in consequence.",
      },
      {
        t: "p",
        text: "This is not an argument against using models. It is an argument against treating their output as a substitute for the work of understanding. Constrange exists in that gap: between a sentence that sounds finished and a move that an operating landscape can actually absorb.",
      },
      { t: "h2", text: "The substitution that does not work" },
      {
        t: "p",
        text: "Teams sometimes treat a fluent response as a decision. The response is usually generic in a way that is hard to see: it assumes data you do not have, a process you do not run, and a capacity you do not currently possess. It sounds like it was written for you because it was written for everyone. The smoothness is the tell. Real situations are uneven. They have unofficial paths, joins that fail, and people who already know the workaround.",
      },
      {
        t: "p",
        text: "The substitution is attractive because it is fast, cheap, and socially easy. Nobody has to sit in a room and admit that the picture is contested. Nobody has to write down what will not be done. A document appears. It has headings. It has a recommended stack. For a week it feels like progress. Then implementation begins, and the organisation discovers that the document was answering a different firm’s problem — a firm with cleaner data, a single core system, and a team that is not already carrying three programmes.",
      },
      {
        t: "note",
        text: "Clients do not need someone to query a model on their behalf. They need someone who can tell when the model is answering a different organisation’s problem.",
      },
      {
        t: "p",
        text: "There is a second, quieter substitution: treating more information as more understanding. Dashboards multiply. Briefings lengthen. The shared picture does not. Understanding is not a pile. It is a held relationship between the work, the systems, the people, and the constraint. Until those are in the same frame, extra slides are just extra slides.",
      },
      { t: "h2", text: "What information actually is now" },
      {
        t: "p",
        text: "Information used to be scarce enough that gathering it was a large part of the job. That is no longer true for a wide class of questions. You can produce a competent summary of a market, a technology, or a management idea in minutes. The scarcity has moved. What is scarce is the ability to say which of those summaries belongs in this organisation, this quarter, under this constraint.",
      },
      {
        t: "p",
        text: "Scarcity moving is not a small change. It rearranges what leadership should pay for. Paying for another scan of the landscape is often paying for a commodity. Paying for someone who will sit with the unofficial process, name the join that actually fails, and refuse a fashionable tool is paying for judgement. The invoice may look similar. The artefact is not.",
      },
      {
        t: "p",
        text: "Information also arrives without ownership. A generated brief has no one who will still be in the room when the first exception appears. Judgement, if it is real, has a name next to it. That is not romantic. It is operational. When the path meets a constraint that was not in the prompt, someone has to decide whether to bend the path or name a different problem.",
      },
      { t: "h2", text: "What judgement actually is" },
      {
        t: "p",
        text: "Judgement is a reasoned position about what to do next in a specific situation — including the option to wait, simplify, or change the process instead of buying a layer. It is not a vibe, and it is not a personality trait. It is the outcome of holding context long enough that some options fall away without a workshop.",
      },
      {
        t: "ul",
        items: [
          "A position, not a catalogue: one path ranked above others, with the reasons visible.",
          "A constraint in view: money, attention, systems, risk, and time as they actually are.",
          "Non-goals written down: what you will not do, so the path is not quietly reopened next month.",
          "An owner: a person who can be asked, later, why this and not that.",
          "A first move small enough to be real: not a programme, a step.",
        ],
      },
      {
        t: "p",
        text: "If those pieces are missing, you do not yet have judgement. You have a narrative. Narratives are easy to generate. They are also easy to defend in a steering group, which is why they survive longer than they should. A position that can be inspected, challenged, and handed on is slower to produce and much faster to implement, because implementation does not have to reverse-engineer the intent.",
      },
      { t: "h2", text: "What context actually means" },
      {
        t: "p",
        text: "Context is often used as a polite word for background. That is too weak. Context is the set of facts that make a generic answer false. It includes the systems that already exist, including the unofficial ones. It includes the process as it is done, not as it is drawn. It includes the limits on money, attention, and change. It includes the team’s real capability, not the org chart. It includes the cost of being wrong.",
      },
      {
        t: "ul",
        items: [
          "The systems that already exist, including the unofficial ones",
          "The process as it is done, not as it is drawn",
          "The limits on money, attention, and change",
          "The team’s real capability, not the org chart",
          "The cost of being wrong — reputational, operational, and human",
        ],
      },
      {
        t: "p",
        text: "A model can be given some of this as text. It cannot be given the weight. Weight is what you feel when you have sat with the people who run the join at 4 p.m. on a Friday, or with the finance partner who knows which number is theatre. Weight is why two organisations with the same vendor shortlist should not make the same choice. Without it, you are ranking brochures.",
      },
      { t: "h3", text: "The unofficial organisation" },
      {
        t: "p",
        text: "Every organisation has a second map. The first is the one in the process pack: boxes, owners, service levels. The second is how work actually moves — the spreadsheet that is the real system of record, the chat thread that is the real escalation path, the person who is asked because the official owner is too slow. If you design against the first map only, you will ship something that the second map has to route around. That is how new platforms become extra work.",
      },
      {
        t: "p",
        text: "Judgement starts by taking the unofficial map seriously without romanticising it. Some workarounds are wisdom. Some are debt. You cannot tell which from a generated operating model. You tell which by looking, and by asking what would break if the workaround were removed.",
      },
      { t: "h2", text: "The cost of a fluent wrong answer" },
      {
        t: "p",
        text: "A wrong answer that is clumsy is easy to reject. A wrong answer that is fluent is expensive, because it travels. It gets pasted into a board pack. It becomes the language of a programme. Months later, when the join still fails, the organisation has not only spent money. It has spent the willingness to look again. People are tired of being told that the next layer will fix the last layer.",
      },
      {
        t: "table",
        caption: "Two kinds of error, different costs",
        head: ["Clumsy error", "Fluent error"],
        rows: [
          ["Easy to challenge in the room", "Hard to challenge because it sounds finished"],
          ["Dies in a draft", "Lives in a programme"],
          ["Wastes a week", "Wastes a year and the appetite for a second look"],
          ["Points at a missing fact", "Hides the missing fact behind structure"],
        ],
      },
      {
        t: "p",
        text: "The fluent error is the one Constrange is built to interrupt. Not by being contrarian for sport — by putting the situation back in the frame before the sentence is allowed to become a plan.",
      },
      { t: "h2", text: "Three tests before you trust an answer" },
      {
        t: "p",
        text: "You do not need a methodology to begin. You need a few tests that a generated brief routinely fails. They are simple enough to use in a meeting without a consultant in the room.",
      },
      {
        t: "ol",
        items: [
          "Name the constraint. If the answer does not mention the thing that will not move this year — a core system, a team at capacity, a data quality that will not support the claim — it is not yet about you.",
          "Name the unofficial path. If the answer only describes the process as drawn, it has not seen the work. Ask where the exception goes today.",
          "Name the cost of being wrong. If the answer only describes the upside of the tool, it has not earned a decision. Ask what you would unwind, and who would unwind it.",
        ],
      },
      {
        t: "p",
        text: "If an answer survives those tests, it might be useful — whether it came from a model, a vendor, or a colleague. If it fails them, adding more information will not help. You need a better picture of the situation, not a longer prompt.",
      },
      { t: "h2", text: "A better sequence" },
      {
        t: "p",
        text: "The sequence is older than the current wave of tools, and it still holds. Understand the situation until the pressure has a name. Define the problem, including what you will not do. Then look at technology — including whether a new layer is necessary at all. Reverse that order and you will spend the year searching for a use that justifies a purchase.",
      },
      {
        t: "ol",
        items: [
          "Understand the situation until the pressure has a name.",
          "Define the problem, including what you will not do.",
          "Then look at technology — including whether it is necessary at all.",
        ],
      },
      {
        t: "p",
        text: "This is slower at the start and faster after. The start is where organisations are most tempted to skip, because skipping still produces artefacts. Artefacts are not the same as movement. Movement begins when someone can say, in a sentence that would survive contact with operations: this is the problem, this is not, this is the first step, this is who owns it.",
      },
      {
        t: "quote",
        text: "The hardest part is often not finding a technology. It is understanding whether it solves the right problem.",
        cite: "Constrange",
      },
      { t: "h2", text: "What this means for leadership" },
      {
        t: "p",
        text: "Leadership’s job is not to be the most informed person in the room. That race is over; the room can be informed in an afternoon. Leadership’s job is to hold a picture long enough to choose, and to protect the organisation from fluent answers that do not fit. That requires a different kind of patience: not delay for its own sake, but refusal to let a catalogue become a strategy.",
      },
      {
        t: "p",
        text: "It also requires a different kind of briefing. Ask for the constraint first. Ask for the unofficial path. Ask what will be stopped so the chosen path has a chance. If those cannot be answered, you do not yet need a vendor meeting. You need a reading of the situation.",
      },
      {
        t: "p",
        text: "None of this is anti-technology. Constrange’s work often ends in a build, a vendor choice, or a carefully bounded use of a model. The point is sequence. Technology that waits for the problem is cheaper, kinder to the people who have to run it, and much easier to defend a year later.",
      },
      { t: "h2", text: "How we hold this in the work" },
      {
        t: "p",
        text: "When we are asked to help, we do not start by producing options. We start by sitting with the pressure as it currently is. We look for the join, the unofficial path, and the constraint that makes most of the catalogue irrelevant. We write the problem down, including non-goals. Only then do we explore approaches — including the approach that changes the process and leaves the stack alone.",
      },
      {
        t: "p",
        text: "The last artefact is not a recommendation deck. It is a first move with a name next to it. If that sounds small, it is because most programmes fail by being large in the wrong place. A named problem and an owned step will outperform an elegant stack that nobody can absorb.",
      },
      {
        t: "cta",
        title: "Bring the real situation",
        text: "If the next move is unclear, a conversation is the right first artefact. You do not need a polished brief.",
        label: "Start a conversation",
        to: "/contact",
      },
    ],
    faqs: [
      [
        "Is Constrange against using AI?",
        "No. We are against using it as a substitute for understanding the problem. Sometimes it is the right tool. Sometimes it is not. The test is whether it serves a named problem inside your actual constraints.",
      ],
      [
        "What do you mean by judgement?",
        "A reasoned position about what to do next in a specific situation — including the option to wait, simplify, or change the process instead. It has an owner, a constraint in view, and a first move.",
      ],
      [
        "Can a well-prompted model replace this?",
        "It can help gather options and rehearse language. It cannot own the consequences inside your operating landscape, and it cannot see the unofficial path unless you have already done the work of describing it honestly.",
      ],
      [
        "Does this slow decisions down?",
        "It slows the moment of choosing a tool. It speeds the year that follows, because you are not unwinding a programme that was answering the wrong problem.",
      ],
    ],
  },
  {
    slug: "more-options-do-not-create-clarity",
    title: "More options do not create clarity",
    deck: "Access to AI, automation, and new platforms has expanded what is possible. It has not made the next decision obvious.",
    category: "Perspectives",
    date: "19 August 2026",
    dateIso: "2026-08-19",
    readTime: "9 min read",
    author: { name: "Constrange", role: "Practice" },
    tags: ["Complexity", "Prioritisation", "Strategy"],
    art: { label: "Perspectives", cells: ["When more options do not create clarity"], tone: "field" },
    body: [
      {
        t: "p",
        text: "Organisations now face more plausible next steps than they can fund, absorb, or even evaluate. Each vendor has a coherent story. Each internal team has a preferred tool. The catalogue grows. The picture does not. Possibility, past a point, is not a gift. It is a tax on attention.",
      },
      {
        t: "p",
        text: "This is easy to miss because options feel like power. A longer list looks like diligence. A comparison matrix looks like governance. In practice, an unbounded list is a way of postponing the only move that creates clarity: saying what will not be done, under a constraint that is actually true.",
      },
      {
        t: "p",
        text: "Constrange’s name is a reminder of that move. Range without constraint is noise. Constraint without a view of the range is panic. The work is to hold both long enough that a path can be ranked.",
      },
      { t: "h2", text: "Possibility is not a plan" },
      {
        t: "p",
        text: "A longer list of options can feel like progress. It is often the opposite. While every idea stays live, nobody has to take responsibility for a reduction. Steering groups can agree that “all of this is interesting.” Interesting is not a sequence. A sequence requires losers. It requires non-goals. It requires a constraint that is allowed to kill ideas without a memorial service.",
      },
      {
        t: "p",
        text: "Plans fail in two common ways. One is emptiness: a vision with no first step. The other is overcrowding: twelve initiatives, each with a sponsor, none with enough attention to finish. Overcrowding is the failure mode of the current decade. Tools are cheap to propose. Absorption is not. Every new system asks the same people to learn, to join, to exception-handle, and to keep the unofficial path alive until the new path works. Those people are already doing a job.",
      },
      {
        t: "table",
        caption: "Two different activities",
        head: ["Collecting options", "Creating structure"],
        rows: [
          ["More tools in the comparison", "Fewer, with consequences"],
          ["Every idea stays live", "Non-goals are written down"],
          ["Novelty as a signal", "Fit as a signal"],
          ["A backlog of initiatives", "A sequence with owners"],
          ["A workshop that generates more", "A reading that removes most"],
        ],
      },
      {
        t: "p",
        text: "If your last quarter produced a longer backlog than it retired, you are collecting. Collecting can be honest work at the beginning of a reading. It becomes a habit, and then a culture, when nobody is rewarded for closing a door.",
      },
      { t: "h2", text: "Why the catalogue keeps growing" },
      {
        t: "p",
        text: "The supply of options has a business model. Vendors are good at describing futures. Internal teams are good at protecting tools they already know. Consultancies are sometimes good at adding a framework that requires another workstream. None of these actors is villainous. Each is doing what it is paid to do. The organisation still has to choose, and choosing is not their job.",
      },
      {
        t: "p",
        text: "There is also a psychological comfort in the catalogue. As long as the list is open, nobody has been wrong yet. The moment you pick, you can be judged. So the list stays open, and the organisation lives in a permanent shortlist. Shortlists are not harmless. They consume meetings. They keep people from committing to the unofficial path that is actually running the work. They make every quarter feel like a decision year that never decides.",
      },
      {
        t: "p",
        text: "AI has accelerated the catalogue, not because models are useless, but because they are fluent at generating variants. You can now have five plausible architectures before lunch. That is a capability. It is not a filter. A filter needs a constraint. Without one, you will spend the afternoon ranking things that cannot all be true at once.",
      },
      { t: "h2", text: "Start with the constraint" },
      {
        t: "p",
        text: "The useful question is not “what else could we do?” It is “what is the constraint that makes most of the other ideas irrelevant?” Once that is named, many options fall away without a workshop. The remaining few can be compared on fit, not on novelty.",
      },
      {
        t: "ul",
        items: [
          "A core system that cannot move this year",
          "A team that cannot absorb another process",
          "Data that will not support the proposed intelligence",
          "A customer journey that breaks at a join, not at a channel",
          "A risk or regulatory limit that is not optional, however inconvenient",
          "A calendar: the decision has a date, and the organisation has a finite number of changes it can metabolise before that date",
        ],
      },
      {
        t: "p",
        text: "Naming a constraint is uncomfortable because it sounds like giving up. It is the opposite. An unnamed constraint still governs the work. It just governs it as surprise: the programme hits the wall in month seven instead of on the first page of the brief. Constrange would rather put the wall on the first page.",
      },
      { t: "h3", text: "Constraint is not the same as scarcity theatre" },
      {
        t: "p",
        text: "Some organisations perform constraint without using it. They say there is no budget, then fund three overlapping tools. They say the team is at capacity, then launch a transformation office. Performed constraint is a mood. Real constraint is specific enough to kill an idea. If you cannot point to the thing that would make a popular option impossible, you have not named a constraint. You have named a worry.",
      },
      {
        t: "p",
        text: "A useful test: take the option that currently has the most political heat, and ask what fact would make it the wrong choice. If nobody can produce that fact, the organisation is not deciding. It is campaigning.",
      },
      { t: "h2", text: "Clarity is a reduction" },
      {
        t: "p",
        text: "Clarity is not a feeling of confidence. Confidence can be produced by a good slide. Clarity is a shorter list, with consequences attached, that operations can recognise. People who run the work should be able to say: yes, that is the join; yes, that is what we will stop; yes, that first step is something we can do on a Tuesday.",
      },
      {
        t: "p",
        text: "Reduction has a craft. You do not reduce by picking the loudest sponsor. You reduce by holding the picture of the work until the ranking becomes obvious to people who disagree about tools. When the unofficial path, the system limit, and the capacity of the team are in the same frame, the catalogue often collapses on its own. What remains can be argued about honestly.",
      },
      {
        t: "ol",
        items: [
          "Write the problem in a sentence that includes a constraint.",
          "Write three non-goals — work you will not do even if it is fashionable.",
          "Keep no more than three credible paths, including the path that changes process and not technology.",
          "Rank them by fit to the constraint, not by narrative quality.",
          "Attach an owner and a first move to the path that remains.",
        ],
      },
      {
        t: "p",
        text: "Five steps, none of them a software purchase. If that seems too slight to be strategy, notice how rarely it is done. Most “strategy” is still a decorated catalogue.",
      },
      { t: "h2", text: "What to do with the rest of the list" },
      {
        t: "p",
        text: "The ideas you do not choose should not be stored as a guilt pile. They should be parked against a condition: we will look at this if the constraint moves, if the join is fixed, if the data is actually good enough. Parking with a condition is kinder than a backlog that pretends everything is still live. It also stops the organisation from relitigating the same shortlist every quarter.",
      },
      {
        t: "p",
        text: "Some ideas should be killed outright, in writing. Killing is a gift to the people who would otherwise have to keep a zombie workstream on life support. If you cannot bear to kill things, you will keep paying for them in attention, which is the budget that actually runs out first. Write the refusal where the next quarter can find it. Otherwise the same idea will return wearing a new name, and you will pay for the comparison twice.",
      },
      {
        t: "p",
        text: "A refusal is also a kindness to vendors and internal teams. It tells them where not to spend their next six weeks. Ambiguous interest is not polite. It is expensive, and it trains the organisation to keep feeding the catalogue.",
      },
      { t: "h2", text: "A note on speed" },
      {
        t: "p",
        text: "Reduction is accused of slowing the organisation down. The opposite is usually true. What is slow is a year of parallel initiatives that cannot all finish, followed by a quiet unwind. What is fast is a named constraint, a short list, and a first move that operations can start without a new operating model.",
      },
      {
        t: "p",
        text: "If you must choose this quarter, choose with the constraint in view. A short reading still beats an unexamined stack. You can do a serious reduction in days if you are willing to look at the unofficial path and write non-goals. You cannot do it in an afternoon of generated options, however many.",
      },
      {
        t: "quote",
        text: "Clarity is a ranking made under constraint. If nothing has been refused, nothing has been decided.",
        cite: "Constrange",
      },
      { t: "h2", text: "How Constrange uses this" },
      {
        t: "p",
        text: "In the work, we treat options as a temporary material, not as a deliverable. We will explore more than one credible path, including doing less. We will not leave you with a museum of possibilities. The method — understand, define, explore, structure, move — is built to produce a reduction that can be implemented, not a longer menu.",
      },
      {
        t: "p",
        text: "If you already have a catalogue, we do not need you to throw it away before we talk. Bring it. Bring also the constraint as you currently see it, even if it is incomplete. The conversation is the first place the list can get shorter.",
      },
      {
        t: "cta",
        title: "How we work",
        text: "Understand, define, explore, structure, move — in that order, even when the organisation wants a tool first.",
        label: "See the method",
        to: "/how-we-work",
      },
    ],
    faqs: [
      [
        "Does this slow us down?",
        "It prevents the slower failure: a programme that has to be unwound because the problem was never named, or because twelve initiatives were allowed to stay live.",
      ],
      [
        "What if we must choose this quarter?",
        "Then choose with the constraint in view. A short reading still beats an unexamined stack. Write non-goals. Keep three paths, not twelve.",
      ],
      [
        "Isn’t a wide option set good governance?",
        "A wide set is useful at the start of a reading. Governance is the reduction: a ranking, owners, and a written account of what you refused.",
      ],
      [
        "How do we stop the catalogue coming back?",
        "Park ideas against a condition, kill some in writing, and stop rewarding the production of new options as if it were progress.",
      ],
    ],
  },
  {
    slug: "technology-should-wait-for-the-problem",
    title: "Technology should wait for the problem",
    deck: "Selecting a platform before the work is understood is a common way to spend a year solving the wrong thing.",
    category: "Method",
    date: "29 July 2026",
    dateIso: "2026-07-29",
    readTime: "9 min read",
    author: { name: "Constrange", role: "Practice" },
    tags: ["Systems", "Implementation", "Method"],
    art: { label: "Perspectives", cells: ["The problem before the technology"], tone: "slate" },
    body: [
      {
        t: "p",
        text: "Technology is easier to buy than a problem is to name. That is why so many programmes start with a platform and spend the following months searching for a use that will justify it. The search is then called implementation. It is not. It is archaeology in reverse: trying to find a past that will make the purchase look inevitable.",
      },
      {
        t: "p",
        text: "This pattern is older than the current tools. Enterprise resource planning, customer platforms, data lakes, and now models have all been bought as answers in search of a sentence. Each wave produces a few genuine fits and a large number of organisations that now have an extra layer to feed, join, and explain. The extra layer is not free. It consumes the same people who were already keeping the unofficial path alive.",
      },
      {
        t: "p",
        text: "Constrange’s view is simple, and we will keep repeating it until it is boring: understand the situation, define the problem, then look at technology — including the option that no new technology is required. Sequence is not a personality. It is how you avoid spending a year on the wrong object.",
      },
      { t: "h2", text: "A sequence that holds" },
      {
        t: "p",
        text: "The method we use in the work is five stages. They are not a waterfall costume. They are a way of making sure each artefact can be challenged before the next one pretends to be certain. Understand produces a picture of the work, the systems, the people, and the constraints as they actually are. Define produces a named problem and non-goals. Explore holds more than one credible path, including doing less. Structure produces architecture, owners, and sequence. Move produces a first action small enough to be real, and a rhythm to review it.",
      },
      {
        t: "ol",
        items: [
          "Understand the situation — work, systems, people, constraints.",
          "Define the problem, including non-goals.",
          "Explore approaches, including the option that no new technology is required.",
          "Structure a path that can be implemented.",
          "Move: owners, first actions, a way to tell if it worked.",
        ],
      },
      {
        t: "p",
        text: "Notice where the purchase sits. Not at the front. Not as a given. If a vendor meeting happens in week one, it should be treated as research into a possible tool, not as the start of a programme. The programme starts when the problem can be said in a sentence that operations recognise.",
      },
      { t: "h2", text: "Why the reverse sequence is so common" },
      {
        t: "p",
        text: "Buying first is socially easier than naming a problem. A purchase has a date, a budget line, and a senior sponsor who can be seen to have acted. A named problem has arguments. It threatens someone’s current tool. It admits that the unofficial path is the real one. It might conclude that the bottleneck is a rule, a join, or a person who is doing three jobs. None of that photographs well in an annual report.",
      },
      {
        t: "p",
        text: "There is also a genuine fear of falling behind. Categories move. Boards ask what you are doing about the category. The safest-looking answer is a platform. The honest answer is often: we are still establishing whether this category is the constraint. That sentence feels like weakness in a culture that rewards motion. It is frequently the most expensive sentence you failed to say.",
      },
      {
        t: "p",
        text: "Vendors are not the villains of this story. They sell what they have. Your job is to know what you need. If you do not know yet, you are not a sophisticated buyer. You are a budget. Sophisticated buying starts with a problem that could, in principle, be solved without the product in the room.",
      },
      { t: "h2", text: "Sometimes the process is the product" },
      {
        t: "p",
        text: "If a competent person would still be slow given complete information, you may have a capacity or rules problem. If they would be fast, you likely have an intake, join, or data problem. In the second case a model will sound helpful and remain beside the point. It will generate text about the missing fact without producing the fact. It will sit on top of a broken join and make the join harder to see.",
      },
      {
        t: "code",
        lang: "test",
        code: `IF the delay survives complete inputs
  THEN consider automation or capacity
ELSE
  fix the missing fact, the join, or the owner
  do not buy a layer that hides the gap`,
      },
      {
        t: "p",
        text: "This test is deliberately blunt. It is meant to be used in a room, not in a laboratory. You do not need a six-month diagnostic to ask: if we handed a capable person every input tomorrow morning, would the work still stall? If the answer is no, your technology conversation is premature. You have an information, ownership, or joining problem. Those are cheaper to fix when they are not wrapped in a platform.",
      },
      {
        t: "p",
        text: "If the answer is yes — the work still stalls with complete inputs — then technology, automation, or capacity may be the right class of move. Even then, you have not yet chosen a product. You have chosen a class. Classes are not vendors. Collapsing the two too early is how you inherit someone else’s architecture.",
      },
      { t: "h3", text: "The join is usually the problem" },
      {
        t: "p",
        text: "Work rarely fails in the middle of a well-owned box. It fails where one system hands to another, where one team’s definition of done is another team’s intake, where the customer has to repeat a fact that the organisation already holds in three places. Joins are unglamorous. They do not have category conferences. They are where money and patience go to die.",
      },
      {
        t: "p",
        text: "A new platform that does not redesign the join becomes another box with the same handshake. Sometimes it makes the handshake worse, because now there is a canonical object that is almost right. Almost right is a special kind of wrong: it looks like progress in a demo and fails in the exception, which is where live work lives.",
      },
      { t: "h2", text: "What waiting looks like in practice" },
      {
        t: "p",
        text: "Waiting does not mean freeze. It means do the work that makes a purchase honest. Map the unofficial path. Write the problem and the non-goals. List three paths, including one that changes process only. Put a cost on being wrong. Then, if a tool is still the right class of move, go and buy it with a spine: owners, sequence, and a first step that does not require the entire estate to move on day one.",
      },
      {
        t: "ul",
        items: [
          "A sentence for the problem that includes a constraint",
          "A sketch of the join, as done, not as drawn",
          "Non-goals, so the purchase cannot quietly expand",
          "A first slice that can fail without taking the organisation with it",
          "A named owner who will still be there when the first exception appears",
        ],
      },
      {
        t: "p",
        text: "If you cannot produce that list, you are not ready to sign. You are ready to look. Looking is legitimate work. Signing is a different act. Mixing them up is how “discovery” becomes a paid implementation that nobody can stop.",
      },
      { t: "h2", text: "Already bought" },
      {
        t: "p",
        text: "Many conversations begin after the platform is already in the building. That is not a reason to pretend the sequence still starts at zero. It is a reason to be stricter. The work is then to see which problem the thing can honestly serve — and which work should stop so it has a chance. A platform that is asked to justify itself by becoming the home of every idea will justify itself as shelfware, or worse, as a new unofficial path on top of the old one.",
      },
      {
        t: "p",
        text: "Stopping work is the unfashionable half of implementation. Without it, the new system competes with the old habits and loses, because the old habits are how Friday afternoon actually happens. If you will not stop anything, do not add anything. That rule would retire a surprising number of programmes.",
      },
      { t: "h2", text: "Implementation is not a later department" },
      {
        t: "p",
        text: "A strategy is valuable only when it can become action. The last artefact is not a recommendation. It is a first move with a name next to it. Constrange will not leave a path that cannot be built. Direction is always in scope. Build can sit with your team, a partner, or a mix. Either way, the joins, owners, and first slice have to be designed as if someone were going to do them on a Tuesday — because they are.",
      },
      {
        t: "p",
        text: "This is why we resist the split between “strategy” and “delivery” as two cultures that throw documents over a wall. A point of view that cannot survive contact with the unofficial path is not a point of view. It is a brochure. The method’s last stage exists to prevent that split: move, review, and be willing to name a different problem if the first step taught you something.",
      },
      {
        t: "quote",
        text: "If the path cannot be started without a new operating model, it is not yet a path. It is a wish with architecture.",
        cite: "Constrange",
      },
      { t: "h2", text: "A closing discipline" },
      {
        t: "p",
        text: "Before the next tool conversation, write one page. Not a deck. A page. What is under pressure. What constraint will not move. What the unofficial path does today. What you will not do. What first step would tell you if you are right. If you cannot fill the page, you do not need a vendor. You need a reading. If you can fill it, you will buy better, or you will discover that you should not buy at all.",
      },
      {
        t: "p",
        text: "That page is the cheapest artefact in the whole landscape, and the one most often skipped. Constrange’s practice is, in large part, the discipline of not skipping it — and of staying until the page has become a move.",
      },
      {
        t: "cta",
        title: "Start with the situation",
        text: "Bring the pressure as you currently see it. We will help you find the problem underneath — and whether technology should wait.",
        label: "Start a conversation",
        to: "/contact",
      },
    ],
    faqs: [
      [
        "What if we already bought the platform?",
        "Then the work is to see which problem it can honestly serve — and which work should stop so it has a chance. Do not ask it to become the home of every idea.",
      ],
      [
        "Is implementation in scope?",
        "Direction is always in scope. Build can sit with your team, a partner, or a mix. The path has to be buildable either way, with owners and a first move.",
      ],
      [
        "Does waiting mean we freeze all technology work?",
        "No. It means you do the reading that makes a purchase honest: problem, constraint, unofficial path, non-goals. Looking is work. Signing is a different act.",
      ],
      [
        "How do we know the problem is named well enough?",
        "Operations can recognise it, a constraint is in the sentence, non-goals are written, and a first step exists that does not require the whole estate to move.",
      ],
    ],
  },
]

export const posts: Article[] = [
  shadowSystemPost,
  buildBuyAdaptWalkAwayPost,
  problemBehindProblemPost,
  moreDataLessUnderstandingPost,
  dependencyOnDiagramPost,
  weShouldAndWeDidPost,
  aiProjectNobodyAskedForPost,
  processIsTheProblemPost,
  hiddenCostOneMoreToolPost,
  technologyYouDontNeedPost,
  buildVsBuyPost,
  aiProjectsFailAfterPocPost,
  evaluateAiVendorPost,
  aiProjectCostPost,
  whenToAutomatePost,
  aiAgentsPost,
  aiReadinessPost,
  legacyReplacePost,
  aiGovernancePost,
  buildBuyAutomatePost,
  ...legacyPosts,
]

export const articles = posts
export const postBySlug = (slug?: string) => posts.find((a) => a.slug === slug)
export const articleBySlug = postBySlug
