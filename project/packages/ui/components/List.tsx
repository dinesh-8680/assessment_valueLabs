import React from 'react';
import styles from './List.module.css';

interface Pokemon {
  name: string;
  url: string;
}

interface ListProps {
  items: Pokemon[];
}

export const List = ({ items }: ListProps) => {
  return (
    <ul className={styles.gridContainer}>
      {items.map((pokemon, index) => (
        <li className={styles.item} key={index}>{pokemon.name}</li>
      ))}
    </ul>
  );
}