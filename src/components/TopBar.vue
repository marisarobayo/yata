
<template>
  <nav :class="$style.bar">
    <div :class="$style.barcontent">
      <div :class="$style.logodiv">
        <span :class="$style.logo">YATA</span>
      </div>
      <div :class="$style.logindiv">
        <ButtonPrimary @click="$router.push('/dashboard')">Iniciar sesión</ButtonPrimary>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonPrimary from "./ButtonPrimary.vue";

export default defineComponent({
  name: 'TopBar',
  components: {
    ButtonPrimary,
  }
})
</script>

<style module lang="scss">
  .bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #113c12;
  }
  .barcontent {
    justify-content: space-between;
    display: flex;
    width: 100%;
    max-width: 1400px;
    padding: 0.25em 0;
    margin-left: auto;
    margin-right: auto;
  }
  .logodiv {
    padding: 0.5rem;
  }
  .logindiv {
    padding: 0.5rem;
  }
  .logo {
    font-size: x-large;
    color: white;
    letter-spacing: 0.05em;
    font-weight: 600;
  }
</style>