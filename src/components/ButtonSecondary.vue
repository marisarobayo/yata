
<template>
  <button
    type="button"
    class="inline-flex items-center py-3 px-3 text-sm font-medium rounded-full shadow-sm cursor-pointer bg-zinc-100 text-zinc-500 hover:bg-zinc-300 border border-zinc-300"
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
