
<template>
  <div>
    <label :for="name" class="block text-sm font-medium text-gray-700">{{label}}</label>
    <Multiselect
      :value="modelValue"
      mode="tags"
      :placeholder="placeholder"
      :options="options"
      noOptionsText="No hay días"
      noResultsText="No hay resultados"
      class="mt-1 w-full text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:shadow-none focus:border-2 sm:text-sm rounded-md"
      @change="(value: string[]) => $emit('update:modelValue', value)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Multiselect from '@vueform/multiselect'

interface Option {
  value: string,
  label: string,
}

export default defineComponent({
  components: { Multiselect },
  props: {
    name: String,
    label: String,
    placeholder: String,
    modelValue: Array as PropType<Array<string>>,
    options: Array as PropType<Array<Option>>
  },
  emits: ['update:modelValue'],
})
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
