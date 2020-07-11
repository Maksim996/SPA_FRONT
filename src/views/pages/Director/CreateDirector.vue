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

        <NumberPassport ref="NumberPassport"></NumberPassport>

        <v-row>
          <v-col cols="12" md="4">
            <validation-provider v-slot="{ errors }" :name="$t('t.Inn_code')" rules="numeric">
              <v-text-field
                class="in"
                v-model="InnCode"
                :label="$t('t.Inn_code')"
                name="Inn_code"
                prepend-icon="mdi-email"
                type="number"
                :error-messages="errors"
              ></v-text-field>
            </validation-provider>
          </v-col>
        </v-row>
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
  import FirstSecondNames from "@/components/FirstSecondNames";
  import BirthdayDatePicker from "@/components/BirthdayDatePicker";
  import Phones from "@/components/Phones";
  import NumberPassport from "@/components/NumberPassport";

  export default {
    components:{
      FirstSecondNames,
      BirthdayDatePicker,
      Phones,
      NumberPassport,
    },
    name: "CreateDirector",
    data() {
      return {
        date: '',
        modal: false,
        email: '',
        InnCode: '',
      }
    },
    methods: {
      async submitForm() {

        const data = {
          'first_name': this.$refs.FirstSecondNames.firstName,
          'second_name': this.$refs.FirstSecondNames.secondName,
          'patronimic': this.$refs.FirstSecondNames.patronimic,
          'birthday': this.$refs.BirthdayDatePicker.date,
          'email': this.email,
          'phone': this.$refs.Phones.phone,
          'additional_phone': this.$refs.Phones.additionalPhone,
          'inn_code': this.InnCode,
          'numberPassport': this.$refs.NumberPassport.numberPassport
        };
        console.log(data);
        const valid = await this.$refs.formValidate.validate().then( (res) => res );
        console.log('valid',valid);
        valid ? console.log('data',data) : console.log('no data')
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
