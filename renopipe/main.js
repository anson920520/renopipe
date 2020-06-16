import Vue from 'vue'
import App from './App'
import scan from './components/scan.vue'

Vue.config.productionTip = false
Vue.component('scan',scan)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
