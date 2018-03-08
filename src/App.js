import React, { Component } from "react";
import { Container, Header, Grid, Segment } from "semantic-ui-react";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";
import PokemonSearchBar from "./components/PokemonSearchBar";

import { getPokemonListData } from "./api/pokemon";
import { find } from "lodash";

import "./App.css";

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
    getPokemonListData().then(data => {
      this.setState({
        pokemonListData: data
      });
    });
  }

  handleRowClicked = pokemonId => {
    this.setState({
      currentPokemon: pokemonId
    });
  };

  render() {
    const { pokemonListData = [], currentPokemon } = this.state;
    const temp = find(
      pokemonListData,
      pokemon => pokemon.id === currentPokemon
    );

    console.log("Temp", temp);

    return (
      <div className="App">
        <div className="App-header">
          <Header inverted as="h1">
            Pokemon List
          </Header>
        </div>
        <Container>
          <Segment>
            <Grid>
              <Grid.Column width={10}>
                <Header as="h3">Pokemon List</Header>
                <PokemonSearchBar searchText={"Test"} />
                <PokemonList
                  pokemonList={pokemonListData}
                  currentPokemon={currentPokemon}
                  selectPokemon={this.handleRowClicked}
                />
              </Grid.Column>
              <Grid.Column width={6}>
                <Header as="h3">Pokemon Details</Header>
                <Segment>
                  <PokemonDetails currentPokemon={temp} />
                </Segment>
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default App;
