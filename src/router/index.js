import {createWebHistory, createRouter} from 'vue-router'
import Abbonamenti from '@/views/AbbonamentiView.vue'
import Amministrazione from '@/views/AmministrazioneView.vue'
import Dashboard from '@/views/DashboardView.vue'
import Fatture from '@/views/FattureView.vue'
import Impostazioni from '@/views/ImpostazioniView.vue'
import Pagamenti from '@/views/PagamentiView.vue'
import Login from '@/views/LoginView.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/Abbonamenti",
        name: "Abbonamenti",
        component: Abbonamenti
    },
    {
        path: "/Amministrazione",
        name: "Amministrazione",
        component: Amministrazione
    },
    {
        path: "/Fatture",
        name: "Fatture",
        component: Fatture
    },
    {
        path: "/Pagamenti",
        name: "Pagamenti",
        component: Pagamenti
    },
    {
        path: "/Impostazioni",
        name: "Impostazioni",
        component: Impostazioni
    },
    {
        path: "/Login",
        name: "Login",
        component: Login
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;