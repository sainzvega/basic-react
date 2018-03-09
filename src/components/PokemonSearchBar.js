import React from "react";
import { Input } from "semantic-ui-react";

const PokemonSearchBar = ({ currentText, onTextChange }) => (
  <Input
    style={{ width: "100%" }}
    placeholder="Search For Pokemon By Id or Name..."
    icon="search"
    value={currentText}
    onChange={onTextChange}
  />
);

export default PokemonSearchBar;
