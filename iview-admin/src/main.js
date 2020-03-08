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
import axios from 'axios'
import AMap from "vue-amap"

Vue.use(VueCookie)

// Vue.http.options.emulateJSON = true;



// 实际打包时应该不引入mock 
/* eslint-disable */
// if (process.env.NODE_ENV !== 'http://119.3.150.173:7005/') require('@/mock')
require('@/mock')
// if (process.env.NODE_ENV !== 'production') require('@/mock')

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})

//地图
Vue.use(AMap);
AMap.initAMapApiLoader({
  key: "4af19d07ff6048f57ee8e8ab674151d7"
});

// window.baseURL = 'https://www.acarepro.online/'; //正式 
window.baseURL = 'https://www.acarepro.online/acarepro-backstage-api/'; // 测试



// window.baseURL = 'http://119.3.150.173:7020/'; // 测试
// window.baseURL = 'http://119.3.150.173:5001/'; //正式
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
