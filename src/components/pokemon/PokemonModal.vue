<template>
    <div class="modal-backdrop">
        <div class="modal">
            <div class="modal-header">
                <button class="close-button" @click="closeModal"><img src="@/assets/images/icons/close.svg"
                        alt="CloseButton"></button>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img :src="pokemon?.sprites" alt="Pokemon">
                    <img src="@/assets/images/background.jpg" alt="Background" class="background-image" />
                </div>
                <div class="modal-content">
                    <ul class="info-list">
                        <li v-for="(value, label) in filteredLabels" :key="label"><strong>{{ capitalizeLetter(label)
                                }}:</strong> {{ value }}
                        </li>
                    </ul>
                    <PrimaryButton buttonText='Share to my friends' @click="share" />
                    <FavoriteButton :isFavorite="isFavorite(pokemon?.id)" :pokemon="pokemon" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '@/styles/components/pokemon/pokemonModal.scss'
import PrimaryButton from '@/components/ui/PrimaryButton.vue'
import FavoriteButton from '@/components/ui/FavoriteButton.vue'
import { mapGetters } from 'vuex';
import { capitalizeWord } from '@/composables/capitalizePokemons';
export default {
    name: 'PokemonModal',
    components: {
        PrimaryButton,
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
        filteredLabels() {
            if (this.pokemon) {
                // eslint-disable-next-line no-unused-vars
                const { id, sprites, ...filtered } = this.pokemon
                return filtered
            }
            return null
        }
    },
    methods: {
        closeModal() {
            this.$emit('closeModal')
        },
        capitalizeLetter(label) {
            return capitalizeWord(label);
        },
        share() {
            const pokemonInfo = Object.entries(this.filteredLabels)
                .map(([label, value]) => `${this.capitalizeLetter(label)}: ${value}`)
                .join(', ')
            navigator.clipboard.writeText(pokemonInfo)
                .then(() => {
                    alert('Pokemon info copied to clipboard!');
                })
                .catch(err => {
                    console.error('Failed to copy text: ', err);
                    alert('Failed to copy Pokemon info. Please try again.');
                });
        }
    },
};
</script>