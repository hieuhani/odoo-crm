<template>
  <div class="form-login">
    <h3>Please sign in</h3>
    <b-form @submit="onSubmit">
      <div class="form-group form-input">
        <b-form-input
          type="text"
          v-model="login"
          required
          placeholder="Account"
        />
        <b-form-input
          type="password"
          v-model="password"
          required
          placeholder="Password"
        />
      </div>
      <b-button
        type="submit"
        variant="primary"
        block
      >
        Submit
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: '',
      password: '',
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.$emit('handleLogin', this.login, this.password)
    },
  },
}
</script>

<style lang="scss" scoped>
.form-login {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
  .form-input {
    input {
      &:first-child {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }
      &:last-child {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
  }
}
</style>
