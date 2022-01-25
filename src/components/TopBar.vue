
<template>
  <nav class="fixed top-0 left-0 w-full bg-blue-700">
    <div class="flex justify-between w-full max-w-7xl py-1 mx-auto">
      <div class="p-2">
        <span class="text-2xl text-white tracking-wider font-medium">YATA</span>
      </div>
      <div class="p-2" v-if="!user">
        <ButtonPrimary @click="$router.push('/dashboard')">Iniciar sesión</ButtonPrimary>
      </div>
      <div v-if="user" class="flex items-center gap-x-4">
        <div class="flex items-center gap-x-2 text-white">
          <font-awesome-icon icon="coins" class="text-3xl" />
          {{user.coins}}
        </div>
        <div class="text text-white items-center gap-x-2">
          <font-awesome-icon icon="bullseye" class="text-3xl"/>
          {{user.streakDays}} días
        </div>
        <div>
          <ButtonPrimary>
            <font-awesome-icon icon="plus" />
          </ButtonPrimary>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { User } from "@/utils/models";
import { defineComponent, PropType } from "vue";
import ButtonPrimary from "./ButtonPrimary.vue";

export default defineComponent({
  name: 'TopBar',
  components: {
    ButtonPrimary,
  },
  props: {
    user: Object as PropType<User>
  }
})
</script>
