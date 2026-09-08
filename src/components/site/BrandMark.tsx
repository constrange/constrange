import type { SVGProps } from "react"

/**
 * Constrange mark — a C as a folded ribbon (range) holding a bar (constraint).
 * Filled geometry so the fold, face and bar share one module at 30px.
 */
export const MARK_FACE =
  "M52.07 47.16A25.8 25.8 0 0 1 6.66 24.03L17.5 27.55A14.4 14.4 0 0 0 42.85 40.46Z"
export const MARK_FOLD =
  "M6.66 24.03A25.8 25.8 0 0 1 52.07 16.84L42.85 23.54A14.4 14.4 0 0 0 17.5 27.55Z"

export function BrandMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden {...props}>
      <path className="mark-face" d={MARK_FACE} />
      <path className="mark-fold" d={MARK_FOLD} />
      <rect className="mark-bar" x="42.45" y="26.3" width="15.1" height="11.4" />
    </svg>
  )
}
