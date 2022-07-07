import { createRouter, createWebHistory } from "vue-router";
import dashboard from "@/views/DashboardView.vue";
import notFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: dashboard,
  },
  {
    path: "/abbonamenti",
    name: "abbonamenti",
    component: () => import("@/views/AbbonamentiView.vue"),
  },
  {
    path: "/amministrazione",
    name: "ammistrazione",
    component: import("@/views/AmministrazioneView.vue"),
  },
  {
    path: "/fatture",
    name: "fatture",
    component: import("@/views/FattureView.vue"),
  },
  {
    path: "/pagamenti",
    name: "pagamenti",
    component: import("@/views/PagamentiView.vue"),
  },
  {
    path: "/impostazioni",
    name: "impostazioni",
    component: import("@/views/ImpostazioniView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: import("@/views/LoginView.vue"),
  },
  {
    path: "/:catchAll(.*)",
    component: notFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
