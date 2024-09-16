<template>
  <div>
    <div v-if="loading" class="loading">
      <PokeballLoader />
    </div>

    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    <div v-else>
      <div class="pokemon-list">
        <SearchField @search="handleSearch" />
        <div v-if="pokemons.length > 0" class="pokemon-list-content">
          <div v-for="pokemon in pokemons" :key="pokemon.id">
            <PokemonCard :pokemon="pokemon" />
          </div>
        </div>

        <div v-if="!loading && pokemons.length === 0" class="no-results">
          <NoResultsMessage />
        </div>

      </div>
      <FooterBar @showAll="fetchPokemons" @showFavorites="showFavorites" />
    </div>

  </div>
</template>

<script>
import '@/styles/views/pokemonListPage.scss'
import { mapState, mapActions, mapGetters } from 'vuex';
import PokeballLoader from '@/components/common/PokeballLoader.vue'
import PokemonCard from '@/components/pokemon/PokemonCard.vue'
import SearchField from '@/components/ui/SearchField.vue'
import NoResultsMessage from '@/components/common/NoResultsMessage.vue'
import FooterBar from '@/components/ui/FooterBar.vue'

export default {
  name: 'PokemonList',
  components: {
    PokeballLoader,
    PokemonCard,
    SearchField,
    NoResultsMessage,
    FooterBar
  },
  computed: {
    ...mapState('pokemon', ['list', 'loading', 'error']),
    ...mapGetters('pokemon', ['isFavorite']),
    pokemons() {
      return this.list
        .filter(pokemon => pokemon !== null)
        .map(pokemon => ({
          ...pokemon,
          id: pokemon.id || this.getPokemonId(pokemon.url)
        }));
    }
  },
  methods: {
    ...mapActions('pokemon', ['fetchPokemons', 'toggleFavorite', 'searchPokemon', 'showFavorites']),
    getPokemonId(url) {
      const parts = url.split('/');
      return parts[parts.length - 2];
    },
    handleSearch(searchQuery) {
      console.log(searchQuery)
      if (searchQuery.trim() !== '') {
        console.log('entra')
        this.searchPokemon(searchQuery);
      } else {
        this.fetchPokemons();
      }
    },
  },
  created() {
    this.fetchPokemons();
  }
};
</script>