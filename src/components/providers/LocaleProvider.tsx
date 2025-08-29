'use client'

import { useEffect } from 'react'
import { useChangeLocale } from '@/locales/client'
import { getStoredLocale, storeLocalePreference, detectBrowserLocale, SUPPORTED_LOCALES } from '@/lib/locale-utils'

interface LocaleProviderProps {
  children: React.ReactNode
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const changeLocale = useChangeLocale()

  useEffect(() => {
    // Get current locale from URL
    const currentPathLocale = window.location.pathname.split('/')[1]
    
    // Check localStorage for saved locale preference
    const savedLocale = getStoredLocale()
    
    if (savedLocale) {
      // Ensure cookie is set for server-side detection
      storeLocalePreference(savedLocale)
      
      // Only change locale if it's different from current URL
      if (currentPathLocale !== savedLocale) {
        changeLocale(savedLocale)
      }
    } else if (!SUPPORTED_LOCALES.includes(currentPathLocale as any)) {
      // No saved preference and invalid/missing locale in URL
      // Detect from browser and set as preference
      const browserLocale = detectBrowserLocale()
      storeLocalePreference(browserLocale)
      
      if (currentPathLocale !== browserLocale) {
        changeLocale(browserLocale)
      }
    } else {
      // Valid locale in URL but no saved preference
      // Save current URL locale as preference
      storeLocalePreference(currentPathLocale as any)
    }
  }, [changeLocale])

  return <>{children}</>
}