<template>
    <div class="footer-bar">
        <div class="footer-bar-content">
            <PrimaryButton buttonText='All' @click="showAll" :isSelected="isAllSelected"
                :imageSrc="require('@/assets/images/icons/all.svg')" imageAlt="All" />
            <PrimaryButton buttonText='Favorites' @click="showFavorites" :isSelected="isFavoritesSelected"
                :imageSrc="require('@/assets/images/icons/star.svg')" imageAlt="Favorites" />
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
            isAllSelected: true,
            isFavoritesSelected: false
        };
    },
    methods: {
        showAll() {
            this.$emit('showAll');
            this.isAllSelected = true
            this.isFavoritesSelected = false
        },
        showFavorites() {
            this.$emit('showFavorites');
            this.isAllSelected = false
            this.isFavoritesSelected = true
        }
    }
};
</script>