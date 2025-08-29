// components/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ThemeToggle } from "../ui/theme-toggle";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Separator } from "../ui/separator";
import { LanguageToggle } from "../ui/language-toggle";
import { useScopedI18n } from "@/locales/client";



export default function Header() {
  const navigation = useScopedI18n("header.navigation");
  const search = useScopedI18n("header.search");
  const aria = useScopedI18n("header.aria");
 

  const navItems = [
    { label: navigation("docs"), href: "/" },
    { label: navigation("components"), href: "/components" },
    { label: navigation("blocks"), href: "/blocks" },
    { label: navigation("charts"), href: "/charts" },
    { label: navigation("themes"), href: "/themes" },
    { label: navigation("colors"), href: "/colors" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full header-bg">
      <div className="container flex h-12 max-w-screen-2xl items-center px-4 mt-2">
        {/* Left side:
            - Mobile: Menu button (visible)
            - Desktop: Logo + nav (visible)
        */}
        <div className="flex items-center gap-4">
          {/* Mobile menu button (left) */}
          <button
            aria-label={aria("openMenu")}
            className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium md:hidden hover-bg-theme focus:outline-none text-theme-primary"
          >
            <Menu className="h-5 w-5" />
            <span className="select-none">Menu</span>
          </button>

          {/* Logo (desktop only) */}
          <Link href="/" className="hidden md:flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={20}
              height={20}
              className="h-5 w-5"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-[var(--color-text-secondary)] text-theme-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-3">
          {/* Search popover (desktop only) */}
          <div className="hidden md:block">
            <Popover>
              <PopoverTrigger asChild>
                <button
                  aria-label={aria("searchDocumentation")}
                  className="relative inline-flex items-center w-64 h-8 rounded-md bg-muted px-3 text-sm text-muted-foreground "
                >
                  <span className="hidden lg:inline">
                    {search("placeholder")}
                  </span>
                  <span className="inline lg:hidden">
                    {search("shortPlaceholder")}
                  </span>

                  <div className="absolute top-1.5 right-1.5 hidden gap-1 sm:flex">
                    <kbd className="bg-background text-muted-foreground pointer-events-none flex h-5 items-center justify-center gap-1 rounded border px-1 font-sans text-[0.7rem] font-medium select-none [&_svg:not([class*='size-'])]:size-3">
                      Ctrl
                    </kbd>
                    <kbd className="bg-background text-muted-foreground pointer-events-none flex h-5 items-center justify-center gap-1 rounded border px-1 font-sans text-[0.7rem] font-medium select-none [&_svg:not([class*='size-'])]:size-3 aspect-square">
                      K
                    </kbd>
                  </div>
                </button>
              </PopoverTrigger>

              <PopoverContent
                align="start"
                className="w-[--radix-popover-trigger-width] p-0"
              >
                <div className="flex items-center space-x-2 p-3">
                  <Search className="h-4 w-4 text-theme-muted" />
                  <input
                    aria-label={aria("searchInput")}
                    className="flex-1 bg-transparent outline-none placeholder:text-[var(--color-text-muted)] text-sm text-theme-primary"
                    placeholder={search("placeholder")}
                  />
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <Separator
            orientation="vertical"
            className="h-4 w-px bg-[var(--color-border-secondary)]"
          />

          <div className="flex items-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center h-8 px-2 rounded-md hover-bg-theme"
              aria-label={aria("github")}
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="h-4 w-4 text-theme-primary"
              />
            </a>

            <span className=" text-[12px] font-medium text-muted-foreground tabular-nums">
              93.4k
            </span>
          </div>

          <Separator
            orientation="vertical"
            className="h-4 bg-[var(--color-border-secondary)] w-px"
          />

          <LanguageToggle />

          <Separator
            orientation="vertical"
            className="h-4 bg-[var(--color-border-secondary)]"
          />

          {/* Theme Toggle */}
          <div className="mr-4">
            <ThemeToggle/>
          </div>
        </div>
      </div>
    </header>
  );
}
