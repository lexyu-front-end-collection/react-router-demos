import { getRouteApi } from "@tanstack/react-router";
import getPokemon from "../apis/pokemon";
import { PokemonDetails } from '../apis/pokemon'
import { useEffect, useState } from "react";
const routeApi = getRouteApi("/pokemon/$pokemonId");

export function PokemonDetail() {
	const { pokemonId } = routeApi.useParams();
	const pokemon = routeApi.useLoaderData();
	const [pokemonInfo, setPokemonInfo] = useState<PokemonDetails | null>(null);

	useEffect(() => {
		const fetchPokemon = async () => {
			try {
				const resp = await getPokemon(pokemonId);
				setPokemonInfo(resp);
			} catch (error) {
				console.error("Error fetching Pokémon data:", error);
			}
		}

		fetchPokemon();
	}, [pokemonId]);

	return (
		<div>
			<h2 className="">
				({pokemonId})
				{pokemon.name}
			</h2>
			<img src={pokemon.sprites.front_default} alt={pokemon.name} />
			<div>
				<div>
					Height: <span className="">{pokemon.height}</span>
				</div>
				<div>
					Weight: <span className="">{pokemon.weight}</span>
				</div>
			</div>
			{pokemonInfo ? (
				<>
					<h2 className="">
						({pokemonId})
						{pokemonInfo.name}
					</h2>
					<img src={pokemonInfo.sprites.front_default} alt={pokemonInfo.name} />
					<div>
						<div>
							Height: <span className="">{pokemonInfo.height}</span>
						</div>
						<div>
							Weight: <span className="">{pokemonInfo.weight}</span>
						</div>
					</div>
				</>
			) : (
				<></>
			)}

		</div>
	);
}