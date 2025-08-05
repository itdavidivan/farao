import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLoggedIn: false as boolean,
  }),
  actions: {
    checkLogin() {
      const token = localStorage.getItem("jwt");
      this.isLoggedIn = !!token;
    },
    login(token: string) {
      localStorage.setItem("jwt", token);
      this.isLoggedIn = true;
    },
    logout() {
      localStorage.removeItem("jwt");
      this.isLoggedIn = false;
    },
  },
});
