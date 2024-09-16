export function capitalizePokemons(pokemons) {
  return pokemons.map(pokemon => ({
    ...pokemon,
    name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
  }));
}