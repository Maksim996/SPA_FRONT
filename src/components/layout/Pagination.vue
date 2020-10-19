<template>
  <v-container class="max-width" v-if="data">
    <v-pagination
      v-model="page"
      class="my-4"
      color="btnCC"
      :total-visible="PAGINATION.TotalVisible"
      :length="Math.ceil(data.total / Number(data.per_page))"
    ></v-pagination>
  </v-container>
</template>

<script>
import { PAGINATION } from '@/utils/constants'

export default {
  name: "Pagination",
  props: ['data'],
  data(){
    return {
      page: this.$route.query.page ? Number(this.$route.query.page) : 1,
      PAGINATION,
    }
  },
  mounted() {
  },
  watch: {
    page() {
      console.log(this.data.total,this.data )
      const query = this.page ? `?page=${this.page}` : '';

      this.$emit('update', query);

      this.$router.replace({query: {
          page: this.page
        }});
    }
  }
}
</script>

<style scoped>

</style>
