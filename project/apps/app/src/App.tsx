import { useEffect, useState } from 'react';
import { List } from 'ui'

const api = "https://pokeapi.co/api/v2/pokemon?limit=151"

interface Pokemon {
  name: string;
  url: string;
}

const App = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error('Failed to fetch Pokémon list');
        }
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1>Pokemon list:</h1>
      <List items={pokemonList} />
    </>
  );
}

export default App
