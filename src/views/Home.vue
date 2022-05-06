<template>
  <div class="home">
    <h1>Reactive vs REF</h1>
    <h6>{{ ironman }}</h6>
    <h6>{{ hulk }}</h6>
    <h6>{{ ironmanIsAlive }}</h6>
    <h6>{{ hulkIsAlive }}</h6>
    <button @click="changeStatus">Cambiar estados</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, reactive } from "vue";
export default {
  name: "Home",
  components: {},
  setup() {
    const ironman = ref({ name: "Tony", age: 50 });
    const hulk = ref({ name: "Bruce", age: 30 });
    //Diferencia entre ref y recative

    const ironmanIsAlive = reactive(false);
    const hulkIsAlive = ref(true);

    const changeStatus = () => {
      hulkIsAlive.value = !hulkIsAlive.value;
      /**
       * Nota : Como recomendación solo usar ref ya que este soporta todos los tipos de JS.
       * reactive funciona excelnte con objetos 
       */
      // ironmanIsAlive = reactive(!ironmanIsAlive); //Los reactive solo funcionan en objetos, NO FUNCIONAN EN PRIMARIOS
    };

    return {
      ironman,
      hulk,
      ironmanIsAlive,
      hulkIsAlive,
      changeStatus,
    };
  },
};
</script>
