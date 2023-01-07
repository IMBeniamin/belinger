import { defineStore } from "pinia";

export const useApiStore = defineStore({
  id: "api",
  state: () => ({
    url: "https://belingapi.imben.it/api/v1/",
  }),
  actions: {},
});
