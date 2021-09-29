<template>
    <div class="dashguild">
        Hello There {{ id }}
    </div>
</template>

<script>
export default {
    name: 'Dashboard Guild',

    data(){
        return {
            id: this.$route.params.id
        }
    },
}
</script>
