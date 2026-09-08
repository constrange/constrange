/** Normalize route paths so `/about/` and `/about` behave the same during SSR and hydration. */
export function normalizePathname(pathname: string): string {
  return pathname.replace(/\/+$/, "") || "/"
}
