'use client'

import { I18nProviderClient } from '@/locales/client'

interface I18nProviderProps {
  locale: string
  children: React.ReactNode
}

export function I18nProvider({ locale, children }: I18nProviderProps) {
  return (
    <I18nProviderClient locale={locale}>
      {children}
    </I18nProviderClient>
  )
}