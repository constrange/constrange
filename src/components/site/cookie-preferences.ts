export type OptionalCookieCategory = "functional" | "performance" | "targeting"

export type CookiePreferencesState = {
  functional: boolean
  performance: boolean
  targeting: boolean
}

export const COOKIE_PREFS_KEY = "constrange_cookie_preferences"

export const defaultOptionalPreferences: CookiePreferencesState = {
  functional: false,
  performance: false,
  targeting: false,
}

export function readCookiePreferences(): CookiePreferencesState {
  if (typeof window === "undefined") return defaultOptionalPreferences
  try {
    const raw = window.localStorage.getItem(COOKIE_PREFS_KEY)
    if (!raw) return defaultOptionalPreferences
    const parsed = JSON.parse(raw) as Partial<CookiePreferencesState>
    return {
      functional: Boolean(parsed.functional),
      performance: Boolean(parsed.performance),
      targeting: Boolean(parsed.targeting),
    }
  } catch {
    return defaultOptionalPreferences
  }
}

export function writeCookiePreferences(prefs: CookiePreferencesState) {
  if (typeof window === "undefined") return
  window.localStorage.setItem(COOKIE_PREFS_KEY, JSON.stringify(prefs))
}

export const allOptionalEnabled: CookiePreferencesState = {
  functional: true,
  performance: true,
  targeting: true,
}
