<template>
    <div id="app">
        <NavBar/>
        <router-view/>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
#app {
    font-family: 'Open Sans', sans-serif;
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /* color: #2c3e50; */
}

.navbar {
    margin: 14px;
    border-radius: 14px;
}

.rounded-icon {
    border-radius: 30%;
}

button.btn, a.btn {
    padding: 10px 20px;
    border-radius: 12px;
}
</style>
