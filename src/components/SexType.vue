<template>
  <v-row>
    <v-col cols="12">
      <v-radio-group v-model="switchTypeSex" dense>
        <template v-slot:label>
          <div>{{ $t('t.Sex') }}</div>
        </template>
        <div class="d-flex mt-3">
          <v-radio color="btnCC"
                   dense
                   class="mb-3 mr-5"
                   :label="$t('t.Man')"
                   :value="SEX_TYPE.Man"
          ></v-radio>
          <v-radio color="btnCC"
                   dense
                   class="mb-3"
                   :label="$t('t.Woman')"
                   :value="SEX_TYPE.Woman"
          ></v-radio>
        </div>

      </v-radio-group>
    </v-col>
  </v-row>
</template>

<script>

import {SEX_TYPE} from "@/utils/constants";

export default {
  name: "SexType",
  data() {
    return {
      switchTypeSex: this.sexTypeProp,
      SEX_TYPE: SEX_TYPE,
    }
  },
  props: {
    sexTypeProp: {
      type: Number,
      default: SEX_TYPE.Man
    }
  }
}
</script>

<style scoped>

</style>
