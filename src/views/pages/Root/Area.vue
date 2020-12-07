<template>
  <v-container>
    <TitlePage :title="name"/>

  </v-container>
</template>

<script>
import Breadcrumb from '@/components/layout/Breadcrumb';
import TitlePage from '@/components/TitlePage';

export default {
  name: "Area",
  data() {
    return {
      name: 'Область'
    };
  },
  components: {
    Breadcrumb,
    TitlePage,
  }

}
</script>

<style>

</style>
