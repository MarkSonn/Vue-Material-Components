import Vue from 'vue'
import Router from 'vue-router'
import RegularCard from '@/components/cards/RegularCard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RegularCard',
      component: RegularCard
    }
  ]
})
