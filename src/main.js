import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick' // 解决移动端300ms
import VueAwesomeSwiper from 'vue-awesome-swiper'

import './assets/styles/reset.css' // 默认样式
import './assets/styles/border.css' // 移动端1px边框
import './assets/styles/iconfont.css' // 导入iconfont
import 'swiper/dist/css/swiper.css'

fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
