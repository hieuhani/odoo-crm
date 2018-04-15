import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/auth/Login'
import Dashboard from './views/main/Dashboard'
import Customers from './views/main/customers'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      redirect: '/customers',
      children: [{
        path: '/customers',
        name: 'Customers',
        component: Customers,
      }],
    },
  ],
})
