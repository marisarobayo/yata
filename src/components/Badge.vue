
<template>
  <span class="inline-flex justify-center items-center px-1.5 py-0.5 rounded-full text-xs font-medium text-neutral-200 bg-blue-800">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Badge',
})
</script>