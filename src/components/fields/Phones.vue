<template>
  <v-row>
    <v-col
      cols="12"
      md="4"
    >
      <validation-provider v-slot="{ errors }" :name="$t('t.NumberMobPhone')" rules="required|phone">
        <v-text-field
          v-model="phone"
          class="phone"
          :label="$t('t.NumberMobPhone')"
          name="Phone"
          placeholder="+38(0**)-***-**-**"
          prepend-icon="mdi-cellphone-android"
          :error-messages="errors"
          type="text"
          v-mask="GlobalMaskPhone"
        ></v-text-field>
      </validation-provider>
    </v-col>
    <v-col
      cols="12"
      md="4"
    >
      <validation-provider
        v-slot="{ errors }"
        :name="$t('t.Additional') + ' ' +  $t('t.NumberMobPhone')"
        rules="phone"
      >
        <v-text-field
          v-model="additionalPhone"
          class="phone"
          :label="$t('t.Additional') + ' ' +  $t('t.NumberMobPhone')"
          name="Phone"
          placeholder="+38(0**)-***-**-**"
          prepend-icon="mdi-cellphone-android"
          :error-messages="errors"
          type="text"
          v-mask="GlobalMaskPhone"
        ></v-text-field>
      </validation-provider>
    </v-col>
  </v-row>

</template>

<script>
  export default {
    name: "Phones",
    data() {
      return {
        phone: this.GlobalCustomFormatStr(this.phoneProp),
        additionalPhone: this.GlobalCustomFormatStr(this.additionalPhoneProp),
      }
    },
    watch: {
      phoneProp(v) {
        this.phone = v;
      },
      additionalPhoneProp(v) {
        this.additionalPhone = v;
      }
    },
    props: {
      phoneProp: {
        type: String,
        default: '',
      },
      additionalPhoneProp: {
        type: String,
        default: '',
      }
    }
  }
</script>

<style scoped>

</style>
