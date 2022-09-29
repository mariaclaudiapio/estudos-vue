<template>
    <div>
        <h1>Local Component</h1>
        <h2>{{ title }}</h2>
    </div>
</template>

<script>
export default {
    //props: ["title"],
    props: {
        title: String //também podem ser usados: Number, Object, Boolean, Array, Function, etc...
    }
}
</script>

<style scoped>

</style>