// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.min.css'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
//   导入 lazyLoad
import VueLazyLoad from 'vue-lazyload'
//  图片懒加载
//  配置  相关项目
Vue.use(VueLazyLoad,{
  //  预加载比列
     preLoad: 1.1,
     attempt: 1, // 尝试加载图片数量
    error:'',

})

//把 `axios` 加到 `Vue` 的原型中

Vue.prototype.axios = axios;
// vuex 相关的

// require styles

//  swiper 轮播图配置
Vue.use(VueAwesomeSwiper, /* { default global options } */)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',



})

