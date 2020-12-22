import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/recommend",
  },
  {
    path: "/recommend",
    name: "recommend",
    component: () => import("../components/recommend/recommend.vue"),
  },
  {
    path: "/singer",
    name: "singer",
    component: () => import("../components/singer/singer.vue"),
  },
  {
    path: "/rank",
    name: "rank",
    component: () => import("../components/rank/rank.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../components/search/search.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
