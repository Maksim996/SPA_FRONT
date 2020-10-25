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
          <AboutInfoProfile :items="itemsAbout"/>
        </v-tab-item>
        <v-tab-item
          value="tab-Description"
        >
          <v-container fluid>
            <v-row class="justify-center">
              <v-col v-if="user && user.description" class="col-lg-8 col-12" v-html="user.description" />
              <base-no-data v-else/>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab-item
          value="tab-Settings"
        >
          <v-card
            color="basil"
            flat
          >
            <v-row class="justify-center">
              <v-col cols="12" md="8">
                <LinksBoxImg :links="BoxSettings"/>
              </v-col>
            </v-row>
          </v-card>
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
import ChangePassword from '@/components/ChangePassword';
import FirstSecondNames from '@/components/fields/FirstSecondNames';
import Phones from '@/components/fields/Phones';
import BirthdayDatePicker from '@/components/fields/BirthdayDatePicker';
import SexType from '@/components/fields/SexType';
import NumberPassport from '@/components/fields/NumberPassport';
import InnCode from '@/components/fields/InnCode';
import { VueEditor } from 'vue2-editor';
import LinksBoxImg from '@/components/layout/LinksBoxImg';

export default {
  components: {
    TitlePage,
    AvatarProfile,
    AboutInfoProfile,
    ChangePassword,
    FirstSecondNames,
    Phones,
    BirthdayDatePicker,
    SexType,
    NumberPassport,
    InnCode,
    VueEditor,
    LinksBoxImg,
  },
  name: "MyProfile",
  data() {
    return {
      tab: 'tab-GeneralInfo',
      user: null,
      email: '',
      itemsTab: [
        'GeneralInfo',
        'Description',
        'Settings',
      ],
      itemsAbout: {},
      headersSettings: ['ChangeAvatar', 'EditGeneralInfo', 'ChangePassword'],
      description: '',
      user_id: null,
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
  },
  mounted() {
    this.getUser()
  },
  methods: {
    async getUser() {
      const user = await this.$store.getters['auth/currentUser']
      this.user_id = user.id;

      const data = {
        ...user
      };
      this.user = data;
      this.email = data.email;
      this.description = data.description;

      this.itemsAbout = {
        'FIO': {
          "FirstName": this.user.first_name,
          "SecondName": this.user.second_name,
          "Patronymic": this.user.patronymic,
        },
        'GeneralInfo': {
          "Birthday":  this.GlobalFormatDateDMY(this.user.birthday),
          "Sex": this.user.sex,
        },
        'Contacts': {
          "Email": this.user.email,
          "NumberMobPhone": this.user.phone_format,
          "AdditionalPhone": this.user.additional_phone_format,
        },
        'Documents': {
          "InnCode": this.user.inn_code,
          "PassportType": this.user.type_passport,
          "Passport": this.user.passport,
        },
      }
    },


    async saveGeneralInfo() {
      const valid = await this.$refs.formValidate.validate()
        .then((res) => res)
        .catch((e) => this.GlobalMixinMessagesError(e));

      if (valid) {
        try {
          const data = {
            'first_name': this.$refs.FirstSecondNames.firstName,
            'second_name': this.$refs.FirstSecondNames.secondName,
            'patronymic': this.$refs.FirstSecondNames.patronymic,
            'birthday': this.$refs.BirthdayDatePicker.date,
            'sex': this.$refs.SexType.switchTypeSex,
            'email': this.email,
            'phone': this.GlobalGetNumberPhone(this.$refs.Phones.phone),
            'additional_phone': this.GlobalGetNumberPhone(this.$refs.Phones.additionalPhone),
            'inn_code': this.GlobalGetSymbols(this.$refs.InnCode.innCode, 'OnlySymbols'),
            'type_passport': this.$refs.NumberPassport.switchTypePassport,
            'passport': this.GlobalGetSymbols(this.$refs.NumberPassport.numberPassport, 'OnlySymbols'),
            'image': null, // TODO: add image cropper
            'description': this.description,
          };
          await api.put(`api/director/${this.user_id}`, data);

          const updateUser = await this.$store.dispatch('auth/getUserCurrent');
          if (updateUser) this.getUser();

          this.GlobalMixinMessagesSuccess(this.$t('m.CreateUser') + ' ' + data.first_name + ' ' + data.second_name);
        } catch (e) {
          this.GlobalMixinMessagesError(e);
        }
      } else {
        this.GlobalMixinMessagesError(this.$t('m.FormIsNotCompletedCorrectly'));
      }

    }
  },

}
</script>

<style scoped>


</style>
