
export enum DaysOfWeek {
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
  SUNDAY = 0,
}

interface TaskFrequencyWeekly {
  time: Date,
  daysOfWeek: DaysOfWeek[],
}

export interface Task {
  id: string,
  title?: string,
  description?: string,
  difficulty?: 1 | 2 | 3 | 4,
  frequency: Date | TaskFrequencyWeekly
}

export interface Reward {
  id: string,
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
