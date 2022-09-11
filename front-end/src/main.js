import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../node_modules/bulma/css/bulma.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faEnvelope,
  faPaperclip,
  faCar,
  faTruck,
  faMotorcycle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEnvelope, faPaperclip, faCar, faTruck, faMotorcycle, faUser)

createApp(App)
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app')
