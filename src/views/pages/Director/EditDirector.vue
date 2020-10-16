<template>
  <v-container>
    <template v-if="dataDirector">
      <v-row>
        <div>
          <v-sheet class="font-weight-medium text-h4 text-lg-h4 text-md-h5 mb-5 text-md-center" color="headerCC--text">{{$t('t.CreateDirector')}}</v-sheet>
        </div>
      </v-row>
      <FormDirector ref="form" :dataProps="dataDirector"/>

      <div class="mt-3">
        <v-btn color="btnCC white--text" class="mr-4" @click="submitForm">{{$t('t.Save')}}</v-btn>
      </div>
    </template>
    <base-loader v-else></base-loader>

  </v-container>

</template>

<script>
import FormDirector from "@/views/pages/Director/FormDirector";
import api from '@/api/index';

export default {
  name: "EditDirector",
  data() {
    return {
      dataDirector: null,
      user_id: 0
    }
  },
  components: {
    FormDirector,
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {

      this.user_id = this.$route.params.id;

      if (this.user_id) {
        try {
          const {data} = await api.show('api/director', this.user_id);

          this.dataDirector = data.data;

        } catch (error) {
          this.GlobalMixinMessagesError(error.response)
        }
      }
    },

    async submitForm() {
      const data = await this.$refs.form.getData()

      if (data) {
        try {
          const response = await api.update('api/director', this.user_id, data)
          this.GlobalMixinMessagesSuccess(response);
          this.$router.go(-1);
        } catch (error) {
          this.GlobalMixinMessagesError(error.response);
        }
      }
    }
  },
}
</script>
