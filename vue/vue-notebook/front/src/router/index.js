import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'StarNotes',
    component: () => import('@/views/StarNotes.vue'),
    meta: {
      title: '坛叽日记'
    }
  },
  {
    path: '/StarBanner',
    name: 'StarBanner',
    component: () => import('@/views/StarBanner.vue'),
    meta: {
      title: '欢迎'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
