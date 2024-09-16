<template>
  <div class='pokemon-card'>
    <h3>{{ pokemon.name }}</h3>
    <FavoriteButton :isFavorite="isFavorite(pokemon.id)" :pokemon="pokemon" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import '@/styles/components/pokemon/pokemonCard.scss'
import FavoriteButton from '@/components/ui/FavoriteButton.vue'

export default {
  name: 'PokemonCard',
  components: {
    FavoriteButton
  },
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters('pokemon', ['isFavorite']),
  }
};
</script>