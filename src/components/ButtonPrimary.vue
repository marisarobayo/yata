
<template>
  <button
    type="button"
    :class="$style.button"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent  } from "vue";

export default defineComponent({
  name: 'ButtonPrimary',
})
</script>

<style module lang="scss">
  .button {
    display: inline-flex;
    align-items: center;
    padding: 0.75rem 1.25rem;
    font-size: small;
    font-weight: 600;
    border-radius: 9999px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    cursor: pointer;
    background-color: #4461ee;
    color: white;
    border: transparent;

    &:hover {
      background-color: #0f28a4;
    }
  }
</style>