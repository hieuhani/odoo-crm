<template>
  <div class="info-line">
    <h4 class="property">{{ this.property }}</h4>
    <span class="value">{{ this.value }}</span>
  </div>
</template>

<script>
export default {
  props: [
    'property',
    'value',
  ],
}
</script>

<style lang="stylus">
.info-line
  color: #666
  margin-bottom .5rem
  .property
    margin-bottom: 0
    font-size 1rem
  .value
    font-size .9rem
</style>
