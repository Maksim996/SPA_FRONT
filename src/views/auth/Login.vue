<template>

  <v-row
    class="purple lighten-4"
  >
    <v-container
    >
      <v-row align="center"
             justify="center"
      >
        <v-col cols="12"
               sm="8"
               md="4"
        >
          <v-img v-if="logo" :src="logo"></v-img>
        </v-col>
      </v-row>
      <v-row align="center"
             justify="center"
             class="mt-16"
      >
        <v-col cols="12"
               sm="8"
               md="4"
        >
          <v-card >
          <v-toolbar
            class="purple darken-2"
            dark
            dense
            flat
          >
            <v-toolbar-title>{{ $t('t.LoginIn') }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-title>
              {{ $t('t.' + type ) }}
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <ValidationObserver ref="observer" v-slot="{ validate, reset }">
              <v-form>
                <validation-provider v-if="type === GlobalTypePersonnel" v-slot="{ errors }" :name="$t('t.Email')" rules="required|email">
                  <v-text-field
                    v-model="email"
                    :label="$t('t.Email')"
                    name="Email"
                    prepend-icon="mdi-email"
                    type="text"
                    :error-messages="errors"
                  ></v-text-field>
                </validation-provider>
                <validation-provider v-if="type === GlobalTypePatient " v-slot="{ errors }" :name="$t('t.NumberMobPhone')" rules="required">
                  <v-text-field
                    v-model="phone"
                    :label="$t('t.NumberMobPhone')"
                    name="Phone"
                    prepend-icon="mdi-cellphone-android"
                    :error-messages="errors"
                    type="text"
                  ></v-text-field>
                </validation-provider>
                <validation-provider v-slot="{ errors }" :name="$t('t.Password')" rules="required|min:8">
                  <v-text-field
                    :label="$t('t.Password')"
                    name="Password"
                    prepend-icon="mdi-lock"
                    :error-messages="errors"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </validation-provider>
              </v-form>
            </ValidationObserver>
          </v-card-text>
          <v-card-actions>
            <v-btn text small color="purple darken-2 white--text">{{$t('t.ForgotPassword')}}</v-btn>
            <v-spacer></v-spacer>
            <v-btn
              color="purple darken-2 white--text"
              @click="authUser"
            >{{$t('t.LoginIn')}}</v-btn>
          </v-card-actions>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        logo: process.env.VUE_APP_LOGO,
        type: 'Patient',//Personnel
        phone: '',
        email: '',
        password: '',
      }
    },
    methods: {
      async authUser() {
        const valid = await this.$refs.observer.validate('value').then((res) => res);
        console.log(valid);
      }
    }
  }
</script>

<style scoped>

</style>
