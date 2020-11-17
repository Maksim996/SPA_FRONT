<template>
  <v-breadcrumbs v-if="breadcrumbList" :items="breadcrumbList" class="breadcrumb-custom">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        :href="item.href"
        :to="item.to"
        :exact="item.exact"
        :link="true"
      >
        {{ $t( 't.' + item.text) }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  name: "Breadcrumb",
  data() {
    return {
      breadcrumbList:  [],
    }
  },

  watch: {
    '$route'() {
      this.updateBreadcrumbs()
    }
  },
  methods: {
    updateBreadcrumbs() {
      this.breadcrumbList = this.$route.meta.breadcrumb
    }
  }
}

</script>

<style lang="scss">
  @import "./src/assets/scss/constants";
  .v-application {
    .breadcrumb-custom {
      padding-left: 12px;

      a.v-breadcrumbs__item {
        color: $base-color
      }

      a.v-breadcrumbs__item:hover {
        color: #809bff;
      }

      .v-breadcrumbs__item {
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
</style>
