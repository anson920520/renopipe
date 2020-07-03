import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    // redirect: '/home',
    redirect: '/login',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  
  {
    path: '/service_page',
    name: '地盤總覽', 
    // redirect: '/service',
    component: Main,
    meta: {
      hideInBread: true,
      notCache: true
    },
    children: [
      {
        path: '/service_page',
        name: '地盤總覽',
        meta: {
          icon: 'ios-book',//MAYBE we can use font awesome?
          title: '地盤總覽',
        },
        component: () => import('@/view/service/service_page.vue')
      }
    ]
  },
  {
    path: '/admin_page',
    name: 'admin_page', 
    component: Main,
    meta: {
      hideInBread: true,
      notCache: true
    },
    children: [
      {
        path: '/admin_page',
        name: '管理員賬號',
        meta: {
          icon: 'ios-book',//MAYBE we can use font awesome?
          title: '管理員賬號',
        },
        component: () => import('@/view/user/admin_page.vue')
      }
    ]
  },
  {
    path: '/place',
    name: '地盤管理', //only ACAREPRO admin can use
    component: Main,
    meta: {
      hideInBread: true,
      // access: ['superadmin', 'admin'],
      icon: 'ios-person',
      title: '地盤管理'
    },
    children: [
      {
        path: '/place_page',
        name: '地盤管理',
        meta: {
          icon: 'ios-settings',//MAYBE we can use font awesome?
          title: '地盤管理'
        },
        component: () => import('@/view/place/place.vue')
      },
    
    ]
  },
  {
    path: '/account',
    name: '工頭賬戶管理', //only ACAREPRO admin can use
    component: Main,
    meta: {
      hideInBread: true,
      // access: ['superadmin', 'admin'],
      icon: 'ios-person',
      title: '工頭賬戶管理'
    },
    children: [
      {
        path: '/account_page',
        name: '工頭賬戶管理',
        meta: {
          icon: 'md-albums',//MAYBE we can use font awesome?
          title: '工頭賬戶管理'
        },
        component: () => import('@/view/account/account.vue')
      },
    
    ]
  },
  //user managment
  {
    path: '/user',
    name: '工人管理', //only ACAREPRO admin can use
    component: Main,
    meta: {
      hideInBread: true,
      // access: ['superadmin', 'admin'],
      icon: 'ios-person',
      title: '工人管理'
    },
    children: [
      {
        path: '/user_page',
        name: '工人管理',
        meta: {
          icon: 'ios-person',//MAYBE we can use font awesome?
          title: '工人管理'
        },
        component: () => import('@/view/user/user_page.vue')
      },
    ]
  },
  {
    path: '/record',
    name: '報工記錄管理', //only ACAREPRO admin can use
    component: Main,
    meta: {
      hideInBread: true,
      // access: ['superadmin', 'admin'],
      icon: 'ios-person',
      title: '報工記錄管理'
    },
    children: [
      {
        path: '/record_page',
        name: '報工記錄管理',
        meta: {
          icon: 'ios-person',//MAYBE we can use font awesome?
          title: '報工記錄管理'
        },
        component: () => import('@/view/record/record.vue')
      },
    ]
  },


  
  
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    // redirect:'/login'
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
