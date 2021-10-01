<template>
    <div class="dashguild">
        Hello There {{ id }}
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Dashboard Guild',
    data(){
        return {
            id: this.$route.params.id
        }
    },
    methods: {
        checkValidGuild() {
            axios.get('/api/@me/guilds')
            .then((res) => {
                let shouldReturn = true;
                const guilds = res.data;
                guilds.forEach((value) => {
                    if (value.id === this.id) {
                        shouldReturn = false;
                    }
                })
                if (shouldReturn) {
                    this.goTo('/dashboard');
                }
            });
        }
    },
    created() {
        this.checkValidGuild().then(
            console.log("test")
        );
        /* console.log("test"); */
    }
}
</script>
