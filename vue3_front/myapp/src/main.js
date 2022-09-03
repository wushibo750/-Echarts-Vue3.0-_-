import { createApp } from 'vue'
import App from './App.vue'
import store from "@/store";
import router from "@/router";
import 'lib-flexible/flexible.js'
createApp(App).use(store).use(router).mount('#app')
