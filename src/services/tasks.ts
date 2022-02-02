
import { Task } from "@/utils/models"
import { collection } from "firebase/firestore"
import { db } from "./firebase"

const tasksService = collection(db, "tasks")

export default tasksService

export function firestoreTaskConverter(task: any): Task {
  const newTask = task.data()

  if (newTask.frequency.seconds) {
    newTask.frequency = newTask.frequency.toDate()
  } else if (newTask.frequency.time) {
    newTask.frequency.time = newTask.frequency.time.toDate()
  }

  return {
    ...newTask,
    id: task.id
  }
}

//TODO service functions go here