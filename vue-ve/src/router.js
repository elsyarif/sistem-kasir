import { createRouter, createWebHashHistory } from "vue-router";
import Main from './layouts/main.vue'

const routes = [
    {
        path: '/',
        name: 'app',
        component: Main
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
