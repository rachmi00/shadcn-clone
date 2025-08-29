"use client";
import React, { useState } from "react"; // Import useState
//import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TrendingDown, TrendingUp, Menu } from "lucide-react"; // Import Menu icon
import Sidebar from "./Sidebar";
import Table from "./Table";
import { useScopedI18n } from "@/locales/client";

function Dashboard() {
  // --- ADDED: State to manage sidebar visibility ---
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("default");

  const navigation = useScopedI18n("dashboard.navigation");
  const theme = useScopedI18n("dashboard.theme");
  const documents = useScopedI18n("dashboard.documents");
  const metrics = useScopedI18n("dashboard.metrics");
  const chart = useScopedI18n("dashboard.chart");

  const links = [
    { label: navigation("example"), href: "#", id: 1 },
    { label: navigation("dashboard"), href: "#", id: 2 },
    { label: navigation("tasks"), href: "#", id: 3 },
    { label: navigation("playground"), href: "#", id: 4 },
    { label: navigation("authentication"), href: "#", id: 5 },
  ];

  return (
    <>
      <div className="container-wrapper scroll-mt-24 px-6">
        <div className="container flex items-center justify-between gap-4">
          <div className="hidden md:flex items-center flex-1 overflow-hidden">
            {links.map((item) => (
              <a
                className={`hover:text-primary data-[active=true]:text-primary flex h-7 items-center justify-center px-4 text-center text-base font-medium transition-colors ${
                  item.label === navigation("dashboard")
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                data-active={
                  item.label === navigation("dashboard") ? "true" : "false"
                }
                href={item.href}
                key={item.id}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="hidden mr-4 items-center gap-2 md:flex">
            <Select value={selectedTheme} onValueChange={setSelectedTheme}>
              <SelectTrigger className="w-fit bg-secondary text-secondary-foreground border-secondary shadow-none">
                <span className="text-sm font-medium">{theme("label")}</span>
                <SelectValue />
              </SelectTrigger>
              <SelectContent side="top" align="end" className="w-48">
                <SelectGroup>
                  <SelectItem value="default">{theme("default")}</SelectItem>
                  <SelectItem value="scaled">{theme("scaled")}</SelectItem>
                  <SelectItem value="mono">{theme("mono")}</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>{theme("colors")}</SelectLabel>
                  <SelectItem value="blue">{theme("blue")}</SelectItem>
                  <SelectItem value="green">{theme("green")}</SelectItem>
                  <SelectItem value="amber">{theme("amber")}</SelectItem>
                  <SelectItem value="rose">{theme("rose")}</SelectItem>
                  <SelectItem value="purple">{theme("purple")}</SelectItem>
                  <SelectItem value="orange">{theme("orange")}</SelectItem>
                  <SelectItem value="teal">{theme("teal")}</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="container-wrapper section-soft flex flex-1 flex-col pb-6 mt-4 px-4 sm:px-6 md:px-8">
        <div className="theme-container container flex flex-1 scroll-mt-20">
          <div className="bg-background flex overflow-hidden rounded-lg border bg-clip-padding md:flex-1 xl:rounded-xl">
            {/** --- MODIFIED: Passing state to Sidebar --- */}
            <Sidebar
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />

            {/* Main Content Area */}
            <main className="bg-background relative flex w-full flex-1 flex-col md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 min-w-0">
              {/* Header with Documents title and Quick Create button */}
              <header className="bg-background/90 sticky top-0 z-10 flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
                <div className="flex w-full items-center gap-1 px-4 pb-4 lg:gap-2 lg:px-6 lg:pb-1 lg:my-2">
                  {/* --- Hamburger menu for mobile --- */}
                  <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="md:hidden p-1 -ml-2"
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open Sidebar</span>
                  </button>

                  <h1 className="text-base font-medium">
                    {documents("title")}
                  </h1>
                  <div className="ml-auto flex items-center gap-2">
                    <button
                      data-slot="button"
                      className="items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 hidden h-7 sm:flex"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                        className="tabler-icon tabler-icon-circle-plus-filled "
                      >
                        <path d="M4.929 4.929a10 10 0 1 1 14.141 14.141a10 10 0 0 1 -14.14 -14.14zm8.071 4.071a1 1 0 1 0 -2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0 -2h-2v-2z"></path>
                      </svg>
                      <span>{documents("quickCreate")}</span>
                    </button>
                  </div>
                </div>
              </header>

              {/* Dashboard Content */}
              <div className="flex flex-1 flex-col min-h-0 overflow-hidden">
                <div className="flex flex-1 flex-col gap-2 overflow-auto">
                  <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:px-6 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs">
                      {/* Total Revenue Card */}
                      <Card className="rounded-xl border p-6 shadow-sm">
                        <div className="grid grid-cols-[1fr_auto] gap-2 items-start">
                          <CardTitle className="text-sm text-muted-foreground">
                            {metrics("totalRevenue.title")}
                          </CardTitle>
                          <div className="flex items-center gap-1 rounded-md border px-2 py-1 text-xs font-medium">
                            <TrendingUp className="h-3 w-3" />
                            +12.5%
                          </div>
                          <div className="col-span-2 text-3xl font-bold">
                            $1,250.00
                          </div>
                          <p className="col-span-2 text-sm font-medium text-foreground mt-2 flex items-center gap-1">
                            {metrics("totalRevenue.description1")}
                            <TrendingUp className="h-3 w-3" />
                          </p>
                          <p className="col-span-2 text-sm text-muted-foreground">
                            {metrics("totalRevenue.description2")}
                          </p>
                        </div>
                      </Card>

                      {/* New Customers Card */}
                      <Card className="rounded-xl border p-6 shadow-sm">
                        <div className="grid grid-cols-[1fr_auto] gap-2 items-start">
                          <CardTitle className="text-sm text-muted-foreground">
                            {metrics("newCustomers.title")}
                          </CardTitle>
                          <div className="flex items-center gap-1 rounded-md border px-2 py-1 text-xs font-medium">
                            <TrendingDown className="h-3 w-3" />
                            -20%
                          </div>
                          <div className="col-span-2 text-3xl font-bold">
                            1,234
                          </div>
                          <p className="col-span-2 text-sm font-medium text-foreground mt-2 flex items-center gap-1">
                            {metrics("newCustomers.description1")}
                            <TrendingDown className="h-3 w-3" />
                          </p>
                          <p className="col-span-2 text-sm text-muted-foreground">
                            {metrics("newCustomers.description2")}
                          </p>
                        </div>
                      </Card>

                      {/* Active Accounts Card */}
                      <Card className="rounded-xl border p-6 shadow-sm">
                        <div className="grid grid-cols-[1fr_auto] gap-2 items-start">
                          <CardTitle className="text-sm text-muted-foreground">
                            {metrics("activeAccounts.title")}
                          </CardTitle>
                          <div className="flex items-center gap-1 rounded-md border px-2 py-1 text-xs font-medium">
                            <TrendingUp className="h-3 w-3" />
                            +12.5%
                          </div>
                          <div className="col-span-2 text-3xl font-bold">
                            45,678
                          </div>
                          <p className="col-span-2 text-sm font-medium text-foreground mt-2 flex items-center gap-1">
                            {metrics("activeAccounts.description1")}
                            <TrendingUp className="h-3 w-3" />
                          </p>
                          <p className="col-span-2 text-sm text-muted-foreground">
                            {metrics("activeAccounts.description2")}
                          </p>
                        </div>
                      </Card>

                      {/* Growth Rate Card */}
                      <Card className="rounded-xl border p-6 shadow-sm">
                        <div className="grid grid-cols-[1fr_auto] gap-2 items-start">
                          <CardTitle className="text-sm text-muted-foreground">
                            {metrics("growthRate.title")}
                          </CardTitle>
                          <div className="flex items-center gap-1 rounded-md border px-2 py-1 text-xs font-medium">
                            <TrendingUp className="h-3 w-3" />
                            +4.5%
                          </div>
                          <div className="col-span-2 text-3xl font-bold">
                            4.5%
                          </div>
                          <p className="col-span-2 text-sm font-medium text-foreground mt-2 flex items-center gap-1">
                            {metrics("growthRate.description1")}
                            <TrendingUp className="h-3 w-3" />
                          </p>
                          <p className="col-span-2 text-sm text-muted-foreground">
                            {metrics("growthRate.description2")}
                          </p>
                        </div>
                      </Card>
                    </div>
                    {/* Chart Section */}
                    <div className="px-4 sm:px-6">
                      <Card>
                        <CardHeader>
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
                            <div>
                              <CardTitle>{chart("title")}</CardTitle>
                              <CardDescription className="mt-2">
                                {chart("description")}
                              </CardDescription>
                            </div>
                            <div className="flex gap-0">
                              <ToggleGroup
                                type="single"
                                defaultValue="last-3-months"
                                className="flex flex-wrap items-center"
                                variant="outline"
                              >
                                <ToggleGroupItem
                                  value="last-3-months"
                                  className="h-8 px-4 text-sm font-medium"
                                >
                                  {chart("periods.last3Months")}
                                </ToggleGroupItem>
                                <ToggleGroupItem
                                  value="last-30-days"
                                  className="h-8 px-4 text-sm font-medium"
                                >
                                  {chart("periods.last30Days")}
                                </ToggleGroupItem>
                                <ToggleGroupItem
                                  value="last-7-days"
                                  className="h-8 px-4 text-sm font-medium"
                                >
                                  {chart("periods.last7Days")}
                                </ToggleGroupItem>
                              </ToggleGroup>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64 bg-muted/50 rounded flex items-center justify-center">
                            <span className="text-muted-foreground">
                              {chart("placeholder")}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    {/* dashboardtable */}
                    <div className="px-4 sm:px-6 min-w-0">
                      <Table />
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
