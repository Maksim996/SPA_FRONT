<template>
  <v-container fluid>
    <v-row class="justify-center">
      <v-col class="col-lg-8 col-12">
        <template v-for="itemHeader in items">
          <v-row class="items_line_info" v-for="(item, key) in itemHeader">
            <v-col class="col-lg-3 col-5">
              <p class="font-weight-medium">{{$t(`t.${key}`) }}:</p>
            </v-col>
            <v-col class="col-lg-9 col-7">
              <template v-if="key === 'Sex'">
                {{ $t(`t.${GlobalChangeSex(item)}`)}}
              </template>
              <template v-else-if="key === 'PassportType'">
                <v-icon> {{item ? 'mdi-passport-biometric': 'mdi-passport' }}</v-icon>
              </template>
              <template v-else>
                {{item}}
              </template>
            </v-col>
          </v-row>
          <v-divider/>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
        name: "AboutInfoProfile",
      props: {
        items: {
          type: Object,
          default: null
        }
      }
    }
</script>

<style scoped>
  .items_line_info p {
    margin-bottom: 0;
  }
  .items_line_info:hover {
    cursor: pointer;
    background: rgba(123,31,162,0.1);
  }
</style>
