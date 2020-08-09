<template>
  <v-container>
    <v-row>
      <div>
        <v-sheet class="font-weight-medium text-h4 text-lg-h4 text-md-h5 mb-5 text-md-center" color="headerCC--text">{{$t('t.CreateDirector')}}</v-sheet>
      </div>
    </v-row>
    <validation-observer ref="formValidate" v-slot="{ validate, reset }">
      <form>
        <FirstSecondNames ref="FirstSecondNames" />
        <Phones ref="Phones" />
        <BirthdayDatePicker ref="BirthdayDatePicker" />
        <SexType ref="SexType" />
        <NumberPassport ref="NumberPassport" />

        <InnCode ref="InnCode" />

        <v-row>
          <v-col cols="12" md="4">
            <validation-provider v-slot="{ errors }" :name="$t('t.Email')" rules="required|email">
              <v-text-field
                v-model="email"
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
          <v-btn color="btnCC white--text" class="mr-4" @click="submitForm">{{$t('t.Create')}}</v-btn>
        </div>
      </form>
    </validation-observer>
  </v-container>

</template>

<script>
  import api from '@/api/index';
  import FirstSecondNames from '@/components/FirstSecondNames';
  import BirthdayDatePicker from '@/components/BirthdayDatePicker';
  import Phones from '@/components/Phones';
  import {SEX_TYPE} from '@/utils/constants';
  import NumberPassport from '@/components/NumberPassport';
  import InnCode from '@/components/InnCode';
  import SexType from '@/components/SexType'

  export default {
    components:{
      FirstSecondNames,
      BirthdayDatePicker,
      Phones,
      NumberPassport,
      InnCode,
      SexType,
    },
    name: "CreateDirector",
    data() {
      return {
        date: '',
        modal: false,
        email: '',
        switchTypeSex: SEX_TYPE.Man,
        SEX_TYPE: SEX_TYPE,
      }
    },
    methods: {
      async submitForm() {

        const valid = await this.$refs.formValidate.validate()
          .then( (res) => res )
          .catch((e)=> this.GlobalMixinMessagesError(e));

        if (valid) {
          try {
            const data = {
              'first_name': this.$refs.FirstSecondNames.firstName,
              'second_name': this.$refs.FirstSecondNames.secondName,
              'patronymic': this.$refs.FirstSecondNames.patronymic,
              // 'birthday': this.$refs.BirthdayDatePicker.date,
              'birthday': '10.02.2010',
              'sex' : this.$refs.SexType.switchTypeSex,
              'email': this.email,
              'phone': this.GlobalGetNumberPhone(this.$refs.Phones.phone),
              'additional_phone': this.GlobalGetNumberPhone(this.$refs.Phones.additionalPhone),
              'inn_code': this.InnCode,
              'type_passport' : this.$refs.NumberPassport.switchTypePassport,
              'passport': this.$refs.NumberPassport.numberPassport,
              'image': null, // TODO: add image cropper
            };
            // const data = {
            //   "first_name": "Max",
            //   "second_name": "ovr",
            //   "patronymic": "ser",
            //   "birthday": "10.02.2010",
            //   "sex" : 1,
            //   "email": "admin@admin.ru",
            //   "phone": "380503332211",
            //   "additional_phone": '380503332211',
            //   "inn_code": "1212102310",
            //   "type_passport" : 1,
            //   "passport": "ВЦ-221122",
            //   "image": null
            // };
            console.log('data',data)
            await api.post('api/director/create ', data);
            this.GlobalMixinMessagesSuccess( this.$t('m.CreateUser') + ' ' + data.first_name + ' ' + data.second_name );
          } catch (e) {
            this.GlobalMixinMessagesError(e);
            console.log('error', e)
          }
        } else {
          this.GlobalMixinMessagesError(this.$t('m.FormIsNotCompletedCorrectly'));
        }
      }
    }
  }
</script>

<style scoped>
  ::v-deep input::-webkit-outer-spin-button,
  ::v-deep input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .v-input .v-input__control .v-input__slot .v-text-field__slot input::-webkit-outer-spin-button,
  .v-input .v-input__control .v-input__slot .v-text-field__slot input::-webkit-inner-spin-button
  {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
