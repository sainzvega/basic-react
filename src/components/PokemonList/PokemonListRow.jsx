import React from "react";
import {Table, Image} from "semantic-ui-react";

const PokemonListRow = (props) => {
  const { pokemon: { id, name, types, inPokedex} } = props;
  return (  
    <Table.Row>
      <Table.Cell>
        <Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' size='small' />
      </Table.Cell>
      <Table.Cell>{id}</Table.Cell>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{types[0]}</Table.Cell>
      <Table.Cell>{inPokedex ? "Caught": "Not-Caught"}</Table.Cell>      
    </Table.Row>
  );
}

export default PokemonListRow;
