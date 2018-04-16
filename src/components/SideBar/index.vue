<template>
  <div id="side-bar">
    <b-nav vertical>
      <b-nav-item>Home</b-nav-item>
      <b-nav-item>Tasks</b-nav-item>
      <b-nav-item v-bind:to="'/customers'">Customers</b-nav-item>
      <b-nav-item>Organizations</b-nav-item>
      <b-nav-item>Projects</b-nav-item>
    </b-nav>
  </div>
</template>

<style lang="stylus">
#side-bar
  flex: 0 1 220px
  background: #222

  .nav
    .nav-item
      .nav-link
        color: #CCC
        &:hover
          background-color: #444
        &.active
          color: #FFF
          background-color: #333
</style>
