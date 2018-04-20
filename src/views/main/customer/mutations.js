const mutations = {
  setCustomer(state, customer) {
    state.customer = customer
  },
  setCustomerContacts(state, contacts) {
    state.contacts = contacts
  },
  clearCustomer(state) {
    state.customer = {}
    state.contacts = []
  },
}

export default mutations
