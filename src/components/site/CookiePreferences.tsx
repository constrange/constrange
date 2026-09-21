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
    <svg className="cookie-float-icon" viewBox="16 16 68 68" fill="currentColor" aria-hidden="true">
      <path
        d="M46.07 37.456a4.34 4.34 0 1 0-2.247-8.383 4.34 4.34 0 0 0 2.246 8.383zm10.107 37.721a4.339 4.339 0 1 0-2.246-8.382 4.339 4.339 0 0 0 2.246 8.382zM32.263 42.88a4.339 4.339 0 1 1-2.246 8.382 4.339 4.339 0 0 1 2.246-8.382zm40.789 15.422a4.339 4.339 0 1 0-8.382-2.247 4.339 4.339 0 0 0 8.382 2.247zM39.261 69a4.34 4.34 0 1 1-6.136-6.136A4.34 4.34 0 0 1 39.26 69z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M54.47 26.25c-1.465-3.17-.975-6.797.975-9.816A34.241 34.241 0 0 0 50 16c-18.778 0-34 15.222-34 34s15.222 34 34 34 34-15.222 34-34c0-1.92-.16-3.803-.465-5.636-5.335 2.367-11.279 1.257-14.03-2.908-2.011-3.047-1.823-6.983.12-10.396-6.1 2.412-12.776.344-15.156-4.81zm-20.998-.986A29.75 29.75 0 0 1 50 20.25a11.9 11.9 0 0 0 14.875 14.875A11.9 11.9 0 0 0 79.75 50a29.75 29.75 0 1 1-46.278-24.736z"
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
