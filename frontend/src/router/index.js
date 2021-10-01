import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Root from '../views/dashboard/Root.vue'
import Guild from '../views/dashboard/Guild.vue'

// import axios from 'axios';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/dashboard',
        name: 'Dashboard Root',
        component: Root,
        meta: {
            requireAuth: true,
        }
    },
    {
        path: '/dashboard/:id',
        name: 'Dashboard Guild',
        component: Guild,
        meta: {
            requireAuth: true,
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
