import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import './assets/stylesheets/reset.css'
import './assets/font/css/font-awesome.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
