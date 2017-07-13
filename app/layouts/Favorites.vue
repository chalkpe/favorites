<template lang="pug">
  v-list
    v-list-tile(v-for='item in list', :key='item') {{ item }}
</template>

<script>
  export default {
    props: ['list']
  }
</script>
