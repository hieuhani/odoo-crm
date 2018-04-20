<template>
  <customer :customer="this.customer">
    <template slot="section">
      <router-view />
    </template>
  </customer>
</template>

<script>
import { mapGetters } from 'vuex'
import Customer from '@/components/Customer'

export default {
  components: {
    Customer,
  },
  computed: mapGetters({
    customer: 'customer/customer',
  }),
  created() {
    this.$store.dispatch('customer/fetchCustomer', this.$route.params.id)
  },
  watch:{
    $route (to, from) {
      if (to.params.id !== from.params.id) {
        this.$store.dispatch('customer/fetchCustomer', to.params.id)
      }
    }
  }
}
</script>
