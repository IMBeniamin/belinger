import { createRouter, createWebHistory } from "vue-router";
import { authGuard } from "@auth0/auth0-vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    beforeEnter: authGuard,
    component: () => import("@/views/DashboardView.vue"),
  },
  {
    path: "/abbonamenti",
    name: "abbonamenti",
    beforeEnter: authGuard,
    component: () => import("@/views/AbbonamentiView.vue"),
  },
  {
    path: "/amministrazione",
    name: "amministrazione",
    beforeEnter: authGuard,
    component: () => import("@/views/AmministrazioneView.vue"),
  },
  {
    path: "/fatture",
    name: "fatture",
    beforeEnter: authGuard,
    component: () => import("@/views/FattureView.vue"),
  },
  {
    path: "/ricevute",
    name: "ricevute",
    beforeEnter: authGuard,
    component: () => import("@/views/RicevuteView.vue"),
  },
  {
    path: "/pagamenti",
    name: "pagamenti",
    beforeEnter: authGuard,
    component: () => import("@/views/PagamentiView.vue"),
  },
  {
    path: "/impostazioni",
    name: "impostazioni",
    beforeEnter: authGuard,
    component: () => import("@/views/ImpostazioniView.vue"),
  },
  {
    path: "/privacy",
    name: "privacy",
    component: () => import("@/views/PrivacyView.vue"),
  },
  {
    path: "/authorize",
    name: "authorize",
    component: () => import("@/views/AuthorizeView.vue"),
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
