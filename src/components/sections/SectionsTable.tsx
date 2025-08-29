// components/SectionsTable.tsx

"use client";

import React, { useMemo, useState } from "react";
import { useScopedI18n } from '@/locales/client';
import {
  Check,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  GripVertical,
  ChevronDown,
  Loader
} from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// --- TYPES & CONSTANTS (Centralized and Exported) ---
export const allColumns = [
  "Section Type",
  "Status",
  "Target",
  "Limit",
  "Reviewer",
] as const;

export type ColumnKey = typeof allColumns[number];

type Row = {
  id: number;
  header: string;
  sectionType: string;
  status: "Done" | "In Process";
  target: number;
  limit: number;
  reviewer?: string | null;
};

// --- PROPS INTERFACE ---
interface ShadcnDataTableProps {
  visibleColumns: string[];
}

const reviewers = ["Eddie Lake", "Jamik Tashpulatov", "Rosa Martinez"];
const TOTAL_ROWS = 68;

interface SampleData {
  sectionTypes: {
    narrative: string;
    coverPage: string;
    tableOfContents: string;
    technicalContent: string;
  };
  headers: {
    coverPage: string;
    tableOfContents: string;
    executiveSummary: string;
    technicalApproach: string;
  };
}

function makeRows(total: number, sampleData?: SampleData): Row[] {
  // Fallback values if content is not available
  const fallbackSampleTypes = ["Narrative", "Cover page", "Table of contents", "Technical content"];
  const fallbackHeaders = ["Cover page", "Table of contents", "Executive summary", "Technical approach"];

  const sampleTypes = sampleData ? [
    sampleData.sectionTypes.narrative,
    sampleData.sectionTypes.coverPage,
    sampleData.sectionTypes.tableOfContents,
    sampleData.sectionTypes.technicalContent
  ] : fallbackSampleTypes;

  const headers = sampleData ? [
    sampleData.headers.coverPage,
    sampleData.headers.tableOfContents,
    sampleData.headers.executiveSummary,
    sampleData.headers.technicalApproach
  ] : fallbackHeaders;

  return Array.from({ length: total }).map((_, i) => ({
    id: i + 1,
    header: headers[i % 4] + (i >= 4 ? ` ${Math.floor(i / 4)}` : ""),
    sectionType: sampleTypes[i % sampleTypes.length],
    status: i % 3 === 0 ? "In Process" : "Done",
    target: Math.floor(Math.random() * 30) + 1,
    limit: Math.floor(Math.random() * 30) + 1,
    reviewer: null,
  }));
}

