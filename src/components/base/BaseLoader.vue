<template>
  <v-overlay :value="true" :absolute="true">
    <v-progress-circular
      color="headerCC"
      indeterminate
      size="80"
      width="7"
    ></v-progress-circular>
  </v-overlay>
</template>

<script>
export default {
  name: "BaseLoader",
}
</script>
