
<template>
  <div class="max-w-7xl mx-auto flex justify-around items-center my-16">
    <div>
      <p class="text-3xl font-medium">
        Recompénsate por tu esfuerzo
      </p>
      <p class="text-2xl">
        Con YATA, puedes fijar tareas que hacer a diferentes intervalos del día. YATA te recordará.
        Al completarlas, según su dificultad, consiguirás monedas que podrás canjear por recompensas puestas por ti.
      </p>
    </div>
    <div>
      <img src="https://place-hold.it/300x500"/>
    </div>
  </div>
</template>

<script lang="ts">
import { User } from '@/utils/models';
import { defineComponent, PropType } from 'vue'
import router from '@/router';

export default defineComponent({
  name: 'Home',
  props: {
    user: Object as PropType<User>
  },
  setup: (props) => {
    if(props.user) {
      router.push('/dashboard')
    }
  }
});
</script>
