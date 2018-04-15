import Vue from 'vue'
import Vuex from 'vuex'
import customers from '@/views/main/customers/module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    customers,
  },
})
