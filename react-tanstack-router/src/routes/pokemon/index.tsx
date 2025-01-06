import { createFileRoute, Link } from '@tanstack/react-router'
import { getPokemonList } from '../../apis/pokemon'

export const Route = createFileRoute('/pokemon/')({
  component: PokemonList,
  loader: getPokemonList
})

function PokemonList() {
  const pokemons = Route.useLoaderData()

  return (
    <div>
      <h2>Pokemon List</h2>
      <ul className='list-disc list-inside'>
        {pokemons.map((pokemon) =>
          <li key={pokemon.id} className='list-item ml-4'>
            <Link
              to={"/pokemon/$id"}
              params={{ id: pokemon.id }}>
              {pokemon.name}
            </Link>
          </li>)}
      </ul>
    </div>
  )
}
