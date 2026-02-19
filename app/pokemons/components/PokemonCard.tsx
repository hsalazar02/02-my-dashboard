
import Image from 'next/image';
import { SimplePokemon } from '../interfaces/simple-pokemons';

interface Props {
    pokemon: SimplePokemon;
}


export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;


  return (
    <article className="w-full max-w-xs">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width={60}
            height={60}
            alt={name}
            className="object-contain"
          />
          <p className="pt-2 text-lg font-semibold text-gray-50">{name}</p>

          <div className="mt-5">
            <span className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
              Mas informacion
            </span>
          </div>
        </div>

        {/* ...tu resto del contenido igual... */}
      </div>
    </article>
  );
};

