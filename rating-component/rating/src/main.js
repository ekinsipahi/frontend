import { createApp } from "vue";

/* Modules Import */
import { createRouter, createWebHistory } from "vue-router";

/* App's Import */
import App from "./App.vue";
import Rate from "./components/rating/rate/Rate.vue";
import RateSuccess from "./components/rating/rated/RateSuccess.vue";

/* Styles Import */
import "./assets/css/tailwind.css";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/rate" },
    { path: "/rate", name: "Rate", component: Rate },
    { path: "/:pathMatch(.*)*", redirect: "/rate" },
    { path: "/rate-success", name: "RateSuccess", component: RateSuccess },
  ],
});

app.component("rate", Rate);
app.use(router);
app.mount("#app");
