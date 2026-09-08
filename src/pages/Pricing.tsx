import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import {
  CanvasHero,
  CanvasPage,
  CxSection,
  Defs,
  Ledger,
  QuietTable,
  Rail,
  Turn,
} from "@/components/site/Canvas"
import { DepthDial } from "@/components/site/Figures"
import { Reveal } from "@/components/site/Layout"
import { FaqList } from "@/components/site/Prose"
import {
  addonOptions,
  artefacts,
  beginShapes,
  deepenShapes,
  faqs,
  methodStages,
  standingInputs,
} from "@/site-data"

const baseModels: [string, number][] = [
  ["Discovery conversation", 1],
  ["Situation diagnostic", 2],
  ["Architecture & options", 4],
  ["Implementation path", 6],
  ["Ongoing direction", 3],
]

const shapeNotes: [string, string][] = [
  [
    "Sized to the problem",
    "An engagement is a conversation, a contained diagnostic, a structured path, or direction through implementation. The situation decides which.",
  ],
  [
    "Not a rate card",
    "We do not sell a platform by the hour, and we do not price a stack we have not yet argued for. Depth is a measure of attention, not a bill.",
  ],
  [
    "Contained by default",
    "The first piece of work should be small enough to finish and clear enough to judge. Larger programmes only follow if the situation requires them.",
  ],
]

const stages: [string, string][] = [
  ["Begin", "A conversation about the pressure as it is. No brief required."],
  ["Contain", "A diagnostic with a boundary: the work, the systems, the constraint."],
  ["Structure", "Options with consequences, then architecture, owners, and sequence."],
  ["Move", "A first action with a name against it, and a rhythm to review it."],
]

export default function Pricing() {
  const [tab, setTab] = useState<"shape" | "method">("shape")
  const [model, setModel] = useState(baseModels[0][0])
  const [containment, setContainment] = useState(4)
  const [addons, setAddons] = useState<string[]>(["Existing system landscape"])

  const { rate, total, base, addonRate } = useMemo(() => {
    const b = baseModels.find(([name]) => name === model)?.[1] ?? 0
    const a = addonOptions
      .filter(([name]) => addons.includes(name))
      .reduce((sum, [, price]) => sum + price, 0)
    return { base: b, addonRate: a, rate: b + a, total: b + a }
  }, [model, addons])

  const toggleAddon = (name: string) =>
    setAddons((prev) => (prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]))

  return (
    <CanvasPage>
      <CanvasHero
        figure="engagement"
        crumbs={[
          ["Home", "/"],
          ["What we do", "/products"],
          ["Working with us", "/pricing"],
        ]}
        eyebrow="Working with us"
        title="Shape the work to the situation"
        lede="We do not sell a platform by the hour. An engagement is sized to the problem: a conversation, a contained diagnostic, a structured path, or direction through implementation."
        keys={["Begin", "Contain", "Structure", "Move"]}
      />

      <CxSection first label="Engagement shapes" title="Four ways of beginning.">
        <Rail steps={stages} />
        <div className="cx-aside" style={{ marginTop: 72 }}>
          <p className="cx-label cx-aside-label">The terms</p>
          <div>
            <Defs items={shapeNotes} />
          </div>
        </div>
      </CxSection>

      <CxSection
        label="In detail"
        title="What each shape holds."
        lede="Two views on the same work: the shape an engagement takes, and the method underneath it."
      >
        <div className="cx-tabs" role="tablist" aria-label="Engagement view">
          <button
            role="tab"
            aria-selected={tab === "shape"}
            className={tab === "shape" ? "on" : ""}
            onClick={() => setTab("shape")}
          >
            Shape
          </button>
          <button
            role="tab"
            aria-selected={tab === "method"}
            className={tab === "method" ? "on" : ""}
            onClick={() => setTab("method")}
          >
            Method
          </button>
        </div>

        {tab === "shape" ? (
          <>
            <div className="cx-pair">
              <QuietTable
                caption="Begin"
                head={["Shape", "Stage", "Intent"]}
                rows={beginShapes.map((r) => [...r])}
                mono={[1]}
              />
              <QuietTable
                caption="Continue"
                head={["Shape", "Stage", "Intent"]}
                rows={deepenShapes.map((r) => [...r])}
                mono={[1]}
              />
            </div>
            <div className="cx-pair" style={{ marginTop: 64 }}>
              <div>
                <p className="cx-label" style={{ marginBottom: 18 }}>
                  What the work can include
                </p>
                <Ledger dense rows={artefacts} />
              </div>
              <div>
                <p className="cx-label" style={{ marginBottom: 18 }}>
                  Always in view
                </p>
                <Ledger
                  dense
                  rows={[...standingInputs, ["First move with an owner", "Required"] as [string, string]]}
                />
              </div>
            </div>
          </>
        ) : (
          <QuietTable
            caption="Method — what each stage holds"
            head={["Stage", "Name", "Hold", "Produce"]}
            rows={methodStages.map((r) => [...r])}
            mono={[0]}
          />
        )}
      </CxSection>

      <CxSection
        label="Sketch the scope"
        title="A way to talk about depth."
        lede="This is not a quote. Depth here means intensity of attention — how much of the situation has to be held before a path is worth writing down."
      >
        <div className="cx-est">
          <Reveal>
            <label className="cx-field">
              <span>
                Starting shape
                <em>depth {base}</em>
              </span>
              <select value={model} onChange={(e) => setModel(e.target.value)}>
                {baseModels.map(([name, price]) => (
                  <option key={name} value={name}>
                    {name} — depth {price}
                  </option>
                ))}
              </select>
            </label>

            <label className="cx-field">
              <span>
                How contained is the situation
                <em>
                  {containment} / 12
                </em>
              </span>
              <input
                type="range"
                min={1}
                max={12}
                step={1}
                value={containment}
                onChange={(e) => setContainment(Number(e.target.value))}
              />
            </label>

            <div className="cx-field">
              <span>
                Likely to include
                <em>+{addonRate}</em>
              </span>
              <div className="cx-chips">
                {addonOptions.map(([name, price]) => (
                  <button
                    key={name}
                    className={addons.includes(name) ? "on" : ""}
                    onClick={() => toggleAddon(name)}
                    aria-pressed={addons.includes(name)}
                  >
                    {name} · {price}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="cx-est-panel" delay={110}>
            <DepthDial depth={total} containment={containment} />
            <Ledger
              dense
              rows={[
                ["Shape", String(base)],
                ["Foci", `+${addonRate}`],
                ["Combined", String(rate)],
                ["Containment", `${containment} / 12`],
              ]}
            />
            <Link className="btn" to="/contact">
              Talk about this situation
            </Link>
          </Reveal>
        </div>
      </CxSection>

      <CxSection label="Questions" title="Asked before most engagements.">
        <div className="cx-faq">
          <FaqList items={faqs} />
        </div>
      </CxSection>

      <Turn
        tone="engagement"
        kicker="Working with us"
        title="Begin with a conversation, not a scope."
        body="Bring the pressure as it is. If there is no work here, we will say so — that is a useful outcome too."
        primary={{ label: "Start a conversation", to: "/contact" }}
        secondary={{ label: "How we work", to: "/how-we-work" }}
      />
    </CanvasPage>
  )
}
