<template>
  <h2 v-if="isLoading">Espere porfavor</h2>
  <h2 v-else>Usuario</h2>
  <h5 v-if="errorMessage">{{ errorMessage }}</h5>
  <div v-if="users.length > 0">
    <ul>
      <li v-for="{ id, first_name, email } in users" :key="id">
        <h5>{{ first_name }}</h5>
        <h6>{{ email }}</h6>
      </li>
    </ul>
  </div>

  <button @click="prevPage">Atras</button
  ><button @click="nextPage">Siguiente</button> Página: {{ currentPage }}
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  setup() {
    const users = ref([]);
    const isLoading = ref(false);
    const currentPage = ref(1);
    const errorMessage = ref("");

    const getUsers = async (page = 1) => {
      if (page <= 0) page = 1;
      isLoading.value = true;

      const { data } = await axios.get(
        `https://reqres.in/api/users?page=${page}`
      );
      users.value = data.data;

      if (data.data.length > 0) {
        users.value = data.data;
        currentPage.value = page;
         errorMessage.value = "";
      } else if (currentPage.value > 0) {
        errorMessage.value = "No hay más usuarios ";
      } 
      isLoading.value = false;
    };
    getUsers();

    return {
      currentPage,
      errorMessage,
      isLoading,
      users,
      nextPage: () => getUsers(currentPage.value + 1),
      prevPage: () => getUsers(currentPage.value - 1),
    };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  width: 100%;
}
div {
  display: flex;
  justify-content: center;
  align-content: center;
}
ul {
  width: 250px;
}
</style>