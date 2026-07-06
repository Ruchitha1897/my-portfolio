import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },

  // SSR on Vercel/Netlify; `npm run generate` produces a fully static
  // site for GitHub Pages or any static host.
  ssr: true,

  app: {
    baseURL: '/my-portfolio/',
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Portfolio — Software Engineer',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=' },
        {
          name: 'description',
          content:
            'Software Engineer — Full-Stack Developer, AWS Certified, Cloud Engineer & AI Enthusiast.',
        },
        { name: 'theme-color', content: '#0b1120' },
        { property: 'og:title', content: 'Portfolio — Software Engineer' },
        { property: 'og:type', content: 'website' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },

  css: [
    '@fontsource/cinzel/500.css',
    '@fontsource/cinzel/600.css',
    '@fontsource/manrope/400.css',
    '@fontsource/manrope/600.css',
    '@fontsource/manrope/700.css',
    '@fontsource/manrope/800.css',
    '@fontsource/jetbrains-mono/400.css',
    '@fontsource/jetbrains-mono/600.css',
    '~/styles/main.scss',
  ],

  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    // Vuetify with tree-shaken auto-imports.
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins = config.plugins ?? []
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],

  build: { transpile: ['vuetify'] },

  // Use plain component names (<GlassCard>) instead of path-prefixed ones.
  components: [{ path: '~/components', pathPrefix: false }],

  vite: {
    vue: { template: { transformAssetUrls } },
    css: {
      preprocessorOptions: {
        scss: {
          // Design tokens + mixins available in every component style
          // block as `t.` and `m.` without a per-file @use line.
          additionalData: '@use "~/styles/tokens" as t; @use "~/styles/mixins" as m;',
        },
      },
    },
  },
})
