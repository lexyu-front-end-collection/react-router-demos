export type PokemonDetails = {
	name: string,
	id: number,
	height: number,
	weight: number
	sprites: {
		front_default: string
	}
}

export default async function getPokemon(id: string): Promise<PokemonDetails> {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	return await response.json();
}
