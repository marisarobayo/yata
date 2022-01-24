
<template>
  <span class="inline-flex justify-center items-center px-1.5 py-1 rounded-full text-xs font-medium text-neutral-200 bg-red-900">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Badge',
})
</script>