<template>
  <div>
    <h1>Counter view</h1>
    <h2>{{ counter }}</h2>
    <button @click="increase">+1</button><button @click="decrease">-1</button>
  </div>
</template>

<script>
import useCounter from "@/hooks/useCounter";

export default {
  name: "Counter", //Nombre del componente
  props: {}, //Propiedades que recibe este componente
  emits: [], //Eventos que emite este componente
  setup() {
    const { counter, increase, decrease } = useCounter(1);
    return {
      counter,
      increase,
      decrease,
    };
  },
};
</script>

<style>
</style>