<template>
  <div class="loading-page">
    <div class="pokeball">
      <div class="pokeball__button"></div>
      <img src="@/assets/images/pokeball.svg" alt="Loading">
    </div>
  </div>
</template>

<script>
import '@/styles/components/common/pokeballLoader.scss';
export default {
  name: 'PokeballLoader'
}
</script>