<template lang="pug">
  v-toolbar.pink.darken-1(dark, v-bind:class='style')
    img(src='dist/logo.png', height='30px')
    v-toolbar-title Aramark Korea
</template>

<script>
  export default {
    computed: {
      style() {
        return {
          'toolbar--fixed': !(document.body.scrollTop === 0)
        }
      }
    }
  }
</script>

<style lang="stylus">
</style>
