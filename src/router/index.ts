// Composables
import { createRouter, createWebHistory } from "vue-router";
import indexVue from "@/pages/index.vue";

const routes = [{ path: "/", component: indexVue }];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
});

export default router;
