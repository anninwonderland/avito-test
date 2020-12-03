import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
// import '@/styles/index.scss'

Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
