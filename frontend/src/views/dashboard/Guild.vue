<template>
    <div class="dashguild">
        <a v-if="isLoading">
            Loading...
        </a>
        <a v-else>
            Hello There {{ id }}
        </a>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
/* import axios from 'axios'; */

export default {
    name: 'DashboardGuild',
    data(){
        return {
            isLoading: true,
            id: this.$route.params.id,
        }
    },
    computed: {
        guilds: function() {
            return this.$store.getters.discord_guilds;
        }
    },
    methods: {
        ...mapActions(['getGuilds']),
    },
    created() {
        // Check if user can manage the guild
        this.getGuilds().then(() => {
            const guild = this.guilds.find(x => x.id === this.id);

            if (!guild) {
                this.goTo('/dashboard')
            } else {
                this.isLoading = false
            }
        });
    }
}
</script>
