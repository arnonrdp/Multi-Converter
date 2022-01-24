import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/temperature",
    name: "Temperature",
    component: () => import(/* webpackChunkName: "temperature" */ "../views/Temperature.vue"),
  },
  {
    path: "/length",
    name: "Length",
    component: () => import("../views/Length.vue"),
  },
  {
    path: "/time",
    name: "Time",
    component: () => import("../views/Time.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  document.title = `Multi-Converter | ${to.name}`;
});

export default router;
