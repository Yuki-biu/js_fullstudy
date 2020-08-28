import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/HelloWorld.vue'
import Hi from '@/components/Hi.vue'
// import Hi1 from '@/components/Hi1.vue'
import Hi2 from '@/components/Hi2.vue'
import Error from '@/components/Error.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '*',
      component: Error
    },
    {
        path: '/hi',
        name: 'Hi',
        component: Hi,
        alias: '/abc',
        children: [
            {
                path: 'hi1',
                name: 'hi1',
                redirect: '/',
                // component: Hi1
            },
            {
                path: 'hi2',
                // name: 'hi2',
                component: Hi2,
                alias: 'wn'
            }
        ]
    },
    {
      path: '/abc',
      name: 'abc',
      component: Error,
      beforeEnter: (to, from, next) => {
        console.log('404')
        console.log(to)
        console.log(from)
        next()
      }
    }
  ]
})