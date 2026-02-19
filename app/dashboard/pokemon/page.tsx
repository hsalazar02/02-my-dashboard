// funcion asincorna porque es Http  limit el numero que vamos a pemitir que trae la consulta y offset de donde comenzamos


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
    <div className="flex flex-col">
   
    <span className="text-5xl my-2">
      Listado de Pokémons <small >estático</small>
    </span>

        
        <PokemonGrid pokemons={pokemons}/>

     
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
