import Vue from 'vue'
import Vuetify from 'vuetify'
import Switch from 'buefy/dist/components/switch'
import 'vuetify/dist/vuetify.min.css'

import axios from 'axios'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.$http = axios

Vue.use(Switch)
Vue.use(Vuetify)

new Vue({
  el: '#app',
  vuetify: new Vuetify({
    theme: {
      primary: '#3f51b5',
      secondary: '#b0bec5',
      accent: '#8c9eff',
      error: '#b71c1c',
    },
  }),
  render: h => h(App),
  router,
})
