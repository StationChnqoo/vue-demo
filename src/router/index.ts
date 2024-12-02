import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/emailSetting",
      name: "emailSetting",
      component: () => import("../views/emailSetting/index.vue"),
    },
    {
      path: "/hasReadHTML",
      name: "hasReadHTML",
      component: () => import("../views/hasReadHTML/index.vue"),
    },
    {
      path: "/webCapture",
      name: "webCapture",
      component: () => import("../views/webCapture/index.vue"),
    },
    {
      path: "/dynamicPathAsSrc",
      name: "dynamicPathAsSrc",
      component: () => import("../views/dynamicPathAsSrc/index.vue"),
    },
    {
      path: "/testCascader",
      name: "testCascader",
      component: () => import("../views/testCascader/index.vue"),
    },
  ],
});

export default router;
