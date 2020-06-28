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
};
</script>
