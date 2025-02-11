import { createFileRoute } from '@tanstack/react-router'
import { Table, DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '@/components/Table'

export const Route = createFileRoute('/users')({
    component: UsersPage,
})

function UsersPage() {
    return (
        <div>
            <h1>TanStack Router + Query + Table</h1>
            <Table
                data={[]}
                columns={[]}
                pagination={{
                    pageIndex: DEFAULT_PAGE_INDEX,
                    pageSize: DEFAULT_PAGE_SIZE
                }}
                paginationOptions={{
                    onPaginationChange: (pagination) => {
                   
                    },
                }}
                filters={ }
                onFilterChange={ }
                sorting={ }
                onSortingChange={ }
            >

            </Table>
        </div>
    )
}
