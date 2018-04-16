import Vue from 'vue'
import Vuex from 'vuex'
import customers from '@/views/main/customers/module'
import customer from '@/views/main/customer/module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    customers,
    customer,
  },
})
