
<template>
  <div class="flex items-center gap-x-3 rounded-md hover:bg-zinc-100 hover:shadow-sm" @mouseover="editButtonVisible = true" @mouseleave="editButtonVisible = false">
    <ButtonSecondary>
      <span class="mr-2">
        {{reward?.cost}}
      </span>
      <font-awesome-icon icon="coins" />
    </ButtonSecondary>
    <div>
      {{reward?.name}}
    </div>
    <div class="flex-grow flex flex-row-reverse" v-if="editButtonVisible">
      <div class="cursor-pointer px-0.5 text-zinc-500" @click="editingReward = true">
        <font-awesome-icon icon="edit" />
      </div>
    </div>
    <EditRewardModal @close="() => editingReward = false" :open="editingReward" :reward="reward" />
  </div>
</template>

<script lang="ts">
import { Reward } from "@/utils/models";
import { defineComponent, PropType, ref } from "vue";
import ButtonSecondary from "./ButtonSecondary.vue";
import EditRewardModal from "./EditRewardModal.vue";

export default defineComponent({
    name: "ListedReward",
    props: {
        reward: Object as PropType<Reward>
    },
    components: { ButtonSecondary, EditRewardModal },
    setup: () => {
      let editButtonVisible = ref(false)
      let editingReward = ref(false)

      return {
        editButtonVisible,
        editingReward,
      }
    },
})
</script>
