import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "fr"],
  defaultLocale: "en",
  // Custom locale detection function
  resolveLocaleFromRequest: (request: NextRequest): "en" | "fr" | null => {
    // First, check if there's a locale in the URL path
    const pathname = request.nextUrl.pathname;
    const localeFromPath = pathname.split("/")[1];

    if (localeFromPath === "en" || localeFromPath === "fr") {
      return localeFromPath;
    }

    // Check for stored locale preference in cookies (set by client-side)
    const storedLocale = request.cookies.get("preferred-locale")?.value;
    if (storedLocale === "en" || storedLocale === "fr") {
      return storedLocale;
    }

    // Fall back to Accept-Language header
    const acceptLanguage = request.headers.get("accept-language");
    if (acceptLanguage) {
      if (acceptLanguage.includes("fr")) return "fr";
      if (acceptLanguage.includes("en")) return "en";
    }

    // Default fallback
    return "en";
  },
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
