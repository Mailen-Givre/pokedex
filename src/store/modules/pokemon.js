import { capitalizePokemons } from '@/utils/capitalizePokemons';
import { pokemonService } from '@/services/pokemonService';

const FAVORITES_STORAGE_KEY = 'pokemon_favorites';

export const pokemon = {
  namespaced: true,
  state: {
    list: [],
    favorites: JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) || '[]'),
    loading: false,
    error: null,
    showingFavorites: false
  },
  mutations: {
    SET_POKEMONS(state, pokemons) {
      state.list = pokemons;
    },
    ADD_FAVORITE(state, pokemon) {
      state.favorites.push(pokemon);
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(state.favorites));
    },
    REMOVE_FAVORITE(state, pokemonId) {
      state.favorites = state.favorites.filter(p => p.id !== pokemonId);
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(state.favorites));
    },
    SET_LOADING(state, isLoading) {
      state.loading = isLoading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    SET_SHOWING_FAVORITES(state, value) {
      state.showingFavorites = value;
    }
  },
  actions: {
    async fetchPokemons({ commit }) {
      try {
        commit('SET_LOADING', true);
        const data = await pokemonService.getPokemons();
        const capitalizedPokemons = capitalizePokemons(data.results);
        commit('SET_POKEMONS', capitalizedPokemons);
        commit('SET_SHOWING_FAVORITES', false);
      } catch (error) {
        commit('SET_ERROR', error.message);
      } finally {
        setTimeout(() => {
          commit('SET_LOADING', false);
        }, 2000);
      }
    },
    async searchPokemon({ commit }, name) {
      try {
        const pokemon = await pokemonService.getPokemonByName(name);
        const capitalizedPokemon = pokemon ? capitalizePokemons([pokemon]) : [null];
        commit('SET_POKEMONS', capitalizedPokemon);
        commit('SET_SHOWING_FAVORITES', false);
      } catch (error) {
        commit('SET_ERROR', error.message);
      }
    },
    toggleFavorite({ commit, state }, pokemon) {
      const isFavorite = state.favorites.some(p => p.id === pokemon.id);
      if (isFavorite) {
        commit('REMOVE_FAVORITE', pokemon.id);
      } else {
        commit('ADD_FAVORITE', pokemon);
      }
    },
    showFavorites({ commit, state }) {
      commit('SET_POKEMONS', state.favorites);
      commit('SET_SHOWING_FAVORITES', true);
    }
  },
  getters: {
    isFavorite: (state) => (pokemonId) => {
      return state.favorites.some(p => p.id === pokemonId);
    }
  }
};

export default pokemon;