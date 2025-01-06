import { createFileRoute } from '@tanstack/react-router'

export type ItemFilters = {
  query: string,
  hasDiscount: boolean,
  categories: Category[],
}

type Category = 'electronics' | 'clothing' | 'books' | 'toys'


export const Route = createFileRoute('/search')({
  validateSearch: (search: Record<string, unknown>): ItemFilters => {
    return {
      query: search.query as string,
      hasDiscount: search.hasDiscount as boolean,
      categories: search.categories as Category[],
    }
  },
  component: Search,
})

function Search() {
  const { query, hasDiscount, categories } = Route.useSearch()
  
  console.log({ query, hasDiscount, categories });

  return (
    <div>
      <h1>Search</h1>
      <pre>{JSON.stringify({ query, hasDiscount, categories }, null, 2)}</pre>
    </div>
  )
}
