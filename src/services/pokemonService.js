import { capitalizeWord } from '@/composables/capitalizePokemons';
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
        weight: response.weight,
        height: response.height,
        sprites: response.sprites.front_default,
        types: response.types.map(type => capitalizeWord(type.type.name)).join(', '),
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