import { createApp } from 'vue'
import App from './App.vue'
import GlobalButton from "@/global/GlobalButton";

createApp(App)
    .component('GlobalButton', GlobalButton)
    .mount('#app')
