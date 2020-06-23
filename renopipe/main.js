import Vue from 'vue'
import App from './App'
import scan from './components/scan.vue'
import VueQrcodeReader from "vue-qrcode-reader";

// import plus from "plus"

Vue.config.productionTip = false
Vue.component('scan',scan)
Vue.use(VueQrcodeReader);

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
