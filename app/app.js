import 'babel-polyfill'

import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'

Vue.use(Vuetify)

console.log(new Vue({
  el: '#app',
  render: h => h(App)
}))
