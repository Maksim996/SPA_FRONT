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
              v-model="computedDateFormatted"
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
        date: this.dateProp,
        openDialog: false,
        locale: process.env.VUE_APP_LOCALE,
        dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10))
      }
    },
    props: {
      dateProp: {
        type: String,
        default: null,
      }
    },
    watch: {
      date () {
        this.dateFormatted = this.formatDate(this.date)
      },
      openDialog() {
        setTimeout(() => (this.$refs.BirthdayPicker.activePicker = 'YEAR'))
      },
    },
    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },
    methods: {
      save(date) {
        this.$refs.dialog.save(date)
      },
      formatDate (date) {
        if (!date) return null;

        const [year, month, day] = date.split('-');
        return `${day}.${month}.${year}`
      },
    },
  }
</script>

<style scoped>

</style>
