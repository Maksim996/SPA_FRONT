const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src/')
      }
    }
  },

  "transpileDependencies": [
    "vuetify"
  ],

  pluginOptions: {
    i18n: {
      locale: '(ru)',
      fallbackLocale: 'en',
      localeDir: '(lang1)',
      enableInSFC: true
    }
  }
};
