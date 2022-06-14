import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid';

export default createStore({
    state: {
        todos: [
            { id: 1, texto: "Recolectar las piedras del infito", completed: false },
            { id: 2, texto: "Piedra del alma", completed: true },
            { id: 3, texto: "Piedra del poder", completed: false },
            { id: 4, texto: "Piedra realidad", completed: false },
            { id: 5, texto: "Conseguir nuevos secuases ", completed: true },
        ]
    },
    mutations: {
        toggleTodo(state, id) {
            const todoIdx = state.todos.findIndex(todo => todo.id == id);
            state.todos[todoIdx].completed = !state.todos[todoIdx].completed;
        },
        createTodo(state, text) {
            if (text.lenght <= 1) return
            state.todos.push({
                id: uuidv4(),
                completed: false,
                texto: text
            })

        }
    },
    actions: {},
    getters: {
        //Rootstate : es para acceder al state que esta dentro de este archivo global y state: de un módulo 
        pendingtodos(state, getters, rootState) {
            return state.todos.filter(todo => !todo.completed)
        },
        allTodos: (state, getters, rootState) => {
            console.log({ state, getters, rootState })
            return state.todos;

        },
        completedTodos: (state, getters, rootState) => {
            return state.todos.filter(todo => todo.completed)
        },
        getTodosByTab: (_, getters) => (tab) => {
            switch (tab) {
                case 'all':
                    return getters.allTodos;
                case 'pending':
                    return getters.pendingtodos;
                case 'completed':
                    return getters.completedTodos;

            }
        }
    },
    modules: {}
})