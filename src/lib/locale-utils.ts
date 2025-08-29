export const LOCALE_STORAGE_KEY = 'preferred-locale'
export const LOCALE_COOKIE_NAME = 'preferred-locale'
export const SUPPORTED_LOCALES = ['en', 'fr'] as const

export type SupportedLocale = typeof SUPPORTED_LOCALES[number]

export const localeConfig = {
  en: {
    label: 'English',
    flag: '🇺🇸',
    dir: 'ltr'
  },
  fr: {
    label: 'Français', 
    flag: '🇫🇷',
    dir: 'ltr'
  }
} as const

/**
 * Get stored locale from localStorage (client-side only)
 */
export function getStoredLocale(): SupportedLocale | null {
  if (typeof window === 'undefined') return null
  
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
  return SUPPORTED_LOCALES.includes(stored as SupportedLocale) 
    ? (stored as SupportedLocale) 
    : null
}

/**
 * Store locale preference in localStorage and cookie
 */
export function storeLocalePreference(locale: SupportedLocale) {
  if (typeof window === 'undefined') return
  
  // Store in localStorage for client-side persistence
  localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  
  // Store in cookie for server-side detection
  const maxAge = 60 * 60 * 24 * 365 // 1 year
  document.cookie = `${LOCALE_COOKIE_NAME}=${locale}; path=/; max-age=${maxAge}; SameSite=Lax`
}

/**
 * Clear stored locale preference
 */
export function clearLocalePreference() {
  if (typeof window === 'undefined') return
  
  localStorage.removeItem(LOCALE_STORAGE_KEY)
  document.cookie = `${LOCALE_COOKIE_NAME}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`
}

/**
 * Detect user's preferred locale from browser
 */
export function detectBrowserLocale(): SupportedLocale {
  if (typeof window === 'undefined') return 'en'
  
  const browserLang = navigator.language.toLowerCase()
  
  if (browserLang.startsWith('fr')) return 'fr'
  return 'en' // Default to English
}