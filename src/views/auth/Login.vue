<template>
  <form-login @handleLogin="handleLogin" />
</template>

<script>
import FormLogin from '@/components/Login/FormLogin'
import odoo from '@/odoo'

export default {
  components: {
    FormLogin,
  },
  methods: {
    async handleLogin(login, password) {
      try {
        const response = await odoo.login(login, password)
        if (response) {
          window.location.reload()
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
  beforeRouteEnter(to, from, next) {
    if (odoo.isLoggedUser()) {
      next({ name: 'Dashboard' })
    } else {
      next()
    }
  },
}
</script>

