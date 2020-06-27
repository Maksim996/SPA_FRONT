<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
              href="/login"
              target="_blank"
              text
      >
        <span class="mr-2">Login</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
      <v-btn
              href="/register"
              target="_blank"
              text
      >
        <span class="mr-2">Register</span>
        <v-icon>mdi-account-multiple-plus</v-icon>
      </v-btn>
    </v-app-bar>

<!--    v-model="drawer"-->
<!--    :color="color"-->
<!--    :expand-on-hover="expandOnHover"-->
<!--    :mini-variant="miniVariant"-->
<!--    :right="right"-->
<!--    :permanent="permanent"-->
<!--    absolute-->
<!--    dark-->

    <v-navigation-drawer app
              absolute
              dark
              v-model="drawer"
    >
      <v-list
              dense
              nav
              class="py-0"
      >
        <v-list-item two-line :class="'px-0'">
<!--          <v-list-item two-line :class="miniVariant && 'px-0'">-->

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

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    drawer: true,
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard' },
      { title: 'Photos', icon: 'mdi-image' },
      { title: 'About', icon: 'mdi-help-box' },
    ],
  }),
};
</script>
