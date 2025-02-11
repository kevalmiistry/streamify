import {
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    VisibilityState,
} from "@tanstack/react-table";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { ReactElement, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { DataTablePagination } from "./datatable-pagination";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { CustomColumnDef } from "@/types";

interface DataTableProps<TData, TValue> {
    columns: CustomColumnDef<TData, TValue>[];
    data: TData[];
    enableStickyCols?: boolean;
    children?: ReactElement;
}

export function DataTableWithStickyColumns<TData, TValue>({
    columns,
    data,
    enableStickyCols = false,
    children,
}: DataTableProps<TData, TValue>) {
    const stickyColsPoints: number[] = useMemo(() => {
        return columns.filter((item) => item.isSticky).map((item) => item.fixedWidth ?? 0);
    }, [columns]);

    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = useState({});
    const [globalFilter, setGlobalFilter] = useState("");

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        onGlobalFilterChange: setGlobalFilter,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
            globalFilter,
        },
        globalFilterFn: "includesString",
    });

    const getStickyProperties = (idx: number) => {
        if (idx < stickyColsPoints.length) {
            if (idx === 0) {
                return {
                    left: "0px",
                    width: `${stickyColsPoints[idx]}px`,
                };
            } else {
                return {
                    left: `${stickyColsPoints
                        .slice(0, idx)
                        .reduce((acc, curr) => acc + curr, 0)}px`,
                    width: `${stickyColsPoints[idx]}px`,
                };
            }
        }
    };

    const className = {
        getThClassName: (idx: number) => {
            return idx < stickyColsPoints.length ? "!px-0 !z-[100]" : "!z-[50]";
        },
        getTdClasses: (idx: number) => {
            return idx < stickyColsPoints.length
                ? "sticky !px-0 bg-background"
                : "bg-slate-50 dark:bg-white/5";
        },
    };

    return (
        <div className="flex flex-1 flex-col gap-4 overflow-hidden py-4">
            <div className="flex items-center justify-between">
                <div className="flex flex-1 items-center gap-2">
                    <Input
                        placeholder="Search..."
                        value={globalFilter}
                        onChange={(event) => setGlobalFilter(event.target.value)}
                        className="w-[250px]"
                    />
                    {children}
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Manage Columns
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => (
                                <DropdownMenuCheckboxItem
                                    key={column.id}
                                    className="capitalize"
                                    checked={column.getIsVisible()}
                                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                                >
                                    {column.id.replaceAll("_", " ")}
                                </DropdownMenuCheckboxItem>
                            ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="relative z-[0] h-full w-full flex-1 overflow-auto rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id} className="border-b-0">
                                {headerGroup.headers.map((header, idx) => (
                                    <TableHead
                                        key={header.id}
                                        className={cn(
                                            "h-fit whitespace-nowrap bg-background",
                                            enableStickyCols ? className.getThClassName(idx) : "",
                                            {
                                                "sticky top-0":
                                                    table.getRowModel().rows?.length > 0,
                                            },
                                        )}
                                        style={getStickyProperties(idx)}
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef.header,
                                                  header.getContext(),
                                              )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell, idx) => (
                                        <TableCell
                                            key={cell.id}
                                            className={cn(
                                                "",
                                                enableStickyCols ? className.getTdClasses(idx) : "",
                                            )}
                                            style={getStickyProperties(idx)}
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <DataTablePagination table={table} />
        </div>
    );
}
