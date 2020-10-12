import MixinTempleteVeevalidate from '@/mixins/MixinTempleteVeevalidate';

export default {
  data() {
    return {}
  },
  mixins: [
    MixinTempleteVeevalidate
  ],
  methods: {
    GlobalMixinMessagesError(messages) {
      let message = '';

      const options = {
        title: this.$t('m.Error'),
        icon: 'mdi-alert-outline',
        iconClass: 'v-icon mdi mdi-alert-outline error--text',
        type: 'message'
      };

      if (messages !== null) {

            switch (typeof messages) {
              case 'object':
                if(messages.hasOwnProperty('message')) {
                  if (messages.message.hasOwnProperty('errors')) {
                    message = messages.message.errors
                  } else {
                    message = messages.message;
                  }
                } else if(messages.hasOwnProperty('data')) {

                  if (messages.data.hasOwnProperty('errors')) {
                    if (messages.data.hasOwnProperty('errors')) {
                      const arrayE = messages.data.errors;

                      options['type'] = 'html';
                      options['time'] = 5000;

                      message = this.F_ERROR_TEMPLETE( this.GET_ARRAY_DATA_MESSAGES( messages.data.errors ) )

                    } else {

                      message = messages.data.message
                    }
                  }
                }

                switch (messages.status) {
                  case 404:
                    options['destroyed'] = this.$router.go(-1)
                    break;
                }

                break;
              case 'string':
                message = messages;
                break;

        }
      }

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
    GlobalMixinMessagesSuccess(messages) {
      let message = ''

      const options = {
        title: this.$t('m.Success'),
        icon: 'mdi-check-circle',
        iconClass: 'v-icon mdi mdi-check-circle success--text',
        type: 'message'
      };

      if (messages !== null) {

        switch (typeof messages) {
          case 'object':

            message = messages.hasOwnProperty('message') ? messages.message : messages.data.message

            switch (messages.status) {
              case 200:
                options['destroyed'] = this.$router.go(-1);
                break;
            }

           break;

          case 'string':
            message = messages;
            break;
        }
      }
      this.flashMessagePlugin('success', message, options );
    },
    flashMessagePlugin(status, message, options = {}) {
      this.flashMessage.show({
        status: status,
        [options['type']]: message,
        blockClass: 'flashMessagePlugins',
        ...options,
      })
    }
  },
}
