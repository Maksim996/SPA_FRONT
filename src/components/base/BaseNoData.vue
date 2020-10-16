<template>
  <div class="no-data">
    <span class="text-center">
      {{$t('t.NoData')}}
    </span>
  </div>
</template>

<script>
export default {
  name: "BaseNoData",
}
</script>

<style scoped>
  .no-data{
    width: 100%;
    text-align: center;
    font-weight: bold;
  }
</style>
