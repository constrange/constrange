import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { BrandMark } from "@/components/site/BrandMark"
import {
  allOptionalEnabled,
  defaultOptionalPreferences,
  readCookiePreferences,
  type CookiePreferencesState,
  type OptionalCookieCategory,
  writeCookiePreferences,
} from "@/components/site/cookie-preferences"

type CategoryDef = {
  id: OptionalCookieCategory | "necessary"
  title: string
  summary: string
  details: string
  locked?: boolean
}

const categories: CategoryDef[] = [
  {
    id: "necessary",
    title: "Strictly Necessary Cookies",
    summary: "Required for the site to load, navigate, and remember basic choices.",
    details:
      "These cookies are essential. They support security, network delivery, and storing your consent choices. They cannot be switched off.",
    locked: true,
  },
  {
    id: "functional",
    title: "Functional Cookies",
    summary: "Remember preferences that improve how the site works for you.",
    details:
      "Functional cookies can store choices such as dismissed banners or interface state. Constrange does not currently set optional functional cookies, but you can record your preference here.",
  },
  {
    id: "performance",
    title: "Performance Cookies",
    summary: "Help understand how pages are used so performance can improve.",
    details:
      "Performance cookies would measure traffic and page behaviour. Constrange does not run third-party analytics or performance tags on this site today.",
  },
  {
    id: "targeting",
    title: "Targeting Cookies",
    summary: "Used to deliver relevant advertising or measure campaigns.",
    details:
      "Targeting cookies would support marketing pixels or ad networks. Constrange does not set marketing or targeting cookies on this site.",
  },
]

function CookieIcon() {
  return (
    <svg className="cookie-float-icon" width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 6.5c-5.247 0-9.5 4.253-9.5 9.5 0 5.247 4.253 9.5 9.5 9.5 2.05 0 3.94-.65 5.48-1.75.27-.19.53-.41.76-.65 1.01-1.02 1.64-2.41 1.64-3.93 0-.74.6-1.34 1.34-1.34.47 0 .9.24 1.14.63 1.39-2.09 2.2-4.58 2.2-7.26C29.02 11.02 23.767 6.5 16 6.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12.25" cy="14.75" r="1.35" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16.75" cy="19" r="1.35" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="19.75" cy="13.5" r="1.1" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14.25" cy="21" r="1.1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function CookieToggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean
  onChange: (next: boolean) => void
  label: string
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      className={`cookie-toggle${checked ? " is-on" : ""}`}
      onClick={() => onChange(!checked)}
    >
      <span className="cookie-toggle-thumb" />
      <span className="cookie-toggle-label">{checked ? "Active" : "Inactive"}</span>
    </button>
  )
}

export function CookiePreferences() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState<CookiePreferencesState>(defaultOptionalPreferences)
  const [expanded, setExpanded] = useState<string | null>(null)

  const close = () => setOpen(false)

  const openDialog = () => {
    setDraft(readCookiePreferences())
    setExpanded(null)
    setOpen(true)
  }

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open) {
      if (!dialog.open) dialog.showModal()
    } else if (dialog.open) {
      dialog.close()
    }
  }, [open])

  const setCategory = (id: OptionalCookieCategory, value: boolean) => {
    setDraft((current) => ({ ...current, [id]: value }))
  }

  const confirm = () => {
    writeCookiePreferences(draft)
    close()
  }

  return (
    <>
      <button type="button" className="cookie-float-btn" aria-label="Cookie preferences" onClick={openDialog}>
        <CookieIcon />
      </button>

      <dialog
        ref={dialogRef}
        className="cookie-dialog"
        aria-labelledby="cookie-dialog-title"
        onClose={close}
        onClick={(event) => {
          if (event.target === dialogRef.current) close()
        }}
      >
        <div className="cookie-dialog-panel" onClick={(event) => event.stopPropagation()}>
          <header className="cookie-dialog-header">
            <div className="cookie-dialog-brand" aria-hidden="true">
              <BrandMark className="cookie-dialog-mark" />
              <span>Constrange</span>
            </div>
            <button type="button" className="cookie-dialog-close" aria-label="Close cookie preferences" onClick={close}>
              ×
            </button>
          </header>

          <div className="cookie-dialog-body">
            <p className="cookie-dialog-intro">
              When you visit our website, we store cookies on your browser to collect information. You can
              choose which optional categories to allow below. Read more in our{" "}
              <Link to="/legal/privacy-policy" onClick={close}>Privacy Policy</Link>.
            </p>

            <button
              type="button"
              className="cookie-dialog-allow-all"
              onClick={() => setDraft(allOptionalEnabled)}
            >
              Allow All
            </button>

            <h2 id="cookie-dialog-title" className="cookie-dialog-heading">Manage Consent Preferences</h2>

            <div className="cookie-dialog-categories">
              {categories.map((category) => {
                const isOpen = expanded === category.id
                const optional = category.id !== "necessary"
                const enabled = optional ? draft[category.id as OptionalCookieCategory] : true

                return (
                  <section key={category.id} className={`cookie-category${isOpen ? " is-open" : ""}`}>
                    <div className="cookie-category-head">
                      <button
                        type="button"
                        className="cookie-category-expand"
                        aria-expanded={isOpen}
                        aria-label={`${isOpen ? "Collapse" : "Expand"} ${category.title}`}
                        onClick={() => setExpanded(isOpen ? null : category.id)}
                      >
                        {isOpen ? "−" : "+"}
                      </button>
                      <button
                        type="button"
                        className="cookie-category-title"
                        onClick={() => setExpanded(isOpen ? null : category.id)}
                      >
                        {category.title}
                      </button>
                      {category.locked ? (
                        <span className="cookie-category-status">Always Active</span>
                      ) : (
                        <CookieToggle
                          checked={enabled}
                          onChange={(next) => setCategory(category.id as OptionalCookieCategory, next)}
                          label={`${category.title} ${enabled ? "on" : "off"}`}
                        />
                      )}
                    </div>
                    {isOpen && (
                      <div className="cookie-category-body">
                        <p>{category.details}</p>
                      </div>
                    )}
                  </section>
                )
              })}
            </div>
          </div>

          <footer className="cookie-dialog-footer">
            <button
              type="button"
              className="cookie-dialog-action"
              onClick={() => {
                setDraft(defaultOptionalPreferences)
                writeCookiePreferences(defaultOptionalPreferences)
                close()
              }}
            >
              Reject All Non-Essential
            </button>
            <button type="button" className="cookie-dialog-action" onClick={confirm}>
              Confirm Selections
            </button>
          </footer>
        </div>
      </dialog>
    </>
  )
}
