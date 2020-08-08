<template>
  <v-row>
    <v-col cols="12" md="4">
      <validation-provider v-slot="{ errors }" :name="$t('t.Inn_code')" rules="required|maskLength:10">
        <v-text-field
          v-model="InnCode"
          :label="$t('t.Inn_code')"
          name="Inn_code"
          prepend-icon="mdi-email"
          type="text"
          :error-messages="errors"
          v-mask="`###-###-####`"
          placeholder="000-000-0000"
        ></v-text-field>
      </validation-provider>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: "InnCode",
    data() {
      return {
        InnCode: '',
      }
    }
  }
</script>

<style scoped>

</style>
