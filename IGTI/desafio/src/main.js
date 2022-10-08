import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router"

import Albums from "./components/Albums"
import Photos from "./components/Photos"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Albums },
        { path: "/albuns/:id", name: "photos", component: Photos }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
