
<template>
  <button
    type="button"
    class="inline-flex items-center py-2 px-4 text-sm font-medium rounded-2xl shadow-sm cursor-pointer bg-teal-600 text-zinc-100 hover:bg-teal-700"
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
