<template>
  <div>
    <TitlePage :title="$t('t.MyProfile')"/>

    <AvatarProfile
      :user-prop="user"
    />

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="headerCC"
      centered
      flat
    >
      <v-tab
        v-for="itemTab in itemsTab"
        :key="itemTab"
        :href="`#tab-${itemTab}`"
      >
        {{ $t(`t.${itemTab}`) }}
      </v-tab>

      <v-tabs-items v-model="tab" class="mt-lg-9 mt-0">

        <v-tab-item width="100%" value="tab-GeneralInfo">
          <AboutInfoProfile :informationsAboutUser="informationsAboutUser"/>
        </v-tab-item>

        <v-tab-item
          value="tab-Description"
        >
          <v-container fluid>
            <v-row class="justify-center">
              <v-col v-if="description" class="col-lg-8 col-12" v-html="description" />
              <base-no-data v-else/>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </div>

</template>

<script>
import api from '@/api/index';
import TitlePage from '@/components/TitlePage';
import AvatarProfile from '@/components/AvatarProfile';
import AboutInfoProfile from '@/components/AboutInfoProfile';
import { FIELDS_FOR_I18N } from '@/utils/constants';

export default {
  components: {
    TitlePage,
    AvatarProfile,
    AboutInfoProfile,
  },
  name: "MyProfile",
  data() {
    return {
      tab: 'tab-GeneralInfo',
      itemsTab: [
        'GeneralInfo',
        'Description',
      ],
      user: null,
      informationsAboutUser: {},
      description: '',
      user_id: null,
    }
  },
  mounted() {
    this.getUser()
  },
  methods: {
    async getUser() {
      const user = await this.$store.getters['auth/currentUser'];
      if (user) {
        this.user = user;
        this.user_id = user.id;
        this.description = user.description;
        this.informationsAboutUser = {
          [FIELDS_FOR_I18N['first_name']]: user.first_name,
          [FIELDS_FOR_I18N['second_name']]: user.second_name,
          [FIELDS_FOR_I18N['patronymic']]: user.patronymic,
          [FIELDS_FOR_I18N['birthday']]: user.birthday,
          [FIELDS_FOR_I18N['sex']]: user.sex,
          [FIELDS_FOR_I18N['email']]: user.email,
          [FIELDS_FOR_I18N['phone_format']]: user.phone_format,
          [FIELDS_FOR_I18N['additional_phone_format']]: user.additional_phone_format,
          [FIELDS_FOR_I18N['inn_code']]: user.inn_code,
          [FIELDS_FOR_I18N['passport']]: user.passport,
        }
      }
    },
  },

}
</script>

<style scoped>


</style>
