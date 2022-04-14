
<template>
  <span class="h-2 w-2 rounded-2xl text-teal-500 border-gray-900 focus:ring-teal-400">
    <input
      v-model="isChecked"
      type="checkbox"
      class="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
    />
  </span>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: 'Checkbox',
  props: {
    checked: Boolean,
  },
  setup: (props) => {
    let isChecked = ref(props.checked)

    return {
      isChecked,
    }
  }
})
</script>
