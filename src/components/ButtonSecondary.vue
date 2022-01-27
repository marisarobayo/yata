
<template>
  <button
    type="button"
    class="inline-flex items-center py-1 px-3 text-sm font-medium rounded-lg shadow-sm cursor-pointer bg-neutral-50 text-gray-500 hover:bg-neutral-200 border border-neutral-300"
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
