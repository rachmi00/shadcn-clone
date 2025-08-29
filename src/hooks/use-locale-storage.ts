'use client'

import { useEffect, useState } from 'react'
import { useChangeLocale, useCurrentLocale } from '@/locales/client'
import { 
  getStoredLocale, 
  storeLocalePreference, 
  clearLocalePreference,
  type SupportedLocale 
} from '@/lib/locale-utils'

export function useLocaleStorage() {
  const currentLocale = useCurrentLocale()
  const changeLocale = useChangeLocale()
  const [isLoaded, setIsLoaded] = useState(false)

  // Load saved locale from localStorage on mount
  useEffect(() => {
    const savedLocale = getStoredLocale()
    
    if (savedLocale && savedLocale !== currentLocale) {
      // Only change if the saved locale is different from current
      changeLocale(savedLocale)
    }
    
    setIsLoaded(true)
  }, [changeLocale, currentLocale])

  // Save locale to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded && currentLocale) {
      storeLocalePreference(currentLocale as SupportedLocale)
    }
  }, [currentLocale, isLoaded])

  const setLocale = (locale: SupportedLocale) => {
    storeLocalePreference(locale)
    changeLocale(locale)
  }

  return {
    currentLocale: currentLocale as SupportedLocale,
    setLocale,
    getStoredLocale,
    clearStoredLocale: clearLocalePreference,
    isLoaded
  }
}