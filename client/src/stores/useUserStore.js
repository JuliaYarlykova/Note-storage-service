import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: {
    user: null,
  },
  mutations: {
    setAuthUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    isLoggedIn(state) {
      return state.user !== null;
    },
  },
});
