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
    BaseLoader,
    FormDirector,
    TitlePage
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
    },
    // async saveGeneralInfo() {
    //   const valid = await this.$refs.formValidate.validate()
    //     .then((res) => res)
    //     .catch((e) => this.GlobalMixinMessagesError(e));
    //
    //   if (valid) {
    //     try {
    //       const data = {
    //         'first_name': this.$refs.FirstSecondNames.firstName,
    //         'second_name': this.$refs.FirstSecondNames.secondName,
    //         'patronymic': this.$refs.FirstSecondNames.patronymic,
    //         'birthday': this.$refs.BirthdayDatePicker.date,
    //         'sex': this.$refs.SexType.switchTypeSex,
    //         'email': this.email,
    //         'phone': this.GlobalGetNumberPhone(this.$refs.Phones.phone),
    //         'additional_phone': this.GlobalGetNumberPhone(this.$refs.Phones.additionalPhone),
    //         'inn_code': this.GlobalGetSymbols(this.$refs.InnCode.innCode, 'OnlySymbols'),
    //         'type_passport': this.$refs.NumberPassport.switchTypePassport,
    //         'passport': this.GlobalGetSymbols(this.$refs.NumberPassport.numberPassport, 'OnlySymbols'),
    //         'image': null, // TODO: add image cropper
    //         'description': this.description,
    //       };
    //       await api.put(`api/director/${this.user_id}`, data);
    //
    //       const updateUser = await this.$store.dispatch('auth/getUserCurrent');
    //       if (updateUser) this.getUser();
    //
    //       this.GlobalMixinMessagesSuccess(this.$t('m.CreateUser') + ' ' + data.first_name + ' ' + data.second_name);
    //     } catch (e) {
    //       this.GlobalMixinMessagesError(e);
    //     }
    //   } else {
    //     this.GlobalMixinMessagesError(this.$t('m.FormIsNotCompletedCorrectly'));
    //   }
    //
    // }
  }

}
</script>

<style scoped>

</style>
