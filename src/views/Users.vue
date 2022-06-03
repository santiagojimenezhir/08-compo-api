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
import useUsers from "../hooks/useUsers";
export default {
  setup() {
    const { isloading, errorMessage, users, prevPage, nextPage, currentPage } =
      useUsers();
    return {
      currentPage,
      errorMessage,
      isloading,
      nextPage,
      prevPage,
      users,
      // ...useUsers(),//Desesctrurar pero pasaria algo similar con los mixins y no es muy conveneniente
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