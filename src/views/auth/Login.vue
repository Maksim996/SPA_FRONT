<template>

  <v-row v-if="!isLogged" class="fill-height h-100 w-100">
    <v-container>
      <v-row class="switch-type">
        <v-btn
          color="btnCC white--text"
          @click="switchType"
        >
          {{$t('t.'+ switchName)}}
        </v-btn>
      </v-row>
      <v-row align="center"
             justify="center"
      >
        <v-col cols="8"
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
               md="6"
               lg="4"
        >
          <v-card >
          <v-toolbar
            class="headerCC"
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
              <form @submit.prevent="handleSubmit(authUser)" v-on:keyup.enter="authUser">
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
                <validation-provider v-if="type === GlobalTypePatient " v-slot="{ errors }" :name="$t('t.NumberMobPhone')" rules="required|phone">
                  <v-text-field
                    v-model="phone"
                    class="phone"
                    :label="$t('t.NumberMobPhone')"
                    name="Phone"
                    placeholder="+38(0**)-***-**-**"
                    prepend-icon="mdi-cellphone-android"
                    :error-messages="errors"
                    type="text"
                    v-mask="GlobalMaskPhone"
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
              </form>
            </ValidationObserver>
          </v-card-text>
          <v-card-actions>
            <v-btn text small color="btnCloseCC white--text">{{$t('t.ForgotPassword')}}</v-btn>
            <v-spacer></v-spacer>
            <v-btn
              color="btnCC white--text"
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
        logo: process.env.VUE_APP_LOGO_AUTH,
        type: 'Patient',
        switchName: '',
        phone: '',
        email: '',
        password: '',
      }
    },
    computed: {
      isLogged() {
        return this.$store.getters['auth/isLogged'];
      },
    },
    created() {
      this.switchType();
    },
    methods: {
      async authUser() {
        const valid = await this.$refs.observer.validate('value').then((res) => res);

        if (valid) {
          try {
            switch (this.type) {
              case this.GlobalTypePersonnel:
                try {
                  await this.$store.dispatch('auth/login', {
                    email: this.email,
                    password: this.password,
                  });
                  this.$router.push({name: 'MyProfile'});
                } catch (e) {
                  this.GlobalMixinMessagesError(e.response);
                }
                break;
              case this.GlobalTypePatient:
                break;
            }
          } catch (e) {
            this.GlobalMixinMessagesError(e.response);
          }
        }
      },
      switchType() {
        switch (this.type) {
          case this.GlobalTypePersonnel:
            this.type = this.GlobalTypePatient;
            this.switchName = this.GlobalTypePersonnel;
            break;
          case this.GlobalTypePatient:
            this.type = this.GlobalTypePersonnel;
            this.switchName = this.GlobalTypePatient;
            break;
        }
      }
    }
  }
</script>

<style scoped>
  .switch-type{
    position: absolute;
    right: 20px;
    top: 10px;
  }
</style>
