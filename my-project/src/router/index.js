import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/components/login'),
    },
    {
      path: '/sidebar',
      name: 'sidebar',
      component: () => import("@/components/sidebar"),
      children: [{
        path: '/watermanagement',
        name: 'watermanagement',
        component: () => import('@/components/watermanagement')
      },
      {
        path: '/usermanagement',
        name: 'usermanagement',
        component: () => import('@/components/usermanagement')
      },
      {
        path: '/reportmanagement',
        name: 'reportmanagement',
        component: () => import("@/components/reportmanagement")
      },
      {
        path: '/changepassword',
        name: 'changepassword',
        component: () => import("@/components/setup/changepassword")
      }
      ]
    },
  ]
})
const VueRouterPush = Router.prototype.push

Router.prototype.push = function push(to) {

  return VueRouterPush.call(this, to).catch(err => err)
}
