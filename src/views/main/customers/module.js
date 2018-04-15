import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const initialState = {
  customers: [],
}

export default {
  state: initialState,
  mutations,
  actions,
  getters,
  namespaced: true,
}
