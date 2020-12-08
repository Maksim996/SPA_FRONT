<template>
  <v-card elevation="0">
    <v-card-title
      class="font-weight-medium text-h5 text-lg-h4 text-md-h5 mb-5 headerCC--text"
    >
      {{ $t('t.ListDirectors') }}
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        :label="$t('t.Search')"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <template v-for="header in headers">
              <th :class="header.classes">
                {{header.text}}
              </th>
            </template>
          </tr>
        </thead>
        <tbody v-if="items.length">
          <tr
            v-for="item in items"
            :key="item.name"
          >
            <template v-for="name in headers">
              <td v-if="name.value !== 'actions'">{{ item[name.value] }}</td>
              <td v-else>
                <v-icon
                  class="mr-2"
                  @click="editItem( item )"
                >
                  mdi-pencil
                </v-icon>
                <v-icon
                  color="red"
                  @click="deleteItem(item)"
                >
                  mdi-delete
                </v-icon>
              </td>
            </template>
          </tr>
        </tbody>
        <tbody v-else></tbody>
      </template>
    </v-simple-table>

    <template v-if="!items.length">
      <base-loader-linear/>
    </template>

    <Pagination :data="pagination" @update="getItems"/>
  </v-card>
</template>

<script>
  import api from '@/api'
  import Pagination from "@/components/layout/Pagination";

  export default {
    name: "ListDirectors",
    components: {
      Pagination
    },
    data() {
      return {
        search: '',
        headers: [
          {
            text: this.$t('t.FIO'),
            classes: 'start',
            value: 'full_name',
          },
          {text: this.$t('t.NumberMobPhone'), value: 'phone_format'},
          {text: this.$t('t.Email'), value: 'email'},
          {text: this.$t('t.Actions'), value: 'actions'},
        ],
        items: [],
        pagination: null,
      }
    },
    created() {
      this.getItems(this.$route.query.page ? `?page=${this.$route.query.page}` : '');
    },
    methods: {
      async getItems(query = '') {
        const { data } = await api.get('api/director' + query);
        const {data:user, meta:pagination } = data;

        this.items = user;
        this.pagination = pagination;
      },
      async editItem(item) {
          this.$router.push(`/director/edit/${item.id}`);
      },
      async deleteItem(item) {
        this.$swal({
          title: this.$t('m.AreYouSure'),
          text: this.$t('m.UserBeDeactivated'),
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: this.$t('t.Yes'),
          cancelButtonText: this.$t('t.No')
        }).then((result) => {
          if (result.value) {
            const success = api.patch('api/director/active/', item.id);
            if (success)
              this.GlobalMixinMessagesSuccess(this.$t('m.DeactivateUser'));
            else
              this.GlobalMixinMessagesError($t('m.UnknownError'));
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
