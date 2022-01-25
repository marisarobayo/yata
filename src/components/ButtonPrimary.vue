
<template>
  <button
    type="button"
    class="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full shadow-sm cursor-pointer bg-green-700 text-neutral-900 border-transparent hover:bg-green-900"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'ButtonPrimary',
})
</script>
