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

export type Pokemon = {
    id: string,
    name: string
}

export async function getPokemonList(): Promise<Pokemon[]> {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await response.json() as {
        results: {
            name: string,
            url: string
        }[]
    };

    console.log(data);

    return data.results.map((pokemone) => ({
        id: pokemone.url.split('/').slice(-2, -1)[0],
        name: pokemone.name
    }));
}