
<template>
  <span :class="$style.checkbox">
    <input id="candidates" v-model="isChecked" name="candidates" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
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

<style module lang="scss">
  .checkbox {
    height: 0.5em;
    width: 0.5em;
    border-radius: 20em;
    color: rgb(79 70 229);
    border-color: rgb(209 213 219);
    &:focus {
      --tw-ring-color: rgb(99 102 241);
    }
  }
</style>