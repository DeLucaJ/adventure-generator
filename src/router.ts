import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {/*  */
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/adventure-viewer',
    name: 'adventure-viewer',
    component: () => import(/* webpackChunkName: "adventure-viewer" */ './views/AdventureViewer.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
