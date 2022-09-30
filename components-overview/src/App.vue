<template>
  <div>
    <global-component></global-component>
    <local-component v-bind:title="title" @addclick="count += $event"></local-component>
    <p>Count: {{ count }}</p>
  </div>
</template>

<script>
import LocalComponent from "./components/local-component.vue";
import GlobalComponent from "./components/global-component.vue";

export default {
  data() {
    return {
      title: "Component Title",
      count: 0
    }

  },
  methods: {

  },
  components: {
    LocalComponent,
    GlobalComponent
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
