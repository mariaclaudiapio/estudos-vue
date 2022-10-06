<template>
    <div v-for="(todo, index) in todos" :key="index">
        <label>{{ todo.description }}</label>
    </div>
</template>

<script>
export default {
    props: {
        todos: Array
    }
}
</script>

<style scoped>

</style>
