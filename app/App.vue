<template lang="pug">
  #app
    h1 Hello, world!
    button.button(type='button') Wow
</template>

<script>
  import electron from 'electron'
  const { shell } = electron.remote

  export default {
    created () {
      shell.openExternal('https://github.com/ChalkPE')
    }
  }
</script>

<style lang="scss">
  @import '~bulma';
</style>
