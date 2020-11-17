<template>
  <v-container>
    <v-row>
      <TitlePage :title="$t('t.CreateDirector')"/>
    </v-row>
    <validation-observer ref="createDirector" v-slot="{ validate, reset }">
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
  import FirstSecondNames from '@/components/fields/FirstSecondNames';
  import BirthdayDatePicker from '@/components/fields/BirthdayDatePicker';
  import Phones from '@/components/fields/Phones';
  import {SEX_TYPE} from '@/utils/constants';
  import NumberPassport from '@/components/fields/NumberPassport';
  import InnCode from '@/components/fields/InnCode';
  import SexType from '@/components/fields/SexType';
  import TitlePage from '@/components/TitlePage';

  export default {
    components:{
      FirstSecondNames,
      BirthdayDatePicker,
      Phones,
      NumberPassport,
      InnCode,
      SexType,
      TitlePage,
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

        const valid = await this.$refs.createDirector.validate()
          .then( (res) => res )
          .catch((e)=> this.GlobalMixinMessagesError(e));

        if (valid) {
          try {
            const data = {
              'first_name': this.$refs.FirstSecondNames.firstName,
              'second_name': this.$refs.FirstSecondNames.secondName,
              'patronymic': this.$refs.FirstSecondNames.patronymic,
              'birthday': this.$refs.BirthdayDatePicker.date,
              'sex' : this.$refs.SexType.switchTypeSex,
              'email': this.email,
              'phone': this.GlobalGetNumberPhone(this.$refs.Phones.phone),
              'additional_phone': this.GlobalGetNumberPhone(this.$refs.Phones.additionalPhone),
              'inn_code': this.GlobalGetSymbols(this.$refs.InnCode.innCode, 'OnlySymbols', '-'),
              'type_passport' : this.$refs.NumberPassport.switchTypePassport,
              'passport': this.GlobalGetSymbols(this.$refs.NumberPassport.numberPassport, 'OnlySymbols'),
              'image': null, // TODO: add image cropper
            };

            await api.post('api/director/create ', data);
            this.GlobalMixinMessagesSuccess( this.$t('m.CreateUser') + ' ' + data.first_name + ' ' + data.second_name );
            this.GlobalMixinGoToPath('ListDirectors');
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
