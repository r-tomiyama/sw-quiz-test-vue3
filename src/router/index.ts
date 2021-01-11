import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Quiz from "@/views/Quiz/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    redirect: { name: "quiz" }
  },
  {
    path: "/quiz",
    name: "quiz",
    component: Quiz
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
