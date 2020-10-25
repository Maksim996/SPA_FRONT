<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <TitlePage :title="$t('t.ChangePassword')"/>
      </v-col>
      <v-col cols="12" md="6">
        <ChangePassword :path="'/api/change-password'"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ChangePassword from '@/components/ChangePassword';
import TitlePage from '@/components/TitlePage';

export default {
  name: "EditPassword",
  components: {
    ChangePassword,
    TitlePage
  }
}
</script>
