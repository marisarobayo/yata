import router from '@/router'
import { auth, db } from '@/services/firebase'
import { User } from '@/utils/models'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface State {
  status: {
    loggedIn: boolean,
  },
  user: User,
}

const userItem = localStorage?.getItem('user')
const initialState = userItem ? {
  status: { loggedIn: true },
  user: JSON.parse(userItem),
}
:
{
  status: { loggedIn: false },
  user: null
}
onAuthStateChanged(auth, user => {
  if (!user && router.currentRoute.value.path !== '/') {
    store.commit('logout')
    localStorage.removeItem('user')
    router.push('/')
  }
})

export const key: InjectionKey<Store<State>> = Symbol()

const store = createStore({
  state: initialState,
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true
      state.user = user
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
  },
  actions: {
    login({ commit }, user) {
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then(async (cred) => {
          const userDoc = doc(db, 'users', cred.user.uid)
          const userInfo = await getDoc(userDoc)
          const userData = {
            ...userInfo.data(),
            uid: cred.user.uid,
          }
          commit('loginSuccess', userData)
          localStorage.setItem('user', JSON.stringify(userData));
          router.push('/dashboard')
        })
    },
    logout({ commit }) {
      signOut(auth)
        .then(() => {
          commit('logout')
          localStorage.removeItem('user')
          router.push('/')
        })
    },
    updateUser({ commit }, user) {
      setDoc(doc(db, 'users', user.uid), user)
        .then(() => {
          commit('loginSuccess', user)
          localStorage.setItem('user', JSON.stringify(user));
        })
    }
  },
  modules: {
  }
})


export default store