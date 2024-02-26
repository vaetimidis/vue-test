/* eslint-disable node/prefer-global/process */
// Composables
import { createRouter, createWebHistory } from 'vue-router'
import indexVue from '@/pages/index.vue'
import cartVue from '@/pages/cart.vue'

const routes = [{ path: '/', component: indexVue }, { path: '/cart', component: cartVue }]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
