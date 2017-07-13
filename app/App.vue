<template lang="pug">
  v-app#app
    main
      tabs(
        :favorites='list'
      )
</template>

<script>
  import fs from 'fs'
  import path from 'path'
  import electron from 'electron'
  import promisify from 'util.promisify'

  import Toolbar from './components/Toolbar.vue'
  import Tabs from './components/Tabs.vue'

  const { app } = electron.remote
  const readFile = promisify(fs.readFile)

  export default {
    components: { Toolbar, Tabs },
    data: () => ({
      list: [],
    }),

    async created () {
      const home = app.getPath('home')
      const file = path.join(home, 'favorites.txt')
      const data = await readFile(file, 'utf-8')

      this.list = data.split('\n').filter(x => x)
    }
  }
</script>

<style lang="stylus">
  @import '~vuetify/src/stylus/main'
  #wrapper
    top: 2000px
</style>
