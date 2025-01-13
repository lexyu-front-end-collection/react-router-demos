import { createFileRoute, useNavigate } from '@tanstack/react-router'
import * as v from 'valibot'

const categoriesArray = ['electronics', 'clothing', 'books', 'toys'];

const Category = v.union(
	categoriesArray.map(category => v.literal(category))
);
// const Category = v.union([
// 	v.literal('electronics'),
// 	v.literal('clothing'),
// 	v.literal('books'),
// 	v.literal('toys'),
// ])

const ItemFilters = v.object({
	query: v.optional(v.string()),
	hasDiscount: v.optional(v.boolean()),
	categories: v.optional(v.array(Category)),
})

export type ItemFilters = v.InferOutput<typeof ItemFilters>

/** v1
export type ItemFilters = {
  query: string,
  hasDiscount: boolean,
  categories: Category[],
}

type Category = 'electronics' | 'clothing' | 'books' | 'toys'
*/



export const Route = createFileRoute('/search')({
	validateSearch: (search) => v.parse(ItemFilters, search),
	/* v1
	validateSearch: (search: Record<string, unknown>): ItemFilters => {
		return {
			query: search.query as string,
			hasDiscount: search.hasDiscount as boolean,
			categories: search.categories as Category[],
		}
	},
	*/
	component: Search,
})

function Search() {
	const { query, hasDiscount, categories } = Route.useSearch()
	console.log({ query, hasDiscount, categories });

	// const [localQuery, setLocalQuery] = useState(query)

	const navi = useNavigate({ from: Route.fullPath })
	// 2.
	const updateFilters = (name: keyof ItemFilters, value: unknown) => {
		navi({ search: (prev) => ({ ...prev, [name]: value }) })
	}

	return (
		<div>
			<h1>Search</h1>
			You searched for:{" "}
			<input
				className='text-blue-800 font-bold'
				// value={localQuery}
				// onChange={e => setLocalQuery(e.target.value)}
				value={query}
				// 1.
				// onChange={(e) => navi({ search: (prev) => ({ ...prev, query: e.target.value }) })}
				// 2.
				onChange={(e) => {
					updateFilters("query", e.target.value);
				}}
			/>

			<br />

			<input type="checkbox" checked={hasDiscount}
				onChange={(e) => updateFilters("hasDiscount", e.target.checked)} />
			<select multiple
				value={categories}
				onChange={(e) => updateFilters(
					"categories",
					Array.from(e.target.selectedOptions, (option) => option.value)
				)}
			>
				{
					categoriesArray.map((category) => (
						<option key={category} value={category} className='text-cyan-700 font-bold'>
							{category}
						</option>
					))
				/* {["electronics", "clothing", "books", "toys"].map((category) => (
					<option key={category} value={category}>
						{category}
					</option>
				))} */}
			</select>



			<pre>{JSON.stringify({ query, hasDiscount, categories }, null, 2)}</pre>
		</div>
	)
}
