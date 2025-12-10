import { createRouter, createWebHistory } from 'vue-router'
import PokemonView from '../views/PokemonView.vue'
import ZoneLobby from '../views/ZoneLobby.vue' // 👈 Importamos la nueva vista

const routes = [
  {
    path: '/',
    name: 'home',
    component: PokemonView
  },
  {
    path: '/zones', // 👈 Nueva ruta para el mapa de zonas
    name: 'zones',
    component: ZoneLobby
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router