import "./assets/main.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import * as THREE from "three";
import App from "./App.vue";

import Home from "./pages/Home.vue";
import Favorites from "./pages/Favorites.vue";
import Profile from "./pages/Profile.vue";
import Item from "./pages/Item.vue";

const app = createApp(App);

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/favorites", name: "Favorites", component: Favorites },
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/item", name: "Item", component: Item },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
app.use(router);
app.use(autoAnimatePlugin);
app.use(THREE);
app.mount("#app");
