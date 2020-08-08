<template>
  <v-sheet
    class="title_page
      font-weight-medium
      text-h5
      text-lg-h4
      mb-5
      text-center
      text-lg-start
    "
    color="headerCC--text"
  >
    {{title}}
  </v-sheet>
</template>

<script>
  export default {
    name: "TitlePage",
    props: [
      'title'
    ]
  }
</script>

<style scoped>
  .title_page {
    background: transparent;
  }
</style>
