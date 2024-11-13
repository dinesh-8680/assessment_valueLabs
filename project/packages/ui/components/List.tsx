import React from 'react'

interface Pokemon {
  name: string;
  url: string;
}

interface ListProps {
  items: Pokemon[];
}

export const List = ({ items }: ListProps) => {
  return (
    <ul>
      {items.map((pokemon, index) => (
        <li key={index}>{pokemon.name}</li>
      ))}
    </ul>
  );
}