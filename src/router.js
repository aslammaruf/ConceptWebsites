import Vue from 'vue'
import Router from 'vue-router'
import Concept1 from './components/Concept1.vue'

Vue.use(Router)

export default new Router({
  saveScrollPosition: false,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'concept1',
      component: Concept1
    }
  ]
})