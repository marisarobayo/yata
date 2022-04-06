
<template>
  <div class="flex gap-x-3 p-2 rounded-md hover:bg-zinc-100 hover:shadow-sm" @mouseover="editButtonVisible = true" @mouseleave="editButtonVisible = false">
    <div>
      <Checkbox :checked="false"/>
    </div>
    <div>
      {{task?.title}}
    </div>
    <Badge>
      <span v-if="(task?.frequency instanceof Date)">
        {{datetime(task?.frequency)}}
      </span>
      <span v-else>
        {{datetime(task?.frequency.time)}}
      </span>
    </Badge>
    <div class="flex-grow flex flex-row-reverse" v-if="editButtonVisible">
      <div class="cursor-pointer px-0.5 text-zinc-500" @click="editingTask = true">
        <font-awesome-icon icon="edit" />
      </div>
    </div>
    <EditTaskModal @close="() => editingTask = false" :open="editingTask" :task="task" />
  </div>
</template>

<script lang="ts">
import { Task } from "@/utils/models";
import { defineComponent, PropType, ref } from "vue";
import { datetime } from "@/utils/formatting";
import Badge from "./Badge.vue";
import EditTaskModal from "./EditTaskModal.vue";
import Checkbox from "./Checkbox.vue";

export default defineComponent({
    name: "ListedTask",
    props: {
      task: Object as PropType<Task>
    },
    components: { Badge, Checkbox, EditTaskModal },
    setup: () => {
      let editButtonVisible = ref(false)
      let editingTask = ref(false)

      return {
        datetime,
        editButtonVisible,
        editingTask,
      }
    }
})
</script>
