<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col
      cols="12"
      sm="8"
      md="4"
    >
      <v-card class="elevation-12">
        <v-toolbar
          color="primary"
          dark
          flat
        >
          <v-toolbar-title>{{$t('t.Register')}}</v-toolbar-title>
          <v-spacer></v-spacer>

        </v-toolbar>
        <v-card-text>
          <ValidationObserver ref="observer" v-slot="{ validate, reset }">
            <form>
              <validation-provider v-slot="{ errors }" name="Name" rules="required|max:10">
                <v-text-field
                  v-model="name"
                  :counter="10"
                  :error-messages="errors"
                  :label="$t('t.Name')"
                  prepend-icon="mdi-account"
                  type="text"
                  required
                ></v-text-field>
              </validation-provider>
              <validation-provider v-slot="{ errors }" name="email" rules="required|email">
                <v-text-field
                  v-model="email"
                  :error-messages="errors"
                  required
                  :label="$t('t.Email')"
                  prepend-icon="mdi-account"
                  type="text"
                ></v-text-field>
              </validation-provider>
              <validation-provider v-slot="{ errors }" :name="$t('t.Password')" rules="required|min:8">
                <v-text-field
                  v-model="password"
                  :error-messages="errors"
                  required
                  :label="$t('t.Password')"
                  prepend-icon="mdi-lock"
                  type="password"
                ></v-text-field>
              </validation-provider>
            </form>
          </ValidationObserver>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="registerUser()" color="primary">{{ $t('t.Register') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import api from '@/api';

  export default {
    name: "Register",
    data: () => ({
      name: '',
      email: '',
      password: '',
    }),
    methods: {
      async registerUser() {
        const valid = await this.$refs.observer.validate('value').then((res) => res);
        console.log(valid)
        if (valid) {
          const data = {
            name: this.name,
            email: this.email,
            password: this.password,
          };
          api.post(process.env.VUE_APP_BASE_URL + '/api/register', data);
        }
      }
    }
  }
</script>

<style scoped>

</style>
