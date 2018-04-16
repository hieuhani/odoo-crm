<template>
  <div class="col-3">
    <div class="contact">
      <div class="image">
        <img v-if="this.contact.image_small" :src="`data:image/png;base64,${this.contact.image_small}`" />
        <img v-else src="http://meeconline.com/wp-content/uploads/2014/08/placeholder-300x300.png" />
      </div>
      <div class="details">
        <h3 class="display-name">
          {{ this.contact.display_name }}
        </h3>
        <p>
          {{ this.contact.function }}
        </p>
        <p>
          {{ this.contact.street}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'contact',
  ],
}
</script>

<style lang="stylus">
.contact
  border 1px solid #eaeaea
  display flex
  .image
    img
      width: 62px
  .details
    padding-left: .5rem
    .display-name
      margin-bottom 0
      font-size 1rem
    p
      margin-bottom 0
      font-size .9rem
</style>
