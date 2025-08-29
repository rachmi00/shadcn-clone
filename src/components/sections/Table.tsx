"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { ChevronDown, Plus, Sidebar } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import ShadcnDataTable from "./SectionsTable"
import { Badge } from "../ui/badge"
import { useScopedI18n } from '../../locales/client'

//  Define your available column keys for dropdown (strongly typed)
const dropdownColumns = [
  "Type",
  "Status",
  "Target",
  "Limit",
  "Reviewer",
] as const

//  Type for a single dropdown column key
type DropdownColumnKey = typeof dropdownColumns[number]

// Mapping from dropdown keys to table column keys
const columnMapping: Record<DropdownColumnKey, string> = {
  "Type": "Section Type",
  "Status": "Status",
  "Target": "Target",
  "Limit": "Limit",
  "Reviewer": "Reviewer",
}

const Table = () => {
  const table = useScopedI18n('table');

  // Default: show all columns in the specified order
  const [selectedColumns, setSelectedColumns] = useState<DropdownColumnKey[]>([
    "Type",
    "Status",
    "Target",
    "Limit",
    "Reviewer",
  ])

  // Toggle logic
  const toggleColumn = (column: DropdownColumnKey) => {
    setSelectedColumns((prev) =>
      prev.includes(column)
        ? prev.filter((c) => c !== column)
        : [...prev, column]
    )
  }

  // Convert dropdown column keys to table column keys
  const visibleTableColumns = selectedColumns.map(col => columnMapping[col])

  return (
    <div className="flex flex-col justify-start gap-4 w-full px-4 lg:px-0">
      <Tabs defaultValue="outline" className="w-full">
        {/*  Header row */}
        <div className="flex flex-col overflow-x-auto no-scrollbar sm:flex-row sm:items-center sm:justify-between gap-3 w-full">
          

            {/* 🔹 Tabs Row 🔹 */}
            <TabsList className="h-9 w-fit flex items-center justify-center flex-shrink min-w-0">
              <TabsTrigger value="outline" className="text-xs sm:text-sm px-2 sm:px-3">{table('tabs.outline')}</TabsTrigger>
              <TabsTrigger value="performance" className="text-xs sm:text-sm flex items-center gap-1 px-2 sm:px-3">
                <span className="truncate">{table('tabs.pastPerformance')}</span>
                <Badge className="rounded-full w-5 h-5 bg-muted-foreground/30 badge-text font-medium text-[9px] sm:text-[11px] flex items-center justify-center"> 3 </Badge>
              </TabsTrigger>
              <TabsTrigger value="key-personnel" className="text-xs sm:text-sm flex items-center gap-1 px-2 sm:px-3">
                <span className="truncate">{table('tabs.keyPersonnel')}</span>
                <Badge className="rounded-full w-5 h-5 bg-muted-foreground/30 badge-text font-medium text-[9px] sm:text-[11px] flex items-center justify-center"> 2 </Badge>
              </TabsTrigger>
              <TabsTrigger value="Focus Documents" className="text-xs sm:text-sm px-2 sm:px-3">
                <span className="truncate">{table('tabs.focusDocuments')}</span>
              </TabsTrigger>
            </TabsList>
            {/* 🔹 End Tabs Row 🔹 */}

          

          <div className="flex items-center gap-2 flex-shrink-0">
            {/*  Column customization dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1.5 shadow-sm text-xs px-2 sm:px-3 h-8"
                >
                  <Sidebar className="h-3 w-3" />
                  <span className="hidden sm:inline text-xs">{table('customizableColumns')}</span>
                  <span className="sm:hidden text-xs">Columns</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                {dropdownColumns.map((col) => (
                  <DropdownMenuCheckboxItem
                    key={col}
                    checked={selectedColumns.includes(col)}
                    onCheckedChange={() => toggleColumn(col)}
                  >
                    {col}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Add Section Button */}
            <Button 
              size="sm"
              className="bg-[var(--color-button-secondary-bg)] text-[var(--color-button-secondary-text)] shadow-sm flex items-center gap-1.5 hover:bg-[var(--color-button-secondary-hover)] border border-[var(--color-button-secondary-border)] text-xs px-2 sm:px-3 h-8"
            >
              <Plus className="h-3 w-3" />
              <span className="hidden sm:inline text-xs">{table('addSection')}</span>
              <span className="sm:hidden text-xs">Add</span>
            </Button>
          </div>
        </div>

        {/* Table with dynamic columns */}
        <TabsContent value="outline" className="mt-4">
          <ShadcnDataTable visibleColumns={visibleTableColumns} />
        </TabsContent>

        {/* Other tabs */}
        <TabsContent value="performance" className="p-6">
          Performance content goes here.
        </TabsContent>
        <TabsContent value="key-personnel" className="p-6">
          Key Personnel content goes here.
        </TabsContent>
        <TabsContent value="Focus Documents" className="p-6">
          Focus Documents content goes here.
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Table