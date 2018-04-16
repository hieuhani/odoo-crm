<template>
  <div class="split-view">
    <div class="list">
      <slot name="list" />
    </div>
    <div class="main">
      <slot name="main" />
    </div>
  </div>
</template>

<style lang="stylus">
.split-view
  display flex
  width 100%
  .list
    flex 0 0 375px
    border-right 1px solid #eaeaea
  .main
    flex 1
</style>
