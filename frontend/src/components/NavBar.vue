<template>
    <header class="h-navbar">
        <b-navbar fixed="top" toggleable="sm" type="dark" variant="dark">
            <b-navbar-brand class="clickable" @click="goTo('/')">
                <img class="rounded-icon" src="../assets/logo.png" width="41" height="41"/>
                <a class="brand-name" style="font-weight: 800;">Z3R0</a>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#">Commands</b-nav-item>
                    <b-nav-item href="#" disabled>Support Guild</b-nav-item>
                    <b-nav-item href="#" disabled>Documentation</b-nav-item>
                    <b-nav-item href="#" disabled>Status</b-nav-item>
                </b-navbar-nav>
                <!--- [Dropdown] --->
                <b-navbar-nav class="ml-login">
                    <b-nav-item-dd v-if="isLoggedIn" right>
                        <b-dd-item disabled>Logged in as {{ userInfo.username }}</b-dd-item>
                        <b-dd-divider/>
                        <template #button-content>
                            <img class="rounded-icon"
                                :src="'https://cdn.discordapp.com/avatars/' + userInfo.id + '/' + userInfo.avatar + '.png'"
                                width="31"
                                height="31"
                            />
                        </template>
                        <b-dd-item-btn @click="goTo('/dashboard')">Guilds</b-dd-item-btn>
                        <b-dd-item-btn @click="logout">Log Out</b-dd-item-btn>
                    </b-nav-item-dd>
                    <b-btn variant="info" v-else @click="login">Login</b-btn>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </header>
</template>

<style lang="scss">
.navbar-nav .nav-item {
    padding-inline: 5px;
}
.brand-name {
    padding: 5px;
    text-decoration: none!important;
    color: var(--light)!important;
}
header.h-navbar {
    padding-bottom: 92px;
}
.clickable {
    cursor: pointer;
}
.dropdown-menu {
    position: absolute;
    background-color: var(--dark)!important;
    .disabled {
        background-color: var(--dark)!important;
    }
    .dropdown-divider {
        border-top: 1px solid var(--gray-dark);
    }
    .dropdown-item {
        color: var(--light)!important;
    }
    :hover, :focus {
        background-color: var(--primary)!important;
    }
}
@media (min-width: 576px) {
    .ml-login {
        padding-left: 2.5%!important;
    }
}
/*
.dropdown-menu {
    transition: all 0.5s ease;
    margin: 0.5rem 0 0;
}
.dropdown-menu:not(.show) {
    display: block !important;
    overflow: hidden;
    transform: translate(0, -5%);
    visibility: hidden;
    opacity: 0;
}
.dropdown-menu.show {
    display: block;
    overflow: visible;
    transform: translate(0, 0);
}
*/
</style>

<script>
import { mapActions } from 'vuex';
import axios from 'axios';

export default {
    name: 'NavBar',
    computed: {
        userInfo: function() {
            return this.$store.getters.discord_user;
        },
        isLoggedIn: function() {
            return this.userInfo != null;
        }
    },
    methods: {
        ...mapActions(['getUserData', 'clearUserData', 'clearGuilds']),
        clearGeneralData() {
            this.clearUserData();
            this.clearGuilds();
        },
        async logout() {
            let clear = false;

            await axios.post("/api/logout")
            .then((res) => {
                if (res.data.status == 200) {
                    clear = true
                }
            }).catch((err) => {
                if (err.response.status == 401) {
                    clear = true;
                }
            });

            if (clear) {
                this.clearGeneralData();
            }

            this.goTo('/');
        },
        login() {
            window.location = this.$apiURL + "/api/login";
        },
    },
    created() {
        this.getUserData().catch(this.clearGeneralData());
    }
};
</script>
