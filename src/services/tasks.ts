
import { DaysOfWeek, Task } from "@/utils/models"
import { collection } from "firebase/firestore"
import { db, FirestoreTimestamp } from "./firebase"

const tasksService = collection(db, "tasks")

export default tasksService

export interface TaskFrequencyWeekly {
  time: FirestoreTimestamp,
  daysOfWeek: DaysOfWeek[],
}

interface FirestoreTask {
  id: string,
  title?: string,
  description?: string,
  difficulty?: 1 | 2 | 3 | 4,
  frequency: FirestoreTimestamp | TaskFrequencyWeekly,
  user: string,
}

export interface FirestoreTaskGetter {
  id: string,
  data: () => FirestoreTask,
}

function isFirestoreTimestamp(obj: FirestoreTimestamp | TaskFrequencyWeekly): obj is FirestoreTimestamp {
  return 'seconds' in obj
}

export function firestoreTaskConverter(task: FirestoreTaskGetter): Task {
  const newTask = task.data()

  let result: Task
  if (isFirestoreTimestamp(newTask.frequency)) {
    result = {
      ...newTask,
      id: task.id,
      frequency: newTask.frequency.toDate(),
    }
  } else {
    result = {
      ...newTask,
      id: task.id,
      frequency: {
        ...newTask.frequency,
        time: newTask.frequency.time.toDate(),
      },
    }
  }

  return result
}

//TODO service functions go here