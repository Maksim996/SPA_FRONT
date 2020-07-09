<template>
  <v-container>
    <validation-observer ref="formValidate" v-slot="{ validate, reset }">
      <form>
        <FirstSecondNames ref="FirstSecondNames"></FirstSecondNames>
        <BirthdayDatePicker ref="BirthdayDatePicker"></BirthdayDatePicker>


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

  <!--  <validation-provider></validation-provider>-->
</template>

<script>
  import FirstSecondNames from "@/components/FirstSecondNames";
  import BirthdayDatePicker from "@/components/BirthdayDatePicker";

  export default {
    components:{
      FirstSecondNames,
      BirthdayDatePicker,
    },
    name: "CreateDirector",
    data() {
      return {
        date: '',
        modal: false,
      }
    },
    methods: {
      async submitForm() {

        const data = {
          'first_name' : this.$refs.FirstSecondNames.firstName,
          'second_name' : this.$refs.FirstSecondNames.secondName,
          'patronimic' : this.$refs.FirstSecondNames.patronimic,
          'birthday' : this.$refs.BirthdayDatePicker.date,
        };

        const valid = await this.$refs.formValidate.validate().then( (res) => res );
        console.log('valid',valid);
        valid ? console.log('data',data) : console.log('no data')
      }
    }
  }
</script>

<style scoped>

</style>
