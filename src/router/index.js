import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/layout/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: '/dashboard',
      hidden: true
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: (resolve) => require(['@/views/layout/index.vue'],resolve),
      meta: { title: 'dashboard', icon: 'home' }
    },
    {
      path: '/permission',
      name: 'permission',
      component: (resolve) => require(['@/views/layout/index.vue'],resolve),
      meta: { title: 'permission', icon: 'user' },
      children: [
        {
          path: '/pagePert',
          name: 'pagePert',
          component: {template:'<route-view></router-view>'},
          meta: { title: 'pagePert', icon: 'user' },
          children: [
            {
              path: '/common',
              name: 'common',
              component: (resolve) => require(['@/views/permission/pagePert/common.vue'],resolve),
              meta: { title: 'common', icon: 'user' },
            },
            {
              path: '/admin',
              name: 'admin',
              component: (resolve) => require(['@/views/permission/pagePert/admin.vue'],resolve),
              meta: { title: 'admin', icon: 'user' },
            }
          ]
        },
        {
          path: '/dirPert',
          name: 'dirPert',
          component: (resolve) => require(['@/views/permission/dirPert.vue'],resolve),
          meta: { title: 'dirPert', icon: 'user' },
        },
        {
          path: '/doubleLogin',
          name: 'doubleLogin',
          component: (resolve) => require(['@/views/permission/doubleLogin.vue'],resolve),
          meta: { title: 'doubleLogin', icon: 'user' },
        },
      ]
    },
    {
      path: '/language',
      name: 'language',
      component: (resolve) => require(['@/views/layout/index.vue'],resolve),
      meta: { title: 'language', icon: 'language' }
    },
    {
      path: '/settings',
      name: 'settings',
      component: (resolve) => require(['@/views/layout/index.vue'],resolve),
      meta: { title: 'settings', icon: 'cog' }
    },
  ]
})
