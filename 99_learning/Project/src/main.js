import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
