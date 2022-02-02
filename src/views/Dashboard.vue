
<template>
  <div class="flex max-w-7xl mx-auto gap-x-16 justify-center">
    <div class="bg-white px-6 pt-6 pb-4 rounded-xl shadow-lg xl:min-h-[600px] lg:min-h-[400px] sm:min-h-[300px] flex flex-col">
      <h1 class="mb-4 font-bold text-2xl">Para hoy</h1>
      <div class="flex flex-col gap-y-4 flex-grow justify-between">
        <div class="flex flex-col gap-y-4">
          <ListedTask v-for="task in todayTasks" :key="task.id" :task="task"/>
        </div>
        <AddTask name="today" @addTask="() => null"/>
      </div>
    </div>
    <div class="bg-white px-6 pt-6 pb-4 rounded-xl shadow-lg xl:min-h-[600px] lg:min-h-[400px] sm:min-h-[300px] flex flex-col">
      <h1 class="mb-4 font-bold text-2xl">Resto de semana</h1>
      <div class="flex flex-col gap-y-4 flex-grow justify-between">
        <div class="flex flex-col gap-y-4">
          <ListedTask v-for="task in restOfWeekTasks" :key="task.id" :task="task"/>
        </div>
        <AddTask name="restOfWeek" @addTask="() => null"/>
      </div>
    </div>
    <div class="bg-white px-6 pt-6 pb-4 rounded-xl shadow-lg xl:min-h-[600px] lg:min-h-[400px] sm:min-h-[300px] flex flex-col">
      <h1 class="mb-4 font-bold text-2xl">Recompensas</h1>
      <div class="flex flex-col gap-y-4 flex-grow justify-between">
        <div class="flex flex-col gap-y-4">
          <ListedReward v-for="reward in []" :key="reward.id" :reward="reward"/>
        </div>
        <AddReward @addReward="() => null" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, onUnmounted, ref } from 'vue'
  import tasksService, { firestoreTaskConverter } from '@/services/tasks'
  import ListedTask from '@/components/ListedTask.vue';
  import { DaysOfWeek, Task, TaskFrequencyWeekly } from '@/utils/models';
  import { getDay, getWeek, isSameDay, isSameWeek } from 'date-fns';
  import ListedReward from '@/components/ListedReward.vue';
  import AddTask from '@/components/AddTask.vue';
  import AddReward from '@/components/AddReward.vue';
  import { onSnapshot } from 'firebase/firestore';

  export default defineComponent({
    name: "Dashboard",
    components: { ListedTask, ListedReward, AddTask, AddReward },
    setup: () => {
      let tasks = ref<Task[]>([])

      const unsub = onSnapshot(tasksService, (snapshot) => {
        let newTasks : any[] = []
        snapshot.docs.forEach((task: any) => {
          newTasks.push(firestoreTaskConverter(task))
        })
        tasks.value = newTasks
      })

      onUnmounted(() => {
        unsub()
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

      return {
        todayTasks,
        restOfWeekTasks,
      }
    }
  });
</script>
