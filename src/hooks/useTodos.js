import { computed } from "vue";
import { useStore } from "vuex"; //Librería para importar VUEX
import { ref } from "vue";

const useTodos = () => {
    const store = useStore(); //Creación de instancia
    const currentTab = ref("all");
    return {
        currentTab,
        /*Mutation alterra nuestro store */
        toggleTodo: (id) => store.commit("toggleTodo", id),
        /**Agregar nueva tarea */
        addTodo: (text) => store.commit("createTodo", text),
        /* Getters*/
        pending: computed(() => store.getters["pendingtodos"]),
        getTodosByTab: computed(() =>
            store.getters["getTodosByTab"](currentTab.value)
        ),
    }

}
export default useTodos;