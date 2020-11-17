<template>
  <v-card
    color="basil"
    flat
  >
    <TitlePage :title="$t('t.SettingMyProfile')"></TitlePage>
    <v-row class="justify-center">
      <v-col cols="12" md="8">
        <LinksBoxImg :links="BoxSettings"/>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import LinksBoxImg from '@/components/layout/LinksBoxImg';
import TitlePage from '@/components/TitlePage';

export default {
  name: "SettingMyProfile",
  components: {
    LinksBoxImg,
    TitlePage
  },
  data() {
    return {
      BoxSettings: [
        {
          src: '/images/others/replaceAvatar.png',
          route: 'EditProfile',
          text: this.$t('t.EditMyProfile')
        },
        {
          route: 'EditAvatar',
          src: '/images/others/replaceAvatar.png',
          text: this.$t('t.ChangeAvatar')
        },
        {
          src: '/images/others/replaceAvatar.png',
          route: 'EditPassword',
          text: this.$t('t.ChangePassword')
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
