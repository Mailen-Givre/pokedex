<template>
  <button :class="{
    'primary-button': true,
    'primary-button--disabled': isDisabled
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
    isDisabled: {
      type: Boolean,
      required: false,
      default: false
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