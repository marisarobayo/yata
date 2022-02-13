
<template>
  <div class="flex items-center justify-between gap-x-3">
    <div>
      {{reward?.name}}
    </div>
    <ButtonSecondary>
      <span class="mr-2">
        {{reward?.cost}}
      </span>
      <font-awesome-icon icon="coins" />
    </ButtonSecondary>
  </div>
</template>

<script lang="ts">
import { Reward } from "@/utils/models";
import { defineComponent, PropType } from "vue";
import ButtonSecondary from "./ButtonSecondary.vue";

export default defineComponent({
    name: "ListedReward",
    props: {
        reward: Object as PropType<Reward>
    },
    components: { ButtonSecondary }
})
</script>
