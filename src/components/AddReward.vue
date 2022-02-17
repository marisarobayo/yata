
<template>
  <span class="inline-flex justify-center items-center py-1 gap-x-2">
    <InputNoLabel
      name="reward"
      placeholder="Recompénsate"
      v-model="rewardName"
    />
    <ButtonPrimary @click="submitReward">
      <font-awesome-icon icon="plus" />
    </ButtonPrimary>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ButtonPrimary from "./ButtonPrimary.vue";
import InputNoLabel from "./InputNoLabel.vue"

export default defineComponent({
    name: "AddTask",
    components: {
      ButtonPrimary,
      InputNoLabel,
    },
    setup (_props, context) {
      const rewardName = ref('')

      const submitReward = () => {
        if (rewardName.value) {
          context.emit('addReward', rewardName.value)
          rewardName.value = ""
        }
      }

      return {
        rewardName,
        submitReward,
      }
    },
    emits: ['addReward'],
})
</script>