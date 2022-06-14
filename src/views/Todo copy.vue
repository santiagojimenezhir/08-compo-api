<template>
  Todo list thanos Tareas
  <!-- Forma directa de acceder al store , no recomendable -->
  <!-- <h4>Tareas totales : {{ $store.state.todos.length }}</h4> -->
  <!-- Forma ideal para manejo de vuex y stores -->
  <!-- <h4>Tareas all : {{ all.length }}</h4>
  <h4>Tareas pendientes : {{ pending.length }}</h4>
  <h4>Tareas completed : {{ completed.length }}</h4> -->
  <br />
  <button :class="{ active: currentTab == 'all' }" @click="currentTab = 'all'">
    Todos
  </button>
  <button
    :class="{ active: currentTab == 'pending' }"
    @click="currentTab = 'pending'"
  >
    Pendientes
  </button>
  <button
    :class="{ active: currentTab == 'completed' }"
    @click="currentTab = 'completed'"
  >
    Completados
  </button>
  <div>
    <ul>
      <li
        v-for="{ id, texto, completed } in getTodosByTab"
        :key="id"
        :class="{ completed: completed }"
        @dblclick="toggleTodo(id)"
      >
        {{ texto }} {{ completed }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex"; //Librería para importar VUEX
import { ref } from "vue";
export default {
  setup() {
    const store = useStore(); //Creación de instancia
    /**
     * 
     * Getter son objetos
     * ¡Los Getter siempre an en computed!
     * 
     * Si se va a aocupar dentro del setup nuestras funciones computed 
       si van pueden ir dentro si no se pueden mandar directo al return 
    */

    const currentTab = ref("all");
    return {
      currentTab,
      /* Para usar las mutations debe ser modificado con un commit (Methods) */ 
      toggleTodo: (id) => store.commit("toggleTodo", id),
      /* Getters*/
      pending: computed(() => store.getters["pendingtodos"]),
      completed: computed(() => store.getters["completedTodos"]),
      all: computed(() => store.getters["allTodos"]),

      getTodosByTab: computed(() =>
        store.getters["getTodosByTab"](currentTab.value)
      ),
    };
  },
};
</script>

<style scoped>
button {
  margin: 5px;
  border-radius: 3px;
  padding: 10px;
  cursor: pointer;
  border: 0;
}
div {
  display: flex;
  justify-content: center;
}
ul {
  width: 300px;
  text-align: left;
}
li {
  cursor: pointer;
}
.active {
  background: #ffa000;
  color: #fff;
}
.completed {
  text-decoration: line-through;
}
</style>