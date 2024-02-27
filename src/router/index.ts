/* eslint-disable node/prefer-global/process */
// Composables
import { createRouter, createWebHistory } from 'vue-router'
import indexVue from '@/pages/index.vue'
import cartVue from '@/pages/cart.vue'

export enum paths {
  home = '/',
  cart = '/cart',
}

const routes = [{ path: paths.home, component: indexVue }, { path: paths.cart, component: cartVue }]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
