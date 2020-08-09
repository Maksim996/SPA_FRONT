<template>
  <v-row>
    <v-col cols="12" md="4">
      <validation-provider v-slot="{ errors }" :name="$t('t.InnCode')" rules="required|maskLength:10,-">
        <v-text-field
          v-model="innCode"
          :label="$t('t.InnCode')"
          name="Inn_code"
          prepend-icon="mdi-barcode"
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
        innCode: this.innCodeProp,
      }
    },
    props: {
      innCodeProp: {
        type: String,
        default: '',
      }
    }
  }
</script>

<style scoped>

</style>
