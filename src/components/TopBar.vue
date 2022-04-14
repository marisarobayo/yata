
<template>
  <nav class="fixed top-0 left-0 w-full bg-white shadow-sm">
    <div class="flex justify-between w-full max-w-7xl py-1 mx-auto text-gravel-700">
      <div class="p-2">
        <span class="text-3xl tracking-wider font-bold cursor-default">YATA</span>
      </div>
      <div class="p-2" v-if="!user">
        <ButtonPrimary @click="$router.push('/signin')">Iniciar sesión</ButtonPrimary>
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
        <div @click.stop="() => newTaskOpen = true">
          <ButtonPrimary>
            <font-awesome-icon icon="plus" />
          </ButtonPrimary>
          <EditTaskModal @close="() => newTaskOpen = false" :open="newTaskOpen" />
        </div>
        <div class="relative px-2" v-click-outside="() => userMenuOpen = false">
          <ButtonSecondary @click="openMenu">
            <font-awesome-icon icon="user" />
          </ButtonSecondary>
          <div class="absolute top-10 right-4 w-32 bg-zinc-50 shadow-xl py-3 rounded-xl border border-zinc-200" v-if="userMenuOpen">
            <div class="w-full">
              <button class="hover:bg-zinc-200 w-full py-1 rounded-sm" @click="logout">
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import ButtonPrimary from "./ButtonPrimary.vue";
import { useStore } from "vuex";
import { key } from "@/store";
import ButtonSecondary from "./ButtonSecondary.vue";
import EditTaskModal from "./EditTaskModal.vue";

export default defineComponent({
  name: 'TopBar',
  components: {
    ButtonPrimary,
    ButtonSecondary,
    EditTaskModal
},
  setup: () => {
    const store = useStore(key)

    const userMenuOpen = ref(false)
    const newTaskOpen = ref(false)
    
    let openMenu = () => {
      userMenuOpen.value = !userMenuOpen.value
    }

    let logout = () => {
      store.dispatch('logout')
    }

    let user = computed(() => store.state.user)

    return {
      user,
      userMenuOpen,
      openMenu,
      logout,
      newTaskOpen,
    }
  }
})
</script>
