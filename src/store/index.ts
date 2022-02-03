import router from '@/router'
import { auth } from '@/services/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { createStore } from 'vuex'

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

console.log(initialState)

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
        .then((cred) => {
          commit('loginSuccess', cred.user)
          localStorage.setItem('user', JSON.stringify(cred.user));
          router.push('/dashboard')
        })
    },
    logout({ commit }) {
      //logout here
    },
  },
  modules: {
  }
})
