import Vue from 'vue'
import App from './App.vue'
//font-awesome 
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//add icons
library.add(faInstagram)
library.add(faLinkedinIn)
library.add(faGithub)
library.add(faEnvelope)


//library.add(envelope)

Vue.component('font-awesome-icon', FontAwesomeIcon)

//default code
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
