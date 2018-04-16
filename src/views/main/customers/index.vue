<template>
  <split-view>
    <template slot="list">
      <customer-row v-for="customer in this.customers" :customer="customer" v-bind:key="customer.id" />
    </template>
    <template slot="main">
      <router-view />
    </template>
  </split-view>
</template>

<script>
import { mapGetters } from 'vuex'
import SplitView from '@/common/SplitView'
import CustomerRow from '@/components/Customers/CustomerRow'

export default {
  components: {
    SplitView,
    CustomerRow,
  },
  computed: mapGetters({
    customers: 'customers/customers',
  }),
  created() {
    this.$store.dispatch('customers/fetchCustomers')
  },
}
</script>
