<template>
  <button :class="{
    'primary-button': true,
    'primary-button--not-selected': !isSelected
  }" @click="handleClick">
    <img v-if="imageSrc" :src="imageSrc" :alt="imageAlt" />
    {{ buttonText }}
  </button>
</template>

<script>
import '@/styles/components/ui/primaryButton.scss';
export default {
  name: 'PrimaryButton',
  props: {
    buttonText: {
      type: String,
      required: true
    },
    isSelected: {
      type: Boolean,
      required: false,
      default: true
    },
    imageSrc: {
      type: String,
      required: false,
      default: null
    },
    imageAlt: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
};
</script>