/**
 * @augments {Component<{  searchText:string.isRequired>}
 */
import React from "react";
import { Input } from "semantic-ui-react";
import PropTypes from "prop-types";

const PokemonSearchBar = () => (
  <Input
    style={{ width: "100%" }}
    placeholder="Search For Pokemon..."
    icon="search"
  />
);

PokemonSearchBar.propTypes = {
  searchText: PropTypes.string.isRequired
};

export default PokemonSearchBar;
