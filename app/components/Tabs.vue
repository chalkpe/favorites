<template lang="pug">
  v-tabs(dark, fixed, centered v-model='active')
    toolbar
    v-tabs-bar.cyan(slot='activators')
      v-tabs-slider.yellow
      v-tabs-item(
        v-for='tab in tabs',
        :key='tab',
        :href=`'#' + tab`
        ripple
      ) {{tab}}
    v-tabs-content(
      :key='tabs[0]',
      :id='tabs[0]'
    )
      v-card(flat)
        v-card-text
          | 탭 1
    v-tabs-content(
      :key='tabs[1]',
      :id='tabs[1]'
    )
      v-card(flat)
        favorites(:list='favorites')
</template>

<script>
  import Toolbar from './Toolbar.vue'
  import Favorites from '../layouts/Favorites.vue'

  export default {
    props: ['dimibob','favorites'],
    data: () => ({
      tabs: ['급식', '좋아'],
      active: null
    }),
    components: { Toolbar, Favorites }
  }
</script>
