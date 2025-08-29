"use client";
import React from "react";
import { useState } from "react";
import type { FC } from "react";
import {
  Gauge,
  List,
  BarChart3,
  Folder,
  Users,
  Database,
  FileText,
  FileType,
  MoreHorizontal,
  Settings,
  HelpCircle,
  Search,
  MoreVertical,
  LucideIcon,
  CircleUserRound,
  CreditCard,
  Bell,
  LogOut,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useScopedI18n } from "@/locales/client";

// ---------------- TYPES ----------------

interface BaseItemProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  hasDropdown?: boolean;
}

interface MenuItemProps extends BaseItemProps {
  disabled?: boolean;
  onClick: () => void;
}

interface MenuLinkProps extends BaseItemProps {
  href?: string;
}

// --- ADDED: Props for the main Sidebar component ---
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// ---------------- HELPER COMPONENTS ----------------

const MenuItem: FC<MenuItemProps> = ({
  icon: Icon,
  label,
  isActive = false,
  disabled = false,
  onClick,
}) => (
  <li className="group/menu-item relative">
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left 
        outline-none ring-sidebar-ring transition-[width,height,padding] focus-visible:ring-2 
        disabled:pointer-events-none disabled:opacity-50 sidebar-hover dark:hover:bg-gray-[#cecece]/10 hover:text-gray-900 dark:hover:text-white
        h-8 text-sm font-normal text-gray-900 dark:text-white
        ${isActive ? "bg-gray-100 dark:bg-[#cecece]/20" : ""}
        ${disabled ? "text-gray-400 dark:text-gray-500" : ""}
      `}
    >
      <Icon className="w-4 h-4 shrink-0 text-gray-700 dark:text-gray-300" />
      <span className="sidebar-text text-md">{label}</span>
    </button>

    <button className="absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center p-0 outline-none transition-transform hover:bg-gray-100 dark:hover:bg-gray-700 rounded-sm opacity-0 group-hover/menu-item:opacity-100 group-focus-within/menu-item:opacity-100">
      <MoreHorizontal className="w-4 h-4 text-gray-600 dark:text-gray-300" />
      <span className="sr-only">More</span>
    </button>
  </li>
);

const MenuLink: FC<MenuLinkProps> = ({
  icon: Icon,
  label,
  isActive = false,
  hasDropdown = false,
  href = "#",
}) => (
  <li className="group/menu-item relative">
    <a
      href={href}
      className={`
        peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left 
        outline-none ring-sidebar-ring transition-[width,height,padding] focus-visible:ring-2 
        sidebar-hover sidebar-text h-8 text-sm font-normal
  ${isActive ? "bg-[var(--color-sidebar-hover)]" : ""}
      `}
    >
      <Icon className="w-4 h-4 shrink-0 sidebar-text" />
      <span className="truncate sidebar-text">{label}</span>
    </a>
    {hasDropdown && (
      <button className="absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center p-0 outline-none transition-transform hover:sidebar-hover dark:hover:bg-gray-700 rounded-sm opacity-0 group-hover/menu-item:opacity-100 group-focus-within/menu-item:opacity-100">
        <MoreHorizontal className="w-4 h-4" />
        <span className="sr-only">More</span>
      </button>
    )}
  </li>
);

const AcmeIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 text-gray-950 dark:text-gray-300"
  >
    <path d="M5.636 5.636a9 9 0 1 0 12.728 12.728a9 9 0 0 0 -12.728 -12.728z"></path>
    <path d="M16.243 7.757a6 6 0 0 0 -8.486 0"></path>
  </svg>
);

const SectionHeader: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="sidebar-text-muted flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium">
    {children}
  </div>
);

// ---------------- MAIN COMPONENT ----------------

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const sidebar = useScopedI18n("sidebar");
  const [activeItem, setActiveItem] = useState<string>("dashboard");

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <>
      {/* --- FIXED: Higher z-index for overlay --- */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 z-[60] md:hidden"
        />
      )}

      {/* --- FIXED: Higher z-index for sidebar --- */}
      <div
        className={`
        fixed top-0 left-0 h-full z-[70] w-64
        transform transition-all duration-300 ease-in-out
        ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
        md:relative md:translate-x-0 md:opacity-100 md:z-auto
        sidebar-bg border-r sidebar-border flex flex-col 
      `}
      >
        {/* Header */}
        <div className="flex flex-col gap-2 p-2 border-b sidebar-border w-full ">
          <ul className="flex w-full min-w-0 flex-col gap-1">
            <li className="group/menu-item relative">
              <a
                href="#"
                className="peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-1.5 text-left outline-none ring-sidebar-ring transition-[width,height,padding] focus-visible:ring-2 hover:bg-gray-100 hover:text-gray-900 h-8 text-sm"
              >
                <AcmeIcon />
                <span className="text-base font-semibold sidebar-text">
                  {sidebar("company.name")}
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-auto">
          {/* Home Section */}
          <div className="relative flex w-full min-w-0 flex-col p-2">
            <SectionHeader>{sidebar("sections.home")}</SectionHeader>
            <ul className="flex w-full min-w-0 flex-col gap-1">
              <MenuItem
                icon={Gauge}
                label={sidebar("navigation.dashboard")}
                isActive={activeItem === "dashboard"}
                onClick={() => handleItemClick("dashboard")}
              />
              <MenuItem
                icon={List}
                label={sidebar("navigation.lifecycle")}
                isActive={activeItem === "lifecycle"}
                onClick={() => handleItemClick("lifecycle")}
              />
              <MenuItem
                icon={BarChart3}
                label={sidebar("navigation.analytics")}
                isActive={activeItem === "analytics"}
                onClick={() => handleItemClick("analytics")}
              />
              <MenuItem
                icon={Folder}
                label={sidebar("navigation.projects")}
                isActive={activeItem === "projects"}
                onClick={() => handleItemClick("projects")}
              />
              <MenuItem
                icon={Users}
                label={sidebar("navigation.team")}
                isActive={activeItem === "team"}
                onClick={() => handleItemClick("team")}
              />
            </ul>
          </div>

          {/* Documents Section */}
          <div className="relative flex w-full min-w-0 flex-col p-2">
            <SectionHeader>{sidebar("sections.documents")}</SectionHeader>
            <ul className="flex w-full min-w-0 flex-col gap-1">
              <MenuLink
                icon={Database}
                label={sidebar("navigation.dataLibrary")}
                hasDropdown={true}
                isActive={activeItem === "data-library"}
              />
              <MenuLink
                icon={FileText}
                label={sidebar("navigation.reports")}
                hasDropdown={true}
                isActive={activeItem === "reports"}
              />
              <MenuLink
                icon={FileType}
                label={sidebar("navigation.wordAssistant")}
                hasDropdown={true}
                isActive={activeItem === "word-assistant"}
              />
              <MenuItem
                icon={MoreHorizontal}
                label={sidebar("navigation.more")}
                disabled={true}
                onClick={() => {}}
              />
            </ul>
          </div>

          {/* Bottom Section */}
          <div className="relative flex w-full min-w-0 flex-col p-2 mt-auto">
            <ul className="flex w-full min-w-0 flex-col gap-1">
              <MenuLink
                icon={Settings}
                label={sidebar("navigation.settings")}
                isActive={activeItem === "settings"}
              />
              <MenuLink
                icon={HelpCircle}
                label={sidebar("navigation.getHelp")}
                isActive={activeItem === "help"}
              />
              <MenuLink
                icon={Search}
                label={sidebar("navigation.search")}
                isActive={activeItem === "search"}
              />
            </ul>
          </div>
        </div>

        {/*Footer with Shadcn's Avatar and Popover */}
        <div className="flex flex-col p-2 ">
          <Popover>
            <PopoverTrigger asChild>
              <button className="peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left outline-none ring-sidebar-ring transition-[width,height,padding] focus-visible:ring-2 hover:bg-[#cecece]/10 h-12 text-sm">
                <Avatar className="h-8 w-8 rounded-sm grayscale">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>SH</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium text-gray-900 dark:text-white">
                    shadcn
                  </span>
                  <span className="truncate text-xs text-gray-500 dark:text-gray-400">
                    m@example.com
                  </span>
                </div>
                <MoreVertical className="ml-auto w-4 h-4 text-gray-400 dark:text-gray-300" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-[239px] h-[200px] p-1" side="right" align="end">
              <div className="flex flex-col">
                {/* Popover Header */}
                <div className="flex items-center gap-2 p-1">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>SH</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold text-primary">
                      shadcn
                    </span>
                    <span className="truncate text-xs text-muted-foreground">
                      m@example.com
                    </span>
                  </div>
                </div>

                <div role="separator" aria-orientation="horizontal" data-slot="dropdown-menu-separator" className="bg-border -mx-1 my-1 h-px"></div>

                <button className="w-full text-left flex items-center gap-1 px-2 py-1.5 rounded-md hover:bg-muted text-sm">
                  <CircleUserRound className="w-4 h-4 text-muted-foreground" />
                  <span>Account</span>
                </button>
                <button className="w-full text-left flex items-center gap-1 px-2 py-1.5 rounded-md hover:bg-muted text-sm">
                  <CreditCard className="w-4 h-4 text-muted-foreground" />
                  <span>Billing</span>
                </button>
                <button className="w-full text-left flex items-center gap-1 px-2 py-1.5 rounded-md hover:bg-muted text-sm">
                  <Bell className="w-4 h-4 text-muted-foreground" />
                  <span>Notifications</span>
                </button>

                <div role="separator" aria-orientation="horizontal" className="h-px bg-border -mx-1 my-1" />

                <button className="w-full text-left flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-muted text-sm">
                  <LogOut className="w-4 h-4 text-muted-foreground" />
                  <span>Log out</span>
                </button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
