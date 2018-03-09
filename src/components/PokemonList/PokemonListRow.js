import React from "react";
import { Table } from "semantic-ui-react";

const capitalizeName = name => name.charAt(0).toUpperCase() + name.slice(1);

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
      <Table.Cell>{capitalizeName(name)}</Table.Cell>
      <Table.Cell>{inPokedex ? "Yes" : "No"}</Table.Cell>
    </Table.Row>
  );
};

export default PokemonListRow;
