
<template>
  <span :class="$style.badge">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Badge',
})
</script>

<style module lang="scss">
  .badge {
    display: inline-flex;
    align-items: center;
    padding: 0.25em 1.5em;
    border-radius: 9999px;
    font-size: x-small;
    font-weight: 600;
    color: #fefce2;
    background-color: #991b1b;
  }
</style>