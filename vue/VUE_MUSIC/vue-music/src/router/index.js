import Vue from 'vue'
import VueRouter from 'vue-router'

const search = () => import('@/views/search')

Vue.use(VueRouter)

  const routes = [
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]

const router = new VueRouter({
  // 控制选中的tab会增加的类名
  linkActiveClass: 'active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
