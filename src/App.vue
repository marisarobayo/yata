<template>
  <TopBar/>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopBar from "./components/TopBar.vue";

export default defineComponent({
  name: 'App',
  components: {
    TopBar
  }
})

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5em;
}
</style>
