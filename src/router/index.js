import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/revisions'
  },
  {
    path: '/revisions',
    name: 'about',
    component: () => import('../views/PanelView.vue')
  },
  {
    path: '/revisions/:name',
    name: 'aboutWithCat',
    component: () => import('../views/PanelView.vue')
  },
  {
    path: '/revisions/:name/:tname',
    name: 'aboutWithCatAndTheme',
    component: () => import('../views/PanelView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
