import { RouteRecordRaw } from "vue-router";
// import BasicLayout from "@/layouts/index.vue";

// 主框架内显示的路由
export const frameIn: Array<RouteRecordRaw> = [
  {
    path: "/example",
    name: "Example",
    component: () => import("@/pages/example/index.vue"),
  },
];

// 主框架外显示的路由
const frameOut = [];

const sys = [
  {
    path: "/",
    redirect: "index",
  },
  {
    path: "/index",
    name: "Index",
    // component: () => import("@/layouts/index.vue"),
    component: () => import("@/pages/example/index.vue"),
  },
];

const errorPage = [
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/pages/sys/error/404.vue"),
  },
];

export default [...frameIn, ...frameOut, ...sys, ...errorPage];
