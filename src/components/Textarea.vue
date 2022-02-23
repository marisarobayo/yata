
<template>
  <div>
    <label :for="name" class="block text-sm font-medium text-gray-700">{{label}}</label>
    <div class="mt-1">
      <textarea
        rows="4"
        :name="name"
        :id="name"
        class="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Textarea',
  props: {
    name: String,
    label: String,
    placeholder: String,
    modelValue: String,
  }
})
</script>