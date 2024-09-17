<template>
  <div class="no-results-container">
    <h4>Uh-oh!</h4>
    <p>You look lost on your journey!</p>
    <PrimaryButton buttonText='Go back home' @clickButton="goToHome" />
  </div>
</template>

<script>
import '@/styles/components/common/noResultsMessage.scss';
import PrimaryButton from '@/components/ui/PrimaryButton.vue';
export default {
  name: 'NoResultsMessage',
  components: {
    PrimaryButton
  },
  methods: {
    goToHome() {
      this.$router.push('/');
    }
  }
};
</script>