<template>
  <TopBar/>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopBar from "./components/TopBar.vue";

enum DaysOfWeek {
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
  THURSDAY = 'THURSDAY',
  FRIDAY = 'FRIDAY',
  SATURDAY = 'SATURDAY',
  SUNDAY = 'SUNDAY',
}

interface TaskFrequencyWeekly {
  time: Date,
  daysOfWeek: DaysOfWeek[],
}

interface Task {
  id: string,
  title: string,
  description: string,
  difficulty: 1 | 2 | 3 | 4,
  frequency: Date | string | TaskFrequencyWeekly
}

interface Reward {
  name: string,
  cost: number,
}

interface User {
  name: string,
  coins: number,
  streakDays: number,
  tasks: Task[],
  rewards: Reward[],
}

let testUser: User = {
  name: 'Marisa',
  coins: 10,
  streakDays: 20,
  rewards: [
    {
      name: 'Chocolate caliente',
      cost: 10,
    },
    {
      name: 'Comprar dulces',
      cost: 15,
    }
  ],
  tasks: [
    {
      id: '1',
      title: 'Ir de compras',
      description: 'Tan solo ir de compras',
      difficulty: 1,
      frequency: {
        time: new Date('2022-12-17T15:00:00'),
        daysOfWeek: [DaysOfWeek.TUESDAY],
      }
    },
    {
      id: '2',
      title: '1 cap curso',
      description: 'Curso que estoy estudiando',
      difficulty: 2,
      frequency: {
        time: new Date('2022-12-17T16:00:00'),
        daysOfWeek: [DaysOfWeek.MONDAY, DaysOfWeek.TUESDAY, DaysOfWeek.WEDNESDAY, DaysOfWeek.THURSDAY, DaysOfWeek.FRIDAY, DaysOfWeek.SATURDAY, DaysOfWeek.SUNDAY],
      },
    },
    {
      id: '3',
      title: 'Codificar',
      description: '',
      difficulty: 3,
      frequency: '3',
    },
    {
      id: '4',
      title: 'Enviar paquete',
      description: '',
      difficulty: 1,
      frequency: new Date(Date.now() + 86400000),
    },
  ]
}

export default defineComponent({
  name: 'App',
  components: {
    TopBar
  }
})

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5em;
}
</style>
