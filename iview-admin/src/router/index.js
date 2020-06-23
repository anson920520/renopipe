import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import iView from 'iview'
import { setTitle } from '@/libs/util'
import config from '@/config'

Vue.use(Router)
const router = new Router({
  routes,
  mode: 'hash'
})

router.beforeEach((to, from, next) => {

  iView.LoadingBar.start()
  next()

})

router.afterEach(to => {
  setTitle(to, router.app)
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)

})

export default router
