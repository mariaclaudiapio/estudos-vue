<template>
  <h1>Todo App</h1>
  <div v-if="!editMode">
    <Button v-on:click="newTodo">Novo</Button>
    <todo-list v-bind:todos="todos" @deleteTodo="deleteTodo"></todo-list>
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
      this.editMode = false
    },
    deleteTodo(index) {
      this.todos.splice(index, 1)
      localStorage.setItem("todos", JSON.stringify(this.todos))
    }
  },
  created() {
    const todos = localStorage.getItem("todos")
    if (todos) {
      this.todos = JSON.parse(todos)
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
