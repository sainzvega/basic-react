import pokemonListData from "./data.json";
import { map } from "lodash";

export const getPokemonListData = () => {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(map(pokemonListData, pokemon => pokemon));
    }, 3000);
  });
};
