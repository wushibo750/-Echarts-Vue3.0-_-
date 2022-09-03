import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        redirect:'/homePage'
    },
    {
        path: '/homePage',
        name: 'homePage',
        component: () => import('../views/HomePage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
