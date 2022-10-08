<template>
  <div>
    <global-component></global-component>
    <local-component v-bind:title="title" @addclick="count += $event"></local-component>
    Slot Test
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
  computed: {
    computedTitle() {
      return "Teste" + this.title
    }
  },
  methods: {

  },
  components: {
    LocalComponent,
    GlobalComponent
},
// ganchos de inicialização
beforeCreate() {
  console.log("beforeCreate", this.title, this.computedTitle)
  },
  created() {
    console.log("created", this.title, this.computedTitle)
  },
// ganchos de montagem (inserção no DOM)
  beforeMount() {
    console.log("before mount")
  },
  mounted() {
    console.log("mounted")
  },
// ganchos de atualização
  beforeUpdate() {
    console.log("before update")
  },
  updated() {
    console.log("update")
  },
  // ganchos de destruição
  beforeUnmount() {
    console.log("beforeUnmount")
  },
  unmounted() {
    console.log("unmounted")
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
