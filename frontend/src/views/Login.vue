<template>
  <div>
    <a href='/'>Test</a>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import axios from 'axios';
/* window.location = `http://localhost:8000/api/login`; */
export default {
    name: 'Login',
    methods: {
        ...mapActions(['getUserData']),
        async doAuth(code) {
            await axios.post(
                '/api/v1/auth',
                {
                    code: code,
                }
            )
            .catch((error) => {
                console.log(error);
                this.goTo("/");
            });
            await this.getUserData();
            this.goTo("/dashboard");
        }
    },
    created() {
        this.doAuth(this.$route.query.code);
    }
}
</script>
