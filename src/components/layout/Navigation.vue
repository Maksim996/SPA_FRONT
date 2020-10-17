<template>
  <v-navigation-drawer
    app
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
        <v-list-item-avatar v-if="user">
          <img :src="user.image" alt="profile">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-if="fullName">{{ fullName }}</v-list-item-title>
          <v-list-item-subtitle v-if="roleName">{{ $t(`t.${roleName}`) }}</v-list-item-subtitle>
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
      <!-- Logout -->
      <v-list-item  link @click="logout" :disabled="isDisabledLogout">
        <v-list-item-icon>
          <v-icon> mdi-logout </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ $t('t.Logout') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import MixinDrawer from '@/mixins/MixinDrawer';
  import Navigation from '@/services/navigation';
  import { ROLES } from '@/utils/constants'

  export default {
    mixin: [
      MixinDrawer
    ],
    name: "Navigation",
    data: () => ({
      miniVariant: false,
      expandOnHover: false,
      isDisabledLogout: false,
    }),
    computed: {
      user() {
        return this.$store.getters['auth/currentUser'];
      },
      NavigationItems() {
        return Navigation.getItems(this.user);
      },
      drawer() {
        return this.$store.getters['drawer']
      },
      fullName() {
        return this.$store.getters['auth/fullName'];
      },
      roleName() {
        let roleName = false;
        if (this.user && Object.keys(this.user).length) {
          const than = this
          roleName = Object.keys(ROLES.ID).filter(function(key) {
            return ROLES.ID[key] === than.user.role_id })[0]
        }
        return roleName
      }
    },
    methods: {
      async logout() {
        this.isDisabledLogout = true;
        await this.$store.dispatch('auth/logout');
        this.$router.push({ name: 'Login' });
      },
    }
  }
</script>

<style scoped>

</style>
