import 'bootstrap/dist/css/bootstrap.min.css'

import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import * as uiv from 'uiv'
// import { MotionPlugin } from '@vueuse/motion'

Vue.config.productionTip = false

Vue.use(uiv)
// Vue.use(MotionPlugin)
// const app = createApp(App)
// app.use(MotionPlugin)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
