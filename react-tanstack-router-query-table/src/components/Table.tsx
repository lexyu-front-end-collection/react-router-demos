import { ColumnDef, getCoreRowModel, OnChangeFn, PaginationOptions, PaginationState, SortingState, useReactTable } from "@tanstack/react-table";
import { Filters } from "../apis/types";



export const DEFAULT_PAGE_INDEX = 0;
export const DEFAULT_PAGE_SIZE = 10;


type Props<T extends Record<string, string | number>> = {
    data: T[];
    columns: ColumnDef<T>[];
    pagination: PaginationState;
    paginationOptions: Pick<PaginationOptions, "onPaginationChange" | "rowCount">;
    filters: Filters<T>;
    onFilterChange: (dataFilters: Partial<T>) => void,
    sorting: SortingState;
    onSortingChange: OnChangeFn<SortingState>;
}


export function Table<T extends Record<string, string | number>>({
    data,
    columns,
    pagination,
    paginationOptions,
    filters,
    onFilterChange,
    sorting,
    onSortingChange
}: Props<T>) {
    const table = useReactTable({
        data,
        columns,
        state: {
            pagination,
            sorting
        },
        onSortingChange,
        ...paginationOptions,
        manualFiltering: true,
        manualSorting: true,
        manualPagination: true,
        getCoreRowModel: getCoreRowModel(),

    })

    return (
        <div>
            <table>
                <thead>
                    Table Head
                </thead>
                <tbody>
                    Table Body
                </tbody>
            </table>
        </div>
    )
}