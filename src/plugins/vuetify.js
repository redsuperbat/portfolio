import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        background: colors.red.accent4
      },
      dark: {
        background: colors.red.darken4
      }
    }
  }
})
