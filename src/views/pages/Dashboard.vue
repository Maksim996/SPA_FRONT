<template>
  <div>
    <Navigation></Navigation>
    <TopBar></TopBar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
        <!--        <loader></loader>-->
        <!--        <messages-info></messages-info>-->
      </v-container>
    </v-main>
  </div>
</template>

<script>
  import Navigation from "@/components/layout/Navigation.vue";
  import TopBar from "@/components/layout/TopBar.vue";

  export default {
    name: "Dashpoard",
    components: {
      Navigation,
      TopBar
    },
  }
</script>

<style scoped>

</style>
