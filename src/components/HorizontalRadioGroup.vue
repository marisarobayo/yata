
<template>
  <div class="flex justify-between items-center gap-x-8">
    <div v-for="option in options" :key="option.value" class="flex-1">
      <label>
        <div
          class="shadow-sm rounded-lg bg-white focus:outline-none flex flex-col gap-y-1 cursor-pointer p-4"
          :class="option.value === modelValue ? 'border-2 border-teal-600' : 'border border-gray-300'"
          @click="$emit('update:modelValue', option.value)"
        >
          <span class="font-medium text-lg">{{option.header}}</span>
          <span class="text-zinc-600">{{option.subheader}}</span>
        </div>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface Option {
  value: string,
  header: string,
  subheader: string,
}

export default defineComponent({
  name: 'HorizontalRadioGroup',
  props: {
    name: String,
    modelValue: String,
    options: Array as PropType<Array<Option>>
  },
  emits: ['update:modelValue'],
})
</script>