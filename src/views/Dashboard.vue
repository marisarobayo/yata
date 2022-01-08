
<template>
  <div :class="$style.tasks">
    <div>
      <h1 :class="$style.listtitle">Para hoy</h1>
      <div :class="$style.list">
        <ListedTask v-for="task in todayTasks" :key="task.id" :task="task"/>
      </div>
    </div>
    <div>
      <h1 :class="$style.listtitle">Resto de semana</h1>
      <div :class="$style.list">
        <ListedTask v-for="task in restOfWeekTasks" :key="task.id" :task="task"/>
      </div>
    </div>
    <div>
      <h1 :class="$style.listtitle">Recompensas</h1>
      <div :class="$style.list">
        <ListedReward v-for="reward in user?.rewards" :key="reward.id" :reward="reward"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import ListedTask from '@/components/ListedTask.vue';
import { User } from '@/utils/models';
import { getDay, getWeek, isSameDay, isSameWeek } from 'date-fns';
import ListedReward from '@/components/ListedReward.vue';

export default defineComponent({
    name: "Dashboard",
    components: { ListedTask, ListedReward },
    props: {
      user: Object as PropType<User>
    },
    setup: (props) => {
      const todayTasks = computed(() => {
        if (!props.user?.tasks) {
          return []
        }
        return props.user?.tasks.filter(task => {
          const today = new Date()
          if(task.frequency instanceof Date) {
            return isSameDay(today, task.frequency)
          } else {
            return task.frequency.daysOfWeek.some(dayOfWeek => {
              return getDay(today) === dayOfWeek
            })
          }
        })
      })

      const restOfWeekTasks = computed(() => {
        if (!props.user?.tasks) {
          return []
        }

        let candidates = props.user.tasks.filter(task => todayTasks.value.indexOf(task) === -1)
        return candidates.filter(task => {
          const today = new Date()
          if(task.frequency instanceof Date) {
            return isSameWeek(today, task.frequency)
          } else {
            return task.frequency.daysOfWeek.some(dayOfWeek => {
              return getWeek(today) === dayOfWeek
            })
          }
        })
      })

      return {
        todayTasks,
        restOfWeekTasks,
      }
    }
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
    display: flex;
    flex-direction: column;
    gap: 1em 0;
  }

  .listtitle {
    margin-bottom: 1em;
  }

</style>