
<template>
  <div :class="$style.tasks">
    <div :class="$style.list">
      <h1 :class="$style.listtitle">Para hoy</h1>
      <ListedTask :task="user?.tasks[0]"/>
    </div>
    <div :class="$style.list">
      <h1 :class="$style.listtitle">Resto de semana</h1>
    </div>
    <div :class="$style.list">
      <h1 :class="$style.listtitle">Recompensas</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ListedTask from '@/components/ListedTask.vue';
import { User } from '@/utils/models';

export default defineComponent({
    name: "Dashboard",
    components: { ListedTask },
    props: {
      user: Object as PropType<User>
    },
});
</script>

<style module>
  .tasks{
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-around;
    display: flex;
    gap: 0 2em;
  }
  .list {
    
  }

  .listtitle {
    margin-bottom: 1em;
  }

</style>