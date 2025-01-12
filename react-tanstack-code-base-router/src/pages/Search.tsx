import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { ItemFilters } from "../types/item-filters";

const routeApi = getRouteApi("/search");

export function Search() {
	const { query, hasDiscount, categories } = routeApi.useSearch();
	const navigate = useNavigate({ from: routeApi.id });

	const updateFilters = (name: keyof ItemFilters, value: unknown) => {
		navigate({ search: (prev) => ({ ...prev, [name]: value }) });
	};

	return (
		<div className="">
			<div>You searched for:</div>
			<div className="">
				<div className="w-45">
					<div className="">
						<input
							className=""
							placeholder=" "
							value={query}
							onChange={(e) => {
								updateFilters("query", e.target.value);
							}}
						/>
						<label className="">
							Query
						</label>
					</div>
				</div>
			</div>
			<div className="">
				<input
					type="checkbox"
					id="hasDiscount"
					checked={hasDiscount}
					onChange={(e) => updateFilters("hasDiscount", e.target.checked)}
					className=""
				/>
				<label htmlFor="hasDiscount" className="">
					Has Discount
				</label>
			</div>
			<div className="">
				<select
					multiple
					onChange={(e) => {
						updateFilters(
							"categories",
							Array.from(e.target.selectedOptions, (option) => option.value)
						);
					}}
					value={categories}
				>
					{["electronics", "clothing", "books", "toys"].map((category) => (
						<option key={category} value={category}>
							{category}
						</option>
					))}
				</select>
			</div>
			<pre>{JSON.stringify({ query, hasDiscount, categories }, null, 2)}</pre>
		</div>
	);
}