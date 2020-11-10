<template>
  <validation-observer ref="formDirector" v-slot="{ validate, reset }">
    <form v-if="dataProps">
      <FirstSecondNames ref="FirstSecondNames"
                        :first-name-prop="dataProps.first_name"
                        :second-name-prop="dataProps.second_name"
                        :patronymic-prop="dataProps.patronymic"
      />
      <Phones ref="Phones" :phone-prop="dataProps.phone" :additional-phone-prop="dataProps.additional_phone" />
      <BirthdayDatePicker ref="BirthdayDatePicker" :date-prop="dataProps.birthday" />
      <SexType ref="SexType" :sex-type-prop="dataProps.sex"/>
      <NumberPassport ref="NumberPassport" :passport-type-prop="dataProps.type_passport" :passport-prop="dataProps.passport"/>
      <InnCode ref="InnCode" :inn-code-prop="dataProps.inn_code" />
      <Email ref="email" :email-prop="dataProps.email"/>

    </form>
  </validation-observer>

</template>

<script>
  import FirstSecondNames from '@/components/fields/FirstSecondNames';
  import BirthdayDatePicker from '@/components/fields/BirthdayDatePicker';
  import Phones from '@/components/fields/Phones';
  import NumberPassport from '@/components/fields/NumberPassport';
  import InnCode from '@/components/fields/InnCode';
  import SexType from '@/components/fields/SexType';
  import Email from '@/components/fields/Email';

  import {SEX_TYPE} from '@/utils/constants';

  export default {
    components:{
      FirstSecondNames,
      BirthdayDatePicker,
      Phones,
      NumberPassport,
      InnCode,
      SexType,
      Email,
    },
    name: "FormDirector",
    data() {
      return {
        date: '',
        modal: false,
        switchTypeSex: SEX_TYPE.Man,
        SEX_TYPE: SEX_TYPE,
      }
    },
    props: {
      dataProps: {
        type: Object,
        default: null
      }
    },

    methods: {

      async getData() {
        const valid = await this.$refs.formDirector.validate()
          .then( (res) => res ).catch(function (e) {
            this.GlobalMixinMessagesError(e)
          });

        if (valid) {
          return {
            'first_name': this.$refs.FirstSecondNames.firstName,
            'second_name': this.$refs.FirstSecondNames.secondName,
            'patronymic': this.$refs.FirstSecondNames.patronymic,
            'birthday': this.$refs.BirthdayDatePicker.date,
            'sex': this.$refs.SexType.switchTypeSex,
            'email': this.$refs.email.email,
            'phone': this.GlobalGetNumberPhone(this.$refs.Phones.phone),
            'additional_phone': this.GlobalGetNumberPhone(this.$refs.Phones.additionalPhone),
            'inn_code': this.GlobalGetSymbols(this.$refs.InnCode.innCode, 'OnlySymbols', '-'),
            'type_passport': this.$refs.NumberPassport.switchTypePassport,
            'passport': this.GlobalGetSymbols(this.$refs.NumberPassport.numberPassport, 'OnlySymbols'),
            'image': null, // TODO: add image cropper
          };
        } else {
          this.GlobalMixinMessagesError(this.$t('m.FormIsNotCompletedCorrectly'));
        }
      },
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
