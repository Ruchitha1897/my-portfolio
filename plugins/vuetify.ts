import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

// Vuetify is used surgically — the mobile drawer and form fields —
// so the design stays custom rather than default-Material. The theme
// keys map Vuetify's palette onto our token colors.
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: { mdi },
    },
    theme: {
      defaultTheme: 'throne',
      themes: {
        throne: {
          dark: true,
          colors: {
            background: '#0b1120',
            surface: '#0e1526',
            primary: '#d4af37',
            secondary: '#3e8ef7',
            success: '#2fd98a',
            error: '#f26d6d',
          },
        },
      },
    },
    defaults: {
      VTextField: { variant: 'outlined', density: 'comfortable' },
      VTextarea: { variant: 'outlined', density: 'comfortable' },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
