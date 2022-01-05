
<template>
  <div :class="$style.task">
    <div>
      o
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
  </div>
</template>

<script lang="ts">
import { Task } from "@/utils/models";
import { defineComponent, PropType } from "vue";
import { datetime } from "@/utils/formatting";
import Badge from "./Badge.vue";

export default defineComponent({
    name: "ListedTask",
    props: {
      task: Object as PropType<Task>
    },
    components: { Badge },
    setup: () => {
      return {
        datetime,
      }
    }
})
</script>

<style module lang="scss">
  .task {
    display: flex;
    gap: 0 0.625em;
  }
</style>