import { createRouter, createWebHashHistory } from "vue-router";
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
      path: "/emailSetting",
      name: "emailSetting",
      component: () => import("../views/emailSetting/index.vue"),
    },
    {
      path: "/testBubble",
      name: "testBubble",
      component: () => import("../views/testBubble/index.vue"),
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
    {
      path: "/testUseInfiniteQuery",
      name: "testUseInfiniteQuery",
      component: () => import("../views/testUseInfiniteQuery/index.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("../views/test/index.vue"),
    },
    {
      path: "/testPlyr",
      name: "testPlyr",
      component: () => import("../views/testPlyr/index.vue"),
    },
    {
      path: "/testDPlayer",
      name: "testDPlayer",
      component: () => import("../views/testDPlayer/index.vue"),
    },
    {
      path: "/testXiGuaPlayer",
      name: "testXiGuaPlayer",
      component: () => import("../views/testXiGuaPlayer/index.vue"),
    },
    {
      path: "/testChartJS",
      name: "testChartJS",
      component: () => import("../views/testChartJS/index.vue"),
    },
    {
      path: "/testDuole",
      name: "testDuole",
      component: () => import("../views/testDuole/index.vue"),
    },
    {
      path: "/test9f",
      name: "test9f",
      component: () => import("../views/test9f/index.vue"),
    },
  ],
});

export default router;
