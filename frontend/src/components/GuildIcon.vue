<template>
    <div class="guild-icon">
        <img class="rounded-icon" v-if="guild.icon"
            :src="guildIcon(guild)"
            width="150px"
            height="150px"
        />
        <div class="rounded-icon guild-initials unselectable" v-else>
            <span>{{ guild.name.getInitials() }}</span>
        </div>
    </div>
</template>

<style lang="scss">
.guild-icon {
    display: flex;
    justify-content: center;
    .guild-initials {
        background: var(--discord-blurple);
        display: flex;
        font-size: xx-large;
        font-weight: bold;
        width: 150px;
        height: 150px;
        align-items: center;
        justify-content: center;
    }
}
</style>

<script>
export default {
    name: "GuildIcon",
    props: ["guild"],
}
</script>
