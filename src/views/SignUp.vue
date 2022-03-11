<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-4xl font-medium text-gray-900">
        Regístrate
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
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, ref } from "vue";
import Input from "@/components/Input.vue"
import { auth } from '@/services/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "SignUp",
  components: { Input },
  setup: () => {
    let email = ref("")
    let password = ref("")

    const router = useRouter()

    const submit = () => {
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
          router.push({
            name: 'Home',
          })
        })
        .catch(err => {
          console.log(err)
        })
    }

    return {
      email,
      password,
      submit,
    }
  }
})
</script>