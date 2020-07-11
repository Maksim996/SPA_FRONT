import Vuetify from 'vuetify/lib'
import colors from "vuetify/lib/util/colors"; // Ensure you are using css-loader
// headerCC header custom color

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        headerCC: colors.purple.darken2,
        btnCC: colors.purple.darken2,
        btnCloseCC: colors.grey.darken1,

        // primary: colors.red.darken1, // #E53935
        // secondary: colors.red.lighten4, // #FFCDD2
        // accent: colors.indigo.base, // #3F51B5
      },
      dark: {
        // base: colors.purple.base,
        // primary: colors.blue.lighten3,
      },
    },
  },
});

export default vuetify
