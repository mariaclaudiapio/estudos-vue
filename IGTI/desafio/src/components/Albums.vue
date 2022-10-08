<template>
    <div>
        <div v-for="(album, index) in albums" :key="index" @click="selectAlbum(album.id)">
            {{ album.title }}
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from "vue"

import { getAlbums } from "../service/photo-service.js"
import { useRouter } from "vue-router"

export default {
    name: "AlbumView",

    setup() {
        const albums = ref([])
        const router = useRouter()
        onMounted(() => {
            getAlbums().then(resp => {
                albums.value = resp
                
            })
        })

        const selectAlbum = (id) => {
            router.push({ name: "photos", params: (id )})
        }

        return { albums, selectAlbum }
    }
}

</script>

<style>

</style>