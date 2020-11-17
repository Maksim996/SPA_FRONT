<template>
  <v-container>
    <template v-if="dataDirector">
      <TitlePage :title="$t('t.EditMyProfile')"></TitlePage>

      <FormDirector ref="form" :dataProps="dataDirector"/>

      <div class="mt-3">
        <v-btn color="btnCC white--text" class="mr-4" @click="submitForm">{{$t('t.Save')}}</v-btn>
      </div>
    </template>
    <base-loader v-else></base-loader>

  </v-container>

</template>

<script>
import FormDirector from '@/views/pages/Director/FormDirector';
import BaseLoader from '@/components/base/BaseLoader';
import api from '@/api';
import TitlePage from '@/components/TitlePage';

export default {
  name: "MyProfileEdit",
  data() {
    return {
      dataDirector: null,
      user_id: null,
    }
  },
  components: {
    TitlePage,
    BaseLoader,
    FormDirector
  },
  created() {
    this.getItem();
  },
  methods: {
    getItem() {
      this.dataDirector = this.$store.getters['auth/currentUser'];
      this.user_id = this.dataDirector.id;
    },
    async submitForm() {
      const data = await this.$refs.form.getData()

      if (data && this.user_id) {
        try {
          const response = await api.update('api/director', this.user_id, data);
          this.$store.commit('auth/updateCurrentUser', data);
          this.GlobalMixinMessagesSuccess(response);
          this.$router.go(-1);
        } catch (error) {
          this.GlobalMixinMessagesError(error.response);
        }
      }
    }
  }

}
</script>

<style scoped>

</style>
