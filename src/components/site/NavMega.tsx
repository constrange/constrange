import type { ReactNode } from "react"
import { Link } from "react-router-dom"

/* Constrange mega — paper board, four columns.
   Featured column: a small index plate, not a drawing of the mark. */

function MegaPlate({ kicker, steps }: { kicker: string; steps: string[] }) {
  return (
    <div className="mega-plate">
      <p className="mega-plate-k">{kicker}</p>
      <ol className="mega-plate-steps">
        {steps.map((step, i) => (
          <li key={step}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            {step}
          </li>
        ))}
      </ol>
      <div className="mega-rail" aria-hidden>
        <i />
        <i />
        <i />
        <b />
      </div>
    </div>
  )
}

function Kicker({ children }: { children: string }) {
  return <p className="mega-kicker">{children}</p>
}

function Group({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="mega-group">
      <p className="mega-kicker">{label}</p>
      {children}
    </div>
  )
}

function Links({ items }: { items: [string, string][] }) {
  return (
    <div className="mega-links">
      {items.map(([label, to]) => (
        <Link key={to} to={to}>
          {label}
        </Link>
      ))}
    </div>
  )
}

export function WhatWeDoMega() {
  return (
    <div className="mega-board cols-4" role="menu" aria-label="What We Do">
      <div className="mega-col featured">
        <Kicker>Practice</Kicker>
        <Link to="/products" className="mega-feature">
          <strong>What we take on</strong>
          <span>Direction first. Build where it belongs. A path from the actual constraint — not a catalogue of tools.</span>
        </Link>
        <MegaPlate kicker="From the constraint" steps={["Read", "Shape", "Move"]} />
      </div>

      <div className="mega-col">
        <Group label="Read">
          <Links
            items={[
              ["Strategy", "/products/strategy"],
              ["Judgement", "/products/judgement"],
            ]}
          />
        </Group>
        <Group label="Shape">
          <Links
            items={[
              ["Systems & operations", "/products/systems-operations"],
              ["Solution design", "/products/solution-design"],
              ["AI & automation", "/products/ai-automation"],
            ]}
          />
        </Group>
        <Group label="Move">
          <Links
            items={[
              ["Implementation", "/products/implementation"],
              ["Transformation", "/products/transformation"],
              ["Working with us", "/pricing"],
            ]}
          />
        </Group>
      </div>

      <div className="mega-col">
        <Kicker>Situations</Kicker>
        <Links
          items={[
            ["Organisations", "/enterprise"],
            ["Growing teams", "/solutions/growth"],
            ["Operations", "/solutions/operations"],
            ["Customer & service", "/solutions/customer-experience"],
            ["Technology leaders", "/solutions/technology-leaders"],
            ["Regulated environments", "/solutions/regulated"],
            ["All situations", "/customers"],
          ]}
        />
      </div>

      <div className="mega-col">
        <Kicker>Method</Kicker>
        <Links
          items={[
              ["How We Work", "/how-we-work"],
            ["Understand", "/understand"],
            ["Structure", "/structure"],
            ["Priorities", "/priorities"],
            ["Stages in detail", "/docs/api-reference"],
            ["Working notes", "/docs/guides"],
            ["All capabilities", "/features"],
          ]}
        />
      </div>
    </div>
  )
}

export function BlogMega() {
  return (
    <div className="mega-board cols-3" role="menu" aria-label="Writing">
      <div className="mega-col featured">
        <Kicker>Thinking</Kicker>
        <Link to="/research" className="mega-feature">
          <strong>How we hold complexity</strong>
          <span>Understand, structure, then priorities. Technology waits until the constraint is named.</span>
        </Link>
        <MegaPlate kicker="Then, maybe technology" steps={["Understand", "Structure", "Priorities"]} />
      </div>
      <div className="mega-col">
        <Kicker>Writing</Kicker>
        <Links
          items={[
            ["Blog", "/blog"],
            ["Notes", "/newsroom"],
            ["Practice notes", "/changelog"],
            ["Careers", "/careers"],
          ]}
        />
      </div>
      <div className="mega-col">
        <Kicker>Holds</Kicker>
        <Links
          items={[
            ["Understand", "/understand"],
            ["Structure", "/structure"],
            ["Priorities", "/priorities"],
            ["Contexts", "/languages"],
            ["Availability", "/status"],
          ]}
        />
      </div>
    </div>
  )
}
