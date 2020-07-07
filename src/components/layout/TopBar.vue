<template>
  <v-app-bar
    app
    clipped-left
    dense
    class="purple darken-2"
    dark
  >
    <div class="d-flex align-center">
      <v-app-bar-nav-icon @click="() => drawer = !drawer"></v-app-bar-nav-icon>
      <v-img
        alt="Medical center"
        class="shrink hidden-sm-and-down"
        contain
        min-width="100"
        src="images/logo/logo.svg"
        width="100"
      />
    </div>
    <v-spacer></v-spacer>
    <v-btn
      to="/login"
      text
    >
      <span class="mr-2">Login</span>
      <v-icon>mdi-login</v-icon>
    </v-btn>
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
    name: "Header"
  }
</script>

<style scoped>

</style>
