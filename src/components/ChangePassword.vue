<template>
  <ValidationObserver ref="ChangePassword" v-slot="{ validate, reset }">
    <form>
      <ValidationProvider v-slot="{ errors }" :name="$t('t.CurrentPassword')" rules="required|min:8|max:255">
        <v-text-field
          v-model="сurrentPassword"
          :error-messages="errors"
          :label="$t('t.CurrentPassword')"
          required
          :type="showCurrentPassword ? 'text' : 'password'"
          :append-icon="showCurrentPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showCurrentPassword = !showCurrentPassword"
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" :name="$t('t.NewPassword')" rules="required|min:8|max:255" vid="newPassword">
        <v-text-field
          v-model="newPassword"
          :error-messages="errors"
          :label="$t('t.NewPassword')"
          type="password"
          required
          :type="showNewPassword ? 'text' : 'password'"
          :append-icon="showNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showNewPassword = !showNewPassword"
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" :name="$t('t.ConfirmPassword')"
                          rules="required|min:8|max:255|confirmed:newPassword">
        <v-text-field
          v-model="confirmPassword"
          :error-messages="errors"
          :label="$t('t.ConfirmPassword')"
          type="password"
          required
          :type="showConfirmPassword ? 'text' : 'password'"
          :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showConfirmPassword = !showConfirmPassword"
        ></v-text-field>
      </ValidationProvider>
      <div class="mt-3">
        <v-btn class="mr-4" color="btnCC white--text" @click="savePassword">{{$t('t.Save')}}</v-btn>
        <v-btn @click="clearPassword">{{$t('t.Clear')}}</v-btn>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import api from '@/api'

  export default {
    name: "ChangePassword",
    data() {
      return {
        newPassword: '',
        сurrentPassword: '',
        confirmPassword: '',
        showCurrentPassword: false,
        showNewPassword: false,
        showConfirmPassword: false
      }
    },
    props: {
      path: {
        type: String,
        default: '',
      }
    },

    methods: {
      async savePassword() {
        const valid = await this.$refs.ChangePassword.validate();
        if (valid) {
          try {
            const data = {
              old_password: this.сurrentPassword,
              password: this.newPassword,
              password_confirmation: this.confirmPassword
            };

            const status = await api.patch(this.path, null, data);

            this.GlobalMixinMessagesSuccess( this.$t('m.PasswordChangedSuccessfully') );
            this.clearPassword();
          } catch (e) {
            this.GlobalMixinMessagesError(e.response);
          }
        } else {
          this.GlobalMixinMessagesError(this.$t('m.FormIsNotCompletedCorrectly'));
        }
      },
      clearPassword() {
        this.сurrentPassword = '';
        this.newPassword = '';
        this.confirmPassword = '';
        this.$refs.ChangePassword.reset()
      },
    }
  }
</script>

<style scoped>

</style>
