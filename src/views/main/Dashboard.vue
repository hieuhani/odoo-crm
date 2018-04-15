<template>
  <div id="dashboard">
    <navigation-bar />
    <div id="content">
      <side-bar />
      <div id="main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import odoo from '@/odoo'
import SideBar from './SideBar'
import NavigationBar from './NavigationBar'

export default {
  components: {
    SideBar,
    NavigationBar,
  },
  beforeRouteEnter: (to, from, next) => {
    if (odoo.isLoggedUser()) {
      next()
    } else {
      next({ name: 'Login' })
    }
  },
}
</script>

<style lang="stylus">
#dashboard
  height: 100%
  width: 100%
  display: flex
  flex-direction: column
  #content
    flex: 1
    flex-direction: row
    display: flex
  #main
    flex: 1
    display: flex
</style>
