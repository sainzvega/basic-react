import React from "react";
import { Table, Segment, Dimmer, Loader } from "semantic-ui-react";
import PokemonListHeader from "./PokemonListHeader";
import PokemonListRow from "./PokemonListRow";

const PokemonList = props => {
  const { pokemonList, selectPokemon, currentPokemon } = props;
  if (pokemonList && pokemonList.length)
    return (
      <Segment.Group
        style={{
          maxHeight: "700px",
          overflowY: "auto"
        }}
      >
        <Table celled>
          <PokemonListHeader />
          <Table.Body>
            {pokemonList.map(pokemon => (
              <PokemonListRow
                key={pokemon.id}
                pokemon={pokemon}
                onPokemonClicked={selectPokemon}
                selected={currentPokemon === pokemon.id}
              />
            ))}
          </Table.Body>
        </Table>
      </Segment.Group>
    );

  return (
    <Dimmer active inverted>
      <Loader content="Loading" />
    </Dimmer>
  );
};

export default PokemonList;
