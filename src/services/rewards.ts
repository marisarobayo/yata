
import { collection } from "firebase/firestore"
import { db } from "./firebase"

const rewardsService = collection(db, "rewards")

export default rewardsService

//TODO service functions go here