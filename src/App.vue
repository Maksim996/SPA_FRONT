<template>
  <v-app>
    <template v-if="isLogged">
      <TopBar />
      <Navigation />
    </template>
    <v-main>
      <v-container :fill-height="!isLogged" class="h-100 ">
        <FlashMessage :position="'right bottom'"/>
        <Breadcrumb/>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import Navigation from '@/components/layout/Navigation.vue';
  import TopBar from '@/components/layout/TopBar.vue';
  import Breadcrumb from '@/components/layout/Breadcrumb';

  export default {
  name: 'App',
  components: {
    Navigation,
    TopBar,
    Breadcrumb
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
