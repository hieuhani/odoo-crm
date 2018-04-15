<template>
  <split-view />
</template>

<script>
import { mapGetters } from 'vuex'
import SplitView from '@/common/SplitView'
import CustomerList from '@/components/Customers/CustomerList'

export default {
  components: {
    SplitView,
    CustomerList,
  },
  computed: mapGetters({
    customers: 'customers',
  }),
  created() {
    this.$store.dispatch('customers/fetchCustomers')
  },
}
</script>
