<template>
  <v-container fluid>
    <v-row class="justify-center">
      <v-col class="col-lg-8 col-12">
        <v-divider/>
        <template v-for="(value, header) in informationsAboutUser">
<!--          {{header}} : {{value}}-->
          <v-row v-if="value || value === ''" class="items_line_info" :key="header">
            <v-col class="col-lg-3 col-5">
              <p class="font-weight-medium">{{$t(`t.${header}`) }}:</p>
            </v-col>
            <v-col class="col-lg-9 col-7">
              <template v-if="header === 'Sex'">
                {{ $t(`t.${GlobalChangeSex(value)}`)}}
              </template>
              <template v-else>
                {{value}}
              </template>
            </v-col>
          </v-row>
          <v-divider v-if="value || value === ''"/>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
      name: "AboutInfoProfile",
      props: {
        informationsAboutUser: {
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
