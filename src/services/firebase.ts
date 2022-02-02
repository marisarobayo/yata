
import { initializeApp } from "firebase/app";
import { 
  getFirestore,
}
from "firebase/firestore"
import {
  getAuth,
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCuKC36vNtfR4aY7zZwsRV6C-Cc9n4YTwg",
  authDomain: "yata-98be1.firebaseapp.com",
  projectId: "yata-98be1",
  storageBucket: "yata-98be1.appspot.com",
  messagingSenderId: "339480037761",
  appId: "1:339480037761:web:6c974c909e4cae154c4080"
};

initializeApp(firebaseConfig);

const db = getFirestore()
const auth = getAuth()

export {
  db,
  auth
}

