
<template>
  <div class="flex gap-x-3 p-2 rounded-md hover:bg-zinc-200 hover:shadow-sm" @mouseover="editButtonVisible = true" @mouseleave="editButtonVisible = false">
    <div>
      <Checkbox :checked="task?.completed" @change="(value) => onCompletedClick(value)"/>
    </div>
    <div class="break-words max-w-[100px]">
      {{task?.title}}
    </div>
    <div>
      <Badge>
        <span v-if="(task?.frequency instanceof Date)">
          {{datetime(task?.frequency)}}
        </span>
        <span v-else>
          {{datetime(task?.frequency.time)}}
        </span>
      </Badge>
    </div>
    <div class="flex-grow min-w-[1em] inline-flex flex-row-reverse">
      <div class="cursor-pointer px-0.5 text-zinc-500 hover:bg-white rounded-lg self-start" @click="editingTask = true" v-if="editButtonVisible">
        <font-awesome-icon icon="edit" />
      </div>
    </div>
    <EditTaskModal @close="() => editingTask = false" :open="editingTask" :task="task" />
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { key } from '@/store';
import { Task } from "@/utils/models";
import { defineComponent, PropType, ref } from "vue";
import { datetime } from "@/utils/formatting";
import Badge from "./Badge.vue";
import EditTaskModal from "./EditTaskModal.vue";
import Checkbox from "./Checkbox.vue";
import { checkTask } from "@/services/tasks"

export default defineComponent({
    name: "ListedTask",
    props: {
      task: Object as PropType<Task>
    },
    components: { Badge, Checkbox, EditTaskModal },
    setup: (props) => {
      const store = useStore(key)

      let editButtonVisible = ref(false)
      let editingTask = ref(false)

      const onCompletedClick = (value: boolean) => {
        if (!props.task) {
          return
        }
        checkTask(props.task, store.state.user, value)
      }

      return {
        datetime,
        editButtonVisible,
        editingTask,
        onCompletedClick,
      }
    }
})
</script>
