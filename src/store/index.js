import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    counter: 0,
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter;
    },
  },
  mutations: {
    increaseCounter(state, randomNumber) {
      state.counter++;
    },
    decreaseCounter(state, randomNumber) {
      state.counter--;
    },
    reset(state) {
      state.counter = 0;
    },
    updateValue(state, newValue) {
      state.counter = newValue;
    },
  },
  actions: {
    increaseCounter({ commit }) {
      // axios(
      //   "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      // ).then((response) => {
      //   commit("increaseCounter", response.data);
      // });
      commit("increaseCounter");
    },
    decreaseCounter({ commit }) {
      // axios(
      //   "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      // ).then((response) => {
      //   commit("decreaseCounter", response.data);
      // });
      commit("decreaseCounter");
    },
    updateValue({ commit }, newValue) {
      commit("updateValue", newValue);
    },
  },
  modules: {},
});
