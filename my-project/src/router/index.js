import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'sidebar',
      component: () => import('@/components/sidebar'),
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
