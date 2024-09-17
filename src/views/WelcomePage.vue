<template>
  <div class="container">
    <div class="header">
      <img src="@/assets/images/pikachu.svg" alt="Pikachu" class="pikachu-image" />
    </div>
    <div class="content">
      <h1>Welcome to Pokédex</h1>
      <p>
        The digital encyclopedia created by Professor Oak is an invaluable tool
        to Trainers in the Pokémon world.
      </p>
      <PrimaryButton buttonText='Get started' @clickButton="goToPokemonList" />
    </div>
  </div>
</template>

<script>
import '@/styles/views/welcomePage.scss';
import PrimaryButton from '@/components/ui/PrimaryButton.vue';
export default {
  name: 'WelcomePage',
  components: {
    PrimaryButton
  },
  methods: {
    goToPokemonList() {
      this.$router.push('/pokemon');
    }
  }
};
</script>
