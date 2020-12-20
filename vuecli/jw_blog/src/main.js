import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
// 将axios添加到原型，这样全局当中都可以用this.axios访问到了
// 不需要每个用到axios的组件中都去引用了
Vue.prototype.axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
