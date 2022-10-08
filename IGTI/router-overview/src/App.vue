<template>
  <h1>Router Overview</h1>

  <div class="div-router">
    <button @click="goToPage('/pageA')">Go to page A</button>
    <button @click="goToPage('/pageB')">Go to page B</button>
    <button @click="goToPage('/pageC')">Go to page C</button>
  </div>

  <div class="div-router">
    <button @click="replacePage('/pageA')">Replace page A</button>
    <button @click="replacePage('/pageB')">Replace page B</button>
    <button @click="replacePage('/pageC')">Replace page C</button>
  </div>

  <div class="div-router">
    <button @click="goToUser">Go to User</button>
  </div>

  <div class="div-router">
    <router-link to="/pageA">PageA</router-link>
    <router-link to="/pageB">PageB</router-link>
    <router-link to="/pageC">PageC</router-link>
    <router-link :to="{ name: 'user', params: { userId: 1 }}">User</router-link>
  </div>
  <router-view></router-view>

</template>

<script>


export default {
  name: 'App',
  methods: {
    goToPage(route) {
      this.$router.push(route) //empilha a página no history. Ao clicar em voltar, volta para a página anterior.
    },
    replacePage(route) {
      this.$router.replace(route) //Ao clicar em voltar, o usuário não volta para a página antiga porque ela foi substituída. 
    },
    goToUser() {
      this.$router.push({ name: "user", params: { userId: 2} })
    }
  }
}
</script>

<style>
  .div-router {
    display: flex;
    justify-content: space-around;
  }

</style>
