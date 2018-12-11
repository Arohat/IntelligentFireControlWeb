// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from './http'
import http_noLoading from './http_noLoading'
import qs from 'qs'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.prototype.$http = axios;
Vue.prototype.$http2 = http_noLoading;
Vue.prototype.qs = qs;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
