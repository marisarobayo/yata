
<template>
  <button
    type="button"
    :class="$style.button"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'ButtonSecondary',
})
</script>

<style module lang="scss">
  .button {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    font-size: small;
    font-weight: 600;
    border-radius: 10px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    cursor: pointer;
    background-color: white;
    color: rgb(55 65 81);
    border: 1px rgb(209 213 219) solid;

    &:hover {
      background-color: rgb(249 250 251);
    }
  }
</style>