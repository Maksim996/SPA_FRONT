<template>
  <v-container>
    <v-row>
      <div>
        <v-sheet class="font-weight-medium text-h4 text-lg-h4 text-md-h5 mb-5 text-md-center" color="headerCC--text">{{$t('t.CreateDirector')}}</v-sheet>
      </div>
    </v-row>
    <validation-observer ref="formValidate" v-slot="{ validate, reset }">
      <form>
        <FirstSecondNames ref="FirstSecondNames"></FirstSecondNames>
        <Phones ref="Phones"></Phones>
        <BirthdayDatePicker ref="BirthdayDatePicker"></BirthdayDatePicker>
        <v-row>
          <v-col cols="12">
            <v-radio-group v-model="switchTypeSex" dense>
              <template v-slot:label>
                <div>{{$t('t.Sex')}}</div>
              </template>
              <div class="d-flex mt-3">
                <v-radio color="btnCC"
                         dense
                         class="mb-3 mr-5"
                         :label="$t('t.Man')"
                         :value="SEX_TYPE.Man"
                ></v-radio>
                <v-radio color="btnCC"
                         dense
                         class="mb-3"
                         :label="$t('t.Woman')"
                         :value="SEX_TYPE.Woman"
                ></v-radio>
              </div>

            </v-radio-group>
          </v-col>
        </v-row>
        <NumberPassport ref="NumberPassport"></NumberPassport>

        <InnCode ref="InnCode"></InnCode>

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


        <!--      <v-text-field-->
        <!--        v-model="email"-->
        <!--        :error-messages="emailErrors"-->
        <!--        label="E-mail"-->
        <!--        required-->
        <!--        @input="$v.email.$touch()"-->
        <!--        @blur="$v.email.$touch()"-->
        <!--      ></v-text-field>-->
        <!--      <v-select-->
        <!--        v-model="select"-->
        <!--        :items="items"-->
        <!--        :error-messages="selectErrors"-->
        <!--        label="Item"-->
        <!--        required-->
        <!--        @change="$v.select.$touch()"-->
        <!--        @blur="$v.select.$touch()"-->
        <!--      ></v-select>-->

              <v-btn color="btnCC white--text" class="mr-4" @click="submitForm">{{$t('t.Create')}}</v-btn>
        <!--      <v-btn @click="clear">clear</v-btn>-->
      </form>
    </validation-observer>
  </v-container>

</template>

<script>
  import api from '@/api/index';
  import FirstSecondNames from "@/components/FirstSecondNames";
  import BirthdayDatePicker from "@/components/BirthdayDatePicker";
  import Phones from "@/components/Phones";
  import {SEX_TYPE} from '@/utils/constants';
  import NumberPassport from "@/components/NumberPassport";
  import InnCode from "@/components/InnCode";

  export default {
    components:{
      FirstSecondNames,
      BirthdayDatePicker,
      Phones,
      NumberPassport,
      InnCode,
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
              'birthday': this.$refs.BirthdayDatePicker.date,
              'sex' : this.switchTypeSex,
              'email': this.email,
              'phone': this.GlobalGetNumberPhone(this.$refs.Phones.phone),
              'additional_phone': this.GlobalGetNumberPhone(this.$refs.Phones.additionalPhone),
              'inn_code': this.InnCode,
              'type_passport' : this.$refs.NumberPassport.switchTypePassport,
              'passport': this.$refs.NumberPassport.numberPassport,
              'image': null, // TODO: add image cropper
            };
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
