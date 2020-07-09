<template>
  <v-row>
    <v-col cols="12"
           md="4"
    >
      <validation-provider
        v-slot="{ errors }" :name="$t('t.Birthday')"
        :rules="'required'"
      >
        <v-dialog
          ref="dialog"
          :close-on-content-click="false"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              :label="$t('t.Birthday')"
              prepend-icon="mdi-calendar-month"
              :error-messages="errors[0]"
              readonly
              v-bind="attrs"
              v-on="on"
              @click="openDialog = !openDialog"
            ></v-text-field>
          </template>
          <v-date-picker
            :locale="locale"
            ref="BirthdayPicker"
            v-model="date"
            :max="new Date().toISOString().substr(0, 10)"
            min="1950-01-01"
            @change="save"
          ></v-date-picker>
        </v-dialog>
      </validation-provider>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: "BirthdayDatePicker",
    data() {
      return {
        date: null,
        openDialog: false,
        locale: process.env.VUE_APP_LOCALE
      }
    },
    watch: {
      openDialog() {
        setTimeout(() => (this.$refs.BirthdayPicker.activePicker = 'YEAR'))
      },
    },
    methods: {
      save(date) {
        this.$refs.dialog.save(date)
      },

    },
  }
</script>

<style scoped>

</style>
