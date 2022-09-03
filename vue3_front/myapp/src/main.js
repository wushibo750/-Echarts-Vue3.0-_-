import { createApp } from 'vue'
import App from './App.vue'
import store from "@/store";
import router from "@/router";
import 'lib-flexible/flexible.js'
// import * as echarts from 'echarts';

const app=createApp(App)
// app.config.globalProperties.$echarts=echarts; //全局使用
app.use(store).use(router).mount('#app')
