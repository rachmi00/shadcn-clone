'use client'

import { useLocaleStorage } from '@/hooks/use-locale-storage'
import { getStoredLocale, clearLocalePreference } from '@/lib/locale-utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function LocaleDebug() {
  const { currentLocale, isLoaded } = useLocaleStorage()

  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  const storedLocale = getStoredLocale()
  const urlLocale = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : 'unknown'

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg text-xs space-y-2 z-50">
      <div className="font-semibold text-gray-900 dark:text-gray-100">Locale Debug</div>
      
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-gray-600 dark:text-gray-400">Current:</span>
          <Badge variant="outline">{currentLocale}</Badge>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-gray-600 dark:text-gray-400">Stored:</span>
          <Badge variant="outline">{storedLocale || 'none'}</Badge>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-gray-600 dark:text-gray-400">URL:</span>
          <Badge variant="outline">{urlLocale}</Badge>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-gray-600 dark:text-gray-400">Loaded:</span>
          <Badge variant={isLoaded ? "default" : "secondary"}>
            {isLoaded ? 'Yes' : 'No'}
          </Badge>
        </div>
      </div>
      
      <Button 
        size="sm" 
        variant="outline" 
        onClick={clearLocalePreference}
        className="w-full text-xs"
      >
        Clear Stored Locale
      </Button>
    </div>
  )
}