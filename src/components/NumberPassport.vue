<template>
  <v-row>
    <v-col cols="12" md="4">
      <v-row>
        <v-col cols="12">
          <v-radio-group v-model="switchTypePassport" dense>
            <template v-slot:label>
              <div>{{$t('t.PassportType')}}</div>
            </template>
            <div class="d-flex mt-3">
              <v-radio color="btnCC"
                       class="mb-3 mr-3"
                       dense
                       :label="$t('t.OldNumberPassport')"
                       :value="PASSPORT_TYPE.oldNumberPassport"
              ></v-radio>
              <v-radio color="btnCC"
                       class="mb-3"
                       dense
                       :label="$t('t.NewNumberPassport')"
                       :value="PASSPORT_TYPE.newNumberPassport"
              ></v-radio>
            </div>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <validation-provider
            v-show="showOldPassport"
            v-slot="{ errors }"
            :name="$t('t.NumberPassport')"
            rules="required|maskLength:8"
          >
            <v-text-field
              v-model="oldNumberPassport"
              :label="$t('t.NumberPassport')"
              name="NumberPassport"
              prepend-icon="mdi-passport"
              type="text"
              :disabled="!showOldPassport"
              :error-messages="errors"
              v-mask="`ЯЯ-##-##-##`"
              placeholder="MB-00-00-00"
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-show="showNewPassport"
            v-slot="{ errors }"
            :name="$t('t.NumberPassport')"
            rules="required|maskLength:9"
          >
            <v-text-field
              v-model="newNumberPassport"
              :label="$t('t.NumberPassport')"
              name="NumberPassport"
              prepend-icon="mdi-passport-biometric"
              type="text"
              :disabled="!showNewPassport"
              :error-messages="errors"
              v-mask="`###-###-###`"
              placeholder="000-000-000"
            ></v-text-field>
          </validation-provider>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" md="4">
      <template v-if="showOldPassport">
        <v-img src="images/passports/oldPassport.jpg" aspect-ratio="3" contain></v-img>
      </template>
      <template v-if="showNewPassport">
        <v-img src="images/passports/newPassport.jpg" aspect-ratio="3" contain></v-img>
      </template>
    </v-col>
  </v-row>
</template>


<script>
  import {PASSPORT_TYPE} from '@/utils/constants';

  export default {
    name: "NumberPassport",
    data() {
      return {
        switchTypePassport: PASSPORT_TYPE.oldNumberPassport,
        oldNumberPassport: '',
        newNumberPassport: '',
        numberPassport: '',
        PASSPORT_TYPE: PASSPORT_TYPE,
        showOldPassport: true,
        showNewPassport: false
      }
    },
    watch: {
      oldNumberPassport(val) {
        this.oldNumberPassport = val.toUpperCase();
        this.setNumberPassport(this.switchTypePassport);
      },
      newNumberPassport() {
        this.setNumberPassport(this.switchTypePassport);
      },
      switchTypePassport(val) {
        this.setNumberPassport(val);
      },
    },
    mounted() {
      this.setNumberPassport(this.switchTypePassport);
    },
    methods: {
      setNumberPassport(val) {
        switch (val) {
          case PASSPORT_TYPE.oldNumberPassport:
            this.showOldPassport = true;
            this.showNewPassport = false;
            this.numberPassport = this.GlobalGetSymbols(this.oldNumberPassport, PASSPORT_TYPE.oldNumberPassport);
            break;
          case PASSPORT_TYPE.newNumberPassport:
            this.showOldPassport = false;
            this.showNewPassport = true;
            this.numberPassport = this.GlobalGetSymbols(this.newNumberPassport, PASSPORT_TYPE.newNumberPassport);
            break;
        }
      }
    }
  }

</script>

<style scoped>

</style>
