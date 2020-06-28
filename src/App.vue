<template>
  <v-app>
    <TopBar></TopBar>
    <Navigation></Navigation>
    <v-main>
      <v-container fluid>
        <router-view></router-view>

<!--        <loader></loader>-->

<!--        <messages-info></messages-info>-->
      </v-container>

    </v-main>
  </v-app>
</template>

<script>
import Navigation from "@/views/layout/Navigation.vue";
import TopBar from "@/views/layout/TopBar.vue";

export default {
  name: 'App',

  components: {
    Navigation,
    TopBar
  },

  data: () => ({

  }),
};
</script>
