<template>
  <h4 v-if="!pokemon && !errorMessage">Buscando</h4>
  <h5 v-else-if="errorMessage">{{ errorMessage }}</h5>
  <div v-else>
    <h1>Pokemon vue</h1>
    <h6>{{ pokemon.name }}</h6>
    <img :src="pokemon.sprites.front_default" />
    <router-link :to="{ name: 'pokemon-search' }">Regresar</router-link>
  </div>
</template>

<script>
import { watch } from "vue";
import { useRoute, onBeforeRouteLeave } from "vue-router";
import usePokemon from "../hooks/usePokemon.js";

//Route ruta
//Router navegacion

export default {
  setup() {
    const route = useRoute();
    const { errorMessage, isLoading, pokemon, searchPokemon } = usePokemon(
      route.params.id
    );

    watch(
      () => route.params.id,
      () => {
        searchPokemon(route.params.id);
      }
    );
    onBeforeRouteLeave(() => {
      const anwer = window.confirm("Esta seguro que desea salir");

      if (!anwer)  return false;
    });
    return {
      pokemon,
      errorMessage,
      isLoading,
    };
  },
};
</script>

<style></style>
