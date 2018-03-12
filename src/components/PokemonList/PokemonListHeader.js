import React from "react";
import { Table } from "semantic-ui-react";

const PokemonListHeader = () => (
  <Table.Header>
    <Table.Row>
      {/* This is for the sprite placeholder */}
      <Table.HeaderCell width={3}>Id</Table.HeaderCell>
      <Table.HeaderCell width={6}>Name</Table.HeaderCell>
      {/* In Pokedex placeholder */}
      <Table.HeaderCell width={3}>In Pokedex</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
);

export default PokemonListHeader;
