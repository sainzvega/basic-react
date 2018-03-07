// @flow
export const getPokemonListData = () => {
  const pokemonListData = [
    {
      id: 1,
      name: "Bulbasaur",
      types: ["grass"],
      sprites: [],
      inPokedex: true
    },
    {
      id: 2,
      name: "Bulbasaur",
      types: ["grass"],
      sprites: [],
      inPokedex: true
    },
    {
      id: 3,
      name: "Bulbasaur",
      types: ["grass"],
      sprites: [],
      inPokedex: true
    },
    {
      id: 4,
      name: "Bulbasaur",
      types: ["grass"],
      sprites: [],
      inPokedex: true
    }
  ];

  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(pokemonListData);
    }, 3000);
  });
};
