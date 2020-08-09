<template>
  <v-row>
    <v-col
      cols="12"
      md="4"
    >
      <validation-provider
        v-slot="{ errors }" :name="$t('t.FirstName')"
        rules="required"
      >
        <v-text-field
          v-model="firstName"
          :error-messages="errors"
          :label="$t('t.FirstName')"
        ></v-text-field>
      </validation-provider>
    </v-col>
    <v-col
      cols="12"
      md="4"
    >
      <validation-provider
        v-slot="{ errors }" :name="$t('t.SecondName')"
        rules="required"
      >
        <v-text-field
          v-model="secondName"
          :error-messages="errors"
          :label="$t('t.SecondName')"
        ></v-text-field>
      </validation-provider>
    </v-col>
    <v-col
      cols="12"
      md="4"
    >
      <validation-provider
        v-slot="{ errors }" :name="$t('t.Patronymic')"
        rules="required"
      >
        <v-text-field
          v-model="patronymic"
          :error-messages="errors"
          :label="$t('t.Patronymic')"
        ></v-text-field>
      </validation-provider>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: "FirstSecondNames",
    data () {
      return {
        firstName: this.firstNameProp,
        secondName: this.secondNameProp,
        patronymic: this.patronymicProp,
      }
    },
    props: {
      firstNameProp: {
        type: String,
        default: '',
      },
      secondNameProp: {
        type: String,
        default: '',
      },
      patronymicProp: {
        type: String,
        default: '',
      },
    },

  }
</script>

<style scoped>

</style>
