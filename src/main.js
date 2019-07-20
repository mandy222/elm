import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import router from './js/router.js'
Vue.use(VueRouter)

import Vuex from 'vuex'

Vue.use(Vuex)
import store from './js/data.js'
import axios from 'axios'
Vue.prototype.$http=axios

// 引入mint-ui全部组件
import Mint from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'
Vue.use(Mint)

import './assets/css/base.css'
import './assets/css/iconfont.css'
import './assets/css/mixin.scss'
import './assets/css/animate.css'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
