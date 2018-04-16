<template>
  <router-link :to="`/customers/${this.customer.id}`" class="customer-row">
    <div class="image">
      <img v-if="this.customer.image_small" :src="`data:image/png;base64,${this.customer.image_small}`" />
      <img v-else src="http://meeconline.com/wp-content/uploads/2014/08/placeholder-300x300.png" />
    </div>
    <div class="details">
      <h2 class="display-name">{{ this.customer.display_name }}</h2>
      <p>{{ this.customer.street }}, {{ this.customer.city }}</p>
      <p>{{ this.customer.phone }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: [
    'customer'
  ],
}
</script>

<style lang="stylus">
.customer-row
  display flex
  padding .5rem
  color #333
  border-bottom 1px solid #eaeaea
  &:hover
    text-decoration none
  .image
    img
      width 60px
  .details
    padding-left 10px
    p
      margin 0
      font-size .9rem
    .display-name
      font-size 1rem
      margin-bottom .2rem
</style>
