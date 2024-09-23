<template>
  <div class="input-container">
    <img src="@/assets/images/icons/search.svg" alt="Search" />
    <input v-model.lazy="searchQuery" @input="handleSearch" type="text" placeholder="Search" class="search-input">
  </div>
</template>

<script>
import '@/styles/components/ui/searchField.scss';
export default {
  name: 'SearchField',
  data() {
    return {
      searchQuery: ''
    }
  },
  // watch: {
  //   searchQuery(newVal) {
  //     this.$emit('search', newVal);
  //   }
  // },
  methods: {
    handleSearch() {
      this.$emit('search', this.searchQuery);
    }
  }
};
</script>
