
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import './mock/mockServer'  // 加载mockServer数据
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
