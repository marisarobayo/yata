import router from '@/router'
import { auth, db } from '@/services/firebase'
import { User } from '@/utils/models'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
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

export const key: InjectionKey<Store<State>> = Symbol()

export default createStore({
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
          commit('loginSuccess', userInfo.data())
          localStorage.setItem('user', JSON.stringify(cred.user));
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
  },
  modules: {
  }
})
