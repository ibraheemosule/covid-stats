import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "country",
    component: () => import("../views/Dashboard.vue"),
    meta: {
      layout: "Dashboard",
    },
  },
  {
    path: "/:state",
    name: "state",
    component: () => import("../views/State.vue"),
    meta: {
      layout: "State",
    },
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
