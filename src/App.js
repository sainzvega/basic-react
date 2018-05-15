import React, { Component } from "react";
import { Container, Header, Grid, Segment, Image } from "semantic-ui-react";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";
import PokemonSearchBar from "./components/PokemonSearchBar";

import { getPokemonList } from "./api/pokemon";
import { find } from "lodash";

import logo from "./assets/images/pokedex.png";

class App extends Component {
  constructor(props) {
    super(props); // TODO: Explain this (use C# example or Java Example)
    this.state = {
      pokemonListData: [],
      currentPokemon: null,
      searchText: ""
    };
  }

  componentDidMount() {
    getPokemonList().then(data => {
      this.setState({
        pokemonListData: data
      });
    });
  }

  filterPokemonList(pokemonListData, searchText) {
    const searchRegExp = new RegExp(searchText, "i");
    return pokemonListData.filter(({ name }) => name.match(searchRegExp));
  }

  handleTextChanged = evt => {
    const { target: { value } } = evt;
    this.setState({
      searchText: value
    });
  };

  handleCatchClicked = pokemonId => {
    const tempData = this.state.pokemonListData;
    const pokemon = find(tempData, pokemon => pokemon.id === pokemonId);
    pokemon.inPokedex = !pokemon.inPokedex;
    this.setState({
      pokemonListData: tempData
    });
  };

  handleRowClicked = pokemonId => {
    this.setState({
      currentPokemon: pokemonId
    });
  };

  render() {
    const { pokemonListData = [], currentPokemon, searchText } = this.state;
    const filteredPokemonList =
      searchText && searchText.length
        ? this.filterPokemonList(pokemonListData, searchText)
        : pokemonListData;
    const temp = find(
      pokemonListData,
      pokemon => pokemon.id === currentPokemon
    );

    return (
      <div>
        <Header
          inverted
          as="h1"
          color="grey"
          style={{
            width: "100%",
            height: "70px",
            padding: "20px",
            backgroundColor: "black"
          }}
        >
          <Image src={logo} size="mini" /> ISI-Pokedex
        </Header>
        <Container style={{ marginTop: "1em" }}>
          <Segment>
            <Grid>
              <Grid.Column width={10}>
                <Header as="h3">Pokemon List</Header>
                <PokemonSearchBar
                  currentText={this.state.searchText}
                  onTextChange={this.handleTextChanged}
                />
                <PokemonList
                  pokemonList={filteredPokemonList}
                  currentPokemon={currentPokemon}
                  selectPokemon={this.handleRowClicked}
                />
              </Grid.Column>
              <Grid.Column width={6}>
                <Header as="h3">Pokemon Details</Header>
                <PokemonDetails
                  currentPokemon={temp}
                  onCatchClick={this.handleCatchClicked}
                />
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default App;
