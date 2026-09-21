import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

function CookieIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M17.2 8.4c-.9.2-1.6-.5-1.4-1.4.3-1.2 1.6-2 2.8-1.7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="9" cy="11" r="1" fill="currentColor" />
      <circle cx="13.5" cy="14.5" r="1" fill="currentColor" />
      <circle cx="10.5" cy="15.5" r=".8" fill="currentColor" />
      <circle cx="14.5" cy="10.5" r=".8" fill="currentColor" />
    </svg>
  )
}

export function CookiePreferences() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open) {
      if (!dialog.open) dialog.showModal()
    } else if (dialog.open) {
      dialog.close()
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        className="cookie-float-btn"
        aria-label="Cookie preferences"
        onClick={() => setOpen(true)}
      >
        <CookieIcon />
      </button>

      <dialog
        ref={dialogRef}
        className="cookie-dialog"
        aria-labelledby="cookie-dialog-title"
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setOpen(false)
        }}
      >
        <div className="cookie-dialog-panel">
          <button
            type="button"
            className="cookie-dialog-close"
            aria-label="Close cookie preferences"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
          <h2 id="cookie-dialog-title">Cookie preferences</h2>
          <p>
            Constrange does not use marketing pixels, third-party analytics tags, or tracking cookies on
            this site.
          </p>
          <ul className="cookie-dialog-list">
            <li>
              <strong>Essential</strong>
              <span>Always on — required for the site to load and operate.</span>
            </li>
            <li>
              <strong>Analytics</strong>
              <span>Not used on this site.</span>
            </li>
            <li>
              <strong>Marketing</strong>
              <span>Not used on this site.</span>
            </li>
          </ul>
          <p className="cookie-dialog-note">
            The host may keep ordinary technical logs for security and operation. Those are not used to
            profile visitors.
          </p>
          <div className="cookie-dialog-actions">
            <Link className="btn btn-ghost" to="/legal/privacy-policy" onClick={() => setOpen(false)}>
              Privacy policy
            </Link>
            <button type="button" className="btn" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  )
}
