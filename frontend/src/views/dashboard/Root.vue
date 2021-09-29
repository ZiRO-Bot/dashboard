<template>
    <div class="dashroot">
        <GuildList/>
    </div>
</template>

<script>
import GuildList from '@/components/GuildList.vue'

export default {
    name: 'Dashboard Root',
    components: {
        GuildList
    }
}
</script>
