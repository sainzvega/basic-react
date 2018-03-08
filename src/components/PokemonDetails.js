import React from "react";
import { Item, Image } from "semantic-ui-react";

const PokemonDetails = ({ currentPokemon = {} }) => {
  const {
    id = null,
    name = "",
    sprites = {},
    types = [],
    nickName = "",
    isCaught = false
  } = currentPokemon;

  return (
    <Item.Group>
      <Item>
        <Item.Image size="small" src={sprites.front_default} />
        <Item.Content>
          <Item.Header>{`#${id} ${name}`}</Item.Header>
          <Item.Meta>Maybe Types here?</Item.Meta>
          <Item.Description>
            Some Text Here Is in pokedex here?
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  );
};

export default PokemonDetails;
