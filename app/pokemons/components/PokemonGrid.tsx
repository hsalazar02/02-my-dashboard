import { SimplePokemon } from "../interfaces/simple-pokemons"
import { PokemonCard } from "./PokemonCard";

//exportamos la interface que creamos para utilizar el id y el nombre
interface Props {
    pokemons: SimplePokemon[];
}

//en este componete creamos y recorremos la informacion del api para crear la vista y mandarla a la pagina princiapal de pokemon
export const PokemonGrid = ({pokemons}: Props) => {
    
  return (
    <div className="grid w-full gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">

          {
               pokemons.map((pokemon) => (
               
                <PokemonCard key={ pokemon.id } pokemon={pokemon}/>
                

                
              ))

         }
    </div>
    
 
     
  )
}
