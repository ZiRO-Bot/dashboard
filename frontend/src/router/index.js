import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Root from '../views/dashboard/Root.vue'
import Guild from '../views/dashboard/Guild.vue'
import Login from '../views/Login.vue'

// import axios from 'axios';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/dashboard',
        name: 'DashboardRoot',
        component: Root,
        meta: {
            requireAuth: true,
        }
    },
    {
        path: '/dashboard/:id',
        name: 'DashboardGuild',
        component: Guild,
        meta: {
            requireAuth: true,
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
