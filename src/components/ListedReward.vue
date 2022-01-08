
<template>
  <div :class="$style.reward">
    <div>
      {{reward?.name}}
    </div>
    <ButtonSecondary>
      <span :class="$style.cost">
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
    name: "ListedTask",
    props: {
        reward: Object as PropType<Reward>
    },
    components: { ButtonSecondary }
})
</script>

<style module lang="scss">
  .reward {
    display: flex;
    align-items: center;
    gap: 0 0.75em;
  }
  .cost {
    margin-right: 0.5em;
  }
</style>