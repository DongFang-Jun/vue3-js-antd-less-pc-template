import { createRouter, createWebHistory } from "vue-router";
import { userRouter } from "@/config/router.config";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: userRouter,
});

export default router;
