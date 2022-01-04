import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faBullseye, faCoins } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus)
library.add(faBullseye)
library.add(faCoins)

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
