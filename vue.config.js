const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src/'),
        styles: path.resolve('src/assets/scss')
      },
    },
  //   module: {
  //     rules: [
  //       {
  //         test: /\.(png|jpe?g|gif)$/i,
  //         use: [
  //           {
  //             loader: 'file-loader',
  //           },
  //         ],
  //       },
  //     ],
  //   },
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
