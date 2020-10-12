<template>
  <v-app>
    <template v-if="isLogged">
      <TopBar />
      <Navigation />
    </template>
    <v-main>
      <v-container :fill-height="!isLogged" class="h-100 ">
        <FlashMessage :position="'right bottom'"/>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import Navigation from "@/components/layout/Navigation.vue";
  import TopBar from "@/components/layout/TopBar.vue";

  export default {
  name: 'App',
  components: {
    Navigation,
    TopBar
  },
  data: () => ({

  }),
  computed: {
    isLogged() {
      return this.$store.getters['auth/isLogged'];
    }
  }
};
</script>
