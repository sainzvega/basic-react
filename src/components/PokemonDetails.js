import React from "react";
import { Item, Button, Image } from "semantic-ui-react";
import pokeball from "../assests/pokeball.png";
import pokeballGray from "../assests/pokeball-gray.png";

const capitalizeName = name => name.charAt(0).toUpperCase() + name.slice(1);
const concatTypes = types =>
  types.reduce(
    (prev, { type }) => (prev.length ? prev + "/" + type.name : type.name),
    ""
  );

const PokemonDetails = ({ onCatchClick, currentPokemon = {} }) => {
  const onClick = () => onCatchClick(id);
  const {
    id = null,
    name = "",
    weight = 0,
    height = 0,
    sprites = {},
    types = [],
    inPokedex = false
  } = currentPokemon;

  return (
    <Item.Group>
      {id && (
        <Item>
          <Item.Image size="small" src={sprites.front_default} />
          <Item.Content>
            <Item.Header>{`#${id} ${capitalizeName(name)}`}</Item.Header>
            <Item.Meta>{concatTypes(types)}</Item.Meta>
            <Item.Description>
              <div>Weight: {weight}</div>
              <div>Height: {height}</div>
            </Item.Description>
            <Button onClick={onClick} size="mini">
              <Image src={inPokedex ? pokeball : pokeballGray} size="mini" />
            </Button>
          </Item.Content>
        </Item>
      )}
    </Item.Group>
  );
};

export default PokemonDetails;
