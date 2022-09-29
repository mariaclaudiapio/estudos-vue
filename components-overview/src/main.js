import { createApp } from 'vue'
import App from './App.vue'
import GlobalComponent from "./components/global-component.vue"

const app = createApp(App)
app.component("GlobalComponent", GlobalComponent)
app.mount('#app')
