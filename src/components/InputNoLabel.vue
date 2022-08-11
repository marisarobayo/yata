
<template>
  <input
    :type="type"
    :name="name"
    :id="name"
    class="shadow-sm focus:ring-teal-500 focus:border-teal-500 block sm:text-sm border-gray-300 rounded-md w-full"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
    name: "InputNoLabel",
    props: {
      name: String,
      placeholder: String,
      modelValue: String,
      type: {
        type: String as PropType<("text" | "number")>,
        default: "text",
      },
    },
    emits: ['update:modelValue'],
})
</script>