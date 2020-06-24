import Vue from 'vue'
import App from './App'
import store from "./vuex/store.js"
import scan from './components/scan.vue'
import VueQrcodeReader from "vue-qrcode-reader";
// console.log(VueQrcodeReader)


import Header from "./components/Header.vue"

Vue.component('Header',Header)

// import plus from "plus"

Vue.config.productionTip = false
Vue.component('scan',scan)
Vue.use(VueQrcodeReader);

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
