
<template>
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

export default defineComponent({
  name: 'Home',
});
</script>

<style module>
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