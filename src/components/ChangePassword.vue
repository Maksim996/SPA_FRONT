<template>
  <ValidationObserver ref="ChangePassword" v-slot="{ validate, reset }">
    <form>
      <ValidationProvider v-slot="{ errors }" :name="$t('t.CurrentPassword')" rules="required|min:8">
        <v-text-field
          v-model="сurrentPassword"
          :error-messages="errors"
          :label="$t('t.CurrentPassword')"
          type="password"
          required
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" :name="$t('t.NewPassword')" rules="required|min:8" vid="newPassword">
        <v-text-field
          v-model="newPassword"
          :error-messages="errors"
          :label="$t('t.NewPassword')"
          required
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" :name="$t('t.ConfirmPassword')"
                          rules="required|min:8|confirmed:newPassword">
        <v-text-field
          v-model="confirmPassword"
          :error-messages="errors"
          :label="$t('t.ConfirmPassword')"
          required
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
  export default {
    name: "ChangePassword",
    data() {
      return {
        confirmPassword: '',
        newPassword: '',
        сurrentPassword: '',
      }
    },
    props: {
      post: {
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
              сurrentPassword: this.сurrentPassword,
              newPassword: this.newPassword,
              confirmPassword: this.confirmPassword
            };

            await api.post(this.post, data);
            this.GlobalMixinMessagesSuccess( this.$t('m.PasswordChangedSuccessfully') );
          } catch (e) {
            this.GlobalMixinMessagesError(e);
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
