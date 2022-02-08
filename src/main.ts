import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store, { key } from './store'
import vClickOutside from 'click-outside-vue3';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faBullseye, faCoins, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "@/assets/styles/main.css";

library.add(faPlus)
library.add(faBullseye)
library.add(faCoins)
library.add(faUser)

createApp(App)
  .use(store, key)
  .use(router)
  .use(vClickOutside)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
