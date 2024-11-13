// src/features/pokemonSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonState {
  list: Pokemon[];
  loading: boolean;
  error: string | null;
}

const initialState: PokemonState = {
  list: [],
  loading: false,
  error: null,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setLoading: (state: PokemonState) => {
      state.loading = true;
    },
    setPokemons: (state: PokemonState, action: PayloadAction<Pokemon[]>) => {
      state.list = action.payload;
      state.loading = false;
    },
    setError: (state: PokemonState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setLoading, setPokemons, setError } = pokemonSlice.actions;

export default pokemonSlice.reducer;
