import { createRouter, createWebHistory } from 'vue-router';

import AppHeader from "./components/AppHeader.vue";
import AppNavigation from "./components/AppNavigation.vue";
import AppPage from "./components/AppPage.vue";
import AppFooter from "./components/AppFooter.vue";

import Notes from "./components/Notes.vue";
import Note from "./components/Note.vue";

const routes = [
  {
    path: '/',
    component:AppPage,
  },
  {
    path: '/notes',
    component:Notes,
  },
  {
    path: '/note/:id',
    name: "Note",
    component:Note,
    props: true,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;