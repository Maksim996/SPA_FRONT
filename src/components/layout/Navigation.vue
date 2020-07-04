<template>

  <!--    v-model="drawer"-->
  <!--    :color="color"-->
  <!--    :expand-on-hover="expandOnHover"-->
  <!--    :mini-variant="miniVariant"-->
  <!--    :right="right"-->
  <!--    :permanent="permanent"-->
  <!--    absolute-->
  <!--    dark-->

  <v-navigation-drawer
    app
    absolute
    dark
    :value="drawer"
    :mini-variant="miniVariant"
    :expand-on-hover="expandOnHover"
  >
    <v-list
      dense
      nav
      class="py-0"
    >
      <v-list-item two-line :class="miniVariant && 'px-0'">

        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Application</v-list-item-title>
          <v-list-item-subtitle>Subtext</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.path"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import MixinDrawer from '@/mixins/MixinDrawer';

  export default {
    mixin: [
      MixinDrawer
    ],
    name: "Navigation",
    data: () => ({
      miniVariant: false,
      expandOnHover: false,
      items: [
        {title: 'Home', icon: 'mdi-home', path: '/home'},
        {title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/'},
        {title: 'Profile', icon: 'mdi-image', path: '/profile'},
        {title: 'About', icon: 'mdi-help-box'},
      ],
    }),
    computed: {
      drawer() {
        return this.$store.getters['drawer']
      }
    }
  }
</script>

<style scoped>

</style>
