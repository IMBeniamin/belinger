import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("@/views/DashboardView.vue"),
  },
  {
    path: "/abbonamenti",
    name: "abbonamenti",
    component: () => import("@/views/AbbonamentiView.vue"),
  },
  {
    path: "/amministrazione",
    name: "amministrazione",
    component: import("@/views/AmministrazioneView.vue"),
  },
  {
    path: "/fatture",
    name: "fatture",
    component: import("@/views/FattureView.vue"),
  },
  {
    path: "/ricevute",
    name: "ricevute",
    component: import("@/views/RicevuteView.vue"),
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
    component: import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
