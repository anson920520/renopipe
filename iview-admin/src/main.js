// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import i18n from '@/locale'
import config from '@/config'
import importDirective from '@/directive'
import { directive as clickOutside } from 'v-click-outside-x'
import installPlugin from '@/plugin'
import './index.less'
import '@/assets/icons/iconfont.css'
import 'v-org-tree/dist/v-org-tree.css'
import VueCookie from 'vue-cookie'
import qs from 'qs';
import axios from '@/api/index.js'
import AMap from "vue-amap"
import QR from "qrcodejs2"





Vue.use(VueCookie)

require('@/mock')


Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})

//地图
Vue.use(AMap);
AMap.initAMapApiLoader({
  key: "86ec9877e5e95fb2f5bb0e8b5fe52063"
});

window.baseURL = 'http://119.8.42.40:8080/'; // 无需token
// window.baseURL = 'http://119.8.42.40:8081/admin/'; // 需要token
axios.defaults.baseURL = window.baseURL



/**
 * @description 注册admin内置插件
 */
installPlugin(Vue)
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
Vue.prototype.$qs = qs;
Vue.prototype.$QR = QR;
Vue.prototype.$cookie = VueCookie;
Vue.prototype.$axios = axios;
/**
 * 注册指令
 */
importDirective(Vue)
Vue.directive('clickOutside', clickOutside)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App),
  methods: {
    checkLogin () {
      if (!this.getCookie('username')) {
        this.$router.push('/login')
      } else {
        // this.$router.push('/home')
      }
    }
  }
})
