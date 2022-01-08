
import { User, DaysOfWeek } from '@/utils/models'

export function getCurrentUser(): User {
  const testUser: User = {
    name: 'Marisa',
    coins: 10,
    streakDays: 20,
    rewards: [
      {
        id: '1',
        name: 'Chocolate caliente',
        cost: 10,
      },
      {
        id: '2',
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
          time: new Date('2022-05-01T15:00:00'),
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
        title: 'Dibujar',
        description: 'Estoy dibujando!',
        difficulty: 3,
        frequency: {
          time: new Date('2022-12-17T15:00:00'),
          daysOfWeek: [DaysOfWeek.MONDAY, DaysOfWeek.TUESDAY, DaysOfWeek.WEDNESDAY, DaysOfWeek.THURSDAY, DaysOfWeek.FRIDAY, DaysOfWeek.SATURDAY, DaysOfWeek.SUNDAY],
        },
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

  return testUser
}