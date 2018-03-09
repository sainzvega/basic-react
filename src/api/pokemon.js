import pokemonListData from "./data.json";
import { map } from "lodash";

export const getPokemonList = () => {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(map(pokemonListData, pokemon => pokemon));
    }, 1500);
  });
};
