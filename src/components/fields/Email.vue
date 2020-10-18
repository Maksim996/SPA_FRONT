<template>
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
</template>

<script>
  export default {
    name: "Email",
    data() {
      return {
        email: this.emailProp,
      }
    },
    props: {
      emailProp: {
        type: String,
        default: ''
      }
    },
  }
</script>
