<template>
  <v-card  elevation="0">
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
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          color="red"
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    name: "ListDirectors",
    data() {
      return {
        search: '',
        headers: [
          {
            text: this.$t('t.FIO'),
            align: 'start',
            sortable: true,
            value: 'name',
          },
          { text: this.$t('t.NumberMobPhone'), value: 'phone' },
          { text: this.$t('t.Email'), value: 'email' },
          { text: this.$t('t.Actions'), value: 'actions', sortable: false },
          // { text: 'Carbs (g)', value: 'carbs' },
          // { text: 'Protein (g)', value: 'protein' },
          // { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            phone: '+38(000)-000-00-00',
            email: 'example@example.ua',
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },

        ],
      }
    },

  }
</script>

<style scoped>

</style>
