import { createApp } from "vue";
import { createPinia } from "pinia";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import App from "./App.vue";

import PrimeVue from "primevue/config";
import { createAuth0 } from "@auth0/auth0-vue";

import "primevue/resources/themes/vela-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import router from "./router";

import "./index.css";

const app = createApp(App);
export const pinia = createPinia();
export const auth0_instance = createAuth0({
  domain: "imben.eu.auth0.com",
  client_id: "CI3E4N1tdTdSB3LoXAixeCxuTYUH6MBk",
  redirect_uri: import.meta.env.PROD
    ? "https://imben.it/belinger/"
    : "http://localhost:3000/belinger",
});

app.use(pinia);
app.use(router);
app.use(PrimeVue);
app.use(auth0_instance);

app.mount("#app");
