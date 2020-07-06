<template>
  <v-navigation-drawer
    app
    absolute
    :value="drawer"
    :mini-variant="miniVariant"
    :expand-on-hover="expandOnHover"
    class="deep-purple lighten-5"
    clipped
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
      <template v-for="item in NavigationItems">

        <!-- Items with submenu -->
        <template v-if="item.submenu">
          <v-list-group :prepend-icon="item.icon" color="deep-purple accent-4 black--text">
            <template v-slot:activator>
              <v-list-item-title>{{ $t(`t.${item.title}`) }}</v-list-item-title>
            </template>
            <template v-for="submenu in item.submenu">
              <template v-if="submenu.raw">
                <v-list-item :key="submenu.title" @click="submenu.route">
                  <v-list-item-content>
                    <v-list-item-title v-html="submenu.title"/>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-icon>{{ submenu.icon }}</v-icon>
                  </v-list-item-action>
                </v-list-item>
              </template>
              <template v-else>
                <v-list-item :key="$t(`t.${submenu.title}`)" link @click="GlobalMixinGoToPath(submenu.route)">
                  <v-list-item-content>
                    <v-list-item-title>{{ $t(`t.${submenu.title}`) }}</v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-icon>{{ submenu.icon }}</v-icon>
                  </v-list-item-action>
                </v-list-item>
              </template>
            </template>
          </v-list-group>
        </template>

        <!-- Items -->
        <template v-else>
          <v-list-item :key="$t(`t.${item.title}`)" link @click="GlobalMixinGoToPath(item.route)">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ $t(`t.${item.title}`) }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import MixinDrawer from '@/mixins/MixinDrawer';
  import Navigation from '@/services/navigation';

  export default {
    mixin: [
      MixinDrawer
    ],
    name: "Navigation",
    data: () => ({
      miniVariant: false,
      expandOnHover: false,
      user: null,
    }),
    created() {
      this.user = {role_id: 1}
    },
    computed: {
      NavigationItems() {
        return Navigation.getItems(this.user);
      },
      drawer() {
        return this.$store.getters['drawer']
      }
    }
  }
</script>

<style scoped>

</style>
