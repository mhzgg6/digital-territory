import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

//路由创建
const constantRouterMap: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "test",
    component: () => import("@/views/home.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRouterMap,
})
export { router }
