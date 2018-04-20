import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/auth/Login'
import Dashboard from './views/main/Dashboard'
import Customers from './views/main/customers'
import Customer from './views/main/customer'
import CustomerContacts from './views/main/customer/contacts'
import NewCustomer from './views/main/customers/NewCustomer'

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
        children: [{
          path: '/customers/new',
          name: 'NewCustomer',
          component: NewCustomer,
        }, {
          path: '/customers/:id',
          name: 'Customer',
          component: Customer,
          redirect: '/customers/:id/contacts',
          children: [{
            path: '/customers/:id/contacts',
            name: 'CustomerContacts',
            component: CustomerContacts,
          }],
        }],
      }],
    },
  ],
})
