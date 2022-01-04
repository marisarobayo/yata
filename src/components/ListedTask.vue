
<template>
  <div :class="$style.task">
    <div>
      o
    </div>
    <div>
      test
    </div>
    <Badge>
      hora
    </Badge>
  </div>
</template>

<script lang="ts">
import { Task } from "@/utils/models";
import { defineComponent, PropType } from "vue";
import Badge from "./Badge.vue";

export default defineComponent({
    name: "ListedTask",
    props: {
        task: Object as PropType<Task>
    },
    components: { Badge }
})
</script>

<style module lang="scss">
  .task {
    display: flex;
    gap: 0 0.5em;
  }
</style>