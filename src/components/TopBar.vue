
<template>
  <nav :class="$style.bar">
    <div :class="$style.barcontent">
      <div :class="$style.logodiv">
        <span :class="$style.logo">YATA</span>
      </div>
      <div :class="$style.logindiv" v-if="!user">
        <ButtonPrimary @click="$router.push('/dashboard')">Iniciar sesión</ButtonPrimary>
      </div>
      <div v-if="user" :class="$style.userarea">
        <div :class="$style.coins">
          <font-awesome-icon icon="coins" :class="$style.coinicon" />
          {{user.coins}}
        </div>
        <div :class="$style.streak">
          <font-awesome-icon icon="bullseye" :class="$style.streakicon" />
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

<style module lang="scss">
  .bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #4461ee;
  }
  .barcontent {
    justify-content: space-between;
    display: flex;
    width: 100%;
    max-width: 1400px;
    padding: 0.25em 0;
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
    color: white;
    letter-spacing: 0.05em;
    font-weight: 600;
  }
  .userarea {
    display: flex;
    align-items: center;
    gap: 0 2em;
  }
  .streak {
    color: white;
    display: flex;
    align-items: center;
    gap: 0 0.5em;
  }
  .streakicon {
    font-size: x-large;
  }
  .coins {
    color: white;
    display: flex;
    align-items: center;
    gap: 0 0.5em;
  }
  .coinicon {
    font-size: x-large;
  }
</style>