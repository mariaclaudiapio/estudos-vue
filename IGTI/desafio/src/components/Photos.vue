<template>
    <div v-for="(photo, index) in photos" :key="index">
        <img :src="photo.thumbnailUrl" />
        {{ photo.title }}
    </div>
</template>

<script>
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"

import { getPhotos } from "../service/photo-service.js"

export default {
    name: "PhotoView",

    setup() {
        const photos = ref([])
        const route = useRoute()

        onMounted(() => {
            getPhotos(route.params.id).then(resp => {
                photos.value = resp
            })
        })

        return { photos }
    }
}

</script>

<style>

</style>