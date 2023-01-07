import { defineStore } from "pinia";
import type User from "@/interfaces/User";
import type Customer from "@/interfaces/Customer";
import { useAuth0 } from "@auth0/auth0-vue";
import { api } from "@/global/api";
import axios from "axios";

export const useLoginStore = () => {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();
  const innerStore = defineStore({
    id: "login",
    state: () => ({
      user: null as User | null,
    }),
    getters: {
      isLoggedIn(): boolean {
        return this.user !== null;
      },
    },
    actions: {
      setUser() {
        console.log("setting user up");
        if (isLoading) {
          this.user = null;
        }
        if (error) {
          this.user = null;
        }
        if (isAuthenticated.value) {
          axios.get(`${api.url}/customers`).then((users) => {
            console.log("users", users.data.data);
            const customer = users.data.data.find(
              (item: Customer) => item.email === user.value.email
            );
            console.log("customer", customer);
            this.user = { ...user.value, ...customer };
          });
        } else {
          this.user = null;
        }
      },
      login() {
        loginWithRedirect().then((r) => console.log(r));
      },
      logout() {
        logout();
      },
    },
  });
  const s = innerStore();
  if (!s.isLoggedIn) {
    s.setUser();
  }
  return s;
};
