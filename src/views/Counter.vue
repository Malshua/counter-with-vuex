<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="counter">{{ $store.state.counter }}</div>
    <div class="counter-squared">
      {{ $store.state.counter }} <sup>2</sup> =
      {{ $store.getters.counterSquared }}
    </div>
    <div class="buttons">
      <button @click="$store.dispatch('decreaseCounter')">-</button>
      <button @click="$store.commit('reset')">Reset</button>
      <button @click="$store.dispatch('increaseCounter')">+</button>
    </div>
    <input
      v-model="setNewvalue"
      placeholder="Enter a Value"
      type="number"
      class="input"
    />
  </div>
</template>

<script>
export default {
  name: "Counter",
  computed: {
    setNewvalue: {
      get() {
        return this.$store.state.counter;
      },
      set(newValue) {
        this.$store.dispatch("updateValue", newValue);
      },
    },
  },
};
</script>

<style>
div {
  margin-bottom: 10px;
}

.counter {
  font-size: 80px;
}

.buttons button {
  font-size: 40px;
  width: 150px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
}

.counter-squared {
  font-size: 30px;
}

.input {
  width: 300px;
  font-size: 20px;
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
}
</style>
