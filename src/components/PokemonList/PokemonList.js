import React from "react";
import PokemonListHeader from "./PokemonListHeader";
import PokemonListRow from "./PokemonListRow";

const PokemonList = () => (
  <div>
    <table className="table">
      <PokemonListHeader />
      <tbody>
        <PokemonListRow />
        <PokemonListRow />
        <PokemonListRow />
        <PokemonListRow />
        <PokemonListRow />
      </tbody>
    </table>
  </div>
);

export default PokemonList;