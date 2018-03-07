import React from "react";
import { Table, Segment, Dimmer, Loader } from "semantic-ui-react";
import PokemonListHeader from "./PokemonListHeader";
import PokemonListRow from "./PokemonListRow";

const PokemonList = ({ pokemonList }) => {  
  if(pokemonList && pokemonList.length)
    return (
      <Segment.Group className="Pokemon-List">       
      <Table celled>
        <PokemonListHeader />
        <Table.Body>
          {
            pokemonList.map(pokemon => <PokemonListRow key={pokemon.id} pokemon={pokemon}/>)
          }
        </Table.Body>
      </Table>
      </Segment.Group>
    );

  return (
    <Dimmer active inverted>
        <Loader content='Loading' />
      </Dimmer>          
  );  
}

export default PokemonList;