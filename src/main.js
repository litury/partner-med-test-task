import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faChevronDown)

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
