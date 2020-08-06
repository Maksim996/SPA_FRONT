<template>
  <v-app>
    <template v-if="isLogged">
      <Navigation />
      <TopBar />
    </template>
    <v-main>
      <v-container :fill-height="!isLogged" class="h-100 ">
        <router-view></router-view>
              <!--        <loader></loader>-->
        <!--        <messages-info></messages-info>-->
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
