import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
// import { createStore } from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return {
      name: "Bui Trung Hieu",
    };
  },
  getters: {
    name: (state) => state.name,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
