import Vue from 'vue'
import Router from 'vue-router'
import UserBoard from './components/UserBoard'
import Admin from './components/Admin'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/test',
      name: 'test',
      component: () => import('./components/test.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue'),
      meta: {
        guest: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      meta: {
        guest: true
      }
    },
    {
      path: '/liststaff',
      name: 'liststaff',
      component: () => import('./views/ListStaff.vue')
    },
    {
      path: '/liststaff/:id',
      name: 'Staff',
      props: true,
      component: () => import('./views/Staff.vue')
    },
    {
      path: '/dashboard',
      name: 'userboard',
      component: UserBoard,
      meta: { 
          requiresAuth: true
      }
  },
  {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: { 
          requiresAuth: true,
          is_admin : true
      }
  }
  ]

}

)
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('jwt') == null) {
          next({
              path: '/login',
              params: { nextUrl: to.fullPath }
          })
      } else {
          let user = JSON.parse(localStorage.getItem('user'))
          if(to.matched.some(record => record.meta.is_admin)) {
              if(user.is_admin == 1){
                  next()
              }
              else{
                  next({ name: 'userboard'})
              }
          }else {
              next()
          }
      }
  } else if(to.matched.some(record => record.meta.guest)) {
      if(localStorage.getItem('jwt') == null){
          next()
      }
      else{
          next({ name: 'userboard'})
      }
  }else {
      next() 
  }
})
export default router