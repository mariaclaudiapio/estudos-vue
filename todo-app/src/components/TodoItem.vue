<template>
    <InputText v-model="description" />
    <div class="div-botoes">
        <Button @click="cancel" class="btn-voltar">Voltar</Button>
        <Button @click="saveTodo">Salvar</Button>
    </div>
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
    .div-botoes {
      margin-top: 1rem;  
    }

    .btn-voltar {
        margin: 0 1rem;
    }   
</style>