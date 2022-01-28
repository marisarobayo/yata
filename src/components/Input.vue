
<template>
  <input
    type="text"
    :name="name"
    :id="name"
    class="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Input",
    props: {
      name: String,
      placeholder: String,
      modelValue: String,
    },
    emits: ['update:modelValue'],
})
</script>