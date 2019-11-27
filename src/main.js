import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

Vue.config.productionTip = false
// 全局引入UI库 vant
import '@/plugins/vant'
import 'vant/lib/index.css'
// 全局引入rem
import '@/config/rem'
// 全局引入 Reset-css
import 'reset-css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
