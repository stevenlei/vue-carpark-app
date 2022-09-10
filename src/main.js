import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import "./style.css";

// Entry point for the app which contains <router-view>
import App from "./App.vue";

// Route components for the app
import Home from "./Home.vue";
import Info from "./Info.vue";

// Define routes
const routes = [
  { path: "/", component: Home },
  { path: "/info", component: Info },
];

// Create the router instance and pass the `routes` option
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

// Create and mount the root instance.
const app = createApp(App);

// Make sure to _use_ the router instance to make the whole app router-aware.
app.use(router);

// Mount the app
app.mount("#app");
