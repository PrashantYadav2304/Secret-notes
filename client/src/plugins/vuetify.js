import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.indigo, // theme colors
        secondary: colors.red.accent3, // 
        accent: colors.indigo.accent2, // 
      },
    },
  },
});
