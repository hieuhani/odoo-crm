<template>
  <b-nav tabs id="nav-tabs">
    <b-nav-item v-bind:to="`/customers/${this.id}/contacts`">Contacts and addresses</b-nav-item>
    <b-nav-item>Internal notes</b-nav-item>
    <b-nav-item>Sale and purchase</b-nav-item>
  </b-nav>
</template>

<script>
export default {
  props: [
    'id',
  ],
}
</script>

<style lang="stylus">
#nav-tabs
  padding 0 1rem
  border-color #eaeaea
  .nav-item
    .nav-link
      border 0
      color #888
      &.active
        border-bottom 2px solid #4b367c
        color #333
        font-weight 600
      &:hover
        border-color #4b367c

</style>

