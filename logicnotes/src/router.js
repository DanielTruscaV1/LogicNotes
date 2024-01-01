import { createRouter, createWebHistory } from 'vue-router';

import AppHeader from "./components/AppHeader.vue";
import AppNavigation from "./components/AppNavigation.vue";
import AppPage from "./components/AppPage.vue";
import AppFooter from "./components/AppFooter.vue";

import Notes from "./components/Notes.vue";

const routes = [
  {
    path: '/',
    component:AppPage,
  },
  {
    path: '/notes',
    component:Notes,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;