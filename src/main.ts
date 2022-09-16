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

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.use(
  createAuth0({
    domain: "imben.eu.auth0.com",
    client_id: "CI3E4N1tdTdSB3LoXAixeCxuTYUH6MBk",
    redirect_uri: window.location.origin,
  })
);
app.mount("#app");
