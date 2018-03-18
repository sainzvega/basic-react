import React from "react";
import { Table } from "semantic-ui-react";

const PokemonListRow = ({
  pokemon = {},
  onPokemonClicked = f => f,
  selected
}) => {
  const { id = null, name = "", inPokedex = false } = pokemon;
  const onRowClicked = () => onPokemonClicked(id); // Bad

  return (
    <Table.Row onClick={onRowClicked} active={selected}>
      <Table.Cell>{id}</Table.Cell>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{inPokedex ? "Yes" : "No"}</Table.Cell>
    </Table.Row>
  );
};

export default PokemonListRow;
