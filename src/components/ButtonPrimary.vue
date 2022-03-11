
<template>
  <button
    type="button"
    :class="styles"
    class="inline-flex items-center py-2 px-4 text-sm font-medium rounded-2xl shadow-sm text-zinc-100 "
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: 'ButtonPrimary',
  emits: ['onClick'],
  props: {
    disabled: Boolean,
  },
  setup: (props) => {
    const styles = computed(() => ({
      'bg-zinc-400': props.disabled,
      'bg-teal-600 hover:bg-teal-700 cursor-pointer': !props.disabled,
    }))

    return {
      styles,
    }
  }
})
</script>
