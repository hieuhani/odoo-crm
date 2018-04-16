<template>
  <div id="customer">
    <header class="header">
      <div class="avatar">
        <img v-if="this.customer.image" :src="`data:image/png;base64,${this.customer.image}`" />
      </div>
      <div class="details">
        <h3 class="display-name">{{ this.customer.display_name }}</h3>
        <div class="row">
          <div class="col-4">
            <info-line property="Address" :value="this.customer.street" />
            <info-line property="City" :value="`${this.customer.city} ${this.customer.zip}`" />
            <info-line
              v-if="this.customer.country_id"
              property="Country"
              :value="this.customer.country_id[1]"
            />
          </div>
          <div class="col-4">
            <info-line property="Phone" :value="this.customer.phone" />
            <info-line property="Mobile" value="" />
          </div>
          <div class="col-4">
            <info-line property="Email" :value="this.customer.email" />
            <info-line property="Website" :value="this.customer.website" />
          </div>
        </div>
      </div>
    </header>
    <nav-tabs :id="this.customer.id" />
    <div class="section">
      <slot name="section" />
    </div>
  </div>
</template>

<script>
import InfoLine from './InfoLine'
import NavTabs from './NavTabs'

export default {
  components: {
    InfoLine,
    NavTabs,
  },
  props: [
    'customer',
  ],
}
</script>

<style lang="stylus">
#customer
  .header
    display flex
    padding 1rem
    align-items flex-start
    .avatar
      border 1px solid #eaeaea
    .details
      color #333
      flex 1
      padding-left 1rem
      .display-name
        font-size 1.5rem
        margin-bottom .8rem
  .section
    padding .5rem 1rem
</style>
