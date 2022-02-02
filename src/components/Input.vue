
<template>
  <div>
    <label :for="name" class="block text-sm font-medium text-gray-700">{{label}}</label>
    <input
      :type="type"
      :name="name"
      :id="name"
      class="shadow-sm focus:ring-teal-500 focus:border-teal-500 block sm:text-sm border-gray-300 rounded-md w-full mt-1"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
    name: "Input",
    props: {
      name: String,
      label: String,
      placeholder: String,
      modelValue: String,
      type: {
        type: String as PropType<("text" | "number" | "password")>,
        default: "text",
      },
    },
    emits: ['update:modelValue'],
})
</script>