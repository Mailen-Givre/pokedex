<template>
    <div class="footer-bar">
        <div class="footer-bar-content">
            <PrimaryButton buttonText='All' @click="showAll" :isDisabled="isAllDisabled"
                imageSrc="@/assets/images/icons/all.svg" imageAlt="All" />
            <PrimaryButton buttonText='Favorites' @click="showFavorites" :isDisabled="isFavoritesDisabled"
                imageSrc="/images/icons/star.svg'" imageAlt="Favorites" />
        </div>
    </div>
</template>

<script>
import '@/styles/components/ui/footerBar.scss';
import PrimaryButton from '@/components/ui/PrimaryButton.vue'
export default {
    name: 'FooterBar',
    components: {
        PrimaryButton
    },
    data() {
        return {
            isAllDisabled: false,
            isFavoritesDisabled: true
        };
    },
    methods: {
        showAll() {
            this.$emit('showAll');
            this.isAllDisabled = false
            this.isFavoritesDisabled = true
        },
        showFavorites() {
            this.$emit('showFavorites');
            this.isAllDisabled = true
            this.isFavoritesDisabled = false
        }
    }
};
</script>