import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PanelView.vue')
  },
  {
    path: '/about/:name',
    name: 'aboutWithCat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PanelView.vue')
  },
  {
    path: '/about/:name/:tname',
    name: 'aboutWithCatAndTheme',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PanelView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   // Vérifie si la navigation provient d'un rafraîchissement de la page
//   if (from === to) {
//     // Redirige vers la route /about
//     next('/about')
//   } else {
//     // Sinon, continue la navigation normalement
//     next()
//   }
// })

export default router
