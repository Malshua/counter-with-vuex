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
      state.counter += randomNumber;
    },
    decreaseCounter(state, randomNumber) {
      state.counter -= randomNumber;
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
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then((response) => {
        commit("increaseCounter", response.data);
      });
    },
    decreaseCounter({ commit }) {
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then((response) => {
        commit("decreaseCounter", response.data);
      });
    },
    updateValue({ commit }, newValue) {
      commit("updateValue", newValue);
    },
  },
  modules: {},
});
