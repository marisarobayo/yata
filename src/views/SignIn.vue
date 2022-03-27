<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
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
            <button @click.prevent="signIn" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Iniciar sesión
            </button>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500">
              ¿No tienes una cuenta? 
              <router-link to="/" class="font-medium text-teal-600 hover:text-teal-500">Regístrate</router-link>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, ref } from "vue";
import Input from "@/components/Input.vue"
import { key } from '@/store';
import { useStore } from "vuex";

export default defineComponent({
  name: "SignIn",
  components: { Input },
  setup: () => {
    let email = ref("")
    let password = ref("")

    const store = useStore(key)

    const signIn = () => {
      store.dispatch('login', {
        email: email.value,
        password: password.value,
      })
    }

    return {
      email,
      password,
      signIn,
    }
  }
})
</script>