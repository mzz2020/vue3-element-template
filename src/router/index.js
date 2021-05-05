import { createRouter, createWebHashHistory } from 'vue-router'
// import store from '../store'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/amap',
    name: 'AMap',
    component: () => import('../views/AMap.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// router.beforeEach(async (to, from, next) => {
//   // next()
//   const { commit, getters, dispatch } = store
//   const { requiredLogin, redirectAlreadyLogin } = to.meta
//   if (to.matched.length === 0) {
//     from.path ? next({ path: from.path }) : next('/')
//   } else {
//     if (!getters.getLogin) {
//       if (getters.getToken) {
//         await dispatch('fetchLoginToken').then(data => {
//           if (data && data.code === 200 && data.result) {
//             commit('setUser', { ...data.result })
//             if (redirectAlreadyLogin) {
//               next({ path: '/' })
//             } else {
//               next()
//             }
//           } else {
//             commit('setLoginOut')
//             next({ path: '/login' })
//           }
//         }).catch(() => {
//           commit('setLoginOut')
//           next({ path: '/login' })
//         })
//       } else {
//         if (requiredLogin) {
//           next({ path: '/login' })
//         } else {
//           next()
//         }
//       }
//     } else {
//       next()
//     }
//   }
// })

export default router
