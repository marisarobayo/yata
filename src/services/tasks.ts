
import store from "@/store"
import { DaysOfWeek, Task, User } from "@/utils/models"
import { addDoc, collection, doc, onSnapshot, query, Timestamp, updateDoc, where } from "firebase/firestore"
import { db, FirestoreTimestamp } from "./firebase"

const tasksService = collection(db, "tasks")

export default tasksService

export interface TaskFrequencyWeekly {
  time: FirestoreTimestamp,
  daysOfWeek: DaysOfWeek[],
}

interface FirestoreTask {
  id?: string,
  title?: string,
  description?: string,
  difficulty?: 1 | 2 | 3 | 4,
  frequency: FirestoreTimestamp | TaskFrequencyWeekly,
  user: string,
  completed: boolean,
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

export function getTaskStream(uid: string, cb: (tasks: Task[]) => void): () => void {
  const userRef = doc(db, 'users', uid)
  const unsubTasks = onSnapshot(query(tasksService, where('user', '==', userRef)), (snapshot) => {
    const newTasks: Task[] = []
    snapshot.docs.forEach((task) => {
      newTasks.push(firestoreTaskConverter(task as unknown as FirestoreTaskGetter))
    })
    cb(newTasks)
  })
  return unsubTasks
}

export async function addTask(task: Task): Promise<void> {
  let req: FirestoreTask
  if (task.frequency instanceof Date) {
    req = {
      ...task,
      frequency: Timestamp.fromDate(task.frequency),
    }
  }  else {
    req = {
      ...task,
      frequency: {
        daysOfWeek: task.frequency.daysOfWeek,
        time: Timestamp.fromDate(task.frequency.time)
      }
    }
  }

  await addDoc(tasksService, {
    ...req,
    user: doc(db, 'users', req.user),
  })
}

export async function updateTask(task: Task): Promise<void> {
  let req: FirestoreTask
  if (task.frequency instanceof Date) {
    req = {
      ...task,
      frequency: Timestamp.fromDate(task.frequency),
    }
  }  else {
    req = {
      ...task,
      frequency: {
        daysOfWeek: task.frequency.daysOfWeek,
        time: Timestamp.fromDate(task.frequency.time)
      }
    }
  }
  const docRef = doc(db, 'tasks', task.id as string)

  const data = {
    ...req,
    user: typeof req.user === 'object' ? req.user : doc(db, 'users', req.user)
  }
  delete data.id
  await updateDoc(docRef, data)
}

export async function checkTask(task: Task, user: User, value: boolean): Promise<void> {
  if (task.completed === value) {
    return
  }

  task.completed = value
  await updateTask(task)

  store.dispatch('updateUser', user)
}
