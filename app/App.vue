<template lang="pug">
  #app
    main: .container
      table.table
        tr(v-for='item in list')
          td {{ item }}
</template>

<script>
  import fs from 'fs'
  import path from 'path'
  import electron from 'electron'
  import promisify from 'util.promisify'

  const { app } = electron.remote
  const readFile = promisify(fs.readFile)

  export default {
    data: () => ({ list: [] }),

    async created () {
      const home = app.getPath('home')
      const file = path.join(home, 'favorites.txt')
      const data = await readFile(file, 'utf-8')

      this.list = data.split('\n').filter(x => x)
    }
  }
</script>

<style lang="scss">
  @import '~bulma';
</style>
