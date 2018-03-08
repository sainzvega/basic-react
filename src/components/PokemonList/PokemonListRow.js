import React from "react";
import { Table } from "semantic-ui-react";

const PokemonListRow = ({
  pokemon = {},
  onPokemonClicked = f => f,
  selected
}) => {
  const { id = null, name = "", types = [], inPokedex = false } = pokemon;
  const onRowClicked = () => onPokemonClicked(id);
  const typeStr = types.reduce((prev, curr) => prev + "/" + curr.type.name, "");
  console.log(typeStr);
  return (
    <Table.Row onClick={onRowClicked} active={selected}>
      <Table.Cell>{id}</Table.Cell>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{typeStr}</Table.Cell>
      <Table.Cell>{inPokedex ? "Caught" : "Not-Caught"}</Table.Cell>
    </Table.Row>
  );
};

export default PokemonListRow;
