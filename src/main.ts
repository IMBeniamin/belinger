import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";

import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";

import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.mount("#app");
