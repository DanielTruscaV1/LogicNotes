import { createRouter, createWebHistory } from 'vue-router';

import AppHeader from "./components/AppHeader.vue";
import AppNavigation from "./components/AppNavigation.vue";
import AppPage from "./components/AppPage.vue";
import AppFooter from "./components/AppFooter.vue";

import Notes from "./components/Notes.vue";
import Note from "./components/Note.vue";

import AppSettings from "./components/AppSettings.vue";
import AppSignUp from "./components/AppSignUp.vue";
import AppSignIn from "./components/AppSignIn.vue";
import Profile from "./components/Profile.vue";

const routes = [
  {
    path: '/',
    name:"Home",
    component:AppPage,
  },
  {
    path: '/notes',
    name: "Notes",
    component:Notes,
  },
  {
    path: '/note/:id',
    name: "Note",
    component:Note,
    props: true,
  },
  {
    path: "/settings",
    name: "Settings",
    component:AppSettings,
    props:true,
  },
  {
    path: "/signup",
    name: "Sign-Up",
    component:AppSignUp,
  },
  {
    path:"/signin",
    name:"Sign-In",
    component:AppSignIn,
  },
  {
    path:"/profile/:id",
    name:"Profile",
    component: Profile,
    props:true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;