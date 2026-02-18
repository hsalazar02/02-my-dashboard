// funcion asincorna porque es Http  limit el numero que vamos a pemitir que trae la consulta y offset de donde comenzamos
import Image from "next/image";

import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/app/pokemons";


//El arreglo simplePokemon trae la estructura de simplepokemons.ts al igual que la otra
const getPokemons = async(limit = 200, offset = 0):Promise<SimplePokemon[]> => {
    const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
                                                
    )
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
    <div className="flex flex-col items-center w-full px-4 py-6 overflow-x-hidden">

      {/* TITULO */}
      <h1 className="w-full text-center text-4xl font-semibold mb-6">
        Listado de Pokémons <small className="text-xl font-normal">estático</small>
      </h1>

        {/* aqui estamos llamando al componente que creamos en pokemongrid, y le mandmos lo que generamos en el arreglo que tomo el api que esta arriba */}
        <PokemonGrid pokemons={pokemons}/>

      {/* LISTA */}
      {/* <div className="grid w-full gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 justify-items-center px-2">

        {
          pokemons.map((pokemon) => (
          <div key={pokemon.id} className="w-24 h-24 flex items-center justify-center">
            <Image
              key={pokemon.id}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              width={90}
              height={90}
              alt={pokemon.name}
              className="object-contain"

            />
          </div>
          ))
        }
      </div> */}
    </div>
  );
}




// export default async function PokemonsPage() {
//   const pokemons = await getPokemons(151);

  
//   return (
//     <div className="flex flex-wrap gap-10 items-center justify-center">

    
//     {pokemons.map((pokemon) => (
//       <div
//         key={pokemon.id}
//         className="w-24 h-24 flex items-center justify-center"
//       >
//         <Image
//           src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
//           width={100}
//           height={100}
//           alt={pokemon.name}
//           className="object-contain"
//       />
//     </div>
//   ))}
// </div>

//   );
// }
