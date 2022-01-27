
<template>
  <span class="inline-flex justify-center items-center py-1 gap-x-2">
    <input
      type="text"
      :name="name"
      :id="name"
      class="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md"
      placeholder="Añade una tarea"
    />
    <ButtonPrimary>
      <font-awesome-icon icon="plus" />
    </ButtonPrimary>
  </span>
</template>

<script lang="ts">
import { User } from "@/utils/models";
import { defineComponent, PropType } from "vue";
import ButtonPrimary from "./ButtonPrimary.vue";

export default defineComponent({
    name: "AddTask",
    props: {
      name: String,
      user: Object as PropType<User>,
    },
    components: { ButtonPrimary }
})
</script>