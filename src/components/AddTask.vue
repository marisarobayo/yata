
<template>
  <span class="inline-flex justify-center items-center py-1 gap-x-2">
    <Input
      :name="name"
      placeholder="Añade una tarea"
      v-model="taskName"
    />
    <ButtonPrimary>
      <font-awesome-icon icon="plus" @click="submitTask" />
    </ButtonPrimary>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ButtonPrimary from "./ButtonPrimary.vue";
import Input from "./Input.vue"

export default defineComponent({
    name: "AddTask",
    props: {
      name: String,
    },
    components: {
      ButtonPrimary,
      Input,
    },
    setup (_props, context) {
      const taskName = ref('')

      const submitTask = () => {
        if (taskName.value) {
          context.emit('addTask', taskName.value)
        }
      }

      return {
        taskName,
        submitTask,
      }
    },
    emits: ['addTask'],
})
</script>