<template>
  <h1>Aprendiendo slots</h1>
  <button @click="openModal">Abri modal</button>
  <Modal v-if="isOpen" @on:close="closeModal" title="Hola">
    <template v-slot:header>
      <h2>Título del modal</h2>
    </template>
    <template v-slot:body>
      <p>Minim do nulla et id incididunt elit eiusmod irure.</p>
    </template>
    <template v-slot:footer>
      <button @click="closeModal">Cerrar</button>
    </template>
    <template v-slot:exposed="{prueba}">
      <h2>{{ prueba }}</h2>
    </template>
  </Modal>
</template>

<script>
import { ref } from "vue";
import Modal from "../components/Modal.vue";
export default {
  components: {
    Modal,
  },
  setup(props, context) {
    const isOpen = ref(false);
    return {
      isOpen,
      openModal: () => {
        isOpen.value = true;
      },
      closeModal: () => {
        isOpen.value = false;
      },
    };
  },
};
</script>

<style>
</style>