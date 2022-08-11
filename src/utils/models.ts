
export enum DaysOfWeek {
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
  SUNDAY = 0,
}

export interface TaskFrequencyWeekly {
  time: Date,
  daysOfWeek: DaysOfWeek[],
}

export interface Task {
  id?: string,
  title?: string,
  description?: string,
  difficulty?: 1 | 2 | 3 | 4,
  frequency: Date | TaskFrequencyWeekly,
  user: string,
  completed: boolean,
}

export interface User {
  name: string,
  streakDays: number,
  uid: string,
}
