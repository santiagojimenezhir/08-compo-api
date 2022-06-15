<template>
  <h2 v-if="isLoading">Espere porfavor</h2>
  <h2 v-else>Usuario</h2>
  <h5 v-if="errorMessage">{{ errorMessage }}</h5>
  <div v-if="users.length > 0">
    <!-- <ul>
      <li v-for="{ id, first_name, email } in users" :key="id">
        <h5>{{ first_name }}</h5>
        <h6>{{ email }}</h6>
      </li>
    </ul> -->
    <ul>
      <li v-for="x in lista" :key="x">
        {{ x }}
      </li>
    </ul>
    <UserList :users="users" v-slot="{ user }">
      <h5>{{ user.first_name }}</h5>
      <span>{{ user.email }}</span>
    </UserList>
  </div>

  <button @click="prevPage">Atras</button
  ><button @click="nextPage">Siguiente</button> Página: {{ currentPage }}
</template>

<script>
import useUsers from "../hooks/useUsers";
import UserList from "../components/UserList.vue";
import { computed, ref } from "vue";
export default {
  components: {
    UserList,
  },
  methods: {
    formatear(text) {
      return text.toUpperCase();
    },
  },

  setup() {
    const { isloading, errorMessage, users, prevPage, nextPage, currentPage } =
      useUsers();

    const lista = computed(() => {
      return users.value.keys(item).forEach(element => {
        
      });
    });
    return {
      currentPage,
      errorMessage,
      isloading,
      nextPage,
      prevPage,
      users,
      lista,
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