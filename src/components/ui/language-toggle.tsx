"use client";

import { useLocaleStorage } from '@/hooks/use-locale-storage';
import { localeConfig, storeLocalePreference, type SupportedLocale } from '@/lib/locale-utils';
import { Button } from "./button";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export function LanguageToggle() {
  const { currentLocale, setLocale, isLoaded } = useLocaleStorage();

  const handleLocaleChange = (localeCode: SupportedLocale) => {
    // Store preference in both localStorage and cookie
    storeLocalePreference(localeCode);
    
    // Update locale using our custom hook
    setLocale(localeCode);
  };

  // Don't render until loaded to prevent hydration mismatch
  if (!isLoaded) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        disabled
      >
        <Globe className="h-4 w-4 animate-pulse" />
        <span className="sr-only">Loading language...</span>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
        >
          <Globe className="h-4 w-4" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="bottom" className="min-w-[140px]">
        {Object.entries(localeConfig).map(([code, config]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleLocaleChange(code as SupportedLocale)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span>{config.flag}</span>
            <span>{config.label}</span>
            {currentLocale === code && (
              <span className="ml-auto text-xs text-green-600 dark:text-green-400">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}