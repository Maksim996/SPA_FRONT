<template>
  <div>
    <TitlePage :title="$t('t.MyProfile')"/>
    <AvatarProfile
      :first_name="user.first_name"
      :second_name="user.second_name"
      :patronymic="user.patronymic"
      :rules="'admin'"
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
          value="tab-Settings"
        >
          <v-card
            color="basil"
            flat
          >
            <v-row class="justify-center">
              <v-col class="col-lg-9 col-11">
                <v-expansion-panels>
                  <v-expansion-panel>
                    <v-expansion-panel-header>{{ $t('t.ChangeAvatar') }}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>{{ $t('t.EditGeneralInfo') }}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <validation-observer ref="formValidate" v-slot="{ validate, reset }">
                        <form>
                          <FirstSecondNames ref="FirstSecondNames"
                                            :firstNameProp="user.first_name"
                                            :secondNameProp="user.second_name"
                                            :patronymicProp="user.patronymic"
                          />
                          <Phones ref="Phones"
                                  :phoneProp="user.phone"
                                  :additionalPhoneProp="user.additional_phone"
                          />
                          <BirthdayDatePicker ref="BirthdayDatePicker"
                                              :dateProp="user.birthday"
                          />
                          <SexType ref="SexType"
                                   :sexTypeProp="user.sex"
                          />
                          <NumberPassport ref="NumberPassport"
                                          :passportTypeProp="user.type_passport"
                                          :passportProp="user.passport"
                          />
                          <InnCode ref="InnCode"
                                   :innCodeProp="user.inn_code"
                          />
                          <v-row>
                            <v-col cols="12" md="4">
                              <validation-provider v-slot="{ errors }" :name="$t('t.Email')" rules="required|email">
                                <v-text-field
                                  v-model="user.email"
                                  :label="$t('t.Email')"
                                  name="Email"
                                  prepend-icon="mdi-email"
                                  type="text"
                                  :error-messages="errors"
                                ></v-text-field>
                              </validation-provider>
                            </v-col>
                          </v-row>
                          <div class="mt-3">
                            <v-btn class="mr-4" color="btnCC white--text" @click="saveGeneralInfo">{{ $t('t.Save') }}
                            </v-btn>
                          </div>
                        </form>
                      </validation-observer>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>{{ $t('t.ChangePassword') }}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <ChangePassword :post="'/api/change_passport/'"/>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
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
import FirstSecondNames from '@/components/FirstSecondNames';
import Phones from '@/components/Phones';
import BirthdayDatePicker from '@/components/BirthdayDatePicker';
import SexType from '@/components/SexType';
import NumberPassport from '@/components/NumberPassport';
import InnCode from '@/components/InnCode';

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
  },
  name: "MyProfile",
  data() {
    return {
      tab: 'tab-GeneralInfo',
      user: {},
      itemsTab: [
        'GeneralInfo',
        'Settings',
      ],
      itemsAbout: {},
      headersSettings: ['ChangeAvatar', 'EditGeneralInfo', 'ChangePassword'],

    }
  },
  mounted() {
    this.getUser()
  },
  methods: {
    async getUser() {
      const data = {
        "first_name": "Max",
        "second_name": "ovr",
        "patronymic": "ser",
        "birthday": this.GlobalFormatDateDMY("1950-01-01"),
        "sex": 0,
        "email": "admin@admin.ru",
        "phone": this.GlobalCustomFormatStr('380503800011', [2,3,3,2,2], ''),
        "additional_phone": '',
        "inn_code": this.GlobalCustomFormatStr("1212102310",[3,3,4],''),
        "type_passport": 0,
        "passport": "ВЦ221122",
        "image": null
      };
      this.user = data;

      this.itemsAbout = {
        'FIO': {
          "FirstName": this.user.first_name,
          "SecondName": this.user.second_name,
          "Patronymic": this.user.patronymic,
        },
        'GeneralInfo': {
          "Birthday": this.user.birthday,
          "Sex": this.user.sex,
        },
        'Contacts': {
          "Email": this.user.email,
          "NumberMobPhone": this.user.phone,
          "AdditionalPhone": this.user.additional_phone,
        },
        'Documents': {
          "InnCode": this.user.inn_code,
          "PassportType": this.user.type_passport,
          "Passport": this.user.passport,
        }
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
            'inn_code': this.$refs.InnCode.innCode,
            'type_passport': this.$refs.NumberPassport.switchTypePassport,
            'passport': this.GlobalGetSymbols(this.$refs.NumberPassport.numberPassport, 'OnlySymbol'),
            'image': null, // TODO: add image cropper
          };

          console.log('data', data)
          // await api.post('api/director/create ', data);
          this.GlobalMixinMessagesSuccess(this.$t('m.CreateUser') + ' ' + data.first_name + ' ' + data.second_name);
        } catch (e) {
          this.GlobalMixinMessagesError(e);
          console.log('error', e)
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
