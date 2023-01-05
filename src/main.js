import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import MainPage from "@/components/Main.vue";
import Register from "@/components/Register.vue";
import bigImage from "@/components/BigImage.vue";
import subscribes from "@/components/Subscribes.vue";
import userPage from "@/components/UserPage.vue";
import 'bootstrap'


const routes = [
    { path: '/', redirect: '/main' },
    { path: '/main', component: MainPage },
    { path: '/register', component: Register },
    { path: '/bigImage/:id', component: bigImage, props: true },
    { path: '/subscribes', component: subscribes },
    { path: '/userPage', component: userPage },
]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes
})

createApp(App).use(router).mount('#app')
