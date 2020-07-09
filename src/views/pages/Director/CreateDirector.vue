<template>
  <v-container>
    <validation-observer ref="formValidate" v-slot="{ validate, reset }">
      <form>
        <FirstSecondNames ref="FirstSecondNames"></FirstSecondNames>
        <Phones ref="Phones"></Phones>
        <BirthdayDatePicker ref="BirthdayDatePicker"></BirthdayDatePicker>

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

              <v-btn class="mr-4" @click="submitForm">submit</v-btn>
        <!--      <v-btn @click="clear">clear</v-btn>-->
      </form>
    </validation-observer>
  </v-container>

</template>

<script>
  import FirstSecondNames from "@/components/FirstSecondNames";
  import BirthdayDatePicker from "@/components/BirthdayDatePicker";
  import Phones from "@/components/Phones";

  export default {
    components:{
      FirstSecondNames,
      BirthdayDatePicker,
      Phones,
    },
    name: "CreateDirector",
    data() {
      return {
        date: '',
        modal: false,
        email: '',
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

</style>
