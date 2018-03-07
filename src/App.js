import React, { Component } from "react";
import { Container, Header, Grid, Segment } from "semantic-ui-react";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";
import PokemonSearchBar from "./components/PokemonSearchBar";

import { getPokemonListData } from "./api/pokemon";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props); // TODO: Explain this (use C# example or Java Example)
    this.state = {
      pokemonListData: [],
      selectedPokemonId: null,
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

  render() {
    const { pokemonListData } = this.state;
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
                <PokemonSearchBar />
                <PokemonList pokemonList={pokemonListData} />
              </Grid.Column>
              <Grid.Column width={6}>
                <Header as="h3">Pokemon Details</Header>
                <Segment>
                  <PokemonDetails />
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
