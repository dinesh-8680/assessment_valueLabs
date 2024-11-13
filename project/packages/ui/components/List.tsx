import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './List.module.css';
import { removePokemon } from '../../../apps/app/src/pokemonSlice';

interface Pokemon {
  name: string;
  url: string;
}

interface ListProps {
  items: Pokemon[];
}

export const List = ({ items }: ListProps) => {
  const dispatch = useDispatch();

  const handleRemove = (name: string) => {
    dispatch(removePokemon(name));
  };
  return (
    <ul className={styles.gridContainer}>
      {items.map((pokemon, index) => (
        <li className={styles.item} key={index}>
          {pokemon.name}
          <button onClick={() => handleRemove(pokemon.name)}>Remove</button>
        </li>

      ))}
    </ul>
  );
}