import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Root from '../views/dashboard/Root.vue'
import Guild from '../views/dashboard/Guild.vue'
import Login from '../views/Login.vue'

import store from '@/store';
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
            requiresAuth: true,
            autoLogin: true
        }
    },
    {
        path: '/dashboard/:id',
        name: 'DashboardGuild',
        component: Guild,
        meta: {
            requiresAuth: true,
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.isLoggedIn) {
            if (to.matched.some(record => record.meta.autoLogin)) {
                window.location = window.apiURL + "/api/login";
            }
            next('/');
            return;
        }
    }
    next();
});

export default router
