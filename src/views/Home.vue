
<template>
  <div class="max-w-7xl flex flex-col mx-auto my-16">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-4xl font-medium text-gray-900">
        Inicia sesión
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" action="#" method="POST">
          <Input
            name="email"
            placeholder="Email"
            v-model="email"
            label="Email"
          />
          <Input
            name="password"
            v-model="password"
            label="Password"
            type="password"
          />
          <div>
            <button @click.prevent="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="flex justify-around items-center">
      <div>
        <p class="text-3xl font-medium">
          Recompénsate por tu esfuerzo
        </p>
        <p class="text-xl mt-2">
          Con YATA, puedes fijar tareas que hacer a diferentes intervalos del día. YATA te recordará.
          Al completarlas, según su dificultad, consiguirás monedas que podrás canjear por recompensas puestas por ti.
        </p>
      </div>
      <div>
        <img src="https://place-hold.it/300x500"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex';

import Input from '@/components/Input.vue';

export default defineComponent({
  name: 'Home',
  components: { Input },
  setup: () => {
    let email = ref("")
    let password = ref("")

    const store = useStore()

    const submit = () => {
      store.dispatch('login', {
        email: email.value,
        password: password.value,
      })
    }

    return {
      email,
      password,
      submit,
    }
  }
});
</script>
