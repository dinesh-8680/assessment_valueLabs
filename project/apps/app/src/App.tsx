import { useEffect, useState } from 'react';
import { List } from 'ui'
import { Provider, useDispatch, useSelector } from 'react-redux';
import { RootState, store } from './store';
import { setError, setLoading, setPokemons } from './pokemonSlice';

const api = "https://pokeapi.co/api/v2/pokemon?limit=151"

const App = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state: RootState) => state.pokemon);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        dispatch(setLoading());
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error('Failed to fetch Pokémon list');
        }
        const data = await response.json();
        dispatch(setPokemons(data.results));
      } catch (error) {
        dispatch(setError((error as Error).message));
      }
    };

    fetchPokemon();
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Provider store={store}>
        <h1>Pokemon list:</h1>
        <List items={list} />
      </Provider>
    </>
  );
}

export default App
