export default {
  data() {
    return {

    }
  },
  methods: {
    GlobalMixinMessagesError(message) {
      const options = {
        title: this.$t('m.Error'),
        icon: 'mdi-alert-outline',
        iconClass: 'v-icon mdi mdi-alert-outline error--text'
      };
      this.flashMessagePlugin('error', message, options );
    },
    GlobalMixinMessagesWarning(message) {
      const options = {
        title: this.$t('m.Warning'),
        icon: 'mdi-exclamation',
        iconClass: 'v-icon mdi mdi-exclamation warning--text'
      };
      this.flashMessagePlugin('warning', message, options );
    },
    GlobalMixinMessagesInfo(message) {
      const options = {
        title: this.$t('m.Info'),
        icon: 'mdi-information',
        iconClass: 'v-icon mdi mdi-information info--text'
      };
      this.flashMessagePlugin('info', message, options );
    },
    GlobalMixinMessagesSuccess(message) {
      const options = {
        title: this.$t('m.Success'),
        icon: 'mdi-check-circle',
        iconClass: 'v-icon mdi mdi-check-circle success--text'
      };
      this.flashMessagePlugin('success', message, options );
    },

    flashMessagePlugin(status, message, options = {}) {
      this.flashMessage.show({
        status: status,
        message: message,
        blockClass: 'flashMessagePlugins',
        ...options,
      })
    }
  },
}
