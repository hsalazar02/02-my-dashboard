import { SimplePokemon } from "../interfaces/simple-pokemons"
import { PokemonCard } from "./PokemonCard";

//exportamos la interface que creamos para utilizar el id y el nombre
interface Props {
    pokemons: SimplePokemon[];
}

//en este componete creamos y recorremos la informacion del api para crear la vista y mandarla a la pagina princiapal de pokemon
export const PokemonGrid = ({pokemons}: Props) => {
  return (
    <div className="grid w-full gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 justify-items-center px-2">
 
          {
               pokemons.map((pokemon) => (
                //qui llamamos a todo el codigo creado en pokemoncard y le asignamos el id de nuestro arreglo
                <PokemonCard key={ pokemon.id } pokemon={pokemon}/>
//           <div key={pokemon.id} className="w-24 h-24 flex items-center justify-center">
//             <Image
//               key={pokemon.id}
//               src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
//               width={90}
//               height={90}
//               alt={pokemon.name}
//               className="object-contain"

//             />
//           </div>
                
              ))

         }
    </div>

    


//         {
//           pokemons.map((pokemon) => (
//           <div key={pokemon.id} className="w-24 h-24 flex items-center justify-center">
//             <Image
//               key={pokemon.id}
//               src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
//               width={90}
//               height={90}
//               alt={pokemon.name}
//               className="object-contain"

//             />
//           </div>
//           ))
//         }

      
  )
}
