<template lang="pug">
  v-system-bar.pink(dark, window)
    v-spacer
    v-icon remove
    v-icon check_box_outline_blank
    v-icon close
</template>

<script>
  export default {
    
  }
</script>

<style lang="stylus">
  .system-bar
    -webkit-app-region: drag
    position: fixed
</style>
