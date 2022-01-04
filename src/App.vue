<template>
  <TopBar :user="user"/>
  <router-view :user="user"/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopBar from "./components/TopBar.vue";
import { getCurrentUser } from "./services/users";

export default defineComponent({
  name: 'App',
  components: {
    TopBar
  },
  setup: () => {
    let user = getCurrentUser()
    return {
      user,
    }
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
