
<template>
  <div>
    <label :for="name" class="block text-sm font-medium text-gray-700">{{label}}</label>
    <select
      :id="name"
      :name="name"
      class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      :value="modelValue"
      :placeholder="placeholder"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{option.label}}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface Option {
  value: string,
  label: string,
}

export default defineComponent({
  name: 'Select',
  props: {
    name: String,
    label: String,
    placeholder: String,
    modelValue: String,
    options: Array as PropType<Array<Option>>
  }
})
</script>