// --- UI COMPONENTS (Unchanged) ---
interface CheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  className?: string;
}
const Checkbox: React.FC<CheckboxProps> = ({ checked, onCheckedChange, className = "" }) => (
  <button
    type="button"
    role="checkbox"
    aria-checked={checked}
    onClick={() => onCheckedChange(!checked)}
    className={`h-4 w-4 rounded border-1 flex items-center justify-center 
      ${checked
        ? "bg-black dark:bg-[#171717] border-black dark:border-[#171717]"
        : "bg-white dark:bg-[#171717] border-gray-300 dark:border-muted hover:border-gray-400"
      } ${className}`}
  >
    {checked && <Check className="h-2.5 w-2.5 text-white" />}
  </button>
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "icon";
}
const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}) => {
  const base = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors";
  const variants = {
    default: "bg-[var(--color-button-primary-bg)] text-[var(--color-button-primary-text)] hover:bg-[var(--color-button-primary-hover)]",
    outline: "border border-[var(--color-button-secondary-border)] bg-[var(--color-button-secondary-bg)] hover:bg-[var(--color-button-secondary-hover)] text-[var(--color-button-secondary-text)]",
    ghost: "hover-bg-theme text-theme-secondary",
  };
  const sizes = {
    default: "h-10 px-4",
    sm: "h-8 px-3 text-xs",
    icon: "h-8 w-8",
  };
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Dropdown: React.FC<{
  label: React.ReactNode;
  options: string[];
  onSelect: (value: string) => void;
  width?: string;
}> = ({ label, options, onSelect, width = "w-40" }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div onClick={() => setOpen((o) => !o)}>{label}</div>
      {open && (
        <div
          className={`absolute top-full left-0 mt-1 z-50 ${width} rounded-md border dropdown-bg dropdown-border shadow-md`}
        >
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                onSelect(opt);
                setOpen(false);
              }}
              className="px-2 py-1.5 text-sm dropdown-hover cursor-pointer text-theme-primary"
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


// ---------------- MAIN DATA TABLE COMPONENT ----------------
export default function ShadcnDataTable({ visibleColumns }: ShadcnDataTableProps) {
  const sectionsTable = useScopedI18n('sectionsTable');
  
  const sampleData = useMemo(() => ({
    sectionTypes: {
      narrative: sectionsTable('sampleData.sectionTypes.narrative'),
      coverPage: sectionsTable('sampleData.sectionTypes.coverPage'),
      tableOfContents: sectionsTable('sampleData.sectionTypes.tableOfContents'),
      technicalContent: sectionsTable('sampleData.sectionTypes.technicalContent')
    },
    headers: {
      coverPage: sectionsTable('sampleData.headers.coverPage'),
      tableOfContents: sectionsTable('sampleData.headers.tableOfContents'),
      executiveSummary: sectionsTable('sampleData.headers.executiveSummary'),
      technicalApproach: sectionsTable('sampleData.headers.technicalApproach')
    }
  }), [sectionsTable]);
  
  const allRows = useMemo(() => makeRows(TOTAL_ROWS, sampleData), [sampleData]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [rows, setRows] = useState<Row[]>(allRows);

  const pageCount = Math.ceil(TOTAL_ROWS / rowsPerPage);
  const visibleRows = rows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const columnConfig: Record<ColumnKey, {
    header: React.ReactNode;
    headerClassName: string;
    cell: (row: Row) => React.ReactNode;
    cellClassName: string;
  }> = {
    "Section Type": {
      header: sectionsTable('columns.sectionType'),
      headerClassName: "py-3 px-2 text-left text-sm font-medium text-gray-950 dark:text-gray-100 tracking-wide",
      cell: (row) => (
        <Badge variant="outline" className="rounded-sm px-2 py-0.5 text-xs text-muted-foreground dark:text-muted-foreground dark:border-muted">
          {row.sectionType}
        </Badge>
      ),
      cellClassName: "py-4 px-2",
    },
    "Status": {
      header: sectionsTable('columns.status'),
      headerClassName: "py-3 px-2 text-left text-sm font-medium text-gray-950 dark:text-gray-100 tracking-wide",
      cell: (row) => (
        row.status === "Done" ? (
          <Badge variant="outline" className="inline-flex items-center gap-2 rounded-sm px-2 py-0.5 text-xs">
            <div className="flex items-center justify-center h-2.5 w-2.5 rounded-full bg-green-500">
              <Check className="h-1.5 w-1.5 text-white" />
            </div>
            <span className="text-gray-600 dark:text-gray-300">{sectionsTable('status.done')}</span>
          </Badge>
        ) : (
          <Badge variant="outline" className="inline-flex items-center gap-2 rounded-sm px-2 py-0.5 text-xs text-muted-foreground dark:text-muted-foreground dark:border-muted">
            <Loader className="h-3 w-3" />
            {sectionsTable('status.inProcess')}
          </Badge>
        )
      ),
      cellClassName: "py-4 px-2",
    },
    "Target": {
      header: sectionsTable('columns.target'),
      headerClassName: "py-3 px-2 text-center text-sm font-medium text-gray-950 dark:text-gray-100 tracking-wide",
      cell: (row) => row.target,
      cellClassName: "py-4 px-2 text-center font-medium text-gray-900 dark:text-gray-100",
    },
    "Limit": {
      header: sectionsTable('columns.limit'),
      headerClassName: "py-3 px-2 text-center text-sm font-medium text-gray-950 dark:text-gray-100 tracking-wide",
      cell: (row) => row.limit,
      cellClassName: "py-4 px-2 text-center font-medium text-gray-900 dark:text-gray-100",
    },
    "Reviewer": {
      header: sectionsTable('columns.reviewer'),
      headerClassName: "py-3 px-2 text-left text-sm font-medium text-gray-950 dark:text-gray-100 tracking-wide",
      cell: (row) => (
        row.reviewer ? (
          <span className="text-sm font-medium text-gray-900 dark:text-gray-50">{row.reviewer}</span>
        ) : (
          <Dropdown
            label={
              <Button variant="outline" size="sm" className="h-8 p-2 text-muted-foreground dark:text-gray-50 border-gray-100 dark:border-muted bg-white dark:bg-[#171717] hover:bg-gray-50 dark:hover:bg-[#171717]/20">
                <span className="text-sm">{sectionsTable('actions.assignReviewer')} </span><ChevronDown className="ml-1 h-3 w-3" />
              </Button>
            }
            options={reviewers}
            onSelect={(r) =>
              setRows((prev) => prev.map((rw) => (rw.id === row.id ? { ...rw, reviewer: r } : rw)))
            }
          />
        )
      ),
      cellClassName: "py-4 px-2",
    },
  };

  const toggleRow = (id: number) => {
    setSelected((prev) => {
      const copy = new Set(prev);
      if (copy.has(id)) {
        copy.delete(id);
      } else {
        copy.add(id);
      }
      return copy;
    });
  };

  const toggleSelectAllVisible = () => {
    setSelected((prev) => {
      const copy = new Set(prev);
      const allSelected = visibleRows.every((r) => copy.has(r.id));
      visibleRows.forEach((r) => (allSelected ? copy.delete(r.id) : copy.add(r.id)));
      return copy;
    });
  };

  return (
    <div className="w-full">
      <div className="table-bg border border-theme-primary rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[960px]">
            <thead className="table-header-bg border-b table-border">
              <tr>
                {/* --- FIXED COLUMNS --- */}
                <th className="w-12 py-3 pl-4"></th>
                <th className="py-3 px-2 text-left text-sm font-medium text-theme-primary tracking-wide flex gap-2 items-center">
                  <Checkbox className="text-gray-50 bg-gray-900"
                    checked={visibleRows.length > 0 && visibleRows.every((r) => selected.has(r.id))}
                    onCheckedChange={toggleSelectAllVisible}
                  />
                  {sectionsTable('columns.header')}
                </th>

                {/* --- DYNAMIC COLUMNS (Header) --- */}
                {visibleColumns.map((key) => (
                  <th key={key} className={columnConfig[key as ColumnKey].headerClassName}>
                    {columnConfig[key as ColumnKey].header}
                  </th>
                ))}

                {/* --- FIXED COLUMN & MODIFIED PADDING --- */}
                <th className="w-12 py-3 pr-6"></th>
              </tr>
            </thead>
            <tbody className="divide-y table-border table-bg">
              {visibleRows.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50 dark:hover:bg-[#171717]">
                  {/* --- FIXED COLUMNS --- */}
                  <td className="pl-4 py-4 text-theme-muted align-middle">
                    <GripVertical className="h-4 w-4" />
                  </td>
                  <td className="py-4 px-2 font-medium text-theme-primary hover:underline flex items-center gap-2">
                    <Checkbox checked={selected.has(row.id)} onCheckedChange={() => toggleRow(row.id)} />
                    {row.header}
                  </td>

                  {/* --- DYNAMIC COLUMNS (Cell) --- */}
                  {visibleColumns.map((key) => (
                    <td key={`${row.id}-${key}`} className={columnConfig[key as ColumnKey].cellClassName}>
                      {columnConfig[key as ColumnKey].cell(row)}
                    </td>
                  ))}

                  {/* --- FIXED COLUMN --- */}
                  <td className="py-4 pr-4 text-right">
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* --- FOOTER (Unchanged) --- */}
      <div className="flex flex-wrap items-center justify-between px-2 sm:px-4 pt-3 border-t table-border text-sm table-bg">
        <span className="whitespace-nowrap text-gray-700 dark:text-gray-300">
          {selected.size} {sectionsTable('pagination.of')} {TOTAL_ROWS} {sectionsTable('pagination.rowsSelected')}
        </span>
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
          <div className="flex items-center gap-1 sm:gap-2">
            <p className="text-sm font-medium hidden sm:block text-gray-700 dark:text-gray-300">{sectionsTable('pagination.rowsPerPage')}</p>
            <Select
              value={String(rowsPerPage)}
              onValueChange={(value) => {
                setRowsPerPage(Number(value));
                setPage(1);
              }}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue placeholder={String(rowsPerPage)} />
              </SelectTrigger>
              <SelectContent side="top">
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <span className="whitespace-nowrap text-gray-700 dark:text-gray-300">
            {sectionsTable('pagination.pageOf')} {page} {sectionsTable('pagination.of')} {pageCount}
          </span>
          <div className="flex gap-1">
            <Button variant="outline" size="icon" onClick={() => setPage(1)} disabled={page === 1} className="hidden sm:inline-flex">
              <ChevronsLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => setPage((p) => Math.min(pageCount, p + 1))} disabled={page === pageCount}>
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => setPage(pageCount)} disabled={page === pageCount} className="hidden sm:inline-flex">
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}