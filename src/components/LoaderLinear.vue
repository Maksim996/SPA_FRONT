<template>
  <div class="loader-table">
    <v-progress-linear
      indeterminate
      color="cyan"
    ></v-progress-linear>
    <span>{{$t('m.Loading')}}</span>
  </div>
</template>

<script>
export default {
name: "LoaderLinear"
}
</script>

<style scoped>
  .loader-table {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
