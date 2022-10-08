<template>
    <div>
        <h1>Local Component</h1>
        <h2>{{ title }}</h2>
        <!-- <button @click="$emit('addclick')">Add</button> -->
        <button @click="$emit('addclick', 1)">Add</button>
        <button @click="addTwo">Add Two</button>

        <!-- <slot></slot> -->        
    </div>
</template>

<script>
export default {
    //props: ["title"],
    props: {
        title: String //também podem ser usados: Number, Object, Boolean, Array, Function, etc...
    },
    methods: {
        addTwo: function() {
            this.$emit('addclick', 2)
        }
    }
}
</script>

<style scoped>

</style>