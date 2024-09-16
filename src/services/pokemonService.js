import api from './api';

export const pokemonService = {
  async getPokemons() {
    return api.get(`/pokemon`);
  },

  async getPokemonByName(name) {
    try {
      const response = await api.get(`/pokemon/${name.toLowerCase()}`);
      return {
        name: response.name,
        id: response.id,
      };
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return null;
      }
      throw error;
    }
  },

};