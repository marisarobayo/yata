
<template>
  <nav :class="$style.bar">
    <div :class="$style.logodiv">
      <span :class="$style.logo">YATA</span>
    </div>
    <div :class="$style.logindiv">
      <ButtonPrimary @click="$router.push('/dashboard')">Iniciar sesión</ButtonPrimary>
    </div>
  </nav>
  <div :class="$style.pitch">
    <div>
      <p :class="$style.explanationTitle">
        Recompénsate por tu esfuerzo
      </p>
      <p :class="$style.explanationDesc">
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
import { defineComponent } from 'vue'
import ButtonPrimary from '@/components/ButtonPrimary.vue';

export default defineComponent({
  name: 'Home',
  components: {
    ButtonPrimary
  },
});
</script>

<style module>
  .bar {
    display: flex;
    width: 100%;
    justify-content: space-between;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
  }
  .logodiv {
    padding: 0.5rem;
  }
  .logindiv {
    padding: 0.5rem;
  }
  .logo {
    font-size: x-large;
    font-weight: 600;
  }
  .pitch {
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 4rem auto 4rem auto;
  }
  .explanationTitle {
    font-size: xx-large;
    font-weight: 600;
  }
  .explanationDesc {
    font-size: large;
  }
</style>