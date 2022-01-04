
export enum DaysOfWeek {
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

export interface Task {
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

export interface User {
  name: string,
  coins: number,
  streakDays: number,
  tasks: Task[],
  rewards: Reward[],
}