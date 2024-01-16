import './style.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueChartsCSS from "vue.charts.css"

import store from "./store";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueChartsCSS);

app.mount('#app');
