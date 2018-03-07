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
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired
};

export default PokemonSearchBar;
