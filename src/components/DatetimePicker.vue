
<template>
  <div>
    <label :for="name" class="block text-sm font-medium text-gray-700">{{label}}</label>
    <Datepicker
      :time-picker="timePicker"
      :model-value="modelValue"
      @update:model-value="value => $emit('update:modelValue', value)"
      text-input
      input-class-name="shadow-sm focus:ring-teal-500 focus:outline-none focus:py-[0.45rem] focus:border-2 focus:border-teal-500 block sm:text-sm border border-gray-300 rounded-md mt-1 py-2"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'

export default defineComponent({
    name: "DatetimePicker",
    components: { Datepicker },
    props: {
      name: String,
      label: String,
      placeholder: String,
      modelValue: Date,
      timePicker: Boolean,
    },
    emits: ['update:modelValue'],
})
</script>
