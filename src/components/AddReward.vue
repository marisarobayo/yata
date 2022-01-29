
<template>
  <span class="inline-flex justify-center items-center py-1 gap-x-2">
    <Input
      name="reward"
      placeholder="Recompénsate"
      v-model="rewardName"
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
    components: {
      ButtonPrimary,
      Input,
    },
    setup (_props, context) {
      const rewardName = ref('')
      const rewardCost = ref('')

      const submitTask = () => {
        if (rewardName.value && rewardCost.value) {
          context.emit('addReward', rewardName.value, rewardCost.value)
        }
      }

      return {
        rewardName,
        rewardCost,
        submitTask,
      }
    },
    emits: ['addReward'],
})
</script>