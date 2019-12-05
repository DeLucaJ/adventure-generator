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
    path: '/adventure-list',
    name: 'adventure-list',
    component: () => import(/* webpackChunkName: "adventure-list" */ './views/AdventureList.vue')
  },
  {
    path: '/world-list',
    name: 'world-list',
    component: () => import(/* webpackChunkName: "world-list" */ './views/WorldList.vue')
  },
  {
    path: '/viewer',
    name: 'viewer',
    component: () => import(/* webpackChunkName: "viewer" */ './views/Viewer.vue')
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import(/* webpackChunkName: "editor" */ './views/Editor.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
