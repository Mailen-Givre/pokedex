export function capitalizePokemons(pokemons) {
  return pokemons.map(pokemon => ({
    ...pokemon,
    name: capitalizeWord(pokemon.name)
  }));
}

export function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}