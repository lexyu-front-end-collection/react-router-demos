import { createFileRoute } from '@tanstack/react-router'
import getPokemon, { PokemonDetails } from '../../apis/pokemon'

export const Route = createFileRoute('/pokemon/$id')({
  component: Pokemon,
  loader: async ({ params }): Promise<PokemonDetails> => await getPokemon(params.id),
})

function Pokemon() {
  const { id } = Route.useParams()
  const pokemon = Route.useLoaderData()
  console.log(pokemon);
  return (
    <div className="p-2 flex flex-col items-center">
      <h2>{id}. {pokemon.name.toUpperCase()}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <table className='border border-collapse text-center'>
        <thead className='bg-gray-200'>
          <tr>
            <th>Height</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{pokemon.height}</td>
          </tr>
        </tbody>
        <thead className='bg-gray-200'>
          <tr>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{pokemon.weight}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}