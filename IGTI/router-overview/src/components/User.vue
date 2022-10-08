<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <h1>User {{ $route.params.userId }}</h1>
</template>

<script>
    export default {
        created() {
            console.log(this.$router)
        }
    }

</script>

<style scoped>

</style>

