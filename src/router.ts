import Vue from 'vue'
import VueRouter from 'vue-router'
import About from './views/About.vue'

Vue.use(VueRouter)

const routes = [
  {/*  */
    path: '/',
    name: 'about',
    component: About
  },
  {
    path: '/adventure-viewer',
    name: 'adventure-viewer',
    component: () => import(/* webpackChunkName: "adventure-viewer" */ './views/AdventureViewer.vue')
  },
  {
    path: '/adventure-list',
    name: 'adventure-list',
    component: () => import(/* webpackChunkName: "adventure-list" */ './views/AdventureList.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
