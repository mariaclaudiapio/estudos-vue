<template>
  <h1>Todo App</h1>
  <div v-if="!editMode">
    <Button v-on:click="newTodo">Novo</Button>
    <todo-list></todo-list>
  </div>
  <todo-item v-if="editMode" @cancel="cancel" @saveTodo="saveTodo"></todo-item>
</template>

<script>

import TodoList from "./components/TodoList.vue"
import TodoItem from "./components/TodoItem.vue"

export default {
  components: {
    TodoList,
    TodoItem
  },
  data() {
    return {
      editMode: false,
      todos: []
    }
  },
  methods: {
    newTodo() {
      this.editMode = true
    },
    cancel() {
      this.editMode = false
    },
    saveTodo(todo) {
      this.todos.push(todo)
      localStorage.setItem("todos", JSON.stringify(this.todos))
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;  
  color: #2c3e50;  
}
</style>
