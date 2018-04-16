<template>
  <div class="contacts row">
    <contact v-for="contact in this.contacts" v-bind:key="contact.id" :contact="contact" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Contact from '@/components/Customer/Contact'

export default {
  components: {
    Contact,
  },
  computed: mapGetters({
    contacts: 'customer/contacts',
    customer: 'customer/customer',
  }),
  watch: {
    customer(value) {
      if (value && value.child_ids) {
        this.$store.dispatch('customer/fetchCustomerContact', value.child_ids)
      }
    },
  },
}
</script>
