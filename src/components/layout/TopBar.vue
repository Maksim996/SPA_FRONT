<template>
  <v-app-bar
    app
    clipped-left
    dense
    color="headerCC"
    dark
  >
    <div class="d-flex align-center">
      <v-app-bar-nav-icon @click="() => drawer = !drawer"></v-app-bar-nav-icon>
      <v-img
        alt="Medical center"
        class="shrink hidden-sm-and-down ml-3"
        contain
        min-width="100"
        :src="logo"
        width="100"
      />
    </div>
    <v-spacer></v-spacer>
    <v-btn
      to="/register"
      text
    >
      <span class="mr-2">Register</span>
      <v-icon>mdi-account-multiple-plus</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
  import MixinDrawer from '@/mixins/MixinDrawer';

  export default {
    mixins: [
      MixinDrawer
    ],
    name: "Header",
    data() {
      return {
        logo: process.env.VUE_APP_LOGO,
      }
    },
  }
</script>

<style scoped>

</style>
