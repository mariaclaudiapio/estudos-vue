<template>
    <InputText v-model="description" />
    <Button @click="cancel">Voltar</Button>
    <Button @click="saveTodo">Salvar</Button>
</template>

<script>
export default {
    data() {
        return {
            description: ""
        }
    },
    methods: {
        cancel() {
          this.$emit("cancel")  
        },
        saveTodo() {
            this.$emit("saveTodo", { description: this.description })
        }
    }
}
</script>

<style scoped>

</style>