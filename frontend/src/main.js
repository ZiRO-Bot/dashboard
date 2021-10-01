import axios from 'axios';
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import App from './App.vue';
import router from './router';
import store from './store';

import './style/app.scss';

// FastAPI backend
const apiURL = "http://127.0.0.1";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = apiURL;

/* Inject `.getInitials()` to String

Useful for guild list when a guild doesn't have an icon
*/
String.prototype.getInitials = function(glue){
    if (typeof glue == "undefined") {
        glue = true;
    }

    var initials = this.replace(/[^a-zA-Z- ]/g, "").match(/\b\w/g);
    
    if (glue) {
        try {
            return initials.join('');
        }
        catch (error) {
            return this.substring(0,3);
        }
    }

    return initials;
};

String.prototype.capitalize = function(){
    return this.toLowerCase().replace( /\b\w/g, function (m) {
        return m.toUpperCase();
    });
};

Vue.mixin({
  methods: {
    goTo: function(endpoint) {
        this.$router.push(endpoint)
    }
  }
});

Vue.config.productionTip = false;
Vue.prototype.$apiURL = apiURL;

// Bootstrap stuff
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
