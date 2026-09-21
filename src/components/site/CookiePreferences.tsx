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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.25c-4.9 0-8.9 4-8.9 8.9 0 4.9 4 8.9 8.9 8.9 2.27 0 4.33-.85 5.92-2.24.18-.15.35-.31.51-.48.84-.9 1.36-2.1 1.36-3.42 0-.58.47-1.05 1.05-1.05.4 0 .76.22.95.55 1.32-1.83 2.01-4.07 2.01-6.23 0-4.9-4-8.9-8.9-8.9zm6.1 2.65a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM8.1 10.9a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zm3.4 4.1a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zm4.1-1.45a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"
      />
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
