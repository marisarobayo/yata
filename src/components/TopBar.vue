
<template>
  <nav class="fixed top-0 left-0 w-full bg-white shadow-sm">
    <div class="flex justify-between w-full max-w-7xl py-1 mx-auto text-gravel-700">
      <div class="p-2">
        <span class="text-3xl tracking-wider font-bold">YATA</span>
      </div>
      <div class="p-2" v-if="!user">
        <ButtonPrimary @click="$router.push('/dashboard')">Iniciar sesión</ButtonPrimary>
      </div>
      <div v-if="user" class="flex items-center gap-x-8">
        <div class="flex items-center gap-x-2">
          <font-awesome-icon icon="coins" class="text-2xl" />
          {{user.coins}}
        </div>
        <div class="text items-center gap-x-2">
          <font-awesome-icon icon="bullseye" class="text-2xl"/>
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
import { defineComponent } from "vue";
import ButtonPrimary from "./ButtonPrimary.vue";
import { useStore } from "vuex";
import { key } from "@/store";

export default defineComponent({
  name: 'TopBar',
  components: {
    ButtonPrimary,
  },
  setup: () => {
    const store = useStore(key)

    return {
      user: store.state.user,
    }
  }
})
</script>
