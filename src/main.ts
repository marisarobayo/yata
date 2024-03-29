import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store, { key } from './store'
import vClickOutside from 'click-outside-vue3';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faBullseye, faUser, faTimes, faTasks, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "@/assets/styles/main.css";

library.add(faPlus)
library.add(faBullseye)
library.add(faUser)
library.add(faTimes)
library.add(faTasks)
library.add(faEdit)

createApp(App)
  .use(store, key)
  .use(router)
  .use(vClickOutside)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
