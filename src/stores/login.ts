import { defineStore } from "pinia";
import type User from "@/interfaces/User";

export const useLoginStore = defineStore("login", {
  state: () => ({
    user: null as User | null,
  }),
  getters: {
    isLoggedIn(): boolean {
      return !!this.user;
    },
  },
  actions: {
    setUser(user: User) {
      this.user = user;
    },
  },
});
