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
  <button type="button" @click="openModal">Crear nueva tarea</button>
  <Modal title="Registro" v-if="isOpen" @on:close="closeModal">
    <template v-slot:header>
      <h2>Registro</h2>
    </template>
    <template v-slot:body>
      <p>Ingresa tu tarea a realizar</p>
      <input type="text" placeholder="Ingresa tarea" v-model="textTodo" />
    </template>
    <template v-slot:footer>
      <div>
        <button @click="closeModal">Cerrar</button>
        <button @click="saveTodo" :disabled="textTodo.length == 0">
          Guardar
        </button>
      </div>
    </template>
  </Modal>
  <!--Modal-->
  <!--Formulario > submit.prevente input createTodo-->
  <!---->
  <!---->
</template>

<script>
import useTodos from "@/hooks/useTodos";
import Modal from "../components/Modal.vue";
import { ref } from "vue";

export default {
  components: {
    Modal,
  },
  setup() {
    const { currentTab, toggleTodo, pending, getTodosByTab, addTodo } =
      useTodos();
    const isOpen = ref(false);
    const textTodo = ref("");
    return {
      currentTab,
      toggleTodo,
      pending,
      getTodosByTab,
      addTodo,
      isOpen,
      textTodo,
      openModal: () => {
        isOpen.value = true;
      },
      closeModal: () => {
        isOpen.value = false;
      },
      saveTodo: () => {
        addTodo(textTodo.value);
        textTodo.value = "";
        isOpen.value = false;
      },
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