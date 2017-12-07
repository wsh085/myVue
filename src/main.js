// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' //路径只写到文件夹名  会默认使用该文件夹下的index.js文件
import VResource from 'vue-resource'
// import Vuex from 'vuex'  引入vuex
import Layout from './layout'

//Vue.use(Vuex)  注册使用 vuex
Vue.use(VResource)
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
  // template: '<App/>',
  // components: { App }
});
