import { createRouter, createWebHistory } from 'vue-router'
import PokemonListPage from '@/views/PokemonListPage.vue'
import WelcomePage from '@/views/WelcomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: WelcomePage
  },
  {
    path: '/pokemon',
    name: 'PokemonList',
    component: PokemonListPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router