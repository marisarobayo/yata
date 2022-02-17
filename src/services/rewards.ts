
import { Reward } from "@/utils/models"
import { addDoc, collection, doc, onSnapshot, query, where } from "firebase/firestore"
import { db } from "./firebase"

const rewardsService = collection(db, "rewards")

export default rewardsService

export function getRewardStream(uid: string, cb: (tasks: Reward[]) => void): () => void {
  const userRef = doc(db, 'users', uid)
  const unsubRewards = onSnapshot(query(rewardsService, where('user', '==', userRef)), (snapshot) => {
    const newRewards: Reward[] = []
    snapshot.docs.forEach((reward) => {
      newRewards.push(reward.data() as unknown as Reward)
    })
    cb(newRewards)
  })
  return unsubRewards
}

export function addReward(reward: Reward): void {
  addDoc(rewardsService, {
    ...reward,
    user: doc(db, 'users', reward.user),
  })
}
