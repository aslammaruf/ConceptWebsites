import Vue from 'vue'
import Router from 'vue-router'
import Concept1 from './pages/Concept1.vue'
import Concept2 from './pages/Concept2.vue'
Vue.use(Router)

export default new Router({
  saveScrollPosition: false,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'concept1',
      component: Concept1
    },
    {
      path: '/concept2',
      name: 'concept2',
      component: Concept2
    }
  ]
})