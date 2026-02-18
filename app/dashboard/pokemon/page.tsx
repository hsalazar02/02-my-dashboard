// funcion asincorna porque es Http  limit el numero que vamos a pemitir que trae la consulta y offset de donde comenzamos
import Image from "next/image";

import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";
//El arreglo simplePokemon trae la estructura de simplepokemons.ts al igual que la otra
const getPokemons = async(limit = 20, offset = 0):Promise<SimplePokemon[]> => {
    const data:PokemonsResponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}')
    .then( res => res.json())

    const pokemons = data.results.map(pokemon => ({
      id: pokemon.url.split('/').at(-2)!,
      name: pokemon.name
    }))
    return pokemons;
    
}

// funcion de la pagina


export default async function PokemonsPage() {
  const pokemons = await getPokemons();

  return (
    <div className="w-full h-full p-6">
      <div
        className="
          w-full
          grid
          grid-cols-2
          sm:grid-cols-4
          md:grid-cols-6
          lg:grid-cols-8
          gap-6
        "
      >
        {pokemons.map((pokemon) => (
          <div
            key={pokemon.id}
            className="flex items-center justify-center"
          >
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              width={100}
              height={100}
              alt={pokemon.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
