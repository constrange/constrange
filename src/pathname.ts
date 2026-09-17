/** Strip trailing slashes for route matching (root stays `/`). */
export function routeKey(pathname: string): string {
  return pathname.replace(/\/+$/, "") || "/"
}

/** Canonical path shape for URLs (trailing slash on non-root paths, matching GitHub Pages). */
export function normalizePathname(pathname: string): string {
  const key = routeKey(pathname)
  if (key === "/") return "/"
  return `${key}/`
}
