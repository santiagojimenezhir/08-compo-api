<template>
  <h1>buscar Pokemo:{{ pokemonId }}</h1>
  <form @submit.prevent="onSubmit">
    <input
      type="number"
      placeholder="Número de teléfono"
      autofocus
      v-model="pokemonId"
      ref="txtSearchId"
    />
  </form>
  <hr />
  <span>Presione ENTER para buscar</span>
</template>

<script>
import { ref, onActivated, onMounted } from "vue";
import { useRouter } from "vue-router";

//onActivated
//Router : Naegacion
//Router : Ruta

export default {
  setup() {
    const router = useRouter();

    const pokemonId = ref(1);
    const txtSearchId = ref();

    onActivated(() => {
      txtSearchId.value.select();
    });
    return {
      pokemonId,
      txtSearchId,
      onSubmit: () => {
        router.push({ name: "pokemon-id", params: { id: pokemonId.value } });
      },
    };
  },
};
</script>

<style>
</style>