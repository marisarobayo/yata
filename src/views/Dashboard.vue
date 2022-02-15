
<template>
  <div class="flex max-w-7xl mx-auto gap-x-16 justify-center">
    <div class="bg-white px-6 pt-6 pb-4 rounded-xl shadow-lg xl:min-h-[600px] lg:min-h-[400px] sm:min-h-[300px] flex flex-col">
      <h1 class="mb-4 font-bold text-2xl">Para hoy</h1>
      <div class="flex flex-col gap-y-4 flex-grow justify-between">
        <div class="flex flex-col gap-y-4">
          <ListedTask v-for="task in todayTasks" :key="task.id" :task="task"/>
        </div>
        <AddTask name="today" @addTask="addTaskName"/>
      </div>
    </div>
    <div class="bg-white px-6 pt-6 pb-4 rounded-xl shadow-lg xl:min-h-[600px] lg:min-h-[400px] sm:min-h-[300px] flex flex-col">
      <h1 class="mb-4 font-bold text-2xl">Resto de semana</h1>
      <div class="flex flex-col gap-y-4 flex-grow justify-between">
        <div class="flex flex-col gap-y-4">
          <ListedTask v-for="task in restOfWeekTasks" :key="task.id" :task="task"/>
        </div>
      </div>
    </div>
    <div class="bg-white px-6 pt-6 pb-4 rounded-xl shadow-lg xl:min-h-[600px] lg:min-h-[400px] sm:min-h-[300px] flex flex-col">
      <h1 class="mb-4 font-bold text-2xl">Recompensas</h1>
      <div class="flex flex-col gap-y-4 flex-grow justify-between">
        <div class="flex flex-col gap-y-4">
          <ListedReward v-for="reward in rewards" :key="reward.id" :reward="reward"/>
        </div>
        <AddReward @addReward="() => null" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onUnmounted, ref } from 'vue'
import { addTask, getTaskStream } from '@/services/tasks'
import { getRewardStream } from '@/services/rewards'
import ListedTask from '@/components/ListedTask.vue';
import { DaysOfWeek, Reward, Task, TaskFrequencyWeekly } from '@/utils/models';
import { getDay, getWeek, isSameDay, isSameWeek } from 'date-fns';
import ListedReward from '@/components/ListedReward.vue';
import AddTask from '@/components/AddTask.vue';
import AddReward from '@/components/AddReward.vue';
import { useStore } from 'vuex';
import { key } from '@/store';

export default defineComponent({
  name: "Dashboard",
  components: { ListedTask, ListedReward, AddTask, AddReward },
  setup: () => {
    let tasks = ref<Task[]>([])
    let rewards = ref<Reward[]>([])

    let store = useStore(key)

    const unsubTasks = getTaskStream(store.state.user.uid, newTasks => tasks.value = newTasks)
    const unsubRewards = getRewardStream(store.state.user.uid, newRewards => rewards.value = newRewards)

    onUnmounted(() => {
      unsubTasks()
      unsubRewards()
    })
    
    const todayTasks = computed(() => {
      if (!tasks.value || !tasks.value.length) {
        return []
      }
      return tasks.value.filter(task => {
        const today = new Date()
        if(task.frequency instanceof Date) {
          return isSameDay(today, task.frequency)
        } else if(task.frequency) {
          return (task.frequency as TaskFrequencyWeekly).daysOfWeek.some((dayOfWeek: DaysOfWeek) => {
            return getDay(today) === dayOfWeek 
          })
        }
      })
    })

    const restOfWeekTasks = computed(() => {
      if (!tasks.value) {
        return []
      }

      let candidates = tasks.value.filter(task => todayTasks.value.indexOf(task) === -1)
      return candidates.filter(task => {
        const today = new Date()
        if(task.frequency instanceof Date) {
          return isSameWeek(today, task.frequency)
        } else {
          return (task.frequency as TaskFrequencyWeekly).daysOfWeek.some((dayOfWeek: DaysOfWeek) => {
            return getWeek(today) === dayOfWeek
          })
        }
      })
    })

    const addTaskName = (name: string) => {
      let now = new Date()
      let today = getDay(now)

      let newTask = {
        title: name,
        difficulty: 1,
        user: store.state.user.uid,
        frequency: {
          daysOfWeek: [
            today,
          ],
          time: now
        }
      } as Task

      addTask(newTask)
    }

    return {
      todayTasks,
      restOfWeekTasks,
      rewards,
      addTaskName,
    }
  }
});
</script>